const validationHandler = require('../validations/validationHandler')
const queries = require('../db/queries')
const cloud = require('../cloud/cloudHandler')

let counter = async function(){
    const counter = await cloud.countItems()
    return counter+1
}

exports.getData = async (req, res, next) => {
    queries.getData(results => {
        try {
            res.send(results)
        } catch(err) {
            next(err)
        }
    })
}

exports.storeData = async (req, res, next) => {
    try {
        validationHandler(req)
        cloud.renewBuffer()
        cloud.storeToCloud(req.body.base64, await counter(), req.body.description)
        res.send({message: 'Image was uploaded successfully!'})
    } catch(err) {
        next(err)
    }
}