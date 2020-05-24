var express = require("express");
var app= express();


app.get("/",function(req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animalName",function(req, res){
    var animal= req.params.animalName.toLowerCase();
    var sounds= {
        pig: "Oink",
        cow: "Moo",
        cat: "Meoww",
        crow: "Kao kao",
        goldfish:"...",
        dog:"woof woof"
    }

    res.send("The "+ animal+" says "+ "' "+sounds[animal]+" '");
});

app.get("/repeat/:str/:num", function(req, res){
    var str= req.params.str;
    var num= req.params.num;
    var printRes= "";
    for(var i=0;i<num;i++){
        printRes += str +" ";
    }
    res.send(printRes);
});

app.get("*",function(req, res){
    res.send("Sorry, page not found... What are you doing with your life??");
});

app.listen(3000,function(){
    console.log("server started");
});