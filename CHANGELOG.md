# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Refactored the Input component's clear button and action button logic for improved clarity and maintainability.
- The presence and display of the clear button and loading spinner (action box) are now handled more consistently.
- Ensured accessibility and correct focus behavior when clearing input.
- Improved controlled and uncontrolled mode handling when using the clear button.
- Improved the Input component's internal value state management and overall event handling.

### Added
- Added support for more robust clear button action: input is properly cleared for both controlled and uncontrolled modes with associated events triggered for form libraries.
- Input action area (clear button and loading spinner) is now rendered only when relevant, preventing extra DOM and unwanted spacing.
- Enhanced accessibility for the clear button (aria-label).

### Fixed
- Fixed unwanted spacing in the Input component when neither a prepend icon, clear button, nor loading spinner is present.

### Removed
- Removed Tailwind CSS’s global preflight styles from the library build to prevent unwanted overrides of consuming projects’ base styles.
- Removed default font family from the UI kit (`lib/index.css`). Font inheritance is now determined entirely by the consuming project unless the CSS variable `--space-font-family` is explicitly set. This prevents the UI kit from overriding the consuming project's global font family.


## [0.1.2](https://github.com/yokostudio/space-react/releases/tag/0.1.2) <sub>/ 2025-09-18</sub>

## [v0.1.1](https://github.com/yokostudio/space-react/releases/tag/v0.1.1) <sub>/ 2025-09-18</sub>
### Fixed
- Fixed deployment Github Action.

## [0.1.0](https://github.com/yokostudio/space-react/releases/tag/0.1.0) <sub>/ 2025-09-17</sub>
### Fixed
- Fixed ReactCurrentDispatcher error by properly externalizing all dependencies.
- Fixed `useLayoutEffect` null reference error by externalizing `@floating-ui/react` and `framer-motion`.
- Fixed CSS import path from `/styles` to `/style` for consistency.
- Fixed TypeScript module resolution errors for CSS imports.
- Improved bundle size and dependency management.

### Changed
- Updated peer dependencies to include all required packages:
  - `react` >= 17.0.0
  - `react-dom` >= 17.0.0
  - `@headlessui/react` ^2.0.0
  - `@floating-ui/react` ^0.27.0
  - `framer-motion` ^12.0.0
- Updated package exports to properly handle CSS imports with TypeScript support.
- Updated documentation to reflect peer dependencies and correct import paths.

## [0.1.0-beta.5](https://github.com/yokostudio/space-react/releases/tag/0.1.0-beta.5) <sub>/ 2025-09-16</sub>
### Fixed
- Fix components types deceleration.

## [0.1.0-beta.4](https://github.com/yokostudio/space-react/releases/tag/0.1.0-beta.4) <sub>/ 2025-09-06</sub>
### Added
- Button component added.
- Input component added.
- Textarea component added.
- Field component added.
- Dropdown component added.
- Divider component added.
- Checkbox component added.
- Badge component added.
- RadioGroup component added.
- Slider component added.
- Spinner component added.
- Tab component added.
- Tooltip component added.
