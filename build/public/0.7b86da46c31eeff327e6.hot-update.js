webpackHotUpdate(0,{

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(129);\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _assign = __webpack_require__(36);\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _sockjsClient = __webpack_require__(199);\n\nvar _sockjsClient2 = _interopRequireDefault(_sockjsClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SOCKET_URL = 'http://localhost:8090/ws';\n\nvar Socket = function () {\n  function Socket() {\n    (0, _classCallCheck3.default)(this, Socket);\n  }\n\n  (0, _createClass3.default)(Socket, [{\n    key: 'setKey',\n    value: function setKey(key) {\n      this.key = key;\n    }\n  }, {\n    key: 'start',\n    value: function start() {\n      this.instance = new _sockjsClient2.default(SOCKET_URL);\n      this.instance.onopen = this.onOpen.bind(this);\n      this.instance.onclose = this.onClose.bind(this);\n      this.instance.onmessage = this.onMessage.bind(this);\n    }\n  }, {\n    key: 'onOpen',\n    value: function onOpen() {\n      this.send('auth', {\n        device: this.key\n      });\n    }\n  }, {\n    key: 'onClose',\n    value: function onClose() {}\n  }, {\n    key: 'onMessage',\n    value: function onMessage(e) {\n      var type = JSON.parse(e.data).type;\n      console.log('receive socket event', type, JSON.parse(e.data));\n    }\n  }, {\n    key: 'send',\n    value: function send(type, datas) {\n      var msg = (0, _assign2.default)({}, datas, { type: type });\n      this.instance.send((0, _stringify2.default)(msg));\n    }\n  }]);\n  return Socket;\n}();\n\nexports.default = new Socket();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NjcmlwdHMvdXRpbHMvU29ja2V0LmpzP2UyNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvY2tKUyBmcm9tICdzb2NranMtY2xpZW50J1xuXG5jb25zdCBTT0NLRVRfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MC93cydcblxuY2xhc3MgU29ja2V0IHtcbiAgc2V0S2V5IChrZXkpIHtcbiAgICB0aGlzLmtleSA9IGtleVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU29ja0pTKFNPQ0tFVF9VUkwpXG4gICAgdGhpcy5pbnN0YW5jZS5vbm9wZW4gPSB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbnN0YW5jZS5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcylcbiAgICB0aGlzLmluc3RhbmNlLm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcylcbiAgfVxuXG4gIG9uT3BlbiAoKSB7XG4gICAgdGhpcy5zZW5kKCdhdXRoJywge1xuICAgICAgZGV2aWNlOiB0aGlzLmtleVxuICAgIH0pXG4gIH1cblxuICBvbkNsb3NlICgpIHt9XG5cbiAgb25NZXNzYWdlIChlKSB7XG4gICAgY29uc3QgdHlwZSA9IEpTT04ucGFyc2UoZS5kYXRhKS50eXBlXG4gICAgY29uc29sZS5sb2coJ3JlY2VpdmUgc29ja2V0IGV2ZW50JywgdHlwZSwgSlNPTi5wYXJzZShlLmRhdGEpKVxuICB9XG5cbiAgc2VuZCAodHlwZSwgZGF0YXMpIHtcbiAgICBjb25zdCBtc2cgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhcywge3R5cGV9KVxuICAgIHRoaXMuaW5zdGFuY2Uuc2VuZChKU09OLnN0cmluZ2lmeShtc2cpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTb2NrZXQoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zY3JpcHRzL3V0aWxzL1NvY2tldC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})