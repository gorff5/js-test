'use strict';

const api = require('./api.route');

function initRoutes(app) {
    app.use('/api', api);
}

module.exports = initRoutes;