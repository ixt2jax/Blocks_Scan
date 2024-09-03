const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
 
// create new user
router.post('/register', async(req,res)=>{
    const {name, email, password} = req.body;
    try {
    const user = new User({name, email, password});
    await user.save();
    res.status(201).json(user)
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

// Fetch user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

    

module.exports = router;
