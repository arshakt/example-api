const ERRORS = {
  InvalidInputError: {
    status: 400,
    code: 'InvalidInput'
  },
  PathNotFoundError: {
    status: 404,
    code: 'NotFound'
  },
  Default: {
    status: 500,
    code: 'InternalServerError'
  }
}

function handleError(err, req, res, next) {
  const errorResponse = ERRORS[err.name] || ERRORS.Default

  errorResponse.message = err.message

  res.status(errorResponse.status).json(errorResponse)
}

module.exports = {
  handleError
}
