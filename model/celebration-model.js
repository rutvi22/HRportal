const mongoose = require("mongoose")

const CelebrationSchema = new mongoose.Schema({
    celebrationName:{
        type:String,
        required:true
    },
    celebrationDate:{
        type:String,
        required:true
    },
    celebrationVenue:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    celebrationStart:{
        type:String
    },
    celebrationEnd:{
        type:String
    }
    
})
const CelebrationModel = mongoose.model("celebration",CelebrationSchema)
module.exports = CelebrationModel