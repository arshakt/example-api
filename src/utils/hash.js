const bcrypt = require('bcrypt')

function hashPassword(next){
  const user = this

  if (!user.isModified('password')) return next()
  return bcrypt.hash(user.password, 10)
    .then((hash)=>{
      user.password = hash
      next()
    }).catch(next)
}

module.exports = {
  hashPassword
}
