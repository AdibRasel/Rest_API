const mongoose =  require("mongoose")

const DataSchema =  mongoose.schema({
    userName:{type:String},
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Mobile:{type:String},
    city:{type:String},
    password:{type:String},
    
},{versionKey:false})

const profileModel =  mongoose.model("profile", DataSchema)

module.exports = profileModel;