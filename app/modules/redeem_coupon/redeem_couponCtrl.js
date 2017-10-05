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
        vm.closePopup = function() {
            document.getElementById("get-vendor-mobile-no-popup").style.width = "0%";
        }
        vm.openPopup = function(data, id) {
            document.getElementById("get-vendor-mobile-no-popup").style.width = "100%";

        }

        vm.UpdateMobile = function(mobile)
        {
            console.log(mobile);


              $http.put('https://api.spini.co/v1/profile', {
                "user": {
                    "mobile": mobile,
                }
            }).then(function(response) {

                 vm.closePopup();


            })
            .catch(function(response) {


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