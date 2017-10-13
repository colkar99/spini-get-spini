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