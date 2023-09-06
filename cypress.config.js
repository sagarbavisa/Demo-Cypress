const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = (on, config) => {
  require("cypress-localstorage-commands/plugin")(on, config);
  require("cypress-localstorage-commands/plugin")(on, config);
  on('file:preprocessor', cucumber());
  on('file:preprocessor', createBundler());
  //allureWriter(on, config);
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
  
    env :
    {

    },
   // baseUrl:"https://pivotree-sb01.mdm.stibosystems.com/",
    //experimentalSourceRewriting : true,

   // defaultCommandTimeout : 14000,
    pageLoadTimeout : 200000,
    includeShadowDom:true,
   // specPattern:"cypress/integration/tests/*.js",
   // specPattern:"cypress/integration/EnterworksAutomation/shortdesc.feature",
   //  specPattern:"cypress//integration//EnterworksWorkflow//ew_workflow.feature",
   specPattern:"cypress/Riversand/timken.feature",
   // specPattern:"cypress/integration/tests/CFATESTS.js",
    chromeWebSecurity:false,
   // baseUrl : "http://67.22.105.214:8090/webcm/login.do;jsessionid=EF7970A56F17FF51234A4FF05CB50D9F",
    setupNodeEvents
  },
});
