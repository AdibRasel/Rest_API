// const profile_model = require("../models/profileModel")
const profileModel = require("../models/profileModel");


exports.CreateProfile=(req,res)=>{
    let requestBody = req.body;
    profileModel.create(requestBody, (error,data)=>{
        if(error){
            res.status(400)
            res.json({
                status:"Faild",
                data: error
            })
        }else{
            res.status(200);
            res.json({
                status:"Success",
                data: data
            })
        }
    })
}