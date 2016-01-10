(function() {
    angular
        .module('MainModule')
        .factory('MainApiService', ['MainCtrlService', '$rootScope', '$http', '$q', MainApiService]);

    function MainApiService(MainCtrlService, $rootScope, $http, $q) {
        return {
            'getUserData': function() {
                var defer = $q.defer();
                $http.get('/api/user/').success(function(resp) {
                    // MainCtrlService.userData = resp.userinfo;
                    defer.resolve(resp);
                }).error(function(err) {
                    defer.reject(err);
                });
                return defer.promise;
            },
            'addDummyDataInModule': function() {
                var defer = $q.defer();
                $http.post('/api/user/infoModule').success(function(resp) {
                    defer.resolve(resp);
                }).error(function(err) {
                    defer.reject(err);
                });
                return defer.promise;
            }
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
