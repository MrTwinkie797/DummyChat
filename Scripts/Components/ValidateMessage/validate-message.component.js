angular.module("mainModule")
    .component("ValidateMessage", {
        templateUrl: "Scripts/Components/ValidateMessage/ValidateMessage.html",
        controlelr: function () {
            var ctrl = this;

            ctrl.setValid = function (isValid) {
                console.log(isValid);
            }
        },
        bindings: {
            type: "<",
            id: "<",
            label: "<",
            model: "=",
            isValid: "="
        }
    });