webpackHotUpdate(0,{

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _tone = __webpack_require__(232);\n\nvar _tone2 = _interopRequireDefault(_tone);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SoundHelper = function () {\n  function SoundHelper() {\n    (0, _classCallCheck3.default)(this, SoundHelper);\n  }\n\n  (0, _createClass3.default)(SoundHelper, [{\n    key: 'start',\n    value: function start() {\n      this.sounds = {\n        test: '/static/test.mp3'\n      };\n      this.loadSounds();\n    }\n  }, {\n    key: 'loadSounds',\n    value: function loadSounds() {\n      this.multiPlayer = new _tone2.default.MultiPlayer(this.sounds, this.loadHandler.bind(this));\n    }\n  }, {\n    key: 'loadHandler',\n    value: function loadHandler() {\n      console.log('chargé');\n    }\n  }, {\n    key: 'play',\n    value: function play(key) {\n      console.log('play sound');\n      this.multiPlayer.start(key);\n      console.log(this.multiPlayer.state);\n    }\n  }]);\n  return SoundHelper;\n}();\n\nexports.default = new SoundHelper();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NjcmlwdHMvdXRpbHMvU291bmRIZWxwZXIuanM/ZTYyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9uZSBmcm9tICd0b25lJ1xuXG5jbGFzcyBTb3VuZEhlbHBlciB7XG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLnNvdW5kcyA9IHtcbiAgICAgIHRlc3Q6ICcvc3RhdGljL3Rlc3QubXAzJ1xuICAgIH1cbiAgICB0aGlzLmxvYWRTb3VuZHMoKVxuICB9XG5cbiAgbG9hZFNvdW5kcyAoKSB7XG4gICAgdGhpcy5tdWx0aVBsYXllciA9IG5ldyBUb25lLk11bHRpUGxheWVyKHRoaXMuc291bmRzLCB0aGlzLmxvYWRIYW5kbGVyLmJpbmQodGhpcykpXG4gIH1cblxuICBsb2FkSGFuZGxlciAoKSB7XG4gICAgY29uc29sZS5sb2coJ2NoYXJnw6knKVxuICB9XG5cbiAgcGxheSAoa2V5KSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXkgc291bmQnKVxuICAgIHRoaXMubXVsdGlQbGF5ZXIuc3RhcnQoa2V5KVxuICAgIGNvbnNvbGUubG9nKHRoaXMubXVsdGlQbGF5ZXIuc3RhdGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNvdW5kSGVscGVyKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy91dGlscy9Tb3VuZEhlbHBlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})