const router = require('express').Router()

const userValidationMiddleware = require('../../middlewares/validations/user.validations')

const publicService = require('./services/public.service')

router.post('/register',
  userValidationMiddleware.validateRegister,
  publicService.createUser
)
router.post('/login',
  userValidationMiddleware.validateLogin,
  publicService.loginUser
)

module.exports = router
