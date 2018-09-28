const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "iOS",
    platformVersion: "11.4",
    deviceName: "iPhone 8",
    app: "/Users/bmurray/Documents/appium/NicheMobileApp.app",
    automationName: "XCUITest"
  }
};

const client = wdio.remote(opts);

client
  .init()
  .click("~Hi it's the Niche Mobile App")
  .pause(5000)
  .end();
