angular.module('reddit-gallery')
.factory('apiFactory', ['$resource', function($resource) {

	var crudMethods = {
		create: { method: 'POST', isArray: false },
		read: { method: 'GET', isArray: false },
		update: { method: 'PUT', isArray: false },
		delete: { method: 'DELETE', isArray: false }
	};

	return {
		oauth: $resource('//localhost:8080/oauth', {}, crudMethods)
	};

}])