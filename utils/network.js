"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.post = post;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { keys.push.apply(keys, (0, _getOwnPropertySymbols["default"])(object)); } if (enumerableOnly) keys = (0, _filter["default"])(keys).call(keys, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(source, true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(source)).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var AjaxRequest =
/*#__PURE__*/
function () {
  function AjaxRequest() {
    (0, _classCallCheck2["default"])(this, AjaxRequest);
    // this.baseURL = process.env.NODE_ENV === 'production' ? '/' : 'localhost:8000'
    this.timeout = 3000;
    this.queue = {};
  }

  (0, _createClass2["default"])(AjaxRequest, [{
    key: "merge",
    value: function merge(options) {
      return _objectSpread({}, options, {
        baseURL: this.baseURL,
        timeout: this.timeout
      });
    }
  }, {
    key: "setInterceptor",
    value: function setInterceptor(instance, url) {
      instance.interceptors.response.use(function (res) {
        return res.data;
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var str = _qs["default"].stringify(data);

      var instance = _axios["default"].create();

      this.setInterceptor(instance);
      var config = this.merge({
        method: 'post',
        url: url
      });

      if (str) {
        config.data = str;
      }

      return instance(config);
    }
  }]);
  return AjaxRequest;
}();

var ajaxRequest = new AjaxRequest();

function post() {
  return _post.apply(this, arguments);
}

function _post() {
  _post = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var result,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return ajaxRequest.post.apply(ajaxRequest, _args);

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _post.apply(this, arguments);
}