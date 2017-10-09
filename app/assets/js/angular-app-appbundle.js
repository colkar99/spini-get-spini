/*!
* angular-app - v0.0.1 - MIT LICENSE 2017-10-09. 
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
		'ngclipboard',
		'hm.readmore'


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

"use strict";function readMore(e){function t(e,t,o){function s(){o.debug("setToggleMoreText"),d.toggle.moreText=d.hmMoreText||"Read more"}function n(){o.debug("setToggleLessText"),d.toggle.lessText=d.hmLessText||"Read less"}function m(){o.debug("setCurrentToggleText"),d.toggle.text=d.toggle.state?d.toggle.lessText:d.toggle.moreText}function g(){o.debug("setShowToggle"),d.toggle.show=d.moreText&&d.moreText.length>0}function l(){o.debug("setLinkClass"),d.toggle.linkClass=d.hmLinkClass}function i(){o.debug("setDotsClass"),d.toggle.dotsClass=d.hmDotsClass}function a(){o.debug("validateLimit"),d.hmLimit=d.hmLimit&&d.hmLimit<=0?void 0:d.hmLimit}function h(){return o.debug("getMoreTextLimit"),d.hmLimit&&d.hmLimit<d.hmText.length?d.hmLimit-d.hmText.length:0}function r(){o.debug("setLessAndMoreText"),d.lessText=e("limitTo")(d.hmText,d.hmLimit),d.moreText=e("limitTo")(d.hmText,h())}var d=this;d.toggle={dots:"...",dotsClass:d.hmDotsClass,linkClass:d.hmLinkClass},d.$onInit=function(){o.debug("initialize"),s(),n(),a(),r(),g(),m(),l(),i()},d.doToggle=function(){o.debug("doToggle"),d.toggle.state=!d.toggle.state,d.showMoreText=!d.showMoreText,m()},t.$watch("vm.hmMoreText",function(e,t){e!=t&&(o.debug("hmMoreText changed"),s(),m())}),t.$watch("vm.hmLessText",function(e,t){e!=t&&(o.debug("hmLessText changed"),n(),m())}),t.$watch("vm.hmDotsClass",function(e,t){e!=t&&(o.debug("hmDotsClass changed"),i())}),t.$watch("vm.hmLinkClass",function(e,t){e!=t&&(o.debug("hmLinkClass changed"),l())}),t.$watch("vm.hmText",function(e,t){e!=t&&(o.debug("hmText changed"),a(),r(),g())}),t.$watch("vm.hmLimit",function(e,t){e!=t&&(o.debug("hmLimit changed"),a(),r(),g())})}return t.$inject=["$filter","$scope","$log"],{restrict:"AE",scope:{hmText:"@",hmLimit:"@",hmMoreText:"@",hmLessText:"@",hmDotsClass:"@",hmLinkClass:"@"},template:e.get("readmore.template.html"),controller:t,controllerAs:"vm",bindToController:!0}}readMore.$inject=["$templateCache"],angular.module("hm.readmore",["ngAnimate","ngSanitize"]).directive("hmReadMore",readMore).config(["$logProvider",function(e){e.debugEnabled(!1)}]),angular.module("hm.readmore").run(["$templateCache",function(e){e.put("readmore.template.html",'<span name="text"><span ng-bind-html="vm.lessText" style="white-space:pre-wrap;"></span><span ng-show="vm.showMoreText" class="more-show-hide" ng-bind-html="vm.moreText" style="white-space:pre-wrap;"></span></span><span name="toggle" ng-show="vm.toggle.show"><span ng-class="vm.toggle.dotsClass" ng-show="!vm.toggle.state">{{ vm.toggle.dots }}</span><a ng-class="vm.toggle.linkClass" ng-click="vm.doToggle()">{{ vm.toggle.text }}</a></span>')}]);


(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('angular-app')

.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                        scope.$apply(function(){
                                scope.$eval(attrs.ngEnter);
                        });
                        
                        event.preventDefault();
                }
            });
        };
})


.directive('onCarouselChange', function($parse) {
    return {
        require: '^uibCarousel',
        link: function(scope, element, attrs, carouselCtrl) {
            var fn = $parse(attrs.onCarouselChange);
            var origSelect = carouselCtrl.select;
            carouselCtrl.select = function(nextSlide, direction, nextIndex) {
                if (nextSlide !== this.currentSlide) {
                    fn(scope, {
                        nextSlide: nextSlide,
                        direction: direction,
                        // nextIndex: this.indexOfSlide(nextSlide)
                    });
                }
                return origSelect.apply(this, arguments);
            };
        }
    };
})

.filter('nl2br', function() {
    var span = document.createElement('span');
    return function(input) {
        if (!input) return input;
        var lines = input.split('\n');

        for (var i = 0; i < lines.length; i++) {
            span.innerText = lines[i];
            span.textContent = lines[i];  //for Firefox
            lines[i] = span.innerHTML;
        }
        return lines.join('<br />');
    }
})


    .controller('HomeCtrl', Home);
    Home.$inject = ['homeService', '$window', 'apiBaseURL', '$http', 'LoginService', '$location', '_', '$scope', '$timeout', 'ngToast', 'Socialshare', '$anchorScroll', '$rootScope'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Home(homeService, $window, apiBaseURL, $http, LoginService, $location, _, $scope, $timeout, ngToast, Socialshare, $anchorScroll, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.offer_id;
        vm.slider = true;
        vm.how_works = true;
        vm.offerClass = false;

        vm.gridlength = 9;
        vm.gridShow = true;
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
        vm.CreateVendor = function() {
            vm.Vendor.role = "vendor";
            LoginService.VendorCreate(vm.Vendor, function(result) {
                if (result) {
                    var loginAuth = {};
                    loginAuth.email = vm.Vendor.email;
                    loginAuth.password = vm.Vendor.password;
                    LoginService.VendorAuth(loginAuth, function(result) {
                        if (result) {
                            document.getElementById("login-popup").style.width = "0%";
                            document.getElementById("login-signup").style.width = "0%";
                            document.getElementById("vendor-popup").style.width = "0%";
                            $location.path('redeemcoupon');
                        }
                    })
                }
                console.log(result);
            });
        }

        vm.onSlideChanged = function (nextSlide, direction) { 



            if( nextSlide.index)
            {

                console.log(window.SelectedCampOffers);
                
                vm.offersClickTrack(window.SelectedCampOffers[nextSlide.index].id)
            }



           

             }; 


        vm.VendorContactUs = function() {
            document.getElementById("vendor-popup").style.width = "100%";
        }
        vm.closeVendorRegister = function() {
            document.getElementById("vendor-popup").style.width = "0%";
        }
        vm.VendorLogin = function() {
            var loginAuth = {};
            loginAuth.email = vm.Vendor.email;
            loginAuth.password = vm.Vendor.password;
            LoginService.VendorAuth(loginAuth, function(result) {
                if (result) {
                    document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                    document.getElementById("vendor-popup").style.width = "0%";
                    document.getElementById("vendor-popup-login").style.width = "0%";
                    $location.path('redeemcoupon');
                }
            })
        };

         vm.offersClickTrack = function(offer_id) {

            LoginService.offersClickTrack(offer_id, function(result) {
                if (result) {
                    
                    console.log('offersClickTrack');
                }
            })
        };




        vm.SeoHelpSocialShare = function(offer_id, type) {
            var data = {};
            angular.forEach(vm.offers, function(value, key) {
                if (value.id == offer_id) {
                    data = value.attributes;
                }
            });
            try {
                if (type == 'treasure') {
                    return data.treasure_value;
                }
                if (type == 'facebook') {
                    Socialshare.share({
                        'provider': 'facebook',
                        'attrs': {
                            'socialshareUrl': vm.OfferLink(data.seo_url, data.tracking_code.facebook)
                        }
                    });
                    LoginService.UpdateSocialShare(data.seo_url, type, function(result) {})
                }
                if (type == 'twitter') {
                    Socialshare.share({
                        'provider': 'twitter',
                        'attrs': {
                            'socialshareUrl': vm.OfferLink(data.seo_url, data.tracking_code.twitter)
                        }
                    });
                    LoginService.UpdateSocialShare(data.seo_url, type, function(result) {})
                }
                if (type == 'copy') {
                    return vm.OfferLink(data.seo_url, data.tracking_code.general)
                }
            } catch (e) {
                console.log('error');
            }
        }
        vm.SocialShareUpdate = function(url, type) {
            LoginService.UpdateSocialShare(url, type, function(result) {})
        };
        vm.SetCookie = function() {
            var track = {};
            window.location.search.replace(/\?/, '').split('&').map(function(o) {
                track[o.split('=')[0]] = o.split('=')[1]
            });
            if (track) {
                if (track.tracking_id) {
                    LoginService.SetTrackingCode(track.tracking_id);
                }
            }
        }
        vm.SetCookie();
        vm.VendorLoginPopup = function() {
            document.getElementById("vendor-popup").style.width = "0%";
            document.getElementById("vendor-popup-login").style.width = "100%";
        }
        vm.closeVendorLoginPopup = function() {
            document.getElementById("vendor-popup-login").style.width = "0%";
        }
        vm.openLoginPopup = function(data, id) {
            document.getElementById("login-popup").style.width = "100%";
            console.log(id)
            if (id) {
                document.getElementById(id).style.width = "0%";
            }
        }
        vm.getSlidepopup = function(campaign_id,is_offer) {

            
            if(is_offer)
            {

            angular.forEach(vm.offers, function(value, key) {
                if (value.id == campaign_id) {

                   vm.campaign_id = value.attributes.campaign_id;
                   console.log('data');
                   console.log(value)
                }   
            });

            }
            else
            {
                vm.campaign_id = campaign_id;
            }   
            
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
            document.getElementById("offer-popup").style.width = "0%";
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
        vm.getcodepopup = function(offer_id, OPTION) {
            var OPTION = OPTION || 0;
            console.log(offer_id);
            if (OPTION) {
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
                        vm.sentMobileNo(data.mobile, 'toast')
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
            vm.gridlength = 9;
            vm.gridShow = true;
        }
        vm.gotoBottom = function() {
            //document.getElementById('Gridbottom').scrollIntoView(true);
            $('html,body').animate({
                scrollTop: $("#Gridbottom").offset().top
            }, 'slow');

        vm.slider = false;
        vm.how_works = false;
        vm.offerClass = true;
            //$location.hash('Gridbottom');
            // $anchorScroll();

        };
        $scope.$on("SearchComplete", function(event, args) {
            var response = args.authData.data.data;
            $scope.filter_items.push(response);
            vm.offers = [];
            vm.compaigns = [];
            vm.offers = response;
            vm.compaigns = _.uniqBy(response, function(e) {
                return e.attributes.campaign_id;
            });
            vm.overall_compaigns = vm.compaigns;
            vm.gridlength = 0;
            vm.gridShow = false;
            vm.gotoBottom();
        });
        vm.searchBox = function(txt) {
            $http.get(apiBaseURL + '/home/offers?search=' + txt).then(function(response) {
                if (response) {
                    $rootScope.$broadcast("SearchComplete", {
                        "authData": response
                    });
                }
            });
           
        }
        vm.categories = [];
        vm.getCategories = function() {
            $http.get(apiBaseURL + 'home/preload_data').then(function(response) {
                if (response) {
                    vm.categories = response.data.categories;
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
            } else if (window.offer_id) {
                angular.forEach(data, function(value, key) {
                    if (value.id == window.offer_id) {
                        window.SelectedOffer.push(value);
                    }
                });
            } else {}
            return window.SelectedOffer;
        }
        vm.getSelectedCampaignOffers = function() {
            vm.SelectedCampOffers = [];
            angular.forEach(vm.offers, function(value, key) {
                if (value.attributes.campaign_id == vm.campaign_id) {
                    vm.SelectedCampOffers.push(value);
                }
            });

            // if(vm.SelectedCampOffers)
            // {
            //     vm.offersClickTrack(vm.SelectedCampOffers[0].id)
            // }

            


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
        vm.OfferLink = function(offer, tracking_id) {
            return 'https://www.spini.co/offers/' + offer + '/?tracking_id=' + tracking_id;
        }
        vm.mobile = function() {
            return vm.mobile_no;
        }
        vm.sentMobileNo = function(mobile, type) {
            var type = type || 0;
            vm.mobile_no = mobile.toString();
            vm.offer_id;
            vm.post = {
                "coupon_code": {
                    "mobile": vm.mobile_no,
                    "offer_id": vm.offer_id,
                    "tracking_code": LoginService.TrackingCode()
                }
            }
            $http({
                method: "POST",
                headers: headers,
                url: apiBaseURL + 'coupon_codes',
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
        vm.filter_by_cat = function(id) {
            vm.filter_items = vm.overall_compaigns;
            vm.compaigns = [];
            for (var i = 0; i <= vm.filter_items.length; i++) {
                if (vm.filter_items[i]) {
                    if (vm.filter_items[i].attributes.offer_category_id == id) {
                        vm.compaigns.push(vm.filter_items[i]);
                        console.log(vm.compaigns);
                    }
                }
            }
            vm.gridlength = 1;
            vm.gridShow = false;
            return vm.compaigns;
        };
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
            var formattedDate = dateSplitted[0] + '/' + dateSplitted[1] + '/' + dateSplitted[2];
            return new Date(formattedDate).getTime();
        };
        if (LoginService.isReferral()) {
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
                            //   vm.coupon_code='';
                            // vm.amount='';
                            //vm.showInfo='';
                            vm.RedemptionsHistory()
                        }).catch(function(response) {
                            ngToast.dismiss();
                            ngToast.create({
                                content: response.data.errors[0].detail,
                                dismissOnTimeout: false,
                                dismissButton: true,
                                dismissOnClick: false
                            });
                        });
                    }
                }
            }).catch(function(response) {
                ngToast.dismiss();
                ngToast.create({
                    content: response.data.errors[0].detail,
                    dismissOnTimeout: false,
                    dismissButton: true,
                    dismissOnClick: false
                });
            });;
        }
        // vm.History = angular.fromJson('[{"id":"2","type":"redemptions","attributes":{"coupon_code":"39610A","coupon_id":3,"business_id":1,"offer_id":1,"created_at":"Oct 05, 2017","place":"T.Nagar","price":"1000.0","amount_paid_by_buyer":"500.0"}}]');
        // console.log()
        vm.History = [];
        vm.closePopup = function() {
            document.getElementById("get-vendor-mobile-no-popup").style.width = "0%";
        }
        vm.openPopup = function(data, id) {
            document.getElementById("get-vendor-mobile-no-popup").style.width = "100%";
        }
        vm.RedemptionsHistory = function() {
            $http.get('https://api.spini.co/v1/redemptions?business_id='+vm.business_id).then(function(response) {
                vm.History = response.data.data;
            });
        }
        vm.UpdateMobile = function(mobile) {
            console.log(mobile);
            $http.put('https://api.spini.co/v1/profile', {
                "user": {
                    "mobile": mobile,
                }
            }).then(function(response) {
                vm.closePopup();
            }).catch(function(response) {
                ngToast.dismiss();
                ngToast.create({
                    content: response.data.errors[0].detail,
                    dismissOnTimeout: false,
                    dismissButton: true,
                    dismissOnClick: false
                });
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

                     vm.RedemptionsHistory();
                }
                // vm.vendor.mobile = null;
                if (!vm.vendor.mobile) {
                    vm.openPopup();
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
        service.VendorAuth = VendorAuth;
        service.authToken = authToken;
        service.VendorCreate = VendorCreate;
        service.offersClickTrack = offersClickTrack;
        service.offersViewTrack = offersViewTrack;
        service.getProfileInfo = getProfileInfo;
        service.UpdateSocialShare = UpdateSocialShare;
        service.TrackingCode = TrackingCode;
        service.SetTrackingCode = SetTrackingCode;
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

        function TrackingCode() {
            if ($cookies.get('TrackingCode')) {
                return $cookies.get('TrackingCode');
            }
            return null;
        }

        function SetTrackingCode(code) {
            $cookies.put('TrackingCode', code);
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

        function VendorCreate(vendor, callback) {
            $http.post(apiBaseURL + '/registration', {
                "registration": vendor
            }).then(function(response) {
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

        function VendorAuth(loginAuth, callback) {
            $http.post(apiBaseURL + '/user_token', {
                "auth": loginAuth
            }).then(function(response) {
                console.log(response);
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', 'vendor');
                    // $cookies.put('name', response.name);
                    $cookies.put('token', response.jwt);
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile);
                    }
                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.jwt;
                    // execute callback with true to indicate successful login
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function UpdateSocialShare(url, data, callback) {
            $http.post(apiBaseURL + '/home/offers/' + url + '/share', {
                "share": {
                    "social_media": data
                }
            }).then(function(response) {
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

        function offersClickTrack(offer_id, callback) {

            var temp_cookie = 'OfferClickcode_' + offer_id;
            if ($cookies.get(temp_cookie)) {
                return;
            }


            $http.post(apiBaseURL + 'offer_clicks', {
                "offer_click": {
                    "offer_id": offer_id,
                    "ip_address": document.getElementById("ip").value,
                    "tracking_code": this.TrackingCode()
                }
            }).then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {

                     $cookies.put(temp_cookie, temp_cookie);
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function offersViewTrack(callback) {
            var temp_cookie = 'code_' + document.getElementById("offer_id").value;
            if ($cookies.get(temp_cookie)) {
                return;
            }
            $http.put(apiBaseURL + 'page_visits', {
                "page_visit": {
                    "url": window.location.href.replace('#!/', ''),
                    "offer_id": document.getElementById("offer_id").value,
                    "ip_address": document.getElementById("ip").value,
                    "tracking_code": document.getElementById("tracking_code").value
                }
            }).then(function(response) {
                var response = response.data.data;
                $cookies.put(temp_cookie, temp_cookie);
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(true);
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

        function checkOfferCookie(auth, callback) {}

        function Login(auth, callback) {
            auth.tracking_code = this.TrackingCode();
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
            $cookies.remove('mobile');
            $http.defaults.headers.common.Authorization = '';
            window.location = window.location.origin;
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
                    scope: 'email,public_profile' // to make sure the email access from fb
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
                    scope: 'email,public_profile' // to make sure the email access from fb
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
