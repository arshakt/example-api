const router = require('express').Router()

// const userValidationMiddleware = require('../../middlewares/validations/user.validations')

const userService = require('./services/user.service')

router.get('/',
  // userValidationMiddleware.validateRegister,
  userService.listUser
)
router.get('/:userId',
  // userValidationMiddleware.validateLogin,
  userService.getUserById
)

router.patch('/:userId',
  // userValidationMiddleware.validateLogin,
  userService.updateUser
)

router.delete('/:userId',
  // userValidationMiddleware.validateLogin,
  userService.deleteUser
)

module.exports = router
