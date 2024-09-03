const mongoose = require('mongoose');

// Define the schema for API plans
const planSchema = new mongoose.Schema({
    plan_id: {
        type: Number,
        required: true,
        unique: true
    },
    price: {
        type: String,  // Use 'String' for 'free' or numeric values as 'String'
        required: true
    },
    max_req_per_sec: {
        type: Number,
        required: true
    },
    inserted_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update the 'updated_at' field before saving
planSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

// Create the model for API plans
const Plan_Management = mongoose.model('Plan_Management', planSchema);

module.exports = Plan_Management;
