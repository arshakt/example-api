const crypto = require('crypto')

function generateToken(userId) {
  return crypto.createHash('sha256').update(userId.toString() + Date.now()).digest('base64');
}

module.exports = {
  generateToken
}
