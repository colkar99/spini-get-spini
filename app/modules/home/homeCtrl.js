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
    }).controller('HomeCtrl', Home);
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
            return window.user.name;
        }
        vm.usermobile = function() {
            return window.user.mobile;
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
                    LoginService.UpdateSocialShare(vm.OfferLink(data.seo_url, data.tracking_code.facebook), data.tracking_code.facebook, type, offer_id, function(result) {})
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
        vm.getSlidepopup = function(campaign_id, is_offer) {
            if (is_offer) {
                angular.forEach(vm.offers, function(value, key) {
                    if (value.id == campaign_id) {
                        vm.campaign_id = value.attributes.campaign_id;
                        console.log('data');
                        console.log(value)
                    }
                });
            } else {
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

            if( document.getElementById('mobileSearch').style.display == 'none')
            {
                 document.getElementById('mobileSearch').style.display='block';   
                  document.getElementById('mobileMenu').style.display='none';  
             }

            else
            {
                 document.getElementById('mobileSearch').style.display='none';    
             }
          

        }
        vm.MobileLogin = function() {
            // console.log( document.getElementById('mobileSearch').style.display);

            if( document.getElementById('mobileMenu').style.display == 'none')
            {
                 document.getElementById('mobileSearch').style.display='none';  
                 document.getElementById('mobileMenu').style.display='block';    
             }

            else
            {
                 document.getElementById('mobileMenu').style.display='none';    
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
            if (vm.SelectedCampOffers) {
                vm.offersClickTrack(vm.SelectedCampOffers[0].id)
            }
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
                    content: '<strong>ReferYogi</strong>: Link Copied',
                    dismissOnTimeout: false,
                    dismissButton: true,
                    dismissOnClick: false
                });
            }, 0)
        }
        vm.OfferLink = function(offer, tracking_id) {
            return 'https://www.referyogi.com/offers/' + offer + '/?tracking_id=' + tracking_id;
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
            vm.gridlength = 0;
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
        var temp = LoginService.isReferral();
        if (temp) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
            LoginService.getProfileInfo(function(data) {
                vm.user = data;
                window.user = data;
            })
        }
    }
})();