webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _index = __webpack_require__(36);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SoundHelper = function () {\n  function SoundHelper() {\n    (0, _classCallCheck3.default)(this, SoundHelper);\n  }\n\n  (0, _createClass3.default)(SoundHelper, [{\n    key: 'start',\n    value: function start() {\n      this.sounds = [{\n        url: '/static/test.mp3',\n        key: 'test'\n      }];\n      window.setTimeout(this.loadSounds.bind(this), 100);\n    }\n  }, {\n    key: 'loadSounds',\n    value: function loadSounds() {\n      var _this = this;\n\n      var multiPlayer = new MultiPlayer({\n        \"kick\": \"path/to/kick.mp3\",\n        \"snare\": \"path/to/snare.mp3\"\n      }, function () {\n        multiPlayer.start(\"kick\");\n      });\n      createjs.Sound.on('fileload', this.loadHandler.bind(this), this);\n      this.sounds.forEach(function (sound) {\n        return _this.loadSound(sound.url, sound.key);\n      });\n    }\n  }, {\n    key: 'loadHandler',\n    value: function loadHandler() {\n      var _this2 = this;\n\n      console.log('chargé');\n      (0, _index.selectClass)('hiddenDiv').addEventListener('click', function () {\n        console.log('touchstart hidden div');\n        _this2.play('test');\n      });\n    }\n  }, {\n    key: 'loadSound',\n    value: function loadSound(url, key) {\n      createjs.Sound.registerSound(url, key);\n    }\n  }, {\n    key: 'play',\n    value: function play(key) {\n      console.log('play sound');\n      createjs.Sound.play(key);\n    }\n  }]);\n  return SoundHelper;\n}();\n\nexports.default = new SoundHelper();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3V0aWxzL1NvdW5kSGVscGVyLmpzP2U2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgc2VsZWN0Q2xhc3Ncbn0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5cbmNsYXNzIFNvdW5kSGVscGVyIHtcbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuc291bmRzID0gW1xuICAgICAge1xuICAgICAgICB1cmw6ICcvc3RhdGljL3Rlc3QubXAzJyxcbiAgICAgICAga2V5OiAndGVzdCdcbiAgICAgIH1cbiAgICBdXG4gICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5sb2FkU291bmRzLmJpbmQodGhpcyksIDEwMClcbiAgfVxuXG4gIGxvYWRTb3VuZHMgKCkge1xuICAgIHZhciBtdWx0aVBsYXllciA9IG5ldyBNdWx0aVBsYXllcih7XG4gICAgICBcImtpY2tcIiA6IFwicGF0aC90by9raWNrLm1wM1wiLFxuICAgICAgXCJzbmFyZVwiIDogXCJwYXRoL3RvL3NuYXJlLm1wM1wiLFxuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICBtdWx0aVBsYXllci5zdGFydChcImtpY2tcIik7XG4gICAgfSk7XG4gICAgY3JlYXRlanMuU291bmQub24oJ2ZpbGVsb2FkJywgdGhpcy5sb2FkSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzKVxuICAgIHRoaXMuc291bmRzLmZvckVhY2goc291bmQgPT4gdGhpcy5sb2FkU291bmQoc291bmQudXJsLCBzb3VuZC5rZXkpKVxuICB9XG5cbiAgbG9hZEhhbmRsZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGFyZ8OpJylcbiAgICBzZWxlY3RDbGFzcygnaGlkZGVuRGl2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndG91Y2hzdGFydCBoaWRkZW4gZGl2JylcbiAgICAgIHRoaXMucGxheSgndGVzdCcpXG4gICAgfSlcbiAgfVxuXG4gIGxvYWRTb3VuZCAodXJsLCBrZXkpIHtcbiAgICBjcmVhdGVqcy5Tb3VuZC5yZWdpc3RlclNvdW5kKHVybCwga2V5KVxuICB9XG5cbiAgcGxheSAoa2V5KSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXkgc291bmQnKVxuICAgIGNyZWF0ZWpzLlNvdW5kLnBsYXkoa2V5KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTb3VuZEhlbHBlcigpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NjcmlwdHMvdXRpbHMvU291bmRIZWxwZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})