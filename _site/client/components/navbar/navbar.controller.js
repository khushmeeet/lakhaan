'use strict';

class NavbarController {

  $('#settings').on('click', function () {
    $('#menu').css('display', 'block');
  })

  isCollapsed = true;

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('lakhaanaApp')
  .controller('NavbarController', NavbarController);

