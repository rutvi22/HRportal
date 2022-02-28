
const UserDetailModel = require("../model/userDetail_model")

//add [post]
module.exports.addUserDetail = function (req,res){

    let experience = req.body.experience
    let position = req.body.position
    let qualification = req.body.qualification
    let salary = req.body.salary
    let joiningDate = req.body.joiningDate
    
    
    let role = req.body.role
    let user = req.body.user

    let userDetail = new UserDetailModel({
        experience: experience,
        position: position,
        qualification: qualification,
        salary: salary,
        joiningDate: joiningDate,
        role: role,
        user: user

    })

    userDetail.save(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "signup done", data: data, status: 200}) 
        }
    })
}

//list
module.exports.getAllUserDetail = function(req,res){
    

    UserDetailModel.find().populate("user").populate("role").exec(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "user detail retrived", data: data, status: 200}) 
        }
    })
}

//delete
module.exports.deleteUserDetail = function(req,res){
    //params userDetailid
    let userDetailId = req.params.userDetailId // postman-->userDetailid

    UserDetailModel.deleteOne({_id:userDetailId}, function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "user detail removed", data: data, status: 200}) 
        }
    })
}

//update
module.exports.updateUserDetail  = function(req,res){
    let paramuserDetailId = req.body.userId 
    
    let paramqualification = req.body.qualification
    let paramexperiences = req.body.experience
    let paramsalary = req.body.salary
    let paramposition = req.body.position
    

    
    

    UserDetailModel.updateOne({_id:paramuserDetailId},{email:paramemail,password:parampassword},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "user detail modified...", data: data, status: 200 })
        }
    })

}

 
