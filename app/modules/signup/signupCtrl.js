// (function() {
//     'use strict';
//     /**
//      * @ngdoc function
//      * @name app.controller:HomeCtrl
//      * @description
//      * # HomeCtrl
//      * Controller of the app
//      */
//     angular.module('loginModule').controller('signupCtrl', signup );
//     signup.$inject = ['LoginService', 'SocialLoginService', '$scope', '$location', 'ngToast', '$timeout'];
//     /*
//      * recommend
//      * Using function declarations
//      * and bindable members up top.
//      */
//     function signup   (LoginService, SocialLoginService, $scope, $location, ngToast, $timeout) {
//         /*jshint validthis: true */
//         var vm = this;


//         // vm.listFeatures = LoginService.getFeaturesList();
//         $scope.$on("FBLoginComplete", function(event, args) {
//             var auth = {};
//             auth.access_token = args.authData.authResponse.accessToken;
//             auth.role = 'referer';
//             LoginService.Login(auth, function(result) {
//                 if (result == 'referer') {
//                     document.getElementById("login-popup").style.width = "0%";
//                     document.getElementById("login-signup").style.width = "0%";
//                     $timeout(function() {
//                         ngToast.dismiss();
//                         ngToast.create({
//                             content: '<strong>Spini</strong>: Welcome to S Treasure!',
//                             dismissOnTimeout: false,
//                             dismissButton: true,
//                             dismissOnClick: false
//                         });
//                     }, 1000)
//                 } else if (result == 'vendor') {} else {
//                     console.log('not logged in');
//                 }
//             });
//             console.log('my event FBLoginComplete');
//             console.log(args)
//         });
//         $scope.$on("FBLoginCompleteVendor", function(event, args) {
//             var auth = {};
//             auth.access_token = args.authData.authResponse.accessToken;
//             auth.role = 'vendor';
//             LoginService.Login(auth, function(result) {
//                 if (result == 'vendor') {
//                     document.getElementById("login-popup").style.width = "0%";
//                     document.getElementById("login-signup").style.width = "0%";

//                     //get the mobile no

                      
//                     $timeout(function() {
//                         ngToast.dismiss();
//                         ngToast.create({
//                             content: '<strong>Spini</strong>: Welcome to S Treasure!',
//                             dismissOnTimeout: false,
//                             dismissButton: true,
//                             dismissOnClick: false
//                         });
//                     }, 1000)
//                 } else if (result == 'vendor') {} else {
//                     console.log('not logged in');
//                 }
//             });
//             console.log('my event FBLoginCompleteVendor');
//             console.log(args)
//         });
//         $scope.$on("GoogleLoginComplete", function(event, args) {
//             console.log('my event GoogleLoginComplete');
//             console.log(args)
//         });
//         vm.FbRe = function() {

//              console.log('login')
//             if (window.loginRole == 'vendor') {
             
//                 SocialLoginService.vendorFacebookLogin();
//             } else {
//                 SocialLoginService.facebookLogin();
//             }
//         }
//         vm.GoogleLogin = function() {
//             SocialLoginService.googleLogin();
//         }
//     }
// })();