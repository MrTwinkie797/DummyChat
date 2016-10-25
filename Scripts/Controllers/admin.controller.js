/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AdminController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "Admin";
            $scope.newChannel = {
                name: ""
            };
            //$scope.channels = [];      

            $scope.subscribe = function (id) {
                $scope.subscribedChannels.push(id);

                $scope.saveSubscribedChannels();
            };

            $scope.addChannel = function () {
                channelsApi.addChannel($scope.newChannel)
                    .then(function (data) {
                        console.log(data);
                        $scope.channels.push(data);
                    });
            };
        }
    ]);