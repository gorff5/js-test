'use strict';

const api = require('./api.route');
const apiMiddleware = require('../middlewares/api.middleware.js');

function initRoutes(app) {
    app.use('/api', apiMiddleware, api);
}

module.exports = initRoutes;