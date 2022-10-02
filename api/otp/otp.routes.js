const { Router } = require('express')
const { createOtp, checkOtp, test } = require('./otp.controller')

const router = Router()

router.get('/test', test)

router.get('/check-otp', checkOtp)
router.post('/create-otp', createOtp)

module.exports = router
