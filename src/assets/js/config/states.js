angular.module('reddit-gallery')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('base', {
		url: '/',
		templateUrl: '/assets/html/base.html',
		controller: function($scope) { console.log('init'); }
	})
	.state('subreddit', {
		url: '/r/:subreddit',
		templateUrl: '/assets/html/subreddit.html',
		controller: function($scope) { console.log('subreddit controller'); }
	});

}])