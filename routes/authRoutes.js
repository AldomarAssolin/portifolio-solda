const express = require('express')
const router = express.Router()
const AuthControllers = require('../controller/AuthControllers')

router.get('/admin', AuthControllers.login)

module.exports = router