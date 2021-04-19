# 🥞 Candy UIkit

[![Version](https://img.shields.io/npm/v/@candyswap-libs/uikit)](https://www.npmjs.com/package/@candyswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@candyswap-libs/uikit)](https://www.npmjs.com/package/@candyswap-libs/uikit)

Candy UIkit is a set of React components and hooks used to build pages on Candy's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @candyswap-libs/uikit`

## Setup

### Theme

Before using Candy UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@candyswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@candyswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://github.com/Candy-Shop-Swap/candy-uikit.git)
