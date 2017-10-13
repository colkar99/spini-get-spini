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
                vm.user.wallet_money = 550;
                temp = 2;
            })
        } else {
            $location.path('/')
        }
    }
})();