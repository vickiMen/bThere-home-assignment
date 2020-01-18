const config = require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

console.log('config',config)


app.listen(config.port, () => {console.log(`Server is running on port ${config.port}`)})

module.exports = app