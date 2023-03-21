const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController")

router.route("/").get(userController.getAllUsers).post(userController.createNewUsers)
router.route("/:id").get(userController.getUsersnyId).patch(userController.updateUsers).delete(userController.deleteUsers)

module.exports = router;