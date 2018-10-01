# Appium

<img href="http://appium.io/" src="https://user-images.githubusercontent.com/20906544/46296880-61550580-c569-11e8-8c15-2e67f36843d1.png"/>

## Setup
<hr>

#### Install Android Studio

https://developer.android.com/studio/install

#### Install Xcode

https://developer.apple.com/xcode/

#### Install appium
`npm i -g appium`

#### Install appium-doctor
`npm i -g appium-doctor`

As you're addressing issues raised by `appium-doctor`, make sure to apply these changes in your `.bashrc` or `.zshrc`.

#### Install appium-desktop

https://github.com/appium/appium-desktop/releases

#### Start appium server
This can be done by opening `appium-desktop` or running `appium` from CLI. In either case, use default settings (host: '0.0.0.0', port: '4723')

#### Start Emulator
Open your preferred emulator (iOS or Android) in Xcode or Android Studio.

<hr>

#### Configure capabilities
`capabilities` are defined in the `wdio.conf.*` file. These specify the environment we are targeting.

```
capabilities: [
  {
      platformName: "iOS",
      platformVersion: "11.4",
      deviceName: "iPhone 8",
      app: "/Users/bmurray/Documents/appium/NicheMobileApp.app",
      automationName: "XCUITest"
  },
```
###### platform/device
`platformName`, `platformVersion`, and `deviceName` should all match the configuration of your device/emulator.

###### app
The path set in `wdio.conf`'s `capabilities.app` is important: this points to the app that you want to run tests on. For Android, any `.apk` is fine.
For iOS, you need a `.app` to run in an emulator, or an `.ipa` to run on a device.
Note: at the time of this writing, on OS X this path needs to be an absolute path.

###### automationName
`automationName` is the driver we're targeting. We're currently using http://appium.io/docs/en/drivers/ios-xcuitest/ and http://appium.io/docs/en/drivers/android-uiautomator2/.

<hr>

### Run tests
To execute test, reference `package.json`.

At the time of this writing, you can use `npm run test:android` or `npm run test:ios`
