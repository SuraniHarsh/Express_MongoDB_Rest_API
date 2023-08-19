const mongoose = require("mongoose");

const connectSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Pls add Name"]
    },
    email:{
        type: String,
        required: [true, "Pls add Email"]
    },
    phone:{
        type : String,
        required : [true, "pls add number"]
    }
},{
    timestamps : true,
});

module.exports = mongoose.model("Contact", connectSchema);
