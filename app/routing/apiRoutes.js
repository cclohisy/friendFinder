// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var friends = require("../data/friends")

//test if friends was exported correctly
displayFriends = function () {
    console.log(friends)

}
//displayFriends()


apiDisplay = function (app) {

    //get and display json friends array of data objs
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    //post newFriend  data from user input to exisiting friends array
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body
        var sumArray = []
        console.log("new friend added")
        console.log(newFriend)
        console.log("name " + newFriend.name)
        console.log("scores " + newFriend.scores)
        console.log("____________________________________")
        //send new user data to friends array
        console.log("friends array data")
        console.log(friends)

        console.log("____________________________________")
        // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
        //loop through all friends[i].score[]...
        for (var i = 0; i <= friends.length - 1; i++) {
            var scoresArray = friends[i].scores
            var sum = 0
            //where do these go...
            var friendScores = []


            console.log(i + " user score array: " + scoresArray)

            for (var j = 0; j < scoresArray.length; j++) {

                //convert from string to number...
                var eachScore = parseInt(scoresArray[j])
                //push into array to hold values for comparison... 
                friendScores.push(eachScore)
                sum += Math.abs(friendScores[j] - newFriend.scores[j])
                //console.log(j + " questionscore: " + sum)

            }
            console.log(friendScores)
            sumArray.push(sum)
            console.log("sum array " + sumArray)
        }
        console.log("____________________________________")
        //use math.min at some point??? and store index of math min item in array
        var matchSum = Math.min(...sumArray)
        console.log("match sum value from array: " + matchSum)
        var matchIndex = sumArray.indexOf(matchSum)
        console.log("matched friend index: " + matchIndex)
        console.log("____________________________________")


        
        friends.push(req.body)
        //else do nothing?- no else statement 
        //We then send the JSON?
        res.json(friends[matchIndex])

    });
}


// With that done, compare the difference between current user's scores against those from other users, question by question. 
//Add up the differences to calculate the totalDifference.
// Example: 
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
//}



//}







// Remember to use the absolute value of the differences.mathAbs()? Put another way: no negative solutions! 
//Your app should calculate both 5-3 and 3-5 as 2, and so on.  The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//bootstrap


// The modal should display both the name and picture of the closest match.
//userData[matchedUserindex].name
//userData[matchedUserindex].photo


module.exports = apiDisplay



