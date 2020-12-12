webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./components/BlogContent.js":
/*!***********************************!*\
  !*** ./components/BlogContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_HighlightCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/HighlightCode */ "./components/HighlightCode.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/api */ "./lib/api.js");

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\BlogContent.js";



const serializers = {
  types: {
    code: ({
      node: {
        language,
        code,
        filename
      }
    }) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_HighlightCode__WEBPACK_IMPORTED_MODULE_2__["default"], {
        language: language,
        children: [code, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "code-filename",
          children: filename
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined);
    },
    image: ({
      node: {
        asset,
        alt,
        position
      }
    }) => {
      debugger;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "blog-image",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: Object(lib_api__WEBPACK_IMPORTED_MODULE_3__["urlFor"])(asset).height(300).fit('max').url()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image-alt",
          children: alt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined);
    }
  }
};

const BlogContent = ({
  content
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
  serializers: serializers,
  blocks: content
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 28,
  columnNumber: 3
}, undefined);

_c = BlogContent;
/* harmony default export */ __webpack_exports__["default"] = (BlogContent);

var _c;

$RefreshReg$(_c, "BlogContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nQ29udGVudC5qcyJdLCJuYW1lcyI6WyJzZXJpYWxpemVycyIsInR5cGVzIiwiY29kZSIsIm5vZGUiLCJsYW5ndWFnZSIsImZpbGVuYW1lIiwiaW1hZ2UiLCJhc3NldCIsImFsdCIsInBvc2l0aW9uIiwidXJsRm9yIiwiaGVpZ2h0IiwiZml0IiwidXJsIiwiQmxvZ0NvbnRlbnQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLENBQUM7QUFBQ0MsVUFBSSxFQUFFO0FBQUNDLGdCQUFEO0FBQVdGLFlBQVg7QUFBaUJHO0FBQWpCO0FBQVAsS0FBRCxLQUF3QztBQUM1QywwQkFDRSxxRUFBQyxnRUFBRDtBQUFlLGdCQUFRLEVBQUVELFFBQXpCO0FBQUEsbUJBQ0dGLElBREgsZUFFRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLG9CQUFnQ0c7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFNRCxLQVJJO0FBU0xDLFNBQUssRUFBRSxDQUFDO0FBQUNILFVBQUksRUFBRTtBQUFDSSxhQUFEO0FBQVFDLFdBQVI7QUFBYUM7QUFBYjtBQUFQLEtBQUQsS0FBb0M7QUFDdkM7QUFDRiwwQkFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFQyxzREFBTSxDQUFDSCxLQUFELENBQU4sQ0FBY0ksTUFBZCxDQUFxQixHQUFyQixFQUEwQkMsR0FBMUIsQ0FBOEIsS0FBOUIsRUFBcUNDLEdBQXJDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsb0JBQTRCTDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQU1EO0FBakJJO0FBRFcsQ0FBcEI7O0FBc0JBLE1BQU1NLFdBQVcsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxrQkFDbEIscUVBQUMscUVBQUQ7QUFDRSxhQUFXLEVBQUVmLFdBRGY7QUFFRSxRQUFNLEVBQUVlO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztLQUFNRCxXO0FBTVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL1tzbHVnXS5lMDQ1ZmFlOTEwNzE3MjY3NTEwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnO1xyXG5pbXBvcnQgSGlnaGxpZ2h0Q29kZSBmcm9tICdjb21wb25lbnRzL0hpZ2hsaWdodENvZGUnO1xyXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICdsaWIvYXBpJztcclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBjb2RlOiAoe25vZGU6IHtsYW5ndWFnZSwgY29kZSwgZmlsZW5hbWV9fSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIaWdobGlnaHRDb2RlIGxhbmd1YWdlPXtsYW5ndWFnZX0+XHJcbiAgICAgICAgICB7Y29kZX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1maWxlbmFtZVwiPntmaWxlbmFtZX08L2Rpdj5cclxuICAgICAgICA8L0hpZ2hsaWdodENvZGU+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICBpbWFnZTogKHtub2RlOiB7YXNzZXQsIGFsdCwgcG9zaXRpb259fSkgPT4ge1xyXG4gICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGFzc2V0KS5oZWlnaHQoMzAwKS5maXQoJ21heCcpLnVybCgpfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1hbHRcIj57YWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBCbG9nQ29udGVudCA9ICh7Y29udGVudH0pID0+XHJcbiAgPEJsb2NrQ29udGVudFxyXG4gICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgYmxvY2tzPXtjb250ZW50fVxyXG4gIC8+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nQ29udGVudDsiXSwic291cmNlUm9vdCI6IiJ9