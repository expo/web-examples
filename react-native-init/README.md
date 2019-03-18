# Using Expo for web in a `react-native init` project

> This is a **preview** and subject to breaking changes. Do not use this in production yet.

Here is how to use [_Unimodules_][uni] in a project bootstrapped with [`react-native-cli`][rncli]

- Add dependencies:
  - [react native web][rnw]: `yarn add react-native-web react-dom`
  - Expo for web: `yarn add -D babel-preset-expo @expo/webpack-config`
  - Webpack: `yarn add -D webpack-dev-server webpack-cli`
- Change the babel preset in [**`babel.config.js`**](./babel.config.js)
  ```diff
  module.exports = {
  -   presets: ['module:metro-react-native-babel-preset']
  +   presets: ['babel-preset-expo']
  };
  ```
- Create [**`index.web.js`**](./index.web.js)
  ```ts
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  ReactDOM.render(<App />, document.getElementById('main'));
  ```
- Add the _start_ script to your [**`package.json`**](./package.json):
  ```diff
  "scripts": {
      "start": "node node_modules/react-native/local-cli/cli.js start",
  +    "web": "webpack-dev-server -d --config node_modules/@expo/webpack-config --open"
  }
  ```
  - **This will do the following:**
  - Run in development mode (`-d`)
  - using the config [`@expo/webpack-config`][exwebpack] (`--config`)
  - and open in Chrome (`--open`)
- Run `yarn web` 😁
- Now you can install Unimodules!
  - Core dependencies `yarn add @unimodules/core @unimodules/react-native-adapter`
  - Expo modules! 💙 `yarn add expo-camera`

[rnw]: https://github.com/necolas/react-native-web
[uni]: https://github.com/unimodules
[rncli]: https://www.npmjs.com/package/react-native-cli
[exwebpack]: https://www.npmjs.com/package/@expo/webpack-config
