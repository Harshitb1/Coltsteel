const express= require("express");
const router= express.Router();
const Campground = require("../models/campground");

router.get("/",(req, res)=>{
    Campground.find({}, (err, campgrounds)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index", {campgrounds : campgrounds, currentUser: req.user});
        }
    })
});

router.get("/new", (req, res)=>{
    res.render("campgrounds/new");
});

router.get("/:id",(req, res)=>{
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground)=>{
        console.log(req.params.id);
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            res.render("campgrounds/show",{campground: foundCampground});   
        }
    });
})

router.post("/",(req, res)=>{
    
    var name =req.body.name;
    var image= req.body.image;
    var desc = req.body.description;
    var newcampground = {name: name, image: image,description: desc};

    Campground.create(newcampground, (err, newcampground)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(newcampground);
            res.redirect("/campgrounds");
        }
    });
    

});

module.exports = router;
