(function() {

    'use strict';

    angular.module('appComponents', []);


    angular.module('appComponents').directive('appNav', ['$parse', '$location',
        function($parse, $location) {

            function Controller($scope, $element, $attrs) {
                $scope.path = $location.path();
                $scope.isActive = function(route) {
                    if (route == '/') {
                        if ($scope.path == '/') {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if ($scope.path.indexOf(route) > -1) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }

            var component = {};
            component.templateUrl = './static/apps/git_app/partials/components/app_nav.html';
            component.controller = Controller;
            return component;
        }
    ]);
})();