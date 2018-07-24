const router = require('express').Router()

const publicApi = require('./public/public.api')

router.use(publicApi)

module.exports = router
