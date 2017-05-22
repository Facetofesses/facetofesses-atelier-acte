webpackHotUpdate(0,{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(debug) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _domready = __webpack_require__(193);\n\nvar _domready2 = _interopRequireDefault(_domready);\n\nvar _webfontloader = __webpack_require__(227);\n\nvar _webfontloader2 = _interopRequireDefault(_webfontloader);\n\n__webpack_require__(67);\n\n__webpack_require__(128);\n\nvar _index = __webpack_require__(117);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(124);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _index5 = __webpack_require__(46);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DOM_READY_EVENT = 'dom-ready';\nvar FONTS_READY_EVENT = 'fonts-ready';\nvar dbg = debug('app:App');\n\nvar App = function () {\n  function App() {\n    (0, _classCallCheck3.default)(this, App);\n\n    dbg('Init App');\n    this.events = [];\n    this.waitDomReady();\n    this.waitFontsReady();\n  }\n\n  (0, _createClass3.default)(App, [{\n    key: 'start',\n    value: function start() {\n      dbg('start');\n      /* eslint no-new:0 */\n      if ((0, _index5.isMobile)()) {\n        (0, _index5.selectClass)('screen').style.display = 'none';\n        new _index4.default();\n      } else {\n        (0, _index5.selectClass)('tablet').style.display = 'none';\n        new _index2.default();\n      }\n    }\n  }, {\n    key: 'waitDomReady',\n    value: function waitDomReady() {\n      var _this = this;\n\n      dbg('wait for DOM ready');\n      this.events.push(DOM_READY_EVENT);\n      (0, _domready2.default)(function () {\n        dbg('DOM ready');\n        _this.onLoadEventSuccess(DOM_READY_EVENT);\n      });\n    }\n  }, {\n    key: 'waitFontsReady',\n    value: function waitFontsReady() {\n      var _this2 = this;\n\n      dbg('wait for fonts ready');\n      this.events.push(FONTS_READY_EVENT);\n      _webfontloader2.default.load({\n        custom: {\n          families: ['Blogger Sans:400'],\n          urls: ['/static/font.css']\n        },\n        classes: false,\n        active: function active() {\n          dbg('fonts ready');\n          _this2.onLoadEventSuccess(FONTS_READY_EVENT);\n        }\n      });\n    }\n  }, {\n    key: 'onLoadEventSuccess',\n    value: function onLoadEventSuccess(key) {\n      this.events.splice(this.events.indexOf(key), 1);\n      if (this.events.length === 0) {\n        this.start();\n      }\n    }\n  }]);\n  return App;\n}();\n\nexports.default = App;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(191)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zY3JpcHRzL0FwcC5qcz9hNGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb21SZWFkeSBmcm9tICdkb21yZWFkeSdcbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInXG5pbXBvcnQgJ2dzYXAnXG5pbXBvcnQgJy4vdXRpbHMvU29ja2V0J1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi9pbmRleCdcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL2dyYXBoaWNzL2luZGV4J1xuaW1wb3J0IHtcbiAgaXNNb2JpbGUsXG4gIHNlbGVjdENsYXNzXG59IGZyb20gJy4vdXRpbHMvaW5kZXgnXG5cbmNvbnN0IERPTV9SRUFEWV9FVkVOVCA9ICdkb20tcmVhZHknXG5jb25zdCBGT05UU19SRUFEWV9FVkVOVCA9ICdmb250cy1yZWFkeSdcbmNvbnN0IGRiZyA9IGRlYnVnKCdhcHA6QXBwJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGRiZygnSW5pdCBBcHAnKVxuICAgIHRoaXMuZXZlbnRzID0gW11cbiAgICB0aGlzLndhaXREb21SZWFkeSgpXG4gICAgdGhpcy53YWl0Rm9udHNSZWFkeSgpXG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgZGJnKCdzdGFydCcpXG4gICAgLyogZXNsaW50IG5vLW5ldzowICovXG4gICAgaWYgKGlzTW9iaWxlKCkpIHtcbiAgICAgIHNlbGVjdENsYXNzKCdzY3JlZW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBuZXcgR3JhcGhpY3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RDbGFzcygndGFibGV0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgbmV3IFNjcmVlbigpXG4gICAgfVxuICB9XG5cbiAgd2FpdERvbVJlYWR5ICgpIHtcbiAgICBkYmcoJ3dhaXQgZm9yIERPTSByZWFkeScpXG4gICAgdGhpcy5ldmVudHMucHVzaChET01fUkVBRFlfRVZFTlQpXG4gICAgZG9tUmVhZHkoKCkgPT4ge1xuICAgICAgZGJnKCdET00gcmVhZHknKVxuICAgICAgdGhpcy5vbkxvYWRFdmVudFN1Y2Nlc3MoRE9NX1JFQURZX0VWRU5UKVxuICAgIH0pXG4gIH1cblxuICB3YWl0Rm9udHNSZWFkeSAoKSB7XG4gICAgZGJnKCd3YWl0IGZvciBmb250cyByZWFkeScpXG4gICAgdGhpcy5ldmVudHMucHVzaChGT05UU19SRUFEWV9FVkVOVClcbiAgICBXZWJGb250LmxvYWQoe1xuICAgICAgY3VzdG9tOiB7XG4gICAgICAgIGZhbWlsaWVzOiBbJ0Jsb2dnZXIgU2Fuczo0MDAnXSxcbiAgICAgICAgdXJsczogWycvc3RhdGljL2ZvbnQuY3NzJ11cbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiBmYWxzZSxcbiAgICAgIGFjdGl2ZTogKCkgPT4ge1xuICAgICAgICBkYmcoJ2ZvbnRzIHJlYWR5JylcbiAgICAgICAgdGhpcy5vbkxvYWRFdmVudFN1Y2Nlc3MoRk9OVFNfUkVBRFlfRVZFTlQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uTG9hZEV2ZW50U3VjY2VzcyAoa2V5KSB7XG4gICAgdGhpcy5ldmVudHMuc3BsaWNlKHRoaXMuZXZlbnRzLmluZGV4T2Yoa2V5KSwgMSlcbiAgICBpZiAodGhpcy5ldmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnN0YXJ0KClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc2NyaXB0cy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQWxEQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})