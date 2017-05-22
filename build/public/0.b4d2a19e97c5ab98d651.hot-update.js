webpackHotUpdate(0,{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _promise = __webpack_require__(136);\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _frontConfig = __webpack_require__(117);\n\nvar _frontConfig2 = _interopRequireDefault(_frontConfig);\n\nvar _SocketClient = __webpack_require__(230);\n\nvar _SocketClient2 = _interopRequireDefault(_SocketClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Screen = function () {\n  function Screen() {\n    (0, _classCallCheck3.default)(this, Screen);\n\n    this.config = _frontConfig2.default;\n    this.loadGifs();\n    this.animationContainer = document.getElementById('gif');\n\n    this.state = {\n      position: null,\n      speed: 1\n    };\n\n    _SocketClient2.default.instance.onmessage = this.onSocketMessage.bind(this);\n  }\n\n  (0, _createClass3.default)(Screen, [{\n    key: 'loadGifs',\n    value: function loadGifs() {\n      var _this = this;\n\n      var promises = [];\n      this.config.forEach(function (c) {\n        return promises.push(_this.loadGif(c));\n      });\n\n      _promise2.default.all(promises).then(this.onGifsLoaded.bind(this));\n    }\n  }, {\n    key: 'loadGif',\n    value: function loadGif(configItem) {\n      return fetch(configItem.resourceUrl).then(function (data) {\n        return data.blob();\n      }).then(function (data) {\n        configItem.url = URL.createObjectURL(data);\n      });\n    }\n  }, {\n    key: 'onGifsLoaded',\n    value: function onGifsLoaded() {\n      console.log(this.config);\n      // const image = document.getElementById('gif')\n      // image.src = this.gifs[0].url\n    }\n  }, {\n    key: 'onSocketMessage',\n    value: function onSocketMessage(e) {\n      var datas = JSON.parse(e.data);\n      this.updateState(datas.key, datas.value);\n      this.updateAnimation();\n    }\n  }, {\n    key: 'updateState',\n    value: function updateState(key, value) {\n      this.state[key] = value;\n      console.log(this.state);\n    }\n  }, {\n    key: 'updateAnimation',\n    value: function updateAnimation() {\n      var _this2 = this;\n\n      var gifItem = this.gifs.find(function (gif) {\n        return gif.position === _this2.state.position && gif.speed === _this2.state.speed;\n      });\n      this.animationContainer.src = gifItem.src;\n    }\n  }]);\n  return Screen;\n}();\n\nexports.default = Screen;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL1NjcmVlbi9pbmRleC5qcz82ZDM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vZnJvbnRDb25maWcuanNvbidcbmltcG9ydCBTb2NrZXRDbGllbnQgZnJvbSAnLi4vdXRpbHMvU29ja2V0Q2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4ge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB0aGlzLmxvYWRHaWZzKClcbiAgICB0aGlzLmFuaW1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWYnKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgc3BlZWQ6IDFcbiAgICB9XG5cbiAgICBTb2NrZXRDbGllbnQuaW5zdGFuY2Uub25tZXNzYWdlID0gdGhpcy5vblNvY2tldE1lc3NhZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgbG9hZEdpZnMgKCkge1xuICAgIGNvbnN0IHByb21pc2VzID0gW11cbiAgICB0aGlzLmNvbmZpZy5mb3JFYWNoKGMgPT4gcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRHaWYoYykpKVxuXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICAudGhlbih0aGlzLm9uR2lmc0xvYWRlZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgbG9hZEdpZiAoY29uZmlnSXRlbSkge1xuICAgIHJldHVybiBmZXRjaChjb25maWdJdGVtLnJlc291cmNlVXJsKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmJsb2IoKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25maWdJdGVtLnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSlcbiAgICAgIH0pXG4gIH1cblxuICBvbkdpZnNMb2FkZWQgKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnKVxuICAgIC8vIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZicpXG4gICAgLy8gaW1hZ2Uuc3JjID0gdGhpcy5naWZzWzBdLnVybFxuICB9XG5cbiAgb25Tb2NrZXRNZXNzYWdlIChlKSB7XG4gICAgY29uc3QgZGF0YXMgPSBKU09OLnBhcnNlKGUuZGF0YSlcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGFzLmtleSwgZGF0YXMudmFsdWUpXG4gICAgdGhpcy51cGRhdGVBbmltYXRpb24oKVxuICB9XG5cbiAgdXBkYXRlU3RhdGUgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICB1cGRhdGVBbmltYXRpb24gKCkge1xuICAgIGNvbnN0IGdpZkl0ZW0gPSB0aGlzLmdpZnMuZmluZCgoZ2lmKSA9PiB7XG4gICAgICByZXR1cm4gZ2lmLnBvc2l0aW9uID09PSB0aGlzLnN0YXRlLnBvc2l0aW9uICYmIGdpZi5zcGVlZCA9PT0gdGhpcy5zdGF0ZS5zcGVlZFxuICAgIH0pXG4gICAgdGhpcy5hbmltYXRpb25Db250YWluZXIuc3JjID0gZ2lmSXRlbS5zcmNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zY3JpcHRzL1NjcmVlbi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFwREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})