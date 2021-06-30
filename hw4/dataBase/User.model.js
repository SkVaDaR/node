const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum, rolesEnum } = require('../constants');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 20
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number
  },
  role: {
    type: String,
    enum: Object.values(rolesEnum),
    default: rolesEnum.GUEST
  },
  password: {
    type: String,
    select: false
  }

}, { timestamps: true });

module.exports = model(dataBaseTablesEnum.USER, userSchema);
