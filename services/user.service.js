const { UserModel } = require('../dataBase');

module.exports = {
  getAll: () => UserModel.find({}),

  insertUser: (user) => UserModel.push(user),

  findById: (userId) => UserModel.findById(userId),

  deleteUser: (userId) => UserModel.findByIdAndDelete(userId),

  updateUser: (userId, updatedUser) => UserModel.findOneAndUpdate(userId, updatedUser)
};
