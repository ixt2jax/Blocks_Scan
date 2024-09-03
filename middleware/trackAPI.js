const APIUsage = require('../models/APIUsage'); // Assuming the model is in the models folder
const User = require('../models/UserModel');
const Plan_Management = require('../models/Plan_Management');

const trackAPIUsage = async (req, res, next) => {
    // Assuming user ID is passed through params or body
    const userId = req.params.id || req.body.userId; // Get the user ID from request params or body
    const apiName = req.originalUrl;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required to track API usage' });
    }

    try {
        // Fetch user and their current plan
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const plan = await Plan_Management.findById(user.current_plan);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found for the user' });
        }

        // Track or update the API usage
        let usage = await APIUsage.findOne({ user_id: userId, api_name: apiName });
        if (usage) {
            usage.request_count += 1;
            usage.last_request_at = Date.now();
        } else {
            usage = new APIUsage({
                user_id: userId,
                plan_id: plan._id,
                api_name: apiName,
            });
        }

        await usage.save();
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error while tracking API usage' });
    }
};

module.exports = trackAPIUsage;
