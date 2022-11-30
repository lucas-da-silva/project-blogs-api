const { Router } = require('express');
const { 
  loginController,
  userController,
  categoryController,
} = require('./controllers');
const { validateLogin, validateToken } = require('./middlewares');

const router = Router();

router.post('/login', validateLogin, loginController.login);
router.post('/user', userController.create);
router.get('/user', validateToken, userController.getAll);
router.get('/user/:id', validateToken, userController.getById);
router.post('/categories', validateToken, categoryController.create);

module.exports = router;