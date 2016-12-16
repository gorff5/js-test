'use strict';

const express = require('express');
const appController = require('../controllers/app.controller');

const router = express.Router();

/* GET app objects. */
router.get('/', function(req, res, next) {
    appController.getAll()
        .then((data)=> {
            res.send(data);
        }).catch((error)=> {
            return next(error);
        });
});

/* POST app object. */
router.post('/', function(req, res, next) {
    appController.add(req.body)
        .then((data)=> {
            res.send(data);
        }).catch((error)=> {
            return next(error);
        });

});

/* DELETE app object. */
router.delete('/:id', function(req, res, next) {
    appController.remove(req.params.id)
        .then((data)=> {
            res.send(data);
        }).catch((error)=> {
            return next(error);
        });

});

module.exports = router;
