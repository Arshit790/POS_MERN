const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userController");

const router = express.Router();

//routes

//Method - Get
router.get("/login", loginController);

//Method - Post
router.post("/register", registerController);

module.exports = router;
