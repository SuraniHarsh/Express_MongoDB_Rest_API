const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: [true, "Pls Enter userName"]
    },
    email : {
        type: String,
        required: [true, "Pls Enter Email"],
        unique: [true, "Email address already taken"] 
    },
    password : {
        type: String,
        required: [true, "Pls Enter Password"]
    }
},{
    timestamps : true
});

module.exports = mongoose.model("User", userSchema);