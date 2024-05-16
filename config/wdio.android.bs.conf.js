const path = require('path');
require('dotenv').config();

const { config } = require('./wdio.shared.conf');

// BrowserStack Credentials
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

// Specs
config.specs = [
  path.join(process.cwd(), './test/specs/test.spec.js') 
];

// Capabilities
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Samsung Galaxy S10",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://c21be75a695b047d270a866affd0cf6f6f0eab57",
  }
]

// Test runner services
config.services = ['browserstack'];

exports.config = config;
