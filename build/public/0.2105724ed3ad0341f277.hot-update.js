webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SoundHelper = function () {\n  function SoundHelper() {\n    (0, _classCallCheck3.default)(this, SoundHelper);\n  }\n\n  (0, _createClass3.default)(SoundHelper, [{\n    key: 'start',\n    value: function start() {\n      this.sounds = [{\n        url: '/static/test.mp3',\n        key: 'test'\n      }];\n      window.setTimeout(this.loadSounds.bind(this), 100);\n    }\n  }, {\n    key: 'loadSounds',\n    value: function loadSounds() {\n      var _this = this;\n\n      createjs.Sound.on('fileload', this.loadHandler.bind(this), this);\n      this.sounds.forEach(function (sound) {\n        return _this.loadSound(sound.url, sound.key);\n      });\n    }\n  }, {\n    key: 'loadHandler',\n    value: function loadHandler() {\n      console.log('chargé');\n    }\n  }, {\n    key: 'loadSound',\n    value: function loadSound(url, key) {\n      createjs.Sound.registerSound(url, key);\n    }\n  }, {\n    key: 'play',\n    value: function play(key) {\n      createjs.Sound.play(key);\n    }\n  }]);\n  return SoundHelper;\n}();\n\nexports.default = new SoundHelper();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3V0aWxzL1NvdW5kSGVscGVyLmpzP2U2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU291bmRIZWxwZXIge1xuICBzdGFydCAoKSB7XG4gICAgdGhpcy5zb3VuZHMgPSBbXG4gICAgICB7XG4gICAgICAgIHVybDogJy9zdGF0aWMvdGVzdC5tcDMnLFxuICAgICAgICBrZXk6ICd0ZXN0J1xuICAgICAgfVxuICAgIF1cbiAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvYWRTb3VuZHMuYmluZCh0aGlzKSwgMTAwKVxuICB9XG5cbiAgbG9hZFNvdW5kcyAoKSB7XG4gICAgY3JlYXRlanMuU291bmQub24oJ2ZpbGVsb2FkJywgdGhpcy5sb2FkSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzKVxuICAgIHRoaXMuc291bmRzLmZvckVhY2goc291bmQgPT4gdGhpcy5sb2FkU291bmQoc291bmQudXJsLCBzb3VuZC5rZXkpKVxuICB9XG5cbiAgbG9hZEhhbmRsZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGFyZ8OpJylcbiAgfVxuXG4gIGxvYWRTb3VuZCAodXJsLCBrZXkpIHtcbiAgICBjcmVhdGVqcy5Tb3VuZC5yZWdpc3RlclNvdW5kKHVybCwga2V5KVxuICB9XG5cbiAgcGxheSAoa2V5KSB7XG4gICAgY3JlYXRlanMuU291bmQucGxheShrZXkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNvdW5kSGVscGVyKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy91dGlscy9Tb3VuZEhlbHBlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})