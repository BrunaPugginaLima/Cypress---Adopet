const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: "e1frky",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', //caminho da pasta
      overwrite: false, // não vai sobreescrever
      html: true, //vai gerar arquivo em html
      json: false, // da pra gerar json tbm, só setar pra true
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});