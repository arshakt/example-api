const bcrypt = require('bcrypt')
const Promise = require('bluebird')
const crypto = require('crypto')
const mongoose = require('mongoose')
const userSchema = require('./schema')

const tokenLib = require('../../lib/token')
const userModel = mongoose.model('Users', userSchema, 'users')

function listAllUsers(){
  return userModel.find({})
}

function getUserById(userId){
  return userModel.findOne({_id: userId})
}

function createUser(createData){
  return userModel.create(createData).then((user)=>({userId: user._id}))
}

function loginUser(loginData) {
  const {email, password} = loginData
  return userModel.findOne({email})
    .then((user)=>{
      if(!user){
        return Promise.reject(new Error('wrong credentials'))
      }
      return bcrypt.compare(password, user.password)
        .then((result)=>{
          if(!result){
            return Promise.reject(new Error('wrong credentials'))
          }
          user.token = tokenLib.generateToken(user._id)
          return user.save()
        })
        .then((user)=>({token: user.token}))
    })
}

function updateUser(userId, updateData){
  let { name, email, password } = updateData

  return userModel.findOne({_id: userId})
    .then((user)=>{
      if(user){
        user.set({ name, email, password })
      }
      return user.save()
    })
}

function deleteUser(userId){
  return userModel.remove({_id: userId})
}

module.exports = {
  listAllUsers,
  getUserById,
  createUser,
  loginUser,
  updateUser,
  deleteUser
}
