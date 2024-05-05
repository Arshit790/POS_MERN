const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const itemModel = require('./models/itemModels')
const itemData = require('./utils/data')
require('colors')

//config

dotenv.config()
connectDb()

//function seeder

const importData = async() => {
try {
  
} catch (error) {
    console.log(error)
}
}