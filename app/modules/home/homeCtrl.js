(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('angular-app')
    .controller('HomeCtrl', Home);
    Home.$inject = ['homeService', '$window', 'apiBaseURL', '$http', 'LoginService', '$location', '_','$scope'];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Home(homeService, $window, apiBaseURL, $http, LoginService, $location, _,$scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.offer_id;
        $scope.filter_items = new Array();
         vm.compaigns = [];
         vm.overall_compaigns = [];
        var headers = {
          "Accept": "application/json",
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*',
          'Access-Control-Allow-Headers' : 'Content-Type',
          "Content-Type": 'application/json',
          // 'Access-Token' : $rootScope.current_user.authentication_token
          // 'Access-Token' : "$2a$10$Z1QJ46AB.9Qx/IDCIWqnTO20HogZNyOl7ztRDwqzl75nFaCbORNSW",
        }
        vm.closeLoginPopup = function() {
            document.getElementById("login-popup").style.width = "0%";
        }
        vm.openLoginPopup = function() {
            document.getElementById("login-popup").style.width = "100%";
        }


        vm.getSlidepopup = function(campaign_id) {

            vm.campaign_id = campaign_id;
            console.log(campaign_id);
            document.getElementById("offer-popup").style.width = "100%";
            vm.getSelectedCampaignOffers();
        }
        vm.closeSlidepopup = function() {
            document.getElementById("offer-popup").style.width = "0%";
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
        vm.getcodepopup = function(offer_id) {
             
            console.log('Offer_id');
            // closeNav()
            document.getElementById("get-code-popup").style.width = "100%";
            document.getElementById("offer-popup").style.width = "0%";
            vm.offer_id = offer_id ;

        }
        vm.closegetcodepopup = function() {
           
            // openNav()
            document.getElementById("confirm-code-popup").style.width = "0%";
            document.getElementById("get-code-popup").style.width = "100%";
        }
        vm.closeGetNoPopup = function(){
            
            document.getElementById("get-code-popup").style.width = "0%";
            document.getElementById("offer-popup").style.width = "100%";
        }
        vm.openConformPopup = function(){
            
            document.getElementById("get-code-popup").style.width = "0%";
              document.getElementById("confirm-code-popup").style.width = "100%";
        }
        vm.closegetMobilepopup = function(){
            document.getElementById("get-code-popup").style.width = "0%";
            document.getElementById("offer-popup").style.width = "100%";
        }

        vm.getOffers = function() {
            $http.get(apiBaseURL + '/home/offers').then(function(response) {
              
                if(response)
                {
                var response = response.data.data;
                $scope.filter_items.push(response);
                vm.offers = [];
               vm.compaigns = [];
                vm.offers = response;
                vm.overall_compaigns = response;
                vm.compaigns = _.uniqBy(response, function(e) {

                    return e.attributes.campaign_id;
                });
                vm.overall_compaigns = vm.compaigns;
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

           window.SelectedCampOffers =[];
        vm.getItems = function()
        {
            return window.SelectedCampOffers;
        }
         vm.getSelectedCampaignOffers = function() {

           vm.SelectedCampOffers = [];
           angular.forEach(vm.offers, function(value, key) {

               if (value.attributes.campaign_id == vm.campaign_id) {
                   vm.SelectedCampOffers.push(value);
               }
           });
           window.SelectedCampOffers =[];
           window.SelectedCampOffers = vm.SelectedCampOffers;
           return vm.SelectedCampOffers;
       }
       vm.sentMobileNo = function(mobile){
        
        vm.mobile_no = mobile.toString();
        vm.offer_id;
        vm.post = {"coupon_code":{"mobile":vm.mobile_no , "offer_id": vm.offer_id}}
        
        $http({
            method : "POST",
            headers : headers,
            url : apiBaseURL + '/coupon_codes',
            data : vm.post
          }).then(function mySuccess(response) {
            
            vm.openConformPopup();
            }, function myError(response) {
              $scope.myWelcome = response.statusText;
          });
         }
         vm.filter_by_food = function(some){
          vm.filter_items = some;
          vm.compaigns = [];
          
          for (var i=0;i <= vm.filter_items.length; i++)
              { 
                if(vm.filter_items[i].attributes.offer_category_id == 1 )
                {
                 
                 vm.compaigns.push(vm.filter_items[i]);
                 console.log(vm.compaigns);

                } 
             }
            
            return vm.compaigns;
         };
         vm.filter_by_beauty = function(some){
          
          vm.filter_items = some;
          vm.compaigns = [];
          
          for (var i=0;i <= vm.filter_items.length; i++)
              { 
                if(vm.filter_items[i].attributes.offer_category_id == 2 )
                {
                 
                 
                 vm.compaigns.push(vm.filter_items[i]);
                 console.log(vm.compaigns);

                } 
             }
            
            return vm.compaigns;
         };
         vm.filter_by_personal_need = function(some){
          
          vm.filter_items = some;
          vm.compaigns = [];
          
          for (var i=0;i <= vm.filter_items.length; i++)
              { 
                if(vm.filter_items[i].attributes.offer_category_id == 4 )
                {
                 
                 
                 vm.compaigns.push(vm.filter_items[i]);
                 console.log(vm.compaigns);

                } 
             }
            
            return vm.compaigns;
         };
    }
})();


