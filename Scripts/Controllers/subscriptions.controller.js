/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("SubscriptionsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Subscriptions";

            $scope.unsubscribe = function (id) {

                var index = $scope.subscribedChannels.indexOf(id);
                $scope.subscribedChannels.splice(index, 1);

                $scope.getFeed();
                $scope.saveSubscribedChannels();
            };

            $scope.getFeed();
        }
    ]);