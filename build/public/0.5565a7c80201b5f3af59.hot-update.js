webpackHotUpdate(0,{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(129);\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _assign = __webpack_require__(36);\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _sockjsClient = __webpack_require__(199);\n\nvar _sockjsClient2 = _interopRequireDefault(_sockjsClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SOCKET_URL = 'http://192.168.43.9:8080/ws';\n\nvar Socket = function () {\n  function Socket() {\n    (0, _classCallCheck3.default)(this, Socket);\n  }\n\n  (0, _createClass3.default)(Socket, [{\n    key: 'setKey',\n    value: function setKey(key) {\n      this.key = key;\n    }\n  }, {\n    key: 'start',\n    value: function start() {\n      this.instance = new _sockjsClient2.default(SOCKET_URL);\n      this.instance.onopen = this.onOpen.bind(this);\n      this.instance.onclose = this.onClose.bind(this);\n      this.instance.onmessage = this.onMessage.bind(this);\n    }\n  }, {\n    key: 'onOpen',\n    value: function onOpen() {\n      this.send('auth', {\n        device: this.key\n      });\n    }\n  }, {\n    key: 'onClose',\n    value: function onClose() {}\n  }, {\n    key: 'onMessage',\n    value: function onMessage(e) {\n      var type = JSON.parse(e.data).type;\n      console.log('receive socket event', type);\n    }\n  }, {\n    key: 'send',\n    value: function send(type, datas) {\n      var msg = (0, _assign2.default)({}, datas, { type: type });\n      console.log(this);\n      this.instance.send((0, _stringify2.default)(msg));\n    }\n  }]);\n  return Socket;\n}();\n\nexports.default = new Socket();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3V0aWxzL1NvY2tldC5qcz9lMjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb2NrSlMgZnJvbSAnc29ja2pzLWNsaWVudCdcblxuY29uc3QgU09DS0VUX1VSTCA9ICdodHRwOi8vMTkyLjE2OC40My45OjgwODAvd3MnXG5cbmNsYXNzIFNvY2tldCB7XG4gIHNldEtleSAoa2V5KSB7XG4gICAgdGhpcy5rZXkgPSBrZXlcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNvY2tKUyhTT0NLRVRfVVJMKVxuICAgIHRoaXMuaW5zdGFuY2Uub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKVxuICAgIHRoaXMuaW5zdGFuY2Uub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbnN0YW5jZS5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbk9wZW4gKCkge1xuICAgIHRoaXMuc2VuZCgnYXV0aCcsIHtcbiAgICAgIGRldmljZTogdGhpcy5rZXlcbiAgICB9KVxuICB9XG5cbiAgb25DbG9zZSAoKSB7fVxuXG4gIG9uTWVzc2FnZSAoZSkge1xuICAgIGNvbnN0IHR5cGUgPSBKU09OLnBhcnNlKGUuZGF0YSkudHlwZVxuICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlIHNvY2tldCBldmVudCcsIHR5cGUpXG4gIH1cblxuICBzZW5kICh0eXBlLCBkYXRhcykge1xuICAgIGNvbnN0IG1zZyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFzLCB7dHlwZX0pXG4gICAgY29uc29sZS5sb2codGhpcylcbiAgICB0aGlzLmluc3RhbmNlLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU29ja2V0KClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy91dGlscy9Tb2NrZXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})