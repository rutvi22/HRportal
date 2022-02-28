const mongoose = require("mongoose")

const HolidaySchema = new mongoose.Schema({
    holidayName:{
        type:String,
        required:true
    },
    holidayFrom:{
        type:String,
        required:true
    },
    holidayTo:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
   
})
const HolidayModel = mongoose.model("holiday",HolidaySchema)
module.exports = HolidayModel