/**
 * Created by Дмитрий on 30.01.2016.
 */
var module = angular.module('tabs', ['ngRoute']);

module.controller('MainController', ['$rootScope', '$scope', '$route', function($rootScope, $scope, $route) {
    $scope.routeInformation = $route;
}]);

module.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/all', {
            templateUrl: './templates/all.html',
            activetab: 'all'
        })

        .when('/hardware', {
            templateUrl: './templates/hardware.html',
            activetab: 'hardware'
        })

        .when('/software', {
            templateUrl: './templates/software.html',
            activetab: 'software'
        })

        .when('/consulting', {
            templateUrl: './templates/consulting.html',
            activetab: 'consulting'
        })
        .when('/hosting', {
            templateUrl: './templates/hosting.html',
            activetab: 'hosting'
        })
        .when('/startup', {
            templateUrl: './templates/startup.html',
            activetab: 'startup'
        })

        .otherwise({
            redirectTo: '/all'
        });

}]);
