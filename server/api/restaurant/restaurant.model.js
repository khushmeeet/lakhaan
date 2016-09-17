'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RestaurantSchema = new mongoose.Schema({
  name:String,
  speciality:[String],
  menu:[
    {
      name:String,
      price:Number
    }
  ]
});

export default mongoose.model('Restaurant', RestaurantSchema);
