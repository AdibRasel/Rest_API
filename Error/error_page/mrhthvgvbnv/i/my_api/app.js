const express = require("express");
const app = express();

const router_folder_api = require("./src/routes/api")




app.use("/api/v1", router_folder_api)

app.use("*", (req, res)=>{
    res.status(301);
    res.send("Rong API")
})

module.exports = app