console.log("in packagae. app.js");
var express= require("express");
var app= express();

app.get("/",function(req, res){
    res.send("package.json demo app server");
});

app.listen(3000,function(){
    console.log("serverstarted");
});