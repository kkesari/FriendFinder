// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var friends_list = [
    {
        "name":"Kiran",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            2,
            2,
            1,
            2,
            2,
            1,
            3,
            1
          ]
      }      
];
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// Displays all characters
app.get("/api/friends", function(req, res) {
    return res.json(friends_list);
  });

// Create New Characters - takes in JSON input
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    console.log(newFriend);
  
    friends_list.push(newFriend);
  
    res.json(newFriend);
  });
  
//   app.listen(PORT, function() {
//     console.log("App listening on PORT here" + PORT);
//   });
    

 // Export routes for server.js to use.
module.exports = app;   