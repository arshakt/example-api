const Joi = require('joi')
const { InvalidInputError } = require('../../utils/errors')

function validateRegister(req, res, next){
  const schema = {
    body: {
      name: Joi.string().required().min(2).max(50),
      email: Joi.string().required().email(),
      password: Joi.string().min(8).max(28)
    }
  }
  const {error} = Joi.validate({ body: req.body}, schema)

  if(error) return next(new InvalidInputError(error.details[0].message))
  return next()
}

function validateLogin(req, res, next){
  const schema = {
    body: {
      email: Joi.string().required().email(),
      password: Joi.string().min(8).max(28)
    }
  }
  const {error} = Joi.validate({ body: req.body}, schema)

  if(error) return next(new InvalidInputError(error.details[0].message))
  return next()
}

module.exports = {
  validateRegister,
  validateLogin
}
