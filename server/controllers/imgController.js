const validationHandler = require('../validations/validationHandler')
const queries = require('../db/queries')
// const config = require('../config/config')
const cloud = require('../cloud/cloudHandler')

let counter = 0

exports.getData = async (req, res, next) => {
    queries.getData(results => {
        try {
            res.send(results)
        } catch(err) {
            next(err)
        }
    })
}

exports.storeData = (req, res, next) => {
    try {
        validationHandler(req)
        counter++
        cloud.renewBuffer()
        cloud.storeToCloud(req.body.url, counter, req.body.description)
        res.send({message: 'Image was uploaded successfully!'})
    } catch(err) {
        next(err)
    }
}