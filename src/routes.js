const { Router } = require('express');
const { loginController } = require('./controllers');
const { validateLogin } = require('./middlewares');

const router = Router();

router.post('/login', validateLogin, loginController.login);

module.exports = router;