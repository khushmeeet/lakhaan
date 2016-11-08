'use strict';

class NavbarController {

  isCollapsed = true;

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('lakhaanaApp')
  .controller('NavbarController', NavbarController);

