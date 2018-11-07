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
        console.log(res);
        
    });

};