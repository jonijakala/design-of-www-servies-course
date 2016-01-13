(function() {
    angular
        .module('MainModule')
        .factory('MainApiService', ['$http', '$q', MainApiService]);

    function MainApiService($http, $q) {
        return {
            'getUserData': function(userID) {
                var defer = $q.defer();
                console.log(userID);
                if (userID) {
                    console.log('jee');
                    $http.get('/api/user/' + userID).success(function(resp) {
                        // MainCtrlService.userData = resp.userinfo;
                        defer.resolve(resp);
                    }).error(function(err) {
                        defer.reject(err);
                    });
                } else {
                    $http.get('/api/user/').success(function(resp) {
                        // MainCtrlService.userData = resp.userinfo;
                        defer.resolve(resp);
                    }).error(function(err) {
                        defer.reject(err);
                    });
                }
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
            },
            saveUser: function(userinfo, userID) {
                // updateUser: function(user_id, userinfo) {
                var defer = $q.defer();
                console.log('userID ' + userID);
                $http.put('/api/user/' + userID, userinfo).success(function(resp) {
                    defer.resolve(resp);
                }).error(function(err) {
                    defer.reject(err);
                });
                return defer.promise;
            },
        };
    }
})();
