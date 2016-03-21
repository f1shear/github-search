(function() {

    'use strict';

    angular.module('GitApp')
        .controller('CategoryPageController',
            function($scope, $rootScope, $routeParams, $timeout, $cookies, $location, $interval, appService) {

                $scope.categoryID = $routeParams['categoryID'];

                $scope.repos_count = 0 ;

                $scope.busy = true;

                $scope.repos = [];

                $scope.loadPage = function(page) {

                    var params = {
                        'q': $scope.categoryID,
                        'page': page,
                        'per_page': 20,
                        'sort': 'forks'
                    }

                    $scope.busy = true;

                    appService.fetchCategoryRepos(params).then(function(response) {
                        console.log(response);
                        var repos = response.data.items;

                        angular.forEach(repos, function(repo, value){
                        	$scope.repos.push(repo);
                        });

                        $scope.repos_count = response.data.total_count;

                        $timeout(function(){
                        	$scope.busy = false;
                        },500);

                    });



                }

                $scope.current_page = 1;
                $scope.loadPage($scope.current_page);

                $scope.loadOnScroll = function(){
                	if($scope.busy==true){
                		return false;
                	}
                	$scope.current_page += 1;
                	$scope.loadPage($scope.current_page);
                }

            });

})();