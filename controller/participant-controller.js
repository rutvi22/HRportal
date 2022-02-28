
const ParticipantModel = require("../model/participant-model")

//add [post]
module.exports.addParticipant = function (req,res){

    let participantName = req.body.participantName
    let status = req.body.status
   
    let user = req.body.user
    let celebration = req.body.celebration

    let participant = new ParticipantModel({
        participantName: participantName,
        status: status,
        user: user,
        celebration: celebration

    })

    participant.save(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "participant added", data: data, status: 200}) 
        }
    })
}

//list
module.exports.getAllParticipant = function(req,res){
    

    ParticipantModel.find().populate("user").populate("celebration").exec(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "participant retrived", data: data, status: 200}) 
        }
    })
}

//delete
module.exports.deleteParticipant = function(req,res){
    //params userid
    let participantId = req.params.participantId // postman-->userid

    ParticipantModel.deleteOne({_id:participantId}, function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "participant removed", data: data, status: 200}) 
        }
    })
}

//update
module.exports.updateParticipant  = function(req,res){
    let paramparticipantId = req.body.participantId 
    let paramparticipantName = req.body.participantName
   
    let paramstatus = req.body.status

    ParticipantModel.updateOne({_id:paramparticipantId},{participantName:paramparticipantName,status:paramstatus},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "participant modified...", data: data, status: 200 })
        }
    })

}

 
