webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ \"./components/date.js\");\n/* harmony import */ var _lib_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/video */ \"./lib/video.js\");\n\nvar _jsxFileName = \"/Users/felixzapata/trabajo/github/javascript-beer/pages/posts/[id].js\";\n\n\n\n\n\nvar videoEmbed = function videoEmbed(videoURL) {\n  var id = Object(_lib_video__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(videoURL);\n\n  if (id) {\n    return \"https://www.youtube.com/embed/\".concat(id);\n  }\n};\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var postData = _ref.postData;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [postData.title, \" - JavaScript Beers\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"wrap\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        children: [isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: postData.img,\n          alt: postData.alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"embed-responsive\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n            className: \"embed-responsive-item\",\n            src: videoEmbed(postData.video)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"headingXl\",\n          children: postData.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"author\",\n          children: postData.author\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_date__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          dateString: postData.date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          dangerouslySetInnerHTML: {\n            __html: postData.contentHtml\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLmpzP2M4NmYiXSwibmFtZXMiOlsidmlkZW9FbWJlZCIsInZpZGVvVVJMIiwiaWQiLCJ2aWRlb0lEIiwiUG9zdCIsInBvc3REYXRhIiwidGl0bGUiLCJpc0xvZ2dlZEluIiwiaW1nIiwiYWx0IiwidmlkZW8iLCJhdXRob3IiLCJkYXRlIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQW9CQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxRQUFELEVBQWM7QUFDL0IsTUFBTUMsRUFBRSxHQUFHQywwREFBTyxDQUFDRixRQUFELENBQWxCOztBQUNBLE1BQUlDLEVBQUosRUFBUTtBQUNOLG1EQUF3Q0EsRUFBeEM7QUFDRDtBQUNGLENBTEQ7OztBQVFlLFNBQVNFLElBQVQsT0FBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDekMsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFBLFFBQVEsQ0FBQ0MsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dDLFVBQVUsZ0JBQ1Q7QUFBSyxhQUFHLEVBQUVGLFFBQVEsQ0FBQ0csR0FBbkI7QUFBd0IsYUFBRyxFQUFFSCxRQUFRLENBQUNJO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFMsZ0JBR1g7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0U7QUFBUSxxQkFBUyxFQUFDLHVCQUFsQjtBQUEwQyxlQUFHLEVBQUVULFVBQVUsQ0FBQ0ssUUFBUSxDQUFDSyxLQUFWO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBUUU7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQSxvQkFBMkJMLFFBQVEsQ0FBQ0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQVNFO0FBQU0sbUJBQVMsRUFBQyxRQUFoQjtBQUFBLG9CQUEwQkQsUUFBUSxDQUFDTTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUUscUVBQUMsd0RBQUQ7QUFBTSxvQkFBVSxFQUFFTixRQUFRLENBQUNPO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFXRTtBQUFLLGlDQUF1QixFQUFFO0FBQUVDLGtCQUFNLEVBQUVSLFFBQVEsQ0FBQ1M7QUFBbkI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7S0F2QnVCVixJIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRBbGxQb3N0SWRzLCBnZXRQb3N0RGF0YSB9IGZyb20gJy4uLy4uL2xpYi9wb3N0cydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBEYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCB2aWRlb0lEIGZyb20gJy4uLy4uL2xpYi92aWRlbydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3REYXRhXG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKVxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IHZpZGVvRW1iZWQgPSAodmlkZW9VUkwpID0+IHtcbiAgY29uc3QgaWQgPSB2aWRlb0lEKHZpZGVvVVJMKTtcbiAgaWYgKGlkKSB7XG4gICAgcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2lkfWA7XG4gIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdERhdGEudGl0bGV9IC0gSmF2YVNjcmlwdCBCZWVyczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAge2lzTG9nZ2VkSW5cbiAgICAgICAgICA/IDxpbWcgc3JjPXtwb3N0RGF0YS5pbWd9IGFsdD17cG9zdERhdGEuYWx0fSAvPlxuICAgICAgICAgIDogXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiIHNyYz17dmlkZW9FbWJlZChwb3N0RGF0YS52aWRlbyl9PjwvaWZyYW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1hsXCI+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e3Bvc3REYXRhLmF1dGhvcn08L3NwYW4+XG4gICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdERhdGEuZGF0ZX0gLz5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

})