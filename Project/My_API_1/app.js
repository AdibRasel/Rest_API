const express = require("express");
const app = express();

const router = require("./src/Router/api")


//sequrity middelware impot
   const express_rate_limit = require("express-rate-limit")
   const helmet = require("helmet");
   const express_mongo_sanitize = require("express-mongo-sanitize")
   const xss_clean = require("xss-clean");
   const hpp = require("hpp")
   const cors = require("cors")

//sequrity middelware implement
    app.use(helmet())
    app.use(express_mongo_sanitize())
    app.use(xss_clean())
    app.use(hpp())
    app.use(cors())

// request rate limite 
const limiter = express_rate_limit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter)




app.use("/api/v1", router)


// undefined rout 
app.use("*", (req, res)=>{
    res.status(404);
    res.json({
        status:"Faild",
        Data:"Your worng link"
    })
})


module.exports = app;