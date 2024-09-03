
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
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Plan_Management',
        default: null
    },
});

  
const User = mongoose.model('User', userSchema);

module.exports = User;

