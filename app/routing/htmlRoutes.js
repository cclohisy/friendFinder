// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


htmlDisplay = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
}

module.exports = htmlDisplay