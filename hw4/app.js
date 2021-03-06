const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const { userRouter } = require('./routes');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/users', userRouter);
app.use('*', _notFoundHandler);
app.use(_handleErrors);

app.listen(3000, () => {
  console.log('App listen 3000');
});

// eslint-disable-next-line no-unused-vars
function _handleErrors(err, req, res, next) {
  res
    .status(err.status)
    .json({
      message: err.message || 'Unknown error',
      customCode: err.code || 0
    });
}

function _notFoundHandler(err, req, res, next) {
  next({
    status: err.status || 404,
    message: err.message || 'Not found route'
  });
}

function _mongooseConnector() {
  mongoose.connect('mongodb://localhost:27017/hw', { useNewUrlParser: true, useUnifiedTopology: true });
}
