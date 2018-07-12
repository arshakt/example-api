const SuccessHandler = require('../../../utils/success-handler');

function list(req, res, next) {
  SuccessHandler.handleList(res, []);
}

module.exports = {
  list
};
