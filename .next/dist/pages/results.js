'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Card = require('../components/Card');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../redux/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (if any)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/

var Pages = function (_React$Component) {
  (0, _inherits3.default)(Pages, _React$Component);

  function Pages(props) {
    (0, _classCallCheck3.default)(this, Pages);

    return (0, _possibleConstructorReturn3.default)(this, (Pages.__proto__ || (0, _getPrototypeOf2.default)(Pages)).call(this, props));
  }

  (0, _createClass3.default)(Pages, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'results' }, _react2.default.createElement('div', null, 'RESULTS'), _react2.default.createElement('h3', { id: 'searchMessage' }, 'search message'), _react2.default.createElement('div', { id: 'cards' }, this.props.results.length ? this.props.results.map(function (result, index) {
        document.getElementById('cards').className = 'container';
        var name = result.name,
            surname = result.surname,
            location = result.location;

        return _react2.default.createElement('div', { className: 'card', key: index }, _react2.default.createElement('p', null, name || '<noname>', ' ', surname), _react2.default.createElement('p', null, 'Location: ' + location));
      }) : null, this.props.results.length ? _react2.default.createElement('div', { id: 'return', className: 'hover',
        onClick: function onClick() {
          return window.scrollTo(0, 0);
        }
      }, 'Return to top') : null));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer,
          pathname = _ref.pathname,
          query = _ref.query;

      var newState = store.getState();
      console.log('gIP caleld, isServer: ', isServer);
      if (isServer) return {};else return newState;
    }
  }]);

  return Pages;
}(_react2.default.Component);

//


;

var mapStateToProps = function mapStateToProps(state) {
  return {
    results: state.results
  };
};

var withReduxConfig = {
  createStore: _store.initStore,
  storeKey: 'reduxStore',
  mapStateToProps: mapStateToProps
};

exports.default = (0, _nextReduxWrapper2.default)(withReduxConfig)(Pages);

//
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'


// const store = () => createStore(reducer, {results: [{surname: 'bobydeen'}]}, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// export default withRedux(store, null, null)(connect(state => state)(({ results }) => {
//   return <PagesClass results={results} />
// }));


//
// import Link from 'next/link'
// import { connect } from 'react-redux'
// import withRedux from 'next-redux-wrapper';
// import { updateResults, initStore } from '../redux/store';

// import React from 'react';
// import { render } from 'react-dom';
// import { Card } from '../components/Card';

// const Pages = connect(state => state)(({ results }) => {
//   return (
//     <div id="results">
//       <div>NEW RESULTS</div>
//       <h3 id="searchMessage">{props.searchMessage}</h3>
//       <div id="cards">
//         {results.length ? results.map((result, index) => {
//           document.getElementById('cards').className='container';
//           const { name, surname, location } = result;
//           return <div className="card" key={index}>
//             <p>{name || '<noname>'} {surname}</p>
//             <p>{'Location: ' + location}</p>
//           </div>
//         }) : null}
//         {results.length ? <div id="return" className="hover"
//           onClick={() => window.scrollTo(0,0)}
//         >Return to top</div>: null}
//       </div>
//     </div>
//   );
// });


// export default withRedux(initStore, null, mapDispatchToProps)(Pages);