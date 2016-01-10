(function() {
    angular
        .module('MainModule')
        .factory('MainCtrlService', ['$rootScope', '$timeout', MainCtrlService]);

    function MainCtrlService($rootScope, $timeout) {
        return {
            updateUserData: function(userinfo) {
                this.data.user = userinfo;
            },
            'data': {
                edit: false
            },
            'userData': null,
            'asdf': "MainGtrlService ASDFASDFASF"
                // 'getModules': function() {
                //     var defer = $q.defer();
                //     $http.get('/modules/getModules').success(function(resp) {
                //         defer.resolve(resp);
                //     }).error(function(err) {
                //         defer.reject(err);
                //     });
                //     return defer.promise;
                // },
                // 'addModule': function() {
                //     var defer = $q.defer();
                //     $http.post('/modules/addModule').success(function(resp) {
                //         defer.resolve(resp);
                //     }).error(function(err) {
                //         defer.reject(err);
                //     });
                //     return defer.promise;
                // },
                // 'removeModule': function(module) {
                //     var defer = $q.defer();
                //     $http.post('/modules/removeModule', module).success(function(resp) {
                //         defer.resolve(resp);
                //     }).error(function(err) {
                //         defer.reject(err);
                //     });
                //     return defer.promise;
                // },
                // 'addInfoSet': function() {
                //     var defer = $q.defer();
                //     $http.post('/modules/addInfoSet').success(function(resp) {
                //         defer.resolve(resp);
                //     }).error(function(err) {
                //         defer.reject(err);
                //     });
                //     return defer.promise;
                // }
        };
    }
})();
