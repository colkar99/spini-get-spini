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
    RedeemCoupon.$inject = ['redeemcouponService', '$http', 'LoginService', '$location'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function RedeemCoupon(redeemcouponService, $http, LoginService, $location) {
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

                if(response.data.code){

                    vm.showInfo = response.data;

                    alert('amount to pay '+response.data.amount_to_pay)
                }

                
            });
        }
        vm.validatecode = function() {
            $http.post('https://api.spini.co/v1/redemptions/verify_coupon', {
                "redemption": {
                    "coupon_code": vm.coupon_code,
                    "business_id": vm.business_id,
                    "amount": vm.amount
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