// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // Send user to index.html
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function(req, res) {
    // Send user to exercise.html
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function(req, res) {
    // Send user to stats.html
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};