/*global define*/

define(function () {
    'use strict';

    function maDeleteButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'entry': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoDelete = function () {
                    var entity = $scope.entity();
                    $location.path('/delete/' + entity.name() + '/' + $scope.entry().identifierValue);
                };
            },
            template:
'<md-button class="md-fab" ng-click="gotoDelete()">' +
    '{{"Delete" | trans}}' +
'</md-button>'

        };
    }

    maDeleteButtonDirective.$inject = ['$location'];

    return maDeleteButtonDirective;
});
