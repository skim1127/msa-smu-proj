// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// ROOT
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Social Meet-Up Application'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on on port: ${process.env.PORT}`)
})