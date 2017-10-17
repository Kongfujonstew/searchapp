'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _props$person = props.person,
      name = _props$person.name,
      surname = _props$person.surname,
      location = _props$person.location;

  return _react2.default.createElement('div', null, _react2.default.createElement('h3', null, name, ' ', surname), _react2.default.createElement('p', null, _react2.default.createElement('div', null), location));
};