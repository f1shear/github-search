(function() {

    'use strict';

    angular.module('GitApp')
        .controller('CategoryPageController',
            function($scope, $rootScope, $routeParams, $timeout, $cookies, facebookAuth, $location, $interval) {        	

            $scope.categoryID = $routeParams['categoryID'];


               

            });

})();