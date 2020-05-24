const mongoose = require("mongoose");
const str = "mongodb+srv://Ekagrata:promila12@myfirstcluster-wb5wt.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(str,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
});

const postSchema= new mongoose.Schema({
    title: String,
    content: String
});
const Post = mongoose.model("Post",postSchema);

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[postSchema]
});

const User= mongoose.model("User", userSchema);

User.findOne({name: "harshit"}, (err, user)=>{
    if(err){
        //console.log(err);
    }
    else{
        //console.log(user);
        user.posts.push({
            title: "three things i really hate",
            content: "i hate myself cause i m ugly"
        });
        user.save((err, user)=>{
            if(err){
                console.log("second nested error")
                console.log(err);
            }
            else{
                console.log("second nested user")
                console.log(user);
            }
        })
    }
})

// var newUser= new User({
//         email: "harshitbatra@gmail.com",
//         name:"harshit"
//     });

// newUser.posts.push({
//     title:"i m harshi the bunny",
//     content:"this is just a funny post cause i think im funny but actually i m nt"
// });
// newUser.save((err, user)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(user);
//         }
// });




// var newUser= new User({
//     email: "ekagratasharma@gmail.com",
//     name:"ekagrata"
// });
// newUser.save((err, user)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// })

// new Post({
//     title: "Heyy new post",
//     content:"this is my first post actually "
// }).save((err,post)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// })