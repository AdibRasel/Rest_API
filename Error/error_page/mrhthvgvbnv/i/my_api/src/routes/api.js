const express = require("express");

const router_api = express.Router();

const vew_control = require("../controllers/control")
const twt = require("../controllers/jwt_token")

router_api.get("/my_api", vew_control.Hello);
router_api.get("/my_Info", vew_control.My_Info)
router_api.get("/jwt", twt.CreateToken)


module.exports = router_api;