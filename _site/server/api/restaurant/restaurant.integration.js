'use strict';

var app = require('../..');
import request from 'supertest';

var newRestaurant;

describe('Restaurant API:', function() {

  describe('GET /api/restaurants', function() {
    var restaurants;

    beforeEach(function(done) {
      request(app)
        .get('/api/restaurants')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          restaurants = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      restaurants.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/restaurants', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/restaurants')
        .send({
          name: 'New Restaurant',
          info: 'This is the brand new restaurant!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRestaurant = res.body;
          done();
        });
    });

    it('should respond with the newly created restaurant', function() {
      newRestaurant.name.should.equal('New Restaurant');
      newRestaurant.info.should.equal('This is the brand new restaurant!!!');
    });

  });

  describe('GET /api/restaurants/:id', function() {
    var restaurant;

    beforeEach(function(done) {
      request(app)
        .get('/api/restaurants/' + newRestaurant._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          restaurant = res.body;
          done();
        });
    });

    afterEach(function() {
      restaurant = {};
    });

    it('should respond with the requested restaurant', function() {
      restaurant.name.should.equal('New Restaurant');
      restaurant.info.should.equal('This is the brand new restaurant!!!');
    });

  });

  describe('PUT /api/restaurants/:id', function() {
    var updatedRestaurant;

    beforeEach(function(done) {
      request(app)
        .put('/api/restaurants/' + newRestaurant._id)
        .send({
          name: 'Updated Restaurant',
          info: 'This is the updated restaurant!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRestaurant = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRestaurant = {};
    });

    it('should respond with the updated restaurant', function() {
      updatedRestaurant.name.should.equal('Updated Restaurant');
      updatedRestaurant.info.should.equal('This is the updated restaurant!!!');
    });

  });

  describe('DELETE /api/restaurants/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/restaurants/' + newRestaurant._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when restaurant does not exist', function(done) {
      request(app)
        .delete('/api/restaurants/' + newRestaurant._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
