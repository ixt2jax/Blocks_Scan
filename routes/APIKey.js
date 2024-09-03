const express = require('express');
const router = express.Router();
const ApiKey = require('../models/apiKey'); // Import the ApiKey model
const User = require('../models/UserModel'); // Import the User model (for validation purposes)
const crypto = require('crypto');

// Function to generate API key
function generateApiKey() {
    return crypto.randomBytes(32).toString('hex');
}


router.post('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check how many API keys the user already has
        const existingKeys = await ApiKey.find({ userId });
        if (existingKeys.length >= 3) {
            return res.status(400).json({ message: 'User already has the maximum of 3 API keys' });
        }

        // Generate new API key
        const apiKey = generateApiKey();

        // Save new API key in the database
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
