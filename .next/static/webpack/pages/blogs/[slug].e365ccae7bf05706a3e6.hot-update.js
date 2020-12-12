webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./pages/blogs/[slug].js":
/*!*******************************!*\
  !*** ./pages/blogs/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/PageLayout */ "./components/PageLayout.js");
/* harmony import */ var components_BlogHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BlogHeader */ "./components/BlogHeader.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/api */ "./lib/api.js");
/* harmony import */ var components_BlogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/BlogContent */ "./components/BlogContent.js");

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\pages\\blogs\\[slug].js";






const BlogDetail = ({
  blog
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "blog-detail-page",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: {
          span: 10,
          offset: 1
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_BlogHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: blog.title,
          subtitle: blog.subtitle,
          coverImage: Object(lib_api__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(blog.coverImage).height(600).url(),
          author: blog.author,
          date: blog.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_BlogContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
          content: blog.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

_c = BlogDetail;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (BlogDetail);

var _c;

$RefreshReg$(_c, "BlogDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkJsb2dEZXRhaWwiLCJibG9nIiwic3BhbiIsIm9mZnNldCIsInRpdGxlIiwic3VidGl0bGUiLCJ1cmxGb3IiLCJjb3ZlckltYWdlIiwiaGVpZ2h0IiwidXJsIiwiYXV0aG9yIiwiZGF0ZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVk7QUFDN0Isc0JBQ0UscUVBQUMsNkRBQUQ7QUFBWSxhQUFTLEVBQUMsa0JBQXRCO0FBQUEsMkJBQ0UscUVBQUMsbURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxtREFBRDtBQUFLLFVBQUUsRUFBRTtBQUFFQyxjQUFJLEVBQUUsRUFBUjtBQUFZQyxnQkFBTSxFQUFFO0FBQXBCLFNBQVQ7QUFBQSxnQ0FDRSxxRUFBQyw2REFBRDtBQUNFLGVBQUssRUFBRUYsSUFBSSxDQUFDRyxLQURkO0FBRUUsa0JBQVEsRUFBRUgsSUFBSSxDQUFDSSxRQUZqQjtBQUdFLG9CQUFVLEVBQUVDLHNEQUFNLENBQUNMLElBQUksQ0FBQ00sVUFBTixDQUFOLENBQXdCQyxNQUF4QixDQUErQixHQUEvQixFQUFvQ0MsR0FBcEMsRUFIZDtBQUlFLGdCQUFNLEVBQUVSLElBQUksQ0FBQ1MsTUFKZjtBQUtFLGNBQUksRUFBRVQsSUFBSSxDQUFDVTtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0UscUVBQUMsOERBQUQ7QUFBYSxpQkFBTyxFQUFFVixJQUFJLENBQUNXO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCRCxDQWxCRDs7S0FBTVosVTs7QUFtQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL1tzbHVnXS5lMzY1Y2NhZTdiZjA1NzA2YTNlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9QYWdlTGF5b3V0JztcclxuaW1wb3J0IEJsb2dIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9CbG9nSGVhZGVyJztcclxuaW1wb3J0IHsgZ2V0QmxvZ0J5U2x1ZywgZ2V0QWxsQmxvZ3MgfSBmcm9tICdsaWIvYXBpJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJ2xpYi9hcGknO1xyXG5pbXBvcnQgQmxvZ0NvbnRlbnQgZnJvbSAnY29tcG9uZW50cy9CbG9nQ29udGVudCc7XHJcblxyXG5jb25zdCBCbG9nRGV0YWlsID0gKHtibG9nfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUxheW91dCBjbGFzc05hbWU9XCJibG9nLWRldGFpbC1wYWdlXCI+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBtZD17eyBzcGFuOiAxMCwgb2Zmc2V0OiAxIH19PlxyXG4gICAgICAgICAgPEJsb2dIZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgIHN1YnRpdGxlPXtibG9nLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICBjb3ZlckltYWdlPXt1cmxGb3IoYmxvZy5jb3ZlckltYWdlKS5oZWlnaHQoNjAwKS51cmwoKX1cclxuICAgICAgICAgICAgYXV0aG9yPXtibG9nLmF1dGhvcn1cclxuICAgICAgICAgICAgZGF0ZT17YmxvZy5kYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8QmxvZ0NvbnRlbnQgY29udGVudD17YmxvZy5jb250ZW50fSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvUGFnZUxheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gIGNvbnN0IGJsb2cgPSBhd2FpdCBnZXRCbG9nQnlTbHVnKHBhcmFtcy5zbHVnKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtibG9nfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgZ2V0QWxsQmxvZ3MoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGJsb2dzPy5tYXAoYiA9PiAoe3BhcmFtczoge3NsdWc6IGIuc2x1Z319KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==