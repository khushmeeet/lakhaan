'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var menu = new mongoose.Schema({
  name: String,
  price: Number
});

var RestaurantSchema = new mongoose.Schema({
  name: String,
  speciality: [String],
  menu: {
    'Main Course Non Veg': [menu],
    'Main Course Veg': [menu]
  },
  address: String
});

export default mongoose.model('Restaurant', RestaurantSchema);
