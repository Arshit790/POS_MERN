const express = require("express");
const { addBillsController } = require("../controllers/itemController");

const router = express.Router();

//routes

router.post("/add-bills", addBillsController);

module.exports = router;
