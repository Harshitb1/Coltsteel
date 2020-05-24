//************************use appsecond.js ******************************

const express= require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyparser = require("body-parser");
const localStrategy = require("passport-local");
const User = require("./models/user");
const passportLocalMongoose = require("passport-local-mongoose");


const app = express();
const port = process.env.PORT || 9000;
const str = "mongodb+srv://Ekagrata:promila12@myfirstcluster-wb5wt.mongodb.net/AuthDemoApp?retryWrites=true&w=majority";

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(require("express-session")({
    //this secret is used to decode the data in a session
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser);

mongoose.connect(str,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
});


app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/secret", isLoggedIn,(req, res)=>{
    console.log("in slash secret");
    res.render("secret");
})

app.get("/register",(req, res)=>{
    res.render("register");
})

app.post("/register",(req,res)=>{

    User.register(new User({username: req.body.username}),req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            res.render("register");
        }
        
            console.log(user);
            passport.authenticate("local")(req, res, ()=>{
                console.log("phochhh gyaaa");
                res.redirect("/secret");
            });
        
    })
})

app.get("/login", (req, res)=>{
    res.render("login"); 
})

//this is the example of middleware. the middleware code is executed on the spot as soon as the route is hit
// app.post("/login",passport.authenticate("local",{
//     successRedirect:"/secret",
//     failureRedirect:"/login"
// }), (req, res)=>{
    
// });

app.post("/login", passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}),function(req,res){

});

app.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/");
})


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.get("/:name",(req, res)=>{
    console.log(req.params.name);
})

app.listen(port, ()=>{
    console.log("server started.....");
})