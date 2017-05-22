webpackHotUpdate(0,{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _Detector = __webpack_require__(118);\n\nvar _Detector2 = _interopRequireDefault(_Detector);\n\nvar _Basket = __webpack_require__(68);\n\nvar _Basket2 = _interopRequireDefault(_Basket);\n\nvar _PieceManager = __webpack_require__(126);\n\nvar _PieceManager2 = _interopRequireDefault(_PieceManager);\n\nvar _Socket = __webpack_require__(128);\n\nvar _Socket2 = _interopRequireDefault(_Socket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Graphics = function () {\n  function Graphics() {\n    (0, _classCallCheck3.default)(this, Graphics);\n\n    this.createApp();\n    this.attachToDom();\n\n    // Detector\n    _Detector2.default.initialize(this.app.view);\n\n    // Elements\n    _PieceManager2.default.start(this.app);\n    _Basket2.default.start(this.app);\n\n    this.animateUiElements();\n    this.loop();\n  }\n\n  /**\n   * Create PIXI application and add it to the DOM\n   */\n\n\n  (0, _createClass3.default)(Graphics, [{\n    key: 'createApp',\n    value: function createApp() {\n      this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {\n        transparent: true,\n        antialias: true,\n        autoResize: true,\n        forceFXAA: true,\n        roundPixels: true,\n        resolution: window.devicePixelRatio || 1\n      });\n\n      window.setTimeout(function () {\n        _PieceManager2.default.pieces[0].onDetect(400, 400);\n\n        window.setTimeout(function () {\n          _PieceManager2.default.pieces[0].setRotation(160);\n          window.setTimeout(function () {\n            _PieceManager2.default.pieces[0].setRotation(200);\n            window.setTimeout(function () {\n              _PieceManager2.default.pieces[0].setRotation(240);\n              window.setTimeout(function () {\n                _PieceManager2.default.pieces[0].setRotation(280);\n                window.setTimeout(function () {\n                  _PieceManager2.default.pieces[0].setRotation(320);\n                }, 1000);\n              }, 1000);\n            }, 1000);\n          }, 1000);\n        }, 1000);\n      }, 2000);\n\n      _Socket2.default.send('test', {\n        data: 5\n      });\n    }\n  }, {\n    key: 'attachToDom',\n    value: function attachToDom() {\n      var domElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;\n\n      domElement.appendChild(this.app.view);\n    }\n  }, {\n    key: 'loop',\n    value: function loop() {\n      this.app.ticker.add(function () {\n        _PieceManager2.default.update();\n        _Basket2.default.update();\n\n        _PieceManager2.default.render();\n        _Basket2.default.render();\n      });\n    }\n  }, {\n    key: 'animateUiElements',\n    value: function animateUiElements() {\n      // let chars\n      new TimelineMax()\n      /*\n      .from('.cursor', 0.7, {\n        autoAlpha: 0\n      })\n      Array.from(document.querySelectorAll('.indication span')).forEach((span) => {\n      chars = new SplitText(span, {\n        type: 'chars'\n      }).chars\n       tl.staggerFrom(chars, 0.2, {\n        y: '+=30',\n        autoAlpha: 0,\n        ease: Elastic.easeOut.config(0.8, 0.3)\n      }, 0.03, 1)\n      .staggerTo(chars, 0.5, {\n        y: '-=30',\n        autoAlpha: 0\n      }, 0.03, 4)\n      })\n      tl.to('.cursor', 0.7, {\n      autoAlpha: 0\n      })\n      */\n      .call(function () {\n        var overlay = document.getElementsByClassName('overlay')[0];\n        overlay.parentElement.removeChild(overlay);\n      });\n    }\n  }]);\n  return Graphics;\n}();\n\nexports.default = Graphics;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL2dyYXBoaWNzL2luZGV4LmpzPzY2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERldGVjdG9yIGZyb20gJy4uL2RldGVjdG9yL0RldGVjdG9yJ1xuaW1wb3J0IEJhc2tldCBmcm9tICcuLi9lbGVtZW50cy9CYXNrZXQnXG5pbXBvcnQgUGllY2VNYW5hZ2VyIGZyb20gJy4uL3BpZWNlcy9QaWVjZU1hbmFnZXInXG5pbXBvcnQgU29ja2V0IGZyb20gJy4uL3V0aWxzL1NvY2tldCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jcmVhdGVBcHAoKVxuICAgIHRoaXMuYXR0YWNoVG9Eb20oKVxuXG4gICAgLy8gRGV0ZWN0b3JcbiAgICBEZXRlY3Rvci5pbml0aWFsaXplKHRoaXMuYXBwLnZpZXcpXG5cbiAgICAvLyBFbGVtZW50c1xuICAgIFBpZWNlTWFuYWdlci5zdGFydCh0aGlzLmFwcClcbiAgICBCYXNrZXQuc3RhcnQodGhpcy5hcHApXG5cbiAgICB0aGlzLmFuaW1hdGVVaUVsZW1lbnRzKClcbiAgICB0aGlzLmxvb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBQSVhJIGFwcGxpY2F0aW9uIGFuZCBhZGQgaXQgdG8gdGhlIERPTVxuICAgKi9cbiAgY3JlYXRlQXBwICgpIHtcbiAgICB0aGlzLmFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHtcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgIGZvcmNlRlhBQTogdHJ1ZSxcbiAgICAgIHJvdW5kUGl4ZWxzOiB0cnVlLFxuICAgICAgcmVzb2x1dGlvbjogd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgIH0pXG5cbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBQaWVjZU1hbmFnZXIucGllY2VzWzBdLm9uRGV0ZWN0KDQwMCwgNDAwKVxuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFBpZWNlTWFuYWdlci5waWVjZXNbMF0uc2V0Um90YXRpb24oMTYwKVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgUGllY2VNYW5hZ2VyLnBpZWNlc1swXS5zZXRSb3RhdGlvbigyMDApXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgUGllY2VNYW5hZ2VyLnBpZWNlc1swXS5zZXRSb3RhdGlvbigyNDApXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIFBpZWNlTWFuYWdlci5waWVjZXNbMF0uc2V0Um90YXRpb24oMjgwKVxuICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgUGllY2VNYW5hZ2VyLnBpZWNlc1swXS5zZXRSb3RhdGlvbigzMjApXG4gICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9LCAxMDAwKVxuICAgIH0sIDIwMDApXG5cbiAgICBTb2NrZXQuc2VuZCgndGVzdCcsIHtcbiAgICAgIGRhdGE6IDVcbiAgICB9KVxuICB9XG5cbiAgYXR0YWNoVG9Eb20gKGRvbUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KVxuICB9XG5cbiAgbG9vcCAoKSB7XG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoKSA9PiB7XG4gICAgICBQaWVjZU1hbmFnZXIudXBkYXRlKClcbiAgICAgIEJhc2tldC51cGRhdGUoKVxuXG4gICAgICBQaWVjZU1hbmFnZXIucmVuZGVyKClcbiAgICAgIEJhc2tldC5yZW5kZXIoKVxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlVWlFbGVtZW50cyAoKSB7XG4gICAgLy8gbGV0IGNoYXJzXG4gICAgbmV3IFRpbWVsaW5lTWF4KClcbiAgICAgIC8qXG4gICAgICAuZnJvbSgnLmN1cnNvcicsIDAuNywge1xuICAgICAgICBhdXRvQWxwaGE6IDBcbiAgICAgIH0pXG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpY2F0aW9uIHNwYW4nKSkuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgY2hhcnMgPSBuZXcgU3BsaXRUZXh0KHNwYW4sIHtcbiAgICAgICAgdHlwZTogJ2NoYXJzJ1xuICAgICAgfSkuY2hhcnNcblxuICAgICAgdGwuc3RhZ2dlckZyb20oY2hhcnMsIDAuMiwge1xuICAgICAgICB5OiAnKz0zMCcsXG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZWFzZTogRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygwLjgsIDAuMylcbiAgICAgIH0sIDAuMDMsIDEpXG4gICAgICAuc3RhZ2dlclRvKGNoYXJzLCAwLjUsIHtcbiAgICAgICAgeTogJy09MzAnLFxuICAgICAgICBhdXRvQWxwaGE6IDBcbiAgICAgIH0sIDAuMDMsIDQpXG4gICAgfSlcblxuICAgIHRsLnRvKCcuY3Vyc29yJywgMC43LCB7XG4gICAgICBhdXRvQWxwaGE6IDBcbiAgICB9KVxuICAgICovXG4gICAgLmNhbGwoKCkgPT4ge1xuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdmVybGF5JylbMF1cbiAgICAgIG92ZXJsYXkucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvdmVybGF5KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy9ncmFwaGljcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFwR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})