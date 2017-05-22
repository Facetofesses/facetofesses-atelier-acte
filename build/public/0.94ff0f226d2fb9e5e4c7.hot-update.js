webpackHotUpdate(0,{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _from = __webpack_require__(70);\n\nvar _from2 = _interopRequireDefault(_from);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _Detector = __webpack_require__(119);\n\nvar _Detector2 = _interopRequireDefault(_Detector);\n\nvar _Basket = __webpack_require__(69);\n\nvar _Basket2 = _interopRequireDefault(_Basket);\n\nvar _PieceManager = __webpack_require__(127);\n\nvar _PieceManager2 = _interopRequireDefault(_PieceManager);\n\nvar _index = __webpack_require__(36);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Graphics = function () {\n  function Graphics() {\n    (0, _classCallCheck3.default)(this, Graphics);\n\n    this.createApp();\n    this.attachToDom((0, _index.selectClass)('tablet'));\n\n    // Detector\n    _Detector2.default.initialize(this.app.view);\n\n    // Elements\n    _PieceManager2.default.start(this.app);\n    _Basket2.default.start(this.app);\n\n    // window.addEventListener('click', this.animateUiElements.bind(this))\n    // window.addEventListener('touchstart', this.animateUiElements.bind(this))\n  }\n\n  /**\n   * Create PIXI application and add it to the DOM\n   */\n\n\n  (0, _createClass3.default)(Graphics, [{\n    key: 'createApp',\n    value: function createApp() {\n      this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {\n        transparent: true,\n        antialias: true,\n        autoResize: true,\n        forceFXAA: true,\n        roundPixels: true,\n        resolution: window.devicePixelRatio || 1\n      });\n\n      // window.setTimeout(() => {\n      //   PieceManager.pieces[0].onDetect(400, 400)\n      //\n      //   window.setTimeout(() => {\n      //     PieceManager.pieces[0].setRotation(160)\n      //     window.setTimeout(() => {\n      //       PieceManager.pieces[0].setRotation(200)\n      //       window.setTimeout(() => {\n      //         PieceManager.pieces[0].setRotation(240)\n      //         window.setTimeout(() => {\n      //           PieceManager.pieces[0].setRotation(280)\n      //           window.setTimeout(() => {\n      //             PieceManager.pieces[0].setRotation(320)\n      //           }, 1000)\n      //         }, 1000)\n      //       }, 1000)\n      //     }, 1000)\n      //   }, 1000)\n      // }, 2000)\n    }\n  }, {\n    key: 'attachToDom',\n    value: function attachToDom() {\n      var domElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;\n\n      domElement.appendChild(this.app.view);\n    }\n  }, {\n    key: 'loop',\n    value: function loop() {\n      this.app.ticker.add(function () {\n        _PieceManager2.default.update();\n        _Basket2.default.update();\n\n        _PieceManager2.default.render();\n        _Basket2.default.render();\n      });\n    }\n  }, {\n    key: 'animateUiElements',\n    value: function animateUiElements() {\n      var _this = this;\n\n      // let chars\n      var tl = new TimelineMax().from('.cursor', 0.7, {\n        autoAlpha: 0\n      });\n\n      (0, _from2.default)(document.querySelectorAll('.indication span')).forEach(function (span) {\n        chars = new SplitText(span, {\n          type: 'chars'\n        }).chars;\n\n        tl.staggerFrom(chars, 0.2, {\n          y: '+=30',\n          autoAlpha: 0,\n          ease: Elastic.easeOut.config(0.8, 0.3)\n        }, 0.03, 1).staggerTo(chars, 0.5, {\n          y: '-=30',\n          autoAlpha: 0\n        }, 0.03, 4);\n      });\n\n      tl.to('.cursor', 0.7, {\n        autoAlpha: 0\n      }).call(function () {\n        var overlay = document.getElementsByClassName('overlay')[0];\n        overlay.parentElement.removeChild(overlay);\n        _this.loop();\n      });\n    }\n  }]);\n  return Graphics;\n}();\n\nexports.default = Graphics;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL2dyYXBoaWNzL2luZGV4LmpzPzY2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERldGVjdG9yIGZyb20gJy4uL2RldGVjdG9yL0RldGVjdG9yJ1xuaW1wb3J0IEJhc2tldCBmcm9tICcuLi9lbGVtZW50cy9CYXNrZXQnXG5pbXBvcnQgUGllY2VNYW5hZ2VyIGZyb20gJy4uL3BpZWNlcy9QaWVjZU1hbmFnZXInXG5pbXBvcnQge1xuICBzZWxlY3RDbGFzc1xufSBmcm9tICcuLi91dGlscy9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jcmVhdGVBcHAoKVxuICAgIHRoaXMuYXR0YWNoVG9Eb20oc2VsZWN0Q2xhc3MoJ3RhYmxldCcpKVxuXG4gICAgLy8gRGV0ZWN0b3JcbiAgICBEZXRlY3Rvci5pbml0aWFsaXplKHRoaXMuYXBwLnZpZXcpXG5cbiAgICAvLyBFbGVtZW50c1xuICAgIFBpZWNlTWFuYWdlci5zdGFydCh0aGlzLmFwcClcbiAgICBCYXNrZXQuc3RhcnQodGhpcy5hcHApXG5cblxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYW5pbWF0ZVVpRWxlbWVudHMuYmluZCh0aGlzKSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYW5pbWF0ZVVpRWxlbWVudHMuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgUElYSSBhcHBsaWNhdGlvbiBhbmQgYWRkIGl0IHRvIHRoZSBET01cbiAgICovXG4gIGNyZWF0ZUFwcCAoKSB7XG4gICAgdGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCB7XG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgIGF1dG9SZXNpemU6IHRydWUsXG4gICAgICBmb3JjZUZYQUE6IHRydWUsXG4gICAgICByb3VuZFBpeGVsczogdHJ1ZSxcbiAgICAgIHJlc29sdXRpb246IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICB9KVxuXG4gICAgLy8gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgUGllY2VNYW5hZ2VyLnBpZWNlc1swXS5vbkRldGVjdCg0MDAsIDQwMClcbiAgICAvL1xuICAgIC8vICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICBQaWVjZU1hbmFnZXIucGllY2VzWzBdLnNldFJvdGF0aW9uKDE2MClcbiAgICAvLyAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgIFBpZWNlTWFuYWdlci5waWVjZXNbMF0uc2V0Um90YXRpb24oMjAwKVxuICAgIC8vICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICAgIFBpZWNlTWFuYWdlci5waWVjZXNbMF0uc2V0Um90YXRpb24oMjQwKVxuICAgIC8vICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICBQaWVjZU1hbmFnZXIucGllY2VzWzBdLnNldFJvdGF0aW9uKDI4MClcbiAgICAvLyAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIFBpZWNlTWFuYWdlci5waWVjZXNbMF0uc2V0Um90YXRpb24oMzIwKVxuICAgIC8vICAgICAgICAgICB9LCAxMDAwKVxuICAgIC8vICAgICAgICAgfSwgMTAwMClcbiAgICAvLyAgICAgICB9LCAxMDAwKVxuICAgIC8vICAgICB9LCAxMDAwKVxuICAgIC8vICAgfSwgMTAwMClcbiAgICAvLyB9LCAyMDAwKVxuICB9XG5cbiAgYXR0YWNoVG9Eb20gKGRvbUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KVxuICB9XG5cbiAgbG9vcCAoKSB7XG4gICAgdGhpcy5hcHAudGlja2VyLmFkZCgoKSA9PiB7XG4gICAgICBQaWVjZU1hbmFnZXIudXBkYXRlKClcbiAgICAgIEJhc2tldC51cGRhdGUoKVxuXG4gICAgICBQaWVjZU1hbmFnZXIucmVuZGVyKClcbiAgICAgIEJhc2tldC5yZW5kZXIoKVxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlVWlFbGVtZW50cyAoKSB7XG4gICAgLy8gbGV0IGNoYXJzXG4gICAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTWF4KClcbiAgICAgIC5mcm9tKCcuY3Vyc29yJywgMC43LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMFxuICAgICAgfSlcblxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRpb24gc3BhbicpKS5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICBjaGFycyA9IG5ldyBTcGxpdFRleHQoc3Bhbiwge1xuICAgICAgICB0eXBlOiAnY2hhcnMnXG4gICAgICB9KS5jaGFyc1xuXG4gICAgICB0bC5zdGFnZ2VyRnJvbShjaGFycywgMC4yLCB7XG4gICAgICAgIHk6ICcrPTMwJyxcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBlYXNlOiBFbGFzdGljLmVhc2VPdXQuY29uZmlnKDAuOCwgMC4zKVxuICAgICAgfSwgMC4wMywgMSlcbiAgICAgIC5zdGFnZ2VyVG8oY2hhcnMsIDAuNSwge1xuICAgICAgICB5OiAnLT0zMCcsXG4gICAgICAgIGF1dG9BbHBoYTogMFxuICAgICAgfSwgMC4wMywgNClcbiAgICB9KVxuXG4gICAgdGwudG8oJy5jdXJzb3InLCAwLjcsIHtcbiAgICAgIGF1dG9BbHBoYTogMFxuICAgIH0pXG4gICAgLmNhbGwoKCkgPT4ge1xuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdmVybGF5JylbMF1cbiAgICAgIG92ZXJsYXkucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvdmVybGF5KVxuICAgICAgdGhpcy5sb29wKClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NjcmlwdHMvZ3JhcGhpY3MvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQWhHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})