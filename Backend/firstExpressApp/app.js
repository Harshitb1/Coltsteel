var express = require("express");
var app= express();
var port= process.env.PORT || 3000;

app.get("/",function(req, res){
    res.send("Hi there!");
});

app.get("/bye",function(req,res){
    res.send("goodbye!!")
})

app.get("/dog",function(req, res){
    res.send("meaaooww");
    console.log("someone made a request on /dog");
});

app.get("/r/:subpart", function(req, res){
 
    res.send("heyy u r "+req.params.subpart.toUpperCase()+" in the pattern");
});
app.get("/r/:subredditName/comments/:id/:title",function(req, res){
    res.send("u are in comments section of "+
                req.params.subredditName+" with the user id: "+ req.params.id+
                "And the post title is : "+ req.params.title);
});

app.get("*", function(req, res){
    res.send("you r star!!");
});

app.listen(port,function(){
    console.log("Server has started");
});
