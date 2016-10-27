'use strict';

var app = angular.module('myApp', []);

var person = {firstName: 'Peter', lastName: 'Smith'};

//1. name filter
app.controller('nameController', ['$scope', function ($scope) {
        $scope.person = person;
    }]);

app.filter('nameFilter', function () {
    return function (input) {
        return input.lastName + ", " + input.firstName;
    };

});

//2. login form directive
app.directive('loginForm', [function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var attributeParts = attrs.header.split(',');
                for (var i = 0; i < attributeParts.length; i++) {
                    element.append(angular.element("<h4>" + attributeParts[i] + "</h4>"));
                }
            },
            templateUrl: 'loginform.html'
        };
    }]);

//3. service

app.service('casingService', function () {
    var casing = {};

    casing.titleCase = function () {
        return "My Example Service";
    };
    casing.camelCase = function () {
        return "MyExampleService";
    };
    casing.dashCase = function () {
        return "my-example-service";
    };

    return casing;

});

app.controller('caseController', ["$scope","casingService", function($scope,casingService){
        $scope.titleCase = casingService.titleCase();
        $scope.camelCase = casingService.camelCase();
        $scope.dashCase = casingService.dashCase();
}]);
