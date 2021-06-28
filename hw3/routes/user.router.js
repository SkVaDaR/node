const router = require('express').Router();

const userController = require('../controllers/user.controller');
const { userMiddleware } = require('../middlewares/index');

router.get('/', userController.getAllUsers);

router.post('/', userMiddleware.userCheck, userController.createUser);

router.get('/:userId', userMiddleware.userIdValidation, userController.getUserById);

router.delete('/:userId', userMiddleware.userIdValidation, userController.deleteUserById);

module.exports = router;
