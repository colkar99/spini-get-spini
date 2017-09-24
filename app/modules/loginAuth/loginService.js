(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:homeService
     * @description
     * # homeService
     * Service of the app
     */
    angular.module('angular-app').service('LoginService', LoginService).service('SocialLoginService', SocialLoginService);
    LoginService.$inject = ['$http','$cookies', 'apiBaseURL'];
    SocialLoginService.$inject = ['$q', '$rootScope', '$window'];

    function LoginService($http,$cookies, apiBaseURL) {


    	var service = {};
        service.Login = Login;
        service.Logout = Logout;
        return service;

        function Login(auth, callback) {
            $http.post(apiBaseURL + '/facebook_user_token', {
                auth: auth
            }).then(function(response) {
            	var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role',response.role);
                    $cookies.put('name',response.name);
                    $cookies.put('token',response.jwt);

                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.jwt;
                    // execute callback with true to indicate successful login
                    callback(response.role);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function Logout() {
            // remove user from local storage and clear http auth header
            angular.forEach($cookies, function (v, k) {
    $cookieStore.remove(k);
});            $http.defaults.headers.common.Authorization = '';
        }
    };

    function SocialLoginService($q, $rootScope, $window) {
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
            googleCallBack: function(res) {
                $rootScope.$broadcast("GoogleLoginComplete", {
                    "authData": res
                });
            },
            facebookWatchLoginChange: function() {
                var _self = this;
                FB.Event.subscribe('auth.authResponseChange', function(res) {
                    if (res.status === 'connected') {
                        $rootScope.$broadcast("FBLoginComplete", {
                            "authData": res
                        });
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
