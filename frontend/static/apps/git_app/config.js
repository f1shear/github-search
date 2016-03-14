(function(){
	'use strict';


	 /* Settings */
    angular.module('GitApp').constant(
        'facebookScope', [
        'public_profile',
    ]);

    angular.module('GitApp').constant(
        'facebookAppID', '943321152403439');

    angular.module('GitApp').constant(
        'roleArn', 'arn:aws:iam::558973640890:role/fbTesterRole');

    angular.module('GitApp').constant(
        'awsRegion', 'us-west-2');


})();