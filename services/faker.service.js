'use strict';

const faker = require('faker');
const storageService = require('./storage.service');

const fakerService = {
    initData: initData
};

function initData() {
    return Promise.all([
        _createData('profiles', 1),
        _createData('comments', 1)
    ]).then(values=> {
        return values;
    }).catch(error=> {
        throw error;
    });
}


//////// PRIVATE FUNCTION

function _createData(type, profilesNumber) {
    let dataArray = [];
    for (let i = 0; i < profilesNumber; i++) {
        let data = type === "profiles" ? _createProfile() : _createComment();
        data.id = i + 1;
        dataArray.push(data);
    }
    return storageService.setJson(dataArray, type)
        .then(data=> {
            return data;
        })
        .catch(error=> {
            throw error;
        })
}

function _createProfile() {
    return {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        image: faker.image.avatar(),
        email: faker.internet.email()
    };
}

function _createComment() {
    return {
        text: faker.lorem.text(),
        image: faker.image.city(),
        date: faker.date.past()
    };
}


module.exports = fakerService;