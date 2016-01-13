module.exports = function() {
    var express = require('express');
    // var app = express;
    var router = express.Router(); // get an instance of the express Router

    // CONTROLLERS
    var User = require('./models/user');
    var InfoModule = require('./models/infomodule');

    // middleware to use for all requests
    router.use(function(req, res, next) {
        // if (!req.user) {
        //     if (req._parsedOriginalUrl.href.indexOf('/api/user/') > -1) {
        //         next();
        //     }
        //     // user not logged in
        //     res.redirect("/login");
        // } else
        //     next();
        next();
    });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function(req, res) {
        res.json({
            message: 'hooray! welcome to our api!'
        });
    });

    router.route('/user/:user_id')
        .get(function(req, res) {
            User.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        })
        .put(function(req, res) {
            User.findById(req.params.user_id, function(err, user) {
                if (err) {
                    res.send(err);
                }
                user.userinfo = req.body;

                user.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({
                        message: 'User updated!'
                    });
                });
            });
        });

    router.route('/user/')
        .get(function(req, res) {
            console.log(req.body);
            res.json(req.user);
        });

    router.route('/user/infoModule')
        .post(function(req, res) {
            console.log('Lets create new infoModule!');
            var infmodul = new InfoModule();

            // template infoset
            var infoset = {
                title: 'FAUX designers Oy',
                startYear: 2008,
                endYear: 2010,
                infoSnips: [{
                    txt: 'Photoshop designer and MS paint expert.'
                }]
            };
            var infoset2 = {
                title: 'Strawberry EATS',
                startYear: 2007,
                startMonth: 6,
                endYear: 2007,
                endMonth: 9,
                infoSnips: [{
                    txt: 'Summer job at strawberry farm. Much nice red strawberry yummy. <3'
                }]
            };

            infmodul.title = 'BESTEST WORK EXP';
            infmodul.infosets = [infoset, infoset2];

            //saves
            infmodul.save(function(err) {
                if (err)
                    res.send(err);
            });

            req.user.userinfo.infoModules.push(infmodul);
            req.user.save(function(err) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Created Dummydatas!!',
                    user: req.user
                });
            });
        });

    return router;
};
