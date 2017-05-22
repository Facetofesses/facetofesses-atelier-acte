webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _Blob = __webpack_require__(121);\n\nvar _Blob2 = _interopRequireDefault(_Blob);\n\nvar _Selector = __webpack_require__(122);\n\nvar _Selector2 = _interopRequireDefault(_Selector);\n\nvar _TextSelection = __webpack_require__(124);\n\nvar _TextSelection2 = _interopRequireDefault(_TextSelection);\n\nvar _TextPiece = __webpack_require__(123);\n\nvar _TextPiece2 = _interopRequireDefault(_TextPiece);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar STATE_INACTIVE = 'STATE_INACTIVE';\nvar STATE_SHOW = 'STATE_SHOW';\nvar STATE_ACTIVE = 'STATE_ACTIVE';\n\nvar Piece = function () {\n  /**\n   * Represents one piece\n   * @param config\n   */\n  function Piece(config) {\n    (0, _classCallCheck3.default)(this, Piece);\n\n    this.config = config;\n\n    this.state = STATE_INACTIVE;\n    this.x = 0;\n    this.y = 0;\n    this.rotation = 0;\n    this.activePositionIndex = 0;\n    this.onBasket = false;\n\n    this.createElements();\n  }\n\n  (0, _createClass3.default)(Piece, [{\n    key: 'setActivePositionIndex',\n    value: function setActivePositionIndex() {\n      var newIndex = Math.floor(this.rotation * this.config.positions.length / 360);\n\n      if (newIndex < 0) {\n        newIndex = 0;\n      }\n\n      if (newIndex !== this.activePositionIndex) {\n        this.textSelection.updateActive(newIndex);\n        this.selector.updateActive(newIndex);\n        this.activePositionIndex = newIndex;\n      }\n\n      Socket.send('data', {\n        type: 'e'\n      });\n    }\n  }, {\n    key: 'createElements',\n    value: function createElements() {\n      this.blob = new _Blob2.default(this.x, this.y, {\n        color: this.config.color\n      });\n      this.selector = new _Selector2.default(this.x, this.y, {\n        color: this.config.color,\n        positions: this.config.positions\n      });\n\n      this.textSelection = new _TextSelection2.default(this.x, this.y, {\n        positions: this.config.positions\n      });\n\n      this.textPiece = new _TextPiece2.default(this.x, this.y, {\n        name: this.config.name\n      });\n\n      this.elements = [this.blob, this.selector, this.textSelection, this.textPiece];\n    }\n  }, {\n    key: 'setRotation',\n    value: function setRotation(rotation) {\n      if (rotation < this.rotation - 2 || rotation > this.rotation + 2) {\n        this.rotation = rotation;\n        this.setActivePositionIndex();\n      }\n    }\n  }, {\n    key: 'onDetect',\n    value: function onDetect(x, y) {\n      var _this = this;\n\n      if (this.state === STATE_SHOW) {\n        TweenMax.to(this, 0.6, {\n          x: x,\n          y: y\n        });\n      } else {\n        this.x = x;\n        this.y = y;\n        console.log(this.rotation);\n\n        this.blob.show(function () {\n          _this.blob.idle();\n          _this.textSelection.show(_this.activePositionIndex);\n          _this.textPiece.show();\n          _this.selector.show(_this.activePositionIndex);\n        });\n      }\n\n      this.state = STATE_ACTIVE;\n    }\n  }, {\n    key: 'onRelease',\n    value: function onRelease() {\n      if (this.onBasket) {\n        this.onThrow();\n      } else {\n        this.state = STATE_SHOW;\n      }\n    }\n  }, {\n    key: 'onThrow',\n    value: function onThrow() {\n      var _this2 = this;\n\n      this.selector.hide();\n      this.blob.hide(function () {\n        _this2.state = STATE_INACTIVE;\n      });\n    }\n  }, {\n    key: 'isActive',\n    value: function isActive() {\n      return this.state === STATE_ACTIVE;\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      var _this3 = this;\n\n      this.elements.forEach(function (element) {\n        element.update({\n          x: _this3.x,\n          y: _this3.y\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.isActive()) {\n        this.elements.forEach(function (element) {\n          element.render();\n        });\n      }\n    }\n  }]);\n  return Piece;\n}();\n\nexports.default = Piece;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3BpZWNlcy9QaWVjZS5qcz8zYWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9iIGZyb20gJy4uL2VsZW1lbnRzL0Jsb2InXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vZWxlbWVudHMvU2VsZWN0b3InXG5pbXBvcnQgVGV4dFNlbGVjdGlvbiBmcm9tICcuLi9lbGVtZW50cy9UZXh0U2VsZWN0aW9uJ1xuaW1wb3J0IFRleHRQaWVjZSBmcm9tICcuLi9lbGVtZW50cy9UZXh0UGllY2UnXG5cbmNvbnN0IFNUQVRFX0lOQUNUSVZFID0gJ1NUQVRFX0lOQUNUSVZFJ1xuY29uc3QgU1RBVEVfU0hPVyA9ICdTVEFURV9TSE9XJ1xuY29uc3QgU1RBVEVfQUNUSVZFID0gJ1NUQVRFX0FDVElWRSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllY2Uge1xuICAvKipcbiAgICogUmVwcmVzZW50cyBvbmUgcGllY2VcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG5cbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfSU5BQ1RJVkVcbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMucm90YXRpb24gPSAwXG4gICAgdGhpcy5hY3RpdmVQb3NpdGlvbkluZGV4ID0gMFxuICAgIHRoaXMub25CYXNrZXQgPSBmYWxzZVxuXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50cygpXG4gIH1cblxuICBzZXRBY3RpdmVQb3NpdGlvbkluZGV4ICgpIHtcbiAgICBsZXQgbmV3SW5kZXggPSBNYXRoLmZsb29yKHRoaXMucm90YXRpb24gKiB0aGlzLmNvbmZpZy5wb3NpdGlvbnMubGVuZ3RoIC8gMzYwKVxuXG4gICAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggPSAwXG4gICAgfVxuXG4gICAgaWYgKG5ld0luZGV4ICE9PSB0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXgpIHtcbiAgICAgIHRoaXMudGV4dFNlbGVjdGlvbi51cGRhdGVBY3RpdmUobmV3SW5kZXgpXG4gICAgICB0aGlzLnNlbGVjdG9yLnVwZGF0ZUFjdGl2ZShuZXdJbmRleClcbiAgICAgIHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleCA9IG5ld0luZGV4XG4gICAgfVxuXG4gICAgU29ja2V0LnNlbmQoJ2RhdGEnLCB7XG4gICAgICB0eXBlOiAnZSdcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudHMgKCkge1xuICAgIHRoaXMuYmxvYiA9IG5ldyBCbG9iKHRoaXMueCwgdGhpcy55LCB7XG4gICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3JcbiAgICB9KVxuICAgIHRoaXMuc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IodGhpcy54LCB0aGlzLnksIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgIHBvc2l0aW9uczogdGhpcy5jb25maWcucG9zaXRpb25zXG4gICAgfSlcblxuICAgIHRoaXMudGV4dFNlbGVjdGlvbiA9IG5ldyBUZXh0U2VsZWN0aW9uKHRoaXMueCwgdGhpcy55LCB7XG4gICAgICBwb3NpdGlvbnM6IHRoaXMuY29uZmlnLnBvc2l0aW9uc1xuICAgIH0pXG5cbiAgICB0aGlzLnRleHRQaWVjZSA9IG5ldyBUZXh0UGllY2UodGhpcy54LCB0aGlzLnksIHtcbiAgICAgIG5hbWU6IHRoaXMuY29uZmlnLm5hbWVcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cyA9IFt0aGlzLmJsb2IsIHRoaXMuc2VsZWN0b3IsIHRoaXMudGV4dFNlbGVjdGlvbiwgdGhpcy50ZXh0UGllY2VdXG4gIH1cblxuICBzZXRSb3RhdGlvbiAocm90YXRpb24pIHtcbiAgICBpZiAocm90YXRpb24gPCB0aGlzLnJvdGF0aW9uIC0gMiB8fCByb3RhdGlvbiA+IHRoaXMucm90YXRpb24gKyAyKSB7XG4gICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb25cbiAgICAgIHRoaXMuc2V0QWN0aXZlUG9zaXRpb25JbmRleCgpXG4gICAgfVxuICB9XG5cbiAgb25EZXRlY3QgKHgsIHkpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfU0hPVykge1xuICAgICAgVHdlZW5NYXgudG8odGhpcywgMC42LCB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueCA9IHhcbiAgICAgIHRoaXMueSA9IHlcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucm90YXRpb24pXG5cbiAgICAgIHRoaXMuYmxvYi5zaG93KCgpID0+IHtcbiAgICAgICAgdGhpcy5ibG9iLmlkbGUoKVxuICAgICAgICB0aGlzLnRleHRTZWxlY3Rpb24uc2hvdyh0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXgpXG4gICAgICAgIHRoaXMudGV4dFBpZWNlLnNob3coKVxuICAgICAgICB0aGlzLnNlbGVjdG9yLnNob3codGhpcy5hY3RpdmVQb3NpdGlvbkluZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfQUNUSVZFXG4gIH1cblxuICBvblJlbGVhc2UgKCkge1xuICAgIGlmICh0aGlzLm9uQmFza2V0KSB7XG4gICAgICB0aGlzLm9uVGhyb3coKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gU1RBVEVfU0hPV1xuICAgIH1cbiAgfVxuXG4gIG9uVGhyb3cgKCkge1xuICAgIHRoaXMuc2VsZWN0b3IuaGlkZSgpXG4gICAgdGhpcy5ibG9iLmhpZGUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0lOQUNUSVZFXG4gICAgfSlcbiAgfVxuXG4gIGlzQWN0aXZlICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gU1RBVEVfQUNUSVZFXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC51cGRhdGUoe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW5kZXIoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy9waWVjZXMvUGllY2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUF2SEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})