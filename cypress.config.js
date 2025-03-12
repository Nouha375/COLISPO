const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    reportFilename: '[status]_[datetime]-report',
    timestamp: 'shortDate',
    charts: true,
    reportPageTitle: 'Colispo Test Suite Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  
  'cypress-cucumber-preprocessor': {
   //Cette option définit si les définitions des étapes doivent être globales ou non
    nonGlobalStepDefinitions: false,
   //Cette propriété indique le chemin vers le dossier dans l'architecture de mon projet où les définitions des étapes
   //  (les fichiers .js qui lient les étapes Gherkin aux actions réelles du test) sont stockées.
    step_definitions: './cypress/e2e/step_definitions/',
   
    
  },
  
  e2e: {
    specPattern: [
      'cypress/e2e/features/*.feature' // Cucumber feature files
      
    ],

    // Explicitly set the stepDefinitions folder for Cucumber
    stepDefinitions: 'cypress/e2e/step_definitions/*.js',

    setupNodeEvents(on, config) {
      // Task for logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Set up the Cucumber preprocessor
      on('file:preprocessor', cucumber());
  },
  },

  
});
