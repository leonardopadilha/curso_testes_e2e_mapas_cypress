require('dotenv').config()

const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb')

const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureAllureAdapterPlugins(on, config)
      configurePlugin(on, config)

      return config
    },
    specPattern: [
      './cypress/support/hooks/**/*.cy.js',
      './cypress/e2e/**/*.cy.js'
    ],
    baseUrl: 'http://localhost:3000',
    env: {
      allure: true,
      browserPermissions: {
        notifications: 'allow',
        geolocation: 'allow',
      },
      baseApi: 'http://localhost:3333',
      mongodb: {
        uri: process.env.MONGO_URI,
        database: process.env.DATABASE_NAME
      }
    }
  },
});
