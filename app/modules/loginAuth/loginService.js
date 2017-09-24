(function() {
        'use strict';
        /**
         * @ngdoc function
         * @name app.service:homeService
         * @description
         * # homeService
         * Service of the app
         */
        angular.module('angular-app')
        .service('LoginService', LoginService)
        .service('SocialLoginService', SocialLoginService);

        LoginService.$inject = ['$http'];
        SocialLoginService.$inject = ['$q', '$rootScope','$window'];

        function LoginService($http) {
            var list = [{
                "feature": "Implemented Best Practices, following: John Papa's Guide"
            }, {
                "feature": "Using Controller AS syntax"
            }, {
                "feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"
            }, {
                "feature": "Declare modules without a variable using the setter syntax"
            }, {
                "feature": "Using named functions"
            }, {
                "feature": "Including Unit test with Karma"
            }, {
                "feature": "Including UI options for Bootstrap or Angular-Material"
            }, {
                "feature": "Including Angular-Material-Icons for Angular-Material UI"
            }, {
                "feature": "Dynamic Menu generator for both themes"
            }, {
                "feature": "Grunt task for Production and Development"
            }];
            return {
                getFeaturesList: getFeaturesList
            };

            function getFeaturesList() {
                return list;
            }
            // this.checkAuth =  function (params) {
            //    return GuestAjax.request('POST', '/sessions/login', params).then(function (response) {
            //      return response;
            //    });
            // 	};
            // 	this.setCredentials =  function (current_user) {
            //    $cookies.put('current_user', JSON.stringify(current_user));
            //     $rootScope.current_user = JSON.parse($cookies.get('current_user'));
            // 	};
        };

        function SocialLoginService($q, $rootScope,$window) {
            return {
                facebookGetMyLastName: function() {
                    var deferred = $q.defer();
                    FB.api('/me', {
                        fields: 'last_name'
                    }, function(response) {
                        if (!response || response.error) {
                            deferred.reject('Error occured');
                        } else {
                            deferred.resolve(response);
                        }
                    });
                    return deferred.promise;
                },
                facebookGetUserInfo: function() {
                    var _self = this;
                    FB.api('/me', {
                        fields: 'email'
                    }, function(res) {
                        $rootScope.$apply(function() {
                            console.log(res);
                            $rootScope.user = _self.user = res;
                        });
                    });
                },
                googleCallBack: function(res)
                {
                	$rootScope.$broadcast("GoogleLoginComplete", {"authData" : res});
                },
               facebookWatchLoginChange: function() {
                    var _self = this;
                    FB.Event.subscribe('auth.authResponseChange', function(res) {
                        if (res.status === 'connected') {

                            $rootScope.$broadcast("FBLoginComplete", {"authData" : res});

                            // _self.facebookGetUserInfo();
                            /*
                             This is also the point where you should create a
                             session for the current user.
                             For this purpose you can use the data inside the
                             res.authResponse object.
                            */
                        } else {
                            /*
                             The user is not logged to the app, or into Facebook:
                             destroy the session on the server.
                            */
                        }
                    });
                },
                googleLogin: function() {
                	 var myParams = {
            'clientid': '405658344932-5ot4r5m9vs424c8b4j6htt3dg1p8qfpd.apps.googleusercontent.com', //You need to set client id
            'cookiepolicy': 'single_host_origin',
            'callback': this.googleCallBack, //callback function
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(myParams);
                },


                facebookLogin: function() {
                	var _self = this;


                        FB.init({
                            appId: '131797584045674',
                            status: true,
                            cookie: true,
                            xfbml: true,
                            version: 'v2.4'
                        });
                        FB.login();
                        this.facebookWatchLoginChange();


                }
            };
        };
})();
