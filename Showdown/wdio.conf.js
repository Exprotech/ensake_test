// wdio.conf.js

exports.config = {
    // ... other configurations
  
    capabilities: [
      {
        browserName: 'chrome', // or 'safari' for iOS
        maxInstances: 1,
        platformName: 'Android', // or 'iOS'
        deviceName: 'emulator-5554', // Replace with your device name or emulator ID
        automationName: 'UiAutomator2', // for Android, or 'XCUITest' for iOS
        // Other capabilities for Android or iOS
      },
    ],
  
    services: [
      ['appium', {
        command: 'appium',
      }],
    ],
  
    // ... other configurations
  };
  