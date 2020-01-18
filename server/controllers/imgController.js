const validationHandler = require('../validations/validationHandler')
const dbHandling = require('../data/index')
const config = require('../config/config')
const queries = require('../db/queries')
const cloud = require('../cloud/cloudHandler')

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
        //upload to gcloud
        cloud.storeToCloud(req.body.url, req.body.description)
        // queries.insert(req.body.url, req.body.description)
        res.send({message: 'Image was uploaded successfully!'})
    } catch(err) {
        next(err)
    }
}