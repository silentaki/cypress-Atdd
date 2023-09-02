const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1920,
  viewportHeight:1080,
  defaultCommandTimeout: 150000,
  numTestsKeptInMemory: 0,
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/specs/*.{js,jsx,ts,txs}',
  },
});
