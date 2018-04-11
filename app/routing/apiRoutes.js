// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express(); 

var friends = require("../data/friends")

//test if friends was exported correctly
displayFriends = function(){
    console.log(friends)

}
//displayFriends()


apiDisplay = function(app){

app.get("/api/friends", function(req, res) {
    res.json(friends)
  })

app.post("/api/friends", function(req,res){
    //console.log(req)
    console.log(req.body)
        //var newFriend = req.body;  
        //console.log(newFriend);   
        //send new user data to friends array
        friends.push(req.body);   
        //We then display the JSON?
        res.json(req.body);
    
    });
}


module.exports = apiDisplay
  
  

