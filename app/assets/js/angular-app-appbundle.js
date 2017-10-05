/*!
* angular-app - v0.0.1 - MIT LICENSE 2017-10-05. 
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
		'ngToast',
		'home',
		'refferal',
		'redeemcoupon',
		'loginModule',
		'signupModule',
		'timer',
		'720kb.socialshare',
		'ngclipboard'

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
    angular.module('angular-app').config(configure)
     .constant('apiBaseURL', 'https://api.spini.co/v1/')
    .run(runBlock);
    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        //$locationProvider.html5Mode(true).hashPrefix('!');
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
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = '//apis.google.com/js/client.js?onload=onLoadCallback';
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
				// templateUrl: 'app/modules/home/home.html',
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
				controller: 'redeemcouponCtrl',
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

(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('angular-app').controller('HomeCtrl', Home);
    Home.$inject = ['homeService', '$window', 'apiBaseURL', '$http', 'LoginService', '$location', '_', '$scope','$timeout','ngToast'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Home(homeService, $window, apiBaseURL, $http, LoginService, $location, _, $scope, $timeout,ngToast) {
        /*jshint validthis: true */
        var vm = this;
        vm.offer_id;
        window.loginRole = 'refferal';
        $scope.filter_items = new Array();
        vm.compaigns = [];
        vm.overall_compaigns = [];
        var headers = {
            "Accept": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            "Content-Type": 'application/json',
            // 'Access-Token' : $rootScope.current_user.authentication_token
            // 'Access-Token' : "$2a$10$Z1QJ46AB.9Qx/IDCIWqnTO20HogZNyOl7ztRDwqzl75nFaCbORNSW",
        }
        vm.closeLoginPopup = function() {
            document.getElementById("login-popup").style.width = "0%";
        }
        vm.openLoginPopup = function(data, id) {
            document.getElementById("login-popup").style.width = "100%";
            console.log(id)
            if (id) {
                document.getElementById(id).style.width = "0%";
            }
        }
        vm.getSlidepopup = function(campaign_id) {
            vm.campaign_id = campaign_id;
            console.log(campaign_id);
            document.getElementById("offer-popup").style.width = "100%";
            vm.getSelectedCampaignOffers();
        }
        vm.closeSlidepopup = function() {
            document.getElementById("offer-popup").style.width = "0%";
        }
        vm.signupPOP = function(data) {
            // closeNav()
            window.loginRole = data;
            document.getElementById("login-signup").style.width = "100%";
        }
        vm.signupPOPClose = function() {
            // openNav()
            document.getElementById("login-signup").style.width = "0%";
        }
        vm.getloginpopup = function(id) {
            vm.someValue = id;
            document.getElementById("offer-popup").style.width = "100%";
        }
        vm.closeNav = function() {
            document.getElementById("offer-popup").style.width = "0%";
        }
        vm.getcodepopup = function(offer_id,OPTION) {

            var OPTION = OPTION || 0;
            console.log(offer_id);
            if(OPTION)
            {
                window.offer_id = offer_id;
            }
            // / closeNav()
            document.getElementById("offer-popup").style.width = "0%";
            vm.offer_id = offer_id;
            if (vm.isReferral()) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
                console.log('already logged in');
                // document.getElementById("get-code-popup").style.width = "100%";
                LoginService.getProfileInfo(function(data) {
                    if (data.mobile) {
                        vm.sentMobileNo(data.mobile,'toast')
                        vm.user = data;
                      //  document.getElementById("confirm-code-popup").style.width = "100%";
                    } else {
                        document.getElementById("get-code-popup").style.width = "100%";
                    }
                })
            } else {
                console.log('not logged in');
                document.getElementById("get-code-popup").style.width = "100%";
            }
        }
        vm.closegetcodepopup = function() {
            // openNav()
            document.getElementById("confirm-code-popup").style.width = "0%";
            document.getElementById("offer-popup").style.width = "100%";
            // document.getElementById("get-code-popup").style.width = "100%";
        }
        vm.closeGetNoPopup = function() {
            document.getElementById("get-code-popup").style.width = "0%";
            document.getElementById("offer-popup").style.width = "100%";
        }
        vm.openConformPopup = function() {
            document.getElementById("get-code-popup").style.width = "0%";
            document.getElementById("confirm-code-popup").style.width = "100%";
        }
        vm.closegetMobilepopup = function() {
            document.getElementById("get-code-popup").style.width = "0%";
            document.getElementById("offer-popup").style.width = "100%";
        }
        vm.getOffers = function() {
            $http.get(apiBaseURL + '/home/offers').then(function(response) {
                if (response) {
                    var response = response.data.data;
                    $scope.filter_items.push(response);
                    vm.offers = [];
                    vm.compaigns = [];
                    vm.offers = response;
                    vm.overall_compaigns = response;
                    vm.compaigns = _.uniqBy(response, function(e) {
                        return e.attributes.campaign_id;
                    });
                    vm.overall_compaigns = vm.compaigns;
                }
            });
        }
        vm.open = false;
        vm.isReferral = LoginService.isReferral;
        vm.isVendor = LoginService.isVendor;
        vm.goProfile = function() {
            $location.path('/refferal');
        };

        vm.goVendorProfile = function() {
            $location.path('/redeemcoupon');
        };


        vm.Logout = function() {
            LoginService.Logout();
            $location.path('/')
        };
        window.SelectedCampOffers = [];
        vm.getItems = function() {
            return window.SelectedCampOffers;
        }
        vm.getSelectedOfferData = function() {

            window.SelectedOffer = [];
            var data = [];
            data = window.SelectedCampOffers;
            if (vm.offer_id) {
                angular.forEach(data, function(value, key) {
                    if (value.id == vm.offer_id) {
                        window.SelectedOffer.push(value);
                    }
                });
            }
            else if (window.offer_id) {
                angular.forEach(data, function(value, key) {
                    if (value.id == window.offer_id) {
                        window.SelectedOffer.push(value);
                    }
                });
            }
            else
            {

            }
            return window.SelectedOffer;
        }
        vm.getSelectedCampaignOffers = function() {
            vm.SelectedCampOffers = [];
            angular.forEach(vm.offers, function(value, key) {
                if (value.attributes.campaign_id == vm.campaign_id) {
                    vm.SelectedCampOffers.push(value);
                }
            });
            window.SelectedCampOffers = [];
            window.SelectedCampOffers = vm.SelectedCampOffers;
            return vm.SelectedCampOffers;
        }


          vm.goHome = function() {

            window.location = window.location.origin;
        } 

        vm.onCopySuccess = function() {

                  $timeout(function() {
                        ngToast.dismiss();
                        ngToast.create({
                            content: '<strong>Spini</strong>: Link Copied',
                            dismissOnTimeout: false,
                            dismissButton: true,
                            dismissOnClick: false
                        });
                    }, 0)
        }



        vm.OfferLink = function(offer) {

   

            return 'https://spini.co/offers/'+offer+'/';
        }


        vm.mobile = function()
        {
                return vm.mobile_no;
        }
        vm.sentMobileNo = function(mobile,type) {
            var type = type || 0;

            vm.mobile_no = mobile.toString();
            vm.offer_id;
            vm.post = {
                "coupon_code": {
                    "mobile": vm.mobile_no,
                    "offer_id": vm.offer_id
                }
            }
            $http({
                method: "POST",
                headers: headers,
                url: apiBaseURL + '/coupon_codes',
                data: vm.post
            }).then(function mySuccess(response) {
                vm.openConformPopup();
            }, function myError(response) {

                console.log(type);

              $timeout(function() {
                        ngToast.dismiss();
                        ngToast.create({
                            content: '<strong>Spini</strong>: Code already sent',
                            dismissOnTimeout: false,
                            dismissButton: true,
                            dismissOnClick: false
                        });
                    }, 0)


                $scope.myWelcome = response.statusText;
            });
        }
        vm.filter_by_food = function(some) {
            vm.filter_items = some;
            vm.compaigns = [];
            for (var i = 0; i <= vm.filter_items.length; i++) {
                if (vm.filter_items[i].attributes.offer_category_id == 1) {
                    vm.compaigns.push(vm.filter_items[i]);
                    console.log(vm.compaigns);
                }
            }
            return vm.compaigns;
        };
        vm.filter_by_beauty = function(some) {
            vm.filter_items = some;
            vm.compaigns = [];
            for (var i = 0; i <= vm.filter_items.length; i++) {
                if (vm.filter_items[i].attributes.offer_category_id == 2) {
                    vm.compaigns.push(vm.filter_items[i]);
                    console.log(vm.compaigns);
                }
            }
            return vm.compaigns;
        };
        vm.filter_by_personal_need = function(some) {
            vm.filter_items = some;
            vm.compaigns = [];
            for (var i = 0; i <= vm.filter_items.length; i++) {
                if (vm.filter_items[i].attributes.offer_category_id == 4) {
                    vm.compaigns.push(vm.filter_items[i]);
                    console.log(vm.compaigns);
                }
            }
            return vm.compaigns;
        };      

        vm.unixtime = function(date) {

         var dateSplitted = date.split('-'); // date must be in DD-MM-YYYY format
    var formattedDate = dateSplitted[0]+'/'+dateSplitted[1]+'/'+dateSplitted[2];

   
    return new Date(formattedDate).getTime();

        };


        if(LoginService.isReferral())
        {
        $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
    
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

(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('loginModule').controller('LoginCtrl', Login);
    Login.$inject = ['LoginService', 'SocialLoginService', '$scope', '$location', 'ngToast', '$timeout', '$state'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Login(LoginService, SocialLoginService, $scope, $location, ngToast, $timeout, $state) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = "Hello, angular-app!";
        vm.version = "1.0.0";
        // vm.listFeatures = LoginService.getFeaturesList();
        $scope.$on("FBLoginComplete", function(event, args) {
            var auth = {};
            auth.access_token = args.authData.authResponse.accessToken;
            auth.role = 'referer';
            LoginService.Login(auth, function(result) {
                if (result == 'referer') {
                    document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                    $timeout(function() {
                        ngToast.dismiss();
                        ngToast.create({
                            content: '<strong>Spini</strong>: Welcome to S Treasure!',
                            dismissOnTimeout: false,
                            dismissButton: true,
                            dismissOnClick: false
                        });
                    }, 1000);
                    $state.reload();
                } else if (result == 'vendor') {
                    document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                } else {
                    console.log('not logged in');
                }
            });
        });
        $scope.$on("FBLoginCompleteVendor", function(event, args) {
            var auth = {};
            auth.access_token = args.authData.authResponse.accessToken;
            auth.role = 'vendor';
            LoginService.Login(auth, function(result) {
                if (result == 'vendor') {
                    document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                    $location.path('redeemcoupon');
        
                }else {
                    document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                    $timeout(function() {
                        ngToast.dismiss();
                        ngToast.create({
                            content: 'Something went wrong',
                            dismissOnTimeout: false,
                            dismissButton: true,
                            dismissOnClick: false
                        });
                    }, 1000)
                    console.log('not logged in');
                }
            });
            console.log('my event FBLoginCompleteVendor');
            console.log(args)
        });
        $scope.$on("GoogleLoginComplete", function(event, args) {
            console.log('my event GoogleLoginComplete');
            console.log(args)
        });
        vm.FbLogin = function() {
            console.log(window.loginRole)
            if (window.loginRole == 'vendor') {
                console.log('vendor')
                SocialLoginService.vendorFacebookLogin();
            } else {
                SocialLoginService.facebookLogin();
            }
        }
        vm.GoogleLogin = function() {
            SocialLoginService.googleLogin();
        }
    }
})();
(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('redeemcoupon').controller('redeemcouponCtrl', RedeemCoupon);
    RedeemCoupon.$inject = ['redeemcouponService', '$http', 'LoginService', '$location', 'ngToast'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function RedeemCoupon(redeemcouponService, $http, LoginService, $location, ngToast) {
        /*jshint validthis: true */
        var vm = this;
        vm.checkCode = function() {
            console.log('de');
            $http.post('https://api.spini.co/v1/redemptions/verify_coupon', {
                "redemption": {
                    "coupon_code": vm.coupon_code,
                    "business_id": vm.business_id,
                    "amount": vm.amount
                }
            }).then(function(response) {
                if (response.data.code) {
                    vm.showInfo = response.data;
                    if (response.data.amount_to_pay) {
                        $http.post('https://api.spini.co/v1/redemptions', {
                            "redemption": {
                                "coupon_code": vm.coupon_code,
                                "business_id": vm.business_id,
                                "amount": vm.amount,
                                'savings': vm.showInfo.savings,
                                'savings_type': vm.showInfo.savings_type,
                                'deductions': vm.showInfo.offer_amount,
                                'amount_paid': vm.showInfo.amount_to_pay
                            }
                        }).then(function() {
                            ngToast.dismiss();
                            ngToast.create({
                                content: '<strong>Spini</strong>: Code Redemptions complete',
                                dismissOnTimeout: false,
                                dismissButton: true,
                                dismissOnClick: false
                            });

                            vm.coupon_code='';
                            vm.amount='';
                            vm.showInfo='';
                        });
                    }
                }
            });
        }
        if (LoginService.isVendor()) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
            LoginService.getVendorProfileInfo(function(data) {
                vm.vendor = data;
                if (vm.vendor.businesses) {
                    if (vm.vendor.businesses.length > 0) {
                        vm.business_id = vm.vendor.businesses[0].id; // select first items
                    }
                }
            });
            // LoginService.getVendorDataList(function(data) {
            //     vm.vendorDataList = data;
            // });
        } else {
            $location.path('/')
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
		if(LoginService.isReferral())
		{
		$http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
		 LoginService.getProfileInfo(function(data)
		{
			vm.user = data;
		})
		}
		else
		{
			$location.path('/')
		}

	}

})();

// (function() {
//     'use strict';
//     /**
//      * @ngdoc function
//      * @name app.controller:HomeCtrl
//      * @description
//      * # HomeCtrl
//      * Controller of the app
//      */
//     angular.module('loginModule').controller('signupCtrl', signup );
//     signup.$inject = ['LoginService', 'SocialLoginService', '$scope', '$location', 'ngToast', '$timeout'];
//     /*
//      * recommend
//      * Using function declarations
//      * and bindable members up top.
//      */
//     function signup   (LoginService, SocialLoginService, $scope, $location, ngToast, $timeout) {
//         /*jshint validthis: true */
//         var vm = this;


//         // vm.listFeatures = LoginService.getFeaturesList();
//         $scope.$on("FBLoginComplete", function(event, args) {
//             var auth = {};
//             auth.access_token = args.authData.authResponse.accessToken;
//             auth.role = 'referer';
//             LoginService.Login(auth, function(result) {
//                 if (result == 'referer') {
//                     document.getElementById("login-popup").style.width = "0%";
//                     document.getElementById("login-signup").style.width = "0%";
//                     $timeout(function() {
//                         ngToast.dismiss();
//                         ngToast.create({
//                             content: '<strong>Spini</strong>: Welcome to S Treasure!',
//                             dismissOnTimeout: false,
//                             dismissButton: true,
//                             dismissOnClick: false
//                         });
//                     }, 1000)
//                 } else if (result == 'vendor') {} else {
//                     console.log('not logged in');
//                 }
//             });
//             console.log('my event FBLoginComplete');
//             console.log(args)
//         });
//         $scope.$on("FBLoginCompleteVendor", function(event, args) {
//             var auth = {};
//             auth.access_token = args.authData.authResponse.accessToken;
//             auth.role = 'vendor';
//             LoginService.Login(auth, function(result) {
//                 if (result == 'vendor') {
//                     document.getElementById("login-popup").style.width = "0%";
//                     document.getElementById("login-signup").style.width = "0%";

//                     //get the mobile no

                      
//                     $timeout(function() {
//                         ngToast.dismiss();
//                         ngToast.create({
//                             content: '<strong>Spini</strong>: Welcome to S Treasure!',
//                             dismissOnTimeout: false,
//                             dismissButton: true,
//                             dismissOnClick: false
//                         });
//                     }, 1000)
//                 } else if (result == 'vendor') {} else {
//                     console.log('not logged in');
//                 }
//             });
//             console.log('my event FBLoginCompleteVendor');
//             console.log(args)
//         });
//         $scope.$on("GoogleLoginComplete", function(event, args) {
//             console.log('my event GoogleLoginComplete');
//             console.log(args)
//         });
//         vm.FbRe = function() {

//              console.log('login')
//             if (window.loginRole == 'vendor') {
             
//                 SocialLoginService.vendorFacebookLogin();
//             } else {
//                 SocialLoginService.facebookLogin();
//             }
//         }
//         vm.GoogleLogin = function() {
//             SocialLoginService.googleLogin();
//         }
//     }
// })();
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
		.factory('_', LodashFactory)
		;


function LodashFactory($window) {
  if(!$window._){
  }
  return $window._;
}
// Define dependencies
LodashFactory.$inject = ['$window'];

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
    angular.module('angular-app').service('LoginService', LoginService).service('SocialLoginService', SocialLoginService);
    LoginService.$inject = ['$http', '$cookies', 'apiBaseURL', '$state'];
    SocialLoginService.$inject = ['$q', '$rootScope', '$window'];

    function LoginService($http, $cookies, apiBaseURL, $state) {
        var service = {};
        service.Login = Login;
        service.Logout = Logout;
        service.isReferral = isReferral;
        service.getVendorProfileInfo = getVendorProfileInfo;
        service.isVendor = isVendor;
        service.authToken = authToken;
        service.getProfileInfo = getProfileInfo;
        return service;

        function isReferral() {
            if ($cookies.get('role')) {
                if ($cookies.get('role') == 'referer') {
                    return true
                }
            }
            return false;
        }

        function isVendor() {
            if ($cookies.get('role')) {
                if ($cookies.get('role') == 'vendor') {
                    return true
                }
            }
            return false;
        }

        function authToken() {
            if ($cookies.get('token')) {
                return $cookies.get('token');
            }
            return false;
        }

        function getProfileInfo(callback) {
            $http.get(apiBaseURL + '/profile').then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function getVendorProfileInfo(callback) {
            $http.get(apiBaseURL + '/profile').then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function getVendorDataList(callback) {
            $http.get(apiBaseURL + '/profile').then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function Login(auth, callback) {
            $http.post(apiBaseURL + '/facebook_user_token', {
                auth: auth
            }).then(function(response) {
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', response.role);
                    $cookies.put('name', response.name);
                    $cookies.put('token', response.jwt);
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile);
                    }
                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.jwt;
                    // execute callback with true to indicate successful login
                    callback(response.role);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function Logout() {
            $cookies.remove('role');
            $cookies.remove('name');
            $cookies.remove('token');
            $http.defaults.headers.common.Authorization = '';
            $state.reload();
        }
    };

    function SocialLoginService($q, $rootScope, $window) {
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
            googleCallBack: function(res) {
                $rootScope.$broadcast("GoogleLoginComplete", {
                    "authData": res
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
            vendorFacebookLogin: function() {
                var _self = this;
                FB.init({
                    appId: '131797584045674',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.4'
                });
                FB.login(function(response) {
                    console.log(response);
                    if (response.status === 'connected') {
                        $rootScope.$broadcast("FBLoginCompleteVendor", {
                            "authData": response
                        });
                    } else if (response.status === 'not_authorized') {} else {}
                }, {
                    scope: 'email' // to make sure the email access from fb
                });
  
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
                FB.login(function(response) {
                    if (response.status === 'connected') {
                        $rootScope.$broadcast("FBLoginComplete", {
                            "authData": response
                        });
                    } else if (response.status === 'not_authorized') {} else {
                        // the user isn't logged in to Facebook.
                    }
                }, {
                    scope: 'email' // to make sure the email access from fb
                });
               
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
