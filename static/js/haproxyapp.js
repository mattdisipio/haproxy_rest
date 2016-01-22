(function(){
	'use strict';

	angular.module('haproxyapp', ['haproxyapp.controllers', 'haproxyapp.services'])	
	//account for jinja interpolator
	.config(['$interpolateProvider', function($interpolateProvider) {
	  	$interpolateProvider.startSymbol('{[');
	  	$interpolateProvider.endSymbol(']}');
	}]);
})();