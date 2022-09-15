const { userService } = require('../services');
const { UserModel } = require('../dataBase');
const { responseCodesEnum, responseMessagesEnum } = require('../constants');

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await userService.getAll();
    res.json(users);
  },

  createUser: async (req, res, next) => {
    try {
      await UserModel.create(req.body);

      res.status(responseCodesEnum.CREATED).json(responseMessagesEnum.CREATED);
    } catch (e) {
      next(e);
    }
  },

  findById: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const user = await userService.findById(userId);

      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  updateUserById: async (req, res, next) => {
    try {
      const { userId } = req.params;
      await userService.updateUser(userId, req.body);

      res.status(responseCodesEnum.UPDATED).json(responseMessagesEnum.UPDATED);
    } catch (e) {
      next(e);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const { userId } = req.params;

      await userService.deleteUser(userId);

      res.status(responseCodesEnum.DELETED).json(responseMessagesEnum.DELETED);
    } catch (e) {
      next(e);
    }
  }
};
