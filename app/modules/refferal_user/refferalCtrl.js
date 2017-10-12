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

	Refferal.$inject = ['refferalService','LoginService','$http','$location'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Refferal(refferalService,LoginService,$http,$location) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = refferalService.getFeaturesList();
		vm.required = function(){
			alert("This will move to your wallet once redeemed") 
		};

		var temp = 1;

		if(LoginService.isReferral() && temp ==1)
		{
		$http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
		 LoginService.getProfileInfo(function(data)
		{
			vm.user = data;

			if(!vm.user.profile_image)
			{
				vm.user.profile_image = '/app/assets/images/ProfileSection/Left-Nav/02Icn-ProfileDetails-Over@2x.png';
			}
			temp = 2;
		})
		}
		else
		{
			$location.path('/')
		}

	}

})();
