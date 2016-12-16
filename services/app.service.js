'use strict';

const storageService = require('./storage.service');

const appService = {
    getAll: getAll,
    add: add,
    remove: remove
};

function getAll() {
    return storageService.getJson()
        .then((data)=> {
            return data;
         }).catch((error)=> {
             throw error;
         });
}


function add(item) {
    return getAll()
        .then((list)=> {
            item.id = _getLastId(list) + 1;
            list.push(item);
            return storageService.setJson(list).then((list)=> {
                return list;
            });
        }).catch((error)=> {
            throw error;
        });
}


function remove(id) {
    return getAll()
        .then((list)=> {
            let index = _getObjectIndexById(list, id);
            list.splice(index, 1);
            return storageService.setJson(list).then((list)=> {
                return list;
            });
        }).catch((error)=> {
            throw error;
        });
}

/////////// PRIVATE FUNCTIONS

function _getLastId(array) {
    if (array && array.length !== 0) {
        let id = array[array.length - 1].id;
        if (id) {
            return id;
        }
    }
    return 0;
}


function _getObjectIndexById(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === parseInt(id)) {
            return i;
        }
    }
    throw "not found";
}

module.exports = appService;
