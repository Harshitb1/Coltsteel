const express= require("express");
const app= express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port= 3000 || process.env.PORT;
const methodOverride = require("method-override");
const str = "mongodb+srv://Ekagrata:promila12@myfirstcluster-wb5wt.mongodb.net/BlogApp?retryWrites=true&w=majority";
const expressSanitize= require("express-sanitizer");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressSanitize()); // this line must be after body parser line

mongoose.connect(str,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
});

const blogSchema = new mongoose.Schema({
    title: String,
    image: String, 
    body: String,
    created: {type : Date, default: Date.now}
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/",(req, res)=>{
    res.redirect("/blogs");
})
app.get("/blogs", (req, res)=>{
    Blog.find({}, (err, blogs)=>{
        if(err){
            console.log(err);
        }
        else{

            res.render("index", {blogs: blogs});
        }
    })
   
})

app.get("/blogs/new",(req, res)=>{
    res.render("new");
})

app.post("/blogs", (req, res)=>{
    console.log(req.body);
    req.body.blog.body = req.sanitize(req.body.blog.body)
    console.log("=====");
    console.log(req.body);
    Blog.create(req.body.blog, (err, newBlog)=>{
        if(err){
            res.redirect("/blogs/new");
            console.log(err);
        }
        else{
            res.redirect("/blogs");
            console.log(newBlog);
        }
    })
})

app.get("/blogs/:id", (req, res)=>{
    var id= req.params.id;
        Blog.findById(id, (err, foundBlog)=>{
        if(err){
            console.log(err);
            res.redirect("/blogs");
        }
        else{
            res.render("show", {blog: foundBlog});
        }
    })
})

app.get("/blogs/:id/edit",(req, res)=>{
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("edit",{blog: foundBlog});
        }
    })
})

app.put("/blogs/:id",(req, res)=>{
    var id= req.params.id;
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(id, req.body.blog,(err,updatedBlog)=>{
        if(err){
            res.redirect("/blogs");
            console.log(err);
        }
        else{
            res.redirect("/blogs/"+ id);
        }
    })
});

app.delete("/blogs/:id", (req, res)=>{
   Blog.findByIdAndRemove(req.params.id, (err)=>{
       if(err){
           res.redirect("/blogs");
           console.log(err);
       }
       else{
           res.redirect("/blogs");
       }
   })
});

app.listen(port, ()=>{
    console.log("blogapp server started!!");
})