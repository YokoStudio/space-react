# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
