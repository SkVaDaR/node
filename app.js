const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const { userRouter } = require('./routes');
const { PORT } = require('./constants/constant');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/users', userRouter);
app.use('*', _notFoundHandler);
app.use(_handleErrors);

app.listen(PORT, () => {
  console.log('app listen 3000');
});

function _handleErrors(err, req, res, next) {
  res.status(err.status).json({
    message: err.message || 'Unknown error',
    customCode: err.code || 0
  });
}

function _notFoundHandler(err, req, res, next) {
  next({
    status: err.status || 404,
    message: err.message || 'Rout not fond'
  });
}

function _mongooseConnector() {
  mongoose.connect('mongodb://localhost:27017/dataBase', { useNewUrlParser: true, useUnifiedTopology: true });
}
_mongooseConnector();

// TODO UPDATE
