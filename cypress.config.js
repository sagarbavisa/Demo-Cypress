const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://parabank.parasoft.com",
    specPattern:"cypress\\integration\\tests\\*.js",
    chromeWebSecurity:false
  },
});
