const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://whitelabel.sandbox.array.io/",
    specPattern: "cypress/tests/**/*.{js, jsx}",
  },
});
