/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "$location",
        "$route",
        "$routeParams",
        "messagesApi",
        "channelsApi",
        "$timeout",
        function ($scope, $location, $route, $routeParams, messagesApi, channelsApi, $timeout) {
            $scope.title = "Channel";
            $scope.newMessage = {
                author: "",
                body: ""
            }

            $scope.formInputs = [
                {
                    type: "text",
                    id: "1",
                    label: "Author",
                    model: "",
                    isValid: false
                }, {
                    type: "text",
                    id: $scope.message.body,
                    label: "Body",
                    mdoel: "",
                    isValid: false
                }
            ];

            var poll = function () {
                $timeout(function () {
                    $scope.channel = $scope.channels.filter(function (channel) {
                        return channel.id == $routeParams.id;
                    })[0];
                    poll();
                }, 1000);
            }; 

            $scope.addMessage = function () {
                $scope.newMessage.channelId = $scope.channel.id
                messagesApi.addMessage($scope.newMessage)
                    .then(function (data) {
                        $scope.messages.push(data);
                    });
            }

            poll();
        }
    ]);