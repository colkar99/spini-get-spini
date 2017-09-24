(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('angular-app')
		.controller('LoginCtrl', Login);

	Login.$inject = ['LoginService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Login(LoginService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = LoginService.getFeaturesList();

	}

})();
