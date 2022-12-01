const { Router } = require('express');
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares');

const router = Router();
console.log('OLA MEU NOME E LUCAS');

router.post('/', validateLogin, loginController.create);

module.exports = router;