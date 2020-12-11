webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./components/BlogHeader.js":
/*!**********************************!*\
  !*** ./components/BlogHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\BlogHeader.js";
function BlogHeader({
  title,
  subtitle,
  coverImage,
  date,
  author
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "blog-detail-header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "lead mb-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: author === null || author === void 0 ? void 0 : author.avatar,
        className: "rounded-circle mr-3",
        height: "50px",
        width: "50px",
        alt: "avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 11
      }, this), author === null || author === void 0 ? void 0 : author.name, ', ', " ", date]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-weight-bold blog-detail-header-title mb-0",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "blog-detail-header-subtitle mb-3",
      children: subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "img-fluid rounded",
      src: coverImage,
      alt: "TODO: provide alt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, this);
}
_c = BlogHeader;

var _c;

$RefreshReg$(_c, "BlogHeader");

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

/***/ }),

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
          coverImage: blog.coverImage,
          author: blog.author,
          date: blog.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9ncy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQmxvZ0hlYWRlciIsInRpdGxlIiwic3VidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsImF2YXRhciIsIm5hbWUiLCJCbG9nRGV0YWlsIiwiYmxvZyIsInNwYW4iLCJvZmZzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxVQUFULENBQW9CO0FBQUNDLE9BQUQ7QUFBUUMsVUFBUjtBQUFrQkMsWUFBbEI7QUFBOEJDLE1BQTlCO0FBQW9DQztBQUFwQyxDQUFwQixFQUFpRTtBQUM1RSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUNFO0FBQUcsZUFBUyxFQUFDLFdBQWI7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBRUEsTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVDLE1BRGY7QUFFRSxpQkFBUyxFQUFDLHFCQUZaO0FBR0UsY0FBTSxFQUFDLE1BSFQ7QUFJRSxhQUFLLEVBQUMsTUFKUjtBQUtFLFdBQUcsRUFBQztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQU9HRCxNQVBILGFBT0dBLE1BUEgsdUJBT0dBLE1BQU0sQ0FBRUUsSUFQWCxFQVFHLElBUkgsT0FRVUgsSUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUksZUFBUyxFQUFDLGdEQUFkO0FBQUEsZ0JBQWdFSDtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFZRTtBQUFJLGVBQVMsRUFBQyxrQ0FBZDtBQUFBLGdCQUFrREM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBY0k7QUFDRSxlQUFTLEVBQUMsbUJBRFo7QUFFRSxTQUFHLEVBQUVDLFVBRlA7QUFFbUIsU0FBRyxFQUFDO0FBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDtLQXJCcUJILFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEI7QUFDQTtBQUVBOztBQUVBLE1BQU1RLFVBQVUsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFZO0FBQzdCLHNCQUNFLHFFQUFDLDZEQUFEO0FBQVksYUFBUyxFQUFDLGtCQUF0QjtBQUFBLDJCQUNFLHFFQUFDLG1EQUFEO0FBQUEsNkJBQ0UscUVBQUMsbURBQUQ7QUFBSyxVQUFFLEVBQUU7QUFBRUMsY0FBSSxFQUFFLEVBQVI7QUFBWUMsZ0JBQU0sRUFBRTtBQUFwQixTQUFUO0FBQUEsZ0NBQ0UscUVBQUMsNkRBQUQ7QUFDRSxlQUFLLEVBQUVGLElBQUksQ0FBQ1IsS0FEZDtBQUVFLGtCQUFRLEVBQUVRLElBQUksQ0FBQ1AsUUFGakI7QUFHRSxvQkFBVSxFQUFFTyxJQUFJLENBQUNOLFVBSG5CO0FBSUUsZ0JBQU0sRUFBRU0sSUFBSSxDQUFDSixNQUpmO0FBS0UsY0FBSSxFQUFFSSxJQUFJLENBQUNMO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxDQW5CRDs7S0FBTUksVTs7QUFvQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL1tzbHVnXS4xNWFhYmM2MDY2MTczNWFmYTViZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0hlYWRlcih7dGl0bGUsIHN1YnRpdGxlLCBjb3ZlckltYWdlLCBkYXRlLCBhdXRob3J9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctZGV0YWlsLWhlYWRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgbWItMFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2F1dGhvcj8uYXZhdGFyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBtci0zXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICAgIGFsdD1cImF2YXRhclwiLz5cclxuICAgICAgICAgIHthdXRob3I/Lm5hbWV9XHJcbiAgICAgICAgICB7JywgJ30ge2RhdGV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGJsb2ctZGV0YWlsLWhlYWRlci10aXRsZSBtYi0wXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2ctZGV0YWlsLWhlYWRlci1zdWJ0aXRsZSBtYi0zXCI+e3N1YnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICB7LyogQ2hlY2sgaWYgY29udGFpbnMgY292ZXIgaW1hZ2UgKi99XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkXCJcclxuICAgICAgICAgICAgc3JjPXtjb3ZlckltYWdlfSBhbHQ9XCJUT0RPOiBwcm92aWRlIGFsdFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSIsImltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvUGFnZUxheW91dCc7XHJcbmltcG9ydCBCbG9nSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvQmxvZ0hlYWRlcic7XHJcbmltcG9ydCB7IGdldEJsb2dCeVNsdWcsIGdldEFsbEJsb2dzIH0gZnJvbSAnbGliL2FwaSc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuY29uc3QgQmxvZ0RldGFpbCA9ICh7YmxvZ30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VMYXlvdXQgY2xhc3NOYW1lPVwiYmxvZy1kZXRhaWwtcGFnZVwiPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogMSB9fT5cclxuICAgICAgICAgIDxCbG9nSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICBzdWJ0aXRsZT17YmxvZy5zdWJ0aXRsZX1cclxuICAgICAgICAgICAgY292ZXJJbWFnZT17YmxvZy5jb3ZlckltYWdlfVxyXG4gICAgICAgICAgICBhdXRob3I9e2Jsb2cuYXV0aG9yfVxyXG4gICAgICAgICAgICBkYXRlPXtibG9nLmRhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGhyLz5cclxuICAgICAgICAgIHsvKiBCbG9nIENvbnRlbnQgSGVyZSAqL31cclxuICAgICAgICAgIEl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gVGhlIHBvaW50IG9mIHVzaW5nIExvcmVtIElwc3VtIGlzIHRoYXQgaXQgaGFzIGEgbW9yZS1vci1sZXNzIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgbGV0dGVycywgYXMgb3Bwb3NlZCB0byB1c2luZyAnQ29udGVudCBoZXJlLCBjb250ZW50IGhlcmUnLCBtYWtpbmcgaXQgbG9vayBsaWtlIHJlYWRhYmxlIEVuZ2xpc2guIE1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgZGVmYXVsdCBtb2RlbCB0ZXh0LCBhbmQgYSBzZWFyY2ggZm9yICdsb3JlbSBpcHN1bScgd2lsbCB1bmNvdmVyIG1hbnkgd2ViIHNpdGVzIHN0aWxsIGluIHRoZWlyIGluZmFuY3kuIFZhcmlvdXMgdmVyc2lvbnMgaGF2ZSBldm9sdmVkIG92ZXIgdGhlIHllYXJzLCBzb21ldGltZXMgYnkgYWNjaWRlbnQsIHNvbWV0aW1lcyBvbiBwdXJwb3NlIChpbmplY3RlZCBodW1vdXIgYW5kIHRoZSBsaWtlKS5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICBjb25zdCBibG9nID0gYXdhaXQgZ2V0QmxvZ0J5U2x1ZyhwYXJhbXMuc2x1Zyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7YmxvZ31cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBibG9ncyA9IGF3YWl0IGdldEFsbEJsb2dzKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBibG9ncz8ubWFwKGIgPT4gKHtwYXJhbXM6IHtzbHVnOiBiLnNsdWd9fSkpLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=