webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var components_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PageLayout */ "./components/PageLayout.js");
/* harmony import */ var components_AuthorIntro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AuthorIntro */ "./components/AuthorIntro.js");
/* harmony import */ var components_CardItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CardItem */ "./components/CardItem.js");
/* harmony import */ var components_CardListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/CardListItem */ "./components/CardListItem.js");


var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\pages\\index.js",
    _s = $RefreshSig$();







var __N_SSG = true;
function Home({
  blogs
}) {
  _s();

  console.log('Hello World');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(blogs);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_PageLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_AuthorIntro__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "mb-5",
      children: blogs.map(blog => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: "4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CardItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: blog.title,
          subtitle: blog.subtitle,
          date: blog.date,
          image: blog.coverImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this)
      }, blog.slug, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
} // This function is called during the build (build time)
// Provides props to your page
// It will create static page

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImJsb2dzIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm1hcCIsImJsb2ciLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGF0ZSIsImNvdmVySW1hZ2UiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0EsSUFBVCxDQUFjO0FBQUNDO0FBQUQsQ0FBZCxFQUF1QjtBQUFBOztBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQUZRLENBQVQ7QUFJQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFBLDRCQUNFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLG1EQUFEO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFJSUEsS0FBSyxDQUFDSSxHQUFOLENBQVVDLElBQUksaUJBQ2QscUVBQUMsbURBQUQ7QUFBcUIsVUFBRSxFQUFDLEdBQXhCO0FBQUEsK0JBQ0UscUVBQUMsMkRBQUQ7QUFDRSxlQUFLLEVBQUVBLElBQUksQ0FBQ0MsS0FEZDtBQUVFLGtCQUFRLEVBQUVELElBQUksQ0FBQ0UsUUFGakI7QUFHRSxjQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFIYjtBQUlFLGVBQUssRUFBRUgsSUFBSSxDQUFDSTtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVSixJQUFJLENBQUNLLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JELEMsQ0FFRDtBQUNBO0FBQ0E7O0dBakN3QlgsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzgzOTAzZDVkNTk0MGExYjJkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICdjb21wb25lbnRzL1BhZ2VMYXlvdXQnO1xyXG5pbXBvcnQgQXV0aG9ySW50cm8gZnJvbSAnY29tcG9uZW50cy9BdXRob3JJbnRybyc7XHJcbmltcG9ydCBDYXJkSXRlbSBmcm9tICdjb21wb25lbnRzL0NhcmRJdGVtJztcclxuaW1wb3J0IENhcmRMaXN0SXRlbSBmcm9tICdjb21wb25lbnRzL0NhcmRMaXN0SXRlbSc7XHJcblxyXG5pbXBvcnQgeyBnZXRBbGxCbG9ncyB9IGZyb20gJ2xpYi9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7YmxvZ3N9KSB7XHJcbiAgY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhibG9ncyk7XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlTGF5b3V0PlxyXG4gICAgICA8QXV0aG9ySW50cm8gLz5cclxuICAgICAgPGhyLz5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJtYi01XCI+XHJcbiAgICAgICAgey8qIDxDb2wgbWQ9XCIxMFwiPlxyXG4gICAgICAgICAgPENhcmRMaXN0SXRlbSAvPlxyXG4gICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICB7IGJsb2dzLm1hcChibG9nID0+XHJcbiAgICAgICAgICA8Q29sIGtleT17YmxvZy5zbHVnfSBtZD1cIjRcIj5cclxuICAgICAgICAgICAgPENhcmRJdGVtXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgc3VidGl0bGU9e2Jsb2cuc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgZGF0ZT17YmxvZy5kYXRlfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtibG9nLmNvdmVySW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9QYWdlTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZHVyaW5nIHRoZSBidWlsZCAoYnVpbGQgdGltZSlcclxuLy8gUHJvdmlkZXMgcHJvcHMgdG8geW91ciBwYWdlXHJcbi8vIEl0IHdpbGwgY3JlYXRlIHN0YXRpYyBwYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgZ2V0QWxsQmxvZ3MoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYmxvZ3MsXHJcbiAgICAgIHJhbmRvbU51bWJlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9