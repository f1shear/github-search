(function() {

    'use strict';

    angular.module('GitApp').service('appService',
        function($q, $cookies, $http) {



            this.fetchCategoryRepos = function(params) {

            	var search_url = 'https://porekk4a7a.execute-api.us-west-2.amazonaws.com/prod/git-search';
            	var query = $.param(params);

            	var query_url = search_url + '?' + query;

                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: query_url
                }).then(function successCallback(response) {
                    deferred.resolve(response);
                }, function errorCallback(response) {
                    deferred.reject(response);
                });

                return deferred.promise;


            }



        });

})();