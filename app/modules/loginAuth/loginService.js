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
    LoginService.$inject = ['$http', '$cookies', 'apiBaseURL', '$state','ngToast'];
    SocialLoginService.$inject = ['$q', '$rootScope', '$window'];

    function LoginService($http, $cookies, apiBaseURL, $state,ngToast) {
        var service = {};
        service.Login = Login;
        service.Logout = Logout;
        service.isReferral = isReferral;
        service.getVendorProfileInfo = getVendorProfileInfo;
        service.isVendor = isVendor;
        service.VendorAuth = VendorAuth;
        service.authToken = authToken;
        service.VendorCreate = VendorCreate;
        service.offersClickTrack = offersClickTrack;
        service.offersViewTrack = offersViewTrack;
        service.getProfileInfo = getProfileInfo;
        service.getCityCookie = getCityCookie;
        service.getCityCookieName = getCityCookieName;
        service.cityCookie = cityCookie;
        service.UpdateSocialShare = UpdateSocialShare;
        service.TrackingCode = TrackingCode;
        service.getCityDataList = getCityDataList;
        service.SetTrackingCode = SetTrackingCode;
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

        function TrackingCode() {
            if ($cookies.get('TrackingCode')) {
                return $cookies.get('TrackingCode');
            }
            return null;
        }

        function SetTrackingCode(code) {
            $cookies.put('TrackingCode', code);
        }

        function authToken() {
            if ($cookies.get('token')) {
                return $cookies.get('token');
            }
            return false;
        }

        function getCityCookie() {
            if ($cookies.get('city')) {
                return $cookies.get('city');
            }
            return false;
        }



        function getCityCookieName() {
            if ($cookies.get('city_name')) {
                return $cookies.get('city_name');
            }
            return 'Chennai';
        }

        function cityCookie(id,name) {
            $cookies.put('city', id);
            $cookies.put('city_name', name);
            window.location.reload();
        }



        function getProfileInfo(callback) {
            $http.get(apiBaseURL + 'profile').then(function(response) {
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

        function VendorCreate(vendor, callback) {
            $http.post(apiBaseURL + 'registration', {
                "registration": vendor
            }).then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {


     


                    // execute callback with false to indicate failed login
                    callback(false);
                }
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

        function VendorAuth(loginAuth, callback) {
            $http.post(apiBaseURL + 'user_token', {
                "auth": loginAuth
            }).then(function(response) {
                console.log(response);
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', 'vendor');
                    // $cookies.put('name', response.name);
                    $cookies.put('token', response.jwt);
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile);
                    }
                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.jwt;
                    // execute callback with true to indicate successful login
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function UpdateSocialShare(url, media_type, offer_id, tracking_code, callback) {
            debugger
            $http.post(apiBaseURL + 'offer_shares',

{
            "offer_share" : {
                "shared_url": url,
                "offer_id": offer_id,
                "tracking_code": this.TrackingCode(),
                "shared_tracking_code": tracking_code,
                "social_media": media_type,
                "ip_address": document.getElementById("ip").value
            }}).then(function(response) {
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

        function offersClickTrack(offer_id, callback) {
            var temp_cookie = 'OfferClickcode_' + offer_id;
            if ($cookies.get(temp_cookie)) {
                return;
            }
            $http.post(apiBaseURL + 'offer_clicks', {
                "offer_click": {
                    "offer_id": offer_id,
                    "ip_address": document.getElementById("ip").value,
                    "tracking_code": this.TrackingCode()
                }
            }).then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    $cookies.put(temp_cookie, temp_cookie);
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function offersViewTrack(callback) {
            var temp_cookie = 'code_' + document.getElementById("offer_id").value;
            if ($cookies.get(temp_cookie)) {
                return;
            }
            $http.post(apiBaseURL + 'page_visits', {
                "page_visit": {
                    "url": window.location.href.replace('#!/', ''),
                    "offer_id": document.getElementById("offer_id").value,
                    "ip_address": document.getElementById("ip").value,
                    "tracking_code": document.getElementById("tracking_code").value
                }
            }).then(function(response) {
                var response = response.data.data;
                $cookies.put(temp_cookie, temp_cookie);
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }

        function getVendorProfileInfo(callback) {
            $http.get(apiBaseURL + 'profile').then(function(response) {
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
            $http.get(apiBaseURL + 'profile').then(function(response) {
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

        function getCityDataList(callback) {

            var url = apiBaseURL;
            // var url = 'https://stagingapi.spini.co/v1/';

        
            
            $http.get(url + 'locations').then(function(response) {
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



        function checkOfferCookie(auth, callback) {}

        function Login(auth, callback) {
            auth.tracking_code = this.TrackingCode();
            $http.post(apiBaseURL + 'facebook_user_token', {
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
            $cookies.remove('mobile');
            $http.defaults.headers.common.Authorization = '';
            window.location = window.location.origin;
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
                    appId: '1745197009116134',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.4'
                });
                FB.login(function(response) {
                    console.log(response);
                    if (response.status === 'connected') {
                        facebookLogin
                        $rootScope.$broadcast("FBLoginCompleteVendor", {
                            "authData": response
                        });
                    } else if (response.status === 'not_authorized') {} else {}
                }, {
                    scope: 'email,public_profile,user_address, user_mobile_phone' // to make sure the email access from fb
                });
            },
            facebookLogin: function() {
                var _self = this;
                FB.init({
                    appId: '1745197009116134',
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
                    scope: 'email,public_profile,user_address, user_mobile_phone' // to make sure the email access from fb
                });
            }
        };
    };
})();