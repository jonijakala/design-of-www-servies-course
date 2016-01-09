module.exports = function() {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // ROUTES FOR OUR API
    // =============================================================================
    var express = require('express');
    // var app = express;
    var router = express.Router(); // get an instance of the express Router

    // CONTROLLERS
    var Bear = require('./models/bear');
    var User = require('./models/user');
    var InfoModule = require('./models/infomodule');

    // middleware to use for all requests
    router.use(function(req, res, next) {
        // do logging
        // console.log('Something is happening. ApiRoutes');
        next(); // make sure we go to the next routes and don't stop here
    });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function(req, res) {
        res.json({
            message: 'hooray! welcome to our api!'
        });
    });

    // ================================================== BEARS
    router.route('/bears')
        // create a bear (accessed at POST http://localhost:8080/api/bears)
        .post(function(req, res) {
            var bear = new Bear(); // create a new instance of the Bear model
            bear.name = req.body.name; // set the bears name (comes from the request)            // save the bear and check for errors
            bear.save(function(err) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Bear created!'
                });
            });
        })
        // get all the bears (accessed at GET http://localhost:8080/api/bears)
        .get(function(req, res) {
            Bear.find(function(err, bears) {
                if (err)
                    res.send(err);
                res.json(bears);
            });
        }); // on routes that end in /bears/:bear_id
    // ----------------------------------------------------
    router.route('/bears/:bear_id')
        // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
        .get(function(req, res) {
            Bear.findById(req.params.bear_id, function(err, bear) {
                if (err)
                    res.send(err);
                res.json(bear);
            });
        })
        // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
        .put(function(req, res) { // use our bear model to find the bear we want
            Bear.findById(req.params.bear_id, function(err, bear) {
                if (err)
                    res.send(err);
                bear.name = req.body.name; // update the bears info
                // save the bear
                bear.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({
                        message: 'Bear updated!'
                    });
                });
            });
        })
        // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
        .delete(function(req, res) {
            Bear.remove({
                _id: req.params.bear_id
            }, function(err, bear) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Successfully deleted'
                });
            });
        });
    // ================================================== BEARS

    router.route('/user/:user_id')
        .get(function(req, res) {
            console.log("superASDFASDFASDF");
            User.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        });

    router.route('/user/')
        .get(function(req, res) {
            res.json(req.user);
        });

    router.route('/user/infoModule')
        .post(function(req, res) {
            console.log('Lets create new infoModule!');
            var infmodul = new InfoModule();

            // template infoset
            var infoset = new InfoSet();
            infoset.title = 'TestingTitle';

            infmodul.title = 'Childhood';
            infmodul.infosets = [infoset];

            res.json(infmodul);

            // var bear = new Bear(); // create a new instance of the Bear model
            // bear.name = req.body.name; // set the bears name (comes from the request)            // save the bear and check for errors
            // bear.save(function(err) {
            //     if (err)
            //         res.send(err);
            //     res.json({
            //         message: 'Bear created!'
            //     });
            // });
        });

    return router;
};
