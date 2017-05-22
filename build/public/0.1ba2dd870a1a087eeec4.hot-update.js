webpackHotUpdate(0,{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _from = __webpack_require__(70);\n\nvar _from2 = _interopRequireDefault(_from);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _Detector = __webpack_require__(119);\n\nvar _Detector2 = _interopRequireDefault(_Detector);\n\nvar _Basket = __webpack_require__(69);\n\nvar _Basket2 = _interopRequireDefault(_Basket);\n\nvar _PieceManager = __webpack_require__(127);\n\nvar _PieceManager2 = _interopRequireDefault(_PieceManager);\n\nvar _index = __webpack_require__(36);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Graphics = function () {\n  function Graphics() {\n    (0, _classCallCheck3.default)(this, Graphics);\n\n    this.createApp();\n    this.attachToDom((0, _index.selectClass)('tablet'));\n\n    // Detector\n    _Detector2.default.initialize(this.app.view);\n\n    // Elements\n    _PieceManager2.default.start(this.app);\n    _Basket2.default.start(this.app);\n\n    window.addEventListener('click', this.animateUiElements.bind(this));\n    window.addEventListener('touchstart', this.animateUiElements.bind(this));\n  }\n\n  /**\n   * Create PIXI application and add it to the DOM\n   */\n\n\n  (0, _createClass3.default)(Graphics, [{\n    key: 'createApp',\n    value: function createApp() {\n      this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {\n        transparent: true,\n        antialias: true,\n        autoResize: true,\n        forceFXAA: true,\n        roundPixels: true,\n        resolution: window.devicePixelRatio || 1\n      });\n\n      // window.setTimeout(() => {\n      //   PieceManager.pieces[0].onDetect(400, 400)\n      //\n      //   window.setTimeout(() => {\n      //     PieceManager.pieces[0].setRotation(160)\n      //     window.setTimeout(() => {\n      //       PieceManager.pieces[0].setRotation(200)\n      //       window.setTimeout(() => {\n      //         PieceManager.pieces[0].setRotation(240)\n      //         window.setTimeout(() => {\n      //           PieceManager.pieces[0].setRotation(280)\n      //           window.setTimeout(() => {\n      //             PieceManager.pieces[0].setRotation(320)\n      //           }, 1000)\n      //         }, 1000)\n      //       }, 1000)\n      //     }, 1000)\n      //   }, 1000)\n      // }, 2000)\n    }\n  }, {\n    key: 'attachToDom',\n    value: function attachToDom() {\n      var domElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;\n\n      domElement.appendChild(this.app.view);\n    }\n  }, {\n    key: 'loop',\n    value: function loop() {\n      this.app.ticker.add(function () {\n        _PieceManager2.default.update();\n        _Basket2.default.update();\n\n        _PieceManager2.default.render();\n        _Basket2.default.render();\n      });\n    }\n  }, {\n    key: 'animateUiElements',\n    value: function animateUiElements() {\n      var _this = this;\n\n      // let chars\n      var tl = new TimelineMax().from('.cursor', 0.7, {\n        autoAlpha: 0\n      });\n\n      (0, _from2.default)(document.querySelectorAll('.indication span')).forEach(function (span) {\n        chars = new SplitText(span, {\n          type: 'chars'\n        }).chars;\n\n        tl.staggerFrom(chars, 0.2, {\n          y: '+=30',\n          autoAlpha: 0,\n          ease: Elastic.easeOut.config(0.8, 0.3)\n        }, 0.03, 1).staggerTo(chars, 0.5, {\n          y: '-=30',\n          autoAlpha: 0\n        }, 0.03, 4);\n      });\n\n      tl.to('.cursor', 0.7, {\n        autoAlpha: 0\n      }).call(function () {\n        var overlay = document.getElementsByClassName('overlay')[0];\n        overlay.parentElement.removeChild(overlay);\n        _this.loop();\n      });\n    }\n  }]);\n  return Graphics;\n}();\n\nexports.default = Graphics;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL2dyYXBoaWNzL2luZGV4LmpzPzY2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERldGVjdG9yIGZyb20gJy4uL2RldGVjdG9yL0RldGVjdG9yJ1xuaW1wb3J0IEJhc2tldCBmcm9tICcuLi9lbGVtZW50cy9CYXNrZXQnXG5pbXBvcnQgUGllY2VNYW5hZ2VyIGZyb20gJy4uL3BpZWNlcy9QaWVjZU1hbmFnZXInXG5pbXBvcnQge1xuICBzZWxlY3RDbGFzc1xufSBmcm9tICcuLi91dGlscy9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jcmVhdGVBcHAoKVxuICAgIHRoaXMuYXR0YWNoVG9Eb20oc2VsZWN0Q2xhc3MoJ3RhYmxldCcpKVxuXG4gICAgLy8gRGV0ZWN0b3JcbiAgICBEZXRlY3Rvci5pbml0aWFsaXplKHRoaXMuYXBwLnZpZXcpXG5cbiAgICAvLyBFbGVtZW50c1xuICAgIFBpZWNlTWFuYWdlci5zdGFydCh0aGlzLmFwcClcbiAgICBCYXNrZXQuc3RhcnQodGhpcy5hcHApXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFuaW1hdGVVaUVsZW1lbnRzLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmFuaW1hdGVVaUVsZW1lbnRzLmJpbmQodGhpcykpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFBJWEkgYXBwbGljYXRpb24gYW5kIGFkZCBpdCB0byB0aGUgRE9NXG4gICAqL1xuICBjcmVhdGVBcHAgKCkge1xuICAgIHRoaXMuYXBwID0gbmV3IFBJWEkuQXBwbGljYXRpb24od2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwge1xuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgICAgZm9yY2VGWEFBOiB0cnVlLFxuICAgICAgcm91bmRQaXhlbHM6IHRydWUsXG4gICAgICByZXNvbHV0aW9uOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgfSlcblxuICAgIC8vIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIFBpZWNlTWFuYWdlci5waWVjZXNbMF0ub25EZXRlY3QoNDAwLCA0MDApXG4gICAgLy9cbiAgICAvLyAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgUGllY2VNYW5hZ2VyLnBpZWNlc1swXS5zZXRSb3RhdGlvbigxNjApXG4gICAgLy8gICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICBQaWVjZU1hbmFnZXIucGllY2VzWzBdLnNldFJvdGF0aW9uKDIwMClcbiAgICAvLyAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBQaWVjZU1hbmFnZXIucGllY2VzWzBdLnNldFJvdGF0aW9uKDI0MClcbiAgICAvLyAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgUGllY2VNYW5hZ2VyLnBpZWNlc1swXS5zZXRSb3RhdGlvbigyODApXG4gICAgLy8gICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBQaWVjZU1hbmFnZXIucGllY2VzWzBdLnNldFJvdGF0aW9uKDMyMClcbiAgICAvLyAgICAgICAgICAgfSwgMTAwMClcbiAgICAvLyAgICAgICAgIH0sIDEwMDApXG4gICAgLy8gICAgICAgfSwgMTAwMClcbiAgICAvLyAgICAgfSwgMTAwMClcbiAgICAvLyAgIH0sIDEwMDApXG4gICAgLy8gfSwgMjAwMClcbiAgfVxuXG4gIGF0dGFjaFRvRG9tIChkb21FbGVtZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldylcbiAgfVxuXG4gIGxvb3AgKCkge1xuICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKCkgPT4ge1xuICAgICAgUGllY2VNYW5hZ2VyLnVwZGF0ZSgpXG4gICAgICBCYXNrZXQudXBkYXRlKClcblxuICAgICAgUGllY2VNYW5hZ2VyLnJlbmRlcigpXG4gICAgICBCYXNrZXQucmVuZGVyKClcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZVVpRWxlbWVudHMgKCkge1xuICAgIC8vIGxldCBjaGFyc1xuICAgIGxldCB0bCA9IG5ldyBUaW1lbGluZU1heCgpXG4gICAgICAuZnJvbSgnLmN1cnNvcicsIDAuNywge1xuICAgICAgICBhdXRvQWxwaGE6IDBcbiAgICAgIH0pXG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpY2F0aW9uIHNwYW4nKSkuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgY2hhcnMgPSBuZXcgU3BsaXRUZXh0KHNwYW4sIHtcbiAgICAgICAgdHlwZTogJ2NoYXJzJ1xuICAgICAgfSkuY2hhcnNcblxuICAgICAgdGwuc3RhZ2dlckZyb20oY2hhcnMsIDAuMiwge1xuICAgICAgICB5OiAnKz0zMCcsXG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZWFzZTogRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygwLjgsIDAuMylcbiAgICAgIH0sIDAuMDMsIDEpXG4gICAgICAuc3RhZ2dlclRvKGNoYXJzLCAwLjUsIHtcbiAgICAgICAgeTogJy09MzAnLFxuICAgICAgICBhdXRvQWxwaGE6IDBcbiAgICAgIH0sIDAuMDMsIDQpXG4gICAgfSlcblxuICAgIHRsLnRvKCcuY3Vyc29yJywgMC43LCB7XG4gICAgICBhdXRvQWxwaGE6IDBcbiAgICB9KVxuICAgIC5jYWxsKCgpID0+IHtcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3ZlcmxheScpWzBdXG4gICAgICBvdmVybGF5LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQob3ZlcmxheSlcbiAgICAgIHRoaXMubG9vcCgpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zY3JpcHRzL2dyYXBoaWNzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUEvRkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})