angular.module('reddit-gallery')
.controller('oauthController', ['$scope', '$state', '$stateParams', '$window', 'apiFactory', 'cacheFactory', function($scope, $state, $stateParams, $window, apiFactory, cacheFactory) {

    if (!$stateParams.code) {

        //get code
        apiFactory.oauth.read(function success(response) {
            $window.location = response.url;
        }, function error(response) {
            console.log('response', response);
        });

    }
    else {
        apiFactory.oauth.create({code: $stateParams.code}, function success(response) {

            cacheFactory.put('user', response.user);
            cacheFactory.put('auth', response.auth);

            $state.go('base');

        }, function error(response) {

            console.log(response);

        })
    }
}]);