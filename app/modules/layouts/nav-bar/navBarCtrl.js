(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:NavBarCtrl
	* @description
	* # NavBarCtrl
	* Controller of the app
	*/

	angular
		.module('angular-app')
		.controller('NavBarCtrl', NavBar);

	NavBar.$inject = ['homeService', 'MenuService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function NavBar(homeService, MenuService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "angular-app";

		vm.menu = MenuService.listMenu();

	}

})();
