const { Router } = require('express');
const { 
  loginController,
  userController,
} = require('./controllers');
const { validateLogin, validateToken } = require('./middlewares');

const router = Router();

router.post('/login', validateLogin, loginController.login);
router.post('/user', userController.create);
router.get('/user', validateToken, userController.getAll);

module.exports = router;