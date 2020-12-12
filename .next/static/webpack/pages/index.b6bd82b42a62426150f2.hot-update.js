webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: urlFor, getAllBlogs, getBlogBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlFor", function() { return urlFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlogs", function() { return getAllBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogBySlug", function() { return getBlogBySlug; });
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanity */ "./lib/sanity.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_sanity__WEBPACK_IMPORTED_MODULE_0__["default"]);
function urlFor(source) {
  return builder.image(source);
}
async function getAllBlogs() {
  const results = await _sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
}
async function getBlogBySlug(slug) {
  const result = await _sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`, {
    slug
  }).then(res => res === null || res === void 0 ? void 0 : res[0]);
  return result;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJibG9nRmllbGRzIiwiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiZ2V0QWxsQmxvZ3MiLCJyZXN1bHRzIiwiZmV0Y2giLCJnZXRCbG9nQnlTbHVnIiwic2x1ZyIsInJlc3VsdCIsInRoZW4iLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQVNBLE1BQU1DLE9BQU8sR0FBR0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBL0I7QUFFTyxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUM3QixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0Q7QUFFTSxlQUFlRSxXQUFmLEdBQTZCO0FBQ2xDLFFBQU1DLE9BQU8sR0FBRyxNQUFNTCwrQ0FBTSxDQUN6Qk0sS0FEbUIsQ0FDWixzQkFBcUJULFVBQVcsR0FEcEIsQ0FBdEI7QUFFQSxTQUFPUSxPQUFQO0FBQ0Q7QUFHTSxlQUFlRSxhQUFmLENBQTZCQyxJQUE3QixFQUFtQztBQUN4QyxRQUFNQyxNQUFNLEdBQUcsTUFBTVQsK0NBQU0sQ0FDeEJNLEtBRGtCLENBQ1g7QUFDWixRQUFRVCxVQUFXO0FBQ25CO0FBQ0EsTUFKdUIsRUFJZjtBQUFDVztBQUFELEdBSmUsRUFLbEJFLElBTGtCLENBS2JDLEdBQUcsSUFBSUEsR0FBSixhQUFJQSxHQUFKLHVCQUFJQSxHQUFHLENBQUcsQ0FBSCxDQUxHLENBQXJCO0FBT0EsU0FBT0YsTUFBUDtBQUVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2YmQ4MmI0MmE2MjQyNjE1MGYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gJy4vc2FuaXR5JztcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcblxyXG5jb25zdCBibG9nRmllbGRzID0gYFxyXG4gIHRpdGxlLFxyXG4gIHN1YnRpdGxlLFxyXG4gICdzbHVnJzogc2x1Zy5jdXJyZW50LFxyXG4gIGRhdGUsXHJcbiAgJ2F1dGhvcic6IGF1dGhvci0+e25hbWUsICdhdmF0YXInOiBhdmF0YXIuYXNzZXQtPnVybH0sXHJcbiAgY292ZXJJbWFnZSxcclxuYFxyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCbG9ncygpIHtcclxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2xpZW50XHJcbiAgICAuZmV0Y2goYCpbX3R5cGUgPT0gXCJibG9nXCJdeyR7YmxvZ0ZpZWxkc319YCk7XHJcbiAgcmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ0J5U2x1ZyhzbHVnKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50XHJcbiAgICAuZmV0Y2goYCpbX3R5cGUgPT0gXCJibG9nXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXSB7XHJcbiAgICAgICR7YmxvZ0ZpZWxkc31cclxuICAgICAgY29udGVudFtdey4uLiwgXCJhc3NldFwiOiBhc3NldC0+fVxyXG4gICAgfWAsIHtzbHVnfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXM/LlswXSlcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9