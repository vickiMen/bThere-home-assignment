const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

// Create connection to database
const config = {
  server: 'localhost',
  authentication: {
      type: 'default',
      options: {
          userName: 'sa', // update me
          password: 'MichaelJordan23' // update me
      }
  },
  options: {
      database: 'SampleDB'
  }
}
const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});