# Expo Web only Examples

This repo is now deprecated, **please see [expo/examples](https://github.com/expo/examples) instead.**

For guides and information on Expo web see the [Expo docs](https://docs.expo.io/) and this [Gitbook about tips and tricks](https://baconbrix.gitbook.io/react-native-web/)

## Getting Started with Expo Web

Install the CLI and make a new universal project.

```sh
npm install -g expo-cli

expo init myProject 
```

Now enter the project and start it!

```sh
cd myProject

expo start --web
```

Now you can build and deploy the website.

```sh
expo build:web

npx netlify deploy --dir web-build
```

That's it, you just created your first Expo website!! See some [examples](https://github.com/expo/examples) or learn more in the [Expo Documentation](https://docs.expo.io/versions/v36.0.0/tutorial/planning).
