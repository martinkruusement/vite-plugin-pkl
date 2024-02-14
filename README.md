# vite-plugin-pkl

[![npm version](https://badge.fury.io/js/vite-plugin-pkl.svg)](https://www.npmjs.com/package/vite-plugin-pkl)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE.txt)

PKL file plugin for vite.

Uses [@pkl-community/node-packages](https://www.npmjs.com/package/@pkl-community/pkl) package for parsing.
https://github.com/pkl-community/node-packages/issues

> [!WARNING]  
> - This is an experimental plugin and depends on [@pkl-community/node-packages](https://github.com/pkl-community/node-packages).
> - Check https://github.com/pkl-community/node-packages/issues for known issues.

## Install

```shell
npm install vite-plugin-pkl --save-dev
```

Add it in `vite.config.js`:

```js
import pkl from 'vite-plugin-pkl'

export default {
  plugins: [
    pkl(),
    // ...other vite plugins
  ]
}
```

### Options
```js
plugins: [
  pkl({
    debug: true // default: false - Output before/after in Vite console.
  }),
````

## Example

Import like a regular JSON file:

```js
import test from './test.pkl'

console.log(test.key) // 'value'
```

## Known issues
- Some expressions need to be escaped with a backslash: `"Hello, \(bird.name)!"`
- No Windows support yet.
