webpackHotUpdate(0,{

/***/ 127:
false,

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import '../lib/soundjs-0.6.2.min.js'\n\nvar SoundHelper = function () {\n  function SoundHelper() {\n    (0, _classCallCheck3.default)(this, SoundHelper);\n  }\n\n  (0, _createClass3.default)(SoundHelper, [{\n    key: 'start',\n    value: function start() {\n      this.sounds = [{\n        url: '/static/test.mp3',\n        key: 'test'\n      }];\n      this.loadSounds();\n    }\n  }, {\n    key: 'loadSounds',\n    value: function loadSounds() {\n      var _this = this;\n\n      this.sounds.forEach(function (sound) {\n        return _this.loadSound(sound.url, sound.key);\n      });\n    }\n  }, {\n    key: 'loadSound',\n    value: function loadSound(url, key) {\n      CreateJs.Sound.registerSound(url, key);\n    }\n  }]);\n  return SoundHelper;\n}();\n\nexports.default = new SoundHelper();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3V0aWxzL1NvdW5kSGVscGVyLmpzP2U2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuLi9saWIvc291bmRqcy0wLjYuMi5taW4uanMnXG5cbmNsYXNzIFNvdW5kSGVscGVyIHtcbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuc291bmRzID0gW1xuICAgICAge1xuICAgICAgICB1cmw6ICcvc3RhdGljL3Rlc3QubXAzJyxcbiAgICAgICAga2V5OiAndGVzdCdcbiAgICAgIH1cbiAgICBdXG4gICAgdGhpcy5sb2FkU291bmRzKClcbiAgfVxuXG4gIGxvYWRTb3VuZHMgKCkge1xuICAgIHRoaXMuc291bmRzLmZvckVhY2goc291bmQgPT4gdGhpcy5sb2FkU291bmQoc291bmQudXJsLCBzb3VuZC5rZXkpKVxuICB9XG5cbiAgbG9hZFNvdW5kICh1cmwsIGtleSkge1xuICAgIENyZWF0ZUpzLlNvdW5kLnJlZ2lzdGVyU291bmQodXJsLCBrZXkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNvdW5kSGVscGVyKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy91dGlscy9Tb3VuZEhlbHBlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})