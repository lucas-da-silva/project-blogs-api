const { Router } = require('express');
const { 
  loginController,
  userController,
} = require('./controllers');
const { validateLogin } = require('./middlewares');

const router = Router();

router.post('/login', validateLogin, loginController.login);
router.post('/user', userController.create);

module.exports = router;