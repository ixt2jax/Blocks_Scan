const mongoose = require('mongoose');

const apiUsageSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    plan_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan_Management',
        required: true
    },
    api_name: {
        type: String,
        required: true
    },
    request_count: {
        type: Number,
        default: 1
    },
    last_request_at: {
        type: Date,
        default: Date.now
    }
});

const APIUsage = mongoose.model('APIUsage', apiUsageSchema);
module.exports = APIUsage;
