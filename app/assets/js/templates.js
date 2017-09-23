angular.module('angular-app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
    "<div class=\"container\">\n" +
    "	<br>\n" +
    "	<div class=\"well text-center\">\n" +
    "		<h1>{{ vm.title }}</h1>\n" +
    "		<h3>{{ vm.version }}</h3>\n" +
    "		<p>This is a template for a simple home screen website. Use it as a starting point to create something more unique.</p>\n" +
    "		<code>app/modules/home/home.html</code>\n" +
    "		<hr>\n" +
    "    <h1>Features</h1>\n" +
    "		<ul class=\"list-group\">\n" +
    "			<li class=\"list-group-item\" ng-repeat=\"item in vm.listFeatures\">{{item.feature}}</li>\n" +
    "		</ul>\n" +
    "		<p><a href=\"http://www.github.com/newaeonweb/generator-angm\" class=\"btn btn-primary\" role=\"button\">Learn more »</a></p>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar-tpl.html',
    "<nav class=\"navbar navbar-inverse\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "			</button>\n" +
    "			<a class=\"navbar-brand\" href=\"/#!/\">{{ brand }}</a>\n" +
    "		</div>\n" +
    "		<div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "			<ul class=\"nav navbar-nav\">\n" +
    "				<li ng-repeat=\"item in menus\" ng-class=\"{active:isActive('#/' + item.link)}\">\n" +
    "					<a ui-sref=\"{{ item.link }}\">{{ item.name }}</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div><!--/.nav-collapse -->\n" +
    "	</div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<div ng-controller=\"NavBarCtrl as vm\">\n" +
    "    <nav-bar menus=\"vm.menu\" brand=\"vm.title\"></nav-bar>\n" +
    "</div>\n"
  );

}]);
