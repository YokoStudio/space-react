# 🌌 Yoko Design System — Space React Components

**Yoko** is a modern, scalable, and highly customizable design system crafted by **Yoko Studio**. This repository contains the React implementation of the Yoko Design System, specifically the `@yokostudio/space-react` package. It features space-themed UI components built with **TypeScript** and **Tailwind CSS**, designed to help developers build consistent and high-quality user interfaces with ease.

<img width="1920" height="1080" alt="cover" src="https://github.com/user-attachments/assets/18d92902-c979-4e03-b265-4994c5ce9275" />

 
## 🔗 Quick Links
- **Official Website:** [space.yoko.studio](https://space.yoko.studio)
- **Interactive Storybook:** [yokostudio.github.io/space-react](https://yokostudio.github.io/space-react/)

---

## 🚀 Key Features

- **TypeScript First:** Built with full TypeScript support for a better developer experience and type safety.
- **Highly Customizable:** Easily themeable to match your brand's visual identity using Tailwind CSS.
- **Modular Architecture:** Import only the components you need to keep your bundle size small.
- **Accessibility Focused:** Components are built following WAI-ARIA patterns (via Radix UI) to ensure inclusivity.
- **Modern UI/UX:** Clean, professional, and space-themed aesthetics.

## 📦 Installation

You can install the package via your preferred package manager:

```bash
# Using npm
npm install @yokostudio/space-react

# Using yarn
yarn add @yokostudio/space-react

# Using pnpm
pnpm add @yokostudio/space-react

### Requirements

* **React** >= 18.0.0
* **React DOM** >= 18.0.0
* **Tailwind CSS** (Optional, but recommended for custom styling)

---

## 🛠 Usage

### Basic Setup

Ensure you import the global styles in your main entry file (e.g., `main.tsx` or `App.tsx`):

```jsx
import React from 'react';
import { Button, Input, Badge } from '@yokostudio/space-react';

// Import the package styles
import '@yokostudio/space-react/style';

function App() {
  return (
    <div className="App">
      <Badge variant="primary">New Feature</Badge>
      <h1>Welcome to Yoko Space</h1>
      <Input placeholder="Search components..." />
      <Button onClick={() => console.log('Exploring Space!')}>
        Launch Space
      </Button>
    </div>
  );
}

```

---

## 🎨 Components

The library includes a growing set of accessible and reusable components:

* **Forms:** `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Field`.
* **Navigation & Layout:** `Tab`, `Dropdown`, `Divider`.
* **Feedback & Data:** `Badge`, `Button`, `Tooltip`.

Every component is fully typed and supports standard ARIA attributes.

---

## 🤝 Contributing

We welcome contributions! If you'd like to help improve Yoko, please follow these steps:

1. **Fork** the repository.
2. Create a new **branch** (`git checkout -b feature/AmazingFeature`).
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

Refer to our [CHANGELOG.md](https://www.google.com/search?q=./CHANGELOG.md) for updates and version history.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

---

<p align="center">
Developed with ❤️ by <b>Yoko Studio</b>
</p>

```

```
