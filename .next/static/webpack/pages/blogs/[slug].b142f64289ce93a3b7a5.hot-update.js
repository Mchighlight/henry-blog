webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getAllBlogs, getBlogBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlogs", function() { return getAllBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogBySlug", function() { return getBlogBySlug; });
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanity */ "./lib/sanity.js");

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url
  
`;
async function getAllBlogs() {
  const results = await _sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
}
async function getBlogBySlug(slug) {
  const result = await _sanity__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(`*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
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

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "./node_modules/@sanity/client/lib/sanityClient.js");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: false // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data

};
/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(options));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * EventSource polyfill
 * Originally published by sc AmvTek srl (https://github.com/amvtek/EventSource) - devel@amvtek.com
 * Forked by Espen Hovlandsdal to fix a few issues + publish latest version
 */

;(function (root, factory) {
  /* global define */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else { var evsImportName; }
})(typeof self === 'undefined' ? this : self, function () {
  var EventSource = function (url, options) {
    if (!url || typeof url != 'string') {
      throw new SyntaxError('Not enough arguments')
    }

    this.URL = url
    this.setOptions(options)
    var evs = this
    setTimeout(function () {
      evs.poll()
    }, 0)
  }

  EventSource.prototype = {
    CONNECTING: 0,

    OPEN: 1,

    CLOSED: 2,

    defaultOptions: {
      loggingEnabled: false,

      loggingPrefix: 'eventsource',

      interval: 500, // milliseconds

      bufferSizeLimit: 256 * 1024, // bytes

      silentTimeout: 300000, // milliseconds

      getArgs: {
        evs_buffer_size_limit: 256 * 1024,
      },

      xhrHeaders: {
        Accept: 'text/event-stream',
        'Cache-Control': 'no-cache',
        'X-Requested-With': 'XMLHttpRequest',
      },
    },

    setOptions: function (options) {
      var defaults = this.defaultOptions
      var option

      // set all default options...
      for (option in defaults) {
        if (defaults.hasOwnProperty(option)) {
          this[option] = defaults[option]
        }
      }

      // override with what is in options
      for (option in options) {
        if (option in defaults && options.hasOwnProperty(option)) {
          this[option] = options[option]
        }
      }

      // if getArgs option is enabled
      // ensure evs_buffer_size_limit corresponds to bufferSizeLimit
      if (this.getArgs && this.bufferSizeLimit) {
        this.getArgs.evs_buffer_size_limit = this.bufferSizeLimit
      }

      // if console is not available, force loggingEnabled to false
      // eslint-disable-next-line no-console
      if (typeof console === 'undefined' || typeof console.log === 'undefined') {
        this.loggingEnabled = false
      }
    },

    log: function (message) {
      if (this.loggingEnabled) {
        // eslint-disable-next-line no-console
        console.log('[' + this.loggingPrefix + ']:' + message)
      }
    },

    poll: function () {
      try {
        if (this.readyState == this.CLOSED) {
          return
        }

        this.cleanup()
        this.readyState = this.CONNECTING
        this.cursor = 0
        this.cache = ''
        this._xhr = new this.XHR(this)
        this.resetNoActivityTimer()
      } catch (err) {
        // in an attempt to silence the errors
        this.log('There were errors inside the pool try-catch')
        this.dispatchEvent('error', {type: 'error', data: err.message})
      }
    },

    pollAgain: function (interval) {
      // schedule poll to be called after interval milliseconds
      var evs = this
      evs.readyState = evs.CONNECTING
      evs.dispatchEvent('error', {
        type: 'error',
        data: 'Reconnecting ',
      })
      this._pollTimer = setTimeout(function () {
        evs.poll()
      }, interval || 0)
    },

    cleanup: function () {
      this.log('evs cleaning up')

      if (this._pollTimer) {
        clearInterval(this._pollTimer)
        this._pollTimer = null
      }

      if (this._noActivityTimer) {
        clearInterval(this._noActivityTimer)
        this._noActivityTimer = null
      }

      if (this._xhr) {
        this._xhr.abort()
        this._xhr = null
      }
    },

    resetNoActivityTimer: function () {
      if (this.silentTimeout) {
        if (this._noActivityTimer) {
          clearInterval(this._noActivityTimer)
        }
        var evs = this
        this._noActivityTimer = setTimeout(function () {
          evs.log('Timeout! silentTImeout:' + evs.silentTimeout)
          evs.pollAgain()
        }, this.silentTimeout)
      }
    },

    close: function () {
      this.readyState = this.CLOSED
      this.log('Closing connection. readyState: ' + this.readyState)
      this.cleanup()
    },

    _onxhrdata: function () {
      var request = this._xhr

      if (request.isReady() && !request.hasError()) {
        // reset the timer, as we have activity
        this.resetNoActivityTimer()

        // move this EventSource to OPEN state...
        if (this.readyState == this.CONNECTING) {
          this.readyState = this.OPEN
          this.dispatchEvent('open', {type: 'open'})
        }

        var buffer = request.getBuffer()

        if (buffer.length > this.bufferSizeLimit) {
          this.log('buffer.length > this.bufferSizeLimit')
          this.pollAgain()
        }

        if (this.cursor == 0 && buffer.length > 0) {
          // skip byte order mark \uFEFF character if it starts the stream
          if (buffer.substring(0, 1) == '\uFEFF') {
            this.cursor = 1
          }
        }

        var lastMessageIndex = this.lastMessageIndex(buffer)
        if (lastMessageIndex[0] >= this.cursor) {
          var newcursor = lastMessageIndex[1]
          var toparse = buffer.substring(this.cursor, newcursor)
          this.parseStream(toparse)
          this.cursor = newcursor
        }

        // if request is finished, reopen the connection
        if (request.isDone()) {
          this.log('request.isDone(). reopening the connection')
          this.pollAgain(this.interval)
        }
      } else if (this.readyState !== this.CLOSED) {
        this.log('this.readyState !== this.CLOSED')
        this.pollAgain(this.interval)

        //MV: Unsure why an error was previously dispatched
      }
    },

    parseStream: function (chunk) {
      // normalize line separators (\r\n,\r,\n) to \n
      // remove white spaces that may precede \n
      chunk = this.cache + this.normalizeToLF(chunk)

      var events = chunk.split('\n\n')

      var i, j, eventType, datas, line, retry

      for (i = 0; i < events.length - 1; i++) {
        eventType = 'message'
        datas = []
        var parts = events[i].split('\n')

        for (j = 0; j < parts.length; j++) {
          line = this.trimWhiteSpace(parts[j])

          if (line.indexOf('event') == 0) {
            eventType = line.replace(/event:?\s*/, '')
          } else if (line.indexOf('retry') == 0) {
            retry = parseInt(line.replace(/retry:?\s*/, ''), 10)
            if (!isNaN(retry)) {
              this.interval = retry
            }
          } else if (line.indexOf('data') == 0) {
            datas.push(line.replace(/data:?\s*/, ''))
          } else if (line.indexOf('id:') == 0) {
            this.lastEventId = line.replace(/id:?\s*/, '')
          } else if (line.indexOf('id') == 0) {
            // this resets the id

            this.lastEventId = null
          }
        }

        if (datas.length && this.readyState != this.CLOSED) {
          // dispatch a new event
          var event = new MessageEvent(
            eventType,
            datas.join('\n'),
            typeof window !== 'undefined' && typeof window.location !== 'undefined'
              ? window.location.origin
              : null,
            this.lastEventId
          )
          this.dispatchEvent(eventType, event)
        }
      }

      this.cache = events[events.length - 1]
    },

    dispatchEvent: function (type, event) {
      var handlers = this['_' + type + 'Handlers']

      if (handlers) {
        for (var i = 0; i < handlers.length; i++) {
          handlers[i].call(this, event)
        }
      }

      if (this['on' + type]) {
        this['on' + type].call(this, event)
      }
    },

    addEventListener: function (type, handler) {
      if (!this['_' + type + 'Handlers']) {
        this['_' + type + 'Handlers'] = []
      }

      this['_' + type + 'Handlers'].push(handler)
    },

    removeEventListener: function (type, handler) {
      var handlers = this['_' + type + 'Handlers']
      if (!handlers) {
        return
      }
      for (var i = handlers.length - 1; i >= 0; --i) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1)
          break
        }
      }
    },

    _pollTimer: null,

    _noactivityTimer: null,

    _xhr: null,

    lastEventId: null,

    cache: '',

    cursor: 0,

    onerror: null,

    onmessage: null,

    onopen: null,

    readyState: 0,

    // ===================================================================
    // helpers functions
    // those are attached to prototype to ease reuse and testing...

    urlWithParams: function (baseURL, params) {
      var encodedArgs = []

      if (params) {
        var key, urlarg
        var urlize = encodeURIComponent

        for (key in params) {
          if (params.hasOwnProperty(key)) {
            urlarg = urlize(key) + '=' + urlize(params[key])
            encodedArgs.push(urlarg)
          }
        }
      }

      if (encodedArgs.length > 0) {
        if (baseURL.indexOf('?') == -1) return baseURL + '?' + encodedArgs.join('&')
        return baseURL + '&' + encodedArgs.join('&')
      }
      return baseURL
    },

    lastMessageIndex: function (text) {
      var ln2 = text.lastIndexOf('\n\n')
      var lr2 = text.lastIndexOf('\r\r')
      var lrln2 = text.lastIndexOf('\r\n\r\n')

      if (lrln2 > Math.max(ln2, lr2)) {
        return [lrln2, lrln2 + 4]
      }
      return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]
    },

    trimWhiteSpace: function (str) {
      // to remove whitespaces left and right of string

      var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g
      return str.replace(reTrim, '')
    },

    normalizeToLF: function (str) {
      // replace \r and \r\n with \n
      return str.replace(/\r\n|\r/g, '\n')
    },
  }

  if (isOldIE()) {
    EventSource.isPolyfill = 'IE_8-9'

    // patch EventSource defaultOptions
    var defaults = EventSource.prototype.defaultOptions
    defaults.xhrHeaders = null // no headers will be sent
    defaults.getArgs.evs_preamble = 2048 + 8

    // EventSource will send request using Internet Explorer XDomainRequest
    EventSource.prototype.XHR = function (evs) {
      /* global XDomainRequest */
      var request = new XDomainRequest()
      this._request = request

      // set handlers
      request.onprogress = function () {
        request._ready = true
        evs._onxhrdata()
      }

      request.onload = function () {
        this._loaded = true
        evs._onxhrdata()
      }

      request.onerror = function () {
        this._failed = true
        evs.readyState = evs.CLOSED
        evs.dispatchEvent('error', {
          type: 'error',
          data: 'XDomainRequest error',
        })
      }

      request.ontimeout = function () {
        this._failed = true
        evs.readyState = evs.CLOSED
        evs.dispatchEvent('error', {
          type: 'error',
          data: 'XDomainRequest timed out',
        })
      }

      // XDomainRequest does not allow setting custom headers
      // If EventSource has enabled the use of GET arguments
      // we add parameters to URL so that server can adapt the stream...
      var reqGetArgs = {}
      if (evs.getArgs) {
        // copy evs.getArgs in reqGetArgs
        var defaultArgs = evs.getArgs
        for (var key in defaultArgs) {
          if (defaultArgs.hasOwnProperty(key)) {
            reqGetArgs[key] = defaultArgs[key]
          }
        }
        if (evs.lastEventId) {
          reqGetArgs.evs_last_event_id = evs.lastEventId
        }
      }
      // send the request

      request.open('GET', evs.urlWithParams(evs.URL, reqGetArgs))
      request.send()
    }

    EventSource.prototype.XHR.prototype = {
      useXDomainRequest: true,

      _request: null,

      _ready: false, // true when progress events are dispatched

      _loaded: false, // true when request has been loaded

      _failed: false, // true if when request is in error

      isReady: function () {
        return this._request._ready
      },

      isDone: function () {
        return this._request._loaded
      },

      hasError: function () {
        return this._request._failed
      },

      getBuffer: function () {
        var rv = ''
        try {
          rv = this._request.responseText || ''
        } catch (err) {
          // intentional noop
        }
        return rv
      },

      abort: function () {
        if (this._request) {
          this._request.abort()
        }
      },
    }
  } else {
    EventSource.isPolyfill = 'XHR'

    // EventSource will send request using XMLHttpRequest
    EventSource.prototype.XHR = function (evs) {
      var request = new XMLHttpRequest()
      this._request = request
      evs._xhr = this

      // set handlers
      request.onreadystatechange = function () {
        if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
          if (request.status == 200 || (request.status >= 300 && request.status < 400)) {
            evs._onxhrdata()
          } else {
            request._failed = true
            evs.readyState = evs.CLOSED
            evs.dispatchEvent('error', {
              type: 'error',
              data: 'The server responded with ' + request.status,
            })
            evs.close()
          }
        }
      }

      request.onprogress = function () {
        // intentional noop
      }

      request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true)

      var headers = evs.xhrHeaders // maybe null
      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          request.setRequestHeader(header, headers[header])
        }
      }
      if (evs.lastEventId) {
        request.setRequestHeader('Last-Event-Id', evs.lastEventId)
      }

      request.send()
    }

    EventSource.prototype.XHR.prototype = {
      useXDomainRequest: false,

      _request: null,

      _failed: false, // true if we have had errors...

      isReady: function () {
        return this._request.readyState >= 2
      },

      isDone: function () {
        return this._request.readyState == 4
      },

      hasError: function () {
        return this._failed || this._request.status >= 400
      },

      getBuffer: function () {
        var rv = ''
        try {
          rv = this._request.responseText || ''
        } catch (err) {
          // intentional noop
        }
        return rv
      },

      abort: function () {
        if (this._request) {
          this._request.abort()
        }
      },
    }
  }

  function MessageEvent(type, data, origin, lastEventId) {
    this.bubbles = false
    this.cancelBubble = false
    this.cancelable = false
    this.data = data || null
    this.origin = origin || ''
    this.lastEventId = lastEventId || ''
    this.type = type || 'message'
  }

  function isOldIE() {
    //return true if we are in IE8 or IE9
    return Boolean(
      typeof window !== 'undefined' &&
        window.XDomainRequest &&
        window.XMLHttpRequest &&
        new XMLHttpRequest().responseType === undefined
    )
  }

  return EventSource
})


/***/ }),

/***/ "./node_modules/@sanity/client/lib/assets/assetsClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/assets/assetsClient.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require.map;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require2.filter;

var queryString = __webpack_require__(/*! ../http/queryString */ "./node_modules/@sanity/client/lib/http/queryString.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function AssetsClient(client) {
  this.client = client;
}

function toDocument(body) {
  // todo: rewrite to just return body.document in a while
  var document = body.document;
  Object.defineProperty(document, 'document', {
    enumerable: false,
    get: function get() {
      // eslint-disable-next-line no-console
      console.warn('The promise returned from client.asset.upload(...) now resolves with the asset document');
      return document;
    }
  });
  return document;
}

function optionsFromFile(opts, file) {
  if (typeof window === 'undefined' || !(file instanceof window.File)) {
    return opts;
  }

  return assign({
    filename: opts.preserveFilename === false ? undefined : file.name,
    contentType: file.type
  }, opts);
}

assign(AssetsClient.prototype, {
  /**
   * Upload an asset
   *
   * @param  {String} assetType `image` or `file`
   * @param  {File|Blob|Buffer|ReadableStream} body File to upload
   * @param  {Object}  opts Options for the upload
   * @param  {Boolean} opts.preserveFilename Whether or not to preserve the original filename (default: true)
   * @param  {String}  opts.filename Filename for this file (optional)
   * @param  {Number}  opts.timeout  Milliseconds to wait before timing the request out (default: 0)
   * @param  {String}  opts.contentType Mime type of the file
   * @param  {Array}   opts.extract Array of metadata parts to extract from image.
   *                                 Possible values: `location`, `exif`, `image`, `palette`
   * @param  {String}  opts.label Label
   * @param  {String}  opts.title Title
   * @param  {String}  opts.description Description
   * @param  {String}  opts.creditLine The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published
   * @param  {Object}  opts.source Source data (when the asset is from an external service)
   * @param  {String}  opts.source.id The (u)id of the asset within the source, i.e. 'i-f323r1E'
   *                                  Required if source is defined
   * @param  {String}  opts.source.name The name of the source, i.e. 'unsplash'
   *                                  Required if source is defined
   * @param  {String}  opts.source.url A url to where to find the asset, or get more info about it in the source
   *                                  Optional
   * @return {Promise} Resolves with the created asset document
   */
  upload: function upload(assetType, body) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    validators.validateAssetType(assetType); // If an empty array is given, explicitly set `none` to override API defaults

    var meta = opts.extract || undefined;

    if (meta && !meta.length) {
      meta = ['none'];
    }

    var dataset = validators.hasDataset(this.client.clientConfig);
    var assetEndpoint = assetType === 'image' ? 'images' : 'files';
    var options = optionsFromFile(opts, body);
    var label = options.label,
        title = options.title,
        description = options.description,
        creditLine = options.creditLine,
        filename = options.filename,
        source = options.source;
    var query = {
      label: label,
      title: title,
      description: description,
      filename: filename,
      meta: meta,
      creditLine: creditLine
    };

    if (source) {
      query.sourceId = source.id;
      query.sourceName = source.name;
      query.sourceUrl = source.url;
    }

    var observable = this.client._requestObservable({
      method: 'POST',
      timeout: options.timeout || 0,
      uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
      headers: options.contentType ? {
        'Content-Type': options.contentType
      } : {},
      query: query,
      body: body
    });

    return this.client.isPromiseAPI() ? observable.pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return toDocument(event.body);
    })).toPromise() : observable;
  },
  delete: function _delete(type, id) {
    // eslint-disable-next-line no-console
    console.warn('client.assets.delete() is deprecated, please use client.delete(<document-id>)');
    var docId = id || '';

    if (!/^(image|file)-/.test(docId)) {
      docId = "".concat(type, "-").concat(docId);
    } else if (type._id) {
      // We could be passing an entire asset document instead of an ID
      docId = type._id;
    }

    validators.hasDataset(this.client.clientConfig);
    return this.client.delete(docId);
  },
  getImageUrl: function getImageUrl(ref, query) {
    var id = ref._ref || ref;

    if (typeof id !== 'string') {
      throw new Error('getImageUrl() needs either an object with a _ref, or a string with an asset document ID');
    }

    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
      throw new Error("Unsupported asset ID \"".concat(id, "\". URL generation only works for auto-generated IDs."));
    }

    var _id$split = id.split('-'),
        _id$split2 = _slicedToArray(_id$split, 4),
        assetId = _id$split2[1],
        size = _id$split2[2],
        format = _id$split2[3];

    validators.hasDataset(this.client.clientConfig);
    var _this$client$clientCo = this.client.clientConfig,
        projectId = _this$client$clientCo.projectId,
        dataset = _this$client$clientCo.dataset;
    var qs = query ? queryString(query) : '';
    return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format).concat(qs);
  }
});
module.exports = AssetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/auth/authClient.js":
/*!************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/auth/authClient.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function AuthClient(client) {
  this.client = client;
}

assign(AuthClient.prototype, {
  getLoginProviders: function getLoginProviders() {
    return this.client.request({
      uri: '/auth/providers'
    });
  },
  logout: function logout() {
    return this.client.request({
      uri: '/auth/logout',
      method: 'POST'
    });
  }
});
module.exports = AuthClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/config.js":
/*!***************************************************!*\
  !*** ./node_modules/@sanity/client/lib/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ./validators */ "./node_modules/@sanity/client/lib/validators.js");

var once = __webpack_require__(/*! ./util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var defaultCdnHost = 'apicdn.sanity.io';
var defaultConfig = {
  apiHost: 'https://api.sanity.io',
  useProjectHostname: true,
  gradientMode: false,
  isPromiseAPI: true
};
var LOCALHOSTS = ['localhost', '127.0.0.1', '0.0.0.0'];

var isLocal = function isLocal(host) {
  return LOCALHOSTS.indexOf(host) !== -1;
}; // eslint-disable-next-line no-console


var createWarningPrinter = function createWarningPrinter(message) {
  return once(function () {
    return console.warn(message.join(' '));
  });
};

var printCdnWarning = createWarningPrinter(['You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and', "cheaper. Think about it! For more info, see ".concat(generateHelpUrl('js-client-cdn-configuration'), "."), 'To hide this warning, please set the `useCdn` option to either `true` or `false` when creating', 'the client.']);
var printBrowserTokenWarning = createWarningPrinter(['You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.', "See ".concat(generateHelpUrl('js-client-browser-token'), " for more information and how to hide this warning.")]);
var printCdnTokenWarning = createWarningPrinter(['You have set `useCdn` to `true` while also specifying a token. This is usually not what you', 'want. The CDN cannot be used with an authorization token, since private data cannot be cached.', "See ".concat(generateHelpUrl('js-client-usecdn-token'), " for more information.")]);
exports.defaultConfig = defaultConfig;

exports.initConfig = function (config, prevConfig) {
  var newConfig = assign({}, defaultConfig, prevConfig, config);
  var gradientMode = newConfig.gradientMode;
  var projectBased = !gradientMode && newConfig.useProjectHostname;

  if (typeof Promise === 'undefined') {
    var helpUrl = generateHelpUrl('js-client-promise-polyfill');
    throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
  }

  if (gradientMode && !newConfig.namespace) {
    throw new Error('Configuration must contain `namespace` when running in gradient mode');
  }

  if (projectBased && !newConfig.projectId) {
    throw new Error('Configuration must contain `projectId`');
  }

  var isBrowser = typeof window !== 'undefined' && window.location && window.location.hostname;
  var isLocalhost = isBrowser && isLocal(window.location.hostname);

  if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
    printBrowserTokenWarning();
  } else if ((!isBrowser || isLocalhost) && newConfig.useCdn && newConfig.token) {
    printCdnTokenWarning();
  } else if (typeof newConfig.useCdn === 'undefined') {
    printCdnWarning();
  }

  if (projectBased) {
    validate.projectId(newConfig.projectId);
  }

  if (!gradientMode && newConfig.dataset) {
    validate.dataset(newConfig.dataset, newConfig.gradientMode);
  }

  newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
  newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;

  if (newConfig.gradientMode) {
    newConfig.url = newConfig.apiHost;
    newConfig.cdnUrl = newConfig.apiHost;
  } else {
    var hostParts = newConfig.apiHost.split('://', 2);
    var protocol = hostParts[0];
    var host = hostParts[1];
    var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;

    if (newConfig.useProjectHostname) {
      newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v1");
      newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v1");
    } else {
      newConfig.url = "".concat(newConfig.apiHost, "/v1");
      newConfig.cdnUrl = newConfig.url;
    }
  }

  return newConfig;
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/dataMethods.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/dataMethods.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var Transaction = __webpack_require__(/*! ./transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var listen = __webpack_require__(/*! ./listen */ "./node_modules/@sanity/client/lib/data/listen.js");

var excludeFalsey = function excludeFalsey(param, defValue) {
  var value = typeof param === 'undefined' ? defValue : param;
  return param === false ? undefined : value;
};

var getMutationQuery = function getMutationQuery() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    returnIds: true,
    returnDocuments: excludeFalsey(options.returnDocuments, true),
    visibility: options.visibility || 'sync'
  };
};

var isResponse = function isResponse(event) {
  return event.type === 'response';
};

var getBody = function getBody(event) {
  return event.body;
};

var indexBy = function indexBy(docs, attr) {
  return docs.reduce(function (indexed, doc) {
    indexed[attr(doc)] = doc;
    return indexed;
  }, Object.create(null));
};

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

var getQuerySizeLimit = 11264;
module.exports = {
  listen: listen,
  getDataUrl: function getDataUrl(operation, path) {
    var config = this.clientConfig;
    var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
    var baseUri = "/".concat(operation, "/").concat(catalog);
    var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
    return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, '$1');
  },
  fetch: function fetch(query, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var mapResponse = options.filterResponse === false ? function (res) {
      return res;
    } : function (res) {
      return res.result;
    };

    var observable = this._dataRequest('query', {
      query: query,
      params: params
    }, options).pipe(map(mapResponse));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocument: function getDocument(id) {
    var options = {
      uri: this.getDataUrl('doc', id),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      return event.body.documents && event.body.documents[0];
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocuments: function getDocuments(ids) {
    var options = {
      uri: this.getDataUrl('doc', ids.join(',')),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      var indexed = indexBy(event.body.documents || [], function (doc) {
        return doc._id;
      });
      return ids.map(function (id) {
        return indexed[id] || null;
      });
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  create: function create(doc, options) {
    return this._create(doc, 'create', options);
  },
  createIfNotExists: function createIfNotExists(doc, options) {
    validators.requireDocumentId('createIfNotExists', doc);
    return this._create(doc, 'createIfNotExists', options);
  },
  createOrReplace: function createOrReplace(doc, options) {
    validators.requireDocumentId('createOrReplace', doc);
    return this._create(doc, 'createOrReplace', options);
  },
  patch: function patch(selector, operations) {
    return new Patch(selector, operations, this);
  },
  delete: function _delete(selection, options) {
    return this.dataRequest('mutate', {
      mutations: [{
        delete: getSelection(selection)
      }]
    }, options);
  },
  mutate: function mutate(mutations, options) {
    var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
    var muts = Array.isArray(mut) ? mut : [mut];
    var transactionId = options && options.transactionId;
    return this.dataRequest('mutate', {
      mutations: muts,
      transactionId: transactionId
    }, options);
  },
  transaction: function transaction(operations) {
    return new Transaction(operations, this);
  },
  dataRequest: function dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var request = this._dataRequest(endpoint, body, options);

    return this.isPromiseAPI() ? toPromise(request) : request;
  },
  _dataRequest: function _dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var isMutation = endpoint === 'mutate'; // Check if the query string is within a configured threshold,
    // in which case we can use GET. Otherwise, use POST.

    var strQuery = !isMutation && encodeQueryString(body);
    var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
    var stringQuery = useGet ? strQuery : '';
    var returnFirst = options.returnFirst;
    var timeout = options.timeout,
        token = options.token;
    var uri = this.getDataUrl(endpoint, stringQuery);
    var reqOptions = {
      method: useGet ? 'GET' : 'POST',
      uri: uri,
      json: true,
      body: useGet ? undefined : body,
      query: isMutation && getMutationQuery(options),
      timeout: timeout,
      token: token
    };
    return this._requestObservable(reqOptions).pipe(filter(isResponse), map(getBody), map(function (res) {
      if (!isMutation) {
        return res;
      } // Should we return documents?


      var results = res.results || [];

      if (options.returnDocuments) {
        return returnFirst ? results[0] && results[0].document : results.map(function (mut) {
          return mut.document;
        });
      } // Return a reduced subset


      var key = returnFirst ? 'documentId' : 'documentIds';
      var ids = returnFirst ? results[0] && results[0].id : results.map(function (mut) {
        return mut.id;
      });
      return _defineProperty({
        transactionId: res.transactionId,
        results: results
      }, key, ids);
    }));
  },
  _create: function _create(doc, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var mutation = _defineProperty({}, op, doc);

    var opts = assign({
      returnFirst: true,
      returnDocuments: true
    }, options);
    return this.dataRequest('mutate', {
      mutations: [mutation]
    }, opts);
  }
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/encodeQueryString.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/encodeQueryString.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enc = encodeURIComponent;

module.exports = function (_ref) {
  var query = _ref.query,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  var base = "?query=".concat(enc(query));
  var qString = Object.keys(params).reduce(function (qs, param) {
    return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
  }, base);
  return Object.keys(options).reduce(function (qs, option) {
    // Only include the option if it is truthy
    return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
  }, qString);
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/listen.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/listen.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var polyfilledEventSource = __webpack_require__(/*! @sanity/eventsource */ "./node_modules/@sanity/eventsource/browser.js");

var pick = __webpack_require__(/*! ../util/pick */ "./node_modules/@sanity/client/lib/util/pick.js");

var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/@sanity/client/lib/util/defaults.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var once = __webpack_require__(/*! ../util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var tokenWarning = ['Using token with listeners is not supported in browsers. ', "For more info, see ".concat(generateHelpUrl('js-client-listener-tokens-browser'), ".")]; // eslint-disable-next-line no-console

var printTokenWarning = once(function () {
  return console.warn(tokenWarning.join(' '));
});
var isWindowEventSource = Boolean(typeof window !== 'undefined' && window.EventSource);
var EventSource = isWindowEventSource ? window.EventSource // Native browser EventSource
: polyfilledEventSource; // Node.js, IE etc

var possibleOptions = ['includePreviousRevision', 'includeResult', 'visibility', 'effectFormat'];
var defaultOptions = {
  includeResult: true
};

module.exports = function listen(query, params) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = defaults(opts, defaultOptions);
  var listenOpts = pick(options, possibleOptions);
  var qs = encodeQueryString({
    query: query,
    params: params,
    options: listenOpts
  });
  var _this$clientConfig = this.clientConfig,
      url = _this$clientConfig.url,
      token = _this$clientConfig.token,
      withCredentials = _this$clientConfig.withCredentials;
  var uri = "".concat(url).concat(this.getDataUrl('listen', qs));
  var listenFor = options.events ? options.events : ['mutation'];
  var shouldEmitReconnect = listenFor.indexOf('reconnect') !== -1;

  if (token && isWindowEventSource) {
    printTokenWarning();
  }

  var esOptions = {};

  if (token || withCredentials) {
    esOptions.withCredentials = true;
  }

  if (token) {
    esOptions.headers = {
      Authorization: "Bearer ".concat(token)
    };
  }

  return new Observable(function (observer) {
    var es = getEventSource();
    var reconnectTimer;
    var stopped = false;

    function onError() {
      if (stopped) {
        return;
      }

      emitReconnect(); // Allow event handlers of `emitReconnect` to cancel/close the reconnect attempt

      if (stopped) {
        return;
      } // Unless we've explicitly stopped the ES (in which case `stopped` should be true),
      // we should never be in a disconnected state. By default, EventSource will reconnect
      // automatically, in which case it sets readyState to `CONNECTING`, but in some cases
      // (like when a laptop lid is closed), it closes the connection. In these cases we need
      // to explicitly reconnect.


      if (es.readyState === EventSource.CLOSED) {
        unsubscribe();
        clearTimeout(reconnectTimer);
        reconnectTimer = setTimeout(open, 100);
      }
    }

    function onChannelError(err) {
      observer.error(cooerceError(err));
    }

    function onMessage(evt) {
      var event = parseEvent(evt);
      return event instanceof Error ? observer.error(event) : observer.next(event);
    }

    function onDisconnect(evt) {
      stopped = true;
      unsubscribe();
      observer.complete();
    }

    function unsubscribe() {
      es.removeEventListener('error', onError, false);
      es.removeEventListener('channelError', onChannelError, false);
      es.removeEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return es.removeEventListener(type, onMessage, false);
      });
      es.close();
    }

    function emitReconnect() {
      if (shouldEmitReconnect) {
        observer.next({
          type: 'reconnect'
        });
      }
    }

    function getEventSource() {
      var evs = new EventSource(uri, esOptions);
      evs.addEventListener('error', onError, false);
      evs.addEventListener('channelError', onChannelError, false);
      evs.addEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return evs.addEventListener(type, onMessage, false);
      });
      return evs;
    }

    function open() {
      es = getEventSource();
    }

    function stop() {
      stopped = true;
      unsubscribe();
    }

    return stop;
  });
};

function parseEvent(event) {
  try {
    var data = event.data && JSON.parse(event.data) || {};
    return assign({
      type: event.type
    }, data);
  } catch (err) {
    return err;
  }
}

function cooerceError(err) {
  if (err instanceof Error) {
    return err;
  }

  var evt = parseEvent(err);
  return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
}

function extractErrorMessage(err) {
  if (!err.error) {
    return err.message || 'Unknown listener error';
  }

  if (err.error.description) {
    return err.error.description;
  }

  return typeof err.error === 'string' ? err.error : JSON.stringify(err.error, null, 2);
}

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/patch.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/patch.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deepAssign = __webpack_require__(/*! deep-assign */ "./node_modules/deep-assign/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var validateObject = validate.validateObject;
var validateInsert = validate.validateInsert;

function Patch(selection) {
  var operations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var client = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  this.selection = selection;
  this.operations = assign({}, operations);
  this.client = client;
}

assign(Patch.prototype, {
  clone: function clone() {
    return new Patch(this.selection, assign({}, this.operations), this.client);
  },
  merge: function merge(props) {
    validateObject('merge', props);
    var stack = new Error().stack.toString().split('\n').filter(function (str) {
      return str.trim();
    }).slice(2);
    console.warn("The \"merge\" patch has been deprecated and will be removed in the future\n".concat(stack.join('\n')));
    return this._assign('merge', deepAssign(this.operations.merge || {}, props));
  },
  set: function set(props) {
    return this._assign('set', props);
  },
  diffMatchPatch: function diffMatchPatch(props) {
    validateObject('diffMatchPatch', props);
    return this._assign('diffMatchPatch', props);
  },
  unset: function unset(attrs) {
    if (!Array.isArray(attrs)) {
      throw new Error('unset(attrs) takes an array of attributes to unset, non-array given');
    }

    this.operations = assign({}, this.operations, {
      unset: attrs
    });
    return this;
  },
  setIfMissing: function setIfMissing(props) {
    return this._assign('setIfMissing', props);
  },
  replace: function replace(props) {
    validateObject('replace', props);
    return this._set('set', {
      $: props
    }); // eslint-disable-line id-length
  },
  inc: function inc(props) {
    return this._assign('inc', props);
  },
  dec: function dec(props) {
    return this._assign('dec', props);
  },
  insert: function insert(at, selector, items) {
    var _this$_assign;

    validateInsert(at, selector, items);
    return this._assign('insert', (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
  },
  append: function append(selector, items) {
    return this.insert('after', "".concat(selector, "[-1]"), items);
  },
  prepend: function prepend(selector, items) {
    return this.insert('before', "".concat(selector, "[0]"), items);
  },
  splice: function splice(selector, start, deleteCount, items) {
    // Negative indexes doesn't mean the same in Sanity as they do in JS;
    // -1 means "actually at the end of the array", which allows inserting
    // at the end of the array without knowing its length. We therefore have
    // to substract negative indexes by one to match JS. If you want Sanity-
    // behaviour, just use `insert('replace', selector, items)` directly
    var delAll = typeof deleteCount === 'undefined' || deleteCount === -1;
    var startIndex = start < 0 ? start - 1 : start;
    var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
    var delRange = startIndex < 0 && delCount >= 0 ? '' : delCount;
    var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
    return this.insert('replace', rangeSelector, items || []);
  },
  ifRevisionId: function ifRevisionId(rev) {
    this.operations.ifRevisionID = rev;
    return this;
  },
  serialize: function serialize() {
    return assign(getSelection(this.selection), this.operations);
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.client) {
      throw new Error('No `client` passed to patch, either provide one or pass the ' + 'patch to a clients `mutate()` method');
    }

    var returnFirst = typeof this.selection === 'string';
    var opts = assign({
      returnFirst: returnFirst,
      returnDocuments: true
    }, options);
    return this.client.mutate({
      patch: this.serialize()
    }, opts);
  },
  reset: function reset() {
    this.operations = {};
    return this;
  },
  _set: function _set(op, props) {
    return this._assign(op, props, false);
  },
  _assign: function _assign(op, props) {
    var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    validateObject(op, props);
    this.operations = assign({}, this.operations, _defineProperty({}, op, assign({}, merge && this.operations[op] || {}, props)));
    return this;
  }
});
module.exports = Patch;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/transaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/transaction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var defaultMutateOptions = {
  returnDocuments: false
};

function Transaction() {
  var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var client = arguments.length > 1 ? arguments[1] : undefined;
  var transactionId = arguments.length > 2 ? arguments[2] : undefined;
  this.trxId = transactionId;
  this.operations = operations;
  this.client = client;
}

assign(Transaction.prototype, {
  clone: function clone() {
    return new Transaction(this.operations.slice(0), this.client, this.trxId);
  },
  create: function create(doc) {
    validators.validateObject('create', doc);
    return this._add({
      create: doc
    });
  },
  createIfNotExists: function createIfNotExists(doc) {
    var op = 'createIfNotExists';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  createOrReplace: function createOrReplace(doc) {
    var op = 'createOrReplace';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  delete: function _delete(documentId) {
    validators.validateDocumentId('delete', documentId);
    return this._add({
      delete: {
        id: documentId
      }
    });
  },
  patch: function patch(documentId, patchOps) {
    var isBuilder = typeof patchOps === 'function';
    var isPatch = documentId instanceof Patch; // transaction.patch(client.patch('documentId').inc({visits: 1}))

    if (isPatch) {
      return this._add({
        patch: documentId.serialize()
      });
    } // patch => patch.inc({visits: 1}).set({foo: 'bar'})


    if (isBuilder) {
      var patch = patchOps(new Patch(documentId, {}, this.client));

      if (!(patch instanceof Patch)) {
        throw new Error('function passed to `patch()` must return the patch');
      }

      return this._add({
        patch: patch.serialize()
      });
    }

    return this._add({
      patch: assign({
        id: documentId
      }, patchOps)
    });
  },
  transactionId: function transactionId(id) {
    if (!id) {
      return this.trxId;
    }

    this.trxId = id;
    return this;
  },
  serialize: function serialize() {
    return this.operations.slice();
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit(options) {
    if (!this.client) {
      throw new Error('No `client` passed to transaction, either provide one or pass the ' + 'transaction to a clients `mutate()` method');
    }

    return this.client.mutate(this.serialize(), assign({
      transactionId: this.trxId
    }, defaultMutateOptions, options || {}));
  },
  reset: function reset() {
    this.operations = [];
    return this;
  },
  _add: function _add(mut) {
    this.operations.push(mut);
    return this;
  }
});
module.exports = Transaction;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/datasets/datasetsClient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function DatasetsClient(client) {
  this.request = client.request.bind(client);
}

assign(DatasetsClient.prototype, {
  create: function create(name, options) {
    return this._modify('PUT', name, options);
  },
  edit: function edit(name, options) {
    return this._modify('PATCH', name, options);
  },
  delete: function _delete(name) {
    return this._modify('DELETE', name);
  },
  list: function list() {
    return this.request({
      uri: '/datasets'
    });
  },
  _modify: function _modify(method, name, body) {
    validate.dataset(name);
    return this.request({
      method: method,
      uri: "/datasets/".concat(name),
      body: body
    });
  }
});
module.exports = DatasetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/browserMiddleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/browserMiddleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [];

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/errors.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/errors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var makeError = __webpack_require__(/*! make-error */ "./node_modules/make-error/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ClientError(res) {
  var props = extractErrorProps(res);
  ClientError.super.call(this, props.message);
  assign(this, props);
}

function ServerError(res) {
  var props = extractErrorProps(res);
  ServerError.super.call(this, props.message);
  assign(this, props);
}

function extractErrorProps(res) {
  var body = res.body;
  var props = {
    response: res,
    statusCode: res.statusCode,
    responseBody: stringifyBody(body, res)
  }; // API/Boom style errors ({statusCode, error, message})

  if (body.error && body.message) {
    props.message = "".concat(body.error, " - ").concat(body.message);
    return props;
  } // Query/database errors ({error: {description, other, arb, props}})


  if (body.error && body.error.description) {
    props.message = body.error.description;
    props.details = body.error;
    return props;
  } // Other, more arbitrary errors


  props.message = body.error || body.message || httpErrorMessage(res);
  return props;
}

function httpErrorMessage(res) {
  var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : '';
  return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
}

function stringifyBody(body, res) {
  var contentType = (res.headers['content-type'] || '').toLowerCase();
  var isJson = contentType.indexOf('application/json') !== -1;
  return isJson ? JSON.stringify(body, null, 2) : body;
}

makeError(ClientError);
makeError(ServerError);
exports.ClientError = ClientError;
exports.ServerError = ServerError;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/queryString.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/queryString.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (params) {
  var qs = [];

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
    }
  }

  return qs.length > 0 ? "?".concat(qs.join('&')) : '';
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/request.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/request.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-empty-function, no-process-env */
var getIt = __webpack_require__(/*! get-it */ "./node_modules/get-it/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var observable = __webpack_require__(/*! get-it/lib/middleware/observable */ "./node_modules/get-it/lib/middleware/observable.js");

var jsonRequest = __webpack_require__(/*! get-it/lib/middleware/jsonRequest */ "./node_modules/get-it/lib/middleware/jsonRequest.js");

var jsonResponse = __webpack_require__(/*! get-it/lib/middleware/jsonResponse */ "./node_modules/get-it/lib/middleware/jsonResponse.js");

var progress = __webpack_require__(/*! get-it/lib/middleware/progress */ "./node_modules/get-it/lib/middleware/progress/index.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var _require = __webpack_require__(/*! ./errors */ "./node_modules/@sanity/client/lib/http/errors.js"),
    ClientError = _require.ClientError,
    ServerError = _require.ServerError;

var httpError = {
  onResponse: function onResponse(res) {
    if (res.statusCode >= 500) {
      throw new ServerError(res);
    } else if (res.statusCode >= 400) {
      throw new ClientError(res);
    }

    return res;
  }
}; // Environment-specific middleware.

var envSpecific = __webpack_require__(/*! ./nodeMiddleware */ "./node_modules/@sanity/client/lib/http/browserMiddleware.js");

var middleware = envSpecific.concat([jsonRequest(), jsonResponse(), progress(), httpError, observable({
  implementation: Observable
})]);
var request = getIt(middleware);

function httpRequest(options) {
  var requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request;
  return requester(assign({
    maxRedirects: 0
  }, options));
}

httpRequest.defaultRequester = request;
httpRequest.ClientError = ClientError;
httpRequest.ServerError = ServerError;
module.exports = httpRequest;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/requestOptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/requestOptions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var projectHeader = 'X-Sanity-Project-ID';

module.exports = function (config) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = {};
  var token = overrides.token || config.token;

  if (token) {
    headers.Authorization = "Bearer ".concat(token);
  }

  if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
    headers[projectHeader] = config.projectId;
  }

  var withCredentials = Boolean(typeof overrides.withCredentials === 'undefined' ? config.token || config.withCredentials : overrides.withCredentials);
  var timeout = typeof overrides.timeout === 'undefined' ? config.timeout : overrides.timeout;
  return assign({}, overrides, {
    headers: assign({}, headers, overrides.headers || {}),
    timeout: typeof timeout === 'undefined' ? 5 * 60 * 1000 : timeout,
    json: true,
    withCredentials: withCredentials
  });
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/projects/projectsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/projects/projectsClient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ProjectsClient(client) {
  this.client = client;
}

assign(ProjectsClient.prototype, {
  list: function list() {
    return this.client.request({
      uri: '/projects'
    });
  },
  getById: function getById(id) {
    return this.client.request({
      uri: "/projects/".concat(id)
    });
  }
});
module.exports = ProjectsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/sanityClient.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/sanityClient.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var Patch = __webpack_require__(/*! ./data/patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var Transaction = __webpack_require__(/*! ./data/transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var dataMethods = __webpack_require__(/*! ./data/dataMethods */ "./node_modules/@sanity/client/lib/data/dataMethods.js");

var DatasetsClient = __webpack_require__(/*! ./datasets/datasetsClient */ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js");

var ProjectsClient = __webpack_require__(/*! ./projects/projectsClient */ "./node_modules/@sanity/client/lib/projects/projectsClient.js");

var AssetsClient = __webpack_require__(/*! ./assets/assetsClient */ "./node_modules/@sanity/client/lib/assets/assetsClient.js");

var UsersClient = __webpack_require__(/*! ./users/usersClient */ "./node_modules/@sanity/client/lib/users/usersClient.js");

var AuthClient = __webpack_require__(/*! ./auth/authClient */ "./node_modules/@sanity/client/lib/auth/authClient.js");

var httpRequest = __webpack_require__(/*! ./http/request */ "./node_modules/@sanity/client/lib/http/request.js");

var getRequestOptions = __webpack_require__(/*! ./http/requestOptions */ "./node_modules/@sanity/client/lib/http/requestOptions.js");

var _require3 = __webpack_require__(/*! ./config */ "./node_modules/@sanity/client/lib/config.js"),
    defaultConfig = _require3.defaultConfig,
    initConfig = _require3.initConfig;

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

function SanityClient() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  if (!(this instanceof SanityClient)) {
    return new SanityClient(config);
  }

  this.config(config);
  this.assets = new AssetsClient(this);
  this.datasets = new DatasetsClient(this);
  this.projects = new ProjectsClient(this);
  this.users = new UsersClient(this);
  this.auth = new AuthClient(this);

  if (this.clientConfig.isPromiseAPI) {
    var observableConfig = assign({}, this.clientConfig, {
      isPromiseAPI: false
    });
    this.observable = new SanityClient(observableConfig);
  }
}

assign(SanityClient.prototype, dataMethods);
assign(SanityClient.prototype, {
  clone: function clone() {
    return new SanityClient(this.config());
  },
  config: function config(newConfig) {
    if (typeof newConfig === 'undefined') {
      return assign({}, this.clientConfig);
    }

    if (this.observable) {
      var observableConfig = assign({}, newConfig, {
        isPromiseAPI: false
      });
      this.observable.config(observableConfig);
    }

    this.clientConfig = initConfig(newConfig, this.clientConfig || {});
    return this;
  },
  getUrl: function getUrl(uri) {
    var canUseCdn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var base = canUseCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
    return "".concat(base, "/").concat(uri.replace(/^\//, ''));
  },
  isPromiseAPI: function isPromiseAPI() {
    return this.clientConfig.isPromiseAPI;
  },
  _requestObservable: function _requestObservable(options) {
    var uri = options.url || options.uri;
    var canUseCdn = this.clientConfig.useCdn && ['GET', 'HEAD'].indexOf(options.method || 'GET') >= 0 && uri.indexOf('/data/') === 0;
    var reqOptions = getRequestOptions(this.clientConfig, assign({}, options, {
      url: this.getUrl(uri, canUseCdn)
    }));
    return httpRequest(reqOptions, this.clientConfig.requester);
  },
  request: function request(options) {
    var observable = this._requestObservable(options).pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return event.body;
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  }
});
SanityClient.Patch = Patch;
SanityClient.Transaction = Transaction;
SanityClient.ClientError = httpRequest.ClientError;
SanityClient.ServerError = httpRequest.ServerError;
SanityClient.requester = httpRequest.defaultRequester;
module.exports = SanityClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/users/usersClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/users/usersClient.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function UsersClient(client) {
  this.client = client;
}

assign(UsersClient.prototype, {
  getById: function getById(id) {
    return this.client.request({
      uri: "/users/".concat(id)
    });
  }
});
module.exports = UsersClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/defaults.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/defaults.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, defaults) {
  return Object.keys(defaults).concat(Object.keys(obj)).reduce(function (target, prop) {
    target[prop] = typeof obj[prop] === 'undefined' ? defaults[prop] : obj[prop];
    return target;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/getSelection.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/getSelection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getSelection(sel) {
  if (typeof sel === 'string' || Array.isArray(sel)) {
    return {
      id: sel
    };
  }

  if (sel && sel.query) {
    return {
      query: sel.query
    };
  }

  var selectionOpts = ['* Document ID (<docId>)', '* Array of document IDs', '* Object containing `query`'].join('\n');
  throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/once.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/once.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
  var didCall = false;
  var returnValue;
  return function () {
    if (didCall) {
      return returnValue;
    }

    returnValue = fn.apply(void 0, arguments);
    didCall = true;
    return returnValue;
  };
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/pick.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/pick.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, props) {
  return props.reduce(function (selection, prop) {
    if (typeof obj[prop] === 'undefined') {
      return selection;
    }

    selection[prop] = obj[prop];
    return selection;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/validators.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/validators.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VALID_ASSET_TYPES = ['image', 'file'];
var VALID_INSERT_LOCATIONS = ['before', 'after', 'replace'];

exports.dataset = function (name) {
  if (!/^[-\w]{1,128}$/.test(name)) {
    throw new Error('Datasets can only contain lowercase characters, numbers, underscores and dashes');
  }
};

exports.projectId = function (id) {
  if (!/^[-a-z0-9]+$/i.test(id)) {
    throw new Error('`projectId` can only contain only a-z, 0-9 and dashes');
  }
};

exports.validateAssetType = function (type) {
  if (VALID_ASSET_TYPES.indexOf(type) === -1) {
    throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(', ')));
  }
};

exports.validateObject = function (op, val) {
  if (val === null || _typeof(val) !== 'object' || Array.isArray(val)) {
    throw new Error("".concat(op, "() takes an object of properties"));
  }
};

exports.requireDocumentId = function (op, doc) {
  if (!doc._id) {
    throw new Error("".concat(op, "() requires that the document contains an ID (\"_id\" property)"));
  }

  exports.validateDocumentId(op, doc._id);
};

exports.validateDocumentId = function (op, id) {
  if (typeof id !== 'string' || !/^[a-z0-9_.-]+$/i.test(id)) {
    throw new Error("".concat(op, "(): \"").concat(id, "\" is not a valid document ID"));
  }
};

exports.validateInsert = function (at, selector, items) {
  var signature = 'insert(at, selector, items)';

  if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
    var valid = VALID_INSERT_LOCATIONS.map(function (loc) {
      return "\"".concat(loc, "\"");
    }).join(', ');
    throw new Error("".concat(signature, " takes an \"at\"-argument which is one of: ").concat(valid));
  }

  if (typeof selector !== 'string') {
    throw new Error("".concat(signature, " takes a \"selector\"-argument which must be a string"));
  }

  if (!Array.isArray(items)) {
    throw new Error("".concat(signature, " takes an \"items\"-argument which must be an array"));
  }
};

exports.hasDataset = function (config) {
  if (!config.gradientMode && !config.dataset) {
    throw new Error('`dataset` must be provided to perform queries');
  }

  return config.dataset || '';
};

/***/ }),

/***/ "./node_modules/@sanity/eventsource/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sanity/eventsource/browser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-var */
var evs = __webpack_require__(/*! @rexxars/eventsource-polyfill */ "./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js")

module.exports = window.EventSource || evs.EventSource


/***/ }),

/***/ "./node_modules/@sanity/generate-help-url/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/generate-help-url/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var baseUrl = 'https://docs.sanity.io/help/'

module.exports = function generateHelpUrl(slug) {
  return baseUrl + slug
}


/***/ }),

/***/ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/observable/lib/SanityObservableMinimal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js"),
    Observable = _require.Observable;

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require2 = __webpack_require__(/*! ../operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var _require3 = __webpack_require__(/*! ../operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require3.filter;

var _require4 = __webpack_require__(/*! ../operators/reduce */ "./node_modules/@sanity/observable/operators/reduce.js"),
    reduce = _require4.reduce;
/*
 A minimal rxjs based observable that align as closely as possible with the current es-observable spec,
 without the static factory methods
 */


function SanityObservableMinimal() {
  Observable.apply(this, arguments); // eslint-disable-line prefer-rest-params
}

SanityObservableMinimal.prototype = Object.create(assign(Object.create(null), Observable.prototype));
Object.defineProperty(SanityObservableMinimal.prototype, 'constructor', {
  value: SanityObservableMinimal,
  enumerable: false,
  writable: true,
  configurable: true
});

SanityObservableMinimal.prototype.lift = function lift(operator) {
  var observable = new SanityObservableMinimal();
  observable.source = this;
  observable.operator = operator;
  return observable;
};

function createDeprecatedMemberOp(name, op) {
  var hasWarned = false;
  return function deprecatedOperator() {
    if (!hasWarned) {
      hasWarned = true;
      console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
    }

    return this.pipe(op.apply(this, arguments));
  };
}

SanityObservableMinimal.prototype.map = createDeprecatedMemberOp('map', map);
SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp('filter', filter);
SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp('filter', reduce);
module.exports = SanityObservableMinimal;

/***/ }),

/***/ "./node_modules/@sanity/observable/minimal.js":
/*!****************************************************!*\
  !*** ./node_modules/@sanity/observable/minimal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/SanityObservableMinimal */ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js")


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/filter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.filter = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js").filter


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/map.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.map = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js").map


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/reduce.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/reduce.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.reduce = __webpack_require__(/*! rxjs/internal/operators/reduce */ "./node_modules/rxjs/internal/operators/reduce.js").reduce


/***/ }),

/***/ "./node_modules/deep-assign/index.js":
/*!*******************************************!*\
  !*** ./node_modules/deep-assign/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = __webpack_require__(/*! is-obj */ "./node_modules/deep-assign/node_modules/is-obj/index.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function assignKey(to, from, key) {
	var val = from[key];

	if (val === undefined || val === null) {
		return;
	}

	if (hasOwnProperty.call(to, key)) {
		if (to[key] === undefined || to[key] === null) {
			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
		}
	}

	if (!hasOwnProperty.call(to, key) || !isObj(val)) {
		to[key] = val;
	} else {
		to[key] = assign(Object(to[key]), from[key]);
	}
}

function assign(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			assignKey(to, from, key);
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				assignKey(to, from, symbols[i]);
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		assign(target, arguments[s]);
	}

	return target;
};


/***/ }),

/***/ "./node_modules/deep-assign/node_modules/is-obj/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/deep-assign/node_modules/is-obj/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "./node_modules/get-it/index.js":
/*!**************************************!*\
  !*** ./node_modules/get-it/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib-node */ "./node_modules/get-it/lib/index.js")


/***/ }),

/***/ "./node_modules/get-it/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-it/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pubsub = __webpack_require__(/*! nano-pubsub */ "./node_modules/nano-pubsub/index.js");
var middlewareReducer = __webpack_require__(/*! ./util/middlewareReducer */ "./node_modules/get-it/lib/util/middlewareReducer.js");
var processOptions = __webpack_require__(/*! ./middleware/defaultOptionsProcessor */ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js");
var validateOptions = __webpack_require__(/*! ./middleware/defaultOptionsValidator */ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js");
var httpRequest = __webpack_require__(/*! ./request */ "./node_modules/get-it/lib/request/index.js"); // node-request in node, browser-request in browsers

var channelNames = ['request', 'response', 'progress', 'error', 'abort'];
var middlehooks = ['processOptions', 'validateOptions', 'interceptRequest', 'finalizeOptions', 'onRequest', 'onResponse', 'onError', 'onReturn', 'onHeaders'];

module.exports = function createRequester() {
  var initMiddleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var loadedMiddleware = [];
  var middleware = middlehooks.reduce(function (ware, name) {
    ware[name] = ware[name] || [];
    return ware;
  }, {
    processOptions: [processOptions],
    validateOptions: [validateOptions]
  });

  function request(opts) {
    var channels = channelNames.reduce(function (target, name) {
      target[name] = pubsub();
      return target;
    }, {});

    // Prepare a middleware reducer that can be reused throughout the lifecycle
    var applyMiddleware = middlewareReducer(middleware);

    // Parse the passed options
    var options = applyMiddleware('processOptions', opts);

    // Validate the options
    applyMiddleware('validateOptions', options);

    // Build a context object we can pass to child handlers
    var context = { options: options, channels: channels, applyMiddleware: applyMiddleware

      // We need to hold a reference to the current, ongoing request,
      // in order to allow cancellation. In the case of the retry middleware,
      // a new request might be triggered
    };var ongoingRequest = null;
    var unsubscribe = channels.request.subscribe(function (ctx) {
      // Let request adapters (node/browser) perform the actual request
      ongoingRequest = httpRequest(ctx, function (err, res) {
        return onResponse(err, res, ctx);
      });
    });

    // If we abort the request, prevent further requests from happening,
    // and be sure to cancel any ongoing request (obviously)
    channels.abort.subscribe(function () {
      unsubscribe();
      if (ongoingRequest) {
        ongoingRequest.abort();
      }
    });

    // See if any middleware wants to modify the return value - for instance
    // the promise or observable middlewares
    var returnValue = applyMiddleware('onReturn', channels, context);

    // If return value has been modified by a middleware, we expect the middleware
    // to publish on the 'request' channel. If it hasn't been modified, we want to
    // trigger it right away
    if (returnValue === channels) {
      channels.request.publish(context);
    }

    return returnValue;

    function onResponse(reqErr, res, ctx) {
      var error = reqErr;
      var response = res;

      // We're processing non-errors first, in case a middleware converts the
      // response into an error (for instance, status >= 400 == HttpError)
      if (!error) {
        try {
          response = applyMiddleware('onResponse', res, ctx);
        } catch (err) {
          response = null;
          error = err;
        }
      }

      // Apply error middleware - if middleware return the same (or a different) error,
      // publish as an error event. If we *don't* return an error, assume it has been handled
      error = error && applyMiddleware('onError', error, ctx);

      // Figure out if we should publish on error/response channels
      if (error) {
        channels.error.publish(error);
      } else if (response) {
        channels.response.publish(response);
      }
    }
  }

  request.use = function use(newMiddleware) {
    if (!newMiddleware) {
      throw new Error('Tried to add middleware that resolved to falsey value');
    }

    if (typeof newMiddleware === 'function') {
      throw new Error('Tried to add middleware that was a function. It probably expects you to pass options to it.');
    }

    if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
      throw new Error('Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event');
    }

    middlehooks.forEach(function (key) {
      if (newMiddleware[key]) {
        middleware[key].push(newMiddleware[key]);
      }
    });

    loadedMiddleware.push(newMiddleware);
    return request;
  };

  request.clone = function clone() {
    return createRequester(loadedMiddleware);
  };

  initMiddleware.forEach(request.use);

  return request;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var urlParse = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var isReactNative = typeof navigator === 'undefined' ? false : navigator.product === 'ReactNative';

var has = Object.prototype.hasOwnProperty;
var defaultOptions = { timeout: isReactNative ? 60000 : 120000 };

module.exports = function (opts) {
  var options = typeof opts === 'string' ? objectAssign({ url: opts }, defaultOptions) : objectAssign({}, defaultOptions, opts);

  // Parse URL into parts
  var url = urlParse(options.url, {}, // Don't use current browser location
  true // Parse query strings
  );

  // Normalize timeouts
  options.timeout = normalizeTimeout(options.timeout);

  // Shallow-merge (override) existing query params
  if (options.query) {
    url.query = objectAssign({}, url.query, removeUndefined(options.query));
  }

  // Implicit POST if we have not specified a method but have a body
  options.method = options.body && !options.method ? 'POST' : (options.method || 'GET').toUpperCase();

  // Stringify URL
  options.url = url.toString(stringifyQueryString);

  return options;
};

function stringifyQueryString(obj) {
  var pairs = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      push(key, obj[key]);
    }
  }

  return pairs.length ? pairs.join('&') : '';

  function push(key, val) {
    if (Array.isArray(val)) {
      val.forEach(function (item) {
        return push(key, item);
      });
    } else {
      pairs.push([key, val].map(encodeURIComponent).join('='));
    }
  }
}

function normalizeTimeout(time) {
  if (time === false || time === 0) {
    return false;
  }

  if (time.connect || time.socket) {
    return time;
  }

  var delay = Number(time);
  if (isNaN(delay)) {
    return normalizeTimeout(defaultOptions.timeout);
  }

  return { connect: delay, socket: delay };
}

function removeUndefined(obj) {
  var target = {};
  for (var key in obj) {
    if (obj[key] !== undefined) {
      target[key] = obj[key];
    }
  }
  return target;
}
//# sourceMappingURL=defaultOptionsProcessor.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsValidator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validUrl = /^https?:\/\//i;

module.exports = function (options) {
  if (!validUrl.test(options.url)) {
    throw new Error("\"" + options.url + "\" is not a valid URL");
  }
};
//# sourceMappingURL=defaultOptionsValidator.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonRequest.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonRequest.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

var serializeTypes = ['boolean', 'string', 'number'];
var isBuffer = function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

module.exports = function () {
  return {
    processOptions: function processOptions(options) {
      var body = options.body;
      if (!body) {
        return options;
      }

      var isStream = typeof body.pipe === 'function';
      var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === 'undefined' ? 'undefined' : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));

      if (!shouldSerialize) {
        return options;
      }

      return objectAssign({}, options, {
        body: JSON.stringify(options.body),
        headers: objectAssign({}, options.headers, {
          'Content-Type': 'application/json'
        })
      });
    }
  };
};
//# sourceMappingURL=jsonRequest.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonResponse.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonResponse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function (opts) {
  return {
    onResponse: function onResponse(response) {
      var contentType = response.headers['content-type'] || '';
      var shouldDecode = opts && opts.force || contentType.indexOf('application/json') !== -1;
      if (!response.body || !contentType || !shouldDecode) {
        return response;
      }

      return objectAssign({}, response, { body: tryParse(response.body) });
    },

    processOptions: function processOptions(options) {
      return objectAssign({}, options, {
        headers: objectAssign({ Accept: 'application/json' }, options.headers)
      });
    }
  };
};

function tryParse(body) {
  try {
    return JSON.parse(body);
  } catch (err) {
    err.message = 'Failed to parsed response body as JSON: ' + err.message;
    throw err;
  }
}
//# sourceMappingURL=jsonResponse.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/observable.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/observable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ../util/global */ "./node_modules/get-it/lib/util/global.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var Observable = opts.implementation || global.Observable;
  if (!Observable) {
    throw new Error('`Observable` is not available in global scope, and no implementation was passed');
  }

  return {
    onReturn: function onReturn(channels, context) {
      return new Observable(function (observer) {
        channels.error.subscribe(function (err) {
          return observer.error(err);
        });
        channels.progress.subscribe(function (event) {
          return observer.next(objectAssign({ type: 'progress' }, event));
        });
        channels.response.subscribe(function (response) {
          observer.next(objectAssign({ type: 'response' }, response));
          observer.complete();
        });

        channels.request.publish(context);
        return function () {
          return channels.abort.publish();
        };
      });
    }
  };
};
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/browser-progress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/browser-progress.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    onRequest: function onRequest(evt) {
      if (evt.adapter !== 'xhr') {
        return;
      }

      var xhr = evt.request;
      var context = evt.context;

      if ('upload' in xhr && 'onprogress' in xhr.upload) {
        xhr.upload.onprogress = handleProgress('upload');
      }

      if ('onprogress' in xhr) {
        xhr.onprogress = handleProgress('download');
      }

      function handleProgress(stage) {
        return function (event) {
          var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
          context.channels.progress.publish({
            stage: stage,
            percent: percent,
            total: event.total,
            loaded: event.loaded,
            lengthComputable: event.lengthComputable
          });
        };
      }
    }
  };
};
//# sourceMappingURL=browser-progress.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-progress */ "./node_modules/get-it/lib/middleware/progress/browser-progress.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/browser-request.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/request/browser-request.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint max-depth: ["error", 4] */
var sameOrigin = __webpack_require__(/*! same-origin */ "./node_modules/same-origin/index.js");
var parseHeaders = __webpack_require__(/*! parse-headers */ "./node_modules/parse-headers/parse-headers.js");
var noop = function noop() {
  /* intentional noop */
};

var win = window;
var XmlHttpRequest = win.XMLHttpRequest || noop;
var hasXhr2 = 'withCredentials' in new XmlHttpRequest();
var XDomainRequest = hasXhr2 ? XmlHttpRequest : win.XDomainRequest;
var adapter = 'xhr';

module.exports = function (context, callback) {
  var opts = context.options;
  var options = context.applyMiddleware('finalizeOptions', opts);
  var timers = {};

  // Deep-checking window.location because of react native, where `location` doesn't exist
  var cors = win && win.location && !sameOrigin(win.location.href, options.url);

  // Allow middleware to inject a response, for instance in the case of caching or mocking
  var injectedResponse = context.applyMiddleware('interceptRequest', undefined, {
    adapter: adapter,
    context: context
  });

  // If middleware injected a response, treat it as we normally would and return it
  // Do note that the injected response has to be reduced to a cross-environment friendly response
  if (injectedResponse) {
    var cbTimer = setTimeout(callback, 0, null, injectedResponse);
    var cancel = function cancel() {
      return clearTimeout(cbTimer);
    };
    return { abort: cancel };
  }

  // We'll want to null out the request on success/failure
  var xhr = cors ? new XDomainRequest() : new XmlHttpRequest();

  var isXdr = win.XDomainRequest && xhr instanceof win.XDomainRequest;
  var headers = options.headers;

  // Request state
  var aborted = false;
  var loaded = false;
  var timedOut = false;

  // Apply event handlers
  xhr.onerror = onError;
  xhr.ontimeout = onError;
  xhr.onabort = function () {
    aborted = true;
  };

  // IE9 must have onprogress be set to a unique function
  xhr.onprogress = function () {
    /* intentional noop */
  };

  var loadEvent = isXdr ? 'onload' : 'onreadystatechange';
  xhr[loadEvent] = function () {
    // Prevent request from timing out
    resetTimers();

    if (aborted || xhr.readyState !== 4 && !isXdr) {
      return;
    }

    // Will be handled by onError
    if (xhr.status === 0) {
      return;
    }

    onLoad();
  };

  // @todo two last options to open() is username/password
  xhr.open(options.method, options.url, true // Always async
  );

  // Some options need to be applied after open
  xhr.withCredentials = !!options.withCredentials;

  // Set headers
  if (headers && xhr.setRequestHeader) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  } else if (headers && isXdr) {
    throw new Error('Headers cannot be set on an XDomainRequest object');
  }

  if (options.rawBody) {
    xhr.responseType = 'arraybuffer';
  }

  // Let middleware know we're about to do a request
  context.applyMiddleware('onRequest', { options: options, adapter: adapter, request: xhr, context: context });

  xhr.send(options.body || null);

  // Figure out which timeouts to use (if any)
  var delays = options.timeout;
  if (delays) {
    timers.connect = setTimeout(function () {
      return timeoutRequest('ETIMEDOUT');
    }, delays.connect);
  }

  return { abort: abort };

  function abort() {
    aborted = true;

    if (xhr) {
      xhr.abort();
    }
  }

  function timeoutRequest(code) {
    timedOut = true;
    xhr.abort();
    var error = new Error(code === 'ESOCKETTIMEDOUT' ? 'Socket timed out on request to ' + options.url : 'Connection timed out on request to ' + options.url);
    error.code = code;
    context.channels.error.publish(error);
  }

  function resetTimers() {
    if (!delays) {
      return;
    }

    stopTimers();
    timers.socket = setTimeout(function () {
      return timeoutRequest('ESOCKETTIMEDOUT');
    }, delays.socket);
  }

  function stopTimers() {
    // Only clear the connect timeout if we've got a connection
    if (aborted || xhr.readyState >= 2 && timers.connect) {
      clearTimeout(timers.connect);
    }

    if (timers.socket) {
      clearTimeout(timers.socket);
    }
  }

  function onError() {
    if (loaded) {
      return;
    }

    // Clean up
    stopTimers();
    loaded = true;
    xhr = null;

    // Annoyingly, details are extremely scarce and hidden from us.
    // We only really know that it is a network error
    var err = new Error('Network error while attempting to reach ' + options.url);
    err.isNetworkError = true;
    err.request = options;
    callback(err);
  }

  function reduceResponse() {
    var statusCode = xhr.status;
    var statusMessage = xhr.statusText;

    if (isXdr && statusCode === undefined) {
      // IE8 CORS GET successful response doesn't have a status field, but body is fine
      statusCode = 200;
    } else if (statusCode > 12000 && statusCode < 12156) {
      // Yet another IE quirk where it emits weird status codes on network errors
      // https://support.microsoft.com/en-us/kb/193625
      return onError();
    } else {
      // Another IE bug where HTTP 204 somehow ends up as 1223
      statusCode = xhr.status === 1223 ? 204 : xhr.status;
      statusMessage = xhr.status === 1223 ? 'No Content' : statusMessage;
    }

    return {
      body: xhr.response || xhr.responseText,
      url: options.url,
      method: options.method,
      headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
      statusCode: statusCode,
      statusMessage: statusMessage
    };
  }

  function onLoad() {
    if (aborted || loaded || timedOut) {
      return;
    }

    if (xhr.status === 0) {
      onError(new Error('Unknown XHR error'));
      return;
    }

    // Prevent being called twice
    stopTimers();
    loaded = true;
    callback(null, reduceResponse());
  }
};
//# sourceMappingURL=browser-request.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/index.js":
/*!**************************************************!*\
  !*** ./node_modules/get-it/lib/request/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-request */ "./node_modules/get-it/lib/request/browser-request.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/util/global.js":
/*!************************************************!*\
  !*** ./node_modules/get-it/lib/util/global.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* eslint-disable no-negated-condition */
if (typeof window !== 'undefined') {
  module.exports = window;
} else if (typeof global !== 'undefined') {
  module.exports = global;
} else if (typeof self !== 'undefined') {
  module.exports = self;
} else {
  module.exports = {};
}
//# sourceMappingURL=global.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/get-it/lib/util/middlewareReducer.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/util/middlewareReducer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (middleware) {
  var applyMiddleware = function applyMiddleware(hook, defaultValue) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var bailEarly = hook === 'onError';

    var value = defaultValue;
    for (var i = 0; i < middleware[hook].length; i++) {
      var handler = middleware[hook][i];
      value = handler.apply(undefined, [value].concat(args));

      if (bailEarly && !value) {
        break;
      }
    }

    return value;
  };

  return applyMiddleware;
};
//# sourceMappingURL=middlewareReducer.js.map

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/make-error/index.js":
/*!******************************************!*\
  !*** ./node_modules/make-error/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ISC @ Julien Fontanet



// ===================================================================

var construct = typeof Reflect !== "undefined" ? Reflect.construct : undefined;
var defineProperty = Object.defineProperty;

// -------------------------------------------------------------------

var captureStackTrace = Error.captureStackTrace;
if (captureStackTrace === undefined) {
  captureStackTrace = function captureStackTrace(error) {
    var container = new Error();

    defineProperty(error, "stack", {
      configurable: true,
      get: function getStack() {
        var stack = container.stack;

        // Replace property with value for faster future accesses.
        defineProperty(this, "stack", {
          configurable: true,
          value: stack,
          writable: true,
        });

        return stack;
      },
      set: function setStack(stack) {
        defineProperty(error, "stack", {
          configurable: true,
          value: stack,
          writable: true,
        });
      },
    });
  };
}

// -------------------------------------------------------------------

function BaseError(message) {
  if (message !== undefined) {
    defineProperty(this, "message", {
      configurable: true,
      value: message,
      writable: true,
    });
  }

  var cname = this.constructor.name;
  if (cname !== undefined && cname !== this.name) {
    defineProperty(this, "name", {
      configurable: true,
      value: cname,
      writable: true,
    });
  }

  captureStackTrace(this, this.constructor);
}

BaseError.prototype = Object.create(Error.prototype, {
  // See: https://github.com/JsCommunity/make-error/issues/4
  constructor: {
    configurable: true,
    value: BaseError,
    writable: true,
  },
});

// -------------------------------------------------------------------

// Sets the name of a function if possible (depends of the JS engine).
var setFunctionName = (function() {
  function setFunctionName(fn, name) {
    return defineProperty(fn, "name", {
      configurable: true,
      value: name,
    });
  }
  try {
    var f = function() {};
    setFunctionName(f, "foo");
    if (f.name === "foo") {
      return setFunctionName;
    }
  } catch (_) {}
})();

// -------------------------------------------------------------------

function makeError(constructor, super_) {
  if (super_ == null || super_ === Error) {
    super_ = BaseError;
  } else if (typeof super_ !== "function") {
    throw new TypeError("super_ should be a function");
  }

  var name;
  if (typeof constructor === "string") {
    name = constructor;
    constructor =
      construct !== undefined
        ? function() {
            return construct(super_, arguments, this.constructor);
          }
        : function() {
            super_.apply(this, arguments);
          };

    // If the name can be set, do it once and for all.
    if (setFunctionName !== undefined) {
      setFunctionName(constructor, name);
      name = undefined;
    }
  } else if (typeof constructor !== "function") {
    throw new TypeError("constructor should be either a string or a function");
  }

  // Also register the super constructor also as `constructor.super_` just
  // like Node's `util.inherits()`.
  //
  // eslint-disable-next-line dot-notation
  constructor.super_ = constructor["super"] = super_;

  var properties = {
    constructor: {
      configurable: true,
      value: constructor,
      writable: true,
    },
  };

  // If the name could not be set on the constructor, set it on the
  // prototype.
  if (name !== undefined) {
    properties.name = {
      configurable: true,
      value: name,
      writable: true,
    };
  }
  constructor.prototype = Object.create(super_.prototype, properties);

  return constructor;
}
exports = module.exports = makeError;
exports.BaseError = BaseError;


/***/ }),

/***/ "./node_modules/nano-pubsub/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nano-pubsub/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function Pubsub() {
  var subscribers = []
  return {
    subscribe: subscribe,
    publish: publish
  }
  function subscribe(subscriber) {
    subscribers.push(subscriber)
    return function unsubscribe() {
      var idx = subscribers.indexOf(subscriber)
      if (idx > -1) {
        subscribers.splice(idx, 1)
      }
    }
  }
  function publish() {
    for (var i = 0; i < subscribers.length; i++) {
      subscribers[i].apply(null, arguments)
    }
  }
}

/***/ }),

/***/ "./node_modules/next/node_modules/native-url/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/node_modules/native-url/dist/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var t,e=(t=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof t&&"default"in t?t.default:t,o=/https?|ftp|gopher|file/;function r(t){"string"==typeof t&&(t=d(t));var r=function(t,e,o){var r=t.auth,a=t.hostname,s=t.protocol||"",p=t.pathname||"",n=t.hash||"",c=t.query||"",h=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",t.host?h=r+t.host:a&&(h=r+(~a.indexOf(":")?"["+a+"]":a),t.port&&(h+=":"+t.port)),c&&"object"==typeof c&&(c=e.encode(c));var l=t.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||o.test(s))&&!1!==h?(h="//"+(h||""),p&&"/"!==p[0]&&(p="/"+p)):h||(h=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:h,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(t,e,o);return""+r.protocol+r.host+r.pathname+r.search+r.hash}var a="http://",s="w.w",p=a+s,n=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,c=/https?|ftp|gopher|file/;function h(t,e){var o="string"==typeof t?d(t):t;t="object"==typeof t?r(t):t;var s=d(e),h="";o.protocol&&!o.slashes&&(h=o.protocol,t=t.replace(o.protocol,""),h+="/"===e[0]||"/"===t[0]?"/":""),h&&s.protocol&&(h="",s.slashes||(h=s.protocol,e=e.replace(s.protocol,"")));var l=t.match(n);l&&!s.protocol&&(t=t.substr((h=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(e)&&(h=h.slice(0,-1)));var i=new URL(t,p+"/"),u=new URL(e,i).toString().replace(p,""),f=s.protocol||o.protocol;return f+=o.slashes||s.slashes?"//":"",!h&&f?u=u.replace(a,f):h&&(u=u.replace(a,"")),c.test(u)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==u.slice(-1)||(u=u.slice(0,-1)),h&&(u=h+("/"===u[0]?u.substr(1):u)),u}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var i=/^https?|ftp|gopher|file/,u=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(t,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!1),t&&"object"==typeof t&&t instanceof l)return t;var n=(t=t.trim()).match(u);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var c=!/(^javascript)/.test(t)&&t.match(f),h=m.test(t),d="";c&&(i.test(c[1])||(d=c[1].toLowerCase(),t=""+c[2]+c[3]),c[2]||(h=!1,i.test(c[1])?(d=c[1],t=""+c[3]):t="//"+c[3]),3!==c[2].length&&1!==c[2].length||(d=c[1],t="/"+c[3]));var g,y=(n?n[1]:t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=y&&y[1],C=new l,U="",j="";try{g=new URL(t)}catch(e){U=e,d||a||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(j="/",t=t.substr(1));try{g=new URL(t,p)}catch(t){return C.protocol=d,C.href=d,C}}C.slashes=h&&!j,C.host=g.host===s?"":g.host,C.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),C.protocol=U?d||null:g.protocol,C.search=g.search.replace(/\\/g,"%5C"),C.hash=g.hash.replace(/\\/g,"%5C");var w=t.split("#");!C.search&&~w[0].indexOf("?")&&(C.search="?"),C.hash||""!==w[1]||(C.hash="#"),C.query=o?e.decode(g.search.substr(1)):C.search.substr(1),C.pathname=j+(c?function(t){return t.replace(/['^|`]/g,function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(t,e){try{return decodeURIComponent(e).split("").map(function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()}).join("")}catch(t){return e}})}(g.pathname):g.pathname),"about:"===C.protocol&&"blank"===C.pathname&&(C.protocol="",C.pathname=""),U&&"/"!==t[0]&&(C.pathname=C.pathname.substr(1)),d&&!i.test(d)&&"/"!==t.slice(-1)&&"/"===C.pathname&&(C.pathname=""),C.path=C.pathname+C.search,C.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),C.port=g.port,b&&!C.host.endsWith(b)&&(C.host+=b,C.port=b.slice(1)),C.href=j?""+C.pathname+C.search+C.hash:r(C);var x=/^(file)/.test(C.href)?["host","hostname"]:[];return Object.keys(C).forEach(function(t){~x.indexOf(t)||(C[t]=C[t]||null)}),C}exports.parse=d,exports.format=r,exports.resolve=h,exports.resolveObject=function(t,e){return d(h(t,e))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/defaultIfEmpty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
}
exports.defaultIfEmpty = defaultIfEmpty;
var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
var DefaultIfEmptySubscriber = (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scan_1 = __webpack_require__(/*! ./scan */ "./node_modules/rxjs/internal/operators/scan.js");
var takeLast_1 = __webpack_require__(/*! ./takeLast */ "./node_modules/rxjs/internal/operators/takeLast.js");
var defaultIfEmpty_1 = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js");
var pipe_1 = __webpack_require__(/*! ../util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast_1.takeLast(1))(source);
    };
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/scan.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/scan.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/takeLast.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/takeLast.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
var empty_1 = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return empty_1.empty();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentOutOfRangeErrorImpl = (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/same-origin/index.js":
/*!*******************************************!*\
  !*** ./node_modules/same-origin/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(/*! url */ "./node_modules/next/node_modules/native-url/dist/index.js");

module.exports = function(uri1, uri2, ieMode) {
    if (uri1 === uri2) {
        return true;
    }

    var url1 = url.parse(uri1, false, true);
    var url2 = url.parse(uri2, false, true);

    var url1Port = url1.port|0 || (url1.protocol === 'https' ? 443 : 80);
    var url2Port = url2.port|0 || (url2.protocol === 'https' ? 443 : 80);

    var match = {
        proto: url1.protocol === url2.protocol,
        hostname: url1.hostname === url2.hostname,
        port: url1Port === url2Port
    };

    return ((match.proto && match.hostname) && (match.port || ieMode));
};

/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js")
  , qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js")
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

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
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/api */ "./lib/api.js");

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\pages\\blogs\\[slug].js";



const BlogDetail = ({
  blog
}) => {
  console.log('Displaying page');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["Hello Detail Page - ", blog === null || blog === void 0 ? void 0 : blog.slug]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL3Nhbml0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZXh4YXJzL2V2ZW50c291cmNlLXBvbHlmaWxsL3NyYy9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9hc3NldHMvYXNzZXRzQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2F1dGgvYXV0aENsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YS9kYXRhTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhL2VuY29kZVF1ZXJ5U3RyaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGEvbGlzdGVuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGEvcGF0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YS90cmFuc2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhc2V0cy9kYXRhc2V0c0NsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9odHRwL2Jyb3dzZXJNaWRkbGV3YXJlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvZXJyb3JzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvcXVlcnlTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvaHR0cC9yZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvcmVxdWVzdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvcHJvamVjdHMvcHJvamVjdHNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvc2FuaXR5Q2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3VzZXJzL3VzZXJzQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3V0aWwvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdXRpbC9nZXRTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdXRpbC9vbmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3V0aWwvcGljay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi92YWxpZGF0b3JzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ldmVudHNvdXJjZS9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9nZW5lcmF0ZS1oZWxwLXVybC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvb2JzZXJ2YWJsZS9saWIvU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L29ic2VydmFibGUvbWluaW1hbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvZmlsdGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL3JlZHVjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlZXAtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGVlcC1hc3NpZ24vbm9kZV9tb2R1bGVzL2lzLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNQcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvanNvblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvanNvblJlc3BvbnNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvcHJvZ3Jlc3MvYnJvd3Nlci1wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvcmVxdWVzdC9icm93c2VyLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL3JlcXVlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL3V0aWwvZ2xvYmFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi91dGlsL21pZGRsZXdhcmVSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXNvYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYWtlLWVycm9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9uYXRpdmUtdXJsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVxdWlyZXMtcG9ydC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVmYXVsdElmRW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9zY2FuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZUxhc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaG9zdFJlcG9ydEVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3RvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NhbWUtb3JpZ2luL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXJsLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9ncy9bc2x1Z10uanMiXSwibmFtZXMiOlsiYmxvZ0ZpZWxkcyIsImdldEFsbEJsb2dzIiwicmVzdWx0cyIsImNsaWVudCIsImZldGNoIiwiZ2V0QmxvZ0J5U2x1ZyIsInNsdWciLCJyZXN1bHQiLCJ0aGVuIiwicmVzIiwib3B0aW9ucyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiU0FOSVRZX0RBVEFTRVRfTkFNRSIsInByb2plY3RJZCIsIlNBTklUWV9QUk9KRUNUX0lEIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50IiwiQmxvZ0RldGFpbCIsImJsb2ciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLE1BQU1BLFVBQVUsR0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7QUFVTyxlQUFlQyxXQUFmLEdBQTZCO0FBQ2xDLFFBQU1DLE9BQU8sR0FBRyxNQUFNQywrQ0FBTSxDQUN6QkMsS0FEbUIsQ0FDWixzQkFBcUJKLFVBQVcsR0FEcEIsQ0FBdEI7QUFFQSxTQUFPRSxPQUFQO0FBQ0Q7QUFFTSxlQUFlRyxhQUFmLENBQTZCQyxJQUE3QixFQUFtQztBQUN0QyxRQUFNQyxNQUFNLEdBQUcsTUFBTUosK0NBQU0sQ0FDeEJDLEtBRGtCLENBQ1g7QUFDZCxVQUFVSixVQUFXO0FBQ3JCLFFBSHlCLEVBR2Y7QUFBQ007QUFBRCxHQUhlLEVBSWxCRSxJQUprQixDQUliQyxHQUFHLElBQUlBLEdBQUosYUFBSUEsR0FBSix1QkFBSUEsR0FBRyxDQUFHLENBQUgsQ0FKRyxDQUFyQjtBQU1BLFNBQU9GLE1BQVA7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJIO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUcsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQURQO0FBRWRDLFdBQVMsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGlCQUZUO0FBR2RDLFFBQU0sT0FIUSxDQUlkO0FBQ0E7QUFDQTtBQUNBOztBQVBjLENBQWhCO0FBVWVDLG9IQUFZLENBQUNSLE9BQUQsQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxNQUFNLElBQTBDO0FBQ2hEO0FBQ0EsSUFBSSxpQ0FBTyxFQUFFLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDdkIsR0FBRyxNQUFNLHNCQVdOO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EscUNBQXFDLGlDQUFpQztBQUN0RTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FB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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwQkEsV0FBVyxtQkFBTyxDQUFDLDREQUFhLDZFQUE2RSxjQUFjLDZCQUE2QixzQkFBc0IsNEZBQTRGLDZLQUE2Syw2QkFBNkIsaUxBQWlMLHlHQUF5RyxRQUFRLHNEQUFzRCx1R0FBdUcsZ0JBQWdCLGdDQUFnQyw0QkFBNEIsZ0JBQWdCLDhLQUE4SyxpQkFBaUIsZ0dBQWdHLHdGQUF3RixrT0FBa08sY0FBYywyRkFBMkYsMEVBQTBFLElBQUksNkRBQTZELElBQUksYUFBYSxrQkFBa0Isd0ZBQXdGLDRCQUE0Qiw2RkFBNkYsNERBQTRELHdLQUF3SywyRkFBMkYsSUFBSSxhQUFhLFNBQVMseUVBQXlFLElBQUksZUFBZSxTQUFTLGdDQUFnQyxxTkFBcU4sbUJBQW1CLG9LQUFvSyx1Q0FBdUMsb0RBQW9ELHlCQUF5QixFQUFFLG9CQUFvQixJQUFJLHVEQUF1RCxxQkFBcUIsdUVBQXVFLFdBQVcsU0FBUyxVQUFVLEVBQUUscWJBQXFiLG9EQUFvRCwwQ0FBMEMsaUNBQWlDLElBQUksdUZBQXVGLGlCQUFpQjtBQUMzM0g7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqY0E7QUFDQTs7QUFFQSxNQUFNUyxVQUFVLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWTtBQUM3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFBLDJCQUNFO0FBQUEseUNBQXlCRixJQUF6QixhQUF5QkEsSUFBekIsdUJBQXlCQSxJQUFJLENBQUVkLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBUEQ7O0tBQU1hLFU7O0FBb0NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy9bc2x1Z10uYjE0MmY2NDI4OWNlOTNhM2I3YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSAnLi9zYW5pdHknO1xyXG5cclxuXHJcbmNvbnN0IGJsb2dGaWVsZHMgPSBgXHJcbiAgdGl0bGUsXHJcbiAgc3VidGl0bGUsXHJcbiAgJ3NsdWcnOiBzbHVnLmN1cnJlbnQsXHJcbiAgZGF0ZSxcclxuICAnYXV0aG9yJzogYXV0aG9yLT57bmFtZSwgJ2F2YXRhcic6IGF2YXRhci5hc3NldC0+dXJsfSxcclxuICAnY292ZXJJbWFnZSc6IGNvdmVySW1hZ2UuYXNzZXQtPnVybFxyXG4gIFxyXG5gXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQmxvZ3MoKSB7XHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudFxyXG4gICAgLmZldGNoKGAqW190eXBlID09IFwiYmxvZ1wiXXske2Jsb2dGaWVsZHN9fWApO1xyXG4gIHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ0J5U2x1ZyhzbHVnKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnRcclxuICAgICAgLmZldGNoKGAqW190eXBlID09IFwiYmxvZ1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z10ge1xyXG4gICAgICAgICR7YmxvZ0ZpZWxkc31cclxuICAgICAgfWAsIHtzbHVnfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcz8uWzBdKVxyXG4gIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICBcclxuICB9IiwiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCc7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52LlNBTklUWV9EQVRBU0VUX05BTUUsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TQU5JVFlfUFJPSkVDVF9JRCxcclxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAvLyB1c2VDZG4gPT09IHRydWUsIGdpdmVzIHlvdSBmYXN0IHJlc3BvbnNlLCBpdCB3aWxsIGdldCB5b3VcclxuICAvLyBjYWNoZWQgZGF0YVxyXG4gIC8vIHVzZUNkbiA9PT0gZmFsc2UsIGdpdmUgeW91IGxpdHRsZSBiaXQgc2xvd2VyIHJlc3BvbnNlLCBidXRcclxuICAvLyBsYXRlc3QgZGF0YVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQob3B0aW9ucyk7IiwiLypcbiAqIEV2ZW50U291cmNlIHBvbHlmaWxsXG4gKiBPcmlnaW5hbGx5IHB1Ymxpc2hlZCBieSBzYyBBbXZUZWsgc3JsIChodHRwczovL2dpdGh1Yi5jb20vYW12dGVrL0V2ZW50U291cmNlKSAtIGRldmVsQGFtdnRlay5jb21cbiAqIEZvcmtlZCBieSBFc3BlbiBIb3ZsYW5kc2RhbCB0byBmaXggYSBmZXcgaXNzdWVzICsgcHVibGlzaCBsYXRlc3QgdmVyc2lvblxuICovXG5cbjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgLyogZ2xvYmFsIGRlZmluZSAqL1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgaWYgKGdsb2JhbC5FdmVudFNvdXJjZSAmJiAhZ2xvYmFsLl9ldmVudFNvdXJjZUltcG9ydFByZWZpeCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGV2c0ltcG9ydE5hbWUgPSAocm9vdC5fZXZlbnRTb3VyY2VJbXBvcnRQcmVmaXggfHwgJycpICsgJ0V2ZW50U291cmNlJ1xuICAgIHJvb3RbZXZzSW1wb3J0TmFtZV0gPSBmYWN0b3J5KClcbiAgfVxufSkodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnID8gdGhpcyA6IHNlbGYsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIEV2ZW50U291cmNlID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgIGlmICghdXJsIHx8IHR5cGVvZiB1cmwgIT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKVxuICAgIH1cblxuICAgIHRoaXMuVVJMID0gdXJsXG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdmFyIGV2cyA9IHRoaXNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGV2cy5wb2xsKClcbiAgICB9LCAwKVxuICB9XG5cbiAgRXZlbnRTb3VyY2UucHJvdG90eXBlID0ge1xuICAgIENPTk5FQ1RJTkc6IDAsXG5cbiAgICBPUEVOOiAxLFxuXG4gICAgQ0xPU0VEOiAyLFxuXG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgIGxvZ2dpbmdFbmFibGVkOiBmYWxzZSxcblxuICAgICAgbG9nZ2luZ1ByZWZpeDogJ2V2ZW50c291cmNlJyxcblxuICAgICAgaW50ZXJ2YWw6IDUwMCwgLy8gbWlsbGlzZWNvbmRzXG5cbiAgICAgIGJ1ZmZlclNpemVMaW1pdDogMjU2ICogMTAyNCwgLy8gYnl0ZXNcblxuICAgICAgc2lsZW50VGltZW91dDogMzAwMDAwLCAvLyBtaWxsaXNlY29uZHNcblxuICAgICAgZ2V0QXJnczoge1xuICAgICAgICBldnNfYnVmZmVyX3NpemVfbGltaXQ6IDI1NiAqIDEwMjQsXG4gICAgICB9LFxuXG4gICAgICB4aHJIZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ3RleHQvZXZlbnQtc3RyZWFtJyxcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0T3B0aW9uc1xuICAgICAgdmFyIG9wdGlvblxuXG4gICAgICAvLyBzZXQgYWxsIGRlZmF1bHQgb3B0aW9ucy4uLlxuICAgICAgZm9yIChvcHRpb24gaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgICB0aGlzW29wdGlvbl0gPSBkZWZhdWx0c1tvcHRpb25dXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3ZlcnJpZGUgd2l0aCB3aGF0IGlzIGluIG9wdGlvbnNcbiAgICAgIGZvciAob3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbiBpbiBkZWZhdWx0cyAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgICB0aGlzW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBnZXRBcmdzIG9wdGlvbiBpcyBlbmFibGVkXG4gICAgICAvLyBlbnN1cmUgZXZzX2J1ZmZlcl9zaXplX2xpbWl0IGNvcnJlc3BvbmRzIHRvIGJ1ZmZlclNpemVMaW1pdFxuICAgICAgaWYgKHRoaXMuZ2V0QXJncyAmJiB0aGlzLmJ1ZmZlclNpemVMaW1pdCkge1xuICAgICAgICB0aGlzLmdldEFyZ3MuZXZzX2J1ZmZlcl9zaXplX2xpbWl0ID0gdGhpcy5idWZmZXJTaXplTGltaXRcbiAgICAgIH1cblxuICAgICAgLy8gaWYgY29uc29sZSBpcyBub3QgYXZhaWxhYmxlLCBmb3JjZSBsb2dnaW5nRW5hYmxlZCB0byBmYWxzZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNvbnNvbGUubG9nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxvZ2dpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9nOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgdGhpcy5sb2dnaW5nUHJlZml4ICsgJ106JyArIG1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHBvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gdGhpcy5DTE9TRUQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYW51cCgpXG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRoaXMuQ09OTkVDVElOR1xuICAgICAgICB0aGlzLmN1cnNvciA9IDBcbiAgICAgICAgdGhpcy5jYWNoZSA9ICcnXG4gICAgICAgIHRoaXMuX3hociA9IG5ldyB0aGlzLlhIUih0aGlzKVxuICAgICAgICB0aGlzLnJlc2V0Tm9BY3Rpdml0eVRpbWVyKClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBpbiBhbiBhdHRlbXB0IHRvIHNpbGVuY2UgdGhlIGVycm9yc1xuICAgICAgICB0aGlzLmxvZygnVGhlcmUgd2VyZSBlcnJvcnMgaW5zaWRlIHRoZSBwb29sIHRyeS1jYXRjaCcpXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7dHlwZTogJ2Vycm9yJywgZGF0YTogZXJyLm1lc3NhZ2V9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwb2xsQWdhaW46IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgLy8gc2NoZWR1bGUgcG9sbCB0byBiZSBjYWxsZWQgYWZ0ZXIgaW50ZXJ2YWwgbWlsbGlzZWNvbmRzXG4gICAgICB2YXIgZXZzID0gdGhpc1xuICAgICAgZXZzLnJlYWR5U3RhdGUgPSBldnMuQ09OTkVDVElOR1xuICAgICAgZXZzLmRpc3BhdGNoRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICBkYXRhOiAnUmVjb25uZWN0aW5nICcsXG4gICAgICB9KVxuICAgICAgdGhpcy5fcG9sbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV2cy5wb2xsKClcbiAgICAgIH0sIGludGVydmFsIHx8IDApXG4gICAgfSxcblxuICAgIGNsZWFudXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubG9nKCdldnMgY2xlYW5pbmcgdXAnKVxuXG4gICAgICBpZiAodGhpcy5fcG9sbFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcG9sbFRpbWVyKVxuICAgICAgICB0aGlzLl9wb2xsVGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ub0FjdGl2aXR5VGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9ub0FjdGl2aXR5VGltZXIpXG4gICAgICAgIHRoaXMuX25vQWN0aXZpdHlUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3hocikge1xuICAgICAgICB0aGlzLl94aHIuYWJvcnQoKVxuICAgICAgICB0aGlzLl94aHIgPSBudWxsXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlc2V0Tm9BY3Rpdml0eVRpbWVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5zaWxlbnRUaW1lb3V0KSB7XG4gICAgICAgIGlmICh0aGlzLl9ub0FjdGl2aXR5VGltZXIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX25vQWN0aXZpdHlUaW1lcilcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZzID0gdGhpc1xuICAgICAgICB0aGlzLl9ub0FjdGl2aXR5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBldnMubG9nKCdUaW1lb3V0ISBzaWxlbnRUSW1lb3V0OicgKyBldnMuc2lsZW50VGltZW91dClcbiAgICAgICAgICBldnMucG9sbEFnYWluKClcbiAgICAgICAgfSwgdGhpcy5zaWxlbnRUaW1lb3V0KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdGhpcy5DTE9TRURcbiAgICAgIHRoaXMubG9nKCdDbG9zaW5nIGNvbm5lY3Rpb24uIHJlYWR5U3RhdGU6ICcgKyB0aGlzLnJlYWR5U3RhdGUpXG4gICAgICB0aGlzLmNsZWFudXAoKVxuICAgIH0sXG5cbiAgICBfb254aHJkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuX3hoclxuXG4gICAgICBpZiAocmVxdWVzdC5pc1JlYWR5KCkgJiYgIXJlcXVlc3QuaGFzRXJyb3IoKSkge1xuICAgICAgICAvLyByZXNldCB0aGUgdGltZXIsIGFzIHdlIGhhdmUgYWN0aXZpdHlcbiAgICAgICAgdGhpcy5yZXNldE5vQWN0aXZpdHlUaW1lcigpXG5cbiAgICAgICAgLy8gbW92ZSB0aGlzIEV2ZW50U291cmNlIHRvIE9QRU4gc3RhdGUuLi5cbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSB0aGlzLkNPTk5FQ1RJTkcpIHtcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0aGlzLk9QRU5cbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29wZW4nLCB7dHlwZTogJ29wZW4nfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBidWZmZXIgPSByZXF1ZXN0LmdldEJ1ZmZlcigpXG5cbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPiB0aGlzLmJ1ZmZlclNpemVMaW1pdCkge1xuICAgICAgICAgIHRoaXMubG9nKCdidWZmZXIubGVuZ3RoID4gdGhpcy5idWZmZXJTaXplTGltaXQnKVxuICAgICAgICAgIHRoaXMucG9sbEFnYWluKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnNvciA9PSAwICYmIGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gc2tpcCBieXRlIG9yZGVyIG1hcmsgXFx1RkVGRiBjaGFyYWN0ZXIgaWYgaXQgc3RhcnRzIHRoZSBzdHJlYW1cbiAgICAgICAgICBpZiAoYnVmZmVyLnN1YnN0cmluZygwLCAxKSA9PSAnXFx1RkVGRicpIHtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yID0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYXN0TWVzc2FnZUluZGV4ID0gdGhpcy5sYXN0TWVzc2FnZUluZGV4KGJ1ZmZlcilcbiAgICAgICAgaWYgKGxhc3RNZXNzYWdlSW5kZXhbMF0gPj0gdGhpcy5jdXJzb3IpIHtcbiAgICAgICAgICB2YXIgbmV3Y3Vyc29yID0gbGFzdE1lc3NhZ2VJbmRleFsxXVxuICAgICAgICAgIHZhciB0b3BhcnNlID0gYnVmZmVyLnN1YnN0cmluZyh0aGlzLmN1cnNvciwgbmV3Y3Vyc29yKVxuICAgICAgICAgIHRoaXMucGFyc2VTdHJlYW0odG9wYXJzZSlcbiAgICAgICAgICB0aGlzLmN1cnNvciA9IG5ld2N1cnNvclxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcmVxdWVzdCBpcyBmaW5pc2hlZCwgcmVvcGVuIHRoZSBjb25uZWN0aW9uXG4gICAgICAgIGlmIChyZXF1ZXN0LmlzRG9uZSgpKSB7XG4gICAgICAgICAgdGhpcy5sb2coJ3JlcXVlc3QuaXNEb25lKCkuIHJlb3BlbmluZyB0aGUgY29ubmVjdGlvbicpXG4gICAgICAgICAgdGhpcy5wb2xsQWdhaW4odGhpcy5pbnRlcnZhbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IHRoaXMuQ0xPU0VEKSB7XG4gICAgICAgIHRoaXMubG9nKCd0aGlzLnJlYWR5U3RhdGUgIT09IHRoaXMuQ0xPU0VEJylcbiAgICAgICAgdGhpcy5wb2xsQWdhaW4odGhpcy5pbnRlcnZhbClcblxuICAgICAgICAvL01WOiBVbnN1cmUgd2h5IGFuIGVycm9yIHdhcyBwcmV2aW91c2x5IGRpc3BhdGNoZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGFyc2VTdHJlYW06IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgLy8gbm9ybWFsaXplIGxpbmUgc2VwYXJhdG9ycyAoXFxyXFxuLFxccixcXG4pIHRvIFxcblxuICAgICAgLy8gcmVtb3ZlIHdoaXRlIHNwYWNlcyB0aGF0IG1heSBwcmVjZWRlIFxcblxuICAgICAgY2h1bmsgPSB0aGlzLmNhY2hlICsgdGhpcy5ub3JtYWxpemVUb0xGKGNodW5rKVxuXG4gICAgICB2YXIgZXZlbnRzID0gY2h1bmsuc3BsaXQoJ1xcblxcbicpXG5cbiAgICAgIHZhciBpLCBqLCBldmVudFR5cGUsIGRhdGFzLCBsaW5lLCByZXRyeVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBldmVudFR5cGUgPSAnbWVzc2FnZSdcbiAgICAgICAgZGF0YXMgPSBbXVxuICAgICAgICB2YXIgcGFydHMgPSBldmVudHNbaV0uc3BsaXQoJ1xcbicpXG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGluZSA9IHRoaXMudHJpbVdoaXRlU3BhY2UocGFydHNbal0pXG5cbiAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCdldmVudCcpID09IDApIHtcbiAgICAgICAgICAgIGV2ZW50VHlwZSA9IGxpbmUucmVwbGFjZSgvZXZlbnQ6P1xccyovLCAnJylcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZigncmV0cnknKSA9PSAwKSB7XG4gICAgICAgICAgICByZXRyeSA9IHBhcnNlSW50KGxpbmUucmVwbGFjZSgvcmV0cnk6P1xccyovLCAnJyksIDEwKVxuICAgICAgICAgICAgaWYgKCFpc05hTihyZXRyeSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJ2RhdGEnKSA9PSAwKSB7XG4gICAgICAgICAgICBkYXRhcy5wdXNoKGxpbmUucmVwbGFjZSgvZGF0YTo/XFxzKi8sICcnKSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignaWQ6JykgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RXZlbnRJZCA9IGxpbmUucmVwbGFjZSgvaWQ6P1xccyovLCAnJylcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignaWQnKSA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzIHJlc2V0cyB0aGUgaWRcblxuICAgICAgICAgICAgdGhpcy5sYXN0RXZlbnRJZCA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YXMubGVuZ3RoICYmIHRoaXMucmVhZHlTdGF0ZSAhPSB0aGlzLkNMT1NFRCkge1xuICAgICAgICAgIC8vIGRpc3BhdGNoIGEgbmV3IGV2ZW50XG4gICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICAgIGRhdGFzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5sb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHRoaXMubGFzdEV2ZW50SWRcbiAgICAgICAgICApXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50VHlwZSwgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWNoZSA9IGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1cbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUsIGV2ZW50KSB7XG4gICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzWydfJyArIHR5cGUgKyAnSGFuZGxlcnMnXVxuXG4gICAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGhhbmRsZXJzW2ldLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXNbJ29uJyArIHR5cGVdKSB7XG4gICAgICAgIHRoaXNbJ29uJyArIHR5cGVdLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXNbJ18nICsgdHlwZSArICdIYW5kbGVycyddKSB7XG4gICAgICAgIHRoaXNbJ18nICsgdHlwZSArICdIYW5kbGVycyddID0gW11cbiAgICAgIH1cblxuICAgICAgdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ10ucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICAgICAgdmFyIGhhbmRsZXJzID0gdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ11cbiAgICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcG9sbFRpbWVyOiBudWxsLFxuXG4gICAgX25vYWN0aXZpdHlUaW1lcjogbnVsbCxcblxuICAgIF94aHI6IG51bGwsXG5cbiAgICBsYXN0RXZlbnRJZDogbnVsbCxcblxuICAgIGNhY2hlOiAnJyxcblxuICAgIGN1cnNvcjogMCxcblxuICAgIG9uZXJyb3I6IG51bGwsXG5cbiAgICBvbm1lc3NhZ2U6IG51bGwsXG5cbiAgICBvbm9wZW46IG51bGwsXG5cbiAgICByZWFkeVN0YXRlOiAwLFxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGhlbHBlcnMgZnVuY3Rpb25zXG4gICAgLy8gdGhvc2UgYXJlIGF0dGFjaGVkIHRvIHByb3RvdHlwZSB0byBlYXNlIHJldXNlIGFuZCB0ZXN0aW5nLi4uXG5cbiAgICB1cmxXaXRoUGFyYW1zOiBmdW5jdGlvbiAoYmFzZVVSTCwgcGFyYW1zKSB7XG4gICAgICB2YXIgZW5jb2RlZEFyZ3MgPSBbXVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIHZhciBrZXksIHVybGFyZ1xuICAgICAgICB2YXIgdXJsaXplID0gZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB1cmxhcmcgPSB1cmxpemUoa2V5KSArICc9JyArIHVybGl6ZShwYXJhbXNba2V5XSlcbiAgICAgICAgICAgIGVuY29kZWRBcmdzLnB1c2godXJsYXJnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZW5jb2RlZEFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoYmFzZVVSTC5pbmRleE9mKCc/JykgPT0gLTEpIHJldHVybiBiYXNlVVJMICsgJz8nICsgZW5jb2RlZEFyZ3Muam9pbignJicpXG4gICAgICAgIHJldHVybiBiYXNlVVJMICsgJyYnICsgZW5jb2RlZEFyZ3Muam9pbignJicpXG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZVVSTFxuICAgIH0sXG5cbiAgICBsYXN0TWVzc2FnZUluZGV4OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgdmFyIGxuMiA9IHRleHQubGFzdEluZGV4T2YoJ1xcblxcbicpXG4gICAgICB2YXIgbHIyID0gdGV4dC5sYXN0SW5kZXhPZignXFxyXFxyJylcbiAgICAgIHZhciBscmxuMiA9IHRleHQubGFzdEluZGV4T2YoJ1xcclxcblxcclxcbicpXG5cbiAgICAgIGlmIChscmxuMiA+IE1hdGgubWF4KGxuMiwgbHIyKSkge1xuICAgICAgICByZXR1cm4gW2xybG4yLCBscmxuMiArIDRdXG4gICAgICB9XG4gICAgICByZXR1cm4gW01hdGgubWF4KGxuMiwgbHIyKSwgTWF0aC5tYXgobG4yLCBscjIpICsgMl1cbiAgICB9LFxuXG4gICAgdHJpbVdoaXRlU3BhY2U6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIC8vIHRvIHJlbW92ZSB3aGl0ZXNwYWNlcyBsZWZ0IGFuZCByaWdodCBvZiBzdHJpbmdcblxuICAgICAgdmFyIHJlVHJpbSA9IC9eKFxcc3xcXHUwMEEwKSt8KFxcc3xcXHUwMEEwKSskL2dcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZShyZVRyaW0sICcnKVxuICAgIH0sXG5cbiAgICBub3JtYWxpemVUb0xGOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAvLyByZXBsYWNlIFxcciBhbmQgXFxyXFxuIHdpdGggXFxuXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcclxcbnxcXHIvZywgJ1xcbicpXG4gICAgfSxcbiAgfVxuXG4gIGlmIChpc09sZElFKCkpIHtcbiAgICBFdmVudFNvdXJjZS5pc1BvbHlmaWxsID0gJ0lFXzgtOSdcblxuICAgIC8vIHBhdGNoIEV2ZW50U291cmNlIGRlZmF1bHRPcHRpb25zXG4gICAgdmFyIGRlZmF1bHRzID0gRXZlbnRTb3VyY2UucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zXG4gICAgZGVmYXVsdHMueGhySGVhZGVycyA9IG51bGwgLy8gbm8gaGVhZGVycyB3aWxsIGJlIHNlbnRcbiAgICBkZWZhdWx0cy5nZXRBcmdzLmV2c19wcmVhbWJsZSA9IDIwNDggKyA4XG5cbiAgICAvLyBFdmVudFNvdXJjZSB3aWxsIHNlbmQgcmVxdWVzdCB1c2luZyBJbnRlcm5ldCBFeHBsb3JlciBYRG9tYWluUmVxdWVzdFxuICAgIEV2ZW50U291cmNlLnByb3RvdHlwZS5YSFIgPSBmdW5jdGlvbiAoZXZzKSB7XG4gICAgICAvKiBnbG9iYWwgWERvbWFpblJlcXVlc3QgKi9cbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhEb21haW5SZXF1ZXN0KClcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0XG5cbiAgICAgIC8vIHNldCBoYW5kbGVyc1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXF1ZXN0Ll9yZWFkeSA9IHRydWVcbiAgICAgICAgZXZzLl9vbnhocmRhdGEoKVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZVxuICAgICAgICBldnMuX29ueGhyZGF0YSgpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZmFpbGVkID0gdHJ1ZVxuICAgICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DTE9TRURcbiAgICAgICAgZXZzLmRpc3BhdGNoRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZGF0YTogJ1hEb21haW5SZXF1ZXN0IGVycm9yJyxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2ZhaWxlZCA9IHRydWVcbiAgICAgICAgZXZzLnJlYWR5U3RhdGUgPSBldnMuQ0xPU0VEXG4gICAgICAgIGV2cy5kaXNwYXRjaEV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIGRhdGE6ICdYRG9tYWluUmVxdWVzdCB0aW1lZCBvdXQnLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBYRG9tYWluUmVxdWVzdCBkb2VzIG5vdCBhbGxvdyBzZXR0aW5nIGN1c3RvbSBoZWFkZXJzXG4gICAgICAvLyBJZiBFdmVudFNvdXJjZSBoYXMgZW5hYmxlZCB0aGUgdXNlIG9mIEdFVCBhcmd1bWVudHNcbiAgICAgIC8vIHdlIGFkZCBwYXJhbWV0ZXJzIHRvIFVSTCBzbyB0aGF0IHNlcnZlciBjYW4gYWRhcHQgdGhlIHN0cmVhbS4uLlxuICAgICAgdmFyIHJlcUdldEFyZ3MgPSB7fVxuICAgICAgaWYgKGV2cy5nZXRBcmdzKSB7XG4gICAgICAgIC8vIGNvcHkgZXZzLmdldEFyZ3MgaW4gcmVxR2V0QXJnc1xuICAgICAgICB2YXIgZGVmYXVsdEFyZ3MgPSBldnMuZ2V0QXJnc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdEFyZ3MpIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEFyZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVxR2V0QXJnc1trZXldID0gZGVmYXVsdEFyZ3Nba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZzLmxhc3RFdmVudElkKSB7XG4gICAgICAgICAgcmVxR2V0QXJncy5ldnNfbGFzdF9ldmVudF9pZCA9IGV2cy5sYXN0RXZlbnRJZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBzZW5kIHRoZSByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgZXZzLnVybFdpdGhQYXJhbXMoZXZzLlVSTCwgcmVxR2V0QXJncykpXG4gICAgICByZXF1ZXN0LnNlbmQoKVxuICAgIH1cblxuICAgIEV2ZW50U291cmNlLnByb3RvdHlwZS5YSFIucHJvdG90eXBlID0ge1xuICAgICAgdXNlWERvbWFpblJlcXVlc3Q6IHRydWUsXG5cbiAgICAgIF9yZXF1ZXN0OiBudWxsLFxuXG4gICAgICBfcmVhZHk6IGZhbHNlLCAvLyB0cnVlIHdoZW4gcHJvZ3Jlc3MgZXZlbnRzIGFyZSBkaXNwYXRjaGVkXG5cbiAgICAgIF9sb2FkZWQ6IGZhbHNlLCAvLyB0cnVlIHdoZW4gcmVxdWVzdCBoYXMgYmVlbiBsb2FkZWRcblxuICAgICAgX2ZhaWxlZDogZmFsc2UsIC8vIHRydWUgaWYgd2hlbiByZXF1ZXN0IGlzIGluIGVycm9yXG5cbiAgICAgIGlzUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QuX3JlYWR5XG4gICAgICB9LFxuXG4gICAgICBpc0RvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QuX2xvYWRlZFxuICAgICAgfSxcblxuICAgICAgaGFzRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QuX2ZhaWxlZFxuICAgICAgfSxcblxuICAgICAgZ2V0QnVmZmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBydiA9ICcnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcnYgPSB0aGlzLl9yZXF1ZXN0LnJlc3BvbnNlVGV4dCB8fCAnJ1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBpbnRlbnRpb25hbCBub29wXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ2XG4gICAgICB9LFxuXG4gICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcmVxdWVzdCkge1xuICAgICAgICAgIHRoaXMuX3JlcXVlc3QuYWJvcnQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBFdmVudFNvdXJjZS5pc1BvbHlmaWxsID0gJ1hIUidcblxuICAgIC8vIEV2ZW50U291cmNlIHdpbGwgc2VuZCByZXF1ZXN0IHVzaW5nIFhNTEh0dHBSZXF1ZXN0XG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUiA9IGZ1bmN0aW9uIChldnMpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0XG4gICAgICBldnMuX3hociA9IHRoaXNcblxuICAgICAgLy8gc2V0IGhhbmRsZXJzXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA+IDEgJiYgZXZzLnJlYWR5U3RhdGUgIT0gZXZzLkNMT1NFRCkge1xuICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDAgfHwgKHJlcXVlc3Quc3RhdHVzID49IDMwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkpIHtcbiAgICAgICAgICAgIGV2cy5fb254aHJkYXRhKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5fZmFpbGVkID0gdHJ1ZVxuICAgICAgICAgICAgZXZzLnJlYWR5U3RhdGUgPSBldnMuQ0xPU0VEXG4gICAgICAgICAgICBldnMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIGRhdGE6ICdUaGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoICcgKyByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBldnMuY2xvc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGludGVudGlvbmFsIG5vb3BcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBldnMudXJsV2l0aFBhcmFtcyhldnMuVVJMLCBldnMuZ2V0QXJncyksIHRydWUpXG5cbiAgICAgIHZhciBoZWFkZXJzID0gZXZzLnhockhlYWRlcnMgLy8gbWF5YmUgbnVsbFxuICAgICAgZm9yICh2YXIgaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoaGVhZGVyKSkge1xuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGhlYWRlcnNbaGVhZGVyXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2cy5sYXN0RXZlbnRJZCkge1xuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0xhc3QtRXZlbnQtSWQnLCBldnMubGFzdEV2ZW50SWQpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Quc2VuZCgpXG4gICAgfVxuXG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUi5wcm90b3R5cGUgPSB7XG4gICAgICB1c2VYRG9tYWluUmVxdWVzdDogZmFsc2UsXG5cbiAgICAgIF9yZXF1ZXN0OiBudWxsLFxuXG4gICAgICBfZmFpbGVkOiBmYWxzZSwgLy8gdHJ1ZSBpZiB3ZSBoYXZlIGhhZCBlcnJvcnMuLi5cblxuICAgICAgaXNSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5yZWFkeVN0YXRlID49IDJcbiAgICAgIH0sXG5cbiAgICAgIGlzRG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5yZWFkeVN0YXRlID09IDRcbiAgICAgIH0sXG5cbiAgICAgIGhhc0Vycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWlsZWQgfHwgdGhpcy5fcmVxdWVzdC5zdGF0dXMgPj0gNDAwXG4gICAgICB9LFxuXG4gICAgICBnZXRCdWZmZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJ2ID0gJydcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBydiA9IHRoaXMuX3JlcXVlc3QucmVzcG9uc2VUZXh0IHx8ICcnXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIGludGVudGlvbmFsIG5vb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnZcbiAgICAgIH0sXG5cbiAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0KSB7XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIGRhdGEsIG9yaWdpbiwgbGFzdEV2ZW50SWQpIHtcbiAgICB0aGlzLmJ1YmJsZXMgPSBmYWxzZVxuICAgIHRoaXMuY2FuY2VsQnViYmxlID0gZmFsc2VcbiAgICB0aGlzLmNhbmNlbGFibGUgPSBmYWxzZVxuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwgbnVsbFxuICAgIHRoaXMub3JpZ2luID0gb3JpZ2luIHx8ICcnXG4gICAgdGhpcy5sYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkIHx8ICcnXG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCAnbWVzc2FnZSdcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gICAgLy9yZXR1cm4gdHJ1ZSBpZiB3ZSBhcmUgaW4gSUU4IG9yIElFOVxuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmXG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCAmJlxuICAgICAgICBuZXcgWE1MSHR0cFJlcXVlc3QoKS5yZXNwb25zZVR5cGUgPT09IHVuZGVmaW5lZFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBFdmVudFNvdXJjZVxufSlcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL21hcCcpLFxuICAgIG1hcCA9IF9yZXF1aXJlLm1hcDtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvZmlsdGVyJyksXG4gICAgZmlsdGVyID0gX3JlcXVpcmUyLmZpbHRlcjtcblxudmFyIHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgnLi4vaHR0cC9xdWVyeVN0cmluZycpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxuZnVuY3Rpb24gQXNzZXRzQ2xpZW50KGNsaWVudCkge1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbn1cblxuZnVuY3Rpb24gdG9Eb2N1bWVudChib2R5KSB7XG4gIC8vIHRvZG86IHJld3JpdGUgdG8ganVzdCByZXR1cm4gYm9keS5kb2N1bWVudCBpbiBhIHdoaWxlXG4gIHZhciBkb2N1bWVudCA9IGJvZHkuZG9jdW1lbnQ7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCwgJ2RvY3VtZW50Jywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybignVGhlIHByb21pc2UgcmV0dXJuZWQgZnJvbSBjbGllbnQuYXNzZXQudXBsb2FkKC4uLikgbm93IHJlc29sdmVzIHdpdGggdGhlIGFzc2V0IGRvY3VtZW50Jyk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBvcHRpb25zRnJvbUZpbGUob3B0cywgZmlsZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIShmaWxlIGluc3RhbmNlb2Ygd2luZG93LkZpbGUpKSB7XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cblxuICByZXR1cm4gYXNzaWduKHtcbiAgICBmaWxlbmFtZTogb3B0cy5wcmVzZXJ2ZUZpbGVuYW1lID09PSBmYWxzZSA/IHVuZGVmaW5lZCA6IGZpbGUubmFtZSxcbiAgICBjb250ZW50VHlwZTogZmlsZS50eXBlXG4gIH0sIG9wdHMpO1xufVxuXG5hc3NpZ24oQXNzZXRzQ2xpZW50LnByb3RvdHlwZSwge1xuICAvKipcbiAgICogVXBsb2FkIGFuIGFzc2V0XG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXNzZXRUeXBlIGBpbWFnZWAgb3IgYGZpbGVgXG4gICAqIEBwYXJhbSAge0ZpbGV8QmxvYnxCdWZmZXJ8UmVhZGFibGVTdHJlYW19IGJvZHkgRmlsZSB0byB1cGxvYWRcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb3B0cyBPcHRpb25zIGZvciB0aGUgdXBsb2FkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IG9wdHMucHJlc2VydmVGaWxlbmFtZSBXaGV0aGVyIG9yIG5vdCB0byBwcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgZmlsZW5hbWUgKGRlZmF1bHQ6IHRydWUpXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuZmlsZW5hbWUgRmlsZW5hbWUgZm9yIHRoaXMgZmlsZSAob3B0aW9uYWwpXG4gICAqIEBwYXJhbSAge051bWJlcn0gIG9wdHMudGltZW91dCAgTWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHRpbWluZyB0aGUgcmVxdWVzdCBvdXQgKGRlZmF1bHQ6IDApXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuY29udGVudFR5cGUgTWltZSB0eXBlIG9mIHRoZSBmaWxlXG4gICAqIEBwYXJhbSAge0FycmF5fSAgIG9wdHMuZXh0cmFjdCBBcnJheSBvZiBtZXRhZGF0YSBwYXJ0cyB0byBleHRyYWN0IGZyb20gaW1hZ2UuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zc2libGUgdmFsdWVzOiBgbG9jYXRpb25gLCBgZXhpZmAsIGBpbWFnZWAsIGBwYWxldHRlYFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLmxhYmVsIExhYmVsXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMudGl0bGUgVGl0bGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5kZXNjcmlwdGlvbiBEZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLmNyZWRpdExpbmUgVGhlIGNyZWRpdCB0byBwZXJzb24ocykgYW5kL29yIG9yZ2FuaXphdGlvbihzKSByZXF1aXJlZCBieSB0aGUgc3VwcGxpZXIgb2YgdGhlIGltYWdlIHRvIGJlIHVzZWQgd2hlbiBwdWJsaXNoZWRcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb3B0cy5zb3VyY2UgU291cmNlIGRhdGEgKHdoZW4gdGhlIGFzc2V0IGlzIGZyb20gYW4gZXh0ZXJuYWwgc2VydmljZSlcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5zb3VyY2UuaWQgVGhlICh1KWlkIG9mIHRoZSBhc3NldCB3aXRoaW4gdGhlIHNvdXJjZSwgaS5lLiAnaS1mMzIzcjFFJ1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1aXJlZCBpZiBzb3VyY2UgaXMgZGVmaW5lZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLnNvdXJjZS5uYW1lIFRoZSBuYW1lIG9mIHRoZSBzb3VyY2UsIGkuZS4gJ3Vuc3BsYXNoJ1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1aXJlZCBpZiBzb3VyY2UgaXMgZGVmaW5lZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLnNvdXJjZS51cmwgQSB1cmwgdG8gd2hlcmUgdG8gZmluZCB0aGUgYXNzZXQsIG9yIGdldCBtb3JlIGluZm8gYWJvdXQgaXQgaW4gdGhlIHNvdXJjZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25hbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyB3aXRoIHRoZSBjcmVhdGVkIGFzc2V0IGRvY3VtZW50XG4gICAqL1xuICB1cGxvYWQ6IGZ1bmN0aW9uIHVwbG9hZChhc3NldFR5cGUsIGJvZHkpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFsaWRhdG9ycy52YWxpZGF0ZUFzc2V0VHlwZShhc3NldFR5cGUpOyAvLyBJZiBhbiBlbXB0eSBhcnJheSBpcyBnaXZlbiwgZXhwbGljaXRseSBzZXQgYG5vbmVgIHRvIG92ZXJyaWRlIEFQSSBkZWZhdWx0c1xuXG4gICAgdmFyIG1ldGEgPSBvcHRzLmV4dHJhY3QgfHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKG1ldGEgJiYgIW1ldGEubGVuZ3RoKSB7XG4gICAgICBtZXRhID0gWydub25lJ107XG4gICAgfVxuXG4gICAgdmFyIGRhdGFzZXQgPSB2YWxpZGF0b3JzLmhhc0RhdGFzZXQodGhpcy5jbGllbnQuY2xpZW50Q29uZmlnKTtcbiAgICB2YXIgYXNzZXRFbmRwb2ludCA9IGFzc2V0VHlwZSA9PT0gJ2ltYWdlJyA/ICdpbWFnZXMnIDogJ2ZpbGVzJztcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNGcm9tRmlsZShvcHRzLCBib2R5KTtcbiAgICB2YXIgbGFiZWwgPSBvcHRpb25zLmxhYmVsLFxuICAgICAgICB0aXRsZSA9IG9wdGlvbnMudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgICAgY3JlZGl0TGluZSA9IG9wdGlvbnMuY3JlZGl0TGluZSxcbiAgICAgICAgZmlsZW5hbWUgPSBvcHRpb25zLmZpbGVuYW1lLFxuICAgICAgICBzb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcbiAgICB2YXIgcXVlcnkgPSB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBmaWxlbmFtZTogZmlsZW5hbWUsXG4gICAgICBtZXRhOiBtZXRhLFxuICAgICAgY3JlZGl0TGluZTogY3JlZGl0TGluZVxuICAgIH07XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBxdWVyeS5zb3VyY2VJZCA9IHNvdXJjZS5pZDtcbiAgICAgIHF1ZXJ5LnNvdXJjZU5hbWUgPSBzb3VyY2UubmFtZTtcbiAgICAgIHF1ZXJ5LnNvdXJjZVVybCA9IHNvdXJjZS51cmw7XG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLmNsaWVudC5fcmVxdWVzdE9ic2VydmFibGUoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB0aW1lb3V0OiBvcHRpb25zLnRpbWVvdXQgfHwgMCxcbiAgICAgIHVyaTogXCIvYXNzZXRzL1wiLmNvbmNhdChhc3NldEVuZHBvaW50LCBcIi9cIikuY29uY2F0KGRhdGFzZXQpLFxuICAgICAgaGVhZGVyczogb3B0aW9ucy5jb250ZW50VHlwZSA/IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IG9wdGlvbnMuY29udGVudFR5cGVcbiAgICAgIH0gOiB7fSxcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIGJvZHk6IGJvZHlcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5pc1Byb21pc2VBUEkoKSA/IG9ic2VydmFibGUucGlwZShmaWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQudHlwZSA9PT0gJ3Jlc3BvbnNlJztcbiAgICB9KSwgbWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIHRvRG9jdW1lbnQoZXZlbnQuYm9keSk7XG4gICAgfSkpLnRvUHJvbWlzZSgpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKHR5cGUsIGlkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oJ2NsaWVudC5hc3NldHMuZGVsZXRlKCkgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjbGllbnQuZGVsZXRlKDxkb2N1bWVudC1pZD4pJyk7XG4gICAgdmFyIGRvY0lkID0gaWQgfHwgJyc7XG5cbiAgICBpZiAoIS9eKGltYWdlfGZpbGUpLS8udGVzdChkb2NJZCkpIHtcbiAgICAgIGRvY0lkID0gXCJcIi5jb25jYXQodHlwZSwgXCItXCIpLmNvbmNhdChkb2NJZCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLl9pZCkge1xuICAgICAgLy8gV2UgY291bGQgYmUgcGFzc2luZyBhbiBlbnRpcmUgYXNzZXQgZG9jdW1lbnQgaW5zdGVhZCBvZiBhbiBJRFxuICAgICAgZG9jSWQgPSB0eXBlLl9pZDtcbiAgICB9XG5cbiAgICB2YWxpZGF0b3JzLmhhc0RhdGFzZXQodGhpcy5jbGllbnQuY2xpZW50Q29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZGVsZXRlKGRvY0lkKTtcbiAgfSxcbiAgZ2V0SW1hZ2VVcmw6IGZ1bmN0aW9uIGdldEltYWdlVXJsKHJlZiwgcXVlcnkpIHtcbiAgICB2YXIgaWQgPSByZWYuX3JlZiB8fCByZWY7XG5cbiAgICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRJbWFnZVVybCgpIG5lZWRzIGVpdGhlciBhbiBvYmplY3Qgd2l0aCBhIF9yZWYsIG9yIGEgc3RyaW5nIHdpdGggYW4gYXNzZXQgZG9jdW1lbnQgSUQnKTtcbiAgICB9XG5cbiAgICBpZiAoIS9eaW1hZ2UtW0EtWmEtejAtOV9dKy1cXGQreFxcZCstW2Etel17MSw1fSQvLnRlc3QoaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhc3NldCBJRCBcXFwiXCIuY29uY2F0KGlkLCBcIlxcXCIuIFVSTCBnZW5lcmF0aW9uIG9ubHkgd29ya3MgZm9yIGF1dG8tZ2VuZXJhdGVkIElEcy5cIikpO1xuICAgIH1cblxuICAgIHZhciBfaWQkc3BsaXQgPSBpZC5zcGxpdCgnLScpLFxuICAgICAgICBfaWQkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX2lkJHNwbGl0LCA0KSxcbiAgICAgICAgYXNzZXRJZCA9IF9pZCRzcGxpdDJbMV0sXG4gICAgICAgIHNpemUgPSBfaWQkc3BsaXQyWzJdLFxuICAgICAgICBmb3JtYXQgPSBfaWQkc3BsaXQyWzNdO1xuXG4gICAgdmFsaWRhdG9ycy5oYXNEYXRhc2V0KHRoaXMuY2xpZW50LmNsaWVudENvbmZpZyk7XG4gICAgdmFyIF90aGlzJGNsaWVudCRjbGllbnRDbyA9IHRoaXMuY2xpZW50LmNsaWVudENvbmZpZyxcbiAgICAgICAgcHJvamVjdElkID0gX3RoaXMkY2xpZW50JGNsaWVudENvLnByb2plY3RJZCxcbiAgICAgICAgZGF0YXNldCA9IF90aGlzJGNsaWVudCRjbGllbnRDby5kYXRhc2V0O1xuICAgIHZhciBxcyA9IHF1ZXJ5ID8gcXVlcnlTdHJpbmcocXVlcnkpIDogJyc7XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9jZG4uc2FuaXR5LmlvL2ltYWdlcy9cIi5jb25jYXQocHJvamVjdElkLCBcIi9cIikuY29uY2F0KGRhdGFzZXQsIFwiL1wiKS5jb25jYXQoYXNzZXRJZCwgXCItXCIpLmNvbmNhdChzaXplLCBcIi5cIikuY29uY2F0KGZvcm1hdCkuY29uY2F0KHFzKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gQXV0aENsaWVudChjbGllbnQpIHtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG59XG5cbmFzc2lnbihBdXRoQ2xpZW50LnByb3RvdHlwZSwge1xuICBnZXRMb2dpblByb3ZpZGVyczogZnVuY3Rpb24gZ2V0TG9naW5Qcm92aWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiAnL2F1dGgvcHJvdmlkZXJzJ1xuICAgIH0pO1xuICB9LFxuICBsb2dvdXQ6IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmk6ICcvYXV0aC9sb2dvdXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZW5lcmF0ZUhlbHBVcmwgPSByZXF1aXJlKCdAc2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsJyk7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vdmFsaWRhdG9ycycpO1xuXG52YXIgb25jZSA9IHJlcXVpcmUoJy4vdXRpbC9vbmNlJyk7XG5cbnZhciBkZWZhdWx0Q2RuSG9zdCA9ICdhcGljZG4uc2FuaXR5LmlvJztcbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBhcGlIb3N0OiAnaHR0cHM6Ly9hcGkuc2FuaXR5LmlvJyxcbiAgdXNlUHJvamVjdEhvc3RuYW1lOiB0cnVlLFxuICBncmFkaWVudE1vZGU6IGZhbHNlLFxuICBpc1Byb21pc2VBUEk6IHRydWVcbn07XG52YXIgTE9DQUxIT1NUUyA9IFsnbG9jYWxob3N0JywgJzEyNy4wLjAuMScsICcwLjAuMC4wJ107XG5cbnZhciBpc0xvY2FsID0gZnVuY3Rpb24gaXNMb2NhbChob3N0KSB7XG4gIHJldHVybiBMT0NBTEhPU1RTLmluZGV4T2YoaG9zdCkgIT09IC0xO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuXG52YXIgY3JlYXRlV2FybmluZ1ByaW50ZXIgPSBmdW5jdGlvbiBjcmVhdGVXYXJuaW5nUHJpbnRlcihtZXNzYWdlKSB7XG4gIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29uc29sZS53YXJuKG1lc3NhZ2Uuam9pbignICcpKTtcbiAgfSk7XG59O1xuXG52YXIgcHJpbnRDZG5XYXJuaW5nID0gY3JlYXRlV2FybmluZ1ByaW50ZXIoWydZb3UgYXJlIG5vdCB1c2luZyB0aGUgU2FuaXR5IENETi4gVGhhdCBtZWFucyB5b3VyIGRhdGEgaXMgYWx3YXlzIGZyZXNoLCBidXQgdGhlIENETiBpcyBmYXN0ZXIgYW5kJywgXCJjaGVhcGVyLiBUaGluayBhYm91dCBpdCEgRm9yIG1vcmUgaW5mbywgc2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC1jZG4tY29uZmlndXJhdGlvbicpLCBcIi5cIiksICdUbyBoaWRlIHRoaXMgd2FybmluZywgcGxlYXNlIHNldCB0aGUgYHVzZUNkbmAgb3B0aW9uIHRvIGVpdGhlciBgdHJ1ZWAgb3IgYGZhbHNlYCB3aGVuIGNyZWF0aW5nJywgJ3RoZSBjbGllbnQuJ10pO1xudmFyIHByaW50QnJvd3NlclRva2VuV2FybmluZyA9IGNyZWF0ZVdhcm5pbmdQcmludGVyKFsnWW91IGhhdmUgY29uZmlndXJlZCBTYW5pdHkgY2xpZW50IHRvIHVzZSBhIHRva2VuIGluIHRoZSBicm93c2VyLiBUaGlzIG1heSBjYXVzZSB1bmludGVudGlvbmFsIHNlY3VyaXR5IGlzc3Vlcy4nLCBcIlNlZSBcIi5jb25jYXQoZ2VuZXJhdGVIZWxwVXJsKCdqcy1jbGllbnQtYnJvd3Nlci10b2tlbicpLCBcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhbmQgaG93IHRvIGhpZGUgdGhpcyB3YXJuaW5nLlwiKV0pO1xudmFyIHByaW50Q2RuVG9rZW5XYXJuaW5nID0gY3JlYXRlV2FybmluZ1ByaW50ZXIoWydZb3UgaGF2ZSBzZXQgYHVzZUNkbmAgdG8gYHRydWVgIHdoaWxlIGFsc28gc3BlY2lmeWluZyBhIHRva2VuLiBUaGlzIGlzIHVzdWFsbHkgbm90IHdoYXQgeW91JywgJ3dhbnQuIFRoZSBDRE4gY2Fubm90IGJlIHVzZWQgd2l0aCBhbiBhdXRob3JpemF0aW9uIHRva2VuLCBzaW5jZSBwcml2YXRlIGRhdGEgY2Fubm90IGJlIGNhY2hlZC4nLCBcIlNlZSBcIi5jb25jYXQoZ2VuZXJhdGVIZWxwVXJsKCdqcy1jbGllbnQtdXNlY2RuLXRva2VuJyksIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKV0pO1xuZXhwb3J0cy5kZWZhdWx0Q29uZmlnID0gZGVmYXVsdENvbmZpZztcblxuZXhwb3J0cy5pbml0Q29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZywgcHJldkNvbmZpZykge1xuICB2YXIgbmV3Q29uZmlnID0gYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBwcmV2Q29uZmlnLCBjb25maWcpO1xuICB2YXIgZ3JhZGllbnRNb2RlID0gbmV3Q29uZmlnLmdyYWRpZW50TW9kZTtcbiAgdmFyIHByb2plY3RCYXNlZCA9ICFncmFkaWVudE1vZGUgJiYgbmV3Q29uZmlnLnVzZVByb2plY3RIb3N0bmFtZTtcblxuICBpZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGhlbHBVcmwgPSBnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC1wcm9taXNlLXBvbHlmaWxsJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbmF0aXZlIFByb21pc2UtaW1wbGVtZW50YXRpb24gZm91bmQsIHBvbHlmaWxsIG5lZWRlZCAtIHNlZSBcIi5jb25jYXQoaGVscFVybCkpO1xuICB9XG5cbiAgaWYgKGdyYWRpZW50TW9kZSAmJiAhbmV3Q29uZmlnLm5hbWVzcGFjZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBtdXN0IGNvbnRhaW4gYG5hbWVzcGFjZWAgd2hlbiBydW5uaW5nIGluIGdyYWRpZW50IG1vZGUnKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0QmFzZWQgJiYgIW5ld0NvbmZpZy5wcm9qZWN0SWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyYXRpb24gbXVzdCBjb250YWluIGBwcm9qZWN0SWRgJyk7XG4gIH1cblxuICB2YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgdmFyIGlzTG9jYWxob3N0ID0gaXNCcm93c2VyICYmIGlzTG9jYWwod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcblxuICBpZiAoaXNCcm93c2VyICYmIGlzTG9jYWxob3N0ICYmIG5ld0NvbmZpZy50b2tlbiAmJiBuZXdDb25maWcuaWdub3JlQnJvd3NlclRva2VuV2FybmluZyAhPT0gdHJ1ZSkge1xuICAgIHByaW50QnJvd3NlclRva2VuV2FybmluZygpO1xuICB9IGVsc2UgaWYgKCghaXNCcm93c2VyIHx8IGlzTG9jYWxob3N0KSAmJiBuZXdDb25maWcudXNlQ2RuICYmIG5ld0NvbmZpZy50b2tlbikge1xuICAgIHByaW50Q2RuVG9rZW5XYXJuaW5nKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5ld0NvbmZpZy51c2VDZG4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJpbnRDZG5XYXJuaW5nKCk7XG4gIH1cblxuICBpZiAocHJvamVjdEJhc2VkKSB7XG4gICAgdmFsaWRhdGUucHJvamVjdElkKG5ld0NvbmZpZy5wcm9qZWN0SWQpO1xuICB9XG5cbiAgaWYgKCFncmFkaWVudE1vZGUgJiYgbmV3Q29uZmlnLmRhdGFzZXQpIHtcbiAgICB2YWxpZGF0ZS5kYXRhc2V0KG5ld0NvbmZpZy5kYXRhc2V0LCBuZXdDb25maWcuZ3JhZGllbnRNb2RlKTtcbiAgfVxuXG4gIG5ld0NvbmZpZy5pc0RlZmF1bHRBcGkgPSBuZXdDb25maWcuYXBpSG9zdCA9PT0gZGVmYXVsdENvbmZpZy5hcGlIb3N0O1xuICBuZXdDb25maWcudXNlQ2RuID0gQm9vbGVhbihuZXdDb25maWcudXNlQ2RuKSAmJiAhbmV3Q29uZmlnLnRva2VuICYmICFuZXdDb25maWcud2l0aENyZWRlbnRpYWxzO1xuXG4gIGlmIChuZXdDb25maWcuZ3JhZGllbnRNb2RlKSB7XG4gICAgbmV3Q29uZmlnLnVybCA9IG5ld0NvbmZpZy5hcGlIb3N0O1xuICAgIG5ld0NvbmZpZy5jZG5VcmwgPSBuZXdDb25maWcuYXBpSG9zdDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaG9zdFBhcnRzID0gbmV3Q29uZmlnLmFwaUhvc3Quc3BsaXQoJzovLycsIDIpO1xuICAgIHZhciBwcm90b2NvbCA9IGhvc3RQYXJ0c1swXTtcbiAgICB2YXIgaG9zdCA9IGhvc3RQYXJ0c1sxXTtcbiAgICB2YXIgY2RuSG9zdCA9IG5ld0NvbmZpZy5pc0RlZmF1bHRBcGkgPyBkZWZhdWx0Q2RuSG9zdCA6IGhvc3Q7XG5cbiAgICBpZiAobmV3Q29uZmlnLnVzZVByb2plY3RIb3N0bmFtZSkge1xuICAgICAgbmV3Q29uZmlnLnVybCA9IFwiXCIuY29uY2F0KHByb3RvY29sLCBcIjovL1wiKS5jb25jYXQobmV3Q29uZmlnLnByb2plY3RJZCwgXCIuXCIpLmNvbmNhdChob3N0LCBcIi92MVwiKTtcbiAgICAgIG5ld0NvbmZpZy5jZG5VcmwgPSBcIlwiLmNvbmNhdChwcm90b2NvbCwgXCI6Ly9cIikuY29uY2F0KG5ld0NvbmZpZy5wcm9qZWN0SWQsIFwiLlwiKS5jb25jYXQoY2RuSG9zdCwgXCIvdjFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NvbmZpZy51cmwgPSBcIlwiLmNvbmNhdChuZXdDb25maWcuYXBpSG9zdCwgXCIvdjFcIik7XG4gICAgICBuZXdDb25maWcuY2RuVXJsID0gbmV3Q29uZmlnLnVybDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3Q29uZmlnO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9maWx0ZXInKSxcbiAgICBmaWx0ZXIgPSBfcmVxdWlyZS5maWx0ZXI7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL21hcCcpLFxuICAgIG1hcCA9IF9yZXF1aXJlMi5tYXA7XG5cbnZhciB2YWxpZGF0b3JzID0gcmVxdWlyZSgnLi4vdmFsaWRhdG9ycycpO1xuXG52YXIgZ2V0U2VsZWN0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9nZXRTZWxlY3Rpb24nKTtcblxudmFyIGVuY29kZVF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgnLi9lbmNvZGVRdWVyeVN0cmluZycpO1xuXG52YXIgVHJhbnNhY3Rpb24gPSByZXF1aXJlKCcuL3RyYW5zYWN0aW9uJyk7XG5cbnZhciBQYXRjaCA9IHJlcXVpcmUoJy4vcGF0Y2gnKTtcblxudmFyIGxpc3RlbiA9IHJlcXVpcmUoJy4vbGlzdGVuJyk7XG5cbnZhciBleGNsdWRlRmFsc2V5ID0gZnVuY3Rpb24gZXhjbHVkZUZhbHNleShwYXJhbSwgZGVmVmFsdWUpIHtcbiAgdmFyIHZhbHVlID0gdHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJyA/IGRlZlZhbHVlIDogcGFyYW07XG4gIHJldHVybiBwYXJhbSA9PT0gZmFsc2UgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbn07XG5cbnZhciBnZXRNdXRhdGlvblF1ZXJ5ID0gZnVuY3Rpb24gZ2V0TXV0YXRpb25RdWVyeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4ge1xuICAgIHJldHVybklkczogdHJ1ZSxcbiAgICByZXR1cm5Eb2N1bWVudHM6IGV4Y2x1ZGVGYWxzZXkob3B0aW9ucy5yZXR1cm5Eb2N1bWVudHMsIHRydWUpLFxuICAgIHZpc2liaWxpdHk6IG9wdGlvbnMudmlzaWJpbGl0eSB8fCAnc3luYydcbiAgfTtcbn07XG5cbnZhciBpc1Jlc3BvbnNlID0gZnVuY3Rpb24gaXNSZXNwb25zZShldmVudCkge1xuICByZXR1cm4gZXZlbnQudHlwZSA9PT0gJ3Jlc3BvbnNlJztcbn07XG5cbnZhciBnZXRCb2R5ID0gZnVuY3Rpb24gZ2V0Qm9keShldmVudCkge1xuICByZXR1cm4gZXZlbnQuYm9keTtcbn07XG5cbnZhciBpbmRleEJ5ID0gZnVuY3Rpb24gaW5kZXhCeShkb2NzLCBhdHRyKSB7XG4gIHJldHVybiBkb2NzLnJlZHVjZShmdW5jdGlvbiAoaW5kZXhlZCwgZG9jKSB7XG4gICAgaW5kZXhlZFthdHRyKGRvYyldID0gZG9jO1xuICAgIHJldHVybiBpbmRleGVkO1xuICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn07XG5cbnZhciB0b1Byb21pc2UgPSBmdW5jdGlvbiB0b1Byb21pc2Uob2JzZXJ2YWJsZSkge1xuICByZXR1cm4gb2JzZXJ2YWJsZS50b1Byb21pc2UoKTtcbn07XG5cbnZhciBnZXRRdWVyeVNpemVMaW1pdCA9IDExMjY0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxpc3RlbjogbGlzdGVuLFxuICBnZXREYXRhVXJsOiBmdW5jdGlvbiBnZXREYXRhVXJsKG9wZXJhdGlvbiwgcGF0aCkge1xuICAgIHZhciBjb25maWcgPSB0aGlzLmNsaWVudENvbmZpZztcbiAgICB2YXIgY2F0YWxvZyA9IGNvbmZpZy5ncmFkaWVudE1vZGUgPyBjb25maWcubmFtZXNwYWNlIDogdmFsaWRhdG9ycy5oYXNEYXRhc2V0KGNvbmZpZyk7XG4gICAgdmFyIGJhc2VVcmkgPSBcIi9cIi5jb25jYXQob3BlcmF0aW9uLCBcIi9cIikuY29uY2F0KGNhdGFsb2cpO1xuICAgIHZhciB1cmkgPSBwYXRoID8gXCJcIi5jb25jYXQoYmFzZVVyaSwgXCIvXCIpLmNvbmNhdChwYXRoKSA6IGJhc2VVcmk7XG4gICAgcmV0dXJuICh0aGlzLmNsaWVudENvbmZpZy5ncmFkaWVudE1vZGUgPyB1cmkgOiBcIi9kYXRhXCIuY29uY2F0KHVyaSkpLnJlcGxhY2UoL1xcLygkfFxcPykvLCAnJDEnKTtcbiAgfSxcbiAgZmV0Y2g6IGZ1bmN0aW9uIGZldGNoKHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIG1hcFJlc3BvbnNlID0gb3B0aW9ucy5maWx0ZXJSZXNwb25zZSA9PT0gZmFsc2UgPyBmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gcmVzLnJlc3VsdDtcbiAgICB9O1xuXG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9kYXRhUmVxdWVzdCgncXVlcnknLCB7XG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH0sIG9wdGlvbnMpLnBpcGUobWFwKG1hcFJlc3BvbnNlKSk7XG5cbiAgICByZXR1cm4gdGhpcy5pc1Byb21pc2VBUEkoKSA/IHRvUHJvbWlzZShvYnNlcnZhYmxlKSA6IG9ic2VydmFibGU7XG4gIH0sXG4gIGdldERvY3VtZW50OiBmdW5jdGlvbiBnZXREb2N1bWVudChpZCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgdXJpOiB0aGlzLmdldERhdGFVcmwoJ2RvYycsIGlkKSxcbiAgICAgIGpzb246IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShvcHRpb25zKS5waXBlKGZpbHRlcihpc1Jlc3BvbnNlKSwgbWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50LmJvZHkuZG9jdW1lbnRzICYmIGV2ZW50LmJvZHkuZG9jdW1lbnRzWzBdO1xuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzLmlzUHJvbWlzZUFQSSgpID8gdG9Qcm9taXNlKG9ic2VydmFibGUpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgZ2V0RG9jdW1lbnRzOiBmdW5jdGlvbiBnZXREb2N1bWVudHMoaWRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB1cmk6IHRoaXMuZ2V0RGF0YVVybCgnZG9jJywgaWRzLmpvaW4oJywnKSksXG4gICAgICBqc29uOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBvYnNlcnZhYmxlID0gdGhpcy5fcmVxdWVzdE9ic2VydmFibGUob3B0aW9ucykucGlwZShmaWx0ZXIoaXNSZXNwb25zZSksIG1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBpbmRleGVkID0gaW5kZXhCeShldmVudC5ib2R5LmRvY3VtZW50cyB8fCBbXSwgZnVuY3Rpb24gKGRvYykge1xuICAgICAgICByZXR1cm4gZG9jLl9pZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpbmRleGVkW2lkXSB8fCBudWxsO1xuICAgICAgfSk7XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2Uob2JzZXJ2YWJsZSkgOiBvYnNlcnZhYmxlO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShkb2MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlKGRvYywgJ2NyZWF0ZScsIG9wdGlvbnMpO1xuICB9LFxuICBjcmVhdGVJZk5vdEV4aXN0czogZnVuY3Rpb24gY3JlYXRlSWZOb3RFeGlzdHMoZG9jLCBvcHRpb25zKSB7XG4gICAgdmFsaWRhdG9ycy5yZXF1aXJlRG9jdW1lbnRJZCgnY3JlYXRlSWZOb3RFeGlzdHMnLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGUoZG9jLCAnY3JlYXRlSWZOb3RFeGlzdHMnLCBvcHRpb25zKTtcbiAgfSxcbiAgY3JlYXRlT3JSZXBsYWNlOiBmdW5jdGlvbiBjcmVhdGVPclJlcGxhY2UoZG9jLCBvcHRpb25zKSB7XG4gICAgdmFsaWRhdG9ycy5yZXF1aXJlRG9jdW1lbnRJZCgnY3JlYXRlT3JSZXBsYWNlJywgZG9jKTtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlKGRvYywgJ2NyZWF0ZU9yUmVwbGFjZScsIG9wdGlvbnMpO1xuICB9LFxuICBwYXRjaDogZnVuY3Rpb24gcGF0Y2goc2VsZWN0b3IsIG9wZXJhdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFBhdGNoKHNlbGVjdG9yLCBvcGVyYXRpb25zLCB0aGlzKTtcbiAgfSxcbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKHNlbGVjdGlvbiwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmRhdGFSZXF1ZXN0KCdtdXRhdGUnLCB7XG4gICAgICBtdXRhdGlvbnM6IFt7XG4gICAgICAgIGRlbGV0ZTogZ2V0U2VsZWN0aW9uKHNlbGVjdGlvbilcbiAgICAgIH1dXG4gICAgfSwgb3B0aW9ucyk7XG4gIH0sXG4gIG11dGF0ZTogZnVuY3Rpb24gbXV0YXRlKG11dGF0aW9ucywgb3B0aW9ucykge1xuICAgIHZhciBtdXQgPSBtdXRhdGlvbnMgaW5zdGFuY2VvZiBQYXRjaCB8fCBtdXRhdGlvbnMgaW5zdGFuY2VvZiBUcmFuc2FjdGlvbiA/IG11dGF0aW9ucy5zZXJpYWxpemUoKSA6IG11dGF0aW9ucztcbiAgICB2YXIgbXV0cyA9IEFycmF5LmlzQXJyYXkobXV0KSA/IG11dCA6IFttdXRdO1xuICAgIHZhciB0cmFuc2FjdGlvbklkID0gb3B0aW9ucyAmJiBvcHRpb25zLnRyYW5zYWN0aW9uSWQ7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVJlcXVlc3QoJ211dGF0ZScsIHtcbiAgICAgIG11dGF0aW9uczogbXV0cyxcbiAgICAgIHRyYW5zYWN0aW9uSWQ6IHRyYW5zYWN0aW9uSWRcbiAgICB9LCBvcHRpb25zKTtcbiAgfSxcbiAgdHJhbnNhY3Rpb246IGZ1bmN0aW9uIHRyYW5zYWN0aW9uKG9wZXJhdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uKG9wZXJhdGlvbnMsIHRoaXMpO1xuICB9LFxuICBkYXRhUmVxdWVzdDogZnVuY3Rpb24gZGF0YVJlcXVlc3QoZW5kcG9pbnQsIGJvZHkpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICB2YXIgcmVxdWVzdCA9IHRoaXMuX2RhdGFSZXF1ZXN0KGVuZHBvaW50LCBib2R5LCBvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLmlzUHJvbWlzZUFQSSgpID8gdG9Qcm9taXNlKHJlcXVlc3QpIDogcmVxdWVzdDtcbiAgfSxcbiAgX2RhdGFSZXF1ZXN0OiBmdW5jdGlvbiBfZGF0YVJlcXVlc3QoZW5kcG9pbnQsIGJvZHkpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIGlzTXV0YXRpb24gPSBlbmRwb2ludCA9PT0gJ211dGF0ZSc7IC8vIENoZWNrIGlmIHRoZSBxdWVyeSBzdHJpbmcgaXMgd2l0aGluIGEgY29uZmlndXJlZCB0aHJlc2hvbGQsXG4gICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBjYW4gdXNlIEdFVC4gT3RoZXJ3aXNlLCB1c2UgUE9TVC5cblxuICAgIHZhciBzdHJRdWVyeSA9ICFpc011dGF0aW9uICYmIGVuY29kZVF1ZXJ5U3RyaW5nKGJvZHkpO1xuICAgIHZhciB1c2VHZXQgPSAhaXNNdXRhdGlvbiAmJiBzdHJRdWVyeS5sZW5ndGggPCBnZXRRdWVyeVNpemVMaW1pdDtcbiAgICB2YXIgc3RyaW5nUXVlcnkgPSB1c2VHZXQgPyBzdHJRdWVyeSA6ICcnO1xuICAgIHZhciByZXR1cm5GaXJzdCA9IG9wdGlvbnMucmV0dXJuRmlyc3Q7XG4gICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQsXG4gICAgICAgIHRva2VuID0gb3B0aW9ucy50b2tlbjtcbiAgICB2YXIgdXJpID0gdGhpcy5nZXREYXRhVXJsKGVuZHBvaW50LCBzdHJpbmdRdWVyeSk7XG4gICAgdmFyIHJlcU9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IHVzZUdldCA/ICdHRVQnIDogJ1BPU1QnLFxuICAgICAgdXJpOiB1cmksXG4gICAgICBqc29uOiB0cnVlLFxuICAgICAgYm9keTogdXNlR2V0ID8gdW5kZWZpbmVkIDogYm9keSxcbiAgICAgIHF1ZXJ5OiBpc011dGF0aW9uICYmIGdldE11dGF0aW9uUXVlcnkob3B0aW9ucyksXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgICAgdG9rZW46IHRva2VuXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdE9ic2VydmFibGUocmVxT3B0aW9ucykucGlwZShmaWx0ZXIoaXNSZXNwb25zZSksIG1hcChnZXRCb2R5KSwgbWFwKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmICghaXNNdXRhdGlvbikge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSAvLyBTaG91bGQgd2UgcmV0dXJuIGRvY3VtZW50cz9cblxuXG4gICAgICB2YXIgcmVzdWx0cyA9IHJlcy5yZXN1bHRzIHx8IFtdO1xuXG4gICAgICBpZiAob3B0aW9ucy5yZXR1cm5Eb2N1bWVudHMpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkZpcnN0ID8gcmVzdWx0c1swXSAmJiByZXN1bHRzWzBdLmRvY3VtZW50IDogcmVzdWx0cy5tYXAoZnVuY3Rpb24gKG11dCkge1xuICAgICAgICAgIHJldHVybiBtdXQuZG9jdW1lbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBSZXR1cm4gYSByZWR1Y2VkIHN1YnNldFxuXG5cbiAgICAgIHZhciBrZXkgPSByZXR1cm5GaXJzdCA/ICdkb2N1bWVudElkJyA6ICdkb2N1bWVudElkcyc7XG4gICAgICB2YXIgaWRzID0gcmV0dXJuRmlyc3QgPyByZXN1bHRzWzBdICYmIHJlc3VsdHNbMF0uaWQgOiByZXN1bHRzLm1hcChmdW5jdGlvbiAobXV0KSB7XG4gICAgICAgIHJldHVybiBtdXQuaWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICB0cmFuc2FjdGlvbklkOiByZXMudHJhbnNhY3Rpb25JZCxcbiAgICAgICAgcmVzdWx0czogcmVzdWx0c1xuICAgICAgfSwga2V5LCBpZHMpO1xuICAgIH0pKTtcbiAgfSxcbiAgX2NyZWF0ZTogZnVuY3Rpb24gX2NyZWF0ZShkb2MsIG9wKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgdmFyIG11dGF0aW9uID0gX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgZG9jKTtcblxuICAgIHZhciBvcHRzID0gYXNzaWduKHtcbiAgICAgIHJldHVybkZpcnN0OiB0cnVlLFxuICAgICAgcmV0dXJuRG9jdW1lbnRzOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVJlcXVlc3QoJ211dGF0ZScsIHtcbiAgICAgIG11dGF0aW9uczogW211dGF0aW9uXVxuICAgIH0sIG9wdHMpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBxdWVyeSA9IF9yZWYucXVlcnksXG4gICAgICBfcmVmJHBhcmFtcyA9IF9yZWYucGFyYW1zLFxuICAgICAgcGFyYW1zID0gX3JlZiRwYXJhbXMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRwYXJhbXMsXG4gICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkb3B0aW9ucztcbiAgdmFyIGJhc2UgPSBcIj9xdWVyeT1cIi5jb25jYXQoZW5jKHF1ZXJ5KSk7XG4gIHZhciBxU3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKS5yZWR1Y2UoZnVuY3Rpb24gKHFzLCBwYXJhbSkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChxcywgXCImXCIpLmNvbmNhdChlbmMoXCIkXCIuY29uY2F0KHBhcmFtKSksIFwiPVwiKS5jb25jYXQoZW5jKEpTT04uc3RyaW5naWZ5KHBhcmFtc1twYXJhbV0pKSk7XG4gIH0sIGJhc2UpO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChxcywgb3B0aW9uKSB7XG4gICAgLy8gT25seSBpbmNsdWRlIHRoZSBvcHRpb24gaWYgaXQgaXMgdHJ1dGh5XG4gICAgcmV0dXJuIG9wdGlvbnNbb3B0aW9uXSA/IFwiXCIuY29uY2F0KHFzLCBcIiZcIikuY29uY2F0KGVuYyhvcHRpb24pLCBcIj1cIikuY29uY2F0KGVuYyhvcHRpb25zW29wdGlvbl0pKSA6IHFzO1xuICB9LCBxU3RyaW5nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBPYnNlcnZhYmxlID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL21pbmltYWwnKTtcblxudmFyIHBvbHlmaWxsZWRFdmVudFNvdXJjZSA9IHJlcXVpcmUoJ0BzYW5pdHkvZXZlbnRzb3VyY2UnKTtcblxudmFyIHBpY2sgPSByZXF1aXJlKCcuLi91dGlsL3BpY2snKTtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vdXRpbC9kZWZhdWx0cycpO1xuXG52YXIgZW5jb2RlUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuL2VuY29kZVF1ZXJ5U3RyaW5nJyk7XG5cbnZhciBnZW5lcmF0ZUhlbHBVcmwgPSByZXF1aXJlKCdAc2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsJyk7XG5cbnZhciBvbmNlID0gcmVxdWlyZSgnLi4vdXRpbC9vbmNlJyk7XG5cbnZhciB0b2tlbldhcm5pbmcgPSBbJ1VzaW5nIHRva2VuIHdpdGggbGlzdGVuZXJzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlcnMuICcsIFwiRm9yIG1vcmUgaW5mbywgc2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC1saXN0ZW5lci10b2tlbnMtYnJvd3NlcicpLCBcIi5cIildOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG52YXIgcHJpbnRUb2tlbldhcm5pbmcgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNvbnNvbGUud2Fybih0b2tlbldhcm5pbmcuam9pbignICcpKTtcbn0pO1xudmFyIGlzV2luZG93RXZlbnRTb3VyY2UgPSBCb29sZWFuKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5FdmVudFNvdXJjZSk7XG52YXIgRXZlbnRTb3VyY2UgPSBpc1dpbmRvd0V2ZW50U291cmNlID8gd2luZG93LkV2ZW50U291cmNlIC8vIE5hdGl2ZSBicm93c2VyIEV2ZW50U291cmNlXG46IHBvbHlmaWxsZWRFdmVudFNvdXJjZTsgLy8gTm9kZS5qcywgSUUgZXRjXG5cbnZhciBwb3NzaWJsZU9wdGlvbnMgPSBbJ2luY2x1ZGVQcmV2aW91c1JldmlzaW9uJywgJ2luY2x1ZGVSZXN1bHQnLCAndmlzaWJpbGl0eScsICdlZmZlY3RGb3JtYXQnXTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgaW5jbHVkZVJlc3VsdDogdHJ1ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0ZW4ocXVlcnksIHBhcmFtcykge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBvcHRpb25zID0gZGVmYXVsdHMob3B0cywgZGVmYXVsdE9wdGlvbnMpO1xuICB2YXIgbGlzdGVuT3B0cyA9IHBpY2sob3B0aW9ucywgcG9zc2libGVPcHRpb25zKTtcbiAgdmFyIHFzID0gZW5jb2RlUXVlcnlTdHJpbmcoe1xuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICBvcHRpb25zOiBsaXN0ZW5PcHRzXG4gIH0pO1xuICB2YXIgX3RoaXMkY2xpZW50Q29uZmlnID0gdGhpcy5jbGllbnRDb25maWcsXG4gICAgICB1cmwgPSBfdGhpcyRjbGllbnRDb25maWcudXJsLFxuICAgICAgdG9rZW4gPSBfdGhpcyRjbGllbnRDb25maWcudG9rZW4sXG4gICAgICB3aXRoQ3JlZGVudGlhbHMgPSBfdGhpcyRjbGllbnRDb25maWcud2l0aENyZWRlbnRpYWxzO1xuICB2YXIgdXJpID0gXCJcIi5jb25jYXQodXJsKS5jb25jYXQodGhpcy5nZXREYXRhVXJsKCdsaXN0ZW4nLCBxcykpO1xuICB2YXIgbGlzdGVuRm9yID0gb3B0aW9ucy5ldmVudHMgPyBvcHRpb25zLmV2ZW50cyA6IFsnbXV0YXRpb24nXTtcbiAgdmFyIHNob3VsZEVtaXRSZWNvbm5lY3QgPSBsaXN0ZW5Gb3IuaW5kZXhPZigncmVjb25uZWN0JykgIT09IC0xO1xuXG4gIGlmICh0b2tlbiAmJiBpc1dpbmRvd0V2ZW50U291cmNlKSB7XG4gICAgcHJpbnRUb2tlbldhcm5pbmcoKTtcbiAgfVxuXG4gIHZhciBlc09wdGlvbnMgPSB7fTtcblxuICBpZiAodG9rZW4gfHwgd2l0aENyZWRlbnRpYWxzKSB7XG4gICAgZXNPcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIH1cblxuICBpZiAodG9rZW4pIHtcbiAgICBlc09wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiLmNvbmNhdCh0b2tlbilcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgIHZhciBlcyA9IGdldEV2ZW50U291cmNlKCk7XG4gICAgdmFyIHJlY29ubmVjdFRpbWVyO1xuICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBvbkVycm9yKCkge1xuICAgICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbWl0UmVjb25uZWN0KCk7IC8vIEFsbG93IGV2ZW50IGhhbmRsZXJzIG9mIGBlbWl0UmVjb25uZWN0YCB0byBjYW5jZWwvY2xvc2UgdGhlIHJlY29ubmVjdCBhdHRlbXB0XG5cbiAgICAgIGlmIChzdG9wcGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVW5sZXNzIHdlJ3ZlIGV4cGxpY2l0bHkgc3RvcHBlZCB0aGUgRVMgKGluIHdoaWNoIGNhc2UgYHN0b3BwZWRgIHNob3VsZCBiZSB0cnVlKSxcbiAgICAgIC8vIHdlIHNob3VsZCBuZXZlciBiZSBpbiBhIGRpc2Nvbm5lY3RlZCBzdGF0ZS4gQnkgZGVmYXVsdCwgRXZlbnRTb3VyY2Ugd2lsbCByZWNvbm5lY3RcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHksIGluIHdoaWNoIGNhc2UgaXQgc2V0cyByZWFkeVN0YXRlIHRvIGBDT05ORUNUSU5HYCwgYnV0IGluIHNvbWUgY2FzZXNcbiAgICAgIC8vIChsaWtlIHdoZW4gYSBsYXB0b3AgbGlkIGlzIGNsb3NlZCksIGl0IGNsb3NlcyB0aGUgY29ubmVjdGlvbi4gSW4gdGhlc2UgY2FzZXMgd2UgbmVlZFxuICAgICAgLy8gdG8gZXhwbGljaXRseSByZWNvbm5lY3QuXG5cblxuICAgICAgaWYgKGVzLnJlYWR5U3RhdGUgPT09IEV2ZW50U291cmNlLkNMT1NFRCkge1xuICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICBjbGVhclRpbWVvdXQocmVjb25uZWN0VGltZXIpO1xuICAgICAgICByZWNvbm5lY3RUaW1lciA9IHNldFRpbWVvdXQob3BlbiwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNoYW5uZWxFcnJvcihlcnIpIHtcbiAgICAgIG9ic2VydmVyLmVycm9yKGNvb2VyY2VFcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoZXZ0KSB7XG4gICAgICB2YXIgZXZlbnQgPSBwYXJzZUV2ZW50KGV2dCk7XG4gICAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBFcnJvciA/IG9ic2VydmVyLmVycm9yKGV2ZW50KSA6IG9ic2VydmVyLm5leHQoZXZlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlzY29ubmVjdChldnQpIHtcbiAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBlcy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IsIGZhbHNlKTtcbiAgICAgIGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5uZWxFcnJvcicsIG9uQ2hhbm5lbEVycm9yLCBmYWxzZSk7XG4gICAgICBlcy5yZW1vdmVFdmVudExpc3RlbmVyKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0LCBmYWxzZSk7XG4gICAgICBsaXN0ZW5Gb3IuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICByZXR1cm4gZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBvbk1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgZXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0UmVjb25uZWN0KCkge1xuICAgICAgaWYgKHNob3VsZEVtaXRSZWNvbm5lY3QpIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgdHlwZTogJ3JlY29ubmVjdCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2UoKSB7XG4gICAgICB2YXIgZXZzID0gbmV3IEV2ZW50U291cmNlKHVyaSwgZXNPcHRpb25zKTtcbiAgICAgIGV2cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IsIGZhbHNlKTtcbiAgICAgIGV2cy5hZGRFdmVudExpc3RlbmVyKCdjaGFubmVsRXJyb3InLCBvbkNoYW5uZWxFcnJvciwgZmFsc2UpO1xuICAgICAgZXZzLmFkZEV2ZW50TGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QsIGZhbHNlKTtcbiAgICAgIGxpc3RlbkZvci5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiBldnMuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBvbk1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGV2cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgZXMgPSBnZXRFdmVudFNvdXJjZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3A7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcGFyc2VFdmVudChldmVudCkge1xuICB0cnkge1xuICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YSAmJiBKU09OLnBhcnNlKGV2ZW50LmRhdGEpIHx8IHt9O1xuICAgIHJldHVybiBhc3NpZ24oe1xuICAgICAgdHlwZTogZXZlbnQudHlwZVxuICAgIH0sIGRhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvb2VyY2VFcnJvcihlcnIpIHtcbiAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuXG4gIHZhciBldnQgPSBwYXJzZUV2ZW50KGVycik7XG4gIHJldHVybiBldnQgaW5zdGFuY2VvZiBFcnJvciA/IGV2dCA6IG5ldyBFcnJvcihleHRyYWN0RXJyb3JNZXNzYWdlKGV2dCkpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RXJyb3JNZXNzYWdlKGVycikge1xuICBpZiAoIWVyci5lcnJvcikge1xuICAgIHJldHVybiBlcnIubWVzc2FnZSB8fCAnVW5rbm93biBsaXN0ZW5lciBlcnJvcic7XG4gIH1cblxuICBpZiAoZXJyLmVycm9yLmRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIGVyci5lcnJvci5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgZXJyLmVycm9yID09PSAnc3RyaW5nJyA/IGVyci5lcnJvciA6IEpTT04uc3RyaW5naWZ5KGVyci5lcnJvciwgbnVsbCwgMik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBkZWVwQXNzaWduID0gcmVxdWlyZSgnZGVlcC1hc3NpZ24nKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGdldFNlbGVjdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWwvZ2V0U2VsZWN0aW9uJyk7XG5cbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxudmFyIHZhbGlkYXRlT2JqZWN0ID0gdmFsaWRhdGUudmFsaWRhdGVPYmplY3Q7XG52YXIgdmFsaWRhdGVJbnNlcnQgPSB2YWxpZGF0ZS52YWxpZGF0ZUluc2VydDtcblxuZnVuY3Rpb24gUGF0Y2goc2VsZWN0aW9uKSB7XG4gIHZhciBvcGVyYXRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGNsaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gIHRoaXMub3BlcmF0aW9ucyA9IGFzc2lnbih7fSwgb3BlcmF0aW9ucyk7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oUGF0Y2gucHJvdG90eXBlLCB7XG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBhdGNoKHRoaXMuc2VsZWN0aW9uLCBhc3NpZ24oe30sIHRoaXMub3BlcmF0aW9ucyksIHRoaXMuY2xpZW50KTtcbiAgfSxcbiAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKHByb3BzKSB7XG4gICAgdmFsaWRhdGVPYmplY3QoJ21lcmdlJywgcHJvcHMpO1xuICAgIHZhciBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpLmZpbHRlcihmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgICB9KS5zbGljZSgyKTtcbiAgICBjb25zb2xlLndhcm4oXCJUaGUgXFxcIm1lcmdlXFxcIiBwYXRjaCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZVxcblwiLmNvbmNhdChzdGFjay5qb2luKCdcXG4nKSkpO1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ21lcmdlJywgZGVlcEFzc2lnbih0aGlzLm9wZXJhdGlvbnMubWVyZ2UgfHwge30sIHByb3BzKSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignc2V0JywgcHJvcHMpO1xuICB9LFxuICBkaWZmTWF0Y2hQYXRjaDogZnVuY3Rpb24gZGlmZk1hdGNoUGF0Y2gocHJvcHMpIHtcbiAgICB2YWxpZGF0ZU9iamVjdCgnZGlmZk1hdGNoUGF0Y2gnLCBwcm9wcyk7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignZGlmZk1hdGNoUGF0Y2gnLCBwcm9wcyk7XG4gIH0sXG4gIHVuc2V0OiBmdW5jdGlvbiB1bnNldChhdHRycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhdHRycykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndW5zZXQoYXR0cnMpIHRha2VzIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXMgdG8gdW5zZXQsIG5vbi1hcnJheSBnaXZlbicpO1xuICAgIH1cblxuICAgIHRoaXMub3BlcmF0aW9ucyA9IGFzc2lnbih7fSwgdGhpcy5vcGVyYXRpb25zLCB7XG4gICAgICB1bnNldDogYXR0cnNcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc2V0SWZNaXNzaW5nOiBmdW5jdGlvbiBzZXRJZk1pc3NpbmcocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdzZXRJZk1pc3NpbmcnLCBwcm9wcyk7XG4gIH0sXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocHJvcHMpIHtcbiAgICB2YWxpZGF0ZU9iamVjdCgncmVwbGFjZScsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcy5fc2V0KCdzZXQnLCB7XG4gICAgICAkOiBwcm9wc1xuICAgIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGlkLWxlbmd0aFxuICB9LFxuICBpbmM6IGZ1bmN0aW9uIGluYyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ2luYycsIHByb3BzKTtcbiAgfSxcbiAgZGVjOiBmdW5jdGlvbiBkZWMocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdkZWMnLCBwcm9wcyk7XG4gIH0sXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KGF0LCBzZWxlY3RvciwgaXRlbXMpIHtcbiAgICB2YXIgX3RoaXMkX2Fzc2lnbjtcblxuICAgIHZhbGlkYXRlSW5zZXJ0KGF0LCBzZWxlY3RvciwgaXRlbXMpO1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ2luc2VydCcsIChfdGhpcyRfYXNzaWduID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfdGhpcyRfYXNzaWduLCBhdCwgc2VsZWN0b3IpLCBfZGVmaW5lUHJvcGVydHkoX3RoaXMkX2Fzc2lnbiwgXCJpdGVtc1wiLCBpdGVtcyksIF90aGlzJF9hc3NpZ24pKTtcbiAgfSxcbiAgYXBwZW5kOiBmdW5jdGlvbiBhcHBlbmQoc2VsZWN0b3IsIGl0ZW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0KCdhZnRlcicsIFwiXCIuY29uY2F0KHNlbGVjdG9yLCBcIlstMV1cIiksIGl0ZW1zKTtcbiAgfSxcbiAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChzZWxlY3RvciwgaXRlbXMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnQoJ2JlZm9yZScsIFwiXCIuY29uY2F0KHNlbGVjdG9yLCBcIlswXVwiKSwgaXRlbXMpO1xuICB9LFxuICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShzZWxlY3Rvciwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtcykge1xuICAgIC8vIE5lZ2F0aXZlIGluZGV4ZXMgZG9lc24ndCBtZWFuIHRoZSBzYW1lIGluIFNhbml0eSBhcyB0aGV5IGRvIGluIEpTO1xuICAgIC8vIC0xIG1lYW5zIFwiYWN0dWFsbHkgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcIiwgd2hpY2ggYWxsb3dzIGluc2VydGluZ1xuICAgIC8vIGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5IHdpdGhvdXQga25vd2luZyBpdHMgbGVuZ3RoLiBXZSB0aGVyZWZvcmUgaGF2ZVxuICAgIC8vIHRvIHN1YnN0cmFjdCBuZWdhdGl2ZSBpbmRleGVzIGJ5IG9uZSB0byBtYXRjaCBKUy4gSWYgeW91IHdhbnQgU2FuaXR5LVxuICAgIC8vIGJlaGF2aW91ciwganVzdCB1c2UgYGluc2VydCgncmVwbGFjZScsIHNlbGVjdG9yLCBpdGVtcylgIGRpcmVjdGx5XG4gICAgdmFyIGRlbEFsbCA9IHR5cGVvZiBkZWxldGVDb3VudCA9PT0gJ3VuZGVmaW5lZCcgfHwgZGVsZXRlQ291bnQgPT09IC0xO1xuICAgIHZhciBzdGFydEluZGV4ID0gc3RhcnQgPCAwID8gc3RhcnQgLSAxIDogc3RhcnQ7XG4gICAgdmFyIGRlbENvdW50ID0gZGVsQWxsID8gLTEgOiBNYXRoLm1heCgwLCBzdGFydCArIGRlbGV0ZUNvdW50KTtcbiAgICB2YXIgZGVsUmFuZ2UgPSBzdGFydEluZGV4IDwgMCAmJiBkZWxDb3VudCA+PSAwID8gJycgOiBkZWxDb3VudDtcbiAgICB2YXIgcmFuZ2VTZWxlY3RvciA9IFwiXCIuY29uY2F0KHNlbGVjdG9yLCBcIltcIikuY29uY2F0KHN0YXJ0SW5kZXgsIFwiOlwiKS5jb25jYXQoZGVsUmFuZ2UsIFwiXVwiKTtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnQoJ3JlcGxhY2UnLCByYW5nZVNlbGVjdG9yLCBpdGVtcyB8fCBbXSk7XG4gIH0sXG4gIGlmUmV2aXNpb25JZDogZnVuY3Rpb24gaWZSZXZpc2lvbklkKHJldikge1xuICAgIHRoaXMub3BlcmF0aW9ucy5pZlJldmlzaW9uSUQgPSByZXY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHNlcmlhbGl6ZTogZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuICAgIHJldHVybiBhc3NpZ24oZ2V0U2VsZWN0aW9uKHRoaXMuc2VsZWN0aW9uKSwgdGhpcy5vcGVyYXRpb25zKTtcbiAgfSxcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKCk7XG4gIH0sXG4gIGNvbW1pdDogZnVuY3Rpb24gY29tbWl0KCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmICghdGhpcy5jbGllbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYGNsaWVudGAgcGFzc2VkIHRvIHBhdGNoLCBlaXRoZXIgcHJvdmlkZSBvbmUgb3IgcGFzcyB0aGUgJyArICdwYXRjaCB0byBhIGNsaWVudHMgYG11dGF0ZSgpYCBtZXRob2QnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0dXJuRmlyc3QgPSB0eXBlb2YgdGhpcy5zZWxlY3Rpb24gPT09ICdzdHJpbmcnO1xuICAgIHZhciBvcHRzID0gYXNzaWduKHtcbiAgICAgIHJldHVybkZpcnN0OiByZXR1cm5GaXJzdCxcbiAgICAgIHJldHVybkRvY3VtZW50czogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5tdXRhdGUoe1xuICAgICAgcGF0Y2g6IHRoaXMuc2VyaWFsaXplKClcbiAgICB9LCBvcHRzKTtcbiAgfSxcbiAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMub3BlcmF0aW9ucyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBfc2V0OiBmdW5jdGlvbiBfc2V0KG9wLCBwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24ob3AsIHByb3BzLCBmYWxzZSk7XG4gIH0sXG4gIF9hc3NpZ246IGZ1bmN0aW9uIF9hc3NpZ24ob3AsIHByb3BzKSB7XG4gICAgdmFyIG1lcmdlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICAgIHZhbGlkYXRlT2JqZWN0KG9wLCBwcm9wcyk7XG4gICAgdGhpcy5vcGVyYXRpb25zID0gYXNzaWduKHt9LCB0aGlzLm9wZXJhdGlvbnMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3AsIGFzc2lnbih7fSwgbWVyZ2UgJiYgdGhpcy5vcGVyYXRpb25zW29wXSB8fCB7fSwgcHJvcHMpKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBQYXRjaDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIHZhbGlkYXRvcnMgPSByZXF1aXJlKCcuLi92YWxpZGF0b3JzJyk7XG5cbnZhciBQYXRjaCA9IHJlcXVpcmUoJy4vcGF0Y2gnKTtcblxudmFyIGRlZmF1bHRNdXRhdGVPcHRpb25zID0ge1xuICByZXR1cm5Eb2N1bWVudHM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBUcmFuc2FjdGlvbigpIHtcbiAgdmFyIG9wZXJhdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgY2xpZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciB0cmFuc2FjdGlvbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHRoaXMudHJ4SWQgPSB0cmFuc2FjdGlvbklkO1xuICB0aGlzLm9wZXJhdGlvbnMgPSBvcGVyYXRpb25zO1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbn1cblxuYXNzaWduKFRyYW5zYWN0aW9uLnByb3RvdHlwZSwge1xuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbih0aGlzLm9wZXJhdGlvbnMuc2xpY2UoMCksIHRoaXMuY2xpZW50LCB0aGlzLnRyeElkKTtcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoZG9jKSB7XG4gICAgdmFsaWRhdG9ycy52YWxpZGF0ZU9iamVjdCgnY3JlYXRlJywgZG9jKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgIGNyZWF0ZTogZG9jXG4gICAgfSk7XG4gIH0sXG4gIGNyZWF0ZUlmTm90RXhpc3RzOiBmdW5jdGlvbiBjcmVhdGVJZk5vdEV4aXN0cyhkb2MpIHtcbiAgICB2YXIgb3AgPSAnY3JlYXRlSWZOb3RFeGlzdHMnO1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdGVPYmplY3Qob3AsIGRvYyk7XG4gICAgdmFsaWRhdG9ycy5yZXF1aXJlRG9jdW1lbnRJZChvcCwgZG9jKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3AsIGRvYykpO1xuICB9LFxuICBjcmVhdGVPclJlcGxhY2U6IGZ1bmN0aW9uIGNyZWF0ZU9yUmVwbGFjZShkb2MpIHtcbiAgICB2YXIgb3AgPSAnY3JlYXRlT3JSZXBsYWNlJztcbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRlT2JqZWN0KG9wLCBkb2MpO1xuICAgIHZhbGlkYXRvcnMucmVxdWlyZURvY3VtZW50SWQob3AsIGRvYyk7XG4gICAgcmV0dXJuIHRoaXMuX2FkZChfZGVmaW5lUHJvcGVydHkoe30sIG9wLCBkb2MpKTtcbiAgfSxcbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKGRvY3VtZW50SWQpIHtcbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRlRG9jdW1lbnRJZCgnZGVsZXRlJywgZG9jdW1lbnRJZCk7XG4gICAgcmV0dXJuIHRoaXMuX2FkZCh7XG4gICAgICBkZWxldGU6IHtcbiAgICAgICAgaWQ6IGRvY3VtZW50SWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgcGF0Y2g6IGZ1bmN0aW9uIHBhdGNoKGRvY3VtZW50SWQsIHBhdGNoT3BzKSB7XG4gICAgdmFyIGlzQnVpbGRlciA9IHR5cGVvZiBwYXRjaE9wcyA9PT0gJ2Z1bmN0aW9uJztcbiAgICB2YXIgaXNQYXRjaCA9IGRvY3VtZW50SWQgaW5zdGFuY2VvZiBQYXRjaDsgLy8gdHJhbnNhY3Rpb24ucGF0Y2goY2xpZW50LnBhdGNoKCdkb2N1bWVudElkJykuaW5jKHt2aXNpdHM6IDF9KSlcblxuICAgIGlmIChpc1BhdGNoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgICAgcGF0Y2g6IGRvY3VtZW50SWQuc2VyaWFsaXplKClcbiAgICAgIH0pO1xuICAgIH0gLy8gcGF0Y2ggPT4gcGF0Y2guaW5jKHt2aXNpdHM6IDF9KS5zZXQoe2ZvbzogJ2Jhcid9KVxuXG5cbiAgICBpZiAoaXNCdWlsZGVyKSB7XG4gICAgICB2YXIgcGF0Y2ggPSBwYXRjaE9wcyhuZXcgUGF0Y2goZG9jdW1lbnRJZCwge30sIHRoaXMuY2xpZW50KSk7XG5cbiAgICAgIGlmICghKHBhdGNoIGluc3RhbmNlb2YgUGF0Y2gpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZnVuY3Rpb24gcGFzc2VkIHRvIGBwYXRjaCgpYCBtdXN0IHJldHVybiB0aGUgcGF0Y2gnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2FkZCh7XG4gICAgICAgIHBhdGNoOiBwYXRjaC5zZXJpYWxpemUoKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2FkZCh7XG4gICAgICBwYXRjaDogYXNzaWduKHtcbiAgICAgICAgaWQ6IGRvY3VtZW50SWRcbiAgICAgIH0sIHBhdGNoT3BzKVxuICAgIH0pO1xuICB9LFxuICB0cmFuc2FjdGlvbklkOiBmdW5jdGlvbiB0cmFuc2FjdGlvbklkKGlkKSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJ4SWQ7XG4gICAgfVxuXG4gICAgdGhpcy50cnhJZCA9IGlkO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzZXJpYWxpemU6IGZ1bmN0aW9uIHNlcmlhbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGVyYXRpb25zLnNsaWNlKCk7XG4gIH0sXG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZSgpO1xuICB9LFxuICBjb21taXQ6IGZ1bmN0aW9uIGNvbW1pdChvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmNsaWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBgY2xpZW50YCBwYXNzZWQgdG8gdHJhbnNhY3Rpb24sIGVpdGhlciBwcm92aWRlIG9uZSBvciBwYXNzIHRoZSAnICsgJ3RyYW5zYWN0aW9uIHRvIGEgY2xpZW50cyBgbXV0YXRlKClgIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5tdXRhdGUodGhpcy5zZXJpYWxpemUoKSwgYXNzaWduKHtcbiAgICAgIHRyYW5zYWN0aW9uSWQ6IHRoaXMudHJ4SWRcbiAgICB9LCBkZWZhdWx0TXV0YXRlT3B0aW9ucywgb3B0aW9ucyB8fCB7fSkpO1xuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5vcGVyYXRpb25zID0gW107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIF9hZGQ6IGZ1bmN0aW9uIF9hZGQobXV0KSB7XG4gICAgdGhpcy5vcGVyYXRpb25zLnB1c2gobXV0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zYWN0aW9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuLi92YWxpZGF0b3JzJyk7XG5cbmZ1bmN0aW9uIERhdGFzZXRzQ2xpZW50KGNsaWVudCkge1xuICB0aGlzLnJlcXVlc3QgPSBjbGllbnQucmVxdWVzdC5iaW5kKGNsaWVudCk7XG59XG5cbmFzc2lnbihEYXRhc2V0c0NsaWVudC5wcm90b3R5cGUsIHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUobmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZnkoJ1BVVCcsIG5hbWUsIG9wdGlvbnMpO1xuICB9LFxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kaWZ5KCdQQVRDSCcsIG5hbWUsIG9wdGlvbnMpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZnkoJ0RFTEVURScsIG5hbWUpO1xuICB9LFxuICBsaXN0OiBmdW5jdGlvbiBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgdXJpOiAnL2RhdGFzZXRzJ1xuICAgIH0pO1xuICB9LFxuICBfbW9kaWZ5OiBmdW5jdGlvbiBfbW9kaWZ5KG1ldGhvZCwgbmFtZSwgYm9keSkge1xuICAgIHZhbGlkYXRlLmRhdGFzZXQobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVyaTogXCIvZGF0YXNldHMvXCIuY29uY2F0KG5hbWUpLFxuICAgICAgYm9keTogYm9keVxuICAgIH0pO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gRGF0YXNldHNDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gW107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYWtlRXJyb3IgPSByZXF1aXJlKCdtYWtlLWVycm9yJyk7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbmZ1bmN0aW9uIENsaWVudEVycm9yKHJlcykge1xuICB2YXIgcHJvcHMgPSBleHRyYWN0RXJyb3JQcm9wcyhyZXMpO1xuICBDbGllbnRFcnJvci5zdXBlci5jYWxsKHRoaXMsIHByb3BzLm1lc3NhZ2UpO1xuICBhc3NpZ24odGhpcywgcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBTZXJ2ZXJFcnJvcihyZXMpIHtcbiAgdmFyIHByb3BzID0gZXh0cmFjdEVycm9yUHJvcHMocmVzKTtcbiAgU2VydmVyRXJyb3Iuc3VwZXIuY2FsbCh0aGlzLCBwcm9wcy5tZXNzYWdlKTtcbiAgYXNzaWduKHRoaXMsIHByb3BzKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVycm9yUHJvcHMocmVzKSB7XG4gIHZhciBib2R5ID0gcmVzLmJvZHk7XG4gIHZhciBwcm9wcyA9IHtcbiAgICByZXNwb25zZTogcmVzLFxuICAgIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlLFxuICAgIHJlc3BvbnNlQm9keTogc3RyaW5naWZ5Qm9keShib2R5LCByZXMpXG4gIH07IC8vIEFQSS9Cb29tIHN0eWxlIGVycm9ycyAoe3N0YXR1c0NvZGUsIGVycm9yLCBtZXNzYWdlfSlcblxuICBpZiAoYm9keS5lcnJvciAmJiBib2R5Lm1lc3NhZ2UpIHtcbiAgICBwcm9wcy5tZXNzYWdlID0gXCJcIi5jb25jYXQoYm9keS5lcnJvciwgXCIgLSBcIikuY29uY2F0KGJvZHkubWVzc2FnZSk7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9IC8vIFF1ZXJ5L2RhdGFiYXNlIGVycm9ycyAoe2Vycm9yOiB7ZGVzY3JpcHRpb24sIG90aGVyLCBhcmIsIHByb3BzfX0pXG5cblxuICBpZiAoYm9keS5lcnJvciAmJiBib2R5LmVycm9yLmRlc2NyaXB0aW9uKSB7XG4gICAgcHJvcHMubWVzc2FnZSA9IGJvZHkuZXJyb3IuZGVzY3JpcHRpb247XG4gICAgcHJvcHMuZGV0YWlscyA9IGJvZHkuZXJyb3I7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9IC8vIE90aGVyLCBtb3JlIGFyYml0cmFyeSBlcnJvcnNcblxuXG4gIHByb3BzLm1lc3NhZ2UgPSBib2R5LmVycm9yIHx8IGJvZHkubWVzc2FnZSB8fCBodHRwRXJyb3JNZXNzYWdlKHJlcyk7XG4gIHJldHVybiBwcm9wcztcbn1cblxuZnVuY3Rpb24gaHR0cEVycm9yTWVzc2FnZShyZXMpIHtcbiAgdmFyIHN0YXR1c01lc3NhZ2UgPSByZXMuc3RhdHVzTWVzc2FnZSA/IFwiIFwiLmNvbmNhdChyZXMuc3RhdHVzTWVzc2FnZSkgOiAnJztcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHJlcy5tZXRob2QsIFwiLXJlcXVlc3QgdG8gXCIpLmNvbmNhdChyZXMudXJsLCBcIiByZXN1bHRlZCBpbiBIVFRQIFwiKS5jb25jYXQocmVzLnN0YXR1c0NvZGUpLmNvbmNhdChzdGF0dXNNZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Qm9keShib2R5LCByZXMpIHtcbiAgdmFyIGNvbnRlbnRUeXBlID0gKHJlcy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGlzSnNvbiA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTE7XG4gIHJldHVybiBpc0pzb24gPyBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSA6IGJvZHk7XG59XG5cbm1ha2VFcnJvcihDbGllbnRFcnJvcik7XG5tYWtlRXJyb3IoU2VydmVyRXJyb3IpO1xuZXhwb3J0cy5DbGllbnRFcnJvciA9IENsaWVudEVycm9yO1xuZXhwb3J0cy5TZXJ2ZXJFcnJvciA9IFNlcnZlckVycm9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdmFyIHFzID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcXMucHVzaChcIlwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoa2V5KSwgXCI9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHFzLmxlbmd0aCA+IDAgPyBcIj9cIi5jb25jYXQocXMuam9pbignJicpKSA6ICcnO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHktZnVuY3Rpb24sIG5vLXByb2Nlc3MtZW52ICovXG52YXIgZ2V0SXQgPSByZXF1aXJlKCdnZXQtaXQnKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIG9ic2VydmFibGUgPSByZXF1aXJlKCdnZXQtaXQvbGliL21pZGRsZXdhcmUvb2JzZXJ2YWJsZScpO1xuXG52YXIganNvblJlcXVlc3QgPSByZXF1aXJlKCdnZXQtaXQvbGliL21pZGRsZXdhcmUvanNvblJlcXVlc3QnKTtcblxudmFyIGpzb25SZXNwb25zZSA9IHJlcXVpcmUoJ2dldC1pdC9saWIvbWlkZGxld2FyZS9qc29uUmVzcG9uc2UnKTtcblxudmFyIHByb2dyZXNzID0gcmVxdWlyZSgnZ2V0LWl0L2xpYi9taWRkbGV3YXJlL3Byb2dyZXNzJyk7XG5cbnZhciBPYnNlcnZhYmxlID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL21pbmltYWwnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9lcnJvcnMnKSxcbiAgICBDbGllbnRFcnJvciA9IF9yZXF1aXJlLkNsaWVudEVycm9yLFxuICAgIFNlcnZlckVycm9yID0gX3JlcXVpcmUuU2VydmVyRXJyb3I7XG5cbnZhciBodHRwRXJyb3IgPSB7XG4gIG9uUmVzcG9uc2U6IGZ1bmN0aW9uIG9uUmVzcG9uc2UocmVzKSB7XG4gICAgaWYgKHJlcy5zdGF0dXNDb2RlID49IDUwMCkge1xuICAgICAgdGhyb3cgbmV3IFNlcnZlckVycm9yKHJlcyk7XG4gICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzQ29kZSA+PSA0MDApIHtcbiAgICAgIHRocm93IG5ldyBDbGllbnRFcnJvcihyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07IC8vIEVudmlyb25tZW50LXNwZWNpZmljIG1pZGRsZXdhcmUuXG5cbnZhciBlbnZTcGVjaWZpYyA9IHJlcXVpcmUoJy4vbm9kZU1pZGRsZXdhcmUnKTtcblxudmFyIG1pZGRsZXdhcmUgPSBlbnZTcGVjaWZpYy5jb25jYXQoW2pzb25SZXF1ZXN0KCksIGpzb25SZXNwb25zZSgpLCBwcm9ncmVzcygpLCBodHRwRXJyb3IsIG9ic2VydmFibGUoe1xuICBpbXBsZW1lbnRhdGlvbjogT2JzZXJ2YWJsZVxufSldKTtcbnZhciByZXF1ZXN0ID0gZ2V0SXQobWlkZGxld2FyZSk7XG5cbmZ1bmN0aW9uIGh0dHBSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgdmFyIHJlcXVlc3RlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogcmVxdWVzdDtcbiAgcmV0dXJuIHJlcXVlc3Rlcihhc3NpZ24oe1xuICAgIG1heFJlZGlyZWN0czogMFxuICB9LCBvcHRpb25zKSk7XG59XG5cbmh0dHBSZXF1ZXN0LmRlZmF1bHRSZXF1ZXN0ZXIgPSByZXF1ZXN0O1xuaHR0cFJlcXVlc3QuQ2xpZW50RXJyb3IgPSBDbGllbnRFcnJvcjtcbmh0dHBSZXF1ZXN0LlNlcnZlckVycm9yID0gU2VydmVyRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGh0dHBSZXF1ZXN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgcHJvamVjdEhlYWRlciA9ICdYLVNhbml0eS1Qcm9qZWN0LUlEJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBvdmVycmlkZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgaGVhZGVycyA9IHt9O1xuICB2YXIgdG9rZW4gPSBvdmVycmlkZXMudG9rZW4gfHwgY29uZmlnLnRva2VuO1xuXG4gIGlmICh0b2tlbikge1xuICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IFwiQmVhcmVyIFwiLmNvbmNhdCh0b2tlbik7XG4gIH1cblxuICBpZiAoIW92ZXJyaWRlcy51c2VHbG9iYWxBcGkgJiYgIWNvbmZpZy51c2VQcm9qZWN0SG9zdG5hbWUgJiYgY29uZmlnLnByb2plY3RJZCkge1xuICAgIGhlYWRlcnNbcHJvamVjdEhlYWRlcl0gPSBjb25maWcucHJvamVjdElkO1xuICB9XG5cbiAgdmFyIHdpdGhDcmVkZW50aWFscyA9IEJvb2xlYW4odHlwZW9mIG92ZXJyaWRlcy53aXRoQ3JlZGVudGlhbHMgPT09ICd1bmRlZmluZWQnID8gY29uZmlnLnRva2VuIHx8IGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgOiBvdmVycmlkZXMud2l0aENyZWRlbnRpYWxzKTtcbiAgdmFyIHRpbWVvdXQgPSB0eXBlb2Ygb3ZlcnJpZGVzLnRpbWVvdXQgPT09ICd1bmRlZmluZWQnID8gY29uZmlnLnRpbWVvdXQgOiBvdmVycmlkZXMudGltZW91dDtcbiAgcmV0dXJuIGFzc2lnbih7fSwgb3ZlcnJpZGVzLCB7XG4gICAgaGVhZGVyczogYXNzaWduKHt9LCBoZWFkZXJzLCBvdmVycmlkZXMuaGVhZGVycyB8fCB7fSksXG4gICAgdGltZW91dDogdHlwZW9mIHRpbWVvdXQgPT09ICd1bmRlZmluZWQnID8gNSAqIDYwICogMTAwMCA6IHRpbWVvdXQsXG4gICAganNvbjogdHJ1ZSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFsc1xuICB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbmZ1bmN0aW9uIFByb2plY3RzQ2xpZW50KGNsaWVudCkge1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbn1cblxuYXNzaWduKFByb2plY3RzQ2xpZW50LnByb3RvdHlwZSwge1xuICBsaXN0OiBmdW5jdGlvbiBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVyaTogJy9wcm9qZWN0cydcbiAgICB9KTtcbiAgfSxcbiAgZ2V0QnlJZDogZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVyaTogXCIvcHJvamVjdHMvXCIuY29uY2F0KGlkKVxuICAgIH0pO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdHNDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvZmlsdGVyJyksXG4gICAgZmlsdGVyID0gX3JlcXVpcmUuZmlsdGVyO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9tYXAnKSxcbiAgICBtYXAgPSBfcmVxdWlyZTIubWFwO1xuXG52YXIgUGF0Y2ggPSByZXF1aXJlKCcuL2RhdGEvcGF0Y2gnKTtcblxudmFyIFRyYW5zYWN0aW9uID0gcmVxdWlyZSgnLi9kYXRhL3RyYW5zYWN0aW9uJyk7XG5cbnZhciBkYXRhTWV0aG9kcyA9IHJlcXVpcmUoJy4vZGF0YS9kYXRhTWV0aG9kcycpO1xuXG52YXIgRGF0YXNldHNDbGllbnQgPSByZXF1aXJlKCcuL2RhdGFzZXRzL2RhdGFzZXRzQ2xpZW50Jyk7XG5cbnZhciBQcm9qZWN0c0NsaWVudCA9IHJlcXVpcmUoJy4vcHJvamVjdHMvcHJvamVjdHNDbGllbnQnKTtcblxudmFyIEFzc2V0c0NsaWVudCA9IHJlcXVpcmUoJy4vYXNzZXRzL2Fzc2V0c0NsaWVudCcpO1xuXG52YXIgVXNlcnNDbGllbnQgPSByZXF1aXJlKCcuL3VzZXJzL3VzZXJzQ2xpZW50Jyk7XG5cbnZhciBBdXRoQ2xpZW50ID0gcmVxdWlyZSgnLi9hdXRoL2F1dGhDbGllbnQnKTtcblxudmFyIGh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgnLi9odHRwL3JlcXVlc3QnKTtcblxudmFyIGdldFJlcXVlc3RPcHRpb25zID0gcmVxdWlyZSgnLi9odHRwL3JlcXVlc3RPcHRpb25zJyk7XG5cbnZhciBfcmVxdWlyZTMgPSByZXF1aXJlKCcuL2NvbmZpZycpLFxuICAgIGRlZmF1bHRDb25maWcgPSBfcmVxdWlyZTMuZGVmYXVsdENvbmZpZyxcbiAgICBpbml0Q29uZmlnID0gX3JlcXVpcmUzLmluaXRDb25maWc7XG5cbnZhciB0b1Byb21pc2UgPSBmdW5jdGlvbiB0b1Byb21pc2Uob2JzZXJ2YWJsZSkge1xuICByZXR1cm4gb2JzZXJ2YWJsZS50b1Byb21pc2UoKTtcbn07XG5cbmZ1bmN0aW9uIFNhbml0eUNsaWVudCgpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZGVmYXVsdENvbmZpZztcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2FuaXR5Q2xpZW50KSkge1xuICAgIHJldHVybiBuZXcgU2FuaXR5Q2xpZW50KGNvbmZpZyk7XG4gIH1cblxuICB0aGlzLmNvbmZpZyhjb25maWcpO1xuICB0aGlzLmFzc2V0cyA9IG5ldyBBc3NldHNDbGllbnQodGhpcyk7XG4gIHRoaXMuZGF0YXNldHMgPSBuZXcgRGF0YXNldHNDbGllbnQodGhpcyk7XG4gIHRoaXMucHJvamVjdHMgPSBuZXcgUHJvamVjdHNDbGllbnQodGhpcyk7XG4gIHRoaXMudXNlcnMgPSBuZXcgVXNlcnNDbGllbnQodGhpcyk7XG4gIHRoaXMuYXV0aCA9IG5ldyBBdXRoQ2xpZW50KHRoaXMpO1xuXG4gIGlmICh0aGlzLmNsaWVudENvbmZpZy5pc1Byb21pc2VBUEkpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZUNvbmZpZyA9IGFzc2lnbih7fSwgdGhpcy5jbGllbnRDb25maWcsIHtcbiAgICAgIGlzUHJvbWlzZUFQSTogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLm9ic2VydmFibGUgPSBuZXcgU2FuaXR5Q2xpZW50KG9ic2VydmFibGVDb25maWcpO1xuICB9XG59XG5cbmFzc2lnbihTYW5pdHlDbGllbnQucHJvdG90eXBlLCBkYXRhTWV0aG9kcyk7XG5hc3NpZ24oU2FuaXR5Q2xpZW50LnByb3RvdHlwZSwge1xuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBTYW5pdHlDbGllbnQodGhpcy5jb25maWcoKSk7XG4gIH0sXG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKG5ld0NvbmZpZykge1xuICAgIGlmICh0eXBlb2YgbmV3Q29uZmlnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGFzc2lnbih7fSwgdGhpcy5jbGllbnRDb25maWcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9ic2VydmFibGUpIHtcbiAgICAgIHZhciBvYnNlcnZhYmxlQ29uZmlnID0gYXNzaWduKHt9LCBuZXdDb25maWcsIHtcbiAgICAgICAgaXNQcm9taXNlQVBJOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9ic2VydmFibGUuY29uZmlnKG9ic2VydmFibGVDb25maWcpO1xuICAgIH1cblxuICAgIHRoaXMuY2xpZW50Q29uZmlnID0gaW5pdENvbmZpZyhuZXdDb25maWcsIHRoaXMuY2xpZW50Q29uZmlnIHx8IHt9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgZ2V0VXJsOiBmdW5jdGlvbiBnZXRVcmwodXJpKSB7XG4gICAgdmFyIGNhblVzZUNkbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIGJhc2UgPSBjYW5Vc2VDZG4gPyB0aGlzLmNsaWVudENvbmZpZy5jZG5VcmwgOiB0aGlzLmNsaWVudENvbmZpZy51cmw7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2UsIFwiL1wiKS5jb25jYXQodXJpLnJlcGxhY2UoL15cXC8vLCAnJykpO1xuICB9LFxuICBpc1Byb21pc2VBUEk6IGZ1bmN0aW9uIGlzUHJvbWlzZUFQSSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnRDb25maWcuaXNQcm9taXNlQVBJO1xuICB9LFxuICBfcmVxdWVzdE9ic2VydmFibGU6IGZ1bmN0aW9uIF9yZXF1ZXN0T2JzZXJ2YWJsZShvcHRpb25zKSB7XG4gICAgdmFyIHVyaSA9IG9wdGlvbnMudXJsIHx8IG9wdGlvbnMudXJpO1xuICAgIHZhciBjYW5Vc2VDZG4gPSB0aGlzLmNsaWVudENvbmZpZy51c2VDZG4gJiYgWydHRVQnLCAnSEVBRCddLmluZGV4T2Yob3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcpID49IDAgJiYgdXJpLmluZGV4T2YoJy9kYXRhLycpID09PSAwO1xuICAgIHZhciByZXFPcHRpb25zID0gZ2V0UmVxdWVzdE9wdGlvbnModGhpcy5jbGllbnRDb25maWcsIGFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgdXJsOiB0aGlzLmdldFVybCh1cmksIGNhblVzZUNkbilcbiAgICB9KSk7XG4gICAgcmV0dXJuIGh0dHBSZXF1ZXN0KHJlcU9wdGlvbnMsIHRoaXMuY2xpZW50Q29uZmlnLnJlcXVlc3Rlcik7XG4gIH0sXG4gIHJlcXVlc3Q6IGZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xuICAgIHZhciBvYnNlcnZhYmxlID0gdGhpcy5fcmVxdWVzdE9ic2VydmFibGUob3B0aW9ucykucGlwZShmaWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQudHlwZSA9PT0gJ3Jlc3BvbnNlJztcbiAgICB9KSwgbWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50LmJvZHk7XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2Uob2JzZXJ2YWJsZSkgOiBvYnNlcnZhYmxlO1xuICB9XG59KTtcblNhbml0eUNsaWVudC5QYXRjaCA9IFBhdGNoO1xuU2FuaXR5Q2xpZW50LlRyYW5zYWN0aW9uID0gVHJhbnNhY3Rpb247XG5TYW5pdHlDbGllbnQuQ2xpZW50RXJyb3IgPSBodHRwUmVxdWVzdC5DbGllbnRFcnJvcjtcblNhbml0eUNsaWVudC5TZXJ2ZXJFcnJvciA9IGh0dHBSZXF1ZXN0LlNlcnZlckVycm9yO1xuU2FuaXR5Q2xpZW50LnJlcXVlc3RlciA9IGh0dHBSZXF1ZXN0LmRlZmF1bHRSZXF1ZXN0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFNhbml0eUNsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gVXNlcnNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oVXNlcnNDbGllbnQucHJvdG90eXBlLCB7XG4gIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmk6IFwiL3VzZXJzL1wiLmNvbmNhdChpZClcbiAgICB9KTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJzQ2xpZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIGRlZmF1bHRzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkZWZhdWx0cykuY29uY2F0KE9iamVjdC5rZXlzKG9iaikpLnJlZHVjZShmdW5jdGlvbiAodGFyZ2V0LCBwcm9wKSB7XG4gICAgdGFyZ2V0W3Byb3BdID0gdHlwZW9mIG9ialtwcm9wXSA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0c1twcm9wXSA6IG9ialtwcm9wXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LCB7fSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFNlbGVjdGlvbihzZWwpIHtcbiAgaWYgKHR5cGVvZiBzZWwgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoc2VsKSkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogc2VsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChzZWwgJiYgc2VsLnF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBzZWwucXVlcnlcbiAgICB9O1xuICB9XG5cbiAgdmFyIHNlbGVjdGlvbk9wdHMgPSBbJyogRG9jdW1lbnQgSUQgKDxkb2NJZD4pJywgJyogQXJyYXkgb2YgZG9jdW1lbnQgSURzJywgJyogT2JqZWN0IGNvbnRhaW5pbmcgYHF1ZXJ5YCddLmpvaW4oJ1xcbicpO1xuICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHNlbGVjdGlvbiAtIG11c3QgYmUgb25lIG9mOlxcblxcblwiLmNvbmNhdChzZWxlY3Rpb25PcHRzKSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgZGlkQ2FsbCA9IGZhbHNlO1xuICB2YXIgcmV0dXJuVmFsdWU7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRpZENhbGwpIHtcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICBkaWRDYWxsID0gdHJ1ZTtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoZnVuY3Rpb24gKHNlbGVjdGlvbiwgcHJvcCkge1xuICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBzZWxlY3Rpb25bcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfSwge30pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgVkFMSURfQVNTRVRfVFlQRVMgPSBbJ2ltYWdlJywgJ2ZpbGUnXTtcbnZhciBWQUxJRF9JTlNFUlRfTE9DQVRJT05TID0gWydiZWZvcmUnLCAnYWZ0ZXInLCAncmVwbGFjZSddO1xuXG5leHBvcnRzLmRhdGFzZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIS9eWy1cXHddezEsMTI4fSQvLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGFzZXRzIGNhbiBvbmx5IGNvbnRhaW4gbG93ZXJjYXNlIGNoYXJhY3RlcnMsIG51bWJlcnMsIHVuZGVyc2NvcmVzIGFuZCBkYXNoZXMnKTtcbiAgfVxufTtcblxuZXhwb3J0cy5wcm9qZWN0SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKCEvXlstYS16MC05XSskL2kudGVzdChpZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bwcm9qZWN0SWRgIGNhbiBvbmx5IGNvbnRhaW4gb25seSBhLXosIDAtOSBhbmQgZGFzaGVzJyk7XG4gIH1cbn07XG5cbmV4cG9ydHMudmFsaWRhdGVBc3NldFR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAoVkFMSURfQVNTRVRfVFlQRVMuaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFzc2V0IHR5cGU6IFwiLmNvbmNhdCh0eXBlLCBcIi4gTXVzdCBiZSBvbmUgb2YgXCIpLmNvbmNhdChWQUxJRF9BU1NFVF9UWVBFUy5qb2luKCcsICcpKSk7XG4gIH1cbn07XG5cbmV4cG9ydHMudmFsaWRhdGVPYmplY3QgPSBmdW5jdGlvbiAob3AsIHZhbCkge1xuICBpZiAodmFsID09PSBudWxsIHx8IF90eXBlb2YodmFsKSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG9wLCBcIigpIHRha2VzIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXCIpKTtcbiAgfVxufTtcblxuZXhwb3J0cy5yZXF1aXJlRG9jdW1lbnRJZCA9IGZ1bmN0aW9uIChvcCwgZG9jKSB7XG4gIGlmICghZG9jLl9pZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChvcCwgXCIoKSByZXF1aXJlcyB0aGF0IHRoZSBkb2N1bWVudCBjb250YWlucyBhbiBJRCAoXFxcIl9pZFxcXCIgcHJvcGVydHkpXCIpKTtcbiAgfVxuXG4gIGV4cG9ydHMudmFsaWRhdGVEb2N1bWVudElkKG9wLCBkb2MuX2lkKTtcbn07XG5cbmV4cG9ydHMudmFsaWRhdGVEb2N1bWVudElkID0gZnVuY3Rpb24gKG9wLCBpZCkge1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCAhL15bYS16MC05Xy4tXSskL2kudGVzdChpZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQob3AsIFwiKCk6IFxcXCJcIikuY29uY2F0KGlkLCBcIlxcXCIgaXMgbm90IGEgdmFsaWQgZG9jdW1lbnQgSURcIikpO1xuICB9XG59O1xuXG5leHBvcnRzLnZhbGlkYXRlSW5zZXJ0ID0gZnVuY3Rpb24gKGF0LCBzZWxlY3RvciwgaXRlbXMpIHtcbiAgdmFyIHNpZ25hdHVyZSA9ICdpbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcyknO1xuXG4gIGlmIChWQUxJRF9JTlNFUlRfTE9DQVRJT05TLmluZGV4T2YoYXQpID09PSAtMSkge1xuICAgIHZhciB2YWxpZCA9IFZBTElEX0lOU0VSVF9MT0NBVElPTlMubWFwKGZ1bmN0aW9uIChsb2MpIHtcbiAgICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQobG9jLCBcIlxcXCJcIik7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoc2lnbmF0dXJlLCBcIiB0YWtlcyBhbiBcXFwiYXRcXFwiLWFyZ3VtZW50IHdoaWNoIGlzIG9uZSBvZjogXCIpLmNvbmNhdCh2YWxpZCkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoc2lnbmF0dXJlLCBcIiB0YWtlcyBhIFxcXCJzZWxlY3RvclxcXCItYXJndW1lbnQgd2hpY2ggbXVzdCBiZSBhIHN0cmluZ1wiKSk7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHNpZ25hdHVyZSwgXCIgdGFrZXMgYW4gXFxcIml0ZW1zXFxcIi1hcmd1bWVudCB3aGljaCBtdXN0IGJlIGFuIGFycmF5XCIpKTtcbiAgfVxufTtcblxuZXhwb3J0cy5oYXNEYXRhc2V0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBpZiAoIWNvbmZpZy5ncmFkaWVudE1vZGUgJiYgIWNvbmZpZy5kYXRhc2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgZGF0YXNldGAgbXVzdCBiZSBwcm92aWRlZCB0byBwZXJmb3JtIHF1ZXJpZXMnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWcuZGF0YXNldCB8fCAnJztcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG52YXIgZXZzID0gcmVxdWlyZSgnQHJleHhhcnMvZXZlbnRzb3VyY2UtcG9seWZpbGwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5FdmVudFNvdXJjZSB8fCBldnMuRXZlbnRTb3VyY2VcbiIsInZhciBiYXNlVXJsID0gJ2h0dHBzOi8vZG9jcy5zYW5pdHkuaW8vaGVscC8nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2VuZXJhdGVIZWxwVXJsKHNsdWcpIHtcbiAgcmV0dXJuIGJhc2VVcmwgKyBzbHVnXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJyksXG4gICAgT2JzZXJ2YWJsZSA9IF9yZXF1aXJlLk9ic2VydmFibGU7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCcuLi9vcGVyYXRvcnMvbWFwJyksXG4gICAgbWFwID0gX3JlcXVpcmUyLm1hcDtcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJy4uL29wZXJhdG9ycy9maWx0ZXInKSxcbiAgICBmaWx0ZXIgPSBfcmVxdWlyZTMuZmlsdGVyO1xuXG52YXIgX3JlcXVpcmU0ID0gcmVxdWlyZSgnLi4vb3BlcmF0b3JzL3JlZHVjZScpLFxuICAgIHJlZHVjZSA9IF9yZXF1aXJlNC5yZWR1Y2U7XG4vKlxuIEEgbWluaW1hbCByeGpzIGJhc2VkIG9ic2VydmFibGUgdGhhdCBhbGlnbiBhcyBjbG9zZWx5IGFzIHBvc3NpYmxlIHdpdGggdGhlIGN1cnJlbnQgZXMtb2JzZXJ2YWJsZSBzcGVjLFxuIHdpdGhvdXQgdGhlIHN0YXRpYyBmYWN0b3J5IG1ldGhvZHNcbiAqL1xuXG5cbmZ1bmN0aW9uIFNhbml0eU9ic2VydmFibGVNaW5pbWFsKCkge1xuICBPYnNlcnZhYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG59XG5cblNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIE9ic2VydmFibGUucHJvdG90eXBlKSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCB7XG4gIHZhbHVlOiBTYW5pdHlPYnNlcnZhYmxlTWluaW1hbCxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG5TYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIGxpZnQob3BlcmF0b3IpIHtcbiAgdmFyIG9ic2VydmFibGUgPSBuZXcgU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwoKTtcbiAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gIHJldHVybiBvYnNlcnZhYmxlO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRGVwcmVjYXRlZE1lbWJlck9wKG5hbWUsIG9wKSB7XG4gIHZhciBoYXNXYXJuZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlcHJlY2F0ZWRPcGVyYXRvcigpIHtcbiAgICBpZiAoIWhhc1dhcm5lZCkge1xuICAgICAgaGFzV2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoXCJDYWxsaW5nIG9ic2VydmFibGUuXCIuY29uY2F0KG5hbWUsIFwiKC4uLikgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBvYnNlcnZhYmxlLnBpcGUoXCIpLmNvbmNhdChuYW1lLCBcIiguLi4pKSBpbnN0ZWFkXCIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGlwZShvcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlLm1hcCA9IGNyZWF0ZURlcHJlY2F0ZWRNZW1iZXJPcCgnbWFwJywgbWFwKTtcblNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZS5maWx0ZXIgPSBjcmVhdGVEZXByZWNhdGVkTWVtYmVyT3AoJ2ZpbHRlcicsIGZpbHRlcik7XG5TYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUucmVkdWNlID0gY3JlYXRlRGVwcmVjYXRlZE1lbWJlck9wKCdmaWx0ZXInLCByZWR1Y2UpO1xubW9kdWxlLmV4cG9ydHMgPSBTYW5pdHlPYnNlcnZhYmxlTWluaW1hbDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL1Nhbml0eU9ic2VydmFibGVNaW5pbWFsJylcbiIsImV4cG9ydHMuZmlsdGVyID0gcmVxdWlyZSgncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyJykuZmlsdGVyXG4iLCJleHBvcnRzLm1hcCA9IHJlcXVpcmUoJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL21hcCcpLm1hcFxuIiwiZXhwb3J0cy5yZWR1Y2UgPSByZXF1aXJlKCdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9yZWR1Y2UnKS5yZWR1Y2VcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc09iaiA9IHJlcXVpcmUoJ2lzLW9iaicpO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdTb3VyY2VzIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25LZXkodG8sIGZyb20sIGtleSkge1xuXHR2YXIgdmFsID0gZnJvbVtrZXldO1xuXG5cdGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh0bywga2V5KSkge1xuXHRcdGlmICh0b1trZXldID09PSB1bmRlZmluZWQgfHwgdG9ba2V5XSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0ICgnICsga2V5ICsgJyknKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwodG8sIGtleSkgfHwgIWlzT2JqKHZhbCkpIHtcblx0XHR0b1trZXldID0gdmFsO1xuXHR9IGVsc2Uge1xuXHRcdHRvW2tleV0gPSBhc3NpZ24oT2JqZWN0KHRvW2tleV0pLCBmcm9tW2tleV0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbih0bywgZnJvbSkge1xuXHRpZiAodG8gPT09IGZyb20pIHtcblx0XHRyZXR1cm4gdG87XG5cdH1cblxuXHRmcm9tID0gT2JqZWN0KGZyb20pO1xuXG5cdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0YXNzaWduS2V5KHRvLCBmcm9tLCBrZXkpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0dmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdGFzc2lnbktleSh0bywgZnJvbSwgc3ltYm9sc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZXBBc3NpZ24odGFyZ2V0KSB7XG5cdHRhcmdldCA9IHRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRhc3NpZ24odGFyZ2V0LCBhcmd1bWVudHNbc10pO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4KSB7XG5cdHZhciB0eXBlID0gdHlwZW9mIHg7XG5cdHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliLW5vZGUnKVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVic3ViID0gcmVxdWlyZSgnbmFuby1wdWJzdWInKTtcbnZhciBtaWRkbGV3YXJlUmVkdWNlciA9IHJlcXVpcmUoJy4vdXRpbC9taWRkbGV3YXJlUmVkdWNlcicpO1xudmFyIHByb2Nlc3NPcHRpb25zID0gcmVxdWlyZSgnLi9taWRkbGV3YXJlL2RlZmF1bHRPcHRpb25zUHJvY2Vzc29yJyk7XG52YXIgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnLi9taWRkbGV3YXJlL2RlZmF1bHRPcHRpb25zVmFsaWRhdG9yJyk7XG52YXIgaHR0cFJlcXVlc3QgPSByZXF1aXJlKCcuL3JlcXVlc3QnKTsgLy8gbm9kZS1yZXF1ZXN0IGluIG5vZGUsIGJyb3dzZXItcmVxdWVzdCBpbiBicm93c2Vyc1xuXG52YXIgY2hhbm5lbE5hbWVzID0gWydyZXF1ZXN0JywgJ3Jlc3BvbnNlJywgJ3Byb2dyZXNzJywgJ2Vycm9yJywgJ2Fib3J0J107XG52YXIgbWlkZGxlaG9va3MgPSBbJ3Byb2Nlc3NPcHRpb25zJywgJ3ZhbGlkYXRlT3B0aW9ucycsICdpbnRlcmNlcHRSZXF1ZXN0JywgJ2ZpbmFsaXplT3B0aW9ucycsICdvblJlcXVlc3QnLCAnb25SZXNwb25zZScsICdvbkVycm9yJywgJ29uUmV0dXJuJywgJ29uSGVhZGVycyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RlcigpIHtcbiAgdmFyIGluaXRNaWRkbGV3YXJlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcblxuICB2YXIgbG9hZGVkTWlkZGxld2FyZSA9IFtdO1xuICB2YXIgbWlkZGxld2FyZSA9IG1pZGRsZWhvb2tzLnJlZHVjZShmdW5jdGlvbiAod2FyZSwgbmFtZSkge1xuICAgIHdhcmVbbmFtZV0gPSB3YXJlW25hbWVdIHx8IFtdO1xuICAgIHJldHVybiB3YXJlO1xuICB9LCB7XG4gICAgcHJvY2Vzc09wdGlvbnM6IFtwcm9jZXNzT3B0aW9uc10sXG4gICAgdmFsaWRhdGVPcHRpb25zOiBbdmFsaWRhdGVPcHRpb25zXVxuICB9KTtcblxuICBmdW5jdGlvbiByZXF1ZXN0KG9wdHMpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBjaGFubmVsTmFtZXMucmVkdWNlKGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IHB1YnN1YigpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LCB7fSk7XG5cbiAgICAvLyBQcmVwYXJlIGEgbWlkZGxld2FyZSByZWR1Y2VyIHRoYXQgY2FuIGJlIHJldXNlZCB0aHJvdWdob3V0IHRoZSBsaWZlY3ljbGVcbiAgICB2YXIgYXBwbHlNaWRkbGV3YXJlID0gbWlkZGxld2FyZVJlZHVjZXIobWlkZGxld2FyZSk7XG5cbiAgICAvLyBQYXJzZSB0aGUgcGFzc2VkIG9wdGlvbnNcbiAgICB2YXIgb3B0aW9ucyA9IGFwcGx5TWlkZGxld2FyZSgncHJvY2Vzc09wdGlvbnMnLCBvcHRzKTtcblxuICAgIC8vIFZhbGlkYXRlIHRoZSBvcHRpb25zXG4gICAgYXBwbHlNaWRkbGV3YXJlKCd2YWxpZGF0ZU9wdGlvbnMnLCBvcHRpb25zKTtcblxuICAgIC8vIEJ1aWxkIGEgY29udGV4dCBvYmplY3Qgd2UgY2FuIHBhc3MgdG8gY2hpbGQgaGFuZGxlcnNcbiAgICB2YXIgY29udGV4dCA9IHsgb3B0aW9uczogb3B0aW9ucywgY2hhbm5lbHM6IGNoYW5uZWxzLCBhcHBseU1pZGRsZXdhcmU6IGFwcGx5TWlkZGxld2FyZVxuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhvbGQgYSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQsIG9uZ29pbmcgcmVxdWVzdCxcbiAgICAgIC8vIGluIG9yZGVyIHRvIGFsbG93IGNhbmNlbGxhdGlvbi4gSW4gdGhlIGNhc2Ugb2YgdGhlIHJldHJ5IG1pZGRsZXdhcmUsXG4gICAgICAvLyBhIG5ldyByZXF1ZXN0IG1pZ2h0IGJlIHRyaWdnZXJlZFxuICAgIH07dmFyIG9uZ29pbmdSZXF1ZXN0ID0gbnVsbDtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBjaGFubmVscy5yZXF1ZXN0LnN1YnNjcmliZShmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAvLyBMZXQgcmVxdWVzdCBhZGFwdGVycyAobm9kZS9icm93c2VyKSBwZXJmb3JtIHRoZSBhY3R1YWwgcmVxdWVzdFxuICAgICAgb25nb2luZ1JlcXVlc3QgPSBodHRwUmVxdWVzdChjdHgsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICByZXR1cm4gb25SZXNwb25zZShlcnIsIHJlcywgY3R4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgd2UgYWJvcnQgdGhlIHJlcXVlc3QsIHByZXZlbnQgZnVydGhlciByZXF1ZXN0cyBmcm9tIGhhcHBlbmluZyxcbiAgICAvLyBhbmQgYmUgc3VyZSB0byBjYW5jZWwgYW55IG9uZ29pbmcgcmVxdWVzdCAob2J2aW91c2x5KVxuICAgIGNoYW5uZWxzLmFib3J0LnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKG9uZ29pbmdSZXF1ZXN0KSB7XG4gICAgICAgIG9uZ29pbmdSZXF1ZXN0LmFib3J0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTZWUgaWYgYW55IG1pZGRsZXdhcmUgd2FudHMgdG8gbW9kaWZ5IHRoZSByZXR1cm4gdmFsdWUgLSBmb3IgaW5zdGFuY2VcbiAgICAvLyB0aGUgcHJvbWlzZSBvciBvYnNlcnZhYmxlIG1pZGRsZXdhcmVzXG4gICAgdmFyIHJldHVyblZhbHVlID0gYXBwbHlNaWRkbGV3YXJlKCdvblJldHVybicsIGNoYW5uZWxzLCBjb250ZXh0KTtcblxuICAgIC8vIElmIHJldHVybiB2YWx1ZSBoYXMgYmVlbiBtb2RpZmllZCBieSBhIG1pZGRsZXdhcmUsIHdlIGV4cGVjdCB0aGUgbWlkZGxld2FyZVxuICAgIC8vIHRvIHB1Ymxpc2ggb24gdGhlICdyZXF1ZXN0JyBjaGFubmVsLiBJZiBpdCBoYXNuJ3QgYmVlbiBtb2RpZmllZCwgd2Ugd2FudCB0b1xuICAgIC8vIHRyaWdnZXIgaXQgcmlnaHQgYXdheVxuICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gY2hhbm5lbHMpIHtcbiAgICAgIGNoYW5uZWxzLnJlcXVlc3QucHVibGlzaChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG5cbiAgICBmdW5jdGlvbiBvblJlc3BvbnNlKHJlcUVyciwgcmVzLCBjdHgpIHtcbiAgICAgIHZhciBlcnJvciA9IHJlcUVycjtcbiAgICAgIHZhciByZXNwb25zZSA9IHJlcztcblxuICAgICAgLy8gV2UncmUgcHJvY2Vzc2luZyBub24tZXJyb3JzIGZpcnN0LCBpbiBjYXNlIGEgbWlkZGxld2FyZSBjb252ZXJ0cyB0aGVcbiAgICAgIC8vIHJlc3BvbnNlIGludG8gYW4gZXJyb3IgKGZvciBpbnN0YW5jZSwgc3RhdHVzID49IDQwMCA9PSBIdHRwRXJyb3IpXG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBhcHBseU1pZGRsZXdhcmUoJ29uUmVzcG9uc2UnLCByZXMsIGN0eCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3BvbnNlID0gbnVsbDtcbiAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBcHBseSBlcnJvciBtaWRkbGV3YXJlIC0gaWYgbWlkZGxld2FyZSByZXR1cm4gdGhlIHNhbWUgKG9yIGEgZGlmZmVyZW50KSBlcnJvcixcbiAgICAgIC8vIHB1Ymxpc2ggYXMgYW4gZXJyb3IgZXZlbnQuIElmIHdlICpkb24ndCogcmV0dXJuIGFuIGVycm9yLCBhc3N1bWUgaXQgaGFzIGJlZW4gaGFuZGxlZFxuICAgICAgZXJyb3IgPSBlcnJvciAmJiBhcHBseU1pZGRsZXdhcmUoJ29uRXJyb3InLCBlcnJvciwgY3R4KTtcblxuICAgICAgLy8gRmlndXJlIG91dCBpZiB3ZSBzaG91bGQgcHVibGlzaCBvbiBlcnJvci9yZXNwb25zZSBjaGFubmVsc1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNoYW5uZWxzLmVycm9yLnB1Ymxpc2goZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSkge1xuICAgICAgICBjaGFubmVscy5yZXNwb25zZS5wdWJsaXNoKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXF1ZXN0LnVzZSA9IGZ1bmN0aW9uIHVzZShuZXdNaWRkbGV3YXJlKSB7XG4gICAgaWYgKCFuZXdNaWRkbGV3YXJlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWVkIHRvIGFkZCBtaWRkbGV3YXJlIHRoYXQgcmVzb2x2ZWQgdG8gZmFsc2V5IHZhbHVlJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXdNaWRkbGV3YXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWVkIHRvIGFkZCBtaWRkbGV3YXJlIHRoYXQgd2FzIGEgZnVuY3Rpb24uIEl0IHByb2JhYmx5IGV4cGVjdHMgeW91IHRvIHBhc3Mgb3B0aW9ucyB0byBpdC4nKTtcbiAgICB9XG5cbiAgICBpZiAobmV3TWlkZGxld2FyZS5vblJldHVybiAmJiBtaWRkbGV3YXJlLm9uUmV0dXJuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gYWRkIG5ldyBtaWRkbGV3YXJlIHdpdGggYG9uUmV0dXJuYCBoYW5kbGVyLCBidXQgYW5vdGhlciBoYW5kbGVyIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCBmb3IgdGhpcyBldmVudCcpO1xuICAgIH1cblxuICAgIG1pZGRsZWhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKG5ld01pZGRsZXdhcmVba2V5XSkge1xuICAgICAgICBtaWRkbGV3YXJlW2tleV0ucHVzaChuZXdNaWRkbGV3YXJlW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9hZGVkTWlkZGxld2FyZS5wdXNoKG5ld01pZGRsZXdhcmUpO1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9O1xuXG4gIHJlcXVlc3QuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmVxdWVzdGVyKGxvYWRlZE1pZGRsZXdhcmUpO1xuICB9O1xuXG4gIGluaXRNaWRkbGV3YXJlLmZvckVhY2gocmVxdWVzdC51c2UpO1xuXG4gIHJldHVybiByZXF1ZXN0O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciB1cmxQYXJzZSA9IHJlcXVpcmUoJ3VybC1wYXJzZScpO1xuXG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7IHRpbWVvdXQ6IGlzUmVhY3ROYXRpdmUgPyA2MDAwMCA6IDEyMDAwMCB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnID8gb2JqZWN0QXNzaWduKHsgdXJsOiBvcHRzIH0sIGRlZmF1bHRPcHRpb25zKSA6IG9iamVjdEFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdHMpO1xuXG4gIC8vIFBhcnNlIFVSTCBpbnRvIHBhcnRzXG4gIHZhciB1cmwgPSB1cmxQYXJzZShvcHRpb25zLnVybCwge30sIC8vIERvbid0IHVzZSBjdXJyZW50IGJyb3dzZXIgbG9jYXRpb25cbiAgdHJ1ZSAvLyBQYXJzZSBxdWVyeSBzdHJpbmdzXG4gICk7XG5cbiAgLy8gTm9ybWFsaXplIHRpbWVvdXRzXG4gIG9wdGlvbnMudGltZW91dCA9IG5vcm1hbGl6ZVRpbWVvdXQob3B0aW9ucy50aW1lb3V0KTtcblxuICAvLyBTaGFsbG93LW1lcmdlIChvdmVycmlkZSkgZXhpc3RpbmcgcXVlcnkgcGFyYW1zXG4gIGlmIChvcHRpb25zLnF1ZXJ5KSB7XG4gICAgdXJsLnF1ZXJ5ID0gb2JqZWN0QXNzaWduKHt9LCB1cmwucXVlcnksIHJlbW92ZVVuZGVmaW5lZChvcHRpb25zLnF1ZXJ5KSk7XG4gIH1cblxuICAvLyBJbXBsaWNpdCBQT1NUIGlmIHdlIGhhdmUgbm90IHNwZWNpZmllZCBhIG1ldGhvZCBidXQgaGF2ZSBhIGJvZHlcbiAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLmJvZHkgJiYgIW9wdGlvbnMubWV0aG9kID8gJ1BPU1QnIDogKG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuXG4gIC8vIFN0cmluZ2lmeSBVUkxcbiAgb3B0aW9ucy51cmwgPSB1cmwudG9TdHJpbmcoc3RyaW5naWZ5UXVlcnlTdHJpbmcpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuZnVuY3Rpb24gc3RyaW5naWZ5UXVlcnlTdHJpbmcob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgcHVzaChrZXksIG9ialtrZXldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFpcnMubGVuZ3RoID8gcGFpcnMuam9pbignJicpIDogJyc7XG5cbiAgZnVuY3Rpb24gcHVzaChrZXksIHZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhbC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwdXNoKGtleSwgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWxdLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJz0nKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRpbWVvdXQodGltZSkge1xuICBpZiAodGltZSA9PT0gZmFsc2UgfHwgdGltZSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aW1lLmNvbm5lY3QgfHwgdGltZS5zb2NrZXQpIHtcbiAgICByZXR1cm4gdGltZTtcbiAgfVxuXG4gIHZhciBkZWxheSA9IE51bWJlcih0aW1lKTtcbiAgaWYgKGlzTmFOKGRlbGF5KSkge1xuICAgIHJldHVybiBub3JtYWxpemVUaW1lb3V0KGRlZmF1bHRPcHRpb25zLnRpbWVvdXQpO1xuICB9XG5cbiAgcmV0dXJuIHsgY29ubmVjdDogZGVsYXksIHNvY2tldDogZGVsYXkgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkKG9iaikge1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRPcHRpb25zUHJvY2Vzc29yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsaWRVcmwgPSAvXmh0dHBzPzpcXC9cXC8vaTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAoIXZhbGlkVXJsLnRlc3Qob3B0aW9ucy51cmwpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgb3B0aW9ucy51cmwgKyBcIlxcXCIgaXMgbm90IGEgdmFsaWQgVVJMXCIpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdE9wdGlvbnNWYWxpZGF0b3IuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iamVjdCcpO1xuXG52YXIgc2VyaWFsaXplVHlwZXMgPSBbJ2Jvb2xlYW4nLCAnc3RyaW5nJywgJ251bWJlciddO1xudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvY2Vzc09wdGlvbnM6IGZ1bmN0aW9uIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNTdHJlYW0gPSB0eXBlb2YgYm9keS5waXBlID09PSAnZnVuY3Rpb24nO1xuICAgICAgdmFyIHNob3VsZFNlcmlhbGl6ZSA9ICFpc1N0cmVhbSAmJiAhaXNCdWZmZXIoYm9keSkgJiYgKHNlcmlhbGl6ZVR5cGVzLmluZGV4T2YodHlwZW9mIGJvZHkgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGJvZHkpKSAhPT0gLTEgfHwgQXJyYXkuaXNBcnJheShib2R5KSB8fCBpc1BsYWluT2JqZWN0KGJvZHkpKTtcblxuICAgICAgaWYgKCFzaG91bGRTZXJpYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmplY3RBc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5ib2R5KSxcbiAgICAgICAgaGVhZGVyczogb2JqZWN0QXNzaWduKHt9LCBvcHRpb25zLmhlYWRlcnMsIHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvblJlcXVlc3QuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHJldHVybiB7XG4gICAgb25SZXNwb25zZTogZnVuY3Rpb24gb25SZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgdmFyIGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVyc1snY29udGVudC10eXBlJ10gfHwgJyc7XG4gICAgICB2YXIgc2hvdWxkRGVjb2RlID0gb3B0cyAmJiBvcHRzLmZvcmNlIHx8IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTE7XG4gICAgICBpZiAoIXJlc3BvbnNlLmJvZHkgfHwgIWNvbnRlbnRUeXBlIHx8ICFzaG91bGREZWNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqZWN0QXNzaWduKHt9LCByZXNwb25zZSwgeyBib2R5OiB0cnlQYXJzZShyZXNwb25zZS5ib2R5KSB9KTtcbiAgICB9LFxuXG4gICAgcHJvY2Vzc09wdGlvbnM6IGZ1bmN0aW9uIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvYmplY3RBc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgaGVhZGVyczogb2JqZWN0QXNzaWduKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSwgb3B0aW9ucy5oZWFkZXJzKVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gdHJ5UGFyc2UoYm9keSkge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGJvZHkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnIubWVzc2FnZSA9ICdGYWlsZWQgdG8gcGFyc2VkIHJlc3BvbnNlIGJvZHkgYXMgSlNPTjogJyArIGVyci5tZXNzYWdlO1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvblJlc3BvbnNlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL3V0aWwvZ2xvYmFsJyk7XG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBPYnNlcnZhYmxlID0gb3B0cy5pbXBsZW1lbnRhdGlvbiB8fCBnbG9iYWwuT2JzZXJ2YWJsZTtcbiAgaWYgKCFPYnNlcnZhYmxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgT2JzZXJ2YWJsZWAgaXMgbm90IGF2YWlsYWJsZSBpbiBnbG9iYWwgc2NvcGUsIGFuZCBubyBpbXBsZW1lbnRhdGlvbiB3YXMgcGFzc2VkJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUmV0dXJuOiBmdW5jdGlvbiBvblJldHVybihjaGFubmVscywgY29udGV4dCkge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBjaGFubmVscy5lcnJvci5zdWJzY3JpYmUoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hhbm5lbHMucHJvZ3Jlc3Muc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0KG9iamVjdEFzc2lnbih7IHR5cGU6ICdwcm9ncmVzcycgfSwgZXZlbnQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoYW5uZWxzLnJlc3BvbnNlLnN1YnNjcmliZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KG9iamVjdEFzc2lnbih7IHR5cGU6ICdyZXNwb25zZScgfSwgcmVzcG9uc2UpKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaGFubmVscy5yZXF1ZXN0LnB1Ymxpc2goY29udGV4dCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYW5uZWxzLmFib3J0LnB1Ymxpc2goKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgb25SZXF1ZXN0OiBmdW5jdGlvbiBvblJlcXVlc3QoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmFkYXB0ZXIgIT09ICd4aHInKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHhociA9IGV2dC5yZXF1ZXN0O1xuICAgICAgdmFyIGNvbnRleHQgPSBldnQuY29udGV4dDtcblxuICAgICAgaWYgKCd1cGxvYWQnIGluIHhociAmJiAnb25wcm9ncmVzcycgaW4geGhyLnVwbG9hZCkge1xuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcygndXBsb2FkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgnb25wcm9ncmVzcycgaW4geGhyKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3MoJ2Rvd25sb2FkJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKHN0YWdlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgcGVyY2VudCA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGUgPyBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCAqIDEwMCA6IC0xO1xuICAgICAgICAgIGNvbnRleHQuY2hhbm5lbHMucHJvZ3Jlc3MucHVibGlzaCh7XG4gICAgICAgICAgICBzdGFnZTogc3RhZ2UsXG4gICAgICAgICAgICBwZXJjZW50OiBwZXJjZW50LFxuICAgICAgICAgICAgdG90YWw6IGV2ZW50LnRvdGFsLFxuICAgICAgICAgICAgbG9hZGVkOiBldmVudC5sb2FkZWQsXG4gICAgICAgICAgICBsZW5ndGhDb21wdXRhYmxlOiBldmVudC5sZW5ndGhDb21wdXRhYmxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcHJvZ3Jlc3MuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS1wcm9ncmVzcycpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbWF4LWRlcHRoOiBbXCJlcnJvclwiLCA0XSAqL1xudmFyIHNhbWVPcmlnaW4gPSByZXF1aXJlKCdzYW1lLW9yaWdpbicpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJ3BhcnNlLWhlYWRlcnMnKTtcbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHtcbiAgLyogaW50ZW50aW9uYWwgbm9vcCAqL1xufTtcblxudmFyIHdpbiA9IHdpbmRvdztcbnZhciBYbWxIdHRwUmVxdWVzdCA9IHdpbi5YTUxIdHRwUmVxdWVzdCB8fCBub29wO1xudmFyIGhhc1hocjIgPSAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWG1sSHR0cFJlcXVlc3QoKTtcbnZhciBYRG9tYWluUmVxdWVzdCA9IGhhc1hocjIgPyBYbWxIdHRwUmVxdWVzdCA6IHdpbi5YRG9tYWluUmVxdWVzdDtcbnZhciBhZGFwdGVyID0gJ3hocic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIHZhciBvcHRzID0gY29udGV4dC5vcHRpb25zO1xuICB2YXIgb3B0aW9ucyA9IGNvbnRleHQuYXBwbHlNaWRkbGV3YXJlKCdmaW5hbGl6ZU9wdGlvbnMnLCBvcHRzKTtcbiAgdmFyIHRpbWVycyA9IHt9O1xuXG4gIC8vIERlZXAtY2hlY2tpbmcgd2luZG93LmxvY2F0aW9uIGJlY2F1c2Ugb2YgcmVhY3QgbmF0aXZlLCB3aGVyZSBgbG9jYXRpb25gIGRvZXNuJ3QgZXhpc3RcbiAgdmFyIGNvcnMgPSB3aW4gJiYgd2luLmxvY2F0aW9uICYmICFzYW1lT3JpZ2luKHdpbi5sb2NhdGlvbi5ocmVmLCBvcHRpb25zLnVybCk7XG5cbiAgLy8gQWxsb3cgbWlkZGxld2FyZSB0byBpbmplY3QgYSByZXNwb25zZSwgZm9yIGluc3RhbmNlIGluIHRoZSBjYXNlIG9mIGNhY2hpbmcgb3IgbW9ja2luZ1xuICB2YXIgaW5qZWN0ZWRSZXNwb25zZSA9IGNvbnRleHQuYXBwbHlNaWRkbGV3YXJlKCdpbnRlcmNlcHRSZXF1ZXN0JywgdW5kZWZpbmVkLCB7XG4gICAgYWRhcHRlcjogYWRhcHRlcixcbiAgICBjb250ZXh0OiBjb250ZXh0XG4gIH0pO1xuXG4gIC8vIElmIG1pZGRsZXdhcmUgaW5qZWN0ZWQgYSByZXNwb25zZSwgdHJlYXQgaXQgYXMgd2Ugbm9ybWFsbHkgd291bGQgYW5kIHJldHVybiBpdFxuICAvLyBEbyBub3RlIHRoYXQgdGhlIGluamVjdGVkIHJlc3BvbnNlIGhhcyB0byBiZSByZWR1Y2VkIHRvIGEgY3Jvc3MtZW52aXJvbm1lbnQgZnJpZW5kbHkgcmVzcG9uc2VcbiAgaWYgKGluamVjdGVkUmVzcG9uc2UpIHtcbiAgICB2YXIgY2JUaW1lciA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDAsIG51bGwsIGluamVjdGVkUmVzcG9uc2UpO1xuICAgIHZhciBjYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGNiVGltZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgYWJvcnQ6IGNhbmNlbCB9O1xuICB9XG5cbiAgLy8gV2UnbGwgd2FudCB0byBudWxsIG91dCB0aGUgcmVxdWVzdCBvbiBzdWNjZXNzL2ZhaWx1cmVcbiAgdmFyIHhociA9IGNvcnMgPyBuZXcgWERvbWFpblJlcXVlc3QoKSA6IG5ldyBYbWxIdHRwUmVxdWVzdCgpO1xuXG4gIHZhciBpc1hkciA9IHdpbi5YRG9tYWluUmVxdWVzdCAmJiB4aHIgaW5zdGFuY2VvZiB3aW4uWERvbWFpblJlcXVlc3Q7XG4gIHZhciBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xuXG4gIC8vIFJlcXVlc3Qgc3RhdGVcbiAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICB2YXIgdGltZWRPdXQgPSBmYWxzZTtcblxuICAvLyBBcHBseSBldmVudCBoYW5kbGVyc1xuICB4aHIub25lcnJvciA9IG9uRXJyb3I7XG4gIHhoci5vbnRpbWVvdXQgPSBvbkVycm9yO1xuICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgfTtcblxuICAvLyBJRTkgbXVzdCBoYXZlIG9ucHJvZ3Jlc3MgYmUgc2V0IHRvIGEgdW5pcXVlIGZ1bmN0aW9uXG4gIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIC8qIGludGVudGlvbmFsIG5vb3AgKi9cbiAgfTtcblxuICB2YXIgbG9hZEV2ZW50ID0gaXNYZHIgPyAnb25sb2FkJyA6ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICB4aHJbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcmV2ZW50IHJlcXVlc3QgZnJvbSB0aW1pbmcgb3V0XG4gICAgcmVzZXRUaW1lcnMoKTtcblxuICAgIGlmIChhYm9ydGVkIHx8IHhoci5yZWFkeVN0YXRlICE9PSA0ICYmICFpc1hkcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdpbGwgYmUgaGFuZGxlZCBieSBvbkVycm9yXG4gICAgaWYgKHhoci5zdGF0dXMgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkxvYWQoKTtcbiAgfTtcblxuICAvLyBAdG9kbyB0d28gbGFzdCBvcHRpb25zIHRvIG9wZW4oKSBpcyB1c2VybmFtZS9wYXNzd29yZFxuICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUgLy8gQWx3YXlzIGFzeW5jXG4gICk7XG5cbiAgLy8gU29tZSBvcHRpb25zIG5lZWQgdG8gYmUgYXBwbGllZCBhZnRlciBvcGVuXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuXG4gIC8vIFNldCBoZWFkZXJzXG4gIGlmIChoZWFkZXJzICYmIHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChoZWFkZXJzICYmIGlzWGRyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0Jyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5yYXdCb2R5KSB7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH1cblxuICAvLyBMZXQgbWlkZGxld2FyZSBrbm93IHdlJ3JlIGFib3V0IHRvIGRvIGEgcmVxdWVzdFxuICBjb250ZXh0LmFwcGx5TWlkZGxld2FyZSgnb25SZXF1ZXN0JywgeyBvcHRpb25zOiBvcHRpb25zLCBhZGFwdGVyOiBhZGFwdGVyLCByZXF1ZXN0OiB4aHIsIGNvbnRleHQ6IGNvbnRleHQgfSk7XG5cbiAgeGhyLnNlbmQob3B0aW9ucy5ib2R5IHx8IG51bGwpO1xuXG4gIC8vIEZpZ3VyZSBvdXQgd2hpY2ggdGltZW91dHMgdG8gdXNlIChpZiBhbnkpXG4gIHZhciBkZWxheXMgPSBvcHRpb25zLnRpbWVvdXQ7XG4gIGlmIChkZWxheXMpIHtcbiAgICB0aW1lcnMuY29ubmVjdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRpbWVvdXRSZXF1ZXN0KCdFVElNRURPVVQnKTtcbiAgICB9LCBkZWxheXMuY29ubmVjdCk7XG4gIH1cblxuICByZXR1cm4geyBhYm9ydDogYWJvcnQgfTtcblxuICBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICBhYm9ydGVkID0gdHJ1ZTtcblxuICAgIGlmICh4aHIpIHtcbiAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVvdXRSZXF1ZXN0KGNvZGUpIHtcbiAgICB0aW1lZE91dCA9IHRydWU7XG4gICAgeGhyLmFib3J0KCk7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKGNvZGUgPT09ICdFU09DS0VUVElNRURPVVQnID8gJ1NvY2tldCB0aW1lZCBvdXQgb24gcmVxdWVzdCB0byAnICsgb3B0aW9ucy51cmwgOiAnQ29ubmVjdGlvbiB0aW1lZCBvdXQgb24gcmVxdWVzdCB0byAnICsgb3B0aW9ucy51cmwpO1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICAgIGNvbnRleHQuY2hhbm5lbHMuZXJyb3IucHVibGlzaChlcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRpbWVycygpIHtcbiAgICBpZiAoIWRlbGF5cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0b3BUaW1lcnMoKTtcbiAgICB0aW1lcnMuc29ja2V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGltZW91dFJlcXVlc3QoJ0VTT0NLRVRUSU1FRE9VVCcpO1xuICAgIH0sIGRlbGF5cy5zb2NrZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcFRpbWVycygpIHtcbiAgICAvLyBPbmx5IGNsZWFyIHRoZSBjb25uZWN0IHRpbWVvdXQgaWYgd2UndmUgZ290IGEgY29ubmVjdGlvblxuICAgIGlmIChhYm9ydGVkIHx8IHhoci5yZWFkeVN0YXRlID49IDIgJiYgdGltZXJzLmNvbm5lY3QpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcnMuY29ubmVjdCk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVycy5zb2NrZXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcnMuc29ja2V0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkVycm9yKCkge1xuICAgIGlmIChsb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cFxuICAgIHN0b3BUaW1lcnMoKTtcbiAgICBsb2FkZWQgPSB0cnVlO1xuICAgIHhociA9IG51bGw7XG5cbiAgICAvLyBBbm5veWluZ2x5LCBkZXRhaWxzIGFyZSBleHRyZW1lbHkgc2NhcmNlIGFuZCBoaWRkZW4gZnJvbSB1cy5cbiAgICAvLyBXZSBvbmx5IHJlYWxseSBrbm93IHRoYXQgaXQgaXMgYSBuZXR3b3JrIGVycm9yXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignTmV0d29yayBlcnJvciB3aGlsZSBhdHRlbXB0aW5nIHRvIHJlYWNoICcgKyBvcHRpb25zLnVybCk7XG4gICAgZXJyLmlzTmV0d29ya0Vycm9yID0gdHJ1ZTtcbiAgICBlcnIucmVxdWVzdCA9IG9wdGlvbnM7XG4gICAgY2FsbGJhY2soZXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZVJlc3BvbnNlKCkge1xuICAgIHZhciBzdGF0dXNDb2RlID0geGhyLnN0YXR1cztcbiAgICB2YXIgc3RhdHVzTWVzc2FnZSA9IHhoci5zdGF0dXNUZXh0O1xuXG4gICAgaWYgKGlzWGRyICYmIHN0YXR1c0NvZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSUU4IENPUlMgR0VUIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZG9lc24ndCBoYXZlIGEgc3RhdHVzIGZpZWxkLCBidXQgYm9keSBpcyBmaW5lXG4gICAgICBzdGF0dXNDb2RlID0gMjAwO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA+IDEyMDAwICYmIHN0YXR1c0NvZGUgPCAxMjE1Nikge1xuICAgICAgLy8gWWV0IGFub3RoZXIgSUUgcXVpcmsgd2hlcmUgaXQgZW1pdHMgd2VpcmQgc3RhdHVzIGNvZGVzIG9uIG5ldHdvcmsgZXJyb3JzXG4gICAgICAvLyBodHRwczovL3N1cHBvcnQubWljcm9zb2Z0LmNvbS9lbi11cy9rYi8xOTM2MjVcbiAgICAgIHJldHVybiBvbkVycm9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFub3RoZXIgSUUgYnVnIHdoZXJlIEhUVFAgMjA0IHNvbWVob3cgZW5kcyB1cCBhcyAxMjIzXG4gICAgICBzdGF0dXNDb2RlID0geGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXM7XG4gICAgICBzdGF0dXNNZXNzYWdlID0geGhyLnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHN0YXR1c01lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvZHk6IHhoci5yZXNwb25zZSB8fCB4aHIucmVzcG9uc2VUZXh0LFxuICAgICAgdXJsOiBvcHRpb25zLnVybCxcbiAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICBoZWFkZXJzOiBpc1hkciA/IHt9IDogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksXG4gICAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgICAgc3RhdHVzTWVzc2FnZTogc3RhdHVzTWVzc2FnZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgaWYgKGFib3J0ZWQgfHwgbG9hZGVkIHx8IHRpbWVkT3V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHhoci5zdGF0dXMgPT09IDApIHtcbiAgICAgIG9uRXJyb3IobmV3IEVycm9yKCdVbmtub3duIFhIUiBlcnJvcicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGJlaW5nIGNhbGxlZCB0d2ljZVxuICAgIHN0b3BUaW1lcnMoKTtcbiAgICBsb2FkZWQgPSB0cnVlO1xuICAgIGNhbGxiYWNrKG51bGwsIHJlZHVjZVJlc3BvbnNlKCkpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1yZXF1ZXN0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUtcmVxdWVzdCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZWdhdGVkLWNvbmRpdGlvbiAqL1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gc2VsZjtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge307XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gIHZhciBhcHBseU1pZGRsZXdhcmUgPSBmdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoaG9vaywgZGVmYXVsdFZhbHVlKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYmFpbEVhcmx5ID0gaG9vayA9PT0gJ29uRXJyb3InO1xuXG4gICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWlkZGxld2FyZVtob29rXS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhhbmRsZXIgPSBtaWRkbGV3YXJlW2hvb2tdW2ldO1xuICAgICAgdmFsdWUgPSBoYW5kbGVyLmFwcGx5KHVuZGVmaW5lZCwgW3ZhbHVlXS5jb25jYXQoYXJncykpO1xuXG4gICAgICBpZiAoYmFpbEVhcmx5ICYmICF2YWx1ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWRkbGV3YXJlUmVkdWNlci5qcy5tYXAiLCIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG8pID09PSB0cnVlXG4gICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcblxuICBpZiAoaXNPYmplY3RPYmplY3QobykgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuICBpZiAocHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8qIVxuICogaXNvYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHZhbCkgPT09IGZhbHNlO1xufTtcbiIsIi8vIElTQyBAIEp1bGllbiBGb250YW5ldFxuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY29uc3RydWN0ID0gdHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgPyBSZWZsZWN0LmNvbnN0cnVjdCA6IHVuZGVmaW5lZDtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcbmlmIChjYXB0dXJlU3RhY2tUcmFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gIGNhcHR1cmVTdGFja1RyYWNlID0gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2UoZXJyb3IpIHtcbiAgICB2YXIgY29udGFpbmVyID0gbmV3IEVycm9yKCk7XG5cbiAgICBkZWZpbmVQcm9wZXJ0eShlcnJvciwgXCJzdGFja1wiLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldFN0YWNrKCkge1xuICAgICAgICB2YXIgc3RhY2sgPSBjb250YWluZXIuc3RhY2s7XG5cbiAgICAgICAgLy8gUmVwbGFjZSBwcm9wZXJ0eSB3aXRoIHZhbHVlIGZvciBmYXN0ZXIgZnV0dXJlIGFjY2Vzc2VzLlxuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0YWNrXCIsIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHN0YWNrLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXRTdGFjayhzdGFjaykge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShlcnJvciwgXCJzdGFja1wiLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBzdGFjayxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIEJhc2VFcnJvcihtZXNzYWdlKSB7XG4gIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1lc3NhZ2VcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG1lc3NhZ2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKGNuYW1lICE9PSB1bmRlZmluZWQgJiYgY25hbWUgIT09IHRoaXMubmFtZSkge1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY25hbWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5CYXNlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUsIHtcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vSnNDb21tdW5pdHkvbWFrZS1lcnJvci9pc3N1ZXMvNFxuICBjb25zdHJ1Y3Rvcjoge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogQmFzZUVycm9yLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICB9LFxufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU2V0cyB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIGlmIHBvc3NpYmxlIChkZXBlbmRzIG9mIHRoZSBKUyBlbmdpbmUpLlxudmFyIHNldEZ1bmN0aW9uTmFtZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2V0RnVuY3Rpb25OYW1lKGZuLCBuYW1lKSB7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZuLCBcIm5hbWVcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG5hbWUsXG4gICAgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIgZiA9IGZ1bmN0aW9uKCkge307XG4gICAgc2V0RnVuY3Rpb25OYW1lKGYsIFwiZm9vXCIpO1xuICAgIGlmIChmLm5hbWUgPT09IFwiZm9vXCIpIHtcbiAgICAgIHJldHVybiBzZXRGdW5jdGlvbk5hbWU7XG4gICAgfVxuICB9IGNhdGNoIChfKSB7fVxufSkoKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBtYWtlRXJyb3IoY29uc3RydWN0b3IsIHN1cGVyXykge1xuICBpZiAoc3VwZXJfID09IG51bGwgfHwgc3VwZXJfID09PSBFcnJvcikge1xuICAgIHN1cGVyXyA9IEJhc2VFcnJvcjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3VwZXJfICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwic3VwZXJfIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgdmFyIG5hbWU7XG4gIGlmICh0eXBlb2YgY29uc3RydWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICBuYW1lID0gY29uc3RydWN0b3I7XG4gICAgY29uc3RydWN0b3IgPVxuICAgICAgY29uc3RydWN0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Qoc3VwZXJfLCBhcmd1bWVudHMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN1cGVyXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG5cbiAgICAvLyBJZiB0aGUgbmFtZSBjYW4gYmUgc2V0LCBkbyBpdCBvbmNlIGFuZCBmb3IgYWxsLlxuICAgIGlmIChzZXRGdW5jdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0RnVuY3Rpb25OYW1lKGNvbnN0cnVjdG9yLCBuYW1lKTtcbiAgICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNvbnN0cnVjdG9yIHNob3VsZCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIC8vIEFsc28gcmVnaXN0ZXIgdGhlIHN1cGVyIGNvbnN0cnVjdG9yIGFsc28gYXMgYGNvbnN0cnVjdG9yLnN1cGVyX2AganVzdFxuICAvLyBsaWtlIE5vZGUncyBgdXRpbC5pbmhlcml0cygpYC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvblxuICBjb25zdHJ1Y3Rvci5zdXBlcl8gPSBjb25zdHJ1Y3RvcltcInN1cGVyXCJdID0gc3VwZXJfO1xuXG4gIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY29uc3RydWN0b3IsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIC8vIElmIHRoZSBuYW1lIGNvdWxkIG5vdCBiZSBzZXQgb24gdGhlIGNvbnN0cnVjdG9yLCBzZXQgaXQgb24gdGhlXG4gIC8vIHByb3RvdHlwZS5cbiAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BlcnRpZXMubmFtZSA9IHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBuYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyXy5wcm90b3R5cGUsIHByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG1ha2VFcnJvcjtcbmV4cG9ydHMuQmFzZUVycm9yID0gQmFzZUVycm9yO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBQdWJzdWIoKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IFtdXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgcHVibGlzaDogcHVibGlzaFxuICB9XG4gIGZ1bmN0aW9uIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKVxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBpZHggPSBzdWJzY3JpYmVycy5pbmRleE9mKHN1YnNjcmliZXIpXG4gICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGlkeCwgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdWJzY3JpYmVyc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG59IiwidmFyIHQsZT0odD1yZXF1aXJlKFwicXVlcnlzdHJpbmdcIikpJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJkZWZhdWx0XCJpbiB0P3QuZGVmYXVsdDp0LG89L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIHIodCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWQodCkpO3ZhciByPWZ1bmN0aW9uKHQsZSxvKXt2YXIgcj10LmF1dGgsYT10Lmhvc3RuYW1lLHM9dC5wcm90b2NvbHx8XCJcIixwPXQucGF0aG5hbWV8fFwiXCIsbj10Lmhhc2h8fFwiXCIsYz10LnF1ZXJ5fHxcIlwiLGg9ITE7cj1yP2VuY29kZVVSSUNvbXBvbmVudChyKS5yZXBsYWNlKC8lM0EvaSxcIjpcIikrXCJAXCI6XCJcIix0Lmhvc3Q/aD1yK3QuaG9zdDphJiYoaD1yKyh+YS5pbmRleE9mKFwiOlwiKT9cIltcIithK1wiXVwiOmEpLHQucG9ydCYmKGgrPVwiOlwiK3QucG9ydCkpLGMmJlwib2JqZWN0XCI9PXR5cGVvZiBjJiYoYz1lLmVuY29kZShjKSk7dmFyIGw9dC5zZWFyY2h8fGMmJlwiP1wiK2N8fFwiXCI7cmV0dXJuIHMmJlwiOlwiIT09cy5zdWJzdHIoLTEpJiYocys9XCI6XCIpLHQuc2xhc2hlc3x8KCFzfHxvLnRlc3QocykpJiYhMSE9PWg/KGg9XCIvL1wiKyhofHxcIlwiKSxwJiZcIi9cIiE9PXBbMF0mJihwPVwiL1wiK3ApKTpofHwoaD1cIlwiKSxuJiZcIiNcIiE9PW5bMF0mJihuPVwiI1wiK24pLGwmJlwiP1wiIT09bFswXSYmKGw9XCI/XCIrbCkse3Byb3RvY29sOnMsaG9zdDpoLHBhdGhuYW1lOnA9cC5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KSxzZWFyY2g6bD1sLnJlcGxhY2UoXCIjXCIsXCIlMjNcIiksaGFzaDpufX0odCxlLG8pO3JldHVyblwiXCIrci5wcm90b2NvbCtyLmhvc3Qrci5wYXRobmFtZStyLnNlYXJjaCtyLmhhc2h9dmFyIGE9XCJodHRwOi8vXCIscz1cIncud1wiLHA9YStzLG49L14oW2EtejAtOS4rLV0qOlxcL1xcL1xcLykoW2EtejAtOS4rLV06XFwvKik/L2ksYz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gaCh0LGUpe3ZhciBvPVwic3RyaW5nXCI9PXR5cGVvZiB0P2QodCk6dDt0PVwib2JqZWN0XCI9PXR5cGVvZiB0P3IodCk6dDt2YXIgcz1kKGUpLGg9XCJcIjtvLnByb3RvY29sJiYhby5zbGFzaGVzJiYoaD1vLnByb3RvY29sLHQ9dC5yZXBsYWNlKG8ucHJvdG9jb2wsXCJcIiksaCs9XCIvXCI9PT1lWzBdfHxcIi9cIj09PXRbMF0/XCIvXCI6XCJcIiksaCYmcy5wcm90b2NvbCYmKGg9XCJcIixzLnNsYXNoZXN8fChoPXMucHJvdG9jb2wsZT1lLnJlcGxhY2Uocy5wcm90b2NvbCxcIlwiKSkpO3ZhciBsPXQubWF0Y2gobik7bCYmIXMucHJvdG9jb2wmJih0PXQuc3Vic3RyKChoPWxbMV0rKGxbMl18fFwiXCIpKS5sZW5ndGgpLC9eXFwvXFwvW14vXS8udGVzdChlKSYmKGg9aC5zbGljZSgwLC0xKSkpO3ZhciBpPW5ldyBVUkwodCxwK1wiL1wiKSx1PW5ldyBVUkwoZSxpKS50b1N0cmluZygpLnJlcGxhY2UocCxcIlwiKSxmPXMucHJvdG9jb2x8fG8ucHJvdG9jb2w7cmV0dXJuIGYrPW8uc2xhc2hlc3x8cy5zbGFzaGVzP1wiLy9cIjpcIlwiLCFoJiZmP3U9dS5yZXBsYWNlKGEsZik6aCYmKHU9dS5yZXBsYWNlKGEsXCJcIikpLGMudGVzdCh1KXx8fmUuaW5kZXhPZihcIi5cIil8fFwiL1wiPT09dC5zbGljZSgtMSl8fFwiL1wiPT09ZS5zbGljZSgtMSl8fFwiL1wiIT09dS5zbGljZSgtMSl8fCh1PXUuc2xpY2UoMCwtMSkpLGgmJih1PWgrKFwiL1wiPT09dVswXT91LnN1YnN0cigxKTp1KSksdX1mdW5jdGlvbiBsKCl7fWwucHJvdG90eXBlLnBhcnNlPWQsbC5wcm90b3R5cGUuZm9ybWF0PXIsbC5wcm90b3R5cGUucmVzb2x2ZT1oLGwucHJvdG90eXBlLnJlc29sdmVPYmplY3Q9aDt2YXIgaT0vXmh0dHBzP3xmdHB8Z29waGVyfGZpbGUvLHU9L14oLio/KShbIz9dLiopLyxmPS9eKFthLXowLTkuKy1dKjopKFxcL3swLDN9KSguKikvaSxtPS9eKFthLXowLTkuKy1dKjopP1xcL1xcL1xcLyovaSx2PS9eKFthLXowLTkuKy1dKjopKFxcL3swLDJ9KVxcWyguKilcXF0kL2k7ZnVuY3Rpb24gZCh0LG8sYSl7aWYodm9pZCAwPT09byYmKG89ITEpLHZvaWQgMD09PWEmJihhPSExKSx0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCBpbnN0YW5jZW9mIGwpcmV0dXJuIHQ7dmFyIG49KHQ9dC50cmltKCkpLm1hdGNoKHUpO3Q9bj9uWzFdLnJlcGxhY2UoL1xcXFwvZyxcIi9cIikrblsyXTp0LnJlcGxhY2UoL1xcXFwvZyxcIi9cIiksdi50ZXN0KHQpJiZcIi9cIiE9PXQuc2xpY2UoLTEpJiYodCs9XCIvXCIpO3ZhciBjPSEvKF5qYXZhc2NyaXB0KS8udGVzdCh0KSYmdC5tYXRjaChmKSxoPW0udGVzdCh0KSxkPVwiXCI7YyYmKGkudGVzdChjWzFdKXx8KGQ9Y1sxXS50b0xvd2VyQ2FzZSgpLHQ9XCJcIitjWzJdK2NbM10pLGNbMl18fChoPSExLGkudGVzdChjWzFdKT8oZD1jWzFdLHQ9XCJcIitjWzNdKTp0PVwiLy9cIitjWzNdKSwzIT09Y1syXS5sZW5ndGgmJjEhPT1jWzJdLmxlbmd0aHx8KGQ9Y1sxXSx0PVwiL1wiK2NbM10pKTt2YXIgZyx5PShuP25bMV06dCkubWF0Y2goL15odHRwcz86XFwvXFwvW14vXSsoOlswLTldKykoPz1cXC98JCkvKSxiPXkmJnlbMV0sQz1uZXcgbCxVPVwiXCIsaj1cIlwiO3RyeXtnPW5ldyBVUkwodCl9Y2F0Y2goZSl7VT1lLGR8fGF8fCEvXlxcL1xcLy8udGVzdCh0KXx8L15cXC9cXC8uK1tALl0vLnRlc3QodCl8fChqPVwiL1wiLHQ9dC5zdWJzdHIoMSkpO3RyeXtnPW5ldyBVUkwodCxwKX1jYXRjaCh0KXtyZXR1cm4gQy5wcm90b2NvbD1kLEMuaHJlZj1kLEN9fUMuc2xhc2hlcz1oJiYhaixDLmhvc3Q9Zy5ob3N0PT09cz9cIlwiOmcuaG9zdCxDLmhvc3RuYW1lPWcuaG9zdG5hbWU9PT1zP1wiXCI6Zy5ob3N0bmFtZS5yZXBsYWNlKC8oXFxbfFxcXSkvZyxcIlwiKSxDLnByb3RvY29sPVU/ZHx8bnVsbDpnLnByb3RvY29sLEMuc2VhcmNoPWcuc2VhcmNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKSxDLmhhc2g9Zy5oYXNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKTt2YXIgdz10LnNwbGl0KFwiI1wiKTshQy5zZWFyY2gmJn53WzBdLmluZGV4T2YoXCI/XCIpJiYoQy5zZWFyY2g9XCI/XCIpLEMuaGFzaHx8XCJcIiE9PXdbMV18fChDLmhhc2g9XCIjXCIpLEMucXVlcnk9bz9lLmRlY29kZShnLnNlYXJjaC5zdWJzdHIoMSkpOkMuc2VhcmNoLnN1YnN0cigxKSxDLnBhdGhuYW1lPWorKGM/ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvWydefGBdL2csZnVuY3Rpb24odCl7cmV0dXJuXCIlXCIrdC5jaGFyQ29kZUF0KCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9KS5yZXBsYWNlKC8oKD86JVswLTlBLUZdezJ9KSspL2csZnVuY3Rpb24odCxlKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlKS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24odCl7dmFyIGU9dC5jaGFyQ29kZUF0KCk7cmV0dXJuIGU+MjU2fHwvXlthLXowLTldJC9pLnRlc3QodCk/dDpcIiVcIitlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfSkuam9pbihcIlwiKX1jYXRjaCh0KXtyZXR1cm4gZX19KX0oZy5wYXRobmFtZSk6Zy5wYXRobmFtZSksXCJhYm91dDpcIj09PUMucHJvdG9jb2wmJlwiYmxhbmtcIj09PUMucGF0aG5hbWUmJihDLnByb3RvY29sPVwiXCIsQy5wYXRobmFtZT1cIlwiKSxVJiZcIi9cIiE9PXRbMF0mJihDLnBhdGhuYW1lPUMucGF0aG5hbWUuc3Vic3RyKDEpKSxkJiYhaS50ZXN0KGQpJiZcIi9cIiE9PXQuc2xpY2UoLTEpJiZcIi9cIj09PUMucGF0aG5hbWUmJihDLnBhdGhuYW1lPVwiXCIpLEMucGF0aD1DLnBhdGhuYW1lK0Muc2VhcmNoLEMuYXV0aD1bZy51c2VybmFtZSxnLnBhc3N3b3JkXS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KS5maWx0ZXIoQm9vbGVhbikuam9pbihcIjpcIiksQy5wb3J0PWcucG9ydCxiJiYhQy5ob3N0LmVuZHNXaXRoKGIpJiYoQy5ob3N0Kz1iLEMucG9ydD1iLnNsaWNlKDEpKSxDLmhyZWY9aj9cIlwiK0MucGF0aG5hbWUrQy5zZWFyY2grQy5oYXNoOnIoQyk7dmFyIHg9L14oZmlsZSkvLnRlc3QoQy5ocmVmKT9bXCJob3N0XCIsXCJob3N0bmFtZVwiXTpbXTtyZXR1cm4gT2JqZWN0LmtleXMoQykuZm9yRWFjaChmdW5jdGlvbih0KXt+eC5pbmRleE9mKHQpfHwoQ1t0XT1DW3RdfHxudWxsKX0pLEN9ZXhwb3J0cy5wYXJzZT1kLGV4cG9ydHMuZm9ybWF0PXIsZXhwb3J0cy5yZXNvbHZlPWgsZXhwb3J0cy5yZXNvbHZlT2JqZWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGQoaCh0LGUpKX0sZXhwb3J0cy5Vcmw9bDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwidmFyIHRyaW0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59XG4gICwgaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICBpZiAoIWhlYWRlcnMpXG4gICAgcmV0dXJuIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgdmFyIGhlYWRlcnNBcnIgPSB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVyc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBoZWFkZXJzQXJyW2ldXG4gICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgdW5kZWY7XG5cbi8qKlxuICogRGVjb2RlIGEgVVJJIGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgVVJJIGVuY29kZWQgc3RyaW5nLlxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dC5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGVuY29kZSBhIGdpdmVuIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVsbH0gVGhlIGVuY29kZWQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xuICB0cnkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBTaW1wbGUgcXVlcnkgc3RyaW5nIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIHBhcnNlZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeSkge1xuICB2YXIgcGFyc2VyID0gLyhbXj0/IyZdKyk9PyhbXiZdKikvZ1xuICAgICwgcmVzdWx0ID0ge31cbiAgICAsIHBhcnQ7XG5cbiAgd2hpbGUgKHBhcnQgPSBwYXJzZXIuZXhlYyhxdWVyeSkpIHtcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRbMV0pXG4gICAgICAsIHZhbHVlID0gZGVjb2RlKHBhcnRbMl0pO1xuXG4gICAgLy9cbiAgICAvLyBQcmV2ZW50IG92ZXJyaWRpbmcgb2YgZXhpc3RpbmcgcHJvcGVydGllcy4gVGhpcyBlbnN1cmVzIHRoYXQgYnVpbGQtaW5cbiAgICAvLyBtZXRob2RzIGxpa2UgYHRvU3RyaW5nYCBvciBfX3Byb3RvX18gYXJlIG5vdCBvdmVycmlkZW4gYnkgbWFsaWNpb3VzXG4gICAgLy8gcXVlcnlzdHJpbmdzLlxuICAgIC8vXG4gICAgLy8gSW4gdGhlIGNhc2UgaWYgZmFpbGVkIGRlY29kaW5nLCB3ZSB3YW50IHRvIG9taXQgdGhlIGtleS92YWx1ZSBwYWlyc1xuICAgIC8vIGZyb20gdGhlIHJlc3VsdC5cbiAgICAvL1xuICAgIGlmIChrZXkgPT09IG51bGwgfHwgdmFsdWUgPT09IG51bGwgfHwga2V5IGluIHJlc3VsdCkgY29udGludWU7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgcXVlcnkgc3RyaW5nIHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB0aGF0IHNob3VsZCBiZSB0cmFuc2Zvcm1lZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcmVmaXggT3B0aW9uYWwgcHJlZml4LlxuICogQHJldHVybnMge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5naWZ5KG9iaiwgcHJlZml4KSB7XG4gIHByZWZpeCA9IHByZWZpeCB8fCAnJztcblxuICB2YXIgcGFpcnMgPSBbXVxuICAgICwgdmFsdWVcbiAgICAsIGtleTtcblxuICAvL1xuICAvLyBPcHRpb25hbGx5IHByZWZpeCB3aXRoIGEgJz8nIGlmIG5lZWRlZFxuICAvL1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBwcmVmaXgpIHByZWZpeCA9ICc/JztcblxuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICAvL1xuICAgICAgLy8gRWRnZSBjYXNlcyB3aGVyZSB3ZSBhY3R1YWxseSB3YW50IHRvIGVuY29kZSB0aGUgdmFsdWUgdG8gYW4gZW1wdHlcbiAgICAgIC8vIHN0cmluZyBpbnN0ZWFkIG9mIHRoZSBzdHJpbmdpZmllZCB2YWx1ZS5cbiAgICAgIC8vXG4gICAgICBpZiAoIXZhbHVlICYmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWYgfHwgaXNOYU4odmFsdWUpKSkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSBlbmNvZGUoa2V5KTtcbiAgICAgIHZhbHVlID0gZW5jb2RlKHZhbHVlKTtcblxuICAgICAgLy9cbiAgICAgIC8vIElmIHdlIGZhaWxlZCB0byBlbmNvZGUgdGhlIHN0cmluZ3MsIHdlIHNob3VsZCBiYWlsIG91dCBhcyB3ZSBkb24ndFxuICAgICAgLy8gd2FudCB0byBhZGQgaW52YWxpZCBzdHJpbmdzIHRvIHRoZSBxdWVyeS5cbiAgICAgIC8vXG4gICAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgIHBhaXJzLnB1c2goa2V5ICsnPScrIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFpcnMubGVuZ3RoID8gcHJlZml4ICsgcGFpcnMuam9pbignJicpIDogJyc7XG59XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5leHBvcnRzLnN0cmluZ2lmeSA9IHF1ZXJ5c3RyaW5naWZ5O1xuZXhwb3J0cy5wYXJzZSA9IHF1ZXJ5c3RyaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlJ3JlIHJlcXVpcmVkIHRvIGFkZCBhIHBvcnQgbnVtYmVyLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkZWZhdWx0LXBvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gcG9ydCBQb3J0IG51bWJlciB3ZSBuZWVkIHRvIGNoZWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2wgUHJvdG9jb2wgd2UgbmVlZCB0byBjaGVjayBhZ2FpbnN0LlxuICogQHJldHVybnMge0Jvb2xlYW59IElzIGl0IGEgZGVmYXVsdCBwb3J0IGZvciB0aGUgZ2l2ZW4gcHJvdG9jb2xcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcXVpcmVkKHBvcnQsIHByb3RvY29sKSB7XG4gIHByb3RvY29sID0gcHJvdG9jb2wuc3BsaXQoJzonKVswXTtcbiAgcG9ydCA9ICtwb3J0O1xuXG4gIGlmICghcG9ydCkgcmV0dXJuIGZhbHNlO1xuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlICdodHRwJzpcbiAgICBjYXNlICd3cyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDgwO1xuXG4gICAgY2FzZSAnaHR0cHMnOlxuICAgIGNhc2UgJ3dzcyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDQ0MztcblxuICAgIGNhc2UgJ2Z0cCc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDIxO1xuXG4gICAgY2FzZSAnZ29waGVyJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNzA7XG5cbiAgICBjYXNlICdmaWxlJzpcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcG9ydCAhPT0gMDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYW5SZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9jYW5SZXBvcnRFcnJvclwiKTtcbnZhciB0b1N1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWwvdG9TdWJzY3JpYmVyXCIpO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xudmFyIHBpcGVfMSA9IHJlcXVpcmUoXCIuL3V0aWwvcGlwZVwiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLl9pc1NjYWxhciA9IGZhbHNlO1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIHZhciBzaW5rID0gdG9TdWJzY3JpYmVyXzEudG9TdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcy5zb3VyY2UpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKHRoaXMuc291cmNlIHx8IChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiAhc2luay5zeW5jRXJyb3JUaHJvd2FibGUpID9cbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc2luaykgOlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzaW5rKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBzaW5rLnN5bmNFcnJvclZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2luaztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcl8xLmNhblJlcG9ydEVycm9yKHNpbmspKSB7XG4gICAgICAgICAgICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAobmV4dCwgcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZWplY3QsIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIHJldHVybiBzb3VyY2UgJiYgc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlW29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgb3BlcmF0aW9uc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcGVyYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVfMS5waXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoeCkgeyByZXR1cm4gdmFsdWUgPSB4OyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcikge1xuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBjb25maWdfMS5jb25maWcuUHJvbWlzZSB8fCBQcm9taXNlO1xuICAgIH1cbiAgICBpZiAoIXByb21pc2VDdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gUHJvbWlzZSBpbXBsIGZvdW5kJyk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlQ3Rvcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgaG9zdFJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2hvc3RSZXBvcnRFcnJvclwiKTtcbmV4cG9ydHMuZW1wdHkgPSB7XG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNGdW5jdGlvbl8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0Z1bmN0aW9uXCIpO1xudmFyIE9ic2VydmVyXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZlclwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmlwdGlvblwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9ob3N0UmVwb3J0RXJyb3JcIik7XG52YXIgU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlcihkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclZhbHVlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3duID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBPYnNlcnZlcl8xLmVtcHR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICghZGVzdGluYXRpb25Pck5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBPYnNlcnZlcl8xLmVtcHR5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk9yTmV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uT3JOZXh0IGluc3RhbmNlb2YgU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZGVzdGluYXRpb25Pck5leHQuc3luY0Vycm9yVGhyb3dhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbk9yTmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uT3JOZXh0LmFkZChfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBuZXcgU2FmZVN1YnNjcmliZXIoX3RoaXMsIGRlc3RpbmF0aW9uT3JOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBuZXcgU2FmZVN1YnNjcmliZXIoX3RoaXMsIGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGVbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgU3Vic2NyaWJlci5jcmVhdGUgPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgc3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZUFuZFJlY3ljbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50T3JQYXJlbnRzID0gdGhpcy5fcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IF9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIFN1YnNjcmliZXI7XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5TdWJzY3JpYmVyID0gU3Vic2NyaWJlcjtcbnZhciBTYWZlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNhZmVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNhZmVTdWJzY3JpYmVyKF9wYXJlbnRTdWJzY3JpYmVyLCBvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB2YXIgY29udGV4dCA9IF90aGlzO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24ob2JzZXJ2ZXJPck5leHQpKSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgICAgICAgIG5leHQgPSBvYnNlcnZlck9yTmV4dC5uZXh0O1xuICAgICAgICAgICAgZXJyb3IgPSBvYnNlcnZlck9yTmV4dC5lcnJvcjtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gb2JzZXJ2ZXJPck5leHQuY29tcGxldGU7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXJPck5leHQgIT09IE9ic2VydmVyXzEuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKGNvbnRleHQudW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZChjb250ZXh0LnVuc3Vic2NyaWJlLmJpbmQoY29udGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gX3RoaXMudW5zdWJzY3JpYmUuYmluZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG5leHQ7XG4gICAgICAgIF90aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkICYmIHRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9uZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fbmV4dCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICB2YXIgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyA9IGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jb21wbGV0ZS5jYWxsKF90aGlzLl9jb250ZXh0KTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIod3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yVW5zdWIgPSBmdW5jdGlvbiAoZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JTZXRFcnJvciA9IGZ1bmN0aW9uIChwYXJlbnQsIGZuLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBjYWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgX3BhcmVudFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5TYWZlU3Vic2NyaWJlciA9IFNhZmVTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi91dGlsL2lzQXJyYXlcIik7XG52YXIgaXNPYmplY3RfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNPYmplY3RcIik7XG52YXIgaXNGdW5jdGlvbl8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0Z1bmN0aW9uXCIpO1xudmFyIFVuc3Vic2NyaXB0aW9uRXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvclwiKTtcbnZhciBTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbih1bnN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9jdG9yVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfcGFyZW50T3JQYXJlbnRzID0gX2EuX3BhcmVudE9yUGFyZW50cywgX2N0b3JVbnN1YnNjcmliZSA9IF9hLl9jdG9yVW5zdWJzY3JpYmUsIF91bnN1YnNjcmliZSA9IF9hLl91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgPSBfYS5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIF9wYXJlbnRPclBhcmVudHMucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBfcGFyZW50T3JQYXJlbnRzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRPclBhcmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oX3Vuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgaWYgKF9jdG9yVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgX3Vuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvciA/IGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykgOiBbZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlfMS5pc0FycmF5KF9zdWJzY3JpcHRpb25zKSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgICAgICB2YXIgbGVuID0gX3N1YnNjcmlwdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gX3N1YnNjcmlwdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdF8xLmlzT2JqZWN0KHN1YikpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZS5lcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGVhcmRvd247XG4gICAgICAgIGlmICghdGVhcmRvd24pIHtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdGVhcmRvd24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHRlYXJkb3duKTtcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiA9PT0gdGhpcyB8fCBzdWJzY3JpcHRpb24uY2xvc2VkIHx8IHR5cGVvZiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCEoc3Vic2NyaXB0aW9uIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fc3Vic2NyaXB0aW9ucyA9IFt0bXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VucmVjb2duaXplZCB0ZWFyZG93biAnICsgdGVhcmRvd24gKyAnIGFkZGVkIHRvIFN1YnNjcmlwdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgX3BhcmVudE9yUGFyZW50cyA9IHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHMgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChfcGFyZW50T3JQYXJlbnRzID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gW19wYXJlbnRPclBhcmVudHMsIHRoaXNdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMuaW5kZXhPZih0aGlzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIF9wYXJlbnRPclBhcmVudHMucHVzaCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtzdWJzY3JpcHRpb25dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpcHRpb25zLmluZGV4T2Yoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnNwbGljZShzdWJzY3JpcHRpb25JbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5FTVBUWSA9IChmdW5jdGlvbiAoZW1wdHkpIHtcbiAgICAgICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0obmV3IFN1YnNjcmlwdGlvbigpKSk7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKSk7XG5leHBvcnRzLlN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbjtcbmZ1bmN0aW9uIGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlcnJvcnMpIHtcbiAgICByZXR1cm4gZXJyb3JzLnJlZHVjZShmdW5jdGlvbiAoZXJycywgZXJyKSB7IHJldHVybiBlcnJzLmNvbmNhdCgoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IpID8gZXJyLmVycm9ycyA6IGVycik7IH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmlwdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSBmYWxzZTtcbmV4cG9ydHMuY29uZmlnID0ge1xuICAgIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgICBzZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVEVEISBSeEpTIHdhcyBzZXQgdG8gdXNlIGRlcHJlY2F0ZWQgc3luY2hyb25vdXMgZXJyb3IgaGFuZGxpbmcgYmVoYXZpb3IgYnkgY29kZSBhdDogXFxuJyArIGVycm9yLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSeEpTOiBCYWNrIHRvIGEgYmV0dGVyIGVycm9yIGJlaGF2aW9yLiBUaGFuayB5b3UuIDwzJyk7XG4gICAgICAgIH1cbiAgICAgICAgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZygpIHtcbiAgICAgICAgcmV0dXJuIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncztcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmV4cG9ydHMuRU1QVFkgPSBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7XG5mdW5jdGlvbiBlbXB0eShzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVyID8gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSA6IGV4cG9ydHMuRU1QVFk7XG59XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5mdW5jdGlvbiBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbXB0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBkZWZhdWx0SWZFbXB0eShkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoZGVmYXVsdFZhbHVlID09PSB2b2lkIDApIHsgZGVmYXVsdFZhbHVlID0gbnVsbDsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UubGlmdChuZXcgRGVmYXVsdElmRW1wdHlPcGVyYXRvcihkZWZhdWx0VmFsdWUpKTsgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdElmRW1wdHkgPSBkZWZhdWx0SWZFbXB0eTtcbnZhciBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgRGVmYXVsdElmRW1wdHlPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmRlZmF1bHRWYWx1ZSkpO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmF1bHRJZkVtcHR5T3BlcmF0b3I7XG59KCkpO1xudmFyIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICBfdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh0aGlzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRJZkVtcHR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmlsdGVyT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBGaWx0ZXJPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG52YXIgRmlsdGVyT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgRmlsdGVyT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBGaWx0ZXJTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBGaWx0ZXJPcGVyYXRvcjtcbn0oKSk7XG52YXIgRmlsdGVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZpbHRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsdGVyU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmlsdGVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJlZGljYXRlLmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWx0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWFwT3BlcmF0aW9uKHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2plY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGlzIG5vdCBhIGZ1bmN0aW9uLiBBcmUgeW91IGxvb2tpbmcgZm9yIGBtYXBUbygpYD8nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5tYXAgPSBtYXA7XG52YXIgTWFwT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBNYXBTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy50aGlzQXJnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5NYXBPcGVyYXRvciA9IE1hcE9wZXJhdG9yO1xudmFyIE1hcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnIHx8IF90aGlzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNjYW5fMSA9IHJlcXVpcmUoXCIuL3NjYW5cIik7XG52YXIgdGFrZUxhc3RfMSA9IHJlcXVpcmUoXCIuL3Rha2VMYXN0XCIpO1xudmFyIGRlZmF1bHRJZkVtcHR5XzEgPSByZXF1aXJlKFwiLi9kZWZhdWx0SWZFbXB0eVwiKTtcbnZhciBwaXBlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9waXBlXCIpO1xuZnVuY3Rpb24gcmVkdWNlKGFjY3VtdWxhdG9yLCBzZWVkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlT3BlcmF0b3JGdW5jdGlvbldpdGhTZWVkKHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBpcGVfMS5waXBlKHNjYW5fMS5zY2FuKGFjY3VtdWxhdG9yLCBzZWVkKSwgdGFrZUxhc3RfMS50YWtlTGFzdCgxKSwgZGVmYXVsdElmRW1wdHlfMS5kZWZhdWx0SWZFbXB0eShzZWVkKSkoc291cmNlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlZHVjZU9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBwaXBlXzEucGlwZShzY2FuXzEuc2NhbihmdW5jdGlvbiAoYWNjLCB2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIGFjY3VtdWxhdG9yKGFjYywgdmFsdWUsIGluZGV4ICsgMSk7IH0pLCB0YWtlTGFzdF8xLnRha2VMYXN0KDEpKShzb3VyY2UpO1xuICAgIH07XG59XG5leHBvcnRzLnJlZHVjZSA9IHJlZHVjZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHVjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBzY2FuKGFjY3VtdWxhdG9yLCBzZWVkKSB7XG4gICAgdmFyIGhhc1NlZWQgPSBmYWxzZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIGhhc1NlZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gc2Nhbk9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgU2Nhbk9wZXJhdG9yKGFjY3VtdWxhdG9yLCBzZWVkLCBoYXNTZWVkKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuc2NhbiA9IHNjYW47XG52YXIgU2Nhbk9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2FuT3BlcmF0b3IoYWNjdW11bGF0b3IsIHNlZWQsIGhhc1NlZWQpIHtcbiAgICAgICAgaWYgKGhhc1NlZWQgPT09IHZvaWQgMCkgeyBoYXNTZWVkID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yO1xuICAgICAgICB0aGlzLnNlZWQgPSBzZWVkO1xuICAgICAgICB0aGlzLmhhc1NlZWQgPSBoYXNTZWVkO1xuICAgIH1cbiAgICBTY2FuT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBTY2FuU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmFjY3VtdWxhdG9yLCB0aGlzLnNlZWQsIHRoaXMuaGFzU2VlZCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFNjYW5PcGVyYXRvcjtcbn0oKSk7XG52YXIgU2NhblN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTY2FuU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTY2FuU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgYWNjdW11bGF0b3IsIF9zZWVkLCBoYXNTZWVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yO1xuICAgICAgICBfdGhpcy5fc2VlZCA9IF9zZWVkO1xuICAgICAgICBfdGhpcy5oYXNTZWVkID0gaGFzU2VlZDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2FuU3Vic2NyaWJlci5wcm90b3R5cGUsIFwic2VlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1NlZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc2VlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTY2FuU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1NlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cnlOZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NhblN1YnNjcmliZXIucHJvdG90eXBlLl90cnlOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYWNjdW11bGF0b3IodGhpcy5zZWVkLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlZWQgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFNjYW5TdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Nhbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG52YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yXCIpO1xudmFyIGVtcHR5XzEgPSByZXF1aXJlKFwiLi4vb2JzZXJ2YWJsZS9lbXB0eVwiKTtcbmZ1bmN0aW9uIHRha2VMYXN0KGNvdW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRha2VMYXN0T3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHlfMS5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBUYWtlTGFzdE9wZXJhdG9yKGNvdW50KSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy50YWtlTGFzdCA9IHRha2VMYXN0O1xudmFyIFRha2VMYXN0T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRha2VMYXN0T3BlcmF0b3IodG90YWwpIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICBpZiAodGhpcy50b3RhbCA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcl8xLkFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRha2VMYXN0T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBUYWtlTGFzdFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy50b3RhbCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFRha2VMYXN0T3BlcmF0b3I7XG59KCkpO1xudmFyIFRha2VMYXN0U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRha2VMYXN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWtlTGFzdFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHRvdGFsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICBfdGhpcy5yaW5nID0gbmV3IEFycmF5KCk7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUYWtlTGFzdFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByaW5nID0gdGhpcy5yaW5nO1xuICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgICAgICB2YXIgY291bnQgPSB0aGlzLmNvdW50Kys7XG4gICAgICAgIGlmIChyaW5nLmxlbmd0aCA8IHRvdGFsKSB7XG4gICAgICAgICAgICByaW5nLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY291bnQgJSB0b3RhbDtcbiAgICAgICAgICAgIHJpbmdbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRha2VMYXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICB2YXIgY291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLmNvdW50ID49IHRoaXMudG90YWwgPyB0aGlzLnRvdGFsIDogdGhpcy5jb3VudDtcbiAgICAgICAgICAgIHZhciByaW5nID0gdGhpcy5yaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IChjb3VudCsrKSAlIHRvdGFsO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQocmluZ1tpZHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRha2VMYXN0U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRha2VMYXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yeFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gU3ltYm9sKCdyeFN1YnNjcmliZXInKVxuICAgICAgICA6ICdAQHJ4U3Vic2NyaWJlcl8nICsgTWF0aC5yYW5kb20oKTtcbn0pKCk7XG5leHBvcnRzLiQkcnhTdWJzY3JpYmVyID0gZXhwb3J0cy5yeFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yeFN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdhcmd1bWVudCBvdXQgb2YgcmFuZ2UnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgPSBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bcmd1bWVudE91dE9mUmFuZ2VFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9ycyA/XG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKSA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVW5zdWJzY3JpcHRpb25FcnJvckltcGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLlVuc3Vic2NyaXB0aW9uRXJyb3IgPSBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBjYW5SZXBvcnRFcnJvcihvYnNlcnZlcikge1xuICAgIHdoaWxlIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgX2EgPSBvYnNlcnZlciwgY2xvc2VkXzEgPSBfYS5jbG9zZWQsIGRlc3RpbmF0aW9uID0gX2EuZGVzdGluYXRpb24sIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGNsb3NlZF8xIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uIGluc3RhbmNlb2YgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gZGVzdGluYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmNhblJlcG9ydEVycm9yID0gY2FuUmVwb3J0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYW5SZXBvcnRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGhvc3RSZXBvcnRFcnJvcihlcnIpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhyb3cgZXJyOyB9LCAwKTtcbn1cbmV4cG9ydHMuaG9zdFJlcG9ydEVycm9yID0gaG9zdFJlcG9ydEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9zdFJlcG9ydEVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICAgIHJldHVybiB4O1xufVxuZXhwb3J0cy5pZGVudGl0eSA9IGlkZW50aXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNPYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaWRlbnRpdHlfMSA9IHJlcXVpcmUoXCIuL2lkZW50aXR5XCIpO1xuZnVuY3Rpb24gcGlwZSgpIHtcbiAgICB2YXIgZm5zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgZm5zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuZnVuY3Rpb24gcGlwZUZyb21BcnJheShmbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHlfMS5pZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZuc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBmbnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBmbikgeyByZXR1cm4gZm4ocHJldik7IH0sIGlucHV0KTtcbiAgICB9O1xufVxuZXhwb3J0cy5waXBlRnJvbUFycmF5ID0gcGlwZUZyb21BcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpcGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZShcIi4uL09ic2VydmVyXCIpO1xuZnVuY3Rpb24gdG9TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICBpZiAobmV4dE9yT2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyIGluc3RhbmNlb2YgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5leHRPck9ic2VydmVyICYmICFlcnJvciAmJiAhY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcihPYnNlcnZlcl8xLmVtcHR5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcbn1cbmV4cG9ydHMudG9TdWJzY3JpYmVyID0gdG9TdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9TdWJzY3JpYmVyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVyaTEsIHVyaTIsIGllTW9kZSkge1xuICAgIGlmICh1cmkxID09PSB1cmkyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciB1cmwxID0gdXJsLnBhcnNlKHVyaTEsIGZhbHNlLCB0cnVlKTtcbiAgICB2YXIgdXJsMiA9IHVybC5wYXJzZSh1cmkyLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICB2YXIgdXJsMVBvcnQgPSB1cmwxLnBvcnR8MCB8fCAodXJsMS5wcm90b2NvbCA9PT0gJ2h0dHBzJyA/IDQ0MyA6IDgwKTtcbiAgICB2YXIgdXJsMlBvcnQgPSB1cmwyLnBvcnR8MCB8fCAodXJsMi5wcm90b2NvbCA9PT0gJ2h0dHBzJyA/IDQ0MyA6IDgwKTtcblxuICAgIHZhciBtYXRjaCA9IHtcbiAgICAgICAgcHJvdG86IHVybDEucHJvdG9jb2wgPT09IHVybDIucHJvdG9jb2wsXG4gICAgICAgIGhvc3RuYW1lOiB1cmwxLmhvc3RuYW1lID09PSB1cmwyLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmwxUG9ydCA9PT0gdXJsMlBvcnRcbiAgICB9O1xuXG4gICAgcmV0dXJuICgobWF0Y2gucHJvdG8gJiYgbWF0Y2guaG9zdG5hbWUpICYmIChtYXRjaC5wb3J0IHx8IGllTW9kZSkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1aXJlZCA9IHJlcXVpcmUoJ3JlcXVpcmVzLXBvcnQnKVxuICAsIHFzID0gcmVxdWlyZSgncXVlcnlzdHJpbmdpZnknKVxuICAsIHNsYXNoZXMgPSAvXltBLVphLXpdW0EtWmEtejAtOSstLl0qOlxcL1xcLy9cbiAgLCBwcm90b2NvbHJlID0gL14oW2Etel1bYS16MC05ListXSo6KT8oXFwvXFwvKT8oW1xcU1xcc10qKS9pXG4gICwgd2hpdGVzcGFjZSA9ICdbXFxcXHgwOVxcXFx4MEFcXFxceDBCXFxcXHgwQ1xcXFx4MERcXFxceDIwXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwQVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMFxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1RkVGRl0nXG4gICwgbGVmdCA9IG5ldyBSZWdFeHAoJ14nKyB3aGl0ZXNwYWNlICsnKycpO1xuXG4vKipcbiAqIFRyaW0gYSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gdHJpbS5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdHJpbUxlZnQoc3RyKSB7XG4gIHJldHVybiAoc3RyID8gc3RyIDogJycpLnRvU3RyaW5nKCkucmVwbGFjZShsZWZ0LCAnJyk7XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBwYXJzZSBydWxlcyBmb3IgdGhlIFVSTCBwYXJzZXIsIGl0IGluZm9ybXMgdGhlIHBhcnNlclxuICogYWJvdXQ6XG4gKlxuICogMC4gVGhlIGNoYXIgaXQgTmVlZHMgdG8gcGFyc2UsIGlmIGl0J3MgYSBzdHJpbmcgaXQgc2hvdWxkIGJlIGRvbmUgdXNpbmdcbiAqICAgIGluZGV4T2YsIFJlZ0V4cCB1c2luZyBleGVjIGFuZCBOYU4gbWVhbnMgc2V0IGFzIGN1cnJlbnQgdmFsdWUuXG4gKiAxLiBUaGUgcHJvcGVydHkgd2Ugc2hvdWxkIHNldCB3aGVuIHBhcnNpbmcgdGhpcyB2YWx1ZS5cbiAqIDIuIEluZGljYXRpb24gaWYgaXQncyBiYWNrd2FyZHMgb3IgZm9yd2FyZCBwYXJzaW5nLCB3aGVuIHNldCBhcyBudW1iZXIgaXQnc1xuICogICAgdGhlIHZhbHVlIG9mIGV4dHJhIGNoYXJzIHRoYXQgc2hvdWxkIGJlIHNwbGl0IG9mZi5cbiAqIDMuIEluaGVyaXQgZnJvbSBsb2NhdGlvbiBpZiBub24gZXhpc3RpbmcgaW4gdGhlIHBhcnNlci5cbiAqIDQuIGB0b0xvd2VyQ2FzZWAgdGhlIHJlc3VsdGluZyB2YWx1ZS5cbiAqL1xudmFyIHJ1bGVzID0gW1xuICBbJyMnLCAnaGFzaCddLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWyc/JywgJ3F1ZXJ5J10sICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIGZ1bmN0aW9uIHNhbml0aXplKGFkZHJlc3MpIHsgICAgICAgICAgLy8gU2FuaXRpemUgd2hhdCBpcyBsZWZ0IG9mIHRoZSBhZGRyZXNzXG4gICAgcmV0dXJuIGFkZHJlc3MucmVwbGFjZSgnXFxcXCcsICcvJyk7XG4gIH0sXG4gIFsnLycsICdwYXRobmFtZSddLCAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJ0AnLCAnYXV0aCcsIDFdLCAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZnJvbnQuXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cbiAgWy86KFxcZCspJC8sICdwb3J0JywgdW5kZWZpbmVkLCAxXSwgICAgLy8gUmVnRXhwIHRoZSBiYWNrLlxuICBbTmFOLCAnaG9zdG5hbWUnLCB1bmRlZmluZWQsIDEsIDFdICAgIC8vIFNldCBsZWZ0IG92ZXIuXG5dO1xuXG4vKipcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcbiAqIGZvciBhbGwgbm9uIGJsb2IgVVJMJ3MgYXMgYSBibG9iIFVSTCBkb2VzIG5vdCBpbmNsdWRlIGEgaGFzaCwgb25seSB0aGVcbiAqIG9yaWdpbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIGlnbm9yZSA9IHsgaGFzaDogMSwgcXVlcnk6IDEgfTtcblxuLyoqXG4gKiBUaGUgbG9jYXRpb24gb2JqZWN0IGRpZmZlcnMgd2hlbiB5b3VyIGNvZGUgaXMgbG9hZGVkIHRocm91Z2ggYSBub3JtYWwgcGFnZSxcbiAqIFdvcmtlciBvciB0aHJvdWdoIGEgd29ya2VyIHVzaW5nIGEgYmxvYi4gQW5kIHdpdGggdGhlIGJsb2JibGUgYmVnaW5zIHRoZVxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgcGFnZSB3aGVyZSBvdXIgY29kZSBpcyBsb2FkZWQgaW4uIFRoZSBhY3R1YWwgb3JpZ2luIGlzXG4gKiBlbmNvZGVkIGluIHRoZSBgcGF0aG5hbWVgIHNvIHdlIGNhbiB0aGFua2Z1bGx5IGdlbmVyYXRlIGEgZ29vZCBcImRlZmF1bHRcIlxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbG9jIE9wdGlvbmFsIGRlZmF1bHQgbG9jYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9sY2F0aW9uKGxvYykge1xuICB2YXIgZ2xvYmFsVmFyO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gd2luZG93O1xuICBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gZ2xvYmFsO1xuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IHNlbGY7XG4gIGVsc2UgZ2xvYmFsVmFyID0ge307XG5cbiAgdmFyIGxvY2F0aW9uID0gZ2xvYmFsVmFyLmxvY2F0aW9uIHx8IHt9O1xuICBsb2MgPSBsb2MgfHwgbG9jYXRpb247XG5cbiAgdmFyIGZpbmFsZGVzdGluYXRpb24gPSB7fVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NcbiAgICAsIGtleTtcblxuICBpZiAoJ2Jsb2I6JyA9PT0gbG9jLnByb3RvY29sKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwodW5lc2NhcGUobG9jLnBhdGhuYW1lKSwge30pO1xuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwobG9jLCB7fSk7XG4gICAgZm9yIChrZXkgaW4gaWdub3JlKSBkZWxldGUgZmluYWxkZXN0aW5hdGlvbltrZXldO1xuICB9IGVsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlKSB7XG4gICAgZm9yIChrZXkgaW4gbG9jKSB7XG4gICAgICBpZiAoa2V5IGluIGlnbm9yZSkgY29udGludWU7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uW2tleV0gPSBsb2Nba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZmluYWxkZXN0aW5hdGlvbi5zbGFzaGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9IHNsYXNoZXMudGVzdChsb2MuaHJlZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbmFsZGVzdGluYXRpb247XG59XG5cbi8qKlxuICogQHR5cGVkZWYgUHJvdG9jb2xFeHRyYWN0XG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCBtYXRjaGVkIGluIHRoZSBVUkwsIGluIGxvd2VyY2FzZS5cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2xhc2hlcyBgdHJ1ZWAgaWYgcHJvdG9jb2wgaXMgZm9sbG93ZWQgYnkgXCIvL1wiLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmVzdCBSZXN0IG9mIHRoZSBVUkwgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgcHJvdG9jb2wuXG4gKi9cblxuLyoqXG4gKiBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGZyb20gYSBVUkwgd2l0aC93aXRob3V0IGRvdWJsZSBzbGFzaCAoXCIvL1wiKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBleHRyYWN0IGZyb20uXG4gKiBAcmV0dXJuIHtQcm90b2NvbEV4dHJhY3R9IEV4dHJhY3RlZCBpbmZvcm1hdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RQcm90b2NvbChhZGRyZXNzKSB7XG4gIGFkZHJlc3MgPSB0cmltTGVmdChhZGRyZXNzKTtcbiAgdmFyIG1hdGNoID0gcHJvdG9jb2xyZS5leGVjKGFkZHJlc3MpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvdG9jb2w6IG1hdGNoWzFdID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6ICcnLFxuICAgIHNsYXNoZXM6ICEhbWF0Y2hbMl0sXG4gICAgcmVzdDogbWF0Y2hbM11cbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVsYXRpdmUgVVJMIHBhdGhuYW1lIGFnYWluc3QgYSBiYXNlIFVSTCBwYXRobmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmUgUGF0aG5hbWUgb2YgdGhlIHJlbGF0aXZlIFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlIFBhdGhuYW1lIG9mIHRoZSBiYXNlIFVSTC5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmVzb2x2ZWQgcGF0aG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXNvbHZlKHJlbGF0aXZlLCBiYXNlKSB7XG4gIGlmIChyZWxhdGl2ZSA9PT0gJycpIHJldHVybiBiYXNlO1xuXG4gIHZhciBwYXRoID0gKGJhc2UgfHwgJy8nKS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5jb25jYXQocmVsYXRpdmUuc3BsaXQoJy8nKSlcbiAgICAsIGkgPSBwYXRoLmxlbmd0aFxuICAgICwgbGFzdCA9IHBhdGhbaSAtIDFdXG4gICAgLCB1bnNoaWZ0ID0gZmFsc2VcbiAgICAsIHVwID0gMDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHBhdGhbaV0gPT09ICcuJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXRoW2ldID09PSAnLi4nKSB7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgaWYgKGkgPT09IDApIHVuc2hpZnQgPSB0cnVlO1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1bnNoaWZ0KSBwYXRoLnVuc2hpZnQoJycpO1xuICBpZiAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHBhdGgucHVzaCgnJyk7XG5cbiAgcmV0dXJuIHBhdGguam9pbignLycpO1xufVxuXG4vKipcbiAqIFRoZSBhY3R1YWwgVVJMIGluc3RhbmNlLiBJbnN0ZWFkIG9mIHJldHVybmluZyBhbiBvYmplY3Qgd2UndmUgb3B0ZWQtaW4gdG9cbiAqIGNyZWF0ZSBhbiBhY3R1YWwgY29uc3RydWN0b3IgYXMgaXQncyBtdWNoIG1vcmUgbWVtb3J5IGVmZmljaWVudCBhbmRcbiAqIGZhc3RlciBhbmQgaXQgcGxlYXNlcyBteSBPQ0QuXG4gKlxuICogSXQgaXMgd29ydGggbm90aW5nIHRoYXQgd2Ugc2hvdWxkIG5vdCB1c2UgYFVSTGAgYXMgY2xhc3MgbmFtZSB0byBwcmV2ZW50XG4gKiBjbGFzaGVzIHdpdGggdGhlIGdsb2JhbCBVUkwgaW5zdGFuY2UgdGhhdCBnb3QgaW50cm9kdWNlZCBpbiBicm93c2Vycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbbG9jYXRpb25dIExvY2F0aW9uIGRlZmF1bHRzIGZvciByZWxhdGl2ZSBwYXRocy5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gW3BhcnNlcl0gUGFyc2VyIGZvciB0aGUgcXVlcnkgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpIHtcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmwpKSB7XG4gICAgcmV0dXJuIG5ldyBVcmwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcik7XG4gIH1cblxuICB2YXIgcmVsYXRpdmUsIGV4dHJhY3RlZCwgcGFyc2UsIGluc3RydWN0aW9uLCBpbmRleCwga2V5XG4gICAgLCBpbnN0cnVjdGlvbnMgPSBydWxlcy5zbGljZSgpXG4gICAgLCB0eXBlID0gdHlwZW9mIGxvY2F0aW9uXG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBpID0gMDtcblxuICAvL1xuICAvLyBUaGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgYWxsb3dzIHRoaXMgbW9kdWxlIHR3byBoYXZlIGNvbXBhdGliaWxpdHkgd2l0aFxuICAvLyAyIGRpZmZlcmVudCBBUEk6XG4gIC8vXG4gIC8vIDEuIE5vZGUuanMncyBgdXJsLnBhcnNlYCBhcGkgd2hpY2ggYWNjZXB0cyBhIFVSTCwgYm9vbGVhbiBhcyBhcmd1bWVudHNcbiAgLy8gICAgd2hlcmUgdGhlIGJvb2xlYW4gaW5kaWNhdGVzIHRoYXQgdGhlIHF1ZXJ5IHN0cmluZyBzaG91bGQgYWxzbyBiZSBwYXJzZWQuXG4gIC8vXG4gIC8vIDIuIFRoZSBgVVJMYCBpbnRlcmZhY2Ugb2YgdGhlIGJyb3dzZXIgd2hpY2ggYWNjZXB0cyBhIFVSTCwgb2JqZWN0IGFzXG4gIC8vICAgIGFyZ3VtZW50cy4gVGhlIHN1cHBsaWVkIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdCB2YWx1ZXMgLyBmYWxsLWJhY2tcbiAgLy8gICAgZm9yIHJlbGF0aXZlIHBhdGhzLlxuICAvL1xuICBpZiAoJ29iamVjdCcgIT09IHR5cGUgJiYgJ3N0cmluZycgIT09IHR5cGUpIHtcbiAgICBwYXJzZXIgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICBpZiAocGFyc2VyICYmICdmdW5jdGlvbicgIT09IHR5cGVvZiBwYXJzZXIpIHBhcnNlciA9IHFzLnBhcnNlO1xuXG4gIGxvY2F0aW9uID0gbG9sY2F0aW9uKGxvY2F0aW9uKTtcblxuICAvL1xuICAvLyBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGJlZm9yZSBydW5uaW5nIHRoZSBpbnN0cnVjdGlvbnMuXG4gIC8vXG4gIGV4dHJhY3RlZCA9IGV4dHJhY3RQcm90b2NvbChhZGRyZXNzIHx8ICcnKTtcbiAgcmVsYXRpdmUgPSAhZXh0cmFjdGVkLnByb3RvY29sICYmICFleHRyYWN0ZWQuc2xhc2hlcztcbiAgdXJsLnNsYXNoZXMgPSBleHRyYWN0ZWQuc2xhc2hlcyB8fCByZWxhdGl2ZSAmJiBsb2NhdGlvbi5zbGFzaGVzO1xuICB1cmwucHJvdG9jb2wgPSBleHRyYWN0ZWQucHJvdG9jb2wgfHwgbG9jYXRpb24ucHJvdG9jb2wgfHwgJyc7XG4gIGFkZHJlc3MgPSBleHRyYWN0ZWQucmVzdDtcblxuICAvL1xuICAvLyBXaGVuIHRoZSBhdXRob3JpdHkgY29tcG9uZW50IGlzIGFic2VudCB0aGUgVVJMIHN0YXJ0cyB3aXRoIGEgcGF0aFxuICAvLyBjb21wb25lbnQuXG4gIC8vXG4gIGlmICghZXh0cmFjdGVkLnNsYXNoZXMpIGluc3RydWN0aW9uc1szXSA9IFsvKC4qKS8sICdwYXRobmFtZSddO1xuXG4gIGZvciAoOyBpIDwgaW5zdHJ1Y3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbaV07XG5cbiAgICBpZiAodHlwZW9mIGluc3RydWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhZGRyZXNzID0gaW5zdHJ1Y3Rpb24oYWRkcmVzcyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwYXJzZSA9IGluc3RydWN0aW9uWzBdO1xuICAgIGtleSA9IGluc3RydWN0aW9uWzFdO1xuXG4gICAgaWYgKHBhcnNlICE9PSBwYXJzZSkge1xuICAgICAgdXJsW2tleV0gPSBhZGRyZXNzO1xuICAgIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBwYXJzZSkge1xuICAgICAgaWYgKH4oaW5kZXggPSBhZGRyZXNzLmluZGV4T2YocGFyc2UpKSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbnN0cnVjdGlvblsyXSkge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0cnVjdGlvblsyXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKGluZGV4KTtcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChpbmRleCA9IHBhcnNlLmV4ZWMoYWRkcmVzcykpKSB7XG4gICAgICB1cmxba2V5XSA9IGluZGV4WzFdO1xuICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXguaW5kZXgpO1xuICAgIH1cblxuICAgIHVybFtrZXldID0gdXJsW2tleV0gfHwgKFxuICAgICAgcmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJydcbiAgICApO1xuXG4gICAgLy9cbiAgICAvLyBIb3N0bmFtZSwgaG9zdCBhbmQgcHJvdG9jb2wgc2hvdWxkIGJlIGxvd2VyY2FzZWQgc28gdGhleSBjYW4gYmUgdXNlZCB0b1xuICAgIC8vIGNyZWF0ZSBhIHByb3BlciBgb3JpZ2luYC5cbiAgICAvL1xuICAgIGlmIChpbnN0cnVjdGlvbls0XSkgdXJsW2tleV0gPSB1cmxba2V5XS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLy9cbiAgLy8gQWxzbyBwYXJzZSB0aGUgc3VwcGxpZWQgcXVlcnkgc3RyaW5nIGluIHRvIGFuIG9iamVjdC4gSWYgd2UncmUgc3VwcGxpZWRcbiAgLy8gd2l0aCBhIGN1c3RvbSBwYXJzZXIgYXMgZnVuY3Rpb24gdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBidWlsZC1pblxuICAvLyBwYXJzZXIuXG4gIC8vXG4gIGlmIChwYXJzZXIpIHVybC5xdWVyeSA9IHBhcnNlcih1cmwucXVlcnkpO1xuXG4gIC8vXG4gIC8vIElmIHRoZSBVUkwgaXMgcmVsYXRpdmUsIHJlc29sdmUgdGhlIHBhdGhuYW1lIGFnYWluc3QgdGhlIGJhc2UgVVJMLlxuICAvL1xuICBpZiAoXG4gICAgICByZWxhdGl2ZVxuICAgICYmIGxvY2F0aW9uLnNsYXNoZXNcbiAgICAmJiB1cmwucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLydcbiAgICAmJiAodXJsLnBhdGhuYW1lICE9PSAnJyB8fCBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJycpXG4gICkge1xuICAgIHVybC5wYXRobmFtZSA9IHJlc29sdmUodXJsLnBhdGhuYW1lLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICAvL1xuICAvLyBXZSBzaG91bGQgbm90IGFkZCBwb3J0IG51bWJlcnMgaWYgdGhleSBhcmUgYWxyZWFkeSB0aGUgZGVmYXVsdCBwb3J0IG51bWJlclxuICAvLyBmb3IgYSBnaXZlbiBwcm90b2NvbC4gQXMgdGhlIGhvc3QgYWxzbyBjb250YWlucyB0aGUgcG9ydCBudW1iZXIgd2UncmUgZ29pbmdcbiAgLy8gb3ZlcnJpZGUgaXQgd2l0aCB0aGUgaG9zdG5hbWUgd2hpY2ggY29udGFpbnMgbm8gcG9ydCBudW1iZXIuXG4gIC8vXG4gIGlmICghcmVxdWlyZWQodXJsLnBvcnQsIHVybC5wcm90b2NvbCkpIHtcbiAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZTtcbiAgICB1cmwucG9ydCA9ICcnO1xuICB9XG5cbiAgLy9cbiAgLy8gUGFyc2UgZG93biB0aGUgYGF1dGhgIGZvciB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlxuICAvL1xuICB1cmwudXNlcm5hbWUgPSB1cmwucGFzc3dvcmQgPSAnJztcbiAgaWYgKHVybC5hdXRoKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSB1cmwuYXV0aC5zcGxpdCgnOicpO1xuICAgIHVybC51c2VybmFtZSA9IGluc3RydWN0aW9uWzBdIHx8ICcnO1xuICAgIHVybC5wYXNzd29yZCA9IGluc3RydWN0aW9uWzFdIHx8ICcnO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICAvL1xuICAvLyBUaGUgaHJlZiBpcyBqdXN0IHRoZSBjb21waWxlZCByZXN1bHQuXG4gIC8vXG4gIHVybC5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogVGhpcyBpcyBjb252ZW5pZW5jZSBtZXRob2QgZm9yIGNoYW5naW5nIHByb3BlcnRpZXMgaW4gdGhlIFVSTCBpbnN0YW5jZSB0b1xuICogaW5zdXJlIHRoYXQgdGhleSBhbGwgcHJvcGFnYXRlIGNvcnJlY3RseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFydCAgICAgICAgICBQcm9wZXJ0eSB3ZSBuZWVkIHRvIGFkanVzdC5cbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlICAgICAgICAgIFRoZSBuZXdseSBhc3NpZ25lZCB2YWx1ZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gZm4gIFdoZW4gc2V0dGluZyB0aGUgcXVlcnksIGl0IHdpbGwgYmUgdGhlIGZ1bmN0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIHRvIHBhcnNlIHRoZSBxdWVyeS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gc2V0dGluZyB0aGUgcHJvdG9jb2wsIGRvdWJsZSBzbGFzaCB3aWxsIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkIGZyb20gdGhlIGZpbmFsIHVybCBpZiBpdCBpcyB0cnVlLlxuICogQHJldHVybnMge1VSTH0gVVJMIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc2V0KHBhcnQsIHZhbHVlLCBmbikge1xuICB2YXIgdXJsID0gdGhpcztcblxuICBzd2l0Y2ggKHBhcnQpIHtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAoZm4gfHwgcXMucGFyc2UpKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvcnQnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICghcmVxdWlyZWQodmFsdWUsIHVybC5wcm90b2NvbCkpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWU7XG4gICAgICAgIHVybFtwYXJ0XSA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZSArJzonKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdob3N0bmFtZSc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKHVybC5wb3J0KSB2YWx1ZSArPSAnOicrIHVybC5wb3J0O1xuICAgICAgdXJsLmhvc3QgPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdCc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKC86XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdXJsLnBvcnQgPSB2YWx1ZS5wb3AoKTtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWU7XG4gICAgICAgIHVybC5wb3J0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncHJvdG9jb2wnOlxuICAgICAgdXJsLnByb3RvY29sID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybC5zbGFzaGVzID0gIWZuO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRobmFtZSc6XG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBwYXJ0ID09PSAncGF0aG5hbWUnID8gJy8nIDogJyMnO1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZS5jaGFyQXQoMCkgIT09IGNoYXIgPyBjaGFyICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGlucyA9IHJ1bGVzW2ldO1xuXG4gICAgaWYgKGluc1s0XSkgdXJsW2luc1sxXV0gPSB1cmxbaW5zWzFdXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBwcm9wZXJ0aWVzIGJhY2sgaW4gdG8gYSB2YWxpZCBhbmQgZnVsbCBVUkwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZ2lmeSBPcHRpb25hbCBxdWVyeSBzdHJpbmdpZnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBDb21waWxlZCB2ZXJzaW9uIG9mIHRoZSBVUkwuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHN0cmluZ2lmeSkge1xuICBpZiAoIXN0cmluZ2lmeSB8fCAnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc3RyaW5naWZ5KSBzdHJpbmdpZnkgPSBxcy5zdHJpbmdpZnk7XG5cbiAgdmFyIHF1ZXJ5XG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBwcm90b2NvbCA9IHVybC5wcm90b2NvbDtcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuY2hhckF0KHByb3RvY29sLmxlbmd0aCAtIDEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICB2YXIgcmVzdWx0ID0gcHJvdG9jb2wgKyAodXJsLnNsYXNoZXMgPyAnLy8nIDogJycpO1xuXG4gIGlmICh1cmwudXNlcm5hbWUpIHtcbiAgICByZXN1bHQgKz0gdXJsLnVzZXJuYW1lO1xuICAgIGlmICh1cmwucGFzc3dvcmQpIHJlc3VsdCArPSAnOicrIHVybC5wYXNzd29yZDtcbiAgICByZXN1bHQgKz0gJ0AnO1xuICB9XG5cbiAgcmVzdWx0ICs9IHVybC5ob3N0ICsgdXJsLnBhdGhuYW1lO1xuXG4gIHF1ZXJ5ID0gJ29iamVjdCcgPT09IHR5cGVvZiB1cmwucXVlcnkgPyBzdHJpbmdpZnkodXJsLnF1ZXJ5KSA6IHVybC5xdWVyeTtcbiAgaWYgKHF1ZXJ5KSByZXN1bHQgKz0gJz8nICE9PSBxdWVyeS5jaGFyQXQoMCkgPyAnPycrIHF1ZXJ5IDogcXVlcnk7XG5cbiAgaWYgKHVybC5oYXNoKSByZXN1bHQgKz0gdXJsLmhhc2g7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuVXJsLnByb3RvdHlwZSA9IHsgc2V0OiBzZXQsIHRvU3RyaW5nOiB0b1N0cmluZyB9O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBVUkwgcGFyc2VyIGFuZCBzb21lIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGJlIHVzZWZ1bCBmb3Jcbi8vIG90aGVycyBvciB0ZXN0aW5nLlxuLy9cblVybC5leHRyYWN0UHJvdG9jb2wgPSBleHRyYWN0UHJvdG9jb2w7XG5VcmwubG9jYXRpb24gPSBsb2xjYXRpb247XG5VcmwudHJpbUxlZnQgPSB0cmltTGVmdDtcblVybC5xcyA9IHFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVybDtcbiIsImltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvUGFnZUxheW91dCc7XHJcbmltcG9ydCB7IGdldEJsb2dCeVNsdWcsIGdldEFsbEJsb2dzIH0gZnJvbSAnbGliL2FwaSc7XHJcblxyXG5jb25zdCBCbG9nRGV0YWlsID0gKHtibG9nfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdEaXNwbGF5aW5nIHBhZ2UnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VMYXlvdXQ+XHJcbiAgICAgIDxoMT5IZWxsbyBEZXRhaWwgUGFnZSAtIHtibG9nPy5zbHVnfTwvaDE+XHJcbiAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgYmxvZyBieScsIHBhcmFtcy5zbHVnKVxyXG4gIGNvbnN0IGJsb2cgPSBhd2FpdCBnZXRCbG9nQnlTbHVnKHBhcmFtcy5zbHVnKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtibG9nfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnNvbGUubG9nKCdHZXR0aW5nIHBhdGhzIGZvciBldmVyeSBwYWdlJylcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFt7XHJcbiAgICAgIHBhcmFtczoge3NsdWc6ICdteS1zZWNvbmQtYmxvZyd9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXJhbXM6IHtzbHVnOiAnbXktdGhpcmQtYmxvZyd9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXJhbXM6IHtzbHVnOiAnbXktZmlyc3QtYmxvZyd9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXJhbXM6IHtzbHVnOiAnbXktZm91cnRoLWJsb2cnfVxyXG4gICAgfSxdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=