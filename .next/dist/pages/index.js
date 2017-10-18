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

var _redux = require('redux');

var _store = require('../redux/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Main = require('../components/Main.js');

var _Main2 = _interopRequireDefault(_Main);

var _index = require('../components/axios/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.state = {
      results: [],
      searchMessage: 'Please enter a search'
    };
    return _this;
  }
  //


  (0, _createClass3.default)(Index, [{
    key: 'getAllPeople',
    value: function getAllPeople() {
      var _this2 = this;

      this.setState({ searchMessage: 'Loading' });
      (0, _index.allPeople)().then(function (results) {
        var resultsNum = results.data.data.allPeople.length;
        _this2.setState({ searchMessage: 'Results: Show All' });

        _this2.props.updateResults(results.data.data.allPeople);

        // this.setState({ results: results.data.data.allPeople });
        if (resultsNum) window.scrollTo(0, 500);
      });
    }
  }, {
    key: 'search',
    value: function search() {
      var _this3 = this;

      var searchString = document.getElementById('query').value;
      this.setState({ searchMessage: 'Loading' });
      (0, _index.elasticPeople)(searchString).then(function (results) {
        var resultsNum = results.data.data.elasticPeople.length;
        var s = resultsNum === 1 ? '' : 's';
        _this3.setState({ searchMessage: resultsNum ? '' + resultsNum + ' result' + s + ' found' : 'No results found' });
        _this3.setState({ results: results.data.data.elasticPeople });
        if (resultsNum) window.scrollTo(0, 500);
      });
    }
  }, {
    key: 'addSomeone',
    value: function addSomeone() {
      var _this4 = this;

      var name = document.getElementById('name').value;
      var surname = document.getElementById('surname').value;
      var location = document.getElementById('location').value;
      this.setState({ searchMessage: 'Adding ' + name });
      (0, _index.addPerson)(name, surname, location).then(function () {
        _this4.setState({ searchMessage: 'Added ' + name });
        _this4.setState({ results: [] });
      });
    }
  }, {
    key: 'handleEnterKey',
    value: function handleEnterKey(e) {
      if (e.charCode === 13) {
        e.preventDefault();
        var id = document.activeElement.id;
        if (id === 'query') {
          this.search();
        } else if (id === 'name' || 'surname' || 'location') {
          this.addSomeone();
        };
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Main2.default, {
        getAllPeople: this.getAllPeople.bind(this),
        search: this.search.bind(this),
        addSomeone: this.addSomeone.bind(this),
        results: this.state.results,
        searchMessage: this.state.searchMessage,
        handleEnterKey: this.handleEnterKey.bind(this)
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch((0, _store.serverRenderClock)(isServer));
      store.dispatch((0, _store.addCount)());

      return { isServer: isServer };
    }
  }]);

  return Index;
}(_react2.default.Component);
// import React from 'react';
// import { render } from 'react-dom';


// export default (props) => {
//   return (
//     <div>
//       This is the index Page
//       NODE_ENV=production
//     </div>
//   );
// };

//


;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateResults: (0, _redux.bindActionCreators)(_store.updateResults, dispatch),
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch),
    startClock: (0, _redux.bindActionCreators)(_store.startClock, dispatch)
  };
};

var withReduxConfig = {
  createStore: _store.initStore,
  storeKey: 'reduxStore',
  mapDispatchToProps: mapDispatchToProps
};

exports.default = (0, _nextReduxWrapper2.default)(withReduxConfig)(Index);