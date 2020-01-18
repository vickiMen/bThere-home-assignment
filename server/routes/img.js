const imgController = require('../controllers/imgController')
const express = require('express')
const router = express.Router()
const { hasUrl } = require('../validations/validators')

router.get('/', imgController.index)
router.post('/', hasUrl, imgController.store)

module.exports = router