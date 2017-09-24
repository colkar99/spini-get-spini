/*!
* angular-app - v0.0.1 - MIT LICENSE 2017-09-24. 
* @author Kathik
*/
(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('angular-app', [
		'ngResource',
		'ngAria',
		'ui.bootstrap',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'refferal',
		'redeemcoupon',
		'loginModule',
		'signupModule'
	]);

})();

(function() {
    'use strict';
    /**
     * @ngdoc configuration file
     * @name app.config:config
     * @description
     * # Config and run block
     * Configutation of the app
     */
    angular.module('angular-app').config(configure).run(runBlock);
    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.hashPrefix('!');
        // This is required for Browser Sync to work poperly
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $urlRouterProvider.otherwise('/');

        (function(d) {
        // load the Facebook javascript SDK
        var js,
            id = 'facebook-jssdk',
            ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "http://connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();

    function onLoadCallback() {
        gapi.client.setApiKey('405658344932-5ot4r5m9vs424c8b4j6htt3dg1p8qfpd.apps.googleusercontent.com'); //set your API KEY
        gapi.client.load('plus', 'v1', function() {}); //Load Google + API
    }

    // function login() {
    //     var myParams = {
    //         'clientid': '405658344932-5ot4r5m9vs424c8b4j6htt3dg1p8qfpd.apps.googleusercontent.com', //You need to set client id
    //         'cookiepolicy': 'single_host_origin',
    //         'callback': 'callbackGoogle', //callback function
    //         'approvalprompt': 'force',
    //         'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    //     };
    //     gapi.auth.signIn(myParams);
    // }


    }
    runBlock.$inject = ['$rootScope'];

    function runBlock($rootScope) {
        'use strict';
        console.log('AngularJS run() function');


    }


})();

  function callbackGoogle(res) {
        console.log(res);
    }

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('loginModule', []);
})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('redeemcoupon', []);
})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('refferal', []);
})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('signupModule', []);
})();

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('angular-app')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '/',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});
			
	}]);

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('angular-app')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('loginAuth', {
				url: '/login',
				templateUrl: 'app/modules/loginAuth/login.html',
				controller: 'LoginCtrl',
				controllerAs: 'vm'
			});
			
	}]);

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
				controller: 'refferalCtrl',
				controllerAs: 'vm'
			});
			
	}]);

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

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('signupModule')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('signup', {
				url: '/signup',
				templateUrl: 'app/modules/signup/signup.html',
				controller: 'signupCtrl',
				controllerAs: 'vm'
			});
			
	}]);

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
		.module('angular-app')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService','$window','facebookService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService,$window,facebookService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		vm.someValue ;


		 vm.getofferspopup = function() {
		    // closeNav()
		    document.getElementById("login-popup").style.width = "100%";
		}

		vm.closepopup = function()  {

		   // openNav()
		    document.getElementById("login-popup").style.width = "0%";
		}


		vm.getloginpopup = function(id) {
			debugger
    		// closeNav()
    		vm.someValue= id;
    		 document.getElementById("offer-popup").style.width = "100%";
			}
		vm.closeNav = function() {
    		document.getElementById("offer-popup").style.width = "0%";
			}
		vm.getcodepopup = function(someValue) {
    // closeNav()
    		document.getElementById("get-code-popup").style.width = "100%";
    		document.getElementById("offer-popup").style.width = "0%";
			}
		vm.closegetcodepopup = function() {

   // openNav()
    		document.getElementById("get-code-popup").style.width = "0%";
    		document.getElementById("offer-popup").style.width = "100%";
			}






	}

})();


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

	NavBar.$inject = ['homeService', 'MenuService', '$scope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function NavBar(homeService, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;
		vm.open = false;
		vm.title = "angular-app";

		vm.menu = MenuService.listMenu();

	}

})();

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

	Login.$inject = ['LoginService','SocialLoginService','$scope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Login(LoginService,SocialLoginService,$scope) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = LoginService.getFeaturesList();


		$scope.$on("FBLoginComplete",function (event, args) {
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
		.module('signupModule')
		.controller('signupCtrl', signup);

	signup.$inject = ['signupService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function signup(signupService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = signupService.getFeaturesList();

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('angular-app')
		.factory('homeService', homeService)
		.factory('facebookService', facebookService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	};

    function facebookService($q, $rootScope) {
        return {
            getMyLastName: function() {
                var deferred = $q.defer();
                FB.api('/me', {
                    fields: 'last_name'
                }, function(response) {
                    if (!response || response.error) {
                        deferred.reject('Error occured');
                    } else {
                        deferred.resolve(response);
                    }
                });
                return deferred.promise;
            },
            getUserInfo: function() {
                var _self = this;
                FB.api('/me', {
                    fields: 'email'
                }, function(res) {
                    $rootScope.$apply(function() {
                        console.log(res);
                        $rootScope.user = _self.user = res;
                    });
                });
            },
            watchLoginChange: function() {
                var _self = this;
                FB.Event.subscribe('auth.authResponseChange', function(res) {
                    if (res.status === 'connected') {
                        /*
                         The user is already logged,
                         is possible retrieve his personal info
                        */
                        console.log('FB Logged In');
                        console.log(res);
                        _self.getUserInfo();
                        /*
                         This is also the point where you should create a
                         session for the current user.
                         For this purpose you can use the data inside the
                         res.authResponse object.
                        */
                    } else {
                        /*
                         The user is not logged to the app, or into Facebook:
                         destroy the session on the server.
                        */
                    }
                });
            }
        }
    };



})();

'use strict';

(function () {

	/**
	* @ngdoc function
	* @name app.service:menuService
	* @description
	* # menuService
	* Service of the app
	*/

	angular
		.module('angular-app')
		.factory('MenuService', Menu);

	// Inject your dependencies as .$inject = ['$http', '$anotherDependency'];
	// function Name ($http, $anotherDependency) {...}

	Menu.$inject = ['$http'];

	function Menu($http) {
		// Sample code.

		var menu = [
			{
				link: '.',
				name: 'This is a Placeholder menu. It disappears when the first module has been created.'
			}
		];

		return {
			listMenu: function () {
				return menu;
			}
		}

	}

})();

(function() {
        'use strict';
        /**
         * @ngdoc function
         * @name app.service:homeService
         * @description
         * # homeService
         * Service of the app
         */
        angular.module('angular-app')
        .service('LoginService', LoginService)
        .service('SocialLoginService', SocialLoginService);

        LoginService.$inject = ['$http'];
        SocialLoginService.$inject = ['$q', '$rootScope','$window'];

        function LoginService($http) {
            var list = [{
                "feature": "Implemented Best Practices, following: John Papa's Guide"
            }, {
                "feature": "Using Controller AS syntax"
            }, {
                "feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"
            }, {
                "feature": "Declare modules without a variable using the setter syntax"
            }, {
                "feature": "Using named functions"
            }, {
                "feature": "Including Unit test with Karma"
            }, {
                "feature": "Including UI options for Bootstrap or Angular-Material"
            }, {
                "feature": "Including Angular-Material-Icons for Angular-Material UI"
            }, {
                "feature": "Dynamic Menu generator for both themes"
            }, {
                "feature": "Grunt task for Production and Development"
            }];
            return {
                getFeaturesList: getFeaturesList
            };

            function getFeaturesList() {
                return list;
            }
            // this.checkAuth =  function (params) {
            //    return GuestAjax.request('POST', '/sessions/login', params).then(function (response) {
            //      return response;
            //    });
            // 	};
            // 	this.setCredentials =  function (current_user) {
            //    $cookies.put('current_user', JSON.stringify(current_user));
            //     $rootScope.current_user = JSON.parse($cookies.get('current_user'));
            // 	};
        };

        function SocialLoginService($q, $rootScope,$window) {
            return {
                facebookGetMyLastName: function() {
                    var deferred = $q.defer();
                    FB.api('/me', {
                        fields: 'last_name'
                    }, function(response) {
                        if (!response || response.error) {
                            deferred.reject('Error occured');
                        } else {
                            deferred.resolve(response);
                        }
                    });
                    return deferred.promise;
                },
                facebookGetUserInfo: function() {
                    var _self = this;
                    FB.api('/me', {
                        fields: 'email'
                    }, function(res) {
                        $rootScope.$apply(function() {
                            console.log(res);
                            $rootScope.user = _self.user = res;
                        });
                    });
                },
                googleCallBack: function(res)
                {
                	$rootScope.$broadcast("GoogleLoginComplete", {"authData" : res});
                },
               facebookWatchLoginChange: function() {
                    var _self = this;
                    FB.Event.subscribe('auth.authResponseChange', function(res) {
                        if (res.status === 'connected') {

                            $rootScope.$broadcast("FBLoginComplete", {"authData" : res});

                            // _self.facebookGetUserInfo();
                            /*
                             This is also the point where you should create a
                             session for the current user.
                             For this purpose you can use the data inside the
                             res.authResponse object.
                            */
                        } else {
                            /*
                             The user is not logged to the app, or into Facebook:
                             destroy the session on the server.
                            */
                        }
                    });
                },
                googleLogin: function() {
                	 var myParams = {
            'clientid': '405658344932-5ot4r5m9vs424c8b4j6htt3dg1p8qfpd.apps.googleusercontent.com', //You need to set client id
            'cookiepolicy': 'single_host_origin',
            'callback': this.googleCallBack, //callback function
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(myParams);
                },


                facebookLogin: function() {
                	var _self = this;


                        FB.init({
                            appId: '131797584045674',
                            status: true,
                            cookie: true,
                            xfbml: true,
                            version: 'v2.4'
                        });
                        FB.login();
                        this.facebookWatchLoginChange();


                }
            };
        };
})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('redeemcoupon')
		.service('redeemcouponService', redeemcouponService);

	redeemcouponService.$inject = ['$http'];

	function redeemcouponService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('refferal')
		.service('refferalService', refferalService);

	refferalService.$inject = ['$http'];

	function refferalService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('signupModule')
		.service('signupService', signupService);

	signupService.$inject = ['$http'];

	function signupService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}
		// this.checkAuth =  function (params) {
	 //    return GuestAjax.request('POST', '/sessions/login', params).then(function (response) {
	    	
	 //      return response;
	 //    });
  // 	};

  // 	this.setCredentials =  function (current_user) {
	 //    $cookies.put('current_user', JSON.stringify(current_user));
  //     $rootScope.current_user = JSON.parse($cookies.get('current_user'));
  // 	};
		

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.directive:navbarDirective
	* @description
	* # navbarDirective
	* Directive of the app
	*/

	angular
		.module('angular-app')
		.directive('navBar', navBar);

	function navBar() {

		var directive = {
			link: link,
			restrict: 'EA',
			scope: {
				menus: '=',
				brand: '='
			},
			controller: control,
			templateUrl: 'app/modules/layouts/nav-bar/navbar-tpl.html'

		};

		return directive;

		function link(scope, element, attrs, $location) {
			// write your code here
			scope.defaults = {
				brand: '',
				menus: [],
				search: {
					show: false
				}
			}; // end defaults

		}

		function control($scope, $location) {

			$scope.isActive = function (path) {
				var currentPath = $location.path().split('/')[1];
				if (currentPath.indexOf('?') !== -1) {
					currentPath = currentPath.split('?')[0];
				}
				return currentPath === path.split('/')[1];
			};
		}

	}

})();
