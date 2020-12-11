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
  blogs,
  randomNumber
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
          subtitle: blog.subtitle
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
// export async function getServerSideProps() {
//   const randomNumber = Math.random();
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       blogs,
//       randomNumber
//     }
//   }
// }
// Static Page
// Faster, can be cached using CDN
// Created at build time
// When we making the request we are always receiving the same html document
// Dynamic Page
// Created at request time (we can fetch data on server)
// Little bit slower, the time depends on data you are fetching

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImJsb2dzIiwicmFuZG9tTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm1hcCIsImJsb2ciLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNBLElBQVQsQ0FBYztBQUFDQyxPQUFEO0FBQVFDO0FBQVIsQ0FBZCxFQUFxQztBQUFBOztBQUNsREMsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDRCxHQUZRLENBQVQ7QUFJQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFBLDRCQUNFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMsbURBQUQ7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUlJRCxLQUFLLENBQUNLLEdBQU4sQ0FBVUMsSUFBSSxpQkFDZCxxRUFBQyxtREFBRDtBQUFxQixVQUFFLEVBQUMsR0FBeEI7QUFBQSwrQkFDRSxxRUFBQywyREFBRDtBQUNFLGVBQUssRUFBRUEsSUFBSSxDQUFDQyxLQURkO0FBRUUsa0JBQVEsRUFBRUQsSUFBSSxDQUFDRTtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUYsSUFBSSxDQUFDRyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRCxDLENBRUQ7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7R0E5RHdCVixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjZTAwZGQzYmVlYzI5OGM1MWU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvUGFnZUxheW91dCc7XHJcbmltcG9ydCBBdXRob3JJbnRybyBmcm9tICdjb21wb25lbnRzL0F1dGhvckludHJvJztcclxuaW1wb3J0IENhcmRJdGVtIGZyb20gJ2NvbXBvbmVudHMvQ2FyZEl0ZW0nO1xyXG5pbXBvcnQgQ2FyZExpc3RJdGVtIGZyb20gJ2NvbXBvbmVudHMvQ2FyZExpc3RJdGVtJztcclxuXHJcbmltcG9ydCB7IGdldEFsbEJsb2dzIH0gZnJvbSAnbGliL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtibG9ncywgcmFuZG9tTnVtYmVyfSkge1xyXG4gIGNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCcpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYmxvZ3MpO1xyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUxheW91dD5cclxuICAgICAgPEF1dGhvckludHJvIC8+XHJcbiAgICAgIDxoci8+XHJcbiAgICAgIDxoMT57cmFuZG9tTnVtYmVyfTwvaDE+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWItNVwiPlxyXG4gICAgICAgIHsvKiA8Q29sIG1kPVwiMTBcIj5cclxuICAgICAgICAgIDxDYXJkTGlzdEl0ZW0gLz5cclxuICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgeyBibG9ncy5tYXAoYmxvZyA9PlxyXG4gICAgICAgICAgPENvbCBrZXk9e2Jsb2cuc2x1Z30gbWQ9XCI0XCI+XHJcbiAgICAgICAgICAgIDxDYXJkSXRlbVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHN1YnRpdGxlPXtibG9nLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvUGFnZUxheW91dD5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGR1cmluZyB0aGUgYnVpbGQgKGJ1aWxkIHRpbWUpXHJcbi8vIFByb3ZpZGVzIHByb3BzIHRvIHlvdXIgcGFnZVxyXG4vLyBJdCB3aWxsIGNyZWF0ZSBzdGF0aWMgcGFnZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICBjb25zdCBibG9ncyA9IGF3YWl0IGdldEFsbEJsb2dzKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGJsb2dzLFxyXG4gICAgICByYW5kb21OdW1iZXJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbi8vICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuLy8gICBjb25zdCBibG9ncyA9IGF3YWl0IGdldEFsbEJsb2dzKCk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIGJsb2dzLFxyXG4vLyAgICAgICByYW5kb21OdW1iZXJcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIFN0YXRpYyBQYWdlXHJcbi8vIEZhc3RlciwgY2FuIGJlIGNhY2hlZCB1c2luZyBDRE5cclxuLy8gQ3JlYXRlZCBhdCBidWlsZCB0aW1lXHJcbi8vIFdoZW4gd2UgbWFraW5nIHRoZSByZXF1ZXN0IHdlIGFyZSBhbHdheXMgcmVjZWl2aW5nIHRoZSBzYW1lIGh0bWwgZG9jdW1lbnRcclxuXHJcbi8vIER5bmFtaWMgUGFnZVxyXG4vLyBDcmVhdGVkIGF0IHJlcXVlc3QgdGltZSAod2UgY2FuIGZldGNoIGRhdGEgb24gc2VydmVyKVxyXG4vLyBMaXR0bGUgYml0IHNsb3dlciwgdGhlIHRpbWUgZGVwZW5kcyBvbiBkYXRhIHlvdSBhcmUgZmV0Y2hpbmciXSwic291cmNlUm9vdCI6IiJ9