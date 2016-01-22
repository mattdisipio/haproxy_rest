(function(){

	function haproxyAppDataService($http){
		return{
			getstats : function(){
				return $http.get('/haproxy/api/v1.0/stats');
			}
		}
	}

	angular.module('haproxyapp.services', [])
	.service('haproxyAppDataService', ['$http', haproxyAppDataService])
})();