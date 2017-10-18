'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Forms = require('./Forms');

var _Forms2 = _interopRequireDefault(_Forms);

var _Results = require('./Results');

var _Results2 = _interopRequireDefault(_Results);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement('div', null, _react2.default.createElement('header', null, 'Server-side: Node.js/Express, GraphQL, Mongoose.  ', _react2.default.createElement('br', null), 'Frontend: React, Axios, awesomeness '), _react2.default.createElement('div', { id: 'hamburger' }), _react2.default.createElement('main', null, _react2.default.createElement('nav', null, _react2.default.createElement(_link2.default, { href: '/results' }, _react2.default.createElement('a', null, 'Navigate to results'))), _react2.default.createElement(_Forms2.default, {
    getAllPeople: props.getAllPeople,
    search: props.search,
    addSomeone: props.addSomeone,
    handleEnterKey: props.handleEnterKey
  }), _react2.default.createElement(_Results2.default, {
    results: props.results,
    searchMessage: props.searchMessage
  })), _react2.default.createElement('footer', null, 'Jon Michael Stewart'));
};