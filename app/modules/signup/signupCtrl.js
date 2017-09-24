(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('signupModule').controller('signupCtrl', signup);
    signup.$inject = ['signupService','SocialLoginService','$scope'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function signup(signupService,SocialLoginService,$scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.data = 'data';
        $scope.$on("FBLoginComplete", function(event, args) {
            console.log('my event FBLoginComplete');
            console.log(args)
        });
        $scope.$on("GoogleLoginComplete", function(event, args) {
            console.log('my event GoogleLoginComplete');
            console.log(args)
        });

        vm.FbRegister = function() {
            SocialLoginService.facebookLogin();
        }
        vm.GoogleRegister = function() {
            SocialLoginService.googleLogin();
        }
    }
})();
