const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const { Schema }  = mongoose

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    index: true
  },
  password: String,
  token: String
})

userSchema.pre('save', function(next){
  const user = this

  if (!user.isModified('password')) return next()

  return bcrypt.hash(user.password, 10)
    .then((hash)=>{
      user.password = hash
      next()
    }).catch(next)
})

module.exports = userSchema


