const imgController = require('../controllers/imgController')
const express = require('express')
const router = express.Router()
const { hasImg } = require('../validations/validators')

router.get('/getImages', imgController.getData)
router.post('/uploadImage', hasImg, imgController.storeData)

module.exports = router