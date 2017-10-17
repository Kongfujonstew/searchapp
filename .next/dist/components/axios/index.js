'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPerson = exports.count = exports.findByLocation = exports.findBySurname = exports.findByName = exports.elasticPeople = exports.person = exports.allPeople = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'http://localhost:3000/' + 'graphql'; //

var allPeople = exports.allPeople = function allPeople() {
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'query {\n      allPeople {\n        name\n        surname\n        location\n      }\n    }'
  });
};

var person = exports.person = function person() {
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'query {\n      person {\n        name\n        surname\n        location\n      }\n    }'
  });
};

var elasticPeople = exports.elasticPeople = function elasticPeople(searchString) {
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'query {\n      elasticPeople (searchString:"' + searchString + '") {\n        name\n        surname\n        location\n      }\n    }'
  });
};

var findByName = exports.findByName = function findByName(name) {
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'query {\n      findByName (name:"' + name + '") {\n        name\n        surname\n        location\n      }\n    }'
  });
};

var findBySurname = exports.findBySurname = function findBySurname(surname) {
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'query {\n      findBySurname (surname:"' + surname + '") {\n        name\n        surname\n        location\n      }\n    }'
  });
};

var findByLocation = exports.findByLocation = function findByLocation(location) {
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'query {\n      findByLocation (location:"' + location + '") {\n        name\n        surname\n        location\n      }\n    }'
  });
};

var count = exports.count = function count() {
  console.log('called count.');
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'query { count }'
  });
};

var addPerson = exports.addPerson = function addPerson(name, surname, location) {
  console.log('variables: ', name, surname, location);
  return _axios2.default.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: 'mutation {\n      addPerson(name:"' + name + '", surname:"' + surname + '", location:"' + location + '") {\n        name\n      }\n    }'
  });
};