const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: String,
  price: Number,
  duration: Number,  //  for example: In months
  description: String
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
