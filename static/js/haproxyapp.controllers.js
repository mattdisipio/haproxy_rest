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

	angular.module('haproxyapp.controllers', ['haproxyapp.services'])
	.controller('mainController', ['$scope', 'haproxyAppDataService',  mainController]);
})();