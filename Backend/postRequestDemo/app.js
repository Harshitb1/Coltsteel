var express = require("express");
var app= express();
var port = process.env.PORT || 3000;
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["bedi","aarushi","dev","nonu"];

app.get("/", function(req, res){
    res.render("home");
})

app.post("/addfriend", function(req, res){
    var newfriend= req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){  
    res.render("friends",{friends: friends});
})
app.listen(port, function(){
    console.log("server started!!!");
});