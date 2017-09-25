'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('redeemcoupon')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('redeemcoupon', {
				url: '/redeemcoupon',
				templateUrl: 'app/modules/redeem_coupon/redeem_coupon.html',
				controller: 'redeemcouponCtrl',
				controllerAs: 'vm'
			});

	}]);
