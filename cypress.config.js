const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
module.exports = defineConfig({
  video:true,
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://parabank.parasoft.com",
   // specPattern:"**/*.feature",
    specPattern:"cypress/integration/tests/test.js",
    chromeWebSecurity:false
  },
});
