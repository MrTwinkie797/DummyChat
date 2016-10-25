angular.module("mainModule")
    .component("draggable", {
        templateUrl: "Scripts/Components/Draggable/Draggable.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#draggable-" + scope.id);
                component.draggable({
                    grid: [10, 10]
                });
            }, 100);
        },
        controllerAs: "scope",
        bindings: {
            id: "=",
            body: "="
        }
    });