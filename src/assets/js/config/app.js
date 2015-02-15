angular.module('reddit-gallery')
.config(['$httpProvider', '$locationProvider', function( $httpProvider, $locationProvider ) {
    
    if ( history.pushState ) {
        $locationProvider.html5Mode( true );
    }

    $httpProvider.defaults.headers.common[ 'Content-Type' ] = 'application/json';

}])
.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$state = $state;
}]);