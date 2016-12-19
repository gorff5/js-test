'use strict';

function apiMiddleware(req, res, next) {
   console.log('api middlware works');
    next();
}

module.exports = apiMiddleware;
