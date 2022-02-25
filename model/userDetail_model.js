const mongoose = require("mongoose")

const UserDetailSchema = new mongoose.Schema({
    experience:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    joiningDate:{
        type:String,
        required:true
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})
const UserDetailModel = mongoose.model("userDetail",UserDetailSchema)
module.exports = UserDetailModel