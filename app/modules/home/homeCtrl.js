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
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService','$auth'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService,$auth) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

		    vm.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

	}

})();
