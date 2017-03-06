/* global angular */

(() => {
    'use strict';

    let content = [
        { title: 'Landing toolbar', state: 'toolbar', url: '/toolbar', controller: 'LandingToolbarController', templateUrl: 'landing_toolbar.html' },
        { title: 'Info block', state: 'infoBlock', url: '/infoBlock', controller: 'InfoBlockController', templateUrl: 'info_block.html' },
        { title: 'Call to action', state: 'callAction', url: '/callAction', controller: 'CallToActionController', templateUrl: 'call_to_action.html' },
    ];

    let thisModule = angular.module('appLandingComponents',
        [
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'wu.masonry', 'LocalStorageModule','ngAnimate', 
            'appLandingComponents.CallToAction', 'appLandingComponents.LandingToolbar', 'appLandingComponents.InfoBlock'
        ]
    );

    thisModule.config(($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) => {

         $mdIconProvider.iconSet('icons', '../../lib/images/icons.svg', 512);

            for (var i = 0; i < content.length; i++) {
                var contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }
                
            $urlRouterProvider.otherwise('/callAction');
        } 
    );

    thisModule.controller('AppController', ($scope, $rootScope, $state, $mdSidenav) => {
            $scope.languages = ['en', 'ru'];
            $scope.themes = ['blue', 'green', 'pink', 'grey'];

            $scope.selected = {
                theme: 'blue',
                tab: 0  
            };

            $scope.content = content;
            $scope.menuOpened = false;

            $scope.onThemeClick = function(theme) {
                $rootScope.$theme = theme;
            };

            // Update page after language changed
            $rootScope.$on('languageChanged', function(event) {
                console.log('Reloading...');
                console.log($state.current);
                console.log($state.params);

                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function(event) {
                $state.reload();
            });
                        
            $scope.onSwitchPage = function(state) {
                $mdSidenav('left').close();
                $state.go(state);
            };
            
            $scope.onToggleMenu = function() {
                $mdSidenav('left').toggle();
            };
                        
            $scope.isActiveState = function(state) {
                return $state.current.name == state;  
            };
        }
    );

})();