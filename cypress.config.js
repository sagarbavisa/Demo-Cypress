const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


module.exports = (on, config) => {
  require("cypress-localstorage-commands/plugin")(on, config);
  on('file:preprocessor', cucumber());
  on('file:preprocessor', createBundler());
  return config;
}

async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
return config;
}


module.exports = defineConfig({
  video:true,
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: true,
  e2e: {
    
    baseUrl:"https://chick-fil-a-preprod.scloud.stibo.com",
   // specPattern:"cypress/integration/BDD/cfabdd.feature",
    specPattern:"**/*test.feature",
   // specPattern:"cypress/integration/tests/CFATESTS.js",
    chromeWebSecurity:false,
    setupNodeEvents
  },
});
