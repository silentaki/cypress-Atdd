const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 150000,
  numTestsKeptInMemory: 0,
  projectId: "nyxe43",
  e2e: {
    baseUrl: "https://rahulshettyacademy.com/",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/specs/*.{js,jsx,ts,txs}",
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
