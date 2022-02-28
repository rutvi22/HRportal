
const HolidayModel = require("../model/holiday-model")

//add [post]
module.exports.addHoliday = function (req,res){

    let holidayName = req.body.holidayName
    let holidayFrom = req.body.holidayFrom
    let holidayTo = req.body.holidayTo
    
    let user = req.body.user

    let holiday = new HolidayModel({
        holidayName: holidayName,
        holidayFrom: holidayFrom,
        holidayTo: holidayTo,
        user: user

    })

    holiday.save(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "holiday added", data: data, status: 200}) 
        }
    })
}

//list
module.exports.getAllHoliday = function(req,res){
    

    HolidayModel.find().populate("user").exec(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "Holiday retrived", data: data, status: 200}) 
        }
    })
}

//delete
module.exports.deleteHoliday = function(req,res){
    //params userid
    let holidayId = req.params.holidayId // postman-->userid

    HolidayModel.deleteOne({_id:holidayId}, function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "Holiday removed", data: data, status: 200}) 
        }
    })
}

//update
module.exports.updateHoliday  = function(req,res){
    let paramholidayId = req.body.holidayId 
    let paramholidayName = req.body.holidayName
    let paramholidayFrom = req.body.holidayFrom
    let paramholidayTo = req.body.holidayTo 

    HolidayModel.updateOne({_id:paramholidayId},{holidayName:paramholidayName,holidayFrom:paramholidayFrom,holidayTo:paramholidayTo},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "holiday modified...", data: data, status: 200 })
        }
    })

}

 
