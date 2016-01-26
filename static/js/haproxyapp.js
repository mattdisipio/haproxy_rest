(function(){
	'use strict';

	angular.module('haproxyapp', ['haproxyapp.controllers', 'haproxyapp.services', 'ngRoute'])	
	//account for jinja interpolator
	.config(['$routeProvider', '$interpolateProvider', '$locationProvider', configOverride]);

	function configOverride($routeProvider, $interpolateProvider, $locationProvider) {
	  	$interpolateProvider.startSymbol('{[');
	  	$interpolateProvider.endSymbol(']}');

	  	$routeProvider
		.when('/', {
			templateUrl: '../static/partials/getstats.html',
			controller: 'mainController'
		}).when('/info', {
			templateUrl: '../static/partials/info.html',
			controller: 'infoController'
		}).when('/about', {
			templateUrl: '../static/partials/about.html',
			controller: 'aboutController'
		}).when('/frontend', {
			templateUrl: '../static/partials/frontend.html',
			controller: 'frontendController'
		})

		.otherwise({
        templateUrl: 'templates/getstats.html'
      });
		
		
	};

	
})();