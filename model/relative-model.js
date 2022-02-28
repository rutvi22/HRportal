const mongoose = require("mongoose")

const RelativeSchema = new mongoose.Schema({
    relativeName:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
   
})
const RelativeModel = mongoose.model("relative",RelativeSchema)
module.exports = RelativeModel