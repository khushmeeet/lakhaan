'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var restaurantCtrlStub = {
  index: 'restaurantCtrl.index',
  show: 'restaurantCtrl.show',
  create: 'restaurantCtrl.create',
  update: 'restaurantCtrl.update',
  destroy: 'restaurantCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var restaurantIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './restaurant.controller': restaurantCtrlStub
});

describe('Restaurant API Router:', function() {

  it('should return an express router instance', function() {
    restaurantIndex.should.equal(routerStub);
  });

  describe('GET /api/restaurants', function() {

    it('should route to restaurant.controller.index', function() {
      routerStub.get
        .withArgs('/', 'restaurantCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/restaurants/:id', function() {

    it('should route to restaurant.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'restaurantCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/restaurants', function() {

    it('should route to restaurant.controller.create', function() {
      routerStub.post
        .withArgs('/', 'restaurantCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/restaurants/:id', function() {

    it('should route to restaurant.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'restaurantCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/restaurants/:id', function() {

    it('should route to restaurant.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'restaurantCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/restaurants/:id', function() {

    it('should route to restaurant.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'restaurantCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
