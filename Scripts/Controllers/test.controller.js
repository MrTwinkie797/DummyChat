/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("TestController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "Test";

            $scope.formInputs = [
               {
                   type: "text",
                   id: $scope.message.author,
                   label: "Author",
                   model: "",
                   isValid: false
               }, {
                   type: "text",
                   ïd: $scope.message.body,
                   label: "Body",
                   mdoel: "",
                   isValid: false
               }
            ];
        }
    ]);