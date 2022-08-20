const express = require("express");
const app = express();

const router_folder_api = require("./src/routes/api")




app.use("/api/v1", router_folder_api)

app.use("*", (req, res)=>{
    res.status(404);
    res.send("Bad Request")
})

module.exports = app