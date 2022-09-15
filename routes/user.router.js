const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.get('/:userId', userMiddleware.checkUserExist, userController.findById);

router.patch('/:userId', userMiddleware.checkUserExist, userController.updateUserById);

router.delete('/:userId', userMiddleware.checkUserExist, userController.deleteUser);

module.exports = router;
