webpackHotUpdate(0,{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _Blob = __webpack_require__(122);\n\nvar _Blob2 = _interopRequireDefault(_Blob);\n\nvar _Selector = __webpack_require__(123);\n\nvar _Selector2 = _interopRequireDefault(_Selector);\n\nvar _TextSelection = __webpack_require__(125);\n\nvar _TextSelection2 = _interopRequireDefault(_TextSelection);\n\nvar _TextPiece = __webpack_require__(124);\n\nvar _TextPiece2 = _interopRequireDefault(_TextPiece);\n\nvar _SocketClient = __webpack_require__(46);\n\nvar _SocketClient2 = _interopRequireDefault(_SocketClient);\n\nvar _SoundHelper = __webpack_require__(47);\n\nvar _SoundHelper2 = _interopRequireDefault(_SoundHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar STATE_INACTIVE = 'STATE_INACTIVE';\nvar STATE_SHOW = 'STATE_SHOW';\nvar STATE_ACTIVE = 'STATE_ACTIVE';\n\nvar startRotation = null;\nvar lastRotation = null;\n\nvar Piece = function () {\n  /**\n   * Represents one piece\n   * @param config\n   */\n  function Piece(config) {\n    (0, _classCallCheck3.default)(this, Piece);\n\n    this.config = config;\n\n    this.state = STATE_INACTIVE;\n    this.x = 0;\n    this.y = 0;\n    this.rotation = 0;\n    this.activePositionIndex = 0;\n    this.onBasket = false;\n\n    this.createElements();\n  }\n\n  (0, _createClass3.default)(Piece, [{\n    key: 'setActivePositionIndex',\n    value: function setActivePositionIndex() {\n      var newIndex = Math.floor(this.rotation * this.config.positions.length / 360);\n\n      if (newIndex < 0 || newIndex > this.config.positions.length - 1) {\n        newIndex = 0;\n      }\n\n      if (newIndex !== this.activePositionIndex) {\n        this.textSelection.updateActive(newIndex);\n        this.selector.updateActive(newIndex);\n        this.activePositionIndex = newIndex;\n\n        this.sendSocketDatas();\n      }\n    }\n  }, {\n    key: 'sendSocketDatas',\n    value: function sendSocketDatas() {\n      _SocketClient2.default.send('data', {\n        key: this.config.id,\n        value: this.activePositionIndex\n      });\n    }\n  }, {\n    key: 'createElements',\n    value: function createElements() {\n      this.blob = new _Blob2.default(this.x, this.y, {\n        color: this.config.color\n      });\n      this.selector = new _Selector2.default(this.x, this.y, {\n        color: this.config.color,\n        positions: this.config.positions\n      });\n\n      this.textSelection = new _TextSelection2.default(this.x, this.y, {\n        positions: this.config.positions\n      });\n\n      this.textPiece = new _TextPiece2.default(this.x, this.y, {\n        name: this.config.name\n      });\n\n      this.elements = [this.blob, this.selector, this.textSelection, this.textPiece];\n    }\n  }, {\n    key: 'setRotation',\n    value: function setRotation(type, rotation) {\n      switch (type) {\n        case 'rotatestart':\n          lastRotation = this.rotation;\n          startRotation = rotation;\n          break;\n        case 'rotateend':\n          lastRotation = this.rotation;\n          break;\n        case 'rotate':\n          var diff = startRotation - rotation;\n          this.rotation = lastRotation - diff;\n          this.setActivePositionIndex();\n          break;\n      }\n    }\n  }, {\n    key: 'onDetect',\n    value: function onDetect(x, y) {\n      var _this = this;\n\n      if (this.state === STATE_SHOW) {\n        TweenMax.to(this, 0.6, {\n          x: x,\n          y: y\n        });\n      } else {\n        _SoundHelper2.default.play('test');\n        this.x = x;\n        this.y = y;\n\n        this.blob.show(function () {\n          _this.blob.idle();\n          _this.textSelection.show(_this.activePositionIndex);\n          _this.textPiece.show();\n          _this.selector.show(_this.activePositionIndex);\n        });\n      }\n\n      this.state = STATE_ACTIVE;\n    }\n  }, {\n    key: 'onRelease',\n    value: function onRelease() {\n      console.log('RELEASE', this.onBasket);\n      if (this.onBasket) {\n        this.onThrow();\n      } else {\n        this.state = STATE_SHOW;\n      }\n    }\n  }, {\n    key: 'onThrow',\n    value: function onThrow() {\n      var _this2 = this;\n\n      this.selector.hide();\n      this.textSelection.hide();\n      this.textPiece.hide();\n      this.blob.hide(function () {\n        _this2.state = STATE_INACTIVE;\n      });\n    }\n  }, {\n    key: 'isActive',\n    value: function isActive() {\n      return this.state === STATE_ACTIVE;\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      var _this3 = this;\n\n      this.elements.forEach(function (element) {\n        element.update({\n          x: _this3.x,\n          y: _this3.y\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.isActive()) {\n        this.elements.forEach(function (element) {\n          element.render();\n        });\n      }\n    }\n  }]);\n  return Piece;\n}();\n\nexports.default = Piece;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3BpZWNlcy9QaWVjZS5qcz8zYWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9iIGZyb20gJy4uL2VsZW1lbnRzL0Jsb2InXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vZWxlbWVudHMvU2VsZWN0b3InXG5pbXBvcnQgVGV4dFNlbGVjdGlvbiBmcm9tICcuLi9lbGVtZW50cy9UZXh0U2VsZWN0aW9uJ1xuaW1wb3J0IFRleHRQaWVjZSBmcm9tICcuLi9lbGVtZW50cy9UZXh0UGllY2UnXG5pbXBvcnQgU29ja2V0Q2xpZW50IGZyb20gJy4uL3V0aWxzL1NvY2tldENsaWVudCdcbmltcG9ydCBTb3VuZEhlbHBlciBmcm9tICcuLi91dGlscy9Tb3VuZEhlbHBlcidcblxuY29uc3QgU1RBVEVfSU5BQ1RJVkUgPSAnU1RBVEVfSU5BQ1RJVkUnXG5jb25zdCBTVEFURV9TSE9XID0gJ1NUQVRFX1NIT1cnXG5jb25zdCBTVEFURV9BQ1RJVkUgPSAnU1RBVEVfQUNUSVZFJ1xuXG5sZXQgc3RhcnRSb3RhdGlvbiA9IG51bGxcbmxldCBsYXN0Um90YXRpb24gPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgb25lIHBpZWNlXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xuXG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0lOQUNUSVZFXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnJvdGF0aW9uID0gMFxuICAgIHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleCA9IDBcbiAgICB0aGlzLm9uQmFza2V0ID0gZmFsc2VcblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudHMoKVxuICB9XG5cbiAgc2V0QWN0aXZlUG9zaXRpb25JbmRleCAoKSB7XG4gICAgbGV0IG5ld0luZGV4ID0gTWF0aC5mbG9vcih0aGlzLnJvdGF0aW9uICogdGhpcy5jb25maWcucG9zaXRpb25zLmxlbmd0aCAvIDM2MClcblxuICAgIGlmIChuZXdJbmRleCA8IDAgfHwgbmV3SW5kZXggPiB0aGlzLmNvbmZpZy5wb3NpdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgbmV3SW5kZXggPSAwXG4gICAgfVxuXG4gICAgaWYgKG5ld0luZGV4ICE9PSB0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXgpIHtcbiAgICAgIHRoaXMudGV4dFNlbGVjdGlvbi51cGRhdGVBY3RpdmUobmV3SW5kZXgpXG4gICAgICB0aGlzLnNlbGVjdG9yLnVwZGF0ZUFjdGl2ZShuZXdJbmRleClcbiAgICAgIHRoaXMuYWN0aXZlUG9zaXRpb25JbmRleCA9IG5ld0luZGV4XG5cbiAgICAgIHRoaXMuc2VuZFNvY2tldERhdGFzKClcbiAgICB9XG4gIH1cblxuICBzZW5kU29ja2V0RGF0YXMgKCkge1xuICAgICAgU29ja2V0Q2xpZW50LnNlbmQoJ2RhdGEnLCB7XG4gICAgICAgIGtleTogdGhpcy5jb25maWcuaWQsXG4gICAgICAgIHZhbHVlOiB0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXhcbiAgICAgIH0pXG4gIH1cblxuICBjcmVhdGVFbGVtZW50cyAoKSB7XG4gICAgdGhpcy5ibG9iID0gbmV3IEJsb2IodGhpcy54LCB0aGlzLnksIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvclxuICAgIH0pXG4gICAgdGhpcy5zZWxlY3RvciA9IG5ldyBTZWxlY3Rvcih0aGlzLngsIHRoaXMueSwge1xuICAgICAgY29sb3I6IHRoaXMuY29uZmlnLmNvbG9yLFxuICAgICAgcG9zaXRpb25zOiB0aGlzLmNvbmZpZy5wb3NpdGlvbnNcbiAgICB9KVxuXG4gICAgdGhpcy50ZXh0U2VsZWN0aW9uID0gbmV3IFRleHRTZWxlY3Rpb24odGhpcy54LCB0aGlzLnksIHtcbiAgICAgIHBvc2l0aW9uczogdGhpcy5jb25maWcucG9zaXRpb25zXG4gICAgfSlcblxuICAgIHRoaXMudGV4dFBpZWNlID0gbmV3IFRleHRQaWVjZSh0aGlzLngsIHRoaXMueSwge1xuICAgICAgbmFtZTogdGhpcy5jb25maWcubmFtZVxuICAgIH0pXG5cbiAgICB0aGlzLmVsZW1lbnRzID0gW3RoaXMuYmxvYiwgdGhpcy5zZWxlY3RvciwgdGhpcy50ZXh0U2VsZWN0aW9uLCB0aGlzLnRleHRQaWVjZV1cbiAgfVxuXG4gIHNldFJvdGF0aW9uICh0eXBlLCByb3RhdGlvbikge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAncm90YXRlc3RhcnQnOlxuICAgICAgICBsYXN0Um90YXRpb24gPSB0aGlzLnJvdGF0aW9uXG4gICAgICAgIHN0YXJ0Um90YXRpb24gPSByb3RhdGlvblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncm90YXRlZW5kJzpcbiAgICAgICAgbGFzdFJvdGF0aW9uID0gdGhpcy5yb3RhdGlvblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgbGV0IGRpZmYgPSBzdGFydFJvdGF0aW9uIC0gcm90YXRpb25cbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IGxhc3RSb3RhdGlvbiAtIGRpZmZcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQb3NpdGlvbkluZGV4KClcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBvbkRldGVjdCAoeCwgeSkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9TSE9XKSB7XG4gICAgICBUd2Vlbk1heC50byh0aGlzLCAwLjYsIHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgU291bmRIZWxwZXIucGxheSgndGVzdCcpXG4gICAgICB0aGlzLnggPSB4XG4gICAgICB0aGlzLnkgPSB5XG5cbiAgICAgIHRoaXMuYmxvYi5zaG93KCgpID0+IHtcbiAgICAgICAgdGhpcy5ibG9iLmlkbGUoKVxuICAgICAgICB0aGlzLnRleHRTZWxlY3Rpb24uc2hvdyh0aGlzLmFjdGl2ZVBvc2l0aW9uSW5kZXgpXG4gICAgICAgIHRoaXMudGV4dFBpZWNlLnNob3coKVxuICAgICAgICB0aGlzLnNlbGVjdG9yLnNob3codGhpcy5hY3RpdmVQb3NpdGlvbkluZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfQUNUSVZFXG4gIH1cblxuICBvblJlbGVhc2UgKCkge1xuICAgIGNvbnNvbGUubG9nKCdSRUxFQVNFJywgdGhpcy5vbkJhc2tldClcbiAgICBpZiAodGhpcy5vbkJhc2tldCkge1xuICAgICAgdGhpcy5vblRocm93KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1NIT1dcbiAgICB9XG4gIH1cblxuICBvblRocm93ICgpIHtcbiAgICB0aGlzLnNlbGVjdG9yLmhpZGUoKVxuICAgIHRoaXMudGV4dFNlbGVjdGlvbi5oaWRlKClcbiAgICB0aGlzLnRleHRQaWVjZS5oaWRlKClcbiAgICB0aGlzLmJsb2IuaGlkZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gU1RBVEVfSU5BQ1RJVkVcbiAgICB9KVxuICB9XG5cbiAgaXNBY3RpdmUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTVEFURV9BQ1RJVkVcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnVwZGF0ZSh7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbmRlcigpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zY3JpcHRzL3BpZWNlcy9QaWVjZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXpJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})