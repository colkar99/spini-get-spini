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
    LoginService.$inject = ['$http', '$cookies', 'apiBaseURL', '$state'];
    SocialLoginService.$inject = ['$q', '$rootScope', '$window'];

    function LoginService($http, $cookies, apiBaseURL, $state) {
        var service = {};
        service.Login = Login;
        service.Logout = Logout;
        service.isReferral = isReferral;
        service.getVendorProfileInfo = getVendorProfileInfo;
        service.isVendor = isVendor;
        service.authToken = authToken;
        service.getProfileInfo = getProfileInfo;
        return service;

        function isReferral() {
            if ($cookies.get('role')) {
                if ($cookies.get('role') == 'referer') {
                    return true
                }
            }
            return false;
        }

        function isVendor() {
            if ($cookies.get('role')) {
                if ($cookies.get('role') == 'vendor') {
                    return true
                }
            }
            return false;
        }

        function authToken() {
            if ($cookies.get('token')) {
                return $cookies.get('token');
            }
            return false;
        }

        function getProfileInfo(callback) {
            $http.get(apiBaseURL + '/profile').then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function getVendorProfileInfo(callback) {
            $http.get(apiBaseURL + '/profile').then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function getVendorDataList(callback) {
            $http.get(apiBaseURL + '/profile').then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function Login(auth, callback) {
            $http.post(apiBaseURL + '/facebook_user_token', {
                auth: auth
            }).then(function(response) {
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', response.role);
                    $cookies.put('name', response.name);
                    $cookies.put('token', response.jwt);
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile);
                    }
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
            $cookies.remove('role');
            $cookies.remove('name');
            $cookies.remove('token');
            $http.defaults.headers.common.Authorization = '';
            $state.reload();
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
            vendorFacebookLogin: function() {
                var _self = this;
                FB.init({
                    appId: '131797584045674',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.4'
                });
                FB.login(function(response) {
                    console.log(response);
                    if (response.status === 'connected') {
                        $rootScope.$broadcast("FBLoginCompleteVendor", {
                            "authData": response
                        });
                    } else if (response.status === 'not_authorized') {} else {}
                }, {
                    scope: 'email' // to make sure the email access from fb
                });
  
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
                FB.login(function(response) {
                    if (response.status === 'connected') {
                        $rootScope.$broadcast("FBLoginComplete", {
                            "authData": response
                        });
                    } else if (response.status === 'not_authorized') {} else {
                        // the user isn't logged in to Facebook.
                    }
                }, {
                    scope: 'email' // to make sure the email access from fb
                });
               
            }
        };
    };
})();