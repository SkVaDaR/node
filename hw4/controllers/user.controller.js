const { responseCodesEnum, responseMessages } = require('../constants');
const { userService } = require('../services');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.findAll();

      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      await userService.insertUser(req.body);

      res.status(responseCodesEnum.CREATED).json(responseMessages.CREATED);
    } catch (e) {
      next(e);
    }
  },

  getUserById: async (req, res, next) => {
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

      res.status(responseCodesEnum.UPDATED).json(responseMessages.UPDATED);
    } catch (e) {
      next(e);
    }
  },

  deleteUserById: (req, res) => {
    const { user } = req;

    res.status(responseCodesEnum.NO_CONTENT).json(responseMessages.DELETED);
  }
};
