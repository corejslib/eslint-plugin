# Introduction

Custom `eslint` rules.

## Install

```sh
npm install @corejslib/eslint-plugin
```

## Usage

`eslint.config.js`:

```javascript
import eslintCorejslib from "@corejslib/eslint-plugin";

export default [

    // ...your eslint config

    // @corejslib:recommended
    eslintCorejslib.configs.recommended,
];
```
