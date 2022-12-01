const { Router } = require('express');
const { postController } = require('../controllers');
const { validateToken, validatePost } = require('../middlewares');

const router = Router();

router.post('/', validateToken, validatePost, postController.create);

module.exports = router;