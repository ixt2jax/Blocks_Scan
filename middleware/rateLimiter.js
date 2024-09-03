const rateLimit = require('express-rate-limit');
const User = require('../models/User');
const Plan_Management = require('../models/Plan_Management');

// Function to create rate limiter based on user plan
const createRateLimiter = (maxRequestsPerSec) => {
    return rateLimit({
        windowMs: 1000, // 1 second
        max: maxRequestsPerSec, // Max requests per second based on the plan
        message: 'Too many requests, please try again later.'
    });
};

// Middleware to fetch user's plan and apply rate limiting
const rateLimiterMiddleware = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).populate('current_plan');

        if (!user || !user.current_plan) {
            return res.status(404).json({ message: 'User or plan not found' });
        }

        const rateLimiter = createRateLimiter(user.current_plan.max_req_per_sec);
        rateLimiter(req, res, next);  // Apply the rate limiter
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = rateLimiterMiddleware;
