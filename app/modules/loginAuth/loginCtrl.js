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
                    // window.location.reload();
                    LoginService.getProfileInfo();
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
            document.getElementById("login-popup").style.width = "0";
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
            SocialLoginService.googleLogin();
        }
    }
})();