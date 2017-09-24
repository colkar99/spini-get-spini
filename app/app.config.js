(function() {
    'use strict';
    /**
     * @ngdoc configuration file
     * @name app.config:config
     * @description
     * # Config and run block
     * Configutation of the app
     */
    angular.module('angular-app').config(configure).run(runBlock);
    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.hashPrefix('!');
        // This is required for Browser Sync to work poperly
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $urlRouterProvider.otherwise('/');

        (function(d) {
        // load the Facebook javascript SDK
        var js,
            id = 'facebook-jssdk',
            ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "http://connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();

    function onLoadCallback() {
        gapi.client.setApiKey('405658344932-5ot4r5m9vs424c8b4j6htt3dg1p8qfpd.apps.googleusercontent.com'); //set your API KEY
        gapi.client.load('plus', 'v1', function() {}); //Load Google + API
    }

    // function login() {
    //     var myParams = {
    //         'clientid': '405658344932-5ot4r5m9vs424c8b4j6htt3dg1p8qfpd.apps.googleusercontent.com', //You need to set client id
    //         'cookiepolicy': 'single_host_origin',
    //         'callback': 'callbackGoogle', //callback function
    //         'approvalprompt': 'force',
    //         'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    //     };
    //     gapi.auth.signIn(myParams);
    // }


    }
    runBlock.$inject = ['$rootScope'];

    function runBlock($rootScope) {
        'use strict';
        console.log('AngularJS run() function');


    }


})();

  function callbackGoogle(res) {
        console.log(res);
    }
