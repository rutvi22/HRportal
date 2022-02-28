const mongoose = require("mongoose")

const ParticipantSchema = new mongoose.Schema({
    participantName:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    celebration:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"celebration"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
   
})
const ParticipantModel = mongoose.model("participant",ParticipantSchema)
module.exports = ParticipantModel