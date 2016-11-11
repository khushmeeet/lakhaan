'use strict'

var mongoose = require('bluebird').promisifyAll(require('mongoose'))

var menu = new mongoose.Schema({
  name: String,
  price: Number
})

var RestaurantSchema = new mongoose.Schema({
  name: String,
  speciality: [String],
  menu: mongoose.Schema.Types.Mixed,
  address: String,
  phone: Number
})

export default mongoose.model('Restaurant', RestaurantSchema)
