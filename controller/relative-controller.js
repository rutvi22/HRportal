
const RelativeModel = require("../model/relative-model")

//add [post]
module.exports.addRelative = function (req,res){

    let relativeName = req.body.relativeName
    let details = req.body.details
    
    let user = req.body.user

    let relative = new RelativeModel({
        relativeName: relativeName,
        details: detailsTo,
        user: user

    })

    relative.save(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "relative added", data: data, status: 200}) 
        }
    })
}

//list
module.exports.getAllRelative = function(req,res){
    

    RelativeModel.find().populate("user").exec(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "Relative retrived", data: data, status: 200}) 
        }
    })
}

//delete
module.exports.deleteRelative = function(req,res){
    //params userid
    let relativeId = req.params.relativeId // postman-->userid

    RelativeModel.deleteOne({_id:relativeId}, function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "Relative removed", data: data, status: 200}) 
        }
    })
}

//update
module.exports.updateRelative  = function(req,res){
    let paramrelativeId = req.body.relativeId 
    let paramrelativeName = req.body.relativeName
    let paramdetails = req.body.details

    RelativeModel.updateOne({_id:paramrelativeId},{relativeName:paramrelativeName,details:paramdetails},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "relative modified...", data: data, status: 200 })
        }
    })

}

 
