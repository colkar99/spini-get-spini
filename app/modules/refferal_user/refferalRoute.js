'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('refferal')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('refferal', {
				url: '/refferal',
				templateUrl: 'app/modules/refferal_user/refferal.html',
				controller: 'refferalCtrl',
				controllerAs: 'vm'
			});
			
	}]);
