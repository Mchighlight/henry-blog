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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: randomNumber
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
          lineNumber: 29,
          columnNumber: 13
        }, this)
      }, blog.slug, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImJsb2dzIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInJhbmRvbU51bWJlciIsIm1hcCIsImJsb2ciLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGF0ZSIsImNvdmVySW1hZ2UiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0EsSUFBVCxDQUFjO0FBQUNDO0FBQUQsQ0FBZCxFQUF1QjtBQUFBOztBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQUZRLENBQVQ7QUFJQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFBLDRCQUNFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsZ0JBQUtJO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMsbURBQUQ7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUlJSixLQUFLLENBQUNLLEdBQU4sQ0FBVUMsSUFBSSxpQkFDZCxxRUFBQyxtREFBRDtBQUFxQixVQUFFLEVBQUMsR0FBeEI7QUFBQSwrQkFDRSxxRUFBQywyREFBRDtBQUNFLGVBQUssRUFBRUEsSUFBSSxDQUFDQyxLQURkO0FBRUUsa0JBQVEsRUFBRUQsSUFBSSxDQUFDRSxRQUZqQjtBQUdFLGNBQUksRUFBRUYsSUFBSSxDQUFDRyxJQUhiO0FBSUUsZUFBSyxFQUFFSCxJQUFJLENBQUNJO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVKLElBQUksQ0FBQ0ssSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQsQyxDQUVEO0FBQ0E7QUFDQTs7R0FsQ3dCWixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2OWY2Zjc1YzM0NzEzNDQ2MDIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvUGFnZUxheW91dCc7XHJcbmltcG9ydCBBdXRob3JJbnRybyBmcm9tICdjb21wb25lbnRzL0F1dGhvckludHJvJztcclxuaW1wb3J0IENhcmRJdGVtIGZyb20gJ2NvbXBvbmVudHMvQ2FyZEl0ZW0nO1xyXG5pbXBvcnQgQ2FyZExpc3RJdGVtIGZyb20gJ2NvbXBvbmVudHMvQ2FyZExpc3RJdGVtJztcclxuXHJcbmltcG9ydCB7IGdldEFsbEJsb2dzIH0gZnJvbSAnbGliL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtibG9nc30pIHtcclxuICBjb25zb2xlLmxvZygnSGVsbG8gV29ybGQnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGJsb2dzKTtcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VMYXlvdXQ+XHJcbiAgICAgIDxBdXRob3JJbnRybyAvPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICA8aDE+e3JhbmRvbU51bWJlcn08L2gxPlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cIm1iLTVcIj5cclxuICAgICAgICB7LyogPENvbCBtZD1cIjEwXCI+XHJcbiAgICAgICAgICA8Q2FyZExpc3RJdGVtIC8+XHJcbiAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgIHsgYmxvZ3MubWFwKGJsb2cgPT5cclxuICAgICAgICAgIDxDb2wga2V5PXtibG9nLnNsdWd9IG1kPVwiNFwiPlxyXG4gICAgICAgICAgICA8Q2FyZEl0ZW1cclxuICAgICAgICAgICAgICB0aXRsZT17YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICBzdWJ0aXRsZT17YmxvZy5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgICBkYXRlPXtibG9nLmRhdGV9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2Jsb2cuY292ZXJJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBkdXJpbmcgdGhlIGJ1aWxkIChidWlsZCB0aW1lKVxyXG4vLyBQcm92aWRlcyBwcm9wcyB0byB5b3VyIHBhZ2VcclxuLy8gSXQgd2lsbCBjcmVhdGUgc3RhdGljIHBhZ2VcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgY29uc3QgYmxvZ3MgPSBhd2FpdCBnZXRBbGxCbG9ncygpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBibG9ncyxcclxuICAgICAgcmFuZG9tTnVtYmVyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=