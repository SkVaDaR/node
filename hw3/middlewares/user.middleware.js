const userService = require('../services/user.service');
const db = require('../dataBase/users');

module.exports = {
  userIdValidation: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userById = userService.findById(userId);

      if (!userById) {
        throw new Error('User not found');
      }

      await next();
    } catch (e) {
      res.status(404).json(e.message);
    }
  },
  userCheck: async (req, res, next) => {
    try {
      const { name } = req.body;

      for (const user of db) {
        if (user.name === name) {
          throw new Error('This name is already taken');
        }
      }
      await next();
    } catch (e) {
      res.status(606).json(e.message);
    }
  }
};
