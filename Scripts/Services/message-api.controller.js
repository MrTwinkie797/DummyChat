angular.module("mainModule")
    .service("messagesApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var messages = api + "/messages";

            /*Get*/
            this.getMessages = function () {
                var deferred = $q.defer();

                $http.get(messages)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
            /*Add*/
            this.addMessage = function (newMessage) {
                var deferred = $q.defer();

                $http.post(messages, newMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
            /*Update*/
            this.updateMessage = function (updatedMessage) {
                var deferred = $q.defer();

                $http.put(messages + "/" + updatedMessage.id, updatedMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            /*Delete*/
            this.deleteMessage = function (id) {
                var deferred = $q.defer();

                $http.delete(messages + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
        }
    ]);