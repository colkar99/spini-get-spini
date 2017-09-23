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
		.module('refferal')
		.controller('refferalCtrl', Refferal);

	Refferal.$inject = ['refferalService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Refferal(refferalService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = refferalService.getFeaturesList();

	}

})();
