// var express = require("express");
// var path = require("path");

var friendData = require("../data/friends");

// var app = express();
// var PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

module.exports = function(app) {
    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        // console.log(res);
        // res.sendFile(path.join(__dirname, "home.html"));
        res.json(friendData);
    });

    // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        // console.log(JSON.stringify(friendData));
        // friendData.length = [];
        // console.log(req.body.scores);
        // (function findDiff() {
        var newUser = req.body;
        var differencesArr = [];
        var bestFriend = {
            name: "",
            photo: "",
            scores: 100
        };
        for (var i = 0; i < friendData.length; i++) {
            var totalDifference = 0;
            console.log("\n", friendData[i]);
            for (var j = 0; j < friendData[i].scores.length; j++) {
                totalDifference += Math.abs(parseInt(friendData[i].scores[j]) - parseInt(newUser.scores[j]));
                differencesArr.push(totalDifference);
            }
            if (totalDifference <= bestFriend.scores) {
                bestFriend.name = friendData[i].name;
                bestFriend.photo = friendData[i].photo;
                bestFriend.scores = totalDifference;
            }
        }
        console.log("DIFFERENCES ARR: ", differencesArr);
        
        friendData.push(newUser);

        res.json(bestFriend);
    });

};