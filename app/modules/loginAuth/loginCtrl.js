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
    Login.$inject = ['LoginService', 'SocialLoginService', '$scope', '$location', 'ngToast', '$timeout'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Login(LoginService, SocialLoginService, $scope, $location, ngToast, $timeout) {
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
        content:'<strong>Spini</strong>: Welcome to S Treasure!',
        dismissOnTimeout: false,
        dismissButton: true,
        dismissOnClick: false
      });
    }, 1000)
                } else if (result == 'vendor') {} else {
                    console.log('not logged in');
                }
            });
            console.log('my event FBLoginComplete');
            console.log(args)
        });
        $scope.$on("GoogleLoginComplete", function(event, args) {
            console.log('my event GoogleLoginComplete');
            console.log(args)
        });
        vm.FbLogin = function() {
            SocialLoginService.facebookLogin();
        }
        vm.GoogleLogin = function() {
            SocialLoginService.googleLogin();
        }
    }
})();
