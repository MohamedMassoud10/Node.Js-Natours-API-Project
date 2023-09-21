const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    require: [true, 'please provide your email!'],
    unique: true,
    validate: [validator.isEmail, 'please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
  },
});
const User = mongoose.model('User', userSchema);

module.exports = User;
