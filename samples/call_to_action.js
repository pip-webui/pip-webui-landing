/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appLandingComponents.CallToAction', []);

    thisModule.controller('CallToActionController',
        function($scope) {
           $scope.textArray = [
               'Структурируйте и осмысляйте свои дела',
               'Ведите совместные проекты с коллегами',
               'Организовывайте работу своей команды',
               'Следите за людьми, деятельность которых вам интересна',
               'Делись своими знаниями и наблюдениями с другими'
           ];
        }
    );

})();
