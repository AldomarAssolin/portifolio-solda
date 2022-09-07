const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')


router.get('/dashboard', controller.showDashboard)
router.get('/', controller.showHome)

module.exports = router