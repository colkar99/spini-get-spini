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
    Home.$inject = ['homeService', '$window', 'apiBaseURL', '$http', 'LoginService', '$location', '_'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Home(homeService, $window, apiBaseURL, $http, LoginService, $location, _) {
        /*jshint validthis: true */
        var vm = this;
        vm.closeLoginPopup = function() {
            document.getElementById("login-popup").style.width = "0%";
        }
        vm.openLoginPopup = function() {
            document.getElementById("login-popup").style.width = "100%";
        }
        vm.getofferspopup = function() {
            document.getElementById("login-popup").style.width = "100%";
        }
        vm.closepopup = function() {
            document.getElementById("login-popup").style.width = "0%";
        }
        vm.signupPOP = function() {
            // closeNav()
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
        vm.getcodepopup = function() {
            console.log('data');
            // closeNav()
            document.getElementById("get-code-popup").style.width = "100%";
            document.getElementById("offer-popup").style.width = "0%";
        }
        vm.closegetcodepopup = function() {
            // openNav()
            document.getElementById("get-code-popup").style.width = "0%";
            document.getElementById("offer-popup").style.width = "100%";
        }
        vm.offers = [];
        vm.getOffers = function() {
            $http.get(apiBaseURL + '/home/offers').then(function(response) {
                var response = response.data.data;
                response = _.uniqBy(response, function(e) {

                    return e.attributes.campaign_id;
                });
                // login successful if there's a token in the response
                if (response) {
                    vm.offers = response;
                }
            });
        }
        vm.open = false;
        vm.isReferral = LoginService.isReferral;
        vm.goProfile = function() {
            $location.path('/refferal');
        };
        vm.Logout = function() {
            LoginService.Logout();
            $location.path('/')
        };
    }
})();
