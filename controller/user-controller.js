const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")

//add [post]
module.exports.addUser = function (req,res){

    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    //encrypt
    let encPassword = bcrypt.hashSync(password,10)

    let role = req.body.role

    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: encPassword,
        role: role

    })

    user.save(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "signup done", data: data, status: 200}) // 200 is http status code like 304,404 etc
        }
    })
}

//list
module.exports.getAllUsers = function(req,res){
    

    UserModel.find().populate("role").exec(function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "user retrived", data: data, status: 200}) // 200 is http status code like 304,404 etc
        }
    })
}

//delete
module.exports.deleteUser = function(req,res){
    //params userid
    let userId = req.params.userId // postman-->userid

    UserModel.deleteOne({_id:userId}, function (err, data){
        if (err) {
            res.json({ msg: "something went wrong", data: err, status: -1}) 

        } else {
            res.json({msg: "user removed", data: data, status: 200}) // 200 is http status code like 304,404 etc
        }
    })
}

//update
module.exports.updateUser  = function(req,res){
    let paramuserId = req.body.userId 
    let paramemail = req.body.email 
    let parampassword = req.body.password 

    UserModel.updateOne({_id:paramuserId},{email:paramemail,password:parampassword},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "user modified...", data: data, status: 200 })
        }
    })

}

 
//password

module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })
        }
    })

}