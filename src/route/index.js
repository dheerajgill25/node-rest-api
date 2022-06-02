const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.use("/", homeController.getCurrentTime);

module.exports = router;
