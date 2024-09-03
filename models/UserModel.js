// sabse pehle to mongoose import karenge mongoose is what makes it easy to use mongodb
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6 
    },
    current_plan: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Plan model
        ref: 'Plan_Management',
        default: null // Default value can be 'null' or a specific plan like 'free'
    },
});

  
const User = mongoose.model('User', userSchema);

module.exports = User;

