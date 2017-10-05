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
    Home.$inject = ['homeService', '$window', 'apiBaseURL', '$http', 'LoginService', '$location', '_', '$scope', '$timeout', 'ngToast'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Home(homeService, $window, apiBaseURL, $http, LoginService, $location, _, $scope, $timeout, ngToast) {
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
        vm.CreateVendor = function() {
            vm.Vendor.role = "vendor";
            LoginService.VendorCreate(vm.Vendor, function(result) {
                if (result) {
                    var loginAuth = {};
                    loginAuth.email = vm.Vendor.email;
                    loginAuth.password = vm.Vendor.password;
                    LoginService.VendorAuth(loginAuth, function(result) {
                        
                        if(result)
                        {
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
        vm.VendorContactUs = function() {
            document.getElementById("vendor-popup").style.width = "100%";
        }
        vm.closeVendorRegister = function() {
            document.getElementById("vendor-popup").style.width = "0%";
        }

        vm.VendorLogin = function()
        {


                    var loginAuth = {};
                    loginAuth.email = vm.Vendor.email;
                    loginAuth.password = vm.Vendor.password;
                    LoginService.VendorAuth(loginAuth, function(result) {
                        
                        if(result)
                        {
                 document.getElementById("login-popup").style.width = "0%";
                    document.getElementById("login-signup").style.width = "0%";
                      document.getElementById("vendor-popup").style.width = "0%";
                      document.getElementById("vendor-popup-login").style.width = "0%";
                    $location.path('redeemcoupon');
                        }
                    })
                


        };



        vm.SocialShareUpdate = function(url,type)
        {

                    LoginService.UpdateSocialShare(url,type, function(result) {
                        
              
                    })
                

        };


    

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
        vm.OfferLink = function(offer,tracking_id) {
            return 'https://www.spini.co/offers/' + offer + '/?tracking_id='+tracking_id;
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
            var formattedDate = dateSplitted[0] + '/' + dateSplitted[1] + '/' + dateSplitted[2];
            return new Date(formattedDate).getTime();
        };
        if (LoginService.isReferral()) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + LoginService.authToken();
        }
    }
})();