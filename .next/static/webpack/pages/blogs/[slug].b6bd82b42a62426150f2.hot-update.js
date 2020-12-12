webpackHotUpdate_N_E("pages/blogs/[slug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJibG9nRmllbGRzIiwiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiZ2V0QWxsQmxvZ3MiLCJyZXN1bHRzIiwiZmV0Y2giLCJnZXRCbG9nQnlTbHVnIiwic2x1ZyIsInJlc3VsdCIsInRoZW4iLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQVNBLE1BQU1DLE9BQU8sR0FBR0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBL0I7QUFFTyxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUM3QixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0Q7QUFFTSxlQUFlRSxXQUFmLEdBQTZCO0FBQ2xDLFFBQU1DLE9BQU8sR0FBRyxNQUFNTCwrQ0FBTSxDQUN6Qk0sS0FEbUIsQ0FDWixzQkFBcUJULFVBQVcsR0FEcEIsQ0FBdEI7QUFFQSxTQUFPUSxPQUFQO0FBQ0Q7QUFHTSxlQUFlRSxhQUFmLENBQTZCQyxJQUE3QixFQUFtQztBQUN4QyxRQUFNQyxNQUFNLEdBQUcsTUFBTVQsK0NBQU0sQ0FDeEJNLEtBRGtCLENBQ1g7QUFDWixRQUFRVCxVQUFXO0FBQ25CO0FBQ0EsTUFKdUIsRUFJZjtBQUFDVztBQUFELEdBSmUsRUFLbEJFLElBTGtCLENBS2JDLEdBQUcsSUFBSUEsR0FBSixhQUFJQSxHQUFKLHVCQUFJQSxHQUFHLENBQUcsQ0FBSCxDQUxHLENBQXJCO0FBT0EsU0FBT0YsTUFBUDtBQUVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL1tzbHVnXS5iNmJkODJiNDJhNjI0MjYxNTBmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tICcuL3Nhbml0eSc7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuY29uc3QgYmxvZ0ZpZWxkcyA9IGBcclxuICB0aXRsZSxcclxuICBzdWJ0aXRsZSxcclxuICAnc2x1Zyc6IHNsdWcuY3VycmVudCxcclxuICBkYXRlLFxyXG4gICdhdXRob3InOiBhdXRob3ItPntuYW1lLCAnYXZhdGFyJzogYXZhdGFyLmFzc2V0LT51cmx9LFxyXG4gIGNvdmVySW1hZ2UsXHJcbmBcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQmxvZ3MoKSB7XHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudFxyXG4gICAgLmZldGNoKGAqW190eXBlID09IFwiYmxvZ1wiXXske2Jsb2dGaWVsZHN9fWApO1xyXG4gIHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJsb2dCeVNsdWcoc2x1Zykge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudFxyXG4gICAgLmZldGNoKGAqW190eXBlID09IFwiYmxvZ1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z10ge1xyXG4gICAgICAke2Jsb2dGaWVsZHN9XHJcbiAgICAgIGNvbnRlbnRbXXsuLi4sIFwiYXNzZXRcIjogYXNzZXQtPn1cclxuICAgIH1gLCB7c2x1Z30pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzPy5bMF0pXHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==