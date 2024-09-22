require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.DB, console.log("server connected"))
app.use(express.json())


app.listen(2800, console.log("server connnected"))