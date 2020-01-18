const {Storage} = require('@google-cloud/storage');
var stream = require('stream');
const config = require('../config/config')

const projectId = config.gcloud.projectId
const keyFilename = config.gcloud.keyFilename
const bucketName = config.gcloud.bucket
// const keyFilename = '../../home-assignment-bThere-8f0eda8b786c.json'
// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express();

const storage = new Storage({ projectId, keyFilename })
const bucket = storage.bucket(bucketName)
const bufferStream = new stream.PassThrough();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

exports.storeToCloud = function(imageBase64, description) {
    bufferStream.end(Buffer.from(imageBase64, 'base64'))
    const file = bucket.file('image.jpg')
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
        .on('finish', function() {
          console.log(file.url)
        //   queries.insert( description)
        })
}