# Using Expo for web in a `expo init` project

> This is a **preview** and subject to breaking changes. Do not use this in production yet.

- Install the latest expo-cli `npm i -g expo-cli`
- Add dependencies:
  - [react native web][rnw]: `yarn add react-native-web react-dom`
  - (_preview_) Use the next version of Expo: `yarn add expo@next`
- Add `"web"` to `platforms` in the [**`app.json`**](./app.json):
  ```diff
  "platforms": [
      "android",
      "ios",
  +    "web"
  ]
  ```
- Start with `expo start` then press `w`
  - or better `expo start --web --non-interactive`

**Extra Credit**

- To use **`react-navigation`** use: `yarn add react-navigation@3.5.0-alpha.0`
- Build with `expo build:web`
  - optionally you can use the `--no-polyfill` flag to get `100kb` back
- Customizations to the PWA and `index.html` can be done through the `app.json`. Everything is undocumented at the moment, so check the source code here: [@expo/webpack-config](https://github.com/expo/expo-cli/tree/master/packages/webpack-config/webpack)
  ```ts
  {
      "expo": {
          ...
          "web": {
              // Add web stuff here.

              // twitter card example
              "twitter": {
                "card": "summary",
                "title": "Expo Web",
                "description": "examples of using Expo in the browser",
                "site": "https://expo.io",
                "image": "//url-to-image",
                "creator": "expo bacon"
              },

              // additional meta
              "metatags": {
                "author": "anthony kiedis",

                // meta defaults override
                "format-detection": "telephone=yes"
              },

              // turn off minify html (default true)
              "minifyHTML": false
          }
      }
  }
  ```

[rnw]: https://github.com/necolas/react-native-web/
