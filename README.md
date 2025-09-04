# @yokostudio/space-react

A modern React component library with space-themed UI components built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @yokostudio/space-react
# or
yarn add @yokostudio/space-react
# or
pnpm add @yokostudio/space-react
```

## Usage

### Basic Setup

```tsx
import React from 'react';
import { Button, Input, Badge } from '@yokostudio/space-react';
import '@yokostudio/space-react/styles';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Enter text..." />
      <Badge variant="primary">New</Badge>
    </div>
  );
}
```

### Individual Component Imports

```tsx
import { Button } from '@yokostudio/space-react';
import '@yokostudio/space-react/styles';
```

## Components

- **Badge** - Status indicators and labels
- **Button** - Interactive buttons with various styles
- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox inputs
- **RadioGroup** - Radio button groups
- **Switch** - Toggle switches
- **Slider** - Range sliders
- **Dropdown** - Dropdown menus
- **Field** - Form field wrapper
- **Tab** - Tab navigation
- **Divider** - Visual separators
- **Tooltip** - Contextual tooltips
- **Icon** - SVG icons

## Requirements

- React 18.3.1 or higher
- TypeScript (for type definitions)

## Styling

This library uses Tailwind CSS for styling. Make sure you have Tailwind CSS configured in your project, or import the styles:

```tsx
import '@yokostudio/space-react/styles';
```

## TypeScript Support

This library is built with TypeScript and includes full type definitions.

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a list of changes.