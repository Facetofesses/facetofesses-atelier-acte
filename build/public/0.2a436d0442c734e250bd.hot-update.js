webpackHotUpdate(0,{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _EventTypes = __webpack_require__(45);\n\nvar _config = __webpack_require__(116);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _Piece = __webpack_require__(126);\n\nvar _Piece2 = _interopRequireDefault(_Piece);\n\nvar _index = __webpack_require__(46);\n\nvar _Basket = __webpack_require__(68);\n\nvar _Basket2 = _interopRequireDefault(_Basket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PieceManager = function () {\n  function PieceManager() {\n    (0, _classCallCheck3.default)(this, PieceManager);\n  }\n\n  (0, _createClass3.default)(PieceManager, [{\n    key: 'start',\n    value: function start(pixiApp) {\n      this.createPieces(pixiApp);\n      this.initializeEvents();\n    }\n  }, {\n    key: 'initializeEvents',\n    value: function initializeEvents() {\n      var bindedOnPieceTouch = this.onPieceTouch.bind(this);\n      var bindedOnPieceMove = this.onPieceMove.bind(this);\n      var bindedOnPieceRotate = this.onPieceRotate.bind(this);\n      var bindedOnPieceRelease = this.onPieceRelease.bind(this);\n\n      window.addEventListener(_EventTypes.PIECE_TOUCH, bindedOnPieceTouch);\n      window.addEventListener(_EventTypes.PIECE_MOVE, bindedOnPieceMove);\n      window.addEventListener(_EventTypes.PIECE_ROTATE, bindedOnPieceRotate);\n      window.addEventListener(_EventTypes.PIECE_RELEASE, bindedOnPieceRelease);\n    }\n  }, {\n    key: 'createPieces',\n    value: function createPieces(pixiApp) {\n      var _this = this;\n\n      this.pieces = [];\n\n      _config2.default.pieces.forEach(function (pieceConfig) {\n        // Create piece\n        var piece = new _Piece2.default(pieceConfig);\n        piece.elements.forEach(function (element) {\n          pixiApp.stage.addChild(element.getGraphics());\n        });\n        _this.pieces.push(piece);\n      });\n    }\n  }, {\n    key: 'onPieceTouch',\n    value: function onPieceTouch(e) {\n      var touch = e.detail.touch;\n      this.pieces.forEach(function (piece) {\n        var match = touch.lengths.every(function (l) {\n          return (0, _index.near)(l, piece.config.matrix[0]) || (0, _index.near)(l, piece.config.matrix[2]) || (0, _index.near)(l, piece.config.matrix[2]);\n        });\n        if (match) {\n          piece.onDetect(touch.x, touch.y);\n          return;\n        }\n      });\n    }\n  }, {\n    key: 'onPieceMove',\n    value: function onPieceMove(e) {\n      var touch = e.detail.touch;\n      var to = {};\n\n      var distance = Math.sqrt(Math.pow(_Basket2.default.x - touch.x, 2) + Math.pow(_Basket2.default.y - touch.y, 2));\n\n      var piece = this.pieces.find(function (p) {\n        return p.isActive();\n      });\n      if (!piece) return;\n\n      if (distance < 200) {\n        to = {\n          x: _Basket2.default.x,\n          y: _Basket2.default.y\n        };\n        piece.onBasket = true;\n      } else {\n        to = {\n          x: touch.x,\n          y: touch.y\n        };\n        piece.onBasket = false;\n      }\n\n      TweenMax.to(piece, 0.2, to);\n    }\n  }, {\n    key: 'onPieceRotate',\n    value: function onPieceRotate(e) {\n      var piece = this.pieces.find(function (piece) {\n        return piece.isActive();\n      });\n      if (piece) {\n        piece.setRotation(e.detail.rotation);\n      }\n    }\n  }, {\n    key: 'onPieceRelease',\n    value: function onPieceRelease() {\n      _Basket2.default.hide();\n      var piece = this.pieces.find(function (p) {\n        return p.isActive();\n      });\n      if (piece) {\n        piece.onRelease();\n      }\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      this.pieces.forEach(function (piece) {\n        return piece.update();\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      this.pieces.forEach(function (piece) {\n        return piece.render();\n      });\n    }\n  }]);\n  return PieceManager;\n}();\n\nexports.default = new PieceManager();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL3BpZWNlcy9QaWVjZU1hbmFnZXIuanM/OWMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQSUVDRV9UT1VDSCxcbiAgUElFQ0VfTU9WRSxcbiAgUElFQ0VfUk9UQVRFLFxuICBQSUVDRV9SRUxFQVNFXG59IGZyb20gJy4uL3V0aWxzL0V2ZW50VHlwZXMnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xuaW1wb3J0IFBpZWNlIGZyb20gJy4uL3BpZWNlcy9QaWVjZSdcbmltcG9ydCB7bmVhcn0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgQmFza2V0IGZyb20gJy4uL2VsZW1lbnRzL0Jhc2tldCdcblxuY2xhc3MgUGllY2VNYW5hZ2VyIHtcbiAgc3RhcnQgKHBpeGlBcHApIHtcbiAgICB0aGlzLmNyZWF0ZVBpZWNlcyhwaXhpQXBwKVxuICAgIHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpXG4gIH1cblxuICBpbml0aWFsaXplRXZlbnRzICgpIHtcbiAgICBjb25zdCBiaW5kZWRPblBpZWNlVG91Y2ggPSB0aGlzLm9uUGllY2VUb3VjaC5iaW5kKHRoaXMpXG4gICAgY29uc3QgYmluZGVkT25QaWVjZU1vdmUgPSB0aGlzLm9uUGllY2VNb3ZlLmJpbmQodGhpcylcbiAgICBjb25zdCBiaW5kZWRPblBpZWNlUm90YXRlID0gdGhpcy5vblBpZWNlUm90YXRlLmJpbmQodGhpcylcbiAgICBjb25zdCBiaW5kZWRPblBpZWNlUmVsZWFzZSA9IHRoaXMub25QaWVjZVJlbGVhc2UuYmluZCh0aGlzKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUElFQ0VfVE9VQ0gsIGJpbmRlZE9uUGllY2VUb3VjaClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihQSUVDRV9NT1ZFLCBiaW5kZWRPblBpZWNlTW92ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihQSUVDRV9ST1RBVEUsIGJpbmRlZE9uUGllY2VSb3RhdGUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUElFQ0VfUkVMRUFTRSwgYmluZGVkT25QaWVjZVJlbGVhc2UpXG4gIH1cblxuICBjcmVhdGVQaWVjZXMgKHBpeGlBcHApIHtcbiAgICB0aGlzLnBpZWNlcyA9IFtdXG5cbiAgICBjb25maWcucGllY2VzLmZvckVhY2goKHBpZWNlQ29uZmlnKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgcGllY2VcbiAgICAgIGNvbnN0IHBpZWNlID0gbmV3IFBpZWNlKHBpZWNlQ29uZmlnKVxuICAgICAgcGllY2UuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBwaXhpQXBwLnN0YWdlLmFkZENoaWxkKGVsZW1lbnQuZ2V0R3JhcGhpY3MoKSlcbiAgICAgIH0pXG4gICAgICB0aGlzLnBpZWNlcy5wdXNoKHBpZWNlKVxuICAgIH0pXG4gIH1cblxuICBvblBpZWNlVG91Y2ggKGUpIHtcbiAgICBjb25zdCB0b3VjaCA9IGUuZGV0YWlsLnRvdWNoXG4gICAgdGhpcy5waWVjZXMuZm9yRWFjaCgocGllY2UpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdG91Y2gubGVuZ3Rocy5ldmVyeShsID0+IG5lYXIobCwgcGllY2UuY29uZmlnLm1hdHJpeFswXSkgfHwgbmVhcihsLCBwaWVjZS5jb25maWcubWF0cml4WzJdKSB8fCBuZWFyKGwsIHBpZWNlLmNvbmZpZy5tYXRyaXhbMl0pKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHBpZWNlLm9uRGV0ZWN0KHRvdWNoLngsIHRvdWNoLnkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBvblBpZWNlTW92ZSAoZSkge1xuICAgIGNvbnN0IHRvdWNoID0gZS5kZXRhaWwudG91Y2hcbiAgICBsZXQgdG8gPSB7fVxuXG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coQmFza2V0LnggLSB0b3VjaC54LCAyKSArIE1hdGgucG93KEJhc2tldC55IC0gdG91Y2gueSwgMikpXG5cbiAgICBjb25zdCBwaWVjZSA9IHRoaXMucGllY2VzLmZpbmQocCA9PiBwLmlzQWN0aXZlKCkpXG4gICAgaWYgKCFwaWVjZSkgcmV0dXJuXG5cbiAgICBpZiAoZGlzdGFuY2UgPCAyMDApIHtcbiAgICAgIHRvID0ge1xuICAgICAgICB4OiBCYXNrZXQueCxcbiAgICAgICAgeTogQmFza2V0LnlcbiAgICAgIH1cbiAgICAgIHBpZWNlLm9uQmFza2V0ID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0byA9IHtcbiAgICAgICAgeDogdG91Y2gueCxcbiAgICAgICAgeTogdG91Y2gueVxuICAgICAgfVxuICAgICAgcGllY2Uub25CYXNrZXQgPSBmYWxzZVxuICAgIH1cblxuICAgIFR3ZWVuTWF4LnRvKHBpZWNlLCAwLjIsIHRvKVxuICB9XG5cbiAgb25QaWVjZVJvdGF0ZSAoZSkge1xuICAgIGNvbnN0IHBpZWNlID0gdGhpcy5waWVjZXMuZmluZChwaWVjZSA9PiBwaWVjZS5pc0FjdGl2ZSgpKVxuICAgIGlmIChwaWVjZSkge1xuICAgICAgcGllY2Uuc2V0Um90YXRpb24oZS5kZXRhaWwucm90YXRpb24pXG4gICAgfVxuICB9XG5cbiAgb25QaWVjZVJlbGVhc2UgKCkge1xuICAgIEJhc2tldC5oaWRlKClcbiAgICBjb25zdCBwaWVjZSA9IHRoaXMucGllY2VzLmZpbmQocCA9PiBwLmlzQWN0aXZlKCkpXG4gICAgaWYgKHBpZWNlKSB7XG4gICAgICBwaWVjZS5vblJlbGVhc2UoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5waWVjZXMuZm9yRWFjaChwaWVjZSA9PiBwaWVjZS51cGRhdGUoKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdGhpcy5waWVjZXMuZm9yRWFjaChwaWVjZSA9PiBwaWVjZS5yZW5kZXIoKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUGllY2VNYW5hZ2VyKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy9waWVjZXMvUGllY2VNYW5hZ2VyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})