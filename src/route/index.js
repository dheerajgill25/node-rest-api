const express = require("express");
const router = express.Router();
const homeRoute = require("./home.route");
const userRoute = require("./user.route");

router.use("/", homeRoute);
router.use("/user", userRoute);

module.exports = router;
