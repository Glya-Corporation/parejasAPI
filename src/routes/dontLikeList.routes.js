const { Router } = require('express');
const { getDontLikeList, getAllDontLikeList } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.get('/dont/like/list/:id', authenticate, getDontLikeList);

router.get('/dont/like/list/all/:id', authenticate, getAllDontLikeList);

module.exports = router;
