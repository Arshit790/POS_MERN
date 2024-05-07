const express = require('express')
const { getItemController,addItemController,editItemController } = require('../controllers/itemController')

const router = express.Router()

//routes

//Method - Get
router.get('/get-item',getItemController)

//Method - Post
router.post('/add-item',addItemController)

//Method - PUT
router.put('/edit-item',editItemController)

module.exports = router