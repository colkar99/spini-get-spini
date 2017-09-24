angular.module('angular-app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
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
    "          <img src=\"/app/assets/images/03Banner/01Banner - 1166w - complete.png\" alt=\"Los Angeles\" style=\"width:100%;\">\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"item\">\n" +
    "          <img src=\"/app/assets/images/03Banner/01Banner - 1166w - complete.png\" alt=\"Chicago\" style=\"width:100%;\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"item\">\n" +
    "          <img src=\"/app/assets/images/03Banner/01Banner - 1166w - complete.png\" alt=\"New York\" style=\"width:100%;\">\n" +
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
    "<div id=\"login-popup\" class=\"overlay\">\n" +
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
    "<div class=\"text-center temp\">\n" +
    "   <button class=\"btn btn-block fbbutton \" ng-click=\"vm.authenticate('facebook')\">\n" +
    "    <span class=\"fa fa-facebook left falign\"></span> Sign in with Facebook\n" +
    "  </button>\n" +
    "\n" +
    "     <button g-login class=\"btn btn-block gbutton\" ng-click=\"vm.authenticate('google')\">\n" +
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
    "\n" +
    "<script>\n" +
    "\n" +
    "</script>\n" +
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
    "<header>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row main-header\">\n" +
    "      <div class=\"col-md-2 main-header-logo\">\n" +
    "        <a href=\"#\">\n" +
    "          <img src=\"/app/assets/images/header/Logo@2x.png\" alt=\"spini-logo\">\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6 main-header-search\">\n" +
    "        <input type=\"text\" placeholder=\"Search Offers\">\n" +
    "        <button></button>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2 main-header-partner\">\n" +
    "        <button>Become our partner</button>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2 main-header-signin\" ng-controller=\"HomeCtrl as vm\">\n" +
    "        <a href=\"#\" ng-click=\"vm.open = true\">Sign In <img src=\"/app/assets/images/header/UserIcon@2x.png\"></a>\n" +
    "        <div class=\"manage-account\" ng-show=\"vm.open\">\n" +
    "          <i class=\"glyphicon glyphicon-remove-circle\" ng-click=\"vm.open = false\"></i>\n" +
    "          <b>Your Account</b>\n" +
    "          <p>Access account and manage offers</p>\n" +
    "          <button ng-click=\"vm.getofferspopup(); vm.open = false\">SIGN UP</button>\n" +
    "          <button ng-click=\"vm.getofferspopup(); vm.open = false\">LOGIN</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <hr>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <nav class=\"main-header-navigation\">\n" +
    "          <ul>\n" +
    "            <li class=\"main-nav-food\"><a href=\"#\">Food</a></li>\n" +
    "            <li class=\"main-nav-education\"><a href=\"#\">Education</a></li>\n" +
    "            <li class=\"main-nav-beauty\"><a href=\"#\">Beauty</a></li>\n" +
    "            <li class=\"main-nav-travel\"><a href=\"#\">Travel</a></li>\n" +
    "            <li class=\"main-nav-personal_needs\"><a href=\"#\">Personal needs</a></li>\n" +
    "            <li class=\"main-nav-gadgets\"><a href=\"#\">Gadgets</a></li>\n" +
    "            <li class=\"main-nav-clothing\"><a href=\"#\">Clothing</a></li>\n" +
    "          </ul>\n" +
    "        </nav>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2 main-header-location\">\n" +
    "        <i class=\"glyphicon glyphicon-map-marker\"></i>\n" +
    "        <div class=\"dropdown\">\n" +
    "          <span class=\"dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Chennai\n" +
    "          </span><span class=\"caret\"></span>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Chennai</a></li>\n" +
    "            <li><a href=\"#\">Madurai</a></li>\n" +
    "            <li><a href=\"#\">Pondy</a></li>\n" +
    "            <li><a href=\"#\">kanchepuram</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
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
    "    left: -15px;\n" +
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
    "  }\n" +
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


  $templateCache.put('app/modules/redeem_coupon/redeem_coupon.html',
    "\n" +
    "<!-- header for coupon redeem console section -->\n" +
    "<header>\n" +
    "  <div class=\"container coupon-redeem-header\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6 col-sm-6 col-xs-6\">\n" +
    "        <div class=\"coupon-redeem-header-logo\">\n" +
    "          <a href=\"#\">\n" +
    "            <img src=\"app/assets/images/header/logo.png\" alt=\"spini-logo\">\n" +
    "          </a>\n" +
    "          <span>Coupon Redeem Console</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6 col-sm-6 col-xs-6\">\n" +
    "        <a href=\"#\" class=\"coupon-redeem-header-login-info\">\n" +
    "          <div>\n" +
    "            <b>Sathish Kumar</b>\n" +
    "            <label>Billing Team</label>\n" +
    "          </div>\n" +
    "          <img src=\"app/assets/images/header/UserIcon@2x.png\">\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <hr class=\"coupon-redeem-header-border\">\n" +
    "</header>\n" +
    "<!-- container for coupon redeem console -->\n" +
    "<section class=\"coupon-redeem-entry\">\n" +
    "  <h3>Enter Offer Price & Coupon Code</h3>\n" +
    "  <input type=\"number\" placeholder=\"Enter Price\" class=\"price-entry\">\n" +
    "  <input type=\"text\" placeholder=\"Enter Coupon Code\" class=\"coupon-entry\">\n" +
    "  <button>SUBMIT</button>\n" +
    "  <div class=\"pull-right\">\n" +
    "    <a href=\"#\">FAQ </a>\n" +
    "    <a href=\"#\">Troubleshoot</a>\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "<!-- coupon table -->\n" +
    "<section>\n" +
    "  <div class=\"container\">\n" +
    "    <table class=\"coupon-redeem-table col-md-12\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <td>OFFER ID</td>\n" +
    "          <td>DATE</td>\n" +
    "          <td>TIME</td>\n" +
    "          <td>COUPON CODE</td>\n" +
    "          <td>LOCATION</td>\n" +
    "          <td>PRICE (INR)</td>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>ABX123</td>\n" +
    "          <td>14-11-2017</td>\n" +
    "          <td>12.15.32</td>\n" +
    "          <td>893212</td>\n" +
    "          <td>T.NAGAR</td>\n" +
    "          <td>1,000</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>ABX123</td>\n" +
    "          <td>14-11-2017</td>\n" +
    "          <td>12.15.32</td>\n" +
    "          <td>893212</td>\n" +
    "          <td>T.NAGAR</td>\n" +
    "          <td>1,000</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>ABX123</td>\n" +
    "          <td>14-11-2017</td>\n" +
    "          <td>12.15.32</td>\n" +
    "          <td>893212</td>\n" +
    "          <td>T.NAGAR</td>\n" +
    "          <td>1,000</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "</div>\n" +
    "</section>\n" +
    "\n"
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
    "              <label> Name:</label>\n" +
    "              <label class=\"text-muted\">9876543210</label>\n" +
    "              <label><i class=\" glyphicon glyphicon-map-marker\">Location</i></label>\n" +
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
    "                        <i class=\"glyphicon glyphicon-stats pull-left\" aria-hidden=\"true\"></i> \n" +
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
    "        <div class=\"col-sm-4\" style=\"border-right: 1px dashed #dcdcdc;\">\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <img src=\"/app/assets/images/ProfileSection/Icn-WalletMoney@2x.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" style=\"background-color: #f7f7f7;\">\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\">\n" +
    "            <label class=\"text-muted\">Wallet Money</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n" +
    "            <label>1000</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "            <button class=\"btn btn-default\" style=\"border: 1px solid #bfe7fe;color:#bfe7fe\">Transfer to paytm wallet</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\" style=\"border-right: 1px dashed #dcdcdc;\">\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <img src=\"/app/assets/images/ProfileSection/Icn-ApproveMoney.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" style=\"height: 80px;    background-color: #f7f7f7;\">\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\">\n" +
    "            <label class=\"text-muted\">Money to be approved</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n" +
    "            <label>1000</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "            <button class=\"btn btn-default\" style=\"border: 1px solid #fce7b7; color:#fce7b7; \">Required approval status</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 35px;\">\n" +
    "            <img src=\"/app/assets/images/ProfileSection/Icn-OffersShared@2x.png\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" style=\"background-color: #f7f7f7;\">\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\">\n" +
    "            <label class=\"text-muted\">Shared offer</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"font-size: 28px;\">\n" +
    "            <label>1000</label>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-12 text-center\" style=\"padding: 20px;\">\n" +
    "            <button class=\"btn btn-default\"  style=\"border: 1px solid #b6f3d1; color:#b6f3d1;\">Get more offers</button>\n" +
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
    "/* make sidebar nav vertical */ \n" +
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
    "</style>"
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
