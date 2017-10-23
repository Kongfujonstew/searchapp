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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../redux/store');

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query ($name:String) {\n    findByName(name: $name) {\n      name\n      surname\n      location\n    }\n  }\n  '], ['\n  query ($name:String) {\n    findByName(name: $name) {\n      name\n      surname\n      location\n    }\n  }\n  ']);

//apollo


var client = new _apolloClient2.default({
  createNetworkInterface: (0, _apolloClient.createNetworkInterface)({ uri: 'http://localhost:3000/graphql' })
});

var Person = function Person(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      findByName = _ref$data.findByName;

  if (loading) {
    return _react2.default.createElement('p', null, 'Loading . . . ');
  }
  console.log(findByName);

  return _react2.default.createElement('div', { className: 'container' }, 'Hello from PersonWithData', findByName.length ? findByName.map(function (result, index) {
    var name = result.name,
        surname = result.surname,
        location = result.location;

    return _react2.default.createElement('div', { className: 'card', key: index }, _react2.default.createElement(_link2.default, { href: '/view?name=' + name }, _react2.default.createElement('p', null, name || '<noname>', ' ', surname)), _react2.default.createElement('p', null, 'Location: ' + location));
  }) : null);
};

var PersonQuery = (0, _graphqlTag2.default)(_templateObject);

var PersonWithData = (0, _reactApollo.graphql)(PersonQuery, {
  options: function options(props) {
    return { variables: { name: props.name } };
  }
})(Person);

// const PersonWithData = graphql(gql`
//     query {
//       findByName(name: "Janis") {
//         name
//         surname
//         location
//       }
//     }
//   `)(Person);

var View = function (_React$Component) {
  (0, _inherits3.default)(View, _React$Component);

  function View(props) {
    (0, _classCallCheck3.default)(this, View);

    var _this = (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).call(this, props));

    _this.state = {
      name: ''
    };
    return _this;
  }

  (0, _createClass3.default)(View, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ name: location.href.substring(location.href.lastIndexOf('=') + 1) });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactApollo.ApolloProvider, { client: client }, _react2.default.createElement('div', { id: 'view' }, 'Hello from view. name is =', this.state.name, _react2.default.createElement(PersonWithData, { name: this.state.name })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref2) {
      var store = _ref2.store,
          isServer = _ref2.isServer,
          pathname = _ref2.pathname,
          query = _ref2.query;

      if (isServer) return {};else {
        return store.getState();
      }
    }
  }]);

  return View;
}(_react2.default.Component);

;

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

var withReduxConfig = {
  createStore: _store.initStore,
  storeKey: 'reduxStore',
  mapStateToProps: mapStateToProps
};

exports.default = (0, _nextReduxWrapper2.default)(withReduxConfig)(View);