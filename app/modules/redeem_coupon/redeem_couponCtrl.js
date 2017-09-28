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

	RedeemCoupon.$inject = ['redeemcouponService', '$http'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function RedeemCoupon(redeemcouponService, $http) {
		/*jshint validthis: true */
		var vm = this;
		vm.validatecode = function(){
			debugger
			var output = [];
			vm.redemption = [];
			vm.redemption.amount = vm.amount;
			vm.redemption.coupon_code = vm.coupon_code;
			vm.redemption.business_id = 1;
			output.redemption = vm.redemption;
			console.log(output);
			$http.post('https://api.spini.co/v1/redemptions',{"redemption":{"coupon_code":"7ABE9B", "business_id": "1", "amount": "1000"}}, {
				  headers: { 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDY2MDM1MTksInN1YiI6MTB9.yUwqTPfXKbU5gsHT7mnOcx2StTsmLd1F5KmyCowhYq4' }
				  // params: { bookId: 42 }
				});
		}
		vm.listFeatures = redeemcouponService.getFeaturesList();

	}

})();
