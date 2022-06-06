const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");

router.get("", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/mark/:userId", UserController.getUserMark);
router.post("/mark", UserController.addUserMark);
router.put("/mark/:id", UserController.updateUserMark);

module.exports = router;
