
const LeaveModel = require("../model/leave-model")

//add [post]
module.exports.addLeave = function (req,res){

    let leaveReason = req.body.leaveReason
    let leaveFrom = req.body.leaveFrom
    let leaveTo = req.body.leaveTo
    let acceptReject = req.body.acceptReject
    
    
    let user = req.body.user

    let leave = new LeaveModel({
        leaveReason: leaveReason,
        leaveFrom: leaveFrom,
        leaveTo: leaveTo,
        acceptReject: acceptReject,
        user: user

    })

    leave.save(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "leave done", data: data, status: 200}) 
        }
    })
}

//list
module.exports.getAllLeave = function(req,res){
    

    LeaveModel.find().populate("user").exec(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "user-Leave retrived", data: data, status: 200}) 
        }
    })
}

//delete
module.exports.deleteLeave = function(req,res){
    //params userid
    let leaveId = req.params.leaveId // postman-->userid

    LeaveModel.deleteOne({_id:leaveId}, function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "user-leave removed", data: data, status: 200}) 
        }
    })
}

//update
module.exports.updateLeave  = function(req,res){
    let paramleaveId = req.body.leaveId 
    let paramleaveReason = req.body.leaveReason
    let paramleaveFrom = req.body.leaveFrom
    let paramleaveTo = req.body.leaveTo 

    LeaveModel.updateOne({_id:paramleaveId},{leaveReason:paramleaveReason,leaveFrom:paramleaveFrom,leaveTo:paramleaveTo},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "leave modified...", data: data, status: 200 })
        }
    })

}

 
