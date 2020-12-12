webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CardItem.js":
/*!********************************!*\
  !*** ./components/CardItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Mchig_Desktop_Portfolio_henryblog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/api */ "./lib/api.js");


var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\CardItem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Mchig_Desktop_Portfolio_henryblog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const CardItem = ({
  title,
  subtitle,
  image,
  date,
  author,
  link
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: `fj-card`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "card-body-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
        className: "d-flex flex-row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: (author === null || author === void 0 ? void 0 : author.avatar) || 'https://via.placeholder.com/150',
          className: "rounded-circle mr-3",
          height: "50px",
          width: "50px",
          alt: "avatar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
            className: "font-weight-bold mb-1",
            children: author === null || author === void 0 ? void 0 : author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
            className: "card-date",
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "view overlay",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
          src: Object(lib_api__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(image).height(300).crop('center').fit('clip').url(),
          alt: "Card image cap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
          className: "card-main-title",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), link && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({}, link), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        className: "card-button",
        children: "Read More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSXRlbS5qcyJdLCJuYW1lcyI6WyJDYXJkSXRlbSIsInRpdGxlIiwic3VidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJhdXRob3IiLCJsaW5rIiwiYXZhdGFyIiwibmFtZSIsInVybEZvciIsImhlaWdodCIsImNyb3AiLCJmaXQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDLE9BQUQ7QUFBUUMsVUFBUjtBQUFrQkMsT0FBbEI7QUFBeUJDLE1BQXpCO0FBQStCQyxRQUEvQjtBQUF1Q0M7QUFBdkMsQ0FBRCxLQUFrRDtBQUNqRSxzQkFDRSxxRUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBRyxTQUFsQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0UscUVBQUMsb0RBQUQsQ0FBTSxNQUFOO0FBQ0UsaUJBQVMsRUFBQyxpQkFEWjtBQUFBLGdDQUVFO0FBQ0UsYUFBRyxFQUFFLENBQUFELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFRSxNQUFSLEtBQWtCLGlDQUR6QjtBQUVFLG1CQUFTLEVBQUMscUJBRlo7QUFHRSxnQkFBTSxFQUFDLE1BSFQ7QUFJRSxlQUFLLEVBQUMsTUFKUjtBQUtFLGFBQUcsRUFBQztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFRRTtBQUFBLGtDQUNFLHFFQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLHFCQUFTLEVBQUMsdUJBQXRCO0FBQUEsc0JBQStDRixNQUEvQyxhQUErQ0EsTUFBL0MsdUJBQStDQSxNQUFNLENBQUVHO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBVyxxQkFBUyxFQUFDLFdBQXJCO0FBQUEsc0JBQWtDSjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNFLHFFQUFDLG9EQUFELENBQU0sR0FBTjtBQUNFLGFBQUcsRUFDREssc0RBQU0sQ0FBQ04sS0FBRCxDQUFOLENBQ0dPLE1BREgsQ0FDVSxHQURWLEVBRUdDLElBRkgsQ0FFUSxRQUZSLEVBR0dDLEdBSEgsQ0FHTyxNQUhQLEVBSUdDLEdBSkgsRUFGSjtBQU9FLGFBQUcsRUFBQztBQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLGVBeUJFLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLGdDQUNFLHFFQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLG1CQUFTLEVBQUMsaUJBQXRCO0FBQUEsb0JBQXlDWjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsb0JBQVlDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQStCSUksSUFBSSxpQkFDSixxRUFBQyxnREFBRCxrQ0FBVUEsSUFBVjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5Q0QsQ0ExQ0Q7O0tBQU1OLFE7QUE0Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU2YWZlMTQ5MTRhNTc2MGYwZmJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSAnbGliL2FwaSc7XHJcblxyXG5jb25zdCBDYXJkSXRlbSA9ICh7dGl0bGUsIHN1YnRpdGxlLCBpbWFnZSwgZGF0ZSwgYXV0aG9yLCBsaW5rfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2Bmai1jYXJkYH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXdyYXBwZXJcIj5cclxuICAgICAgICA8Q2FyZC5IZWFkZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2F1dGhvcj8uYXZhdGFyIHx8ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwJ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgbXItM1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIi8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG1iLTFcIj57YXV0aG9yPy5uYW1lfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJjYXJkLWRhdGVcIj57ZGF0ZX08L0NhcmQuVGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3IG92ZXJsYXlcIj5cclxuICAgICAgICAgIDxDYXJkLkltZ1xyXG4gICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgIHVybEZvcihpbWFnZSlcclxuICAgICAgICAgICAgICAgIC5oZWlnaHQoMzAwKVxyXG4gICAgICAgICAgICAgICAgLmNyb3AoJ2NlbnRlcicpXHJcbiAgICAgICAgICAgICAgICAuZml0KCdjbGlwJylcclxuICAgICAgICAgICAgICAgIC51cmwoKX1cclxuICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwiY2FyZC1tYWluLXRpdGxlXCI+e3RpdGxlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgIDxDYXJkLlRleHQ+e3N1YnRpdGxlfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyBsaW5rICYmXHJcbiAgICAgICAgPExpbmsgey4uLmxpbmt9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1idXR0b25cIj5cclxuICAgICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICB9XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSXRlbTsiXSwic291cmNlUm9vdCI6IiJ9