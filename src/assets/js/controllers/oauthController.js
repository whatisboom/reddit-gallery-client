angular.module('reddit-gallery')
.controller('oauthController', ['$scope', '$stateParams', '$window', 'apiFactory', function($scope, $stateParams, $window, apiFactory) {
	console.log($stateParams);
	if (!$stateParams.code) {

		//get code
		apiFactory.oauth.read(function success(response) {
			$window.open(response.url);
		}, function error(response) {
			console.log('response', response);
		});
	}
	else {
		//have code send to server
	}
}]);