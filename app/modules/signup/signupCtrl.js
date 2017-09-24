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
		.module('signupModule')
		.controller('signupCtrl', signup);

	signup.$inject = ['signupService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function signup(signupService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = signupService.getFeaturesList();

	}

})();
