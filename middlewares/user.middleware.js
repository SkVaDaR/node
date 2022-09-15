const { UserModel } = require('../dataBase');
const ErrorHandler = require('../errors/errorHandler');
const { USER_NOT_FOUND } = require('../errors/errorMessages');

module.exports = {
  checkUserExist: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userById = await UserModel.findById(userId);
      if (!userById) {
        throw new ErrorHandler(USER_NOT_FOUND.message, USER_NOT_FOUND.code);
      }

      req.user = userById;

      next();
    } catch (e) {
      next(e);
    }
  }
};
