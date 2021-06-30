const { User } = require('../dataBase');
const rolesEnum = require('../constants/user-roles.enum');
const { USER_NOT_FOUND, NOT_ADMIN } = require('../Errors/error.messages');

module.exports = {
  userIdValidation: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userById = await User.findById(userId);
      if (!userById) {
        throw new Error(USER_NOT_FOUND.message, USER_NOT_FOUND.code);
      }

      req.user = userById;

      next();
    } catch (e) {
      next(e);
    }
  },
  userRoleCheck: (req, res, next) => {
    try {
      const { role } = req.user;

      if (role !== rolesEnum.ADMIN) {
        throw new Error(NOT_ADMIN.message, NOT_ADMIN.code);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
