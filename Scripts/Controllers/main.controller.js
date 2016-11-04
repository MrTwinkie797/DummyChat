/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "channelsApi",
        "messagesApi",
        "Hub",
        "$timeout",
        "$rootScope",
        function ($scope, $location, $route, channelsApi, messagesApi, Hub, $timeout, $rootScope) {
            $scope.$route = $route;
            $scope.channels = [];
            $scope.messages = [];
            $scope.subscribedChannels = [];
            $scope.feed = [];

            $scope.getFeed = function () {
                $scope.feed = $scope.channels.filter(function (channel) {
                    return $scope.subscribedChannels.indexOf(channel.id) != -1;
                });
            }

            var getHub = function (path, hubname) {
                var hub = null;
                hub = new Hub(hubname, {
                    listeners: {
                        'recieveMessage': function (message) {
                            console.log(message);
                            console.log("hello");
                            $rootScope.$apply();
                        }
                    },
                    rootPath: path,

                    errorHandler: function (error) {
                        console.error(error);
                    }
                });
            }


            var poll = function () {
                $timeout(function () {
                    channelsApi.getChannels()
                        .then(function (data) {
                            $scope.channels = data;
                            if (data != null) {
                                $scope.channels = data;

                                $scope.getFeed();
                            }
                        });

                    messagesApi.getMessages()
                        .then(function (data) {
                            $scope.messages = data;
                            if (data != null) {
                                $scope.messages = data;

                                $scope.getFeed();
                            }
                        });
                    poll();
                }, 1000);
            };



            //Laddar in från LS
            $scope.loadSubscribedChannels = function () {
                var dataString = localStorage.getItem("subscribedChannels");
                if (dataString)
                    $scope.subscribedChannels = JSON.parse(dataString);
            }

            //Spara till LS
            $scope.saveSubscribedChannels = function () {
                var jsonString = JSON.stringify($scope.subscribedChannels);
                localStorage.setItem("subscribedChannels", jsonString);
            }

            $scope.deleteChannel = function (channel) {
                channelsApi.deleteChannel(channel.id)
                    .then(function () {
                        var index = $scope.channels.map(function (channel) {
                            return channel.id;
                        }).indexOf(channel.id);

                        $scope.channels.splice(index, 1);
                    });
            }

            $scope.go = function (url) {
                $location.path(url);
            };

            $scope.loadSubscribedChannels();
            poll();

            getHub("http://dummyapi.kodalagom.se/signalr", "chatHub");
        }
    ]);