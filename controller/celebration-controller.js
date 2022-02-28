
const CelebrationModel = require("../model/celebration-model")

//add post
module.exports.addCelebration = function (req,res){

    let celebrationName = req.body.celebrationName
    let celebrationDate = req.body.celebrationDate
    let celebrationVenue = req.body.celebrationVenue
    let description = req.body.description
    let celebrationStart = req.body.celebrationStart
    let celebrationEnd = req.body.celebrationEnd
    
    
    //let user = req.body.user

    let celebration = new CelebrationModel({
        celebrationName: celebrationName,
        celebrationDate: celebrationDate,
        description: description,
        celebrationVenue: celebrationVenue,
        celebrationStart: celebrationStart,
        celebrationEnd: celebrationEnd

    })

    celebration.save(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "celebration added", data: data, status: 200}) 
        }
    })
}

//list
module.exports.getAllCelebration = function(req,res){
    

    CelebrationModel.find(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "Celebration retrived", data: data, status: 200}) 
        }
    })
}

//delete
module.exports.deleteCelebration = function(req,res){
    //params userid
    let celebrationId = req.params.celebrationId // postman-->userid

    CelebrationModel.deleteOne({_id:celebrationId}, function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "Celebration removed", data: data, status: 200}) 
        }
    })
}

//update
module.exports.updateCelebration  = function(req,res){
    let paramcelebrationId = req.body.celebrationId 
    let paramcelebrationName = req.body.celebrationName
    let paramcelebrationDate = req.body.celebrationDate
    let paramcelebrationVenue = req.body.celebrationVenue
    let paramdescription = req.body.description
    let paramcelebrationStart = req.body.celebrationStart
    let paramcelebrationEnd = req.body.celebrationEnd
   

    CelebrationModel.updateOne({_id:paramcelebrationId},{celebrationName:paramcelebrationName,celebrationDate:paramcelebrationDate,celebrationStart:paramcelebrationStart,celebrationEnd:paramcelebrationEnd,celebrationVenue:paramcelebrationVenue,description:paramdescription},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "Celebration modified...", data: data, status: 200 })
        }
    })

}

 
