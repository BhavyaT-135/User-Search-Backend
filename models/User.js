const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Please provide user id'],
    unique: true,
  },
  first_name: {
    type: String,
    required: [true, 'Please provide user first name'],
  },
  last_name: {
    type: String,
    required: [true, 'Please provide user last name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide user email'],
  },
  gender: {
    type: String,
  },
  income: {
    type: String,
  },
  city: {
    type: String,
  },
  car: {
    type: String,
  },
  quote: {
    type: String,
  },
  phone_price: {
    type: String,
  }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)