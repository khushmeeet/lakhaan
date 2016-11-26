'use strict'

var mongoose = require('bluebird').promisifyAll(require('mongoose'))

var menu = new mongoose.Schema({
  name: String,
  price: Number
})

var RestaurantSchema = new mongoose.Schema({
  name: String,
  cuisines: [String],
  menu: mongoose.Schema.Types.Mixed,
  address: String,
  phone: Number,
  rating: Number,
  delivery_time: String,
  photo: String,
  min_delivery: Number
})

export default mongoose.model('Restaurant', RestaurantSchema)
