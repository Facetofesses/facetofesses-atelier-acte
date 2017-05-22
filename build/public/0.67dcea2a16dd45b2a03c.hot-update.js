webpackHotUpdate(0,{

/***/ 127:
false,

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SoundHelper = function () {\n  function SoundHelper() {\n    (0, _classCallCheck3.default)(this, SoundHelper);\n  }\n\n  (0, _createClass3.default)(SoundHelper, [{\n    key: 'start',\n    value: function start() {\n      this.sounds = [{\n        url: '/static/test.mp3',\n        key: 'test'\n      }];\n      this.loadSounds();\n    }\n  }, {\n    key: 'loadSounds',\n    value: function loadSounds() {\n      var _this = this;\n\n      this.sounds.forEach(function (sound) {\n        return _this.loadSound(sound.url, sound.key);\n      });\n    }\n  }, {\n    key: 'loadSound',\n    value: function loadSound(url, key) {\n      createjs.Sound.registerSound(url, key);\n    }\n  }]);\n  return SoundHelper;\n}();\n\nexports.default = new SoundHelper();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3V0aWxzL1NvdW5kSGVscGVyLmpzP2U2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU291bmRIZWxwZXIge1xuICBzdGFydCAoKSB7XG4gICAgdGhpcy5zb3VuZHMgPSBbXG4gICAgICB7XG4gICAgICAgIHVybDogJy9zdGF0aWMvdGVzdC5tcDMnLFxuICAgICAgICBrZXk6ICd0ZXN0J1xuICAgICAgfVxuICAgIF1cbiAgICB0aGlzLmxvYWRTb3VuZHMoKVxuICB9XG5cbiAgbG9hZFNvdW5kcyAoKSB7XG4gICAgdGhpcy5zb3VuZHMuZm9yRWFjaChzb3VuZCA9PiB0aGlzLmxvYWRTb3VuZChzb3VuZC51cmwsIHNvdW5kLmtleSkpXG4gIH1cblxuICBsb2FkU291bmQgKHVybCwga2V5KSB7XG4gICAgY3JlYXRlanMuU291bmQucmVnaXN0ZXJTb3VuZCh1cmwsIGtleSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU291bmRIZWxwZXIoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zY3JpcHRzL3V0aWxzL1NvdW5kSGVscGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})