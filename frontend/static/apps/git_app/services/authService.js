(function() {

    'use strict';

    angular.module('GitApp').service('authService',
        function($q, $cookies) {


            this.login = function(scope) {

                var defer = $q.defer();
                var scope_string = scope.join(',');

                FB.login(function(response) {
                    defer.resolve(response);
                }, {
                    scope: scope_string,
                    return_scopes: true
                });

                return defer.promise;
            };

            this.getStatus = function() {

                var defer = $q.defer();
                FB.getLoginStatus(function(response) {
                    defer.resolve(response);

                });

                return defer.promise;
            }

            this.logout = function(){
            	var defer = $q.defer();
            	FB.logout(function(response) {
				  // user is now logged out
				  defer.resolve(response);
				});
				return defer.promise;
            }





        });

})();