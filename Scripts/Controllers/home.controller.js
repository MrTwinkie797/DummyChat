/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "Home";
        }
    ]);