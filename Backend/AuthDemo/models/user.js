const mongoose = require("mongoose");
const passportLocalMongoose= require("passport-local-mongoose");

const userSchema= new mongoose.Schema({
    username: String,
    password: String
})

// this line will add the bunch of methods we get from passport local schema to the userschema
userSchema.plugin(passportLocalMongoose);

module.exports= mongoose.model("User", userSchema);