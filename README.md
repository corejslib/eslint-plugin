<!-- !!! DO NOT EDIT, THIS FILE IS GENERATED AUTOMATICALLY !!!  -->

> \[!NOTE]
> Please, see the full project documentation here: <https://corejslib.github.io/eslint-plugin/>

# Introduction

Custom `eslint` rules.

## Install

```sh
npm install @corejslib/eslint-plugin
```

## Usage

`eslint.config.js`:

```javascript
import eslintSoftvisio from "@corejslib/eslint-plugin";

export default [

    // ...your eslint config

    // @corejslib:recommended
    eslintSoftvisio.configs.recommended,
];
```
