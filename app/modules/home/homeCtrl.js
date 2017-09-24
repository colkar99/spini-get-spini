(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('angular-app')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService','$window','facebookService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService,$window,facebookService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		vm.someValue ;


		 vm.getofferspopup = function() {
		    // closeNav()
		    document.getElementById("login-popup").style.width = "100%";
		}

		vm.closepopup = function()  {

		   // openNav()
		    document.getElementById("login-popup").style.width = "0%";
		}


           vm.signupPOP = function() {
              // closeNav()
              document.getElementById("login-signup").style.width = "100%";
          }

          vm.signupPOPClose = function()  {

             // openNav()
              document.getElementById("login-signup").style.width = "0%";
          }


		vm.getloginpopup = function(id) {

    		vm.someValue= id;
    		 document.getElementById("offer-popup").style.width = "100%";
			}
		vm.closeNav = function() {
    		document.getElementById("offer-popup").style.width = "0%";
			}


		vm.getcodepopup = function() {
               console.log('data');
    // closeNav()
    		document.getElementById("get-code-popup").style.width = "100%";
    		document.getElementById("offer-popup").style.width = "0%";
			}
		vm.closegetcodepopup = function() {

   // openNav()
    		document.getElementById("get-code-popup").style.width = "0%";
    		document.getElementById("offer-popup").style.width = "100%";
			}






	}

})();

