
const mongoose = require('mongoose');
const str = "mongodb+srv://Ekagrata:promila12@myfirstcluster-wb5wt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(str,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat= mongoose.model("Cat",catSchema);
//code for adding a cat in the db

// new Cat({
//     name: "norris",
//     age: 4,
//     temperament: "evil"
// }).save((err, cat)=>{
//     if(err){
//         console.log("something went wrong");
//         console.log(err);
//     }
//     else{
//         console.log("saved babes");
//         console.log(cat);
//     }
// });

//retrieving cats from db code

// Cat.find({},(err, cats)=>{
//     if(err){
//         console.log("error is there");
//         console.log(err);
//     }
//     else{
//         console.log("all the cats");
//         console.log(cats);
//     }
// });

//create function creates and saves the cat at once without .save function
Cat.create({
    name: "Snow white",
    age: 15,
    temperament: "nice"
}, (err, cat)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});



