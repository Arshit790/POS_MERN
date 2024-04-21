const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotanv = require('dotenv')
const { bgCyan } = require('colors')
const connectDB = require('./config/config')
require('colors')

//dotenv config
dotanv.config()

//DB config
connectDB()

// rest api
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))


//routes
app.get('/',(req,res)=>{
  res.send("<h1>POS Backend</h1>")
})

//port
const PORT = process.env.PORT || 3000 

//listen
app.listen(PORT, ()=>{
  console.log(`Server running on Port ${PORT}`.bgCyan.white)
})
