const express = require("express");

const router_api = express.Router();

const { CreateProfile } = require("../controllers/profile_controler");

const vew_control = require("../controllers/control")
const jwt = require("../controllers/jwt_token");

router_api.get("/my_api", vew_control.Hello);
router_api.get("/my_Info", vew_control.My_Info)
router_api.get("/jwt", jwt.CreateToken) 

router_api.get("/createProfile", CreateProfile)


module.exports = router_api;