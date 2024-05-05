const express = require('express')
const { getItemController,addItemController } = require('../controllers/itemController')

const router = express.Router()

//routes

//Method - Get
router.get('/get-item',getItemController)

//Method - Post
router.post('/add-item',addItemController)


module.exports = router