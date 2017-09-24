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
		.module('redeemcoupon')
		.controller('redeemcouponCtrl', RedeemCoupon);

	RedeemCoupon.$inject = ['redeemcouponService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function RedeemCoupon(redeemcouponService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = redeemcouponService.getFeaturesList();

	}

})();
