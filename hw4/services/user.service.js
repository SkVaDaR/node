const UserModel = require('../dataBase/User.model');

module.exports = {
  findAll: () => UserModel.find({}),

  insertUser: (user) => UserModel.create(user),

  findById: (userId) => UserModel.findById(userId),

  updateUser: (userId, updatedUser) => UserModel.findOneAndUpdate(userId, updatedUser),

  deleteUser: (userId) => UserModel.findByIdAndDelete(userId)
};
