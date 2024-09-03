const express = require('express');
const router = express.Router();
const rateLimiterMiddleware = require('../middlewares/rateLimiter');

// Apply rate limiter on a specific route (e.g., user plans)
router.get('/user/:id/protected-route', rateLimiterMiddleware, (req, res) => {
    res.send('This is a protected route with rate limiting based on your plan.');
});

module.exports = router;


