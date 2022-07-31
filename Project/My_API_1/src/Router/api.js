const express = require("express");
const router = express.Router();

const controler = require("../Controler/control")

router.get("/home", controler.home);

router.post("/about", controler.about);

router.post("/person", controler.person)



module.exports = router;