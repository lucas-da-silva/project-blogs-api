const { Router } = require('express');
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares');

const router = Router();

router.post('/', validateLogin, loginController.create);

module.exports = router;