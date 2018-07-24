const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')

const api = require('./api')
const mongooseConnection = require('./storages/mongoose')
const errorHandler = require('./middlewares/error-handler')
const { PathNotFoundError } = require('./utils/errors')

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1', api)

app.use((req, res, next) => {
  return next(new PathNotFoundError('Specified path is not found.'))
})

app.use(errorHandler.handleError)

module.exports = app
