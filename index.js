const express = require("express")
const mongoose = require("mongoose")

const session_controller = require("./controller/session_controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const userDetailController = require("./controller/userDetail-controller")



const app = express()
//middleware
app.use(express.json()) //mobile -> accept json from request and set data into body
app.use(express.urlencoded({extended:true})) // web --> accept url encoded data from request and set data into body
// for extend ctrl+space

//database
mongoose.connect('mongodb://localhost:27017/hrp',function(err){
    if(err){
        console.log("db connection fail..");
        console.log(err);
    }else{
        console.log("db connected.. ");
    }
})

//urls
app.get("/",function(req,res){
    res.write("welcome..")
    res.end()
})

app.get("/login",session_controller.login)
app.get("/signup",session_controller.signup)
app.post("/saveuser", session_controller.saveuser)


//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

app.post("/login",userController.login)

//user detail
app.post("/userdetails",userDetailController.addUserDetail)




//app.get("/login",function(req,res){
 //   res.write("login")
//    res.end()
//})

//app.get("/signup",function(req,res){
  //  res.write("signup")
    //res.end()
//})

//server
app.listen(3000,function(){
    console.log("server started on 3000");
})

