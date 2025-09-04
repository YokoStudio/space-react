# NPM Publish Workflow Setup

This document explains how to set up and use the GitHub Actions workflow for publishing the `@yokostudio/space-react` package to npm.

## Required GitHub Secrets

You need to configure the following secrets in your GitHub repository:

### 1. NPM_TOKEN

This is your npm authentication token for publishing packages.

**How to create an npm token:**
1. Go to [npmjs.com](https://www.npmjs.com) and log in
2. Click on your profile picture → "Access Tokens"
3. Click "Generate New Token"
4. Select "Automation" token type (for CI/CD)
5. Copy the generated token

**How to add the secret to GitHub:**
1. Go to your repository on GitHub
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Your npm token (starts with `npm_`)

### 2. GITHUB_TOKEN (Automatic)

This token is automatically provided by GitHub Actions and doesn't need to be configured manually.

## GitHub Environments

The workflow uses two environments for different types of releases:

### Production Environment
- Used for normal releases
- Requires approval (optional, can be configured in repository settings)
- Publishes to the `latest` tag on npm

### Beta Environment
- Used for beta/pre-release versions
- Publishes to the `beta` tag on npm

**To set up environments:**
1. Go to your repository on GitHub
2. Click "Settings" → "Environments"
3. Create two environments: `production` and `beta`
4. Optionally configure protection rules (required reviewers, etc.)

## How to Use the Workflow

### Automatic Publishing (Recommended)

The workflow automatically triggers in the following scenarios:

#### 1. Version Tags
When you push version tags:

**Normal Release**
```bash
# Create and push a version tag
git tag release/1.0.0
git push origin release/1.0.0
```

**Beta Release**
```bash
# Create and push a beta tag
git tag release/1.0.0-beta.1
git push origin release/1.0.0-beta.1
```

### Manual Publishing

You can also trigger the workflow manually:

1. Go to your repository on GitHub
2. Click "Actions" → "NPM Publish"
3. Click "Run workflow"
4. Select the publish type (normal or beta)
5. Optionally specify a version
6. Click "Run workflow"

## Workflow Features

### Trigger Conditions
The workflow automatically triggers on:
1. **Tag pushes**: `v*` patterns (e.g., `v1.0.0`, `v1.0.0-beta.1`)
2. **Branch pushes**: `release/*` and `hotfix/*` patterns
3. **Manual dispatch**: Manual workflow execution with custom parameters

### Automatic Version Detection
- **Tag pushes**: Extracts version from the tag name
- **Branch pushes**: Uses the version from package.json
- **Manual dispatch**: Uses the version from package.json or the specified version

### Build Process
- Installs dependencies with yarn
- Runs linting checks
- Builds the library using `yarn build:lib`
- Uploads build artifacts for use in publish jobs

### Publishing Logic
- **Normal releases**: Published to the `latest` tag
- **Beta releases**: Published to the `beta` tag
- Automatically creates GitHub releases with proper documentation

### Safety Features
- Separate environments for production and beta releases
- Build artifacts are shared between jobs
- Comprehensive error handling and notifications

## Branch and Version Naming Conventions

### Branch Patterns

The workflow supports the following branch patterns:

#### Release Branches
- `release/1.0.0` → Publishes version from package.json as normal release
- `release/2.1.0` → Publishes version from package.json as normal release

#### Hotfix Branches
- `hotfix/1.0.1` → Publishes version from package.json as normal release
- `hotfix/2.1.1` → Publishes version from package.json as normal release

### Version Formats

The workflow supports the following version formats:

### Normal Releases
- `v1.0.0` → Published as `1.0.0` to `latest` tag
- `v1.2.3` → Published as `1.2.3` to `latest` tag

### Beta Releases
- `v1.0.0-beta.1` → Published as `1.0.0-beta.1` to `beta` tag
- `v1.0.0-alpha.1` → Published as `1.0.0-alpha.1` to `beta` tag
- `v1.0.0-rc.1` → Published as `1.0.0-rc.1` to `beta` tag

## Installation Commands

After publishing, users can install the package using:

### Latest Version (Normal Release)
```bash
npm install @yokostudio/space-react
# or
npm install @yokostudio/space-react@latest
```

### Specific Version
```bash
npm install @yokostudio/space-react@1.0.0
```

### Beta Version
```bash
npm install @yokostudio/space-react@beta
# or
npm install @yokostudio/space-react@1.0.0-beta.1
```

## Troubleshooting

### Common Issues

1. **Authentication Error**
   - Verify that `NPM_TOKEN` secret is correctly set
   - Ensure the token has the correct permissions

2. **Version Already Exists**
   - Check if the version has already been published
   - Use a different version number

3. **Build Failures**
   - Check the build logs in the GitHub Actions tab
   - Ensure all dependencies are properly configured

4. **Environment Protection Rules**
   - If using environment protection, ensure required reviewers approve the deployment

### Getting Help

- Check the GitHub Actions logs for detailed error messages
- Verify your npm token permissions
- Ensure your package.json is properly configured for publishing

## Security Notes

- Never commit your npm token to the repository
- Use environment-specific tokens when possible
- Regularly rotate your npm tokens
- Consider using npm organizations for better access control
