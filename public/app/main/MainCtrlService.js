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
                this.editMode(false);
                console.log('Saving!');
                MainApiService.saveUser(this.data.user, this.data.userID).then(function(response) {
                    console.log(response);
                }, function(err) {
                    console.log(err);
                });
            },
            editMode: function(editNow) {
                // Take backup if editing is just starting
                if (this.data.edit === false && (
                        editNow === true ||
                        typeof editNow == "undefined")) {
                    console.log('makking backup!!');
                    this.userDataBackup = JSON.parse(JSON.stringify(this.data.user));
                    // this.userDataBackup = $.extend(true, {}, this.data.user);
                    


                    // console.log("take backup alwwways!");
                    // this.data.userDataBackup = this.data.user;
                    // console.log(this.userDataBackup);
                }

                var edits = document.getElementsByClassName("contenteditable");
                var bool;
                if (typeof(editNow) === 'boolean')
                    bool = editNow;
                else
                    bool = !this.data.edit;

                this.data.edit = bool;

                console.log('making edit to: '+bool);
                for (var i = 0; i < edits.length; i++) {
                    // console.log('Log edits: ' + edits[i]);
                    edits[i].setAttribute("contenteditable", bool.toString());
                }

                //save current model!
                if (this.data.edit === false && editNow !== false) {

                    console.log('isuppose i should sawve now?!?');
                    this.saveUser();
                }
            },
            cancelEdits: function() {
                    // var bu = this.userDataBackup;
                    // console.log(this.userDataBackup.name);
                    // console.log(this.data.user.name);
                    // // this.data.user.name = bu.name;
                    // console.log(this.userDataBackup.name);
                    // console.log(this.data.user.name);
                    // this.data.user = this.data.userDataBackup;


                    var u = this.userDataBackup;
                    this.data.user.name = u.name;
                    this.data.user.position = u.position;
                    this.data.user.infoModules = u.infoModules;
                    // this.data.user.
                    // this.data.user.
                    // this.data.user.
                    // this.data.user.
                    // this.data.user.
                    // this.data.user.
                    // this.data.user.

                    // this.data.user = this.data.userDataBackup;
                    console.log('restored backup');
                    this.editMode(false);
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
