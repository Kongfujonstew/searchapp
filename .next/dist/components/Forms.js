'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _index = require('./axios/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement('div', { id: 'forms', className: 'container' }, _react2.default.createElement('form', { className: 'form left' }, _react2.default.createElement('h3', null, 'SEARCH'), _react2.default.createElement('p', null, 'Query'), _react2.default.createElement('input', { type: 'text', id: 'query',
    onKeyPress: props.handleEnterKey
  }), _react2.default.createElement('div', { id: 'searchButton', className: 'hover',
    onClick: props.search
  }, 'Search'), _react2.default.createElement('div', { id: 'showAllButton', className: 'hover',
    onClick: props.getAllPeople
  }, 'Cheat & Show All')), _react2.default.createElement('form', { className: 'form right' }, _react2.default.createElement('h3', null, 'ADD PERSON'), _react2.default.createElement('p', null, 'Name'), _react2.default.createElement('input', { type: 'text', id: 'name',
    onKeyPress: props.handleEnterKey
  }), _react2.default.createElement('p', null, 'Surname'), _react2.default.createElement('input', { type: 'text', id: 'surname',
    onKeyPress: props.handleEnterKey
  }), _react2.default.createElement('p', null, 'Location'), _react2.default.createElement('input', { type: 'text', id: 'location',
    onKeyPress: props.handleEnterKey
  }), _react2.default.createElement('div', { id: 'addButton', className: 'hover',
    onClick: props.addSomeone
  }, 'Add')));
};