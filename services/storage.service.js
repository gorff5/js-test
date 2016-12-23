'use strict';

const Promise = require("bluebird");
const fs = require('fs');

Promise.promisifyAll(fs);

const storageService = {
    getJson: getJson,
    setJson: setJson,
    appendToJson: appendToJson,
};

const JSON_PATH_START_URI = './storage/';
const JSON_PATH_END_URI = '.json';

function getJson(fileName) {
        return fs.readFileAsync(_getJsonFullUri(fileName), 'utf8')
            .then(JSON.parse)
            .then(response=> {
                return response;
            }).catch(error=> {
                throw error;
            });
}

function setJson(json, fileName) {
    let jsonStringify = JSON.stringify(json);

    return fs.writeFileAsync(_getJsonFullUri(fileName), jsonStringify)
        .then(response=> {
            return json;
        }).catch(error=> {
            throw error;
        });
}

function appendToJson(json, fileName) {

    return getJson(fileName)
        .then(jsonArray=> {
            jsonArray.push(...json);
            return setJson(jsonArray, fileName);
        })
        .then(jsonArray=> {
            return jsonArray;
        })
        .catch(error=> {
            throw error;
        });
}



// Private function

function _getJsonFullUri(fileName) {
    return JSON_PATH_START_URI + fileName + JSON_PATH_END_URI;
}

module.exports = storageService;
