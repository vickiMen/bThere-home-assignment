const validationHandler = require('../validations/validationHandler')
const dbHandling = require('../data/index')
const config = require('../config/config')
const cloud = require('../cloud/cloudHandler')

let counter = 0

exports.index = async (req, res, next) => {
    const query = 'select * from img'
    await dbHandling.executeQuery(query)
    try {
        res.send(res)
    } catch {
        next(err)
    }
}

exports.store = async (req, res, next) => {
    try {
        // console.log(counter)
        validationHandler(req)
        //upload to gcloud
        counter++
        await cloud.storeToCloud(req.body.url, counter, req.body.description)
        res.send({message: 'Image was uploaded successfully!'})
    } catch(err) {
        next(err)
    }
}