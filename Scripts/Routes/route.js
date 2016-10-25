/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })

                .when("/Admin", {
                    templateUrl: "Views/Admin.html",
                    controller: "AdminController",
                    caseInsensitiveMatch: true,
                    activeTab: "Admin"
                })

                .when("/Test", {
                    templateUrl: "Views/Test.html",
                    controller: "TestController",
                    caseInsensitiveMatch: true,
                    activeTab: "Test"
                })

                .when("/Channel/:id", {
                    templateUrl: "Views/Channel.html",
                    controller: "ChannelController",
                    caseInsensitiveMatch: true
                })

                .when("/Admin/AddChannel", {
                    templateUrl: "Views/New/New-Channel.html",
                    controller: "NewChannelController",
                    caseInsensitiveMatch: true,
                    activeTab: "Admin"
                })

                .when("/Subscriptions", {
                    templateUrl: "Views/Subscriptions.html",
                    controller: "SubscriptionsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Subscriptions"
                });
        }
    ]);