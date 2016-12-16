'use strict';

const appService = require('../services/app.service');

const appController = {
    getAll: getAll,
    add: add,
    remove: remove
};

function getAll() {
    return appService.getAll()
        .then((data)=> {
            return data;
        }).catch((error)=> {
            throw error;
        });
}

function add(item) {
    return appService.add(item)
        .then((data)=> {
            return data;
        }).catch((error)=> {
            throw error;
        });
}

function remove(id) {
    return appService.remove(id)
        .then((data)=> {
            return data;
        }).catch((error)=> {
            throw error;
        });
}

module.exports = appController;
