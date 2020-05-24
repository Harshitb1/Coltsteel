const express= require("express");
const router= express.Router({mergeParams:true});
const Campground = require("../models/campground");
const Comment = require("../models/comment");

router.get("/new",isLoggedIn,(req, res)=>{
    Campground.findById(req.params.id,(err, campground)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("comments/new", {campground:campground});
        }
    })
    
});

router.post("/",isLoggedIn,(req, res)=>{
    //lookcampground using id
    Campground.findById(req.params.id, (err,campground)=>{
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            Comment.create(req.body.comment,(err,commentadded)=>{
                if(err){
                    console.log(err);
                }
                else{
                    campground.comments.push(commentadded);
                    campground.save();
                    res.redirect("/campgrounds/"+campground._id);
                }
            })
        }
    })
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;