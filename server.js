// Your server.js file should require the basic npm packages we've used in class: 
//express, body-parser and path. 
//dependencies....
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)




var PORT = process.env.PORT || 3000;



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
