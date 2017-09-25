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
		.module('loginModule')
		.controller('LoginCtrl', Login);

	Login.$inject = ['LoginService','SocialLoginService','$scope','$location'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Login(LoginService,SocialLoginService,$scope,$location) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		// vm.listFeatures = LoginService.getFeaturesList();


		$scope.$on("FBLoginComplete",function (event, args) {

			var auth = {};
			auth.access_token = args.authData.authResponse.accessToken;
			auth.role = 'referer';

		  LoginService.Login(auth, function(result) {
                if (result == 'referer') {
                	$location.path('refferal');
                }
               else if (result == 'vendor') {

                }
                else {
                	console.log('not logged in');
                }
        	});

			console.log('my event FBLoginComplete');
			console.log(args)
		} );



		$scope.$on("GoogleLoginComplete",function (event, args) {
			console.log('my event GoogleLoginComplete');
			console.log(args)

		} );

		vm.FbLogin = function()
		 {
		 	SocialLoginService.facebookLogin();

		 }



		vm.GoogleLogin = function()
		 {
		 	SocialLoginService.googleLogin();

		 }
	}

})();
