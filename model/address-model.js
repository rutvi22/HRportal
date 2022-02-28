const mongoose = require("mongoose")

//schema
let AddressSchema = new mongoose.Schema({
    address:{
        type:String,
        required:true
    }
})

//model
let AddressModel = mongoose.model("address", AddressSchema) //role

module.exports = AddressModel

