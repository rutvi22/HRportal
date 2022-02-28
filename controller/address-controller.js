const AddressModel = require("../model/address-model")

module.exports.addAddress = function (req,res){
//db insert Address


let address = new AddressModel({
    addressName:req.body.addressName
})

address.save(function(err,data){
    if(err){
        
        res.json({msg:"something went wrong",status:-1,data: err})

    }else{
        res.json({msg:"Address added",status:200,data: data})
    }
})
}

module.exports.getAllAddress = function(req,res){

    AddressModel.find(function(err,address){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})

        }else{
            res.json({msg:"Address",status:200,data:roles})
        }
    })
}


//delete
module.exports.deleteAddress = function(req,res){
    let addressId = req.params.addressId

    //delete from role where role Id =1
    AddressModel.deleteOne({"_id":addressId},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})

        }else{
            res.json({msg:"removed address",status:200,data:data})
        }
    })
}

//update Address
module.exports.updateAddress = function(req,res){
    let addressId = req.body.roleId
    let address = req.body.address
    AddressModel.updateOne({_id:addressId},{roleName:address},function(err,data){
        if(err){
            res.json({msg:"something went wrong!!",status:-1,data:err})

        }else{
            res.json({msg:"updated Address",status:200,data:data})
        }
    })
}