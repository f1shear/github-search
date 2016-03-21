(function() {
    'use strict';

    angular.module('GitApp', [
        'ngRoute',
        'ngCookies',
        'appComponents',
        'ngDialog',
        'ngSanitize',
        'infinite-scroll'
    ]);


    function AppConfig($routeProvider) {

        $routeProvider
            .when('/', {

                templateUrl: './static/apps/git_app/partials/home.html',
                controller: 'HomeController'
            })
            .when('/category/:categoryID', {

                templateUrl: './static/apps/git_app/partials/category.html',
                controller: 'CategoryPageController'
            })
            .otherwise({
                redirectTo: '/'
            })

    }

    angular.module('GitApp').config(['$routeProvider', AppConfig]);





})();