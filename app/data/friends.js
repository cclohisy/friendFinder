var friends = [
    {
        name: "Bob",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]

    }
]

//var user1Scores =[]
//var user2Scores =[]

// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ]
// }

// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    //loop through all users.score[]...
    //push into array to hold values for comparison... 
// With that done, compare the difference between current user's scores against those from other users, question by question. 
 //Add up the differences to calculate the totalDifference.
        // Example: 
        // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        // Total Difference: 2 + 1 + 2 = 5
        

// Remember to use the absolute value of the differences.mathAbs()? Put another way: no negative solutions! 
//Your app should calculate both 5-3 and 3-5 as 2, and so on.  The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    //bootstrap


// The modal should display both the name and picture of the closest match.
//userData[matchedUser].name
//userData[matchedUser].photo


module.exports = friends


