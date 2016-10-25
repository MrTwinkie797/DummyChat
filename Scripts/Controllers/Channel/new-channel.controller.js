angular.module("mainModule")
    .controller("NewChannelController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "New channel";
            $scope.newChannel = {
                name: ""
            };
            $scope.channels = [];

            $scope.addChannel = function () {
                channelsApi.addChannel($scope.newChannel)
                    .then(function (data) {
                        console.log(data);
                        $scope.channels.push(data);
                    });
            };
        }
    ]);