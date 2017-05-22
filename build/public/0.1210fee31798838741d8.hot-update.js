webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _Blob = __webpack_require__(121);\n\nvar _Blob2 = _interopRequireDefault(_Blob);\n\nvar _Selector = __webpack_require__(122);\n\nvar _Selector2 = _interopRequireDefault(_Selector);\n\nvar _TextSelection = __webpack_require__(124);\n\nvar _TextSelection2 = _interopRequireDefault(_TextSelection);\n\nvar _TextPiece = __webpack_require__(123);\n\nvar _TextPiece2 = _interopRequireDefault(_TextPiece);\n\nvar _SocketClient = __webpack_require__(46);\n\nvar _SocketClient2 = _interopRequireDefault(_SocketClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar STATE_INACTIVE = 'STATE_INACTIVE';\nvar STATE_SHOW = 'STATE_SHOW';\nvar STATE_ACTIVE = 'STATE_ACTIVE';\n\nvar startRotation = null;\nvar lastRotation = null;\n\nvar Piece = function () {\n  /**\n   * Represents one piece\n   * @param config\n   */\n  function Piece(config) {\n    (0, _classCallCheck3.default)(this, Piece);\n\n    this.config = config;\n\n    this.state = STATE_INACTIVE;\n    this.x = 0;\n    this.y = 0;\n    this.rotation = 0;\n    this.activePositionIndex = 0;\n    this.onBasket = false;\n\n    this.createElements();\n  }\n\n  (0, _createClass3.default)(Piece, [{\n    key: 'setActivePositionIndex',\n    value: function setActivePositionIndex() {\n      var newIndex = Math.floor(this.rotation * this.config.positions.length / 360);\n\n      if (newIndex < 0) {\n        newIndex = 0;\n      }\n\n      if (newIndex !== this.activePositionIndex) {\n        this.textSelection.updateActive(newIndex);\n        this.selector.updateActive(newIndex);\n        this.activePositionIndex = newIndex;\n      }\n\n      _SocketClient2.default.send('data', {\n        key: this.config.id,\n        value: this.activePositionIndex\n      });\n    }\n  }, {\n    key: 'createElements',\n    value: function createElements() {\n      this.blob = new _Blob2.default(this.x, this.y, {\n        color: this.config.color\n      });\n      this.selector = new _Selector2.default(this.x, this.y, {\n        color: this.config.color,\n        positions: this.config.positions\n      });\n\n      this.textSelection = new _TextSelection2.default(this.x, this.y, {\n        positions: this.config.positions\n      });\n\n      this.textPiece = new _TextPiece2.default(this.x, this.y, {\n        name: this.config.name\n      });\n\n      this.elements = [this.blob, this.selector, this.textSelection, this.textPiece];\n    }\n  }, {\n    key: 'setRotation',\n    value: function setRotation(rotation) {\n      if ('undefined' === typeof startRotation) {\n        console.log(startRotation);\n        startRotation = this.rotation;\n        lastRotation = rotation;\n      } else if (rotation < this.rotation - 5 || rotation > this.rotation + 5) {\n        var diff = startRotation - rotation;\n        this.rotation = lastRotation - diff;\n        console.log(this.rotation);\n\n        this.setActivePositionIndex();\n      }\n    }\n  }, {\n    key: 'onDetect',\n    value: function onDetect(x, y) {\n      var _this = this;\n\n      if (this.state === STATE_SHOW) {\n        TweenMax.to(this, 0.6, {\n          x: x,\n          y: y\n        });\n      } else {\n        this.x = x;\n        this.y = y;\n\n        this.blob.show(function () {\n          _this.blob.idle();\n          _this.textSelection.show(_this.activePositionIndex);\n          _this.textPiece.show();\n          _this.selector.show(_this.activePositionIndex);\n        });\n      }\n\n      this.state = STATE_ACTIVE;\n    }\n  }, {\n    key: 'onRelease',\n    value: function onRelease() {\n      if (this.onBasket) {\n        this.onThrow();\n      } else {\n        this.state = STATE_SHOW;\n      }\n    }\n  }, {\n    key: 'onThrow',\n    value: function onThrow() {\n      var _this2 = this;\n\n      this.selector.hide();\n      this.textSelection.hide();\n      this.textPiece.hide();\n      this.blob.hide(function () {\n        _this2.state = STATE_INACTIVE;\n      });\n    }\n  }, {\n    key: 'isActive',\n    value: function isActive() {\n      return this.state === STATE_ACTIVE;\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      var _this3 = this;\n\n      this.elements.forEach(function (element) {\n        element.update({\n          x: _this3.x,\n          y: _this3.y\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.isActive()) {\n        this.elements.forEach(function (element) {\n          element.render();\n        });\n      }\n    }\n  }]);\n  return Piece;\n}();\n\nexports.default = Piece;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3BpZWNlcy9QaWVjZS5qcz8zYWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9iIGZyb20gJy4uL2VsZW1lbnRzL0Jsb2InXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vZWxlbWVudHMvU2VsZWN0b3InXG5pbXBvcnQgVGV4dFNlbGVjdGlvbiBmcm9tICcuLi9lbGVtZW50cy9UZXh0U2VsZWN0aW9uJ1xuaW1wb3J0IFRleHRQaWVjZSBmcm9tICcuLi9lbGVtZW50cy9UZXh0UGllY2UnXG5pbXBvcnQgU29ja2V0Q2xpZW50IGZyb20gJy4uL3V0aWxzL1NvY2tldENsaWVudCdcblxuY29uc3QgU1RBVEVfSU5BQ1RJVkUgPSAnU1RBVEVfSU5BQ1RJVkUnXG5jb25zdCBTVEFURV9TSE9XID0gJ1NUQVRFX1NIT1cnXG5jb25zdCBTVEFURV9BQ1RJVkUgPSAnU1RBVEVfQUNUSVZFJ1xuXG5sZXQgc3RhcnRSb3RhdGlvbiA9IG51bGxcbmxldCBsYXN0Um90YXRpb24gPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgb25lIHBpZWNlXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xuXG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0lOQUNUSVZFXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnJvdGF0aW9uID0gMFxuICAgIHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleCA9IDBcbiAgICB0aGlzLm9uQmFza2V0ID0gZmFsc2VcblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudHMoKVxuICB9XG5cbiAgc2V0QWN0aXZlUG9zaXRpb25JbmRleCAoKSB7XG4gICAgbGV0IG5ld0luZGV4ID0gTWF0aC5mbG9vcih0aGlzLnJvdGF0aW9uICogdGhpcy5jb25maWcucG9zaXRpb25zLmxlbmd0aCAvIDM2MClcblxuICAgIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ID0gMFxuICAgIH1cblxuICAgIGlmIChuZXdJbmRleCAhPT0gdGhpcy5hY3RpdmVQb3NpdGlvbkluZGV4KSB7XG4gICAgICB0aGlzLnRleHRTZWxlY3Rpb24udXBkYXRlQWN0aXZlKG5ld0luZGV4KVxuICAgICAgdGhpcy5zZWxlY3Rvci51cGRhdGVBY3RpdmUobmV3SW5kZXgpXG4gICAgICB0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXggPSBuZXdJbmRleFxuICAgIH1cblxuICAgIFNvY2tldENsaWVudC5zZW5kKCdkYXRhJywge1xuICAgICAga2V5OiB0aGlzLmNvbmZpZy5pZCxcbiAgICAgIHZhbHVlOiB0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXhcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudHMgKCkge1xuICAgIHRoaXMuYmxvYiA9IG5ldyBCbG9iKHRoaXMueCwgdGhpcy55LCB7XG4gICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3JcbiAgICB9KVxuICAgIHRoaXMuc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IodGhpcy54LCB0aGlzLnksIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgIHBvc2l0aW9uczogdGhpcy5jb25maWcucG9zaXRpb25zXG4gICAgfSlcblxuICAgIHRoaXMudGV4dFNlbGVjdGlvbiA9IG5ldyBUZXh0U2VsZWN0aW9uKHRoaXMueCwgdGhpcy55LCB7XG4gICAgICBwb3NpdGlvbnM6IHRoaXMuY29uZmlnLnBvc2l0aW9uc1xuICAgIH0pXG5cbiAgICB0aGlzLnRleHRQaWVjZSA9IG5ldyBUZXh0UGllY2UodGhpcy54LCB0aGlzLnksIHtcbiAgICAgIG5hbWU6IHRoaXMuY29uZmlnLm5hbWVcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cyA9IFt0aGlzLmJsb2IsIHRoaXMuc2VsZWN0b3IsIHRoaXMudGV4dFNlbGVjdGlvbiwgdGhpcy50ZXh0UGllY2VdXG4gIH1cblxuICBzZXRSb3RhdGlvbiAocm90YXRpb24pIHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBzdGFydFJvdGF0aW9uKSB7XG4gICAgICBjb25zb2xlLmxvZyhzdGFydFJvdGF0aW9uKVxuICAgICAgc3RhcnRSb3RhdGlvbiA9IHRoaXMucm90YXRpb25cbiAgICAgIGxhc3RSb3RhdGlvbiA9IHJvdGF0aW9uXG4gICAgfSBlbHNlIGlmIChyb3RhdGlvbiA8IHRoaXMucm90YXRpb24gLSA1IHx8IHJvdGF0aW9uID4gdGhpcy5yb3RhdGlvbiArIDUpIHtcbiAgICAgIGxldCBkaWZmID0gc3RhcnRSb3RhdGlvbiAtIHJvdGF0aW9uXG4gICAgICB0aGlzLnJvdGF0aW9uID0gbGFzdFJvdGF0aW9uIC0gZGlmZlxuICAgICAgY29uc29sZS5sb2codGhpcy5yb3RhdGlvbilcblxuICAgICAgdGhpcy5zZXRBY3RpdmVQb3NpdGlvbkluZGV4KClcbiAgICB9XG4gIH1cblxuICBvbkRldGVjdCAoeCwgeSkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9TSE9XKSB7XG4gICAgICBUd2Vlbk1heC50byh0aGlzLCAwLjYsIHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54ID0geFxuICAgICAgdGhpcy55ID0geVxuXG4gICAgICB0aGlzLmJsb2Iuc2hvdygoKSA9PiB7XG4gICAgICAgIHRoaXMuYmxvYi5pZGxlKClcbiAgICAgICAgdGhpcy50ZXh0U2VsZWN0aW9uLnNob3codGhpcy5hY3RpdmVQb3NpdGlvbkluZGV4KVxuICAgICAgICB0aGlzLnRleHRQaWVjZS5zaG93KClcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5zaG93KHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0FDVElWRVxuICB9XG5cbiAgb25SZWxlYXNlICgpIHtcbiAgICBpZiAodGhpcy5vbkJhc2tldCkge1xuICAgICAgdGhpcy5vblRocm93KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1NIT1dcbiAgICB9XG4gIH1cblxuICBvblRocm93ICgpIHtcbiAgICB0aGlzLnNlbGVjdG9yLmhpZGUoKVxuICAgIHRoaXMudGV4dFNlbGVjdGlvbi5oaWRlKClcbiAgICB0aGlzLnRleHRQaWVjZS5oaWRlKClcbiAgICB0aGlzLmJsb2IuaGlkZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gU1RBVEVfSU5BQ1RJVkVcbiAgICB9KVxuICB9XG5cbiAgaXNBY3RpdmUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTVEFURV9BQ1RJVkVcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnVwZGF0ZSh7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbmRlcigpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zY3JpcHRzL3BpZWNlcy9QaWVjZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQWhJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})