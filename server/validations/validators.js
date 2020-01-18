const { body } = require('express-validator')

exports.hasUrl = body('url')
    .isBase64()
    .withMessage('Image URL in base64 is required.')