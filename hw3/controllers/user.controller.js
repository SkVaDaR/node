const userService = require('../services/user.service');

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await userService.findAll();

    res.json(users);
  },

  createUser: async (req, res) => {
    const user = req.body;

    await userService.insertUser(user);

    res.json('success');
  },

  getUserById: async (req, res) => {
    const { userId } = req.params;

    const user = await userService.findById(userId);

    res.json(user);
  },

  deleteUserById: async (req, res) => {
    const { userId } = req.params;

    await userService.deleteUser(userId);

    res.status(204).json(userId);
  }
};
