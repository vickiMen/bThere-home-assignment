const Connection = require('tedious').Connection
const Request = require('tedious').Request
const TYPES = require('tedious').TYPES
const config = require('../config/config')

const connection = new Connection(config.db)

exports.insert = function(url, description) {
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


exports.getData = function(callback) {
    const request = new Request(
        `SELECT url, description FROM ImgSchema.Images;`,
        
        function(err, rowCount, rows) {
            if (err) {
                console.log(err)
            } else {
                console.log(rowCount + ' row(s) returned')
            }
        })

        const newResults = []
        
        request.on('row', function(columns) {
            let results = []
            columns.forEach(function(column) {
                results.push({
                    col: column.metadata.colName,
                    val: column.value
                })
            })
            
            let url = ''
            let desc = ''
            for (let i=0; i<results.length; i++){
                if ( i % 2 == 0) {
                    url = results[i]['val']
                }
                else {
                    desc = results[i]['val']
                    newResults.push({url, desc})
                }
            }
        })

        request.on("doneProc", (rowCount, more, rows) => {
            callback(newResults)
        })

        connection.execSql(request)
}