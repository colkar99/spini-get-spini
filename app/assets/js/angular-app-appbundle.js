/*!
* angular-app - v0.0.1 - MIT LICENSE 2017-11-22. 
* @author Kathik
*/

/* ng-infinite-scroll - v1.3.0 - 2016-06-30 */
angular.module("infinite-scroll",[]).value("THROTTLE_MILLISECONDS",null).directive("infiniteScroll",["$rootScope","$window","$interval","THROTTLE_MILLISECONDS",function(a,b,c,d){return{scope:{infiniteScroll:"&",infiniteScrollContainer:"=",infiniteScrollDistance:"=",infiniteScrollDisabled:"=",infiniteScrollUseDocumentBottom:"=",infiniteScrollListenForEvent:"@"},link:function(e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;return z=angular.element(b),u=null,v=null,j=null,k=null,r=!0,y=!1,x=null,i=!1,q=function(a){return a=a[0]||a,isNaN(a.offsetHeight)?a.document.documentElement.clientHeight:a.offsetHeight},s=function(a){if(a[0].getBoundingClientRect&&!a.css("none"))return a[0].getBoundingClientRect().top+t(a)},t=function(a){return a=a[0]||a,isNaN(window.pageYOffset)?a.document.documentElement.scrollTop:a.ownerDocument.defaultView.pageYOffset},p=function(){var b,d,g,h,l;return k===z?(b=q(k)+t(k[0].document.documentElement),g=s(f)+q(f)):(b=q(k),d=0,void 0!==s(k)&&(d=s(k)),g=s(f)-d+q(f)),y&&(g=q((f[0].ownerDocument||f[0].document).documentElement)),h=g-b,l=h<=q(k)*u+1,l?(j=!0,v?e.$$phase||a.$$phase?e.infiniteScroll():e.$apply(e.infiniteScroll):void 0):(i&&c.cancel(i),j=!1)},w=function(a,b){var d,e,f;return f=null,e=0,d=function(){return e=(new Date).getTime(),c.cancel(f),f=null,a.call()},function(){var g,h;return g=(new Date).getTime(),h=b-(g-e),h<=0?(c.cancel(f),f=null,e=g,a.call()):f?void 0:f=c(d,h,1)}},null!=d&&(p=w(p,d)),e.$on("$destroy",function(){if(k.unbind("scroll",p),null!=x&&(x(),x=null),i)return c.cancel(i)}),n=function(a){return u=parseFloat(a)||0},e.$watch("infiniteScrollDistance",n),n(e.infiniteScrollDistance),m=function(a){if(v=!a,v&&j)return j=!1,p()},e.$watch("infiniteScrollDisabled",m),m(e.infiniteScrollDisabled),o=function(a){return y=a},e.$watch("infiniteScrollUseDocumentBottom",o),o(e.infiniteScrollUseDocumentBottom),h=function(a){if(null!=k&&k.unbind("scroll",p),k=a,null!=a)return k.bind("scroll",p)},h(z),e.infiniteScrollListenForEvent&&(x=a.$on(e.infiniteScrollListenForEvent,p)),l=function(a){if(null!=a&&0!==a.length){if(a.nodeType&&1===a.nodeType?a=angular.element(a):"function"==typeof a.append?a=angular.element(a[a.length-1]):"string"==typeof a&&(a=angular.element(document.querySelector(a))),null!=a)return h(a);throw new Error("invalid infinite-scroll-container attribute.")}},e.$watch("infiniteScrollContainer",l),l(e.infiniteScrollContainer||[]),null!=g.infiniteScrollParent&&h(angular.element(f.parent())),null!=g.infiniteScrollImmediateCheck&&(r=e.$eval(g.infiniteScrollImmediateCheck)),i=c(function(){return r&&p(),c.cancel(i)})}}}]),"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="infinite-scroll");


/*
** lazy-scroll v1.00
** (c) shabeeb
** mail@shabeebk.com
* shabeebk.com/blog/lazy-scroll-infinite-scrolling-angularjs
*
*/
angular.module("lazy-scroll",[]).directive("lazyScroll",["$rootScope","$window",function(l,o){return{link:function(l,r,n){var e,i,c=.9,e=!0;o=angular.element(o),null!=n.lazyNoScroll&&l.$watch(n.lazyNoScroll,function(l){e=1==l?!1:!0}),void 0!=n.lazyScrollTrigger&&n.lazyScrollTrigger>0&&n.lazyScrollTrigger<100&&(c=n.lazyScrollTrigger/100),i=function(){var o=window.pageYOffset,r=window.document.body.clientHeight,i=window.innerHeight,a=o/(r-i);return e&&a>=c?l.$apply(n.lazyScroll):void 0},o.on("scroll",i),l.$on("$destroy",function(){return o.off("scroll",i)})}}}]);




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
		'hm.readmore',
		'infinite-scroll',
		'lazy-scroll'

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

if(window.location.hostname=='www.referyogi.com' || window.location.hostname=='referyogi.com')
            {
                window.env = 'prod';
            }
    angular.module('angular-app').config(configure)
  
     .constant('apiBaseURL', (window.env == "prod" ? 'https://api.spini.co/v1/' : 'https://stagingapi.spini.co/v1/'))
     .constant('LinkUrl', (window.env == "prod" ? 'https://www.referyogi.com/' : 'https://staging.spini.co/'))



    .run(runBlock);
    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider','$compileProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider,$compileProvider) {


         $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|whatsapp):/);


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

"use strict";

function readMore(e) {
    function t(e, t, o) {
        function s() {
            o.debug("setToggleMoreText"), d.toggle.moreText = d.hmMoreText || "Read more"
        }

        function n() {
            o.debug("setToggleLessText"), d.toggle.lessText = d.hmLessText || "Read less"
        }

        function m() {
            o.debug("setCurrentToggleText"), d.toggle.text = d.toggle.state ? d.toggle.lessText : d.toggle.moreText
        }

        function g() {
            o.debug("setShowToggle"), d.toggle.show = d.moreText && d.moreText.length > 0
        }

        function l() {
            o.debug("setLinkClass"), d.toggle.linkClass = d.hmLinkClass
        }

        function i() {
            o.debug("setDotsClass"), d.toggle.dotsClass = d.hmDotsClass
        }

        function a() {
            o.debug("validateLimit"), d.hmLimit = d.hmLimit && d.hmLimit <= 0 ? void 0 : d.hmLimit
        }

        function h() {
            return o.debug("getMoreTextLimit"), d.hmLimit && d.hmLimit < d.hmText.length ? d.hmLimit - d.hmText.length : 0
        }

        function r() {
            o.debug("setLessAndMoreText"), d.lessText = e("limitTo")(d.hmText, d.hmLimit), d.moreText = e("limitTo")(d.hmText, h())
        }
        var d = this;
        d.toggle = {
            dots: "...",
            dotsClass: d.hmDotsClass,
            linkClass: d.hmLinkClass
        }, d.$onInit = function() {
            o.debug("initialize"), s(), n(), a(), r(), g(), m(), l(), i()
        }, d.doToggle = function() {
            o.debug("doToggle"), d.toggle.state = !d.toggle.state, d.showMoreText = !d.showMoreText, m()
        }, t.$watch("vm.hmMoreText", function(e, t) {
            e != t && (o.debug("hmMoreText changed"), s(), m())
        }), t.$watch("vm.hmLessText", function(e, t) {
            e != t && (o.debug("hmLessText changed"), n(), m())
        }), t.$watch("vm.hmDotsClass", function(e, t) {
            e != t && (o.debug("hmDotsClass changed"), i())
        }), t.$watch("vm.hmLinkClass", function(e, t) {
            e != t && (o.debug("hmLinkClass changed"), l())
        }), t.$watch("vm.hmText", function(e, t) {
            e != t && (o.debug("hmText changed"), a(), r(), g())
        }), t.$watch("vm.hmLimit", function(e, t) {
            e != t && (o.debug("hmLimit changed"), a(), r(), g())
        })
    }
    return t.$inject = ["$filter", "$scope", "$log"], {
        restrict: "AE",
        scope: {
            hmText: "@",
            hmLimit: "@",
            hmMoreText: "@",
            hmLessText: "@",
            hmDotsClass: "@",
            hmLinkClass: "@"
        },
        template: e.get("readmore.template.html"),
        controller: t,
        controllerAs: "vm",
        bindToController: !0
    }
}
readMore.$inject = ["$templateCache"], angular.module("hm.readmore", ["ngAnimate", "ngSanitize"]).directive("hmReadMore", readMore).config(["$logProvider", function(e) {
    e.debugEnabled(!1)
}]), angular.module("hm.readmore").run(["$templateCache", function(e) {
    e.put("readmore.template.html", '<span name="text"><span ng-bind-html="vm.lessText" style="white-space:pre-wrap;"></span><span ng-show="vm.showMoreText" class="more-show-hide" ng-bind-html="vm.moreText" style="white-space:pre-wrap;"></span></span><span name="toggle" ng-show="vm.toggle.show"><span ng-class="vm.toggle.dotsClass" ng-show="!vm.toggle.state">{{ vm.toggle.dots }}</span><a ng-class="vm.toggle.linkClass" ng-click="vm.doToggle()">{{ vm.toggle.text }}</a></span>')
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
    angular.module('angular-app').directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    }).directive('onCarouselChange', function($parse) {
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
    }).filter('nl2br', function() {
        var span = document.createElement('span');
        return function(input) {
            if (!input) return input;
            var lines = input.split('\n');
            for (var i = 0; i < lines.length; i++) {
                span.innerText = lines[i];
                span.textContent = lines[i]; //for Firefox
                lines[i] = span.innerHTML;
            }
            return lines.join('<br />');
        }
    })

.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];

        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
})
    .controller('HomeCtrl', Home);
    Home.$inject = ['homeService','LinkUrl', '$window', 'apiBaseURL', '$http', 'LoginService', '$location', '_', '$scope', '$timeout', 'ngToast', 'Socialshare', '$anchorScroll', '$rootScope'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Home(homeService, LinkUrl,$window, apiBaseURL, $http, LoginService, $location, _, $scope, $timeout, ngToast, Socialshare, $anchorScroll, $rootScope) {
        /*jshint validthis: true */

        console.log(apiBaseURL);
        var vm = this;
        vm.City = LoginService.getCityCookieName();
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
            // "Accept": "application/json",
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': '*',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            // "Content-Type": 'application/json',
            // 'Access-Token' : $rootScope.current_user.authentication_token
            // 'Access-Token' : "$2a$10$Z1QJ46AB.9Qx/IDCIWqnTO20HogZNyOl7ztRDwqzl75nFaCbORNSW",
        }
        vm.loadFirst = function(){
            var tempLog = LoginService.isReferral();
            if(!tempLog){
                document.getElementById("login-signup").style.width = "100%";
            }
                        
        }
        vm.gotourl = function(redirect_url){
            $window.open(redirect_url , "_blank");
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
        vm.onSlideChanged = function(nextSlide, direction) {
            if (nextSlide.index) {
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
        vm.offersViewTrack = function() {
            LoginService.offersViewTrack(function(result) {
                if (result) {
                    console.log('offersViewTrack');
                }
            })
        };
        vm.username = function() {
            if (window.user) {
                return window.user.name;
            }
        }
        vm.usermobile = function() {
            if (window.user) {
                return window.user.mobile;
            }
        }
        vm.SeoHelpSocialShare = function(offer_id, type) {
           
            var data = {};
            angular.forEach(vm.offers, function(value, key) {
                if (value.id == offer_id) {
                    data = value.attributes;
                }
            });
            console.log(data);
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
                    // debugger
                    LoginService.UpdateSocialShare(vm.OfferLink(data.seo_url, data.tracking_code.facebook), data.tracking_code.facebook, type, offer_id, function(result) {})
                    // LoginService.UpdateSocialShare(data.seo_url, type, function(result) {})
                }
                if (type == 'whatsapp') {
                    Socialshare.share({
                        'provider': 'whatsapp',
                        'attrs': {
                            'socialshareUrl': vm.OfferLink(data.seo_url, data.tracking_code.general),
                            'socialshareText': data.caption,
                        }
                    });
                    LoginService.UpdateSocialShare(vm.OfferLink(data.seo_url, data.tracking_code.general), data.tracking_code.general, type, offer_id, function(result) {})
                    // LoginService.UpdateSocialShare(data.seo_url, type, function(result) {})
                }
                if (type == 'twitter') {
                    Socialshare.share({
                        'provider': 'twitter',
                        'attrs': {
                            'socialshareText': data.caption,
                            'socialshareUrl': vm.OfferLink(data.seo_url, data.tracking_code.twitter)
                        }
                    });
                    LoginService.UpdateSocialShare(vm.OfferLink(data.seo_url, data.tracking_code.twitter), data.tracking_code.twitter, type, offer_id, function(result) {})
                }
                if (type == 'copy') {
                    return data.caption + ' ' + vm.OfferLink(data.seo_url, data.tracking_code.general)
                }
            } catch (e) {
                // console.log('error');
            }
        }
        vm.SocialShareUpdate = function(offer_id, type) {
            var data = window.SelectedCampOffers[0].attributes;
            
            if (type == 'facebook') {
                   
                    Socialshare.share({
                        'provider': 'facebook',
                        'attrs': {
                            'socialshareUrl': vm.OfferLink(data.seo_url, data.tracking_code.facebook)
                        }
                    });
                    LoginService.UpdateSocialShare(vm.OfferLink(data.seo_url, data.tracking_code.facebook), data.tracking_code.facebook, type, offer_id, function(result) {})
                    // LoginService.UpdateSocialShare(data.seo_url, type, function(result) {})
                }
                else if (type == 'twitter') {
                    Socialshare.share({
                        'provider': 'twitter',
                        'attrs': {
                            'socialshareText': data.caption,
                            'socialshareUrl': vm.OfferLink(data.seo_url, data.tracking_code.twitter)
                        }
                    });
                    LoginService.UpdateSocialShare(vm.OfferLink(data.seo_url, data.tracking_code.twitter), data.tracking_code.twitter, type, offer_id, function(result) {})
                }
            
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
        vm.getSlidepopup = function(campaign_id, is_offer,is_slide) {
            

            window.SlideClick = 0;
            window.SlideClickSeoUrl ='';
              // ;
            if (is_offer) {
                angular.forEach(vm.offers, function(value, key) {
                    if (value.id == campaign_id) {
                        vm.campaign_id = value.attributes.campaign_id;
                        console.log('data');
                        console.log(value)
                    }
                });
            }
            else if(is_slide)
            {
            window.SlideClick=1;

            window.SlideClickSeoUrl = is_slide;

            }
            else {
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
            document.getElementById("confirm-code-popup").style.width = "0%";
            document.getElementById("get-code-popup").style.width = "0%";
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
                        window.user = data;
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
        vm.MobileToggleSearch = function() {
            // console.log( document.getElementById('mobileSearch').style.display);
            if (document.getElementById('mobileSearch').style.display == 'none') {
                document.getElementById('mobileSearch').style.display = 'block';
                document.getElementById('mobileMenu').style.display = 'none';
            } else {
                document.getElementById('mobileSearch').style.display = 'none';
            }
        }
        vm.MobileLogin = function() {
            // console.log( document.getElementById('mobileSearch').style.display);
            if (document.getElementById('mobileMenu').style.display == 'none') {
                document.getElementById('mobileSearch').style.display = 'none';
                document.getElementById('mobileMenu').style.display = 'block';
            } else {
                document.getElementById('mobileMenu').style.display = 'none';
            }
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
            vm.loadFirst();
            var locationCookie = LoginService.getCityCookie();
            if (locationCookie == false) {
                var url = apiBaseURL + 'home/offers';
            } else {
                var url = apiBaseURL + 'home/offers?location_id=' + locationCookie;
            }
            $http.get(url).then(function(response) {
                // 
                if (response) {
                    vm.setNextPage(response)
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
        vm.refresh = function() {
            window.location.reload();
            console.log('response');
        }
        vm.gotoBottom = function(temp) {
            var temp = temp || 0;
            //document.getElementById('Gridbottom').scrollIntoView(true);
            $('html,body').animate({
                scrollTop: $("#Gridbottom").offset().top
            }, 'slow');
            if (temp == 0) {
                vm.slider = false;
                vm.how_works = false;
                vm.offerClass = true;
            } else {
                vm.slider = false;
                vm.how_works = false;
                vm.offerClass = true;
            }
            //$location.hash('Gridbottom');
            // $anchorScroll();
        };
        vm.searchBoxEnable = true;
        $rootScope.$on("SearchComplete", function(event, args) {
            
            if (vm.searchBoxEnable) {
                vm.setNextPage(response)
                console.log("SearchComplete");
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
            }
        });
        vm.searchBox = function(txt) {
            
            if (txt.length < 1) {
                return;
            }

            var locationCookie = LoginService.getCityCookie();
            if (locationCookie == false) {
                var url = apiBaseURL + '/home/offers?search=' + txt;
            } else {
                var url = apiBaseURL + '/home/offers?search=' + txt +'&location_id='+locationCookie;
            }



            $http.get(url).then(function(response) {
                
                if (response) {
                    $rootScope.$broadcast("SearchComplete", {
                        "authData": response
                    });
                }
            });
        }



window.scrollOff = true;


        vm.nextPage = function()
        {
            var  url = document.getElementById('next_page').innerHtml;
            if(url)
{

            if(window.scrollOff)
    {

window.scrollOff = false;






        $http.get(url).then(function(response) {
             if (response) {
                document.getElementById('next_page').innerHtml ='';
            vm.setNextPage(response)
                               var response = response.data.data;

                angular.forEach(response, function(item, key) {


                $scope.filter_items.push(item);

                vm.offers.push(item);


        });


                var data  = _.uniqBy(response, function(e) {
                    return e.attributes.campaign_id;
                });

                          angular.forEach(data, function(item, key) {


           vm.compaigns.push(data);


        });





                vm.overall_compaigns = vm.compaigns;
}
window.scrollOff = true;

            });
}}

        }
        vm.categories = [];
        vm.banners = [];
        vm.api = apiBaseURL;
        if (vm.api == "https://api.spini.co/v1/"){
            vm.apiSlides = vm.api.substr(0 ,21);
        }
        else if(vm.api == "https://stagingapi.spini.co/v1/"){
            vm.apiSlides = vm.api.substr(0 ,27);
        }
        
        vm.getCategories = function() {
            $http.get(apiBaseURL + 'home/preload_data').then(function(response) {
                if (response) {
                    
                    vm.categories = response.data.categories;
                    vm.banners = response.data.banners;
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

            // ;

             if(window.SlideClick==1)
            {


                 $http.get(apiBaseURL+'/home/offer_detail/?id='+window.SlideClickSeoUrl).then(function(response) {

            vm.SelectedCampOffers.push(response.data.data);

            // ;
              LoginService.offersClickTrack(response.data.data.id, function(result) {
                if (result) {
                    console.log('offersClickTrack');
                }
            })

            window.SelectedCampOffers = [];
            window.SelectedCampOffers = vm.SelectedCampOffers;


            });

            }
            else if(window.singlePageOfferView == 1)
            {

                 $http.get(apiBaseURL+'/home/offers/'+window.offerInfo.attributes.seo_url).then(function(response) {

            vm.SelectedCampOffers.push(response.data.data);

            // ;
              LoginService.offersClickTrack(response.data.data.id, function(result) {
                if (result) {
                    console.log('offersClickTrack');
                }
            })

            window.SelectedCampOffers = [];
            window.SelectedCampOffers = vm.SelectedCampOffers;


            });






            }
            else
            {

            angular.forEach(vm.offers, function(value, key) {
                if (value.attributes.campaign_id == vm.campaign_id) {
                    vm.SelectedCampOffers.push(value);
                }
            });

            if (vm.SelectedCampOffers) {
                if(vm.SelectedCampOffers[0])
                {
                vm.offersClickTrack(vm.SelectedCampOffers[0].id)
                }
            }
            window.SelectedCampOffers = [];
            window.SelectedCampOffers = vm.SelectedCampOffers;
            return vm.SelectedCampOffers;

        }}
        vm.goHome = function() {
            window.location = window.location.origin;
        }
        vm.onCopySuccess = function() {
            $timeout(function() {
                ngToast.dismiss();
                ngToast.create({
                    content: '<strong>ReferYogi</strong>: Link Copied',
                    dismissOnTimeout: false,
                    dismissButton: true,
                    dismissOnClick: false
                });
            }, 0)
        }
        vm.OfferLink = function(offer, tracking_id) {

            return LinkUrl + 'offers/' + offer + '/?tracking_id=' + tracking_id;
        }
        vm.mobile = function() {
            return vm.mobile_no;
        }
        vm.sentMobileNo = function(mobile, type, offer_id) {
            var type = type || 0;
            var offer_id = offer_id || 0;
            vm.mobile_no = mobile.toString();
            if (offer_id == 0) {
                offer_id = vm.offer_id;
            }
            vm.post = {
                "coupon_code": {
                    "mobile": mobile,
                    "offer_id": offer_id,
                    "tracking_code": LoginService.TrackingCode()
                }
            }
            $http({
                method: "POST",
                headers: headers,
                url: apiBaseURL + 'coupon_codes',
                data: vm.post
            }).then(function mySuccess(response) {

                var temp = LoginService.isReferral();
                if (temp) {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
                    LoginService.getProfileInfo(function(data) {
                        vm.user = data;
                        window.user = data;
                    })
                }
                vm.openConformPopup();
            }, function myError(response) {
                console.log(type);
                $timeout(function() {
                    ngToast.dismiss();
                    ngToast.create({
                        content: '<strong>ReferYogi</strong>: Code already sent',
                        dismissOnTimeout: false,
                        dismissButton: true,
                        dismissOnClick: false
                    });
                }, 0)
                $scope.myWelcome = response.statusText;
            });
        }

        vm.setNextPage = function(response)
        {
            if(response)
            {
                    if(response.data)
                    {
                if(response.data.links)
                {

                    if(response.data.links.next)
                    {
                            document.getElementById('next_page').innerHtml = response.data.links.next;
                            return;
                    }
                }
                }
            }

                document.getElementById('next_page').innerHtml ='';


        }
        vm.filter_by_cat = function(id) {



            var locationCookie = LoginService.getCityCookie();
            if (locationCookie == false) {
                var url = apiBaseURL + '/home/offers?category_id=' + id;
            } else {
                var url = apiBaseURL + '/home/offers?category_id=' + id +'&location_id='+locationCookie;
            }


             $http.get(url).then(function(response) {

                vm.setNextPage(response)
                               var response = response.data.data;
                $scope.filter_items.push(response);

                vm.offers = response;
                var data  = _.uniqBy(response, function(e) {
                    return e.attributes.campaign_id;
                });
                vm.compaigns.push(data);
                vm.overall_compaigns = vm.compaigns;
                vm.gridlength = 0;
                vm.gridShow = false;
                vm.gotoBottom();


            });







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
        vm.ChooseCity = function() {
            vm.setCityCookie();
            // document.getElementById('choose-city').style.width = '100%';
        };
        vm.unixtime = function(date) {
            var dateSplitted = date.split('-'); // date must be in DD-MM-YYYY format
            var formattedDate = dateSplitted[0] + '/' + dateSplitted[1] + '/' + dateSplitted[2];
            return new Date(formattedDate).getTime();
        };
        vm.cities = function() {
            return window.CityList;
        }
        vm.CityList = [];
        window.CityList = [];
        vm.Datacity = function() {
            $http.get(apiBaseURL+'locations').then(function(response) {
                if (response) {
                    vm.CityList = response.data.data;
                    window.CityList = response.data.data;
                    // vm.ChooseCity();
                }
            });
        }

        $timeout(function() {
            if (!window.loadData) {
                window.loadData = 1;
                var temp = LoginService.getCityCookie();
                if (temp == false) {
                    vm.ChooseCity();
                    
                }
            }
        }, 10);
        
        vm.setCityCookie = function(city) {
            if (city == undefined){
                var city = window.CityList[0];
                LoginService.cityCookie(city.id, city.attributes.name);
            }
            
            LoginService.cityCookie(city.id, city.attributes.name);
        }
        vm.temp = true;
        if (window.user) {
            vm.data = window.user;
        } else {
            var temp = LoginService.isReferral();
            if (temp) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
                LoginService.getProfileInfo(function(data) {
                    vm.user = data;
                    window.user = data;
                })
            }
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
                            content: 'Welcome to ReferYogi!!',
                            dismissOnTimeout: true,
                            dismissButton: true,
                            dismissOnClick: false
                        });
                    }, 2000);
                    window.location.reload();
                    // LoginService.getProfileInfo();
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
                            dismissOnTimeout: true,
                            dismissButton: true,
                            dismissOnClick: false
                        });
                    }, 2000)
                    console.log('not logged in');
                }
            });
            console.log('my event FBLoginCompleteVendor');
            console.log(args)
        });
        $scope.$on("GoogleLoginComplete", function(event, args) {
            var auth = {};
            auth.access_token = args.authData.access_token;
            auth.role = 'referer';
            LoginService.LoginGoogle(auth, function(result) {
                if (result == 'referer') {
                    document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                    $timeout(function() {
                        ngToast.dismiss();
                        ngToast.create({
                            content: 'Welcome to ReferYogi!!',
                            dismissOnTimeout: true,
                            dismissButton: true,
                            dismissOnClick: false
                        });
                    }, 2000);
                    window.location.reload();
                    // LoginService.getProfileInfo();
                } else if (result == 'vendor') {
                    document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                } else {
                    console.log('not logged in');
                }
            });
            console.log('my event GoogleLoginComplete');
            console.log(args);
        });
        vm.FbLogin = function() {

            document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";

            console.log(window.loginRole)
            if (window.loginRole == 'vendor') {
                console.log('vendor')
                SocialLoginService.vendorFacebookLogin();
            } else {
                SocialLoginService.facebookLogin();
            }
        }
        vm.GoogleLogin = function() {
            
            document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
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
    RedeemCoupon.$inject = ['redeemcouponService', '$http', 'LoginService', '$location', 'ngToast','$timeout'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function RedeemCoupon(redeemcouponService, $http, LoginService, $location, ngToast,$timeout) {
        /*jshint validthis: true */
        var vm = this;

        vm.redeemCoupon = function()
        {
             if (vm.showInfo.amount_to_pay) {
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
                                content: '<strong>Referla</strong>: Code Redemptions complete',
                                dismissOnTimeout: false,
                                dismissButton: true,
                                dismissOnClick: false
                            });
                            
                            vm.coupon_code='';
                            vm.amount='';
                            vm.showInfo='';

                            // vm.showInfo = '';
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
                   
                }
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
(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('refferal').controller('refferalCtrl', Refferal);
    Refferal.$inject = ['refferalService', 'LoginService', '$http', '$location','ngToast'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Refferal(refferalService, LoginService, $http, $location,ngToast) {
        /*jshint validthis: true */
        var vm = this;
        vm.closePopup = function() {
            document.getElementById("get-paytm-no-popup").style.width = "0%";
        }
        vm.openPopup = function(data, id) {
            document.getElementById("get-paytm-no-popup").style.width = "100%";
        }
        vm.PaytmAsk = function(mobile, PaytmAsk) {
            debugger
            console.log(mobile)
            console.log(PaytmAsk)
            console.log(mobile);
            $http.post('https://api.spini.co/v1/payment_requests', {
                "payment_request": {
                    "amount": PaytmAsk,
                    "paytm_number": mobile
                }
            }).then(function(response) {
                vm.closePopup();

                ngToast.dismiss();
                ngToast.create({
                    content: 'Request Sent amount will credited with in 2 to 3 business days',
                    dismissOnTimeout: false,
                    dismissButton: true,
                    dismissOnClick: false
                });


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
        var temp = 1;
        if (LoginService.isReferral() && temp == 1) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
            LoginService.getProfileInfo(function(data) {
                vm.user = data;
                if (!vm.user.profile_image) {
                    vm.user.profile_image = '/app/assets/images/ProfileSection/Left-Nav/02Icn-ProfileDetails-Over@2x.png';
                }
                // vm.user.wallet_money = 550;
                temp = 2;
            })
        } else {
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
    LoginService.$inject = ['$http', '$cookies', 'apiBaseURL', '$state','ngToast'];
    SocialLoginService.$inject = ['$q', '$rootScope', '$window'];

    function LoginService($http, $cookies, apiBaseURL, $state,ngToast) {
        var service = {};
        service.Login = Login;
        service.LoginGoogle = LoginGoogle;
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
        service.getCityCookie = getCityCookie;
        service.getCityCookieName = getCityCookieName;
        service.cityCookie = cityCookie;
        service.UpdateSocialShare = UpdateSocialShare;
        service.TrackingCode = TrackingCode;
        service.getCityDataList = getCityDataList;
        service.SetTrackingCode = SetTrackingCode;
        return service;

        function getExp(){
            var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 2);
        return expireDate;
        }
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
            $cookies.put('TrackingCode', code, {expires: getExp()});
        }

        function authToken() {
            if ($cookies.get('token')) {
                return $cookies.get('token');
            }
            return false;
        }

        function getCityCookie() {
            if ($cookies.get('city')) {
                return $cookies.get('city');
            }
            return false;
        }



        function getCityCookieName() {
            if ($cookies.get('city_name')) {
                return $cookies.get('city_name');
            }
            return 'Chennai';
        }

        function cityCookie(id,name) {
            $cookies.put('city', id , {expires: getExp()});
            $cookies.put('city_name', name , {expires: getExp()});
            window.location.reload();
            console.log(cookies);
        }



        function getProfileInfo(callback) {
            $http.get(apiBaseURL + 'profile').then(function(response) {
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
            $http.post(apiBaseURL + 'registration', {
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

        function VendorAuth(loginAuth, callback) {
            $http.post(apiBaseURL + 'user_token', {
                "auth": loginAuth
            }).then(function(response) {
                console.log(response);
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', 'vendor', {expires: getExp()});
                    // $cookies.put('name', response.name);
                    $cookies.put('token', response.jwt , {expires: getExp()});
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile , {expires: getExp()});
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

        function UpdateSocialShare(url, tracking_code, media_type, offer_id, callback) {
            $http.post(apiBaseURL + 'offer_shares',

{
            "offer_share" : {
                "shared_url": url,
                "offer_id": offer_id,
                "tracking_code": this.TrackingCode(),
                "shared_tracking_code": tracking_code,
                "social_media": media_type,
                "ip_address": document.getElementById("ip").value
            }}).then(function(response) {
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
                    $cookies.put(temp_cookie, temp_cookie , {expires: getExp()});
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
            $http.post(apiBaseURL + 'page_visits', {
                "page_visit": {
                    "url": window.location.href.replace('#!/', ''),
                    "offer_id": document.getElementById("offer_id").value,
                    "ip_address": document.getElementById("ip").value,
                    "tracking_code": document.getElementById("tracking_code").value
                }
            }).then(function(response) {
                var response = response.data.data;
                $cookies.put(temp_cookie, temp_cookie , {expires: getExp()});
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
            $http.get(apiBaseURL + 'profile').then(function(response) {
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
            $http.get(apiBaseURL + 'profile').then(function(response) {
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

        function getCityDataList(callback) {

            var url = apiBaseURL;
            // var url = 'https://stagingapi.spini.co/v1/';

        
            
            $http.get(url + 'locations').then(function(response) {
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
            $http.post(apiBaseURL + 'facebook_user_token', {
                auth: auth
            }).then(function(response) {
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', response.role , {expires: getExp()});
                    $cookies.put('name', response.name , {expires: getExp()});
                    $cookies.put('token', response.jwt , {expires: getExp()});
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile , {expires: getExp()});
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

        function LoginGoogle(auth, callback) {
            auth.tracking_code = this.TrackingCode();
            $http.post(apiBaseURL + 'google_user_token', {
                auth: auth
            }).then(function(response) {
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', response.role , {expires: getExp()});
                    $cookies.put('name', response.name , {expires: getExp()});
                    $cookies.put('token', response.jwt , {expires: getExp()});
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile , {expires: getExp()});
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
            // googleCallBack: function(res) {
            
            //     $rootScope.$broadcast("GoogleLoginComplete", {

            //         "authData": res
            //     });
            // },
            // googleLogin: function() {
            //     debugger
            //     var myParams = {
            //         'clientid': '186743695973-ff3cm1k1ptca8rib4sv350abqhnif0pb.apps.googleusercontent.com', //You need to set client id
            //         'cookiepolicy': 'single_host_origin',
            //         'callback': this.googleCallBack, //callback function
            //         'approvalprompt': 'force',
            //         'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
            //     };
            //     gapi.auth.signIn(myParams);
            // },
            googleLogin: function() {
                var myParams = {
                    'clientid': '186743695973-ff3cm1k1ptca8rib4sv350abqhnif0pb.apps.googleusercontent.com', //You need to set client id
                    'cookiepolicy': 'single_host_origin',
                    'callback':function(res) {
                        console.log(res);
                        $rootScope.$broadcast("GoogleLoginComplete", {
                            "authData": res
                        });
                    }, 
                    'approvalprompt': 'force',
                    'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
                };
                gapi.auth.signIn(myParams);
            },
            vendorFacebookLogin: function() {
                var _self = this;
                FB.init({
                    appId: '1745197009116134',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.4'
                });
                FB.login(function(response) {
                    console.log(response);
                    if (response.status === 'connected') {
                        facebookLogin
                        $rootScope.$broadcast("FBLoginCompleteVendor", {
                            "authData": response
                        });
                    } else if (response.status === 'not_authorized') {} else {}
                }, {
                    scope: 'email,public_profile,user_address, user_mobile_phone' // to make sure the email access from fb
                });
            },
            facebookLogin: function() {
                var _self = this;
                FB.init({
                    appId: '1745197009116134',
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
                    scope: 'email,public_profile,user_address, user_mobile_phone' // to make sure the email access from fb
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
