(function() {
    'use strict';

    angular.module('GitApp', [
        'ngRoute',
        'ngCookies',
        'appComponents',
        'ngDialog',
        'ngSanitize'
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



    angular.module('GitApp').run(function($rootScope, $window, awsRegion, facebookAppID) {

        $window.fbAsyncInit = function() {
            FB.init({
                appId: facebookAppID,
                xfbml: true,
                version: 'v2.5'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));




    });


})();