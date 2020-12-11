webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CardItem.js":
/*!********************************!*\
  !*** ./components/CardItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\CardItem.js";


const CardItem = ({
  title,
  subtitle,
  image,
  date,
  author
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: `fj-card`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-body-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        className: "d-flex flex-row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: (author === null || author === void 0 ? void 0 : author.avatar) || 'https://via.placeholder.com/150',
          className: "rounded-circle mr-3",
          height: "50px",
          width: "50px",
          alt: "avatar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
            className: "font-weight-bold mb-1",
            children: author === null || author === void 0 ? void 0 : author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
            className: "card-date",
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "view overlay",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
          src: image,
          alt: "Card image cap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
          className: "card-main-title",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "card-button",
      children: "Read More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

_c = CardItem;
/* harmony default export */ __webpack_exports__["default"] = (CardItem);

var _c;

$RefreshReg$(_c, "CardItem");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSXRlbS5qcyJdLCJuYW1lcyI6WyJDYXJkSXRlbSIsInRpdGxlIiwic3VidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJhdXRob3IiLCJhdmF0YXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0MsT0FBRDtBQUFRQyxVQUFSO0FBQWtCQyxPQUFsQjtBQUF5QkMsTUFBekI7QUFBK0JDO0FBQS9CLENBQUQsS0FBNEM7QUFDM0Qsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBTSxhQUFTLEVBQUcsU0FBbEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFELENBQU0sTUFBTjtBQUNFLGlCQUFTLEVBQUMsaUJBRFo7QUFBQSxnQ0FFRTtBQUNFLGFBQUcsRUFBRSxDQUFBQSxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUMsTUFBUixLQUFrQixpQ0FEekI7QUFFRSxtQkFBUyxFQUFDLHFCQUZaO0FBR0UsZ0JBQU0sRUFBQyxNQUhUO0FBSUUsZUFBSyxFQUFDLE1BSlI7QUFLRSxhQUFHLEVBQUM7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBUUU7QUFBQSxrQ0FDRSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxxQkFBUyxFQUFDLHVCQUF0QjtBQUFBLHNCQUErQ0QsTUFBL0MsYUFBK0NBLE1BQS9DLHVCQUErQ0EsTUFBTSxDQUFFRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcscUJBQVMsRUFBQyxXQUFyQjtBQUFBLHNCQUFrQ0g7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBY0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDRSxxRUFBQyxvREFBRCxDQUFNLEdBQU47QUFDRSxhQUFHLEVBQUVELEtBRFA7QUFFRSxhQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQW9CRSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBQSxnQ0FDRSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxtQkFBUyxFQUFDLGlCQUF0QjtBQUFBLG9CQUF5Q0Y7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLG9CQUFZQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUEwQkU7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnQ0QsQ0FqQ0Q7O0tBQU1GLFE7QUFtQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkZjMzMzg3M2MwNTljZDEzYjQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IENhcmRJdGVtID0gKHt0aXRsZSwgc3VidGl0bGUsIGltYWdlLCBkYXRlLCBhdXRob3J9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17YGZqLWNhcmRgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHktd3JhcHBlclwiPlxyXG4gICAgICAgIDxDYXJkLkhlYWRlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YXV0aG9yPy5hdmF0YXIgfHwgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBtci0zXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICAgIGFsdD1cImF2YXRhclwiLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbWItMVwiPnthdXRob3I/Lm5hbWV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT1cImNhcmQtZGF0ZVwiPntkYXRlfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXcgb3ZlcmxheVwiPlxyXG4gICAgICAgICAgPENhcmQuSW1nXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cImNhcmQtbWFpbi10aXRsZVwiPnt0aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZC5UZXh0PntzdWJ0aXRsZX08L0NhcmQuVGV4dD5cclxuICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtYnV0dG9uXCI+XHJcbiAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgIDwvYT5cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=