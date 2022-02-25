const fs = require("fs")

function login(req,res){
    res.write("Login")
    res.end()
}

function signin(req,res){
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req,res){
    console.log(req.body)
    
    res.json({
        msg:"done done",
        status:200,
        data:req.body
    })
    //res.write("data saved")
    //res.end()
}

function login(req,res){
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    res.end()
}


module.exports.login = login
module.exports.signup = signin
module.exports.saveuser= saveuser
