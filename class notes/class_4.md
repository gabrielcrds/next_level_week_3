## Class \#4 notes

1. Using React to develop mobile apps we can use a single code to both major plataforms.
- The App is developed with React, then we use a Metro Bundler to compress the entire app code into a single js file, called bundle.js.
- The bundle.js is interpreted by JS Core into APK (for android) or IPA (for IOS)

2. [Expo](https://expo.io/) - App to 'live' view app into android.
- simple and fast to use and debug
- limited to libraries and features already implemented in expo (for instance, we cant test bluethoot)
- ``yarn global add expo-cli``
- ``expo init <APP-NAME>``
- ``yarn start``

