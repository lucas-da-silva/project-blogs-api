const { Router } = require('express');
const { postController } = require('../controllers');
const { validateToken, validatePost } = require('../middlewares');

const router = Router();

router.post('/', validateToken, validatePost.create, postController.create);
router.get('/', validateToken, postController.getAll);
router.get('/:id', validateToken, postController.getById);
router.put('/:id', validateToken, validatePost.update, postController.update);

module.exports = router;
