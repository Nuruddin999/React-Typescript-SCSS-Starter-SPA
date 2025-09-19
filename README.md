# ⚡ React + TypeScript + Webpack Starter

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Webpack](https://img.shields.io/badge/Webpack-5-%238DD6F9?logo=webpack)
![SCSS](https://img.shields.io/badge/SCSS-Modules-pink?logo=sass)

A minimal **React + TypeScript + Webpack** starter template with **SCSS Modules** support.

---

## 🚀 Tech Stack
- **React 18**
- **TypeScript**
- **Webpack 5**
- **SCSS Modules** (imported via `styles`)
- **MiniCssExtractPlugin** (for production CSS extraction)

---

## 📂 Project Structure
```
src/
  App.tsx              # main component
  App.module.scss      # styles for App (SCSS modules)
  index.tsx            # application entry point
  global.d.ts          # declaration for .module.scss
  
```
---

## 🎨 Styling

Styling is based on **SCSS Modules**.  
Classes are imported as objects and referenced via `styles`.

**Usage example:**

```tsx
// App.tsx
import React from "react";
import styles from "./App.module.scss";

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.app__title}>⚡ Starter</h1>
  </div>
);

export default App;
