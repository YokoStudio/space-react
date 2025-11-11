#! /bin/bash

# Regular flow:
#
#         ------------------ < ------------------
#       /                                         \ (merge request)
#      /                                           \
#   dev --- :prepare ---> release/x.y.z --- :commit ---> tags/x.y.z
#
# Hotfix flow:
#
#                                                                 ----> dev
#                                              (merge request)  /
#                                                              /
#   tags/x.y.z --- :prepare ---> release/x.y.(z+1) ---- :commit ------> tags/x.y.(z+1)
#

# Usage:
#   Regular release:
#     1. ./version.sh [--version minor|patch|x.y.z]
#     2. ./version.sh --commit
#   Hotfix:
#     1. ./version.sh --hotfix [--version version-to-be-fixed]
#     2. ./version.sh --commit

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is not installed. Please install jq to continue."
    exit 1
fi

REPO_OWNER='yokostudio'
REPO_NAME='space-react'
VERSION_STATE_FILE='.version-state'
GITHUB_API_BASE='https://api.github.com/repos'

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load local configs.
# Following variables can only be read from .versionrc or global environment:
#  - $GITHUB_TOKEN
#  - $LINK_OPENER

DIR=$(pwd)
VRC="$DIR/.versionrc"

if [[ -f "$VRC" ]]; then
  source $VRC
fi

###
# Utility functions
###
# -- Helpers
escape_version () {
  echo $1 | sed 's/\./\\./g'
}

# -- GitHub APIs
get_project_url () {
  declare project
  declare url

  project=$(curl -s --header "Authorization: token $GITHUB_TOKEN" "$GITHUB_API_BASE/$REPO_OWNER/$REPO_NAME")

  if [[ $? != 0 ]]; then
    echo $project
    return $?
  fi

  # Check if we got a valid response
  declare -r repo_name=$(jq -r '.name' <<< $project)
  if [[ $repo_name != $REPO_NAME ]]; then
    echo $project
    return 1
  fi

  project_url=$(jq -r '.html_url' <<< $project)

}

get_live_version () {

  ##
  # Important Note: Live version is not necessarily the latest tag!
  # We assume the most recent successfully executed workflow run on tags
  # to represent the live version. It works on rollbacks as well.
  ##

  declare list
  declare last

  # Get the latest successful workflow run for tags
  list=$(curl -s --header "Authorization: token $GITHUB_TOKEN" "$GITHUB_API_BASE/$REPO_OWNER/$REPO_NAME/actions/runs?status=success&per_page=1")

  if [[ $? != 0 ]]; then
    return $?
  fi

  # Extract the tag from the workflow run (if it's a tag-triggered run)
  declare -r head_branch=$(jq -r '.workflow_runs[0].head_branch' <<< $list)
  if [[ $head_branch =~ ^v?[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    live_version=$head_branch
  else
    # Fallback to latest tag if no successful tag-based workflow found
    live_version=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
  fi

}

get_workflow_url_for_tag () {
  declare list
  declare url
  list=$(curl -s --header "Authorization: token $GITHUB_TOKEN" "$GITHUB_API_BASE/$REPO_OWNER/$REPO_NAME/actions/runs?head_branch=$1&per_page=1")
  if [[ $? != 0 ]]; then
    return $?
  fi
  url=$(jq -r '.workflow_runs[0].html_url' <<< $list)
  echo $url
  return 0
}

create_pull_request () {
  declare -r source_branch=$1
  declare -r target_branch=$2
  declare pull_request
  declare pull_request_id
  declare title="Release $source_branch to $target_branch"
  declare body="This is an automated pull request for releasing version $source_branch to $target_branch."
  
  pull_request=$(curl -s --request POST \
    --header "Authorization: token $GITHUB_TOKEN" \
    --header "Accept: application/vnd.github.v3+json" \
    --data "{\"title\":\"$title\",\"body\":\"$body\",\"head\":\"$source_branch\",\"base\":\"$target_branch\"}" \
    "$GITHUB_API_BASE/$REPO_OWNER/$REPO_NAME/pulls")

  pull_request_id=$(jq -r '.number' <<< $pull_request)

  if [[ 'null' == "$pull_request_id" ]]; then
    declare -r message=$(jq -r '.message' <<< $pull_request)
    if [[ $message == *"already exists"* ]]; then
      echo -e "[NOOP] Pull request already exists.\n"
      return 0
    else
      echo -e "[ERR] Unable to create the pull request with $target_branch branch! Got:\n$pull_request"
      return 1
    fi
  fi
  echo -e "[OK] Created pull request with $target_branch."
  echo -e "     Visit following URL to review it:"
  echo -e "     $project_url/pull/$pull_request_id\n"
  return 0
}

update_release_note () {
  declare -r version=$1
  declare -r escaped_version=$(escape_version $version)
  declare -r changelog=$(awk "/^## \[$escaped_version\]/{flag=1; next} /^## \[/{flag=0} flag" CHANGELOG.md)
  declare -r response=$(curl -s --request POST \
    --header "Authorization: token $GITHUB_TOKEN" \
    --header "Accept: application/vnd.github.v3+json" \
    --data "{\"tag_name\":\"$version\",\"name\":\"$version\",\"body\":\"$changelog\",\"draft\":false,\"prerelease\":false}" \
    "$GITHUB_API_BASE/$REPO_OWNER/$REPO_NAME/releases")
  declare -r tag_name=$(jq -r '.tag_name' <<< $response)

  if [[ $tag_name != $version ]]; then
    declare -r message=$(jq -r '.message' <<< $response)
    if [[ $message == *"already exists"* ]]; then
      echo -e "[WARN] Release already exists! Skipping...\n"
      return 0
    fi
    echo -e "[ERR] Unable to update release notes. Got\n"
    echo "$response"
    echo "\n"
    return 1
  fi

  return 0
}

# -- Version Handlers
bump () {
  declare -a parts
  IFS='.' read -r -a parts <<< "$1"

  declare -r major=${parts[0]}
  declare -r minor=${parts[1]}
  declare -r patch=${parts[2]}

  case "$2" in
    "major")  echo $(($major+1)).0.0 ;;
    "minor")  echo ${major}.$(($minor+1)).0 ;;
    "patch")  echo ${major}.${minor}.$(($patch+1)) ;;
    *)
      echo $2
      return
      ;;
  esac
}

apply_version_to_repo () {
  declare escaped_version=$(escape_version $1)
  declare version_date=$(date +%F)
  # Remove 'v' prefix if present for package.json version
  declare clean_version=$(echo $escaped_version | sed 's/^v//')
  perl -i -pe 's/"version"\: ".*"/"version"\: "'"$clean_version"'"/g' package.json
  perl -i -pe 's/## \[Unreleased\]/## \[Unreleased\]\n\n## \['"$escaped_version"'\](https:\/\/github\.com\/'"$REPO_OWNER"'\/'"$REPO_NAME"'\/releases\/tag\/'"$escaped_version"') <sub>\/ '"$version_date"'<\/sub>/g' CHANGELOG.md
}

get_package_version () {
  declare -r version=$(cat package.json |  jq -r ".version")
  echo $version
}

tag_exists () {
  git rev-parse "$1^{tag}" &> /dev/null
  return $?
}

recover_commit_progress() {
    declare -r version=$1
    declare -i progress=0
    echo -en " Validating package version: ... "
    declare -r -i uncommited_package=$(git status --porcelain | grep -x -c ' M package.json')

    if [[ $uncommited_package == 1 ]]; then
      echo -e "\r Validating package version: [FAILED] Package version is not committed!"
      return -1
    fi

    declare -r package_version=$(get_package_version)

    if [[ $package_version != $version ]]; then
      echo -e "\r Validating package version: [FAILED] There's a mismatch between release branch and the package version."
      return -1
    fi
    echo -e "\r Validating package version: $package_version [OK]"
    progress=3

    echo -en " Checking remote branch to see if changes are pushed: ... "
    # Check if commits were pushed
    declare -r last_commit=$(git rev-parse HEAD)
    declare -r remote_branch=$(git rev-parse --abbrev-ref --symbolic-full-name @{u})
    declare -r -i pushed=$(git branch -r --contains $last_commit |  grep -c "^\s*$remote_branch$")
    if [[ $pushed == 1 ]]; then
      echo -e "\r Checking remote branch to see if changes are pushed: [OK]"
      progress=4
    else
      echo -e "\r Checking remote branch to see if changes are pushed: [PENDING]"
    fi

    # See if already tagged
    echo -en " Checking tags: ... "

    # Check for tag with 'v' prefix since tags are created with 'v'
    tag_exists "v$version"
    if (( $? == 0 )); then
      echo -e "\r Checking tags: v$version is already tagged. [OK] "
      progress=5
    else
      echo -e "\r Checking tags: $version is untagged. [PENDING] "
    fi

    echo -e "\r Push the tag to remote: [PENDING] "
    echo -e "\r Update release notes: [PENDING] "
    echo -e "\r Create merge request to dev: [PENDING] "
    return $progress
}


###
#
# Versioning Logic
#
##

for arg in "$@"; do
  shift
  case "$arg" in
    '--fix' | '--hotfix') set -- "$@" "-f" ;;
    '--commit')           set -- "$@" "-c" ;;
    '--version')          set -- "$@" "-v" ;;
    *)                    set -- "$@" "$arg"
  esac
done

declare project_url
declare live_version

declare is_committing=false
declare is_hotfix=false
declare version_arg='minor'

while getopts 'fcv:' flag; do
  case "${flag}" in
    f) is_hotfix=true ;;
    c) is_committing=true ;;
    v) version_arg="${OPTARG}" ;;
    *) exit 1 ;;
  esac
done

if [[ $is_committing == true && $is_hotfix == true ]]; then
  echo "[WARN] Ignroing hotifx flag: Hotfix flag can only be used when preparing a version initially."
  is_hotfix=false
fi

git fetch --all --tags

readonly is_committing
readonly is_hotfix
declare -r -a latest_tags=($(git tag -l --sort=-creatordate | head -n 10))

version_in_progress=''
if [[ -f "$VERSION_STATE_FILE" ]]; then
  declare version_state
  version_state=$(<$VERSION_STATE_FILE)
  declare -a version_state_parts
  IFS=':' read -r -a version_state_parts <<< "$version_state"
  version_in_progress=${version_state_parts[1]}
fi

get_project_url
if (( $? != 0 )); then
  echo "[Err] Unable to fetch project info!"
  exit 1
fi


if [[ $is_committing == true ]]; then

  ##
  # This is the second stage of versioning.
  ##

  declare -i progress=1
  # $progress goes from 1 to 6.
  # I helps making commit command resumable by allowing to skip
  # some of the stpes, if the context can be recovered.
  # We have to handle the stages in a while-loop due to lack of
  # support for goto and case-statement fallthrough in bash < 4.0

  declare current_branch=$(git branch --show-current)
  declare release_branch="release/$version_in_progress"

  # 1. Validate the version is progress. Try to recover the context otherwise.
  if [[ -z $version_in_progress ]]; then
    echo -e "[WARN] Missing version-state file. Trying to recover context...\n"
    declare -a branch_parts
    IFS='/' read -r -a branch_parts <<< "$current_branch"
    declare branch_version=${branch_parts[1]}
    if [[ -z $branch_version ]]; then
      echo "[ERR] Unable to detect current version"
      exit 1
    fi
    echo -e "Recovering context for $branch_version ...\n ---"

    version_in_progress=$branch_version
    recover_commit_progress $version_in_progress
    progress=$?

    echo -e " ---\n"

    if [[ $progress -lt 1 ]]; then
      echo "[ERR] Unable to recover context"
      exit 1
    fi

    read -r -p "Should we process the pending stages? [y/n] " response
    if [[ "$response" =~ ^([yY])$ || -z $response ]]
    then
       release_branch="release/$version_in_progress"
    else
      echo "[Operation canceled by user]"
      exit 1
    fi
  fi

  while [[ $progress -lt 8 ]]; do
    case $progress in
      1)
        if [[ $current_branch != $release_branch ]]; then
          echo "[ERR] Release branch mismatch! Expected to be on $release_branch. (current: $current_branch)"
          exit 1
        fi
        ;;
      2)
        echo -e "\nCommitting $version_in_progress ..."
        rm $VERSION_STATE_FILE
        git add $VERSION_STATE_FILE CHANGELOG.md package.json
        git commit -m "Bump version to $version_in_progress"
        ;;
      3)
        echo -e "\nPushing $release_branch branch to remote ..."
        git push origin $release_branch
        if (( $? != 0 )); then
          echo " [Err] Unable to push changes to remote!"
          exit 1
        fi
        ;;
      4)
        echo -e "\nTagging $version_in_progress ..."
        git tag -a "v$version_in_progress" -m "v$version_in_progress"
        ;;
      5)
        echo -e "\nPushing v$version_in_progress to remote ..."
        git push origin "v$version_in_progress"
        if (( $? != 0 )); then
          echo " [Err] Unable to push v$version_in_progress tag to remote!"
          exit 1
        fi
        ;;
      6)
        echo -e "\nUpdate release notes for v$version_in_progress ..."
        update_release_note "v$version_in_progress"
        if (( $? != 0 )); then
          exit 1
        fi
        ;;
      7)
        echo -e "\nCreating pull request from $release_branch to dev..."
        create_pull_request $release_branch dev
        if (( $? != 0 )); then
          exit 1
        fi
        ;;
    esac
    progress=$(($progress+1))
  done

  declare -r workflow_url=$(get_workflow_url_for_tag "v$version_in_progress")

  if [[ ! -z $workflow_url && $workflow_url != 'null' ]]; then
    if [[ ! -z $LINK_OPENER ]]; then
      echo -e "Opening workflow in browser:\n"
      echo "    $workflow_url"
      $LINK_OPENER $workflow_url
    else
      echo -e "Visit following URL to review the workflow status:\n"
      echo -e "    $workflow_url\n"
    fi
  else
    echo "[WARN] Unable to extract the workflow URL."
  fi

  echo -e "\nAll Done!\n"
  exit 0
fi


get_live_version
if [[ $? != 0 || -z $live_version ]]; then
  echo "[Warn] Unable to determine live version!"
fi

if [[ $is_hotfix == false ]]; then
  echo "Preparing a new version..."

  # 1. Make sure we are on dev, and then pull the latest changes
  echo -e "\nFetching latest changes ..."
  git checkout dev

  if ! git pull; then
    echo -e "\n${RED}[Err] Failed to pull from dev branch.\n${NC}"
    exit 1
  fi

  # 2. Prompt unreleased change
  echo -e "\nChanges in this version:"
  sed -n '/## \[Unreleased\]/,/## \[/p' CHANGELOG.md | sed '1d; $ d'

  # 3. Ask developer to confirm the new version (minor bump by default: x.(y+1).0)
  last_tag=${latest_tags[0]}
  # Strip 'v' prefix if present for version bumping
  last_tag_clean=$(echo $last_tag | sed 's/^v//')
  next_version=$(bump $last_tag_clean $version_arg)
  echo ""
  echo "> What should be the next version?"
  echo "  Latest tag: $last_tag"
  echo "  Default: $next_version (Press Enter)"
  read user_version
  if [[ ! -z $user_version ]]; then
    next_version=$user_version
  fi
  echo "Using $next_version as next version."

  # 4. Create the release branch and apply the new version number to repo
  declare -r release_branch="release/$next_version"
  echo -e "\nChecking out to $release_branch ..."
  git checkout -b $release_branch
  if (( $? != 0 )); then
    echo "[Err] Unable to prepare the new version!"
    exit 1
  fi
  apply_version_to_repo $next_version
  git add CHANGELOG.md

  # 5. Track the state of versioning flow

  # VERSION_STATE_FILE is a temporary file to track the state for versioning flow
  # It will be removed once the version is committed, but helps the release state
  # to persist from machine to machine, allowing for collaboration and hand-off for
  # complex releases.
  echo "VERSION_IN_PROGRESS:$next_version" > $VERSION_STATE_FILE
  git add $VERSION_STATE_FILE

  # 6. Commit the changes to the repo
  echo -e "\nCommitting intermediate changes to the repo..."
  git commit -m "Preparing version $next_version"

  echo -e "\nPushing intermediate changes to remote...\n"
  git push --set-upstream origin $release_branch

  if (( $? != 0 )); then
    echo -e "[Err] Unable to push changes to remote!"
    echo -e "      Try again when the issue is resolved:\n"
    echo -e "          git push --set-upstream origin $release_branch\n\n"
    exit 1
  fi

  # 7. Prompt about the next steps
  compare_url="$project_url/-/compare/$live_version...$release_branch"
  echo -e "\n====\n"
  echo "New version has been prepared."
  if [[ ! -z $LINK_OPENER ]]; then
    echo "Opening $compare_url"
    $LINK_OPENER $compare_url
    echo " 1) Verify the changes of the new release."
  else
    echo " 1) Visit $compare_url to review the changes of the new release."
  fi
  echo -e " 2) If you need to make some last minute changes, this is your chance. Don't forget to commit them."
  echo -e " 3) Once you've confirmed the changes in the release, run: \n    $0 --commit"

else
  echo "Preparing a hotfix..."

  declare release_branch=''
  declare base_version=''
  declare fix_version=''

  # 1. Select base version to patch
  if [[ $version_arg =~ ^([[:alnum:]]+\.){2}[[:alnum:]-]+$ ]]; then
    # 1.b Check if a version is already provided
    base_version=$version_arg
  else
    # 1.a Fetch and display all tags (Annotate the live version)
    echo "These are the latest tags:"
    declare tag_index=0
    if [[ -z $live_version ]]; then
      echo "[WARN] Unable to detect the live version"
    fi
    for tag_index in "${!latest_tags[@]}"
    do
      printf " %i) %s" $tag_index ${latest_tags[$tag_index]}
      if [[ ${latest_tags[$tag_index]} == $live_version ]]; then
        printf " (live, possibly!)"
      fi
      printf "\n"
    done

    # 2. Ask developer to select the tag he or she wants to fix
    read -r -p "Which version you want to fix? [0-9, x.y.z, empty for live version] " response

    if [[ -z $response ]]; then
      base_version=$live_version
    elif [[ "$response" =~ ^([0-9])$ ]]; then
      base_version=${latest_tags[$response]}
    else
      base_version=$response
    fi

    if [[ -z $base_version ]]; then
      echo "[ERR] Base version in not unspecified."
      exit 1
    fi
  fi

  echo -e "\n---\nPatching $base_version ...\n---\n"

  # 3. Create the release branch: release/x.y.(z+1)
  echo -e "Validating patch version... "
  # Strip 'v' prefix if present for version bumping
  base_version_clean=$(echo $base_version | sed 's/^v//')
  next_version=$(bump $base_version_clean patch)
  while true; do
    # Check for tag with 'v' prefix since tags are created with 'v'
    tag_exists "v$next_version"
    if (( $? == 0 )); then
      echo -e "[$next_version]: Already exists."
      next_version=$(bump $next_version patch)
    else
      echo -e "Using $next_version as the fix version."
      break;
    fi
  done

  release_branch="release/$next_version"

  echo -e "\nPreparing hotifx branch for $base_version (-> $next_version) ..."
  git checkout tags/$base_version -b $release_branch
  if (( $? != 0 )); then
    echo "[ERR] Unable to create $release_branch branch"
    exit 1
  fi

  # 4. Track the state
  apply_version_to_repo $next_version
  echo "VERSION_IN_PROGRESS:$next_version" > $VERSION_STATE_FILE
  git add $VERSION_STATE_FILE

  # 5. Commit the changes
  echo -e "\nCommitting intermediate changes to the repo..."
  git commit -m "Preparing hotifx $next_version"

  echo -e "\nPushing intermediate changes to remote...\n"
  git push --set-upstream origin $release_branch

  if (( $? != 0 )); then
    echo -e "[Err] Unable to push changes to remote!"
    echo -e "      Try again when the issue is resolved:\n"
    echo -e "          git push --set-upstream origin $release_branch\n\n"
    exit 1
  fi

  # 6. Prompt developer about the next steps
  compare_url="$project_url/-/compare/$base_version...$release_branch"
  echo -e "\n====\n"
  echo "Hotfix branch has been prepared. Now you should:"
  echo -e " 1) Fix the issue, commit, and push the changes."
  echo -e " 2) Review the changesto make sure everything is in order:"
  echo -e "        $compare_url"
  echo -e " 3) Update the changelog."
  echo -e " 4) Once you've confirmed the fix, run:\n    $0 --commit"
fi
