const express = require('express')
const { getItemController } = require('../controllers/itemController')

const router = express.Router()

//routes
//Method - Get
router.get('/get-item',getItemController)

module.exports = router