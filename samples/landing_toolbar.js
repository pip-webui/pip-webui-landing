/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appLandingComponents.LandingToolbar', []);

    thisModule.controller('LandingToolbarController',
        function($scope) {
            $scope.lnLocal= ['En', 'Ru'];
            $scope.ln = 'En';
        }
    );

})();
