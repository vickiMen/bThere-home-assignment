const imgController = require('../controllers/imgController')
const express = require('express')
const router = express.Router()
const { hasUrl } = require('../validations/validators')

router.get('/getImages', imgController.getData)
router.post('/uploadImage', hasUrl, imgController.storeData)

module.exports = router