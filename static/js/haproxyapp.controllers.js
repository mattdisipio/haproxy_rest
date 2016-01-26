(function(){
	'use strict';

	function mainController($scope, haproxyAppDataService){
		var _this = this;
		_this.scope = $scope;
		console.log('in controller')

		$scope.message = 'hello'

		haproxyAppDataService.getstats().then(function(response){
			_this.scope.stuff = response.data
		})

		console.log($scope)

	}

	function infoController($scope, haproxyAppDataService){
		var _this = this;
		_this.scope = $scope;
		 

		 haproxyAppDataService.getinfo().then(function(response){
		 	_this.scope.data = response.data;
		 })

        

        console.log('getting stats')
	}

	function aboutController($scope, haproxyAppDataService){
		console.log('nada')
	}

	function frontendController($scope, haproxyAppDataService){
		var _this = this;
		_this.scope = $scope;

		haproxyAppDataService.getfrontend().then(function(response){
			_this.scope.data = response.data;
		})
	}

	angular.module('haproxyapp.controllers', ['haproxyapp.services'])
	.controller('mainController', ['$scope', 'haproxyAppDataService',  mainController])
	.controller('frontendController', ['$scope', 'haproxyAppDataService', frontendController])
	.controller('infoController', ['$scope', 'haproxyAppDataService', infoController])
	.controller('aboutController', ['$scope', 'haproxyAppDataService', aboutController]);
})();