(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.test:homeTest
	* @description
	* # homeTest
	* Test of the app
	*/

	describe('LoginCtrl', function () {
		var controller = null, $scope = null, $location;

		beforeEach(function () {
			module('angular-app');
		});

		beforeEach(inject(function ($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('LoginCtrl', {
				$scope: $scope
			});
		}));

		it('Should HomeCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/loginModule');
			expect($location.path()).toBe('/loginModule');
		});

	});
})();
