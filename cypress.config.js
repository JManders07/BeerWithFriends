const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gn3xng",
  e2e: {
      e2e: {
        baseUrl: 'http://localhost:8080'
      }
    },
  },
);
