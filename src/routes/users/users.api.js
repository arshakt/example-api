const router = require('express').Router();
const UsersService = require('./services/users.services');

router.get('/', UsersService.list)

module.exports = router;
