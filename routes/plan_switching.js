const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const Plan_Management = require('../models/Plan_Management'); // Import Plan model

// Endpoint to switch user's plan
router.put('/switch/:id', async (req, res) => {
    const { plan_id } = req.body;  // Plan ID sent in the request body

    try {
        // Fetch the requested plan
        const plan = await Plan_Management.findOne({ plan_id: plan_id });
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        // Update the user's current plan
        const user = await User.findByIdAndUpdate(req.params.id, {
            current_plan: plan._id
        }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            message: `Plan switched to ${plan.plan_id}`,
            user
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
