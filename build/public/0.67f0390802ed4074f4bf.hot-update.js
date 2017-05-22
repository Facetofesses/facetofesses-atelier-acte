webpackHotUpdate(0,{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _from = __webpack_require__(48);\n\nvar _from2 = _interopRequireDefault(_from);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _hammerjs = __webpack_require__(197);\n\nvar _hammerjs2 = _interopRequireDefault(_hammerjs);\n\nvar _Touch = __webpack_require__(121);\n\nvar _Touch2 = _interopRequireDefault(_Touch);\n\nvar _Events = __webpack_require__(130);\n\nvar _Events2 = _interopRequireDefault(_Events);\n\nvar _EventTypes = __webpack_require__(45);\n\nvar _SoundHelper = __webpack_require__(47);\n\nvar _SoundHelper2 = _interopRequireDefault(_SoundHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Detector = function () {\n  function Detector() {\n    (0, _classCallCheck3.default)(this, Detector);\n  }\n\n  (0, _createClass3.default)(Detector, [{\n    key: 'initialize',\n    value: function initialize(canvas) {\n      this.mc = new _hammerjs2.default(canvas);\n\n      this.addTouchListener();\n      this.addRotateListener();\n    }\n  }, {\n    key: 'addTouchListener',\n    value: function addTouchListener() {\n      window.addEventListener('touchstart', this.onTouchStart.bind(this));\n      window.addEventListener('touchmove', this.onTouchMove.bind(this));\n      window.addEventListener('touchend', this.onTouchEnd.bind(this));\n    }\n  }, {\n    key: 'addRotateListener',\n    value: function addRotateListener() {\n      this.mc.add(new _hammerjs2.default.Rotate({\n        pointers: 3\n      }));\n      this.mc.on('rotate rotatestart rotateend', this.onRotate.bind(this));\n    }\n  }, {\n    key: 'onRotate',\n    value: function onRotate(e) {\n      _Events2.default.commit(_EventTypes.PIECE_ROTATE, {\n        type: e.type,\n        rotation: Math.round(e.rotation)\n      });\n    }\n  }, {\n    key: 'onTouchStart',\n    value: function onTouchStart(e) {\n      _SoundHelper2.default.play('test');\n      var touches = (0, _from2.default)(e.targetTouches);\n\n      if (touches.length === 3) {\n        var touch = new _Touch2.default(touches);\n        _Events2.default.commit(_EventTypes.PIECE_TOUCH, { touch: touch });\n      }\n    }\n  }, {\n    key: 'onTouchMove',\n    value: function onTouchMove(e) {\n      var touches = (0, _from2.default)(e.targetTouches);\n\n      if (touches.length === 3) {\n        var touch = new _Touch2.default(touches);\n        _Events2.default.commit(_EventTypes.PIECE_MOVE, { touch: touch });\n      }\n    }\n  }, {\n    key: 'onTouchEnd',\n    value: function onTouchEnd() {\n      _Events2.default.commit(_EventTypes.PIECE_RELEASE);\n    }\n  }]);\n  return Detector;\n}();\n\nexports.default = new Detector();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL2RldGVjdG9yL0RldGVjdG9yLmpzP2VmZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcydcbmltcG9ydCBUb3VjaCBmcm9tICcuL1RvdWNoJ1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi91dGlscy9FdmVudHMnXG5pbXBvcnQge1xuICBQSUVDRV9UT1VDSCxcbiAgUElFQ0VfTU9WRSxcbiAgUElFQ0VfUk9UQVRFLFxuICBQSUVDRV9SRUxFQVNFXG59IGZyb20gJy4uL3V0aWxzL0V2ZW50VHlwZXMnXG5pbXBvcnQgU291bmRIZWxwZXIgZnJvbSAnLi4vdXRpbHMvU291bmRIZWxwZXInXG5cbmNsYXNzIERldGVjdG9yIHtcbiAgaW5pdGlhbGl6ZSAoY2FudmFzKSB7XG4gICAgdGhpcy5tYyA9IG5ldyBIYW1tZXIoY2FudmFzKVxuXG4gICAgdGhpcy5hZGRUb3VjaExpc3RlbmVyKClcbiAgICB0aGlzLmFkZFJvdGF0ZUxpc3RlbmVyKClcbiAgfVxuXG4gIGFkZFRvdWNoTGlzdGVuZXIgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgYWRkUm90YXRlTGlzdGVuZXIgKCkge1xuICAgIHRoaXMubWMuYWRkKG5ldyBIYW1tZXIuUm90YXRlKHtcbiAgICAgIHBvaW50ZXJzOiAzXG4gICAgfSkpXG4gICAgdGhpcy5tYy5vbigncm90YXRlIHJvdGF0ZXN0YXJ0IHJvdGF0ZWVuZCcsIHRoaXMub25Sb3RhdGUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIG9uUm90YXRlIChlKSB7XG4gICAgRXZlbnRzLmNvbW1pdChQSUVDRV9ST1RBVEUsIHtcbiAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnJvdW5kKGUucm90YXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIG9uVG91Y2hTdGFydCAoZSkge1xuICAgIFNvdW5kSGVscGVyLnBsYXkoJ3Rlc3QnKVxuICAgIGNvbnN0IHRvdWNoZXMgPSBBcnJheS5mcm9tKGUudGFyZ2V0VG91Y2hlcylcblxuICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMykge1xuICAgICAgY29uc3QgdG91Y2ggPSBuZXcgVG91Y2godG91Y2hlcylcbiAgICAgIEV2ZW50cy5jb21taXQoUElFQ0VfVE9VQ0gsIHt0b3VjaH0pXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUgKGUpIHtcbiAgICBjb25zdCB0b3VjaGVzID0gQXJyYXkuZnJvbShlLnRhcmdldFRvdWNoZXMpXG5cbiAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGNvbnN0IHRvdWNoID0gbmV3IFRvdWNoKHRvdWNoZXMpXG4gICAgICBFdmVudHMuY29tbWl0KFBJRUNFX01PVkUsIHt0b3VjaH0pXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaEVuZCAoKSB7XG4gICAgRXZlbnRzLmNvbW1pdChQSUVDRV9SRUxFQVNFKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBEZXRlY3RvcigpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NjcmlwdHMvZGV0ZWN0b3IvRGV0ZWN0b3IuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7OztBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})