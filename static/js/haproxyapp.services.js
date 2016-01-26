(function(){

	function haproxyAppDataService($http){
		return{
			getstats : function(){
				return $http.get('/haproxy/api/v1.0/stats');
			},
			getinfo : function(){
				return $http.get('/haproxy/api/v1.0/info')
			},
			getfrontend : function(){
				return $http.get('/haproxy/api/v1.0/frontend')
			}
		}
	}

	angular.module('haproxyapp.services', [])
	.service('haproxyAppDataService', ['$http', haproxyAppDataService])
})();