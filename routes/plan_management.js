const express = require('express');
const router = express.Router();
const Plan_Management = require('../models/Plan_Management');

// Route to fetch all plans or populate them if empty
router.get('/plans', async (req, res) => {
    try {
        // Fetch existing plans
        let plans = await Plan_Management.find({});

        if (plans.length === 0) {
            // If no plans are found, populate with example data
            plans = [
                { plan_id: 1, price: 'free', max_req_per_sec: 5 },
                { plan_id: 2, price: '10', max_req_per_sec: 10 },
                { plan_id: 3, price: '50', max_req_per_sec: 50 }
            ];
            await Plan_Management.insertMany(plans);
            console.log('Plans populated successfully');
        }
        
        // Return the plans
        res.json(plans);
    } catch (err) {
        console.error('Error fetching or populating plans:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
