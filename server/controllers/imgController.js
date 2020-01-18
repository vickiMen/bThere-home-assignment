const validationHandler = require('../validations/validationHandler')
const dbHandling = require('../data/index')
const config = require('../config/config')
const queries = require('../db/queries')

exports.index = async (req, res, next) => {
    
    const query = 'select * from img'
    await dbHandling.executeQuery(query)
    try {
        res.send(res)
    } catch {
        next(err)
    }
}

exports.store = (req, res, next) => {
    try {
        validationHandler(req)
        // const query = `INSERT INTO '${config.db.options.database}' (id, url, description) VALUES (null, '${req.body.url}', '${req.body.description}')`
        queries.insert(req.body.url, req.body.description)
        res.send({message: 'Image was uploaded successfully!'})
    } catch(err) {
        next(err)
    }
}