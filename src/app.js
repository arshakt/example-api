const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/users/users.api');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use('/users', userRouter);

app.use((req, res, next) => {
  const error = new Error('Path not found.');
  next(error);
});

app.use((error, req, res) => {
  res.status(500).json({message: error.message});
});

module.exports = app;
