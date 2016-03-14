(function(){

	'use strict';

	var module = angular.module('simpleNotify', ['ngDialog']);

	module.service('simpleNotify',
		['$http', '$q', '$cookies', 'ngDialog',
		function($http, $q, $cookies, ngDialog){
			/* Requires Materialize */



			this.showErrors = function(data){

				/* Show Dialog */
				ngDialog.open({
					template:'./static/apps/common/partials/modals/show_errors.html',
					className:'ngdialog-theme-default medium-modal',
					cache: false,
					controller: ['$scope', function($scope){
						$scope.errors = data.errors;
						$scope.form_errors = data.form_errors;
					}]
				});
			}


		}]);
})();