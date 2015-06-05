define([
    'angular',
    'services/ajax',
    'services/api'
], function(angular, ajax, api) {
    angular
        .module('reciperejoice.services', [])
        .factory('ajax', ajax)
        .factory('api', api)

})
