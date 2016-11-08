'use strict'

var mongoose = require('bluebird').promisifyAll(require('mongoose'))

var menu = new mongoose.Schema({
  name: String,
  price: Number
})

var RestaurantSchema = new mongoose.Schema({
  name: String,
  speciality: [String],
  menu: {
    'Main_Course_Non_Veg': [menu],
    'Main_Course_Veg': [menu],
    'Starters': [menu],
    'Deserts': [menu]
  },
  address: String,
  phone: Number
})

export default mongoose.model('Restaurant', RestaurantSchema)
