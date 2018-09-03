const mongoose = require('mongoose')

const hashUtil = require('../../utils/hash')

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

userSchema.pre('save', hashUtil.hashPassword)

module.exports = userSchema


