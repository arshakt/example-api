const userModel = require('../../../models/users/model')
const successHandler = require('../../../utils/success-handler')

function listUser(req, res, next) {

  userModel.listAllUsers()
    .then((data) => successHandler.handleCreate(res, data))
    .catch(next)
}

function getUserById(req, res, next) {

  const userId = req.params.userId

  userModel.getUserById(userId)
    .then((data) => successHandler.handleCreate(res, data))
    .catch(next)
}

function updateUser(req, res, next) {

  const { name, email, password } = req.body

  const userId = req.params.userId

  const changeData = {name, email, password}

  userModel.updateUser(userId, changeData)
    .then((data) => successHandler.handleCreate(res, {userId: data._id}))
    .catch(next)
}

function deleteUser(req, res, next) {

  const userId = req.params.userId

  userModel.deleteUser(userId)
    .then((data) => successHandler.handleCreate(res, data))
    .catch(next)
}

module.exports = {
  listUser,
  getUserById,
  updateUser,
  deleteUser
}
