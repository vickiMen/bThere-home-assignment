const Connection = require('tedious').Connection
const Request = require('tedious').Request
const TYPES = require('tedious').TYPES
const async = require('async')
const config = require('../config/config')

const connection = new Connection(config.db)

exports.insert = function(url, description) {
    console.log('url',url, 'description', description)
    console.log("Inserting image into Table...");
    const request = new Request(
        `INSERT INTO ImgSchema.Images (url, description) OUTPUT INSERTED.Id VALUES ('${url}', '${description}');`,
        function(err, rowCount, rows) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' row(s) inserted');
            // callback(null, 'Nikita', 'United States');
        }
        });
    request.addParameter('url', TYPES.NVarChar, url);
    request.addParameter('description', TYPES.NVarChar, description);

    // Execute SQL statement
    connection.execSql(request);
}

// exports.module = Insert