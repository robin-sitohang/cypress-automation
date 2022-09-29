const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report',
    reportFilename: 'report',
    // overwrite: true,
    // html: true,
    // json: true,
    // charts: true
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url_liberta_stg: 'https://liberta-stg.thelionparcel.com',
    email: 'robin.sitohang@thelionparcel.com',
    password: 'Liberta1234',
  },
  pageLoadTimeout: 6000,
});
