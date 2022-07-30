const express = require("express");

const app = express();

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(2000, ()=>{
    console.log("Your Server is Running")
})