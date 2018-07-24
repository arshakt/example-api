const bcrypt = require('bcrypt')
const Promise = require('bluebird')
const crypto = require('crypto')
const mongoose = require('mongoose')
const userSchema = require('./schema')

const userModel = mongoose.model('Users', userSchema, 'users')

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
          user.token = crypto.createHash('sha256').update(email, new Date()).digest('hex')
          return user.save()
        })
        .then((user)=>({token: user.token}))
    })
}

module.exports = {
  createUser,
  loginUser
}
