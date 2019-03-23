# Performance

You may think using react-native in the browser is not performant, but actually [Nicolas Gallagher][nic] is a genius. **react-native-web** is a highly optimized framework that removes any unused modules with a set of complex babel presets and webpack (this is partly what Expo helps to simplify).

There are a number of performance tools at your disposal that will not only optimize your web app, but also improve the performance of your native app!

## 📦 What Makes My App Large?

Expo automatically generates a `web-build/report.html` with Webpack Bundle Analyzer. A plugin that will help you visualize the size of your static bundles. You can use this to identify abnormally large things that you may not need (like this description).

## ⚡️ Lighthouse

You can test your project with the _Audit_ tab in Chrome, or with the [**Lighthouse CLI**][lighthouse].

```sh
lighthouse <url> --view
```

[lighthouse]: https://github.com/GoogleChrome/lighthouse#using-the-node-cli
[nic]: http://nicolasgallagher.com/
