const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const imgRoutes = require('../routes/img')
const app = express()
const errorHandler = require('../middlewares/errorHandler')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))


app.use('/', imgRoutes)

app.use(errorHandler)


app.listen(config.port, () => {console.log(`Server is running on port ${config.port}`)})