(function() {

    'use strict';

    angular.module('GitApp')
        .controller('HomeController',
            function($scope, $rootScope, $routeParams, $timeout, $cookies, facebookAuth, $location, $interval) {        	

            
                $scope.categories = [
                    {
                        'id':'html',
                        'label':'HTML',
                    },
                    {
                        'id':'css',
                        'label':'CSS',
                    },
                    {
                        'id':'javascript',
                        'label':'Javascript',
                    },
                    {
                        'id':'php',
                        'label':'PHP',
                    },
                    {
                        'id':'c',
                        'label':'C Language',
                    },
                    {
                        'id':'python',
                        'label':'Python',
                    },
                    {
                        'id':'ruby',
                        'label':'Ruby',
                    },
                    {
                        'id':'scala',
                        'label':'Scala',
                    },
                    {
                        'id':'java',
                        'label':'Java',
                    },
                    {
                        'id':'haskell',
                        'label':'Haskell',
                    },

                    {
                        'id':'cpp',
                        'label':'C++',
                    },

                    {
                        'id':'clojure',
                        'label':'Clojure',
                    },


                ]

                $scope.navigateToCategory = function(category){
                    console.log(category);
                    var category_page = '/category/'+category.id;
                    $location.path(category_page);
                }


               

            });

})();