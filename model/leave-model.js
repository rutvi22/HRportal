const mongoose = require("mongoose")

const LeaveSchema = new mongoose.Schema({
    leaveReason:{
        type:String,
        required:true
    },
    leaveFrom:{
        type:String,
        required:true
    },
    leaveTo:{
        type:String,
        required:true
    },
    acceptReject:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
   
})
const LeaveModel = mongoose.model("leave",LeaveSchema)
module.exports = LeaveModel