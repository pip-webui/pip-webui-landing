/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appLandingComponents.InfoBlock', []);

    thisModule.controller('InfoBlockController',
        function($scope, $mdMedia) {
            $scope.$mdMedia= $mdMedia;
        }
    );

})();
