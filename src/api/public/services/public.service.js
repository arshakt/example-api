const userModel = require('../../../models/users/model')
const successHandler = require('../../../utils/success-handler')

function createUser(req, res, next) {
  const {name, email, password} = req.body
  userModel.createUser({name, email, password})
    .then((data) => successHandler.handleCreate(res, data))
    .catch(next)
}

function loginUser(req, res, next) {
  const {email, password} = req.body
  userModel.loginUser({email, password})
    .then((data) => successHandler.handleGet(res, data))
    .catch(next)
}

module.exports = {
  createUser,
  loginUser
}
