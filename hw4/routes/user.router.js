const router = require('express').Router();

const userController = require('../controllers/user.controller');
const { userMiddleware } = require('../middlewares');

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.get('/:userId', userMiddleware.userIdValidation, userController.getUserById);

router.delete('/:userId', userMiddleware.userIdValidation, userController.deleteUserById);

router.patch('/:userId', userMiddleware.userIdValidation, userController.updateUserById);

module.exports = router;
