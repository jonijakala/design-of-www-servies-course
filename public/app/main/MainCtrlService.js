(function() {
    angular
        .module('MainModule')
        .factory('MainCtrlService', ['$rootScope', '$timeout', 'MainApiService', MainCtrlService]);

    function MainCtrlService($rootScope, $timeout, MainApiService) {
        return {
            updateUserData: function(userinfo) {
                this.data.user = userinfo;
            },
            'data': {
                user: null,
                edit: false
            },
            'userData': null,
            saveUser: function() {
                console.log('Saving!');
                MainApiService.saveUser(this.data.user, this.data.userID).then(function(response) {
                    console.log(response);
                }, function(err) {
                    console.log(err);
                });
            },
            editMode: function(editNow) {
                var edits = document.getElementsByClassName("contenteditable");

                var bool = this.data.edit = !this.data.edit;

                console.log(bool);
                for (var i = 0; i < edits.length; i++) {
                    console.log('Log edits: ' + edits[i]);
                    edits[i].setAttribute("contenteditable", bool.toString());
                }
            },
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
