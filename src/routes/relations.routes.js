const { Router } = require('express');
const { getRelation } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.get('/relation/:id', authenticate, getRelation);

module.exports = router;
