angular.module("mainModule")
    .service("channelsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var channels = api + "/channels";

            /*Get*/
            this.getChannels = function () {
                var deferred = $q.defer();

                $http.get(channels)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
            /*Add*/
            this.addChannel = function (newChannel) {
                var deferred = $q.defer();

                $http.post(channels, newChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
            /*Update*/
            this.updateChannel = function (updatedChannel) {
                var deferred = $q.defer();

                $http.put(channels + "/" + updatedChannel.id, updatedChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            /*Delete*/
            this.deleteChannel = function (id) {
                console.log(id);
                var deferred = $q.defer();

                $http.delete(channels + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
        }
    ]);