const express = require('express');
const router = express.Router();
const rateLimiterMiddleware = require('../middlewares/rateLimiter');

router.get('/user/:id/protected-route', rateLimiterMiddleware, (req, res) => {
    res.send('This is a protected route with rate limiting based on plan.');
});

module.exports = router;


