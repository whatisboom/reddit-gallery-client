angular.module('reddit-gallery')
.factory('cacheFactory', ['$cacheFactory', function($cacheFactory) {
	return $cacheFactory('localCache');
}]);