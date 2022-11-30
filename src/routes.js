const { Router } = require('express');
const {
  loginController,
  userController,
  categoryController,
} = require('./controllers');
const {
  validateLogin,
  validateToken,
  validateCategory,
} = require('./middlewares');

const router = Router();

router.post('/login', validateLogin, loginController.login);
router.post('/user', userController.create);
router.get('/user', validateToken, userController.getAll);
router.get('/user/:id', validateToken, userController.getById);
router.post(
  '/categories',
  validateToken,
  validateCategory,
  categoryController.create,
);

module.exports = router;
