const { Router } = require('express');
const login = require('../controllers/auth.controller.js');

const router = Router();

/**
* @openapi
* /api/v1/login:
*   post:
*     summary: Login
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:
*                 type: string
*                 description: username
*               password:
*                 type: string
*                 description: Password
*             example:
*               username: "user123"
*               password: "123123"
*/

router.post('/login', login);

module.exports = router;