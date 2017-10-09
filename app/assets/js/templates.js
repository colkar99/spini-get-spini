angular.module('angular-app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
    "\n" +
    "<!-- slider code -->\n" +
    "<section class=\"main-slider\">\n" +
    "  <div class=\"container\">\n" +
    "    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "      <!-- Indicators -->\n" +
    "      <ol class=\"carousel-indicators\">\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "      </ol>\n" +
    "\n" +
    "      <!-- Wrapper for slides -->\n" +
    "      <div class=\"carousel-inner\">\n" +
    "\n" +
    "        <div class=\"item active\">\n" +
    "\n" +
    "          <img src=\"/app/assets/images/03Banner/cream_fudge.png\" alt=\"Los Angeles\" style=\"width:100%;\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"item\">\n" +
    "          <img src=\"/app/assets/images/03Banner/naturals.png\" alt=\"Chicago\" style=\"width:100%;\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"item\">\n" +
    "          <img src=\"/app/assets/images/03Banner/ak.png\" alt=\"New York\" style=\"width:100%;\">\n" +
    "          <!-- <div class=\"carousel-caption\">\n" +
    "            <h3>New York</h3>\n" +
    "            <p>We love the Big Apple!</p>\n" +
    "          </div> -->\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Left and right controls -->\n" +
    "      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n" +
    "        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "        <span class=\"sr-only\">Previous</span>\n" +
    "      </a>\n" +
    "      <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n" +
    "        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "        <span class=\"sr-only\">Next</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "<!-- how works code -->\n" +
    "<section class=\"how-spini-works\">\n" +
    "  <div class=\"container\">\n" +
    "    <img src=\"/app/assets/images/04HowSpini/00-Bann-HowSpini-Complete.png\">\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"offers-grid\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"offer-container\">\n" +
    "        <img src=\"/app/assets/images/sample_cream_fudge.jpg\" alt=\"offer-image\">\n" +
    "        <div class=\"offer-details\">\n" +
    "          <button ng-click=\"vm.getloginpopup(1)\">GET CODE!</button>\n" +
    "          <h3>Flat 15% Off</h3>\n" +
    "          <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "          <div class=\"offer-share\">\n" +
    "            <label>SHARE & EARN</label>\n" +
    "            <ul>\n" +
    "              <li class=\"offer-share-max\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-fb\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-twitter\"><a href=\"#\"></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"offer-spini-treashure\">\n" +
    "          <a href=\"#\">SPINI TREASURE</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"offer-container\">\n" +
    "        <img src=\"/app/assets/images/sample_cream_fudge.jpg\" alt=\"offer-image\">\n" +
    "        <div class=\"offer-details\">\n" +
    "          <button ng-click=\"getloginpopup()\">GET CODE!</button>\n" +
    "          <h3>Flat 15% Off</h3>\n" +
    "          <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "          <div class=\"offer-share\">\n" +
    "            <label>SHARE & EARN</label>\n" +
    "            <ul>\n" +
    "              <li class=\"offer-share-max\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-fb\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-twitter\"><a href=\"#\"></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"offer-spini-treashure\">\n" +
    "          <a href=\"#\">SPINI TREASURE</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"offer-container\">\n" +
    "        <img src=\"/app/assets/images/sample_cream_fudge.jpg\" alt=\"offer-image\">\n" +
    "        <div class=\"offer-details\">\n" +
    "          <button ng-click=\"getloginpopup()\">GET CODE!</button>\n" +
    "          <h3>Flat 15% Off</h3>\n" +
    "          <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "          <div class=\"offer-share\">\n" +
    "            <label>SHARE & EARN</label>\n" +
    "            <ul>\n" +
    "              <li class=\"offer-share-max\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-fb\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-twitter\"><a href=\"#\"></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"offer-spini-treashure\">\n" +
    "          <a href=\"#\">SPINI TREASURE</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"offer-container\">\n" +
    "        <img src=\"/app/assets/images/sample_cream_fudge.jpg\" alt=\"offer-image\">\n" +
    "        <div class=\"offer-details\">\n" +
    "          <button ng-click=\"getloginpopup()\">GET CODE!</button>\n" +
    "          <h3>Flat 15% Off</h3>\n" +
    "          <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "          <div class=\"offer-share\">\n" +
    "            <label>SHARE & EARN</label>\n" +
    "            <ul>\n" +
    "              <li class=\"offer-share-max\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-fb\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-twitter\"><a href=\"#\"></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"offer-spini-treashure\">\n" +
    "          <a href=\"#\">SPINI TREASURE</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"offer-container\">\n" +
    "        <img src=\"/app/assets/images/sample_cream_fudge.jpg\" alt=\"offer-image\">\n" +
    "        <div class=\"offer-details\">\n" +
    "          <button ng-click=\"getloginpopup()\">GET CODE!</button>\n" +
    "          <h3>Flat 15% Off</h3>\n" +
    "          <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "          <div class=\"offer-share\">\n" +
    "            <label>SHARE & EARN</label>\n" +
    "            <ul>\n" +
    "              <li class=\"offer-share-max\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-fb\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-twitter\"><a href=\"#\"></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"offer-spini-treashure\">\n" +
    "          <a href=\"#\">SPINI TREASURE</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"offer-container\">\n" +
    "        <img src=\"/app/assets/images/sample_cream_fudge.jpg\" alt=\"offer-image\">\n" +
    "        <div class=\"offer-details\">\n" +
    "          <button ng-click=\"getloginpopup()\">GET CODE!</button>\n" +
    "          <h3>Flat 15% Off</h3>\n" +
    "          <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "          <div class=\"offer-share\">\n" +
    "            <label>SHARE & EARN</label>\n" +
    "            <ul>\n" +
    "              <li class=\"offer-share-max\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-fb\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-twitter\"><a href=\"#\"></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"offer-spini-treashure\">\n" +
    "          <a href=\"#\">SPINI TREASURE</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!-- login POPUP -->\n" +
    "\n" +
    "<div id=\"login-popup\" class=\"overlay\" >\n" +
    "  <a href=\"javascript:void(0)\" class=\"closebtn\" ng-click=\"vm.closepopup()\">&times;</a>\n" +
    "  <div class=\"overlay-content\">\n" +
    "    <div class=\"row \">\n" +
    "<div class=\"col-md-4 row col-md-offset-4 white nopad\">\n" +
    "<div class=\"text-center bg-grey nopad pad-bot-10\">\n" +
    "  <img class=\"poplogo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "\n" +
    "\n" +
    "<h3> SIGN UP WITH SPINI </h3>\n" +
    "<br/>\n" +
    "<h5> Share & Earn Spini Treasure..!!!</h5>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"text-center temp\" ng-controller=\"LoginCtrl as vm\">\n" +
    "   <button class=\"btn btn-block fbbutton \" ng-click=\"vm.FbLogin('facebook')\">\n" +
    "    <span class=\"fa fa-facebook left falign\"></span> Sign in with Facebook\n" +
    "  </button>\n" +
    "\n" +
    "     <button g-login class=\"btn btn-block gbutton\" ng-click=\"vm.GoogleLogin('google')\">\n" +
    "    <span class=\"fa fa-google left falign\" ></span> Sign in with Google\n" +
    "  </button>\n" +
    "\n" +
    "</div>\n" +
    "<div>\n" +
    "\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- end login code -->\n" +
    "\n" +
    "\n" +
    "<!-- login POPUP -->\n" +
    "\n" +
    "<div id=\"login-signup\" class=\"overlay\" ng-controller=\"signupCtrl as vm\">\n" +
    "  <a href=\"javascript:void(0)\" class=\"closebtn\" ng-click=\"vm.signupPOPClose()\">&times;</a>\n" +
    "  <div class=\"overlay-content\">\n" +
    "    <div class=\"row \">\n" +
    "<div class=\"col-md-4 row col-md-offset-4 white nopad\">\n" +
    "<div class=\"text-center bg-grey nopad pad-bot-10\">\n" +
    "  <img class=\"poplogo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "\n" +
    "\n" +
    "<h3> SIGN UP WITH SPINI </h3>\n" +
    "<br/>\n" +
    "<h5> Share & Earn Spini Treasure..!!!</h5>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"text-center temp\">\n" +
    "\n" +
    "   <button class=\"btn btn-block fbbutton \" ng-click=\"vm.FbRegister('facebook')\">\n" +
    "    <span class=\"fa fa-facebook left falign\"></span> Sign UP with Facebook\n" +
    "  </button>\n" +
    "\n" +
    "     <button g-login class=\"btn btn-block gbutton\" ng-click=\"vm.GoogleRegister('google')\">\n" +
    "    <span class=\"fa fa-google left falign\" ></span> Sign UP with Google\n" +
    "  </button>\n" +
    "\n" +
    "</div>\n" +
    "<div>\n" +
    "\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- end login code -->\n" +
    "\n" +
    "\n" +
    "<!-- Get Code POPUP -->\n" +
    "\n" +
    "<div id=\"confirm-code-popup\" class=\"overlay\">\n" +
    "  <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closegetcodepopup()\">&times;</a>\n" +
    "  <div class=\"overlay-content\">\n" +
    "    <div class=\"row \">\n" +
    "<div class=\"col-md-8 row col-md-offset-2 white pad-bot0 pad10 \">\n" +
    "      <div class=\"row mar20bt\">\n" +
    "          <div class=\"col-md-1 nopad\">\n" +
    "\n" +
    "\n" +
    "        <i class=\"fa fa-arrow-left offer-logo-40px mar10\" ng-click=\"closegetcodepopup()\" aria-hidden=\"true\"></i>\n" +
    "\n" +
    "        </div>       <div class=\"col-md-3 nopad text-left\">\n" +
    "\n" +
    "\n" +
    "          <h4 class=\"mar10\"> <b>Flat 15% Off</b></h4>\n" +
    "               <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                  <div class=\"col-md-8 text-right nopad\">\n" +
    "        <img class=\"offer-logo-set1\" src=\"/app/assets/images/05Cards/Card-Logo-CnF.png\">\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row backcls mar-10px text-left\">\n" +
    "        <div class=\"form-group popupcenter padtop40 \">\n" +
    "          <div class=\"col-md-12 nopad text-center\">\n" +
    "            <h4 class=\"marbt20\"> Hi Kalidass </h4>\n" +
    "            <h4 class=\"marbt20\">Availing this offer will add Rs.200 to your Spini Wallet! </h4>\n" +
    "            <h4 class=\"marbt20\"> Offer code will be send to your registered mobile No - 9524609638 </h4>\n" +
    "\n" +
    "\n" +
    "    <button type=\"button\" class=\"btn min40 btnwid50 nbr\">SEND CODE!</button>\n" +
    "    </div>\n" +
    " <div class=\"col-md-12 nopad gpad text-center\">\n" +
    "             <span class=\"offer-spini\">\n" +
    "           <i class=\"fa fa-share-alt-square link-icon\" aria-hidden=\"true\"></i>  SHARE & EARN\n" +
    "          </span>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "      </div>\n" +
    "       <div class=\"row backcls mar-10px text-left dotted\">\n" +
    "      <div class=\"col-md-12 nopad mar45\">\n" +
    "        <div class=\"col-md-8\">\n" +
    "\n" +
    "          <p class=\"font15px popupfoot1  \">\n" +
    "          <b>Further more sharing this code will earn you </b>\n" +
    "          <br/>\n" +
    "\n" +
    "          <b >Rs.200 each time it's availed</b>\n" +
    "\n" +
    "        </p>\n" +
    "\n" +
    "       <div class=\"social pad-bot10 padtop30 popupfoot1\">\n" +
    "  <a class=\"fa fa-twitter twitter\" title=\"\" target=\"_blank\" href=\"#\"></a>\n" +
    "  <a class=\"fa fa-facebook fb\" title=\"\" target=\"_blank\" href=\"#\"></a>\n" +
    "  <a class=\"fa fa-clone clone\" title=\"\" target=\"_blank\" href=\"#\"></a>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-4 text-center\">\n" +
    "\n" +
    "<h1 class=\"b\">Rs.200</h1>\n" +
    "\n" +
    "<p>\n" +
    "  Earn real cash while you enjoy Spini offers!!\n" +
    "</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<script>\n" +
    "function getconfirmpopup() {\n" +
    "    // closeNav()\n" +
    "    document.getElementById(\"confirm-code-popup\").style.width = \"100%\";\n" +
    "}\n" +
    "\n" +
    "function closeconfirmcodepopup() {\n" +
    "\n" +
    "   // openNav()\n" +
    "    document.getElementById(\"confirm-code-popup\").style.width = \"0%\";\n" +
    "}\n" +
    "</script>\n" +
    "<!-- end get code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Get Code POPUP mobile no-->\n" +
    "\n" +
    "<div id=\"get-code-popup\" class=\"overlay\">\n" +
    "  <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closegetcodepopup()\">&times;</a>\n" +
    "  <div class=\"overlay-content\">\n" +
    "    <div class=\"row \">\n" +
    "<div class=\"col-md-8 row col-md-offset-2 white pad-bot0 pad10 \">\n" +
    "      <div class=\"row mar20bt\">\n" +
    "          <div class=\"col-md-1 nopad\">\n" +
    "\n" +
    "\n" +
    "        <i class=\"fa fa-arrow-left offer-logo-40px mar10\" ng-click=\"vm.closegetcodepopup()\" aria-hidden=\"true\"></i>\n" +
    "\n" +
    "        </div>       <div class=\"col-md-3 nopad text-left\">\n" +
    "\n" +
    "\n" +
    "          <h4 class=\"mar10\"> <b>Flat 15% Off</b></h4>\n" +
    "               <div class=\"offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                  <div class=\"col-md-8 text-right nopad\">\n" +
    "        <img class=\"offer-logo-set1\" src=\"/app/assets/images/05Cards/Card-Logo-CnF.png\">\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row backcls mar-10px text-left\">\n" +
    "        <div class=\"form-group popupcenter \">\n" +
    "          <div class=\"col-md-8 nopad\">\n" +
    "<label for=\"usr\">Enter your mobile No. to get Code</label>\n" +
    "  <input type=\"text\" placeholder=\"Mobile no\" class=\"form-control nbr min40\" id=\"usr\">\n" +
    "\n" +
    "           </div>\n" +
    "           <div class=\"col-md-4 nopad mar25x\">\n" +
    "    <button type=\"button\" class=\"btn min40 width100 nbr\">SEND CODE!</button>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"col-md-12 nopad mar40\">\n" +
    "             <span class=\"offer-spini\">\n" +
    "           <i class=\"fa fa-gift link-icon fagift\" aria-hidden=\"true\"></i>  SPINI TREASURE\n" +
    "          </span>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "      </div>\n" +
    "       <div class=\"row backcls mar-10px text-left dotted\">\n" +
    "      <div class=\"col-md-12 nopad mar40\">\n" +
    "          <p class=\"font15px popupfoot pad-bot \">\n" +
    "          Psst...! <br/>\n" +
    "          Signup to become a Spini referral and earn Rs.200 with this offer!<br/>\n" +
    "          Sparsh earned Rs.2000 begin a Spini Referral!<br/>\n" +
    "        </p>\n" +
    "\n" +
    "        <p class=\"fbblue font15px popupfoot pad-bot\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "             <i class=\"fa fa-facebook link-icon\" aria-hidden=\"true\"></i>  SIGN UP WITH FACEBOOK<br/>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<script>\n" +
    "function getcodepopup() {\n" +
    "    // closeNav()\n" +
    "    document.getElementById(\"get-code-popup\").style.width = \"100%\";\n" +
    "}\n" +
    "\n" +
    "function closegetcodepopup() {\n" +
    "\n" +
    "   // openNav()\n" +
    "    document.getElementById(\"get-code-popup\").style.width = \"0%\";\n" +
    "}\n" +
    "</script>\n" +
    "<!-- end get code -->\n" +
    "\n" +
    "\n" +
    "<!-- OFFERS POPUP 1st-->\n" +
    "\n" +
    "<div id=\"offer-popup\" class=\"overlay\">\n" +
    "  <a href=\"javascript:void(0)\" class=\"closebtn\" ng-click=\"vm.closeNav()\">&times;</a>\n" +
    "  <div class=\"overlay-content\">\n" +
    "    <div class=\"row \">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-md-8 row col-md-offset-2 white pad10\">\n" +
    "\n" +
    "\n" +
    "<div class=\"col-md-5 nopad\">\n" +
    "\n" +
    "<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "  <ol class=\"carousel-indicators\">\n" +
    "    <!-- <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li> -->\n" +
    "  </ol>\n" +
    "\n" +
    "  <div class=\"carousel-inner\">\n" +
    "    <div class=\"active item\">\n" +
    "      <img  class=\"fixed-height\" src=\"/app/assets/images/sample_cream_fudge.jpg\" alt=\"...\">\n" +
    "\n" +
    "    </div>\n" +
    " <!--    <div class=\"item\">\n" +
    "      <img class=\"fixed-height\" src=\"http://placehold.it/1200x400\" alt=\"...\">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"item\">\n" +
    "      <img class=\"fixed-height\" src=\"http://placehold.it/1200x400\" alt=\"...\">\n" +
    "\n" +
    "    </div> -->\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-12 nopad mr10px\">\n" +
    "<div class=\"col-md-6 text-left nopad\">\n" +
    "<i class=\"fa fa-arrow-circle-o-left ft25px grey\" aria-hidden=\"true\"></i>\n" +
    "</div>\n" +
    "<div class=\"col-md-6 text-right nopad\">\n" +
    "<i class=\"fa fa-arrow-circle-o-right  ft25px grey\" aria-hidden=\"true\"></i>\n" +
    "</div>\n" +
    "</div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-7 nopad\">\n" +
    "      <div class=\"pad-top-none offer-details text-left\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "          <div class=\"col-md-4\">\n" +
    "          <h3 class=\"tm\">Flat 15% Off</h3>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "                  <div class=\"col-md-8 text-right \">\n" +
    "        <img class=\"offer-logo-set\" src=\"/app/assets/images/05Cards/Card-Logo-CnF.png\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "          <div class=\"ts offer-location\">\n" +
    "            <b>At Cream & Fudge at - </b><span>T.Nagar</span>\n" +
    "          </div>\n" +
    "\n" +
    "            <div class=\"row space-div\">\n" +
    "          <div class=\"col-md-4\">\n" +
    "                  <button ng-click=\"vm.getcodepopup()\">GET CODE!</button>\n" +
    "                </div>\n" +
    "                   <div class=\"col-md-6\">\n" +
    "                  <span class=\"offer-spini\">\n" +
    "           <i class=\"fa fa-gift link-icon fagift\" aria-hidden=\"true\"></i>  Spini Treasure <b>$200</b>\n" +
    "          </span>\n" +
    "          </div>\n" +
    "\n" +
    "                <div class=\"col-md-2 \">\n" +
    "                  <span class=\"offer-count\">\n" +
    "           <i class=\"fa fa-star-o link-icon \" aria-hidden=\"true\"></i>   54      </span>\n" +
    "          </div>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "          <p class=\"\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "\n" +
    "           <p class=\"offer-wrap-text space-div\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n" +
    "\n" +
    "\n" +
    "          <div class=\"offer-share col-md-6\">\n" +
    "            <label>SHARE & EARN</label>\n" +
    "            <ul>\n" +
    "              <li class=\"offer-share-max\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-fb\"><a href=\"#\"></a></li>\n" +
    "              <li class=\"offer-share-twitter\"><a href=\"#\"></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "            <div class=\"offer-share col-md-6\">\n" +
    "            <label class=\"right\">OFFERS END IN</label>\n" +
    "            <p class=\"right timers\">\n" +
    "              01:04:05\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<span class=\"tes\">\n" +
    "  <img class=\"roate-270\" src=\"/app/assets/images/icons8-Expand%20Arrow-64.png\">\n" +
    "</span>\n" +
    "\n" +
    "\n" +
    "<!-- <span class=\"tes1\">\n" +
    "  <img class=\"roate-90\" src=\"/app/assets/images/icons8-Expand%20Arrow-64.png\">\n" +
    "</span> -->\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<script>\n" +
    "function openNav() {\n" +
    "    document.getElementById(\"offer-popup\").style.width = \"100%\";\n" +
    "}\n" +
    "\n" +
    "function closeNav() {\n" +
    "    document.getElementById(\"offer-popup\").style.width = \"0%\";\n" +
    "}\n" +
    "</script>\n" +
    "<!-- end OFFERS POPUP -->\n" +
    "</section>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar-tpl.html',
    "<!-- header section -->\n" +
    "<header  >\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row main-header\">\n" +
    "      <div class=\"col-md-2 col-xs-12 col-sm-12 text-center main-header-logo\">\n" +
    "        <a href=\"/\">\n" +
    "          <img src=\"/app/assets/images/header/Logo@2x.png\" alt=\"spini-logo\">\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6 main-header-search\">\n" +
    "        <input type=\"text\" placeholder=\"Search Offers\" ng-model=\"vm.search_txt\" class=\"search_n\">\n" +
    "\n" +
    "        <button class=\"search_n\" ng-enter=\"vm.searchBox(vm.search_txt)\" ng-click=\"vm.searchBox(vm.search_txt)\"></button>\n" +
    "      </div>\n" +
    "   <!--    <div class=\"col-md-2 main-header-partner\" ng-hide=\"menu.isVendor()\">\n" +
    "        <button ng-click=\"menu.signupPOP('vendor');\">Become our partner</button>\n" +
    "      </div> -->\n" +
    "<span ng-controller=\"HomeCtrl as menu\">\n" +
    "  \n" +
    "\n" +
    "         <div class=\"col-md-2  col-xs-6 nopad main-header-partner\" ng-hide=\"menu.isVendor() || menu.isReferral()\">\n" +
    "        <button ng-click=\"menu.VendorContactUs();\">Become our partner</button>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div ng-class=\"menu.isReferral() ?'col-md-4':'col-md-2'\" class=\"col-md-4 main-header-signin\" ng-hide=\"menu.isVendor()\">\n" +
    "        <a  ng-click=\"menu.open = true\" ng-hide=\"menu.isReferral()\">Sign In <img src=\"/app/assets/images/header/UserIcon@2x.png\"></a>\n" +
    "        <a  ng-click=\"menu.open = true\" ng-show=\"menu.isReferral()\">MyAccount <img src=\"/app/assets/images/header/UserIcon@2x.png\"></a>\n" +
    "\n" +
    "        <div class=\"manage-account\" ng-if=\"menu.open ==  true && menu.isReferral() == false\">\n" +
    "          <i class=\"glyphicon glyphicon-remove-circle\" ng-click=\"menu.open = false\"></i>\n" +
    "          <b>Your Account</b>\n" +
    "          <p>Access account and manage offers</p>\n" +
    "          <button ng-click=\"menu.open = false;menu.signupPOP('referral');\">SIGN UP</button>\n" +
    "          <button ng-click=\"menu.open = false;menu.openLoginPopup('referral');\">LOGIN</button>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "          <div class=\"manage-account\" ng-if=\"menu.open == true && menu.isReferral() == true\">\n" +
    "          <i class=\"glyphicon glyphicon-remove-circle\" ng-click=\"menu.open = false\"></i>\n" +
    "          <b>Your Account</b>\n" +
    "          <p>Access account and manage offers</p>\n" +
    "          <button ng-click=\"menu.open = false;menu.goProfile()\" >Profile</button>\n" +
    "          <button ng-click=\"menu.open = false;menu.Logout()\" >Logout</button>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-md-2 main-header-partner\" ng-show=\"menu.isVendor()\">\n" +
    "        <button ng-click=\"menu.goVendorProfile()\">Dashboard</button>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"col-md-2 main-header-signin\" ng-show=\"menu.isVendor()\">\n" +
    "\n" +
    "     <button ng-click=\"menu.Logout()\" >Logout</button>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</span>\n" +
    "  <hr>\n" +
    "</header>\n" +
    "<style type=\"text/css\">\n" +
    "  .manage-account{\n" +
    "    background: #fff;\n" +
    "    padding: 20px 16px;\n" +
    "    text-align: left;\n" +
    "    width: 300px;\n" +
    "    position: absolute;\n" +
    "    z-index: 1;\n" +
    "    box-shadow: 0px 0px 6px #888;\n" +
    "    border-radius: 3px;\n" +
    "    top: 50px;\n" +
    "  /*  left: 70px;*/\n" +
    "  }\n" +
    "  .manage-account i{\n" +
    "    text-align: right;\n" +
    "    display: block;\n" +
    "    color: #b3b3b3;\n" +
    "  }\n" +
    "  .manage-account b{\n" +
    "    margin: 10px 0px;\n" +
    "  }\n" +
    "  .manage-account p{\n" +
    "    margin: 10px 0px;\n" +
    "  }  \n" +
    "  .manage-account button{\n" +
    "    font-weight: 300;\n" +
    "    letter-spacing: 1px;\n" +
    "    margin-right: 15px;\n" +
    "  }\n" +
    "</style>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<div ng-controller=\"NavBarCtrl as vm\">\n" +
    "    <nav-bar menus=\"vm.menu\" brand=\"vm.title\"></nav-bar>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/loginAuth/login.html',
    "<div class=\"container\">\n" +
    "	<div class=\"col-md-4 col-md-offset-4\">\n" +
    "		<div class=\"well login-container\">\n" +
    "			<h3 class=\"text-center\">LOGIN</h3>\n" +
    "			<input type=\"email\" placeholder=\"Enter your email\">\n" +
    "			<input type=\"password\" placeholder=\"Enter your password\">\n" +
    "			<button>LOGIN</button>\n" +
    "			<div class=\"text-center\">(or)</div>\n" +
    "			<button type=\"button\" ng-click=\"vm.FbLogin()\" class=\"btn btn-default\"><i class=\"fa fa-facebook\" aria-hidden=\"true\" style=\"color:#4267b2;\"></i>  Facebook</button>\n" +
    "			<button type=\"button\" ng-click=\"vm.GoogleLogin()\" class=\"btn btn-default\"><i class=\"fa fa-google\" aria-hidden=\"true\" style=\"color: #f55344;\"></i>Google</button>\n" +
    "			<a ui-sref=\"signup\" style=\"display: block; text-align: center; margin-top: 10px;\">Don't have account click here</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<style>\n" +
    "	.login-container{\n" +
    "		background: #fff;\n" +
    "		margin: 50% 0;\n" +
    "	}\n" +
    "	.login-container input, .login-container button{\n" +
    "		width: 100%;\n" +
    "		display: block;\n" +
    "		margin: 10px 0;\n" +
    "	}\n" +
    "\n" +
    "</style>\n"
  );


  $templateCache.put('app/modules/pop-ups/popup.html',
    "<toast>\n" +
    "</toast>\n" +
    "<!-- login POPUP -->\n" +
    "<div class=\"overlay\" id=\"login-popup\">\n" +
    "    <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeLoginPopup()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row \">\n" +
    "            <div class=\"col-md-4 row col-md-offset-4 white nopad\">\n" +
    "                <div class=\"text-center bg-grey nopad pad-bot-10\">\n" +
    "                    <img class=\"poplogo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "                        <h3>\n" +
    "                            SPINI SIGN IN\n" +
    "                        </h3>\n" +
    "                        <br/>\n" +
    "                        <h5>\n" +
    "                            Share & Earn Spini Treasure..!!!\n" +
    "                        </h5>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"text-center temp\" ng-controller=\"LoginCtrl as vm\">\n" +
    "                    <button class=\"btn btn-block fbbutton \" ng-click=\"vm.FbLogin()\">\n" +
    "                        <span class=\"fa fa-facebook left falign\">\n" +
    "                        </span>\n" +
    "                        Sign in with Facebook\n" +
    "                    </button>\n" +
    "                   <!--  <button class=\"btn btn-block gbutton\" g-login=\"\" ng-click=\"vm.GoogleLogin('google')\">\n" +
    "                        <span class=\"fa fa-google left falign\">\n" +
    "                        </span>\n" +
    "                        Sign in with Google\n" +
    "                    </button> -->\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end login code -->\n" +
    "<!-- login POPUP -->\n" +
    "<div class=\"overlay\" id=\"login-signup\">\n" +
    "    <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.signupPOPClose()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row \">\n" +
    "            <div class=\"col-md-4 row col-md-offset-4 white nopad\">\n" +
    "                <div class=\"text-center bg-grey nopad pad-bot-10\">\n" +
    "                    <img class=\"poplogo\" src=\"/app/assets/images/header/Logo@2x.png\">\n" +
    "                        <h3>\n" +
    "                            SIGN UP WITH SPINI\n" +
    "                        </h3>\n" +
    "                        <br/>\n" +
    "                        <h5>\n" +
    "                            Share & Earn Spini Treasure..!!!\n" +
    "                        </h5>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"text-center temp\" ng-controller=\"LoginCtrl as vm\">\n" +
    "                    <button class=\"btn btn-block fbbutton \" ng-click=\"vm.FbLogin('facebook')\">\n" +
    "                        <span class=\"fa fa-facebook left falign\">\n" +
    "                        </span>\n" +
    "                        Sign UP with Facebook\n" +
    "                    </button>\n" +
    "         <!--            <button class=\"btn btn-block gbutton\" g-login=\"\" ng-click=\"vm.GoogleLogin('google')\">\n" +
    "                        <span class=\"fa fa-google left falign\">\n" +
    "                        </span>\n" +
    "                        Sign UP with Google\n" +
    "                    </button> -->\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end login code -->\n" +
    "<!-- Get Code POPUP -->\n" +
    "<div class=\"overlay\" id=\"confirm-code-popup\">\n" +
    "    <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closegetcodepopup()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "    <div class=\"overlay-content\">\n" +
    "  <div class=\"row \"  ng-repeat=\"item in vm.getSelectedOfferData()\">\n" +
    "            <div class=\"col-md-8 row col-md-offset-2 white pad-bot0 pad10 \">\n" +
    "                <div class=\"row mar20bt\">\n" +
    "                    <div class=\"col-md-1 nopad ico\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-arrow-left offer-logo-40px mar10\" ng-click=\"vm.closegetcodepopup()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "           \n" +
    "\n" +
    " <div class=\"col-md-3 nopad text-left\">\n" +
    "                        <h4 class=\"mar10\">\n" +
    "                            <b>\n" +
    "                                  {{item.attributes.name}}\n" +
    "                            </b>\n" +
    "                        </h4>\n" +
    "                        <div class=\"offer-location\">\n" +
    "                            <b>\n" +
    "                                At {{item.attributes.business_name}} -\n" +
    "                            </b>\n" +
    "                            <span>\n" +
    "                                {{item.attributes.place}}\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-8 text-right\">\n" +
    "                        <img class=\"offer-logo-set\" ng-src=\"    {{item.attributes.business_avatar_thumb}}\">\n" +
    "                        \n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    </hr>\n" +
    "                </div>\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group popupcenter padtop40 \">\n" +
    "                        <div class=\"col-md-12 nopad text-center\" ng-if=\"vm.user.name\">\n" +
    "                            <h4 class=\"marbt20\">\n" +
    "                                Hi  {{vm.user.name ? vm.user.name : 'Guest'}}\n" +
    "                            </h4>\n" +
    "                            <h4 class=\"marbt20\">\n" +
    "                                Availing this offer will add  Rs.{{item.attributes.treasure_value}} to your Spini Wallet!\n" +
    "                            </h4>\n" +
    "                            <h4 class=\"marbt20\">\n" +
    "                                Offer code sent to your registered mobile No - \n" +
    "\n" +
    "\n" +
    "\n" +
    "                  {{vm.user.mobile ? vm.user.mobile : vm.mobie()}}\n" +
    "                            </h4>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-12 nopad text-center\" ng-if=\"vm.user.name == null\">\n" +
    "                            <h4 class=\"marbt20\">\n" +
    "                                Hi  {{vm.user.name ? vm.user.name : 'Guest'}}\n" +
    "                            </h4>\n" +
    "               \n" +
    "                            <h4 class=\"marbt20\">\n" +
    "                                Offer code sent to your registered mobile No - \n" +
    "\n" +
    "                  {{vm.mobile()}}\n" +
    "                            </h4>\n" +
    "                       \n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-12 nopad gpad text-center\"ng-if=\"vm.user.name\" >\n" +
    "                            <span class=\"offer-spini\" >\n" +
    "                                <i aria-hidden=\"true\" class=\"fa fa-share-alt-square link-icon\">\n" +
    "                                </i>\n" +
    "                                SHARE & EARN\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "\n" +
    "                             <div class=\"col-md-12 nopad gpad text-center\" ng-if=\"vm.user.name == null\">\n" +
    "                            <span class=\"offer-spini\"  ng-click=\"vm.openLoginPopup('referral','confirm-code-popup')\">\n" +
    "                                <i aria-hidden=\"true\" class=\"fa fa-share-alt-square link-icon\">\n" +
    "                                </i>\n" +
    "                                SIGN UP & SHARE & EARN\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row backcls mar-10px text-left dotted\" ng-if=\"vm.user.name == null\">\n" +
    "                    <div class=\"col-md-12 nopad mar45\">\n" +
    "                        <div class=\"col-md-8\">\n" +
    "                            <p class=\"font15px popupfoot1 \">\n" +
    "                                <b>\n" +
    "                                    Further more sharing this code will earn you\n" +
    "                                </b>\n" +
    "                                <br/>\n" +
    "                                <b>\n" +
    "                                    Rs.200 each time it's availed\n" +
    "                                </b>\n" +
    "                            </p>\n" +
    "                            <div class=\"social pad-bot10 padtop30 popupfoot1\">\n" +
    "                                <a class=\"fa fa-twitter twitter\" ng-click=\"vm.openLoginPopup('referral','confirm-code-popup')\" title=\"\">\n" +
    "                                </a>\n" +
    "                                <a class=\"fa fa-facebook fb\"   ng-click=\"vm.openLoginPopup('referral','confirm-code-popup')\" title=\"\">\n" +
    "                                </a>\n" +
    "                                <a class=\"fa fa-clone clone\" ng-click=\"vm.openLoginPopup('referral','confirm-code-popup')\" title=\"\">\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4 text-center\">\n" +
    "                            <h1 class=\"b\">\n" +
    "                                Rs.200\n" +
    "                            </h1>\n" +
    "                            <p>\n" +
    "                                Earn real cash while you enjoy Spini offers!!\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                                <div class=\"row backcls mar-10px text-left dotted\" ng-if=\"vm.user.name\">\n" +
    "                    <div class=\"col-md-12 nopad mar45\">\n" +
    "                        <div class=\"col-md-8\">\n" +
    "                            <p class=\"font15px popupfoot1 \">\n" +
    "                                <b>\n" +
    "                                    Further more sharing this code will earn you\n" +
    "                                </b>\n" +
    "                                <br/>\n" +
    "                                <b>\n" +
    "                                    Rs.{{item.attributes.treasure_value}} each time it's availed\n" +
    "                                </b>\n" +
    "                            </p>\n" +
    "                            <div class=\"social pad-bot10 padtop30 popupfoot1\">\n" +
    "                    <!--             <a class=\"fa fa-twitter twitter\" href=\"#\" target=\"_blank\" title=\"\">\n" +
    "                                </a>\n" +
    "                                <a class=\"fa fa-facebook fb\" href=\"#\" target=\"_blank\" title=\"\">\n" +
    "                                </a>\n" +
    "                                <a class=\"fa fa-clone clone\" href=\"#\" target=\"_blank\" title=\"\">\n" +
    "                                </a> -->\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4 text-center\">\n" +
    "                            <h1 class=\"b\">\n" +
    "                                Rs.{{item.attributes.treasure_value}}\n" +
    "                            </h1>\n" +
    "                            <p>\n" +
    "                                Earn real cash while you enjoy Spini offers!!\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "<!-- Get Code POPUP mobile no-->\n" +
    "<div class=\"overlay\" id=\"get-code-popup\">\n" +
    "    <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closegetMobilepopup()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row \"  ng-repeat=\"item in vm.getSelectedOfferData()\">\n" +
    "            <div class=\"col-md-8 row col-md-offset-2 white pad-bot0 pad10 \">\n" +
    "                <div class=\"row mar20bt\">\n" +
    "                    <div class=\"col-md-1 nopad ico\">\n" +
    "                        <i aria-hidden=\"true\" class=\"fa fa-arrow-left offer-logo-40px mar10\" ng-click=\"vm.closeGetNoPopup()\">\n" +
    "                        </i>\n" +
    "                    </div>\n" +
    "\n" +
    "           \n" +
    "\n" +
    " <div class=\"col-md-3 nopad text-left\">\n" +
    "                        <h4 class=\"mar10\">\n" +
    "                            <b>\n" +
    "                                  {{item.attributes.name}}\n" +
    "                            </b>\n" +
    "                        </h4>\n" +
    "                        <div class=\"offer-location\">\n" +
    "                            <b>\n" +
    "                                At {{item.attributes.business_name}} -\n" +
    "                            </b>\n" +
    "                            <span>\n" +
    "                                {{item.attributes.place}}\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-8 text-right\">\n" +
    "                        <img class=\"offer-logo-set\" ng-src=\"    {{item.attributes.business_avatar_thumb}}\">\n" +
    "                        \n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    </hr>\n" +
    "                </div>\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group popupcenter \">\n" +
    "                        <form name=\"get_coupen\" ng-submit=\"vm.sentMobileNo(mobile)\" novalidate=\"\">\n" +
    "                            <div class=\"col-md-8 nopad\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your mobile No. to get Code\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" maxlength=\"10\" minlength=\"10\" name=\"mobile\" ng-model=\"mobile\" ng-pattern=\"/^[0-9]+$/\" placeholder=\"Mobile no\" required=\"\" type=\"number\">\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 10 digits required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.maxlength\" style=\"color: red\">\n" +
    "                                        Maximum 13 digits only allowed.\n" +
    "                                    </span>\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-4 nopad mar25x\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"get_coupen.$invalid\" type=\"submit\">\n" +
    "                                    SEND CODE!\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                        <div class=\"col-md-12 nopad mar40\">\n" +
    "                            <span class=\"offer-spini\">\n" +
    "                                <i aria-hidden=\"true\" class=\"fa fa-gift link-icon fagift\">\n" +
    "                                </i>\n" +
    "                                SPINI TREASURE\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row backcls mar-10px text-left dotted\">\n" +
    "                    <div class=\"col-md-12 nopad mar40\">\n" +
    "                        <p class=\"font15px popupfoot pad-bot \">\n" +
    "                            Psst...!\n" +
    "                            <br/>\n" +
    "                            Signup to become a Spini referral and earn Rs.200 with this offer!\n" +
    "                            <br/>\n" +
    "                            Sparsh earned Rs.2000 begin a Spini Referral!\n" +
    "                            <br/>\n" +
    "                        </p>\n" +
    "                        <p class=\"fbblue font15px popupfoot pad-bot\" ng-click=\"vm.openLoginPopup('referral','get-code-popup')\">\n" +
    "                            <i aria-hidden=\"true\" class=\"fa fa-facebook link-icon\">\n" +
    "                            </i>\n" +
    "                            SIGN UP WITH FACEBOOK\n" +
    "                            <br/>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "<!-- OFFERS POPUP 1st-->\n" +
    "<div class=\"overlay\" id=\"offer-popup\">\n" +
    "    <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeSlidepopup()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div style=\"height: 305px\">\n" +
    "            <div active=\"active\" interval=\"myInterval\" on-carousel-change=\"vm.onSlideChanged(nextSlide, direction)\"\n" +
    " no-wrap=\"noWrapSlides\" uib-carousel=\"\" >\n" +
    "                <div index=\"$index\" ng-repeat=\"item in vm.getItems() track by $index\"\n" +
    "\n" +
    "\n" +
    "\n" +
    "                 uib-slide=\"\">\n" +
    "                    <!-- <img ng-src=\"{{item.business_avatar}}\" style=\"margin:auto;\">{{item}} -->\n" +
    "                    <div class=\"row \" >\n" +
    "                        <div class=\"col-md-8 row col-md-offset-2 white pad10\">\n" +
    "                            <div class=\"col-md-5 nopad\">\n" +
    "                                <img \"=\"\" alt=\"...\" class=\"fixed-height\" ng-src=\"{{item.attributes.avatar}}\" style=\"width: 100% !important;\">\n" +
    "                      \n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-7 nopad\">\n" +
    "                                <div class=\"pad-top-none offer-details text-left\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <h3 class=\"tm\">\n" +
    "                                                {{item.attributes.name}}\n" +
    "                                            </h3>\n" +
    "                                            <div class=\"ts pad5 offer-location\">\n" +
    "                                                <b>\n" +
    "                                                    At {{item.attributes.business_name}} at\n" +
    "                                                </b>\n" +
    "                                                <span>\n" +
    "                                                    {{item.attributes.place}}\n" +
    "                                                </span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-4 text-right \">\n" +
    "                                            <img class=\"offer-logo-set\" ng-src=\"{{item.attributes.business_avatar_thumb}}\">\n" +
    "                                            \n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row space-div\">\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <button ng-click=\"vm.getcodepopup(item.id)\">\n" +
    "                                                GET CODE!\n" +
    "                                            </button>\n" +
    "\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <span class=\"offer-spini\" ng-show=\" {{item.attributes.treasure_value}}\">\n" +
    "                                                <i aria-hidden=\"true\" class=\"fa fa-gift link-icon fagift\">\n" +
    "                                                </i>\n" +
    "                                                Spini Treasure\n" +
    "                                               \n" +
    "                                                 ₹ {{item.attributes.treasure_value}}\n" +
    "                                               \n" +
    "                                            </span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-2 \">\n" +
    "                                      <!--       <span class=\"offer-count\">\n" +
    "                                                <i aria-hidden=\"true\" class=\"fa fa-star-o link-icon \">\n" +
    "                                                </i>\n" +
    "                                                54\n" +
    "                                            </span> -->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"min-height160px\">\n" +
    "                                        <div class=\"col-md-10 nopad\">\n" +
    "                                         \n" +
    "\n" +
    "\n" +
    "                                            <p class=\"read\" hm-read-more\n" +
    "        hm-text=\"{{ item.attributes.description | nl2br }}\" \n" +
    "        hm-limit=\"300\" \n" +
    "        hm-more-text=\"Read more\" \n" +
    "        hm-less-text=\"Read less\"\n" +
    "        hm-dots-class=\"dots\"\n" +
    "        hm-link-class=\"read-more\" >\n" +
    "\n" +
    "    </p>\n" +
    "\n" +
    "                              <!--             <p  read-more ng-bind-html=\"item.attributes.description | nl2br\">\n" +
    "                                           \n" +
    "                                        </p>  -->\n" +
    "                                    <!--  \n" +
    "                                        <p  read-more ng-bind-html=\"item.attributes.description | nl2br\">\n" +
    "                           {{item.attributes.description}}\n" +
    "                                        </p> -->\n" +
    "\n" +
    "\n" +
    "                                        <p class=\"offer-wrap-text space-div\">\n" +
    "                                            **OFFER VALID TILL {{item.attributes.end_date | date:'medium'}} only at {{item.attributes.business_name}} @ {{item.attributes.place}}\n" +
    "                                        </p>\n" +
    "\n" +
    "                                    </div>\n" +
    "\n" +
    "                                        <div class=\"col-md-2\">\n" +
    "                                            <div class=\"offer-share col-md-6\">\n" +
    "    <label>\n" +
    "        SHARE\n" +
    "    </label>\n" +
    "    <ul ng-show=\" {{item.attributes.treasure_value}}\">\n" +
    "        <li class=\"offer-share-max\">\n" +
    "            <a data-clipboard-text=\"{{vm.OfferLink(item.attributes.seo_url,item.attributes.tracking_code.general)}}\" ngclipboard=\"\" ngclipboard-success=\"vm.onCopySuccess(e);\">\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <li class=\"offer-share-fb\">\n" +
    "            <a ng-click=\"vm.SocialShareUpdate(item.attributes.seo_url,'facebook')\" socialshare=\"\" socialshare-provider=\"facebook\" socialshare-url=\"{{vm.OfferLink(item.attributes.seo_url,item.attributes.tracking_code.facebook)}}\">\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <li class=\"offer-share-twitter\">\n" +
    "            <a ng-click=\"vm.SocialShareUpdate(item.attributes.seo_url,'twitter')\" socialshare=\"\" socialshare-hashtags=\"{item.attributes.seo_keywords}}\" socialshare-provider=\"twitter\" socialshare-text=\"{{item.attributes.seo_description}} {{item.attributes.seo_keywords}}\" socialshare-url=\"{{vm.OfferLink(item.attributes.seo_url,item.attributes.tracking_code.general)}}\">\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <ul ng-click=\"vm.signupPOP('referral')\" ng-hide=\" {{item.attributes.treasure_value}}\">\n" +
    "        <li class=\"offer-share-max\">\n" +
    "            <a>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <li class=\"offer-share-fb\">\n" +
    "            <a>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <li class=\"offer-share-twitter\">\n" +
    "            <a>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "                                            \n" +
    "                                        </div>\n" +
    "\n" +
    "                                           \n" +
    "                                    </div>\n" +
    "                     \n" +
    "                                    <div class=\"offer-share col-md-6\">\n" +
    "                            <!--             <label class=\"right\">\n" +
    "                                            OFFERS END IN\n" +
    "                                        </label>\n" +
    "                                        <p class=\"right timers\">\n" +
    "\n" +
    "                                            <timer \n" +
    " end-time=\"vm.unixtime(item.attributes.end_date)\" max-time-unit=\"'day'\" interval=\"1000\"\n" +
    "\n" +
    "                                            >{{days}} days, {{hhours}}:{{mminutes}}:{{sseconds}}</timer>\n" +
    "\n" +
    "\n" +
    "                                         \n" +
    "                                        </p> -->\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        <!--     <span class=\"tes\">\n" +
    "                                <img class=\"roate-270\" src=\"/app/assets/images/icons8-Expand%20Arrow-64.png\">\n" +
    "                                \n" +
    "                            </span> -->\n" +
    "                            <!-- <span class=\"tes1\">\n" +
    "  <img class=\"roate-90\" src=\"/app/assets/images/icons8-Expand%20Arrow-64.png\">\n" +
    "</span> -->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- <div class=\"carousel-caption\">\n" +
    "          <h4>item {{item.id}}</h4>\n" +
    "          <p>{{item.text}}</p>\n" +
    "        </div> -->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end OFFERS POPUP -->\n" +
    "<style type=\"text/css\">\n" +
    "    .offer-carousel-r1{\n" +
    "    width: 4%;\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Get  Register for vendor-->\n" +
    "<div class=\"overlay\" id=\"vendor-popup\">\n" +
    "\n" +
    "    <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeVendorRegister()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "\n" +
    "\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row\" >\n" +
    "            <div class=\"col-md-8 row col-md-offset-2  pad-bot0 pad10 \">\n" +
    "\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group  \">\n" +
    "                        <form name=\"vendorReg\" ng-submit=\"vm.CreateVendor(mobile)\" novalidate=\"\">\n" +
    "\n" +
    "<div class=\"col-md-12 nopad\">\n" +
    "\n" +
    "    <h4 class=\"text-center\">Vendor Sign UP</h4>\n" +
    "\n" +
    "                                <div class=\"col-md-8 row col-md-offset-2  filedmat \">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your name\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\"  name=\"name\" ng-model=\"vm.Vendor.name\"  placeholder=\"Name\" required=\"\" type=\"tex\">\n" +
    "                                  \n" +
    "                                  <span ng-show=\"(vendorReg.name.$touched || submitted) && vendorReg.name.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your name !\n" +
    "                                     </span>\n" +
    "\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                            <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your mobile\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" maxlength=\"10\" minlength=\"10\" name=\"mobile\" ng-model=\"vm.Vendor.mobile\" ng-pattern=\"/^[0-9]+$/\" placeholder=\"Mobile no\" required=\"\" type=\"number\">\n" +
    "                                    <span ng-show=\"(vendorReg.mobile.$touched || submitted) && vendorReg.mobile.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 10 digits required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(vendorReg.mobile.$touched || submitted) && vendorReg.mobile.$error.maxlength\" style=\"color: red\">\n" +
    "                                        Maximum 10 digits only allowed.\n" +
    "                                    </span>\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                 <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your email\n" +
    "                                </label>\n" +
    "\n" +
    "\n" +
    "                                  \n" +
    "         \n" +
    "\n" +
    "\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\"  name=\"email\" ng-model=\"vm.Vendor.email\"  placeholder=\"Email\" required=\"\" type=\"email\">\n" +
    "\n" +
    "\n" +
    "                                     <span ng-show=\"(vendorReg.email.$touched || submitted) && vendorReg.email.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your email !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                             <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your password (Min 8 characters)\n" +
    "                                </label> \n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" min=\"8\"  max=\"8\" name=\"password\" ng-model=\"vm.Vendor.password\" \n" +
    "                                 placeholder=\"Password\" required=\"\" type=\"password\">\n" +
    "\n" +
    "\n" +
    "                                       <span ng-show=\"(vendorReg.password.$touched || submitted) && vendorReg.password.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 3 character  required.\n" +
    "                                    </span>\n" +
    "\n" +
    "\n" +
    "                                    <span ng-show=\"(vendorReg.password.$touched || submitted) && vendorReg.password.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your password !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "\n" +
    "\n" +
    "                               <div  ng-click=\"vm.VendorLoginPopup()\" class=\"mar20\">\n" +
    "\n" +
    "                                Already have an account? Log in\n" +
    "</div>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                            <div class=\"col-md-4 row col-md-offset-4 mar25x slven\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"vendorReg.$invalid\" type=\"submit\">\n" +
    "                                    Create Vendor Account\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                       \n" +
    "                        </form>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Vendor Login-->\n" +
    "<div class=\"overlay\" id=\"vendor-popup-login\">\n" +
    "\n" +
    "    <a class=\"closebtn\" href=\"javascript:void(0)\" ng-click=\"vm.closeVendorLoginPopup()\">\n" +
    "        ×\n" +
    "    </a>\n" +
    "\n" +
    "\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row\" >\n" +
    "            <div class=\"col-md-8 row col-md-offset-2  pad-bot0 pad10 \">\n" +
    "\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group  \">\n" +
    "                        <form name=\"VendorData\" ng-submit=\"vm.VendorLogin()\" novalidate=\"\">\n" +
    "\n" +
    "<div class=\"col-md-12 nopad\">\n" +
    "\n" +
    "    <h4 class=\"text-center\">Vendor Sign In</h4>\n" +
    "\n" +
    "         \n" +
    "                                 <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your email\n" +
    "                                </label>\n" +
    "\n" +
    "\n" +
    "                                  \n" +
    "         \n" +
    "\n" +
    "\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\"  name=\"email\" ng-model=\"vm.Vendor.email\"  placeholder=\"Email\" required=\"\" type=\"email\">\n" +
    "\n" +
    "\n" +
    "                                     <span ng-show=\"(VendorData.email.$touched || submitted) && VendorData.email.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your email !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                             <div class=\"col-md-8 row col-md-offset-2  filedmat\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your password (Min 8 characters)\n" +
    "                                </label> \n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" min=\"8\"  max=\"8\" name=\"password\" ng-model=\"vm.Vendor.password\" \n" +
    "                                 placeholder=\"Password\" required=\"\" type=\"password\">\n" +
    "\n" +
    "\n" +
    "                                       <span ng-show=\"(VendorData.password.$touched || submitted) && VendorData.password.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 3 character  required.\n" +
    "                                    </span>\n" +
    "\n" +
    "\n" +
    "                                    <span ng-show=\"(VendorData.password.$touched || submitted) && VendorData.password.$error.required\" style=\"color: red\">\n" +
    "\n" +
    "\n" +
    "                                    Please enter your password !\n" +
    "                                     </span>\n" +
    "                                  \n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "\n" +
    "                                </div>\n" +
    "\n" +
    "                            <div class=\"col-md-4 row col-md-offset-4 mar25x slven\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"VendorData.$invalid\" type=\"submit\">\n" +
    "                                   Login\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                        </form>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->"
  );


  $templateCache.put('app/modules/redeem_coupon/redeem_coupon.html',
    "<div class=\"container\" style=\"margin-top: 5px;\">\n" +
    "    <label>\n" +
    "        Buiness :\n" +
    "    </label>\n" +
    "    <select ng-model=\"vm.business_id\" ng-options=\"item.id as item.name for item in vm.vendor.businesses\" style=\"    min-width: 130px;\">\n" +
    "    </select>\n" +
    "</div>\n" +
    "<!-- container for coupon redeem console -->\n" +
    "<section class=\"coupon-redeem-entry\">\n" +
    "    <h3>\n" +
    "        Enter Offer Price & Coupon Code\n" +
    "    </h3>\n" +
    "    <input class=\"price-entry\" ng-model=\"vm.amount\" placeholder=\"Enter Price\" type=\"number\"/>\n" +
    "    <input class=\"coupon-entry\" min=\"1\" ng-disabled=\"vm.amount==null\" ng-model=\"vm.coupon_code\" placeholder=\"Enter Coupon Code\" type=\"text\"/>\n" +
    "    <button ng-click=\"vm.checkCode()\">\n" +
    "        SUBMIT\n" +
    "    </button>\n" +
    "    <div ng-show=\"vm.showInfo\">\n" +
    "        <h5>\n" +
    "            Offer Applied {{vm.showInfo.savings}} {{vm.showInfo.savings_type}}\n" +
    "        </h5>\n" +
    "        <h5>\n" +
    "            Price : Rs.{{vm.showInfo.price}}\n" +
    "        </h5>\n" +
    "        <h5>\n" +
    "            Offer Amount: Rs.{{vm.showInfo.offer_amount}}\n" +
    "        </h5>\n" +
    "        <h4>\n" +
    "            Amount to Pay: Rs.{{vm.showInfo.amount_to_pay}}\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <!--        <div class=\"pull-right\">\n" +
    "                <a>\n" +
    "                    FAQ\n" +
    "                </a>\n" +
    "                <a>\n" +
    "                    Troubleshoot\n" +
    "                </a>\n" +
    "            </div> -->\n" +
    "</section>\n" +
    "<!-- coupon table -->\n" +
    "\n" +
    "\n" +
    "<section ng-if=\"vm.History.length > 0\">\n" +
    "    <div class=\"container\">\n" +
    "        <table class=\"coupon-redeem-table col-md-12\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        OFFER ID\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        DATE\n" +
    "                    </td>\n" +
    "                    <!--     <td>TIME</td> -->\n" +
    "                    <td>\n" +
    "                        COUPON CODE\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        LOCATION\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        PRICE (INR)\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        PAID AMOUNT(INR)\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in vm.History\">\n" +
    "                    <td>\n" +
    "                        {{item.attributes.offer_id}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.created_at}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.coupon_code}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.place}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.price}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{item.attributes.amount_paid_by_buyer}}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<!-- Get  mobile no for vendor-->\n" +
    "<div class=\"overlay\" id=\"get-vendor-mobile-no-popup\">\n" +
    "    <div class=\"overlay-content\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-8 row col-md-offset-2 pad-bot0 pad10 \">\n" +
    "                <div class=\"row backcls mar-10px text-left\">\n" +
    "                    <div class=\"form-group popupcenter \">\n" +
    "                        <form name=\"get_coupen\" ng-submit=\"vm.UpdateMobile(mobile)\" novalidate=\"\">\n" +
    "                            <div class=\"col-md-8 nopad\">\n" +
    "                                <label for=\"usr\">\n" +
    "                                    Enter your mobile No. to get Code\n" +
    "                                </label>\n" +
    "                                <input class=\"form-control nbr min40\" id=\"usr\" maxlength=\"10\" minlength=\"10\" name=\"mobile\" ng-model=\"mobile\" ng-pattern=\"/^[0-9]+$/\" placeholder=\"Mobile no\" required=\"\" type=\"number\">\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.minlength\" style=\"color: red\">\n" +
    "                                        Minimum 10 digits required.\n" +
    "                                    </span>\n" +
    "                                    <span ng-show=\"(get_coupen.mobile.$touched || submitted) && get_coupen.mobile.$error.maxlength\" style=\"color: red\">\n" +
    "                                        Maximum 13 digits only allowed.\n" +
    "                                    </span>\n" +
    "                                </input>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-4 nopad mar25x\">\n" +
    "                                <button class=\"btn min40 width100 nbr\" ng-disabled=\"get_coupen.$invalid\" type=\"submit\">\n" +
    "                                    UPDATE MOBILE NO\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- end get code -->\n" +
    "<style type=\"text/css\">\n" +
    "    .search_n{\n" +
    "\n" +
    "    display: none;\n" +
    "  }\n" +
    "\n" +
    "footer p\n" +
    "{\n" +
    "\n" +
    "    background: #f7f7f7;\n" +
    "              margin-top: 200px;\n" +
    "    \n" +
    "    width: 100%;\n" +
    "}\n" +
    "\n" +
    ".main-header-partner {\n" +
    "    text-align: center;\n" +
    "    opacity: 0;\n" +
    "}\n" +
    "</style>"
  );


  $templateCache.put('app/modules/refferal_user/refferal.html',
    "<article>\n" +
    "  <div class=\"container\" style=\"padding: 15px;\">\n" +
    "    <div class=\"col-sm-2\" >\n" +
    "      <div class=\"row\" style=\"background-color: #fff;\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "          <div class=\"side_nav_refferal\" >\n" +
    "            <img  src=\"/app/assets/images/ProfileSection/Left-Nav/02Icn-ProfileDetails-Over@2x.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"200\" height=\"150\">\n" +
    "            <div class=\"col-sm-11\">\n" +
    "              <label class=\"text-center\" style=\"    margin-top: 20px;\">{{vm.user.name}} </label>\n" +
    "              <label class=\"text-muted\">{{vm.user.mobile}}</label>\n" +
    "              <!-- <label><i class=\" glyphicon glyphicon-map-marker\">Location</i></label> -->\n" +
    "            </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\" style=\"margin-top: 20px;\">\n" +
    "          <div class=\"col-sm-12\">\n" +
    "            <div class=\"sidebar-nav\">\n" +
    "              <div class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "                <div class=\"navbar-header\">\n" +
    "                  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".sidebar-navbar-collapse\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                  </button>\n" +
    "                  <span class=\"visible-xs navbar-brand\">Sidebar Menu</span>\n" +
    "                </div>\n" +
    "                <div class=\"navbar-collapse collapse sidebar-navbar-collapse\">\n" +
    "                  <ul class=\"nav navbar-nav\">\n" +
    "                    <li  style=\"font-size: 18px;\">\n" +
    "                      <a class=\"text-center\" href=\"#\">\n" +
    "                        <i class=\"glyphicon glyphicon-stats pull-left\" aria-hidden=\"true\"></i>\n" +
    "                        <span>Dashboard</span>\n" +
    "                      </a>\n" +
    "                    </li>\n" +
    "                    <li style=\"font-size: 18px;\">\n" +
    "                      <a href=\"\" class=\"text-center\">\n" +
    "                        <i class=\"glyphicon glyphicon-user pull-left\"></i>\n" +
    "                         Profile\n" +
    "                       </a>\n" +
    "                     </li>\n" +
    "                    <li style=\"font-size: 18px;\">\n" +
    "                      <a href=\"\" class=\"text-center\">\n" +
    "                        <i class=\"glyphicon glyphicon-tag pull-left\"></i>\n" +
    "                      Saved Offer\n" +
    "                      </a>\n" +
    "                    </li>\n" +
    "                    <li style=\"font-size: 18px;\">\n" +
    "                      <a href=\"\" class=\"text-center\">\n" +
    "                        <i class=\"glyphicon glyphicon-usd pull-left\"></i>\n" +
    "                        Wallet\n" +
    "                      </a>\n" +
    "                  </li>\n" +
    "                  </ul>\n" +
    "                </div><!--/.nav-collapse -->\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-10\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "          <img src=\"/app/assets/images/03Banner/01Banner - 1166w - complete.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"100%\" height=\"236\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row content-refferal\" >\n" +
    "        <div class=\"col-sm-3\" style=\"border-right: 1px dashed #dcdcdc;\">\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <!-- <img src=\"/app/assets/images/ProfileSection/Icn-WalletMoney@2x.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" style=\"background-color: #f7f7f7;\"> -->\n" +
    "            <i class=\"fa fa-money\" aria-hidden=\"true\" style=\"font-size: 80px;\"></i>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\">\n" +
    "            <label class=\"text-muted\">Wallet Money</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n" +
    "            <label>{{vm.user.wallet_money}}</label>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "\n" +
    "            <button class=\"btn btn-default field-tip\" style=\"border: 1px solid #bfe7fe;color:#bfe7fe\" ng-disabled=\"true\">\n" +
    " <span class=\"tip-content\">Earn minimum Rs.500/- to make a transfer</span>\n" +
    "            Transfer to paytm wallet</button>\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3\" style=\"border-right: 1px dashed #dcdcdc;\">\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <!-- <img src=\"/app/assets/images/ProfileSection/Icn-ApproveMoney.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" style=\"height: 80px;    background-color: #f7f7f7;\"> -->\n" +
    "            <i class=\"fa fa-gift\" aria-hidden=\"true\" style=\"font-size: 80px;\"></i>\n" +
    "          </div>\n" +
    "        \n" +
    "\n" +
    "          <div class=\"col-sm-12 text-center\">\n" +
    "            <label class=\"text-muted\">Treasure Value</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n" +
    "            <label>{{vm.user.treasure_value}}</label>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "     <!--      <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "            <button class=\"btn btn-default\" style=\"border: 1px solid #fce7b7; color:#fce7b7; \" ng-click=\"vm.required()\">Required approval status</button>\n" +
    "          </div> -->\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3\">\n" +
    "    <!--       <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <img src=\"/app/assets/images/ProfileSection/Icn-OffersShared@2x.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" style=\"background-color: #f7f7f7;\">\n" +
    "            <i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\" style=\"font-size: 80px;\"></i>\n" +
    "          </div> -->\n" +
    "    <!--       <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <label class=\"text-muted\">No of Code Generated</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <label>{{vm.user.coupons_generated.self}}</label>\n" +
    "          </div> -->\n" +
    "\n" +
    "\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"    padding-top: 30%;border-right: 1px dashed #dcdcdc;\">\n" +
    "            <label class=\"text-muted\"> No of Code Generated</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <label>{{vm.user.total_coupon_generated}}</label>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "               <div class=\"col-sm-12 text-center\" style=\"    padding-top: 30%;border-right: 1px dashed #dcdcdc;\">\n" +
    "            <label class=\"text-muted\"> No of Code Redeemed</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <label>{{vm.user.total_offers_redeemed}}</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "            <!-- <button class=\"btn btn-default\"  style=\"border: 1px solid #b6f3d1; color:#b6f3d1;\">Get more offers</button> -->\n" +
    "          </div>\n" +
    "        </div>\n" +
    "         <div class=\"col-sm-3\"  style=\" border-right: 1px dashed #dcdcdc;\">\n" +
    "       <!--    <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <img src=\"/app/assets/images/ProfileSection/Icn-OffersShared@2x.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" style=\"background-color: #f7f7f7;\">\n" +
    "            <i class=\"fa fa-handshake-o\" aria-hidden=\"true\" style=\" font-size: 80px;\"></i>\n" +
    "          </div> -->\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding-top: 35px;\">\n" +
    "            <label class=\"text-muted\">Share Count</label>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 16px;\" ng-repeat=\"item in vm.user.social_sharing \">\n" +
    "            <label class=\"text-capitalize\" style=\"    margin-top: 30px;\">{{item.social_media}} : {{item.total_shares}}</label>\n" +
    "     \n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "            <!-- <button class=\"btn btn-default\"  style=\"border: 1px solid #b6f3d1; color:#b6f3d1;\">Get more offers</button> -->\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</article>\n" +
    "\n" +
    "\n" +
    "<style type=\"text/css\">\n" +
    "  .side_nav_refferal{\n" +
    "     /*border: 1px solid black;*/\n" +
    "    height: 225px;\n" +
    "  }\n" +
    "  .list-group-item {\n" +
    "    position: relative;\n" +
    "    display: block;\n" +
    "    padding: 10px 15px 20px;\n" +
    "    margin-bottom: -1px;\n" +
    "   background-color: #f7f7f7;\n" +
    "    border: 1px solid #f7f7f7;\n" +
    "}\n" +
    "\n" +
    "/* make sidebar nav vertical */\n" +
    "@media (min-width: 768px) {\n" +
    "  .sidebar-nav .navbar .navbar-collapse {\n" +
    "    padding: 0;\n" +
    "    max-height: none;\n" +
    "  }\n" +
    "  .sidebar-nav .navbar ul {\n" +
    "    float: none;\n" +
    "    display: block;\n" +
    "  }\n" +
    "  .sidebar-nav .navbar li {\n" +
    "    float: none;\n" +
    "    display: block;\n" +
    "  }\n" +
    "  .sidebar-nav .navbar li a {\n" +
    "    padding-top: 12px;\n" +
    "    padding-bottom: 12px;\n" +
    "  }\n" +
    "}\n" +
    ".navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus , .navbar-default .navbar-nav > .active > a {\n" +
    "    color: red;\n" +
    "    background-color: transparent;\n" +
    "}\n" +
    ".navbar-default {\n" +
    "    background-color: #f8f8f8;\n" +
    "    border-color: #f8f8f8;\n" +
    "}\n" +
    "\n" +
    ".content-refferal{\n" +
    "      border: 1px solid #dcdcdc;\n" +
    "    margin: 2px;\n" +
    "    background-color: #fff;\n" +
    "}\n" +
    "</style>\n" +
    "\n"
  );


  $templateCache.put('app/modules/signup/signup.html',
    "<div class=\"container\">\n" +
    "	<div class=\"col-md-4 col-md-offset-4\">\n" +
    "		<div class=\"well login-container\">\n" +
    "			<h3 class=\"text-center\">SIGN UP</h3>\n" +
    "			<input type=\"email\" placeholder=\"Enter your email\">\n" +
    "			<input type=\"password\" placeholder=\"Enter your password\">\n" +
    "			<input type=\"number\" placeholder=\"Enter your number\">\n" +
    "			<button>SIGN UP</button>\n" +
    "			<div class=\"text-center\">(or)</div>\n" +
    "			<button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-facebook\" aria-hidden=\"true\" style=\"color:#4267b2;\"></i>  Facebook</button>\n" +
    "			<button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-google\" aria-hidden=\"true\" style=\"color: #f55344;\"></i>Google</button>\n" +
    "			<a ui-sref=\"loginAuth\" style=\"display: block; text-align: center; margin-top: 10px;\">Already have login click here</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "	.login-container{\n" +
    "		background: #fff;\n" +
    "		margin: 50% 0;\n" +
    "}\n" +
    "	.login-container input, .login-container button{\n" +
    "		width: 100%;\n" +
    "		display: block;\n" +
    "		margin: 10px 0;\n" +
    "	}\n" +
    "\n" +
    "</style>"
  );

}]);
