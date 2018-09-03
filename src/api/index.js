const router = require('express').Router()

const publicApi = require('./public/public.api')
const userApi = require('./users/user.api')

router.use(publicApi)
router.use(userApi)

module.exports = router
