const { model, Schema } = require('mongoose');

const { userRolesEnum, dataBaseTablesEnum } = require('../constants');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  age: {
    type: Number,
    default: 13
  },
  role: {
    type: String,
    enum: Object.values(userRolesEnum),
    default: userRolesEnum.USER
  },
}, { timestamps: true });

module.exports = model(dataBaseTablesEnum.USER, userSchema);
