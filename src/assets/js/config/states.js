angular.module('reddit-gallery')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('base', {
		url: '/',
		views: {
			content: {
				templateUrl: '/assets/html/base.html',
				controller: function($scope) { console.log('init'); }
			}
		}
	})
	.state('subreddit', {
		url: '/r/:subreddit',
		views: {
			content: {
				templateUrl: '/assets/html/subreddit.html',
				controller: 'subredditController'
			}
		}
	})
	.state('oauth', {
		url: '/oauth',
		views: {
			content: {
				templateUrl: '/assets/html/oauth.html',
				controller: 'oauthController'
			}
		}
	});

}])