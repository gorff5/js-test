'use strict';

const express = require('express');
const fs = require('fs');

const storageService = {
    getJson: getJson,
    setJson: setJson
};

const JSON_PATH_START_URI = './storage/';
const JSON_PATH_END_URI = '.json';

function getJson(fileName) {
    return new Promise((resolve, reject)=> {
        fs.readFile(_getJsonFullUri(fileName), 'utf8', (err, data)=> {
            if (err) {
                reject(err);
            }
            data = JSON.parse(data);
            resolve(data);
        });
    })
}

function setJson(json, fileName) {
    return new Promise((resolve, reject)=> {
        let jsonStringify = JSON.stringify(json);

        fs.writeFile(_getJsonFullUri(fileName), jsonStringify, (err)=> {
            if (err) {
                reject(err);
            }
            resolve(json);
        });
    });
}


// Private function

function _getJsonFullUri(fileName) {
    return JSON_PATH_START_URI + fileName + JSON_PATH_END_URI;
}

module.exports = storageService;
