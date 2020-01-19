// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// A GET Route to /survey which should display the survey page
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

/* final catch-all route to home.html defined last */
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
// app.listen(PORT, function() {
//     console.log("App listening on PORT here" + PORT);
//   });
  

// Export routes for server.js to use.
module.exports = app;  