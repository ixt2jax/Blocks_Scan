// const express = require('express');
// const router = express.Router();
// const Plan = require('../models/APIUsage');  
// router.get('/:id/status', async (req, res) => {
//     try {
//         const stats = await APIUsage.find()
//             .populate('user_id', 'name email')
//             .populate('plan_id', 'price max_req_per_sec');
//         res.json(stats);
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to fetch API usage stats' }).send(err);
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const ApiUsage = require('../models/APIUsage');

router.get('/', async (req, res) => {
    try {
        const stats = await ApiUsage.find()
            .populate('user_id', 'name email')
            .populate('plan_id', 'price max_req_per_sec');
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get usage stats for a specific user
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const userStats = await ApiUsage.find({ user: userId })
            .populate('plan_id', 'price max_req_per_sec');;
        res.status(200).json(userStats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;