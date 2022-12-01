const { Router } = require('express');
const { userController } = require('../controllers');
const { validateToken } = require('../middlewares');

const router = Router();

router.post('/', userController.create);
router.get('/', validateToken, userController.getAll);
router.get('/:id', validateToken, userController.getById);
router.delete('/me', validateToken, userController.deleteMe);

module.exports = router;