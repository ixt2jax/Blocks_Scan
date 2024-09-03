const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');  

// GET- Fetch all plans
router.get('/all-plans', async (req, res) => {
  try {
    const plans = await Plan.find({});
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
});
  
module.exports = router;
