(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('angular-app')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider','$authProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider,$authProvider) {

// Facebook
$authProvider.facebook({
  name: 'facebook',
  url: '/',
  authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
  redirectUri: window.location.origin + '/',
  requiredUrlParams: ['display', 'scope'],
  scope: ['email'],
  scopeDelimiter: ',',
  display: 'popup',
  oauthType: '2.0',
  popupOptions: { width: 580, height: 400 }
});

 $authProvider.facebook({
      clientId: '131797584045674'
    });

$authProvider.google({
  url: '/auth/google',
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
  redirectUri: 'http://demo.com/',
  requiredUrlParams: ['scope'],
  optionalUrlParams: ['display'],
  scope: ['profile', 'email'],
  scopePrefix: 'openid',
  scopeDelimiter: ' ',
  display: 'popup',
  oauthType: '2.0',
  popupOptions: { width: 452, height: 633 }
});

   $authProvider.google({
      clientId: '405658344932-5ot4r5m9vs424c8b4j6htt3dg1p8qfpd.apps.googleusercontent.com'
    });


   // Google

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


		$urlRouterProvider
			.otherwise('/');

	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();
