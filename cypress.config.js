const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/'
  },
});
