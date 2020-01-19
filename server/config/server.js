const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const imgRoutes = require('../routes/img')
const app = express()
const errorHandler = require('../middlewares/errorHandler')
// const Connection = require('tedious').Connection

// const connection = new Connection(config.db);

// // Attempt to connect and execute queries if connection goes through
// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connected');
//   }
// });


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', imgRoutes)

app.use(errorHandler)


app.listen(config.port, () => {console.log(`Server is running on port ${config.port}`)})

// module.exports = app