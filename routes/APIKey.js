const express = require('express');
const router = express.Router();
const ApiKey = require('../models/apiKey');
const User = require('../models/UserModel'); 
const crypto = require('crypto');

// Function to generate API key
function generateApiKey() {
    return crypto.randomBytes(32).toString('hex');
}
router.post('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const existingKeys = await ApiKey.find({ userId });
        if (existingKeys.length >= 3) {
            return res.status(400).json({ message: 'User already has the maximum of 3 API keys' });
        }
        const apiKey = generateApiKey();

        const newApiKey = new ApiKey({
            userId,
            apiKey
        });
        await newApiKey.save();

        res.status(201).json({ message: 'API key generated successfully', apiKey: newApiKey });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
