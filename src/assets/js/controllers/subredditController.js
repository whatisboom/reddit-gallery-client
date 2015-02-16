angular.module('reddit-gallery')
.controller('subredditController', ['$scope', '$stateParams', 'apiFactory', function($scope, $stateParams, apiFactory) {

    apiFactory.posts.read({ subreddit: $stateParams.subreddit }, function success(response) {
        var imagePattern = /\.[a-z]{1,3}$/i;
        $scope.posts = _.filter(response.children, function(post) {
            return imagePattern.test(post.data.url);
        });
    }, function error(response) {
        console.log(response);
    });

}]);