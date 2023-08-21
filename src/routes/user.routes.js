const { Router } = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/user/create', createUser);

router.get('/user/:id', authenticate, getUser);

router.put('/user/:id/update', authenticate, updateUser);

router.delete('/user/:id/delete', authenticate, deleteUser);

module.exports = router;
