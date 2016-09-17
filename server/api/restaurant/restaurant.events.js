/**
 * Restaurant model events
 */

'use strict';

import {EventEmitter} from 'events';
var Restaurant = require('./restaurant.model');
var RestaurantEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RestaurantEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Restaurant.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RestaurantEvents.emit(event + ':' + doc._id, doc);
    RestaurantEvents.emit(event, doc);
  }
}

export default RestaurantEvents;
