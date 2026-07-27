// wdio.conf.js
// Minimal WebdriverIO configuration for BrowserStack App Automate.
//
// Required environment variables:
//   BROWSERSTACK_USERNAME     - your BrowserStack username
//   BROWSERSTACK_ACCESS_KEY   - your BrowserStack access key
//   BROWSERSTACK_APP_ID       - the app URL returned after uploading your
//                               .apk/.ipa via the BrowserStack API,
//                               e.g. "bs://c700ce60cf13ae8ed97705a55b8e022f13c5c6cc"
//
// See README.md for how to upload your app and get BROWSERSTACK_APP_ID.

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  hostname: 'hub.browserstack.com',

  specs: ['./test/specs/**/*.js'],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'bstack:options': {
        projectName: 'WebdriverIO BrowserStack Sample',
        buildName: 'wdio-app-automate-build',
        sessionName: 'Minimal app automate sample test',
        deviceName: 'Google Pixel 7',
        platformVersion: '13.0',
        debug: true,
        networkLogs: true
      }
    }
  ],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    [
      'browserstack',
      {
        app: 'bs://sample.app',
        browserstackLocal: true,
        opts: {
          forcelocal: true,
          localIdentifier: "webdriverio-appium-browserstack-sample"
        }
      }
    ]
  ],

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
