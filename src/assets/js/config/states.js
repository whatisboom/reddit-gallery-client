angular.module('reddit-gallery')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('base', {
		url: '/',
		views: {
			nav: {
				templateUrl: '/assets/html/nav.html',
				controller: function($scope) {  }
			},
			content: {
				templateUrl: '/assets/html/base.html',
				controller: function($scope) { console.log('init'); }
			}
		}
	})
	.state('subreddit', {
		url: '/r/:subreddit',
		views: {
			nav: {
				templateUrl: '/assets/html/nav.html',
				controller: function($scope) {  }
			},
			content: {
				templateUrl: '/assets/html/subreddit.html',
				controller: 'subredditController'
			}
		}
	})
	.state('oauth', {
		url: '/oauth?:code&:state',
		views: {
			nav: {
				templateUrl: '/assets/html/nav.html',
				controller: function($scope) { console.log('nav'); }
			},
			content: {
				templateUrl: '/assets/html/oauth.html',
				controller: 'oauthController'
			}
		}
	});

}])