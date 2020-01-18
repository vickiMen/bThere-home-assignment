const sql = require( "mssql" )
const request = new sql.Request()

const executeQuery = (query) => request.query(query)

exports.module = executeQuery