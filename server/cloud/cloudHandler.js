const {Storage} = require('@google-cloud/storage')
var stream = require('stream')
const config = require('../config/config')
const queries = require('../db/queries')

const projectId = config.gcloud.projectId
const keyFilename = config.gcloud.keyFilename
const bucketName = config.gcloud.bucket

const storage = new Storage({ projectId, keyFilename })
const bucket = storage.bucket(bucketName)
const bufferStream = new stream.PassThrough()


exports.storeToCloud = function(imageBase64, counter, description) {
    bufferStream.end(Buffer.from(imageBase64, 'base64'))
    const file = bucket.file(`image${counter}.jpg`)
    bufferStream.pipe(file.createWriteStream({
        resumable: false,
          metadata: {
            contentType: 'image/jpeg',
            metadata: {
              custom: 'metadata'
            }
          },
          public: true,
          validation: "md5"
        }))
        .on('error', function(err) {
            console.log(err)
        })
        .on('finish', async function() {
            console.log(file.metadata.selfLink)
            await queries.insert(file.metadata.selfLink, description)
        })
}