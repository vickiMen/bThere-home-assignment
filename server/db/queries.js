const Connection = require('tedious').Connection
const Request = require('tedious').Request
const TYPES = require('tedious').TYPES
const config = require('../config/config')

const connection = new Connection(config.db)

exports.insert = function(url, description) {
    console.log("Inserting image into Table...")
    const request = new Request(
        `INSERT INTO ImgSchema.Images (url, description) OUTPUT INSERTED.Id VALUES ('${url}', '${description}');`,
        
        function(err, rowCount) {
            if (err) {
                console.log(err)
            } else {
                console.log(rowCount + ' row(s) inserted')
            }
        })

    request.addParameter('url', TYPES.NVarChar, url)
    request.addParameter('description', TYPES.NVarChar, description)

    connection.execSql(request)
}