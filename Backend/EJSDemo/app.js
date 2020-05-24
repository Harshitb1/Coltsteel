var express = require("express");
var app = express();

app.use(express.static("public")); //this will tell express to serve the contents of the public directory
app.set("view engine", "ejs"); // this will make sure that we need not write .ejs extension everytime we are using that file.

app.get("/",function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing= req.params.thing;
    res.render("love", {thingvar: thing});
})

app.get("/posts", function(req, res){
    var posts = [
        {title : "Post 1", author: "Susy"},
        {title : "My adorable pet bunny", author: "Charlie"},
        {title : "Post 2", author: "Eku"},
    ];

    res.render("posts",{ posts: posts});
})
app.listen(3000, function(){
    console.log("server started");
});