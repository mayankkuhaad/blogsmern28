const express = require("express");
const{body} =require("express-validator")

const router = express.Router();

router.post("/login",()=>{})

router.post("/register", body("name").isAlpha(),
body("password").isLength({ min: 6, max: 16 }),()=>{})

module.exports = router;

