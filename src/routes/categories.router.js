const { Router } = require('express');
const { categoryController } = require('../controllers');
const { validateToken, validateCategory } = require('../middlewares');

const router = Router();

router.post(
  '/',
  validateToken,
  validateCategory,
  categoryController.create,
);
router.get('/', validateToken, categoryController.getAll);

module.exports = router;