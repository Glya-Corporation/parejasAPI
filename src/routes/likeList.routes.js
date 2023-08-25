const { Router } = require('express');
const { getLikeList, getAllLikeList } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.get('/like/list/:id', authenticate, getLikeList);

router.get('/like/list/all/:id', authenticate, getAllLikeList);

module.exports = router;
