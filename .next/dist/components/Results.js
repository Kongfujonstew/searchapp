'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Card = require('./Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement('div', { id: 'results' }, _react2.default.createElement('h3', { id: 'searchMessage' }, props.searchMessage), _react2.default.createElement('div', { id: 'cards' }, props.results.length ? props.results.map(function (result, index) {
    document.getElementById('cards').className = 'container';
    var name = result.name,
        surname = result.surname,
        location = result.location;

    return _react2.default.createElement('div', { className: 'card', key: index }, _react2.default.createElement('p', null, name || '<noname>', ' ', surname), _react2.default.createElement('p', null, 'Location: ' + location));
  }) : null, props.results.length ? _react2.default.createElement('div', { id: 'return', className: 'hover',
    onClick: function onClick() {
      return window.scrollTo(0, 0);
    }
  }, 'Return to top') : null));
};