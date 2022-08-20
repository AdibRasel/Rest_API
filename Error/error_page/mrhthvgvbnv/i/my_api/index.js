const app = require("./app");





app.listen(3000, (error)=>{
    if(error){
        console.log("Feild Server Running")
    }else{
        console.log("Your Server Running Success")
    }
})