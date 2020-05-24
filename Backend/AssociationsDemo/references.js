const mongoose = require("mongoose");
const str = "mongodb+srv://Ekagrata:promila12@myfirstcluster-wb5wt.mongodb.net/testdemo?retryWrites=true&w=majority";
const Post = require("./models/post");
const User = require("./models/user");

mongoose.connect(str,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
});




// +++++++find user then find all posts of that user+++++

// User.findOne({email:"bob@gamil.com"}).populate("posts").exec((err,user)=>{
//     if(err){
//         console.log(err)   
//      }
//         else{
//             console.log(user);
//         }
// })

Post.create({
    title: "how to cook the best burger part 4",
    content: "chane ke khet mein  part 3 maaan be connected with the user"
}, (err, post)=>{
    if(err){
        //console.log(err);
    }
    else{
        User.findOne({email:"bob@gamil.com"}, (err, foundUser)=>{
            if(err){
                console.log(err)
            }
            else{
                foundUser.posts.push(post);
                foundUser.save((err, savedUser)=>{
                    if(err){
                        console.log("saving error")
                        console.log(err);
                    }
                    else{
                        console.log(savedUser);
                    }
                })
            }
        })
        //console.log(post);
    }
});



// User.create({
//     email: "bob@gamil.com",
//     name:"bob"
// }, (err, user)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

