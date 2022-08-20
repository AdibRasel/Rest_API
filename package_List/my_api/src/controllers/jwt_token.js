const jwt = require("jsonwebtoken");

exports.CreateToken = (req, res)=>{
    let payload = {
        exp: Math.floor(Date.now()/1000) + (60 + 60),
        data : {
            name:"Rasel Hossain Adib",
            father_Name:"Harun Or Roshid",
            mother_Name:"Firoza Begum",
            Admin:true
        } 
    }
    let Token = jwt.sign(payload, "SecretKey123");
    res.send(Token)
}