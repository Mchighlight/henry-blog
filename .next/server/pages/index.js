module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AuthorIntro.js":
/*!***********************************!*\
  !*** ./components/AuthorIntro.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\AuthorIntro.js";


const AuthorIntro = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "8",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-4 admin-intro",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        roundedCircle: true,
        width: 64,
        height: 64,
        className: "mr-3",
        src: "https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/122230870_1525341504320442_1192175532603677531_o.jpg?_nc_cat=103&ccb=2&_nc_sid=85a577&_nc_ohc=xpys-tHrXZsAX8ccdt4&_nc_ht=scontent.fnyc1-1.fna&tp=6&oh=fde97c3aebcd46bf7a1d1f3bf7cbc27b&oe=5FE0933A",
        alt: "Generic placeholder"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Media"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "font-weight-bold mb-0",
          children: "Hello Friends,"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "welcome-text",
          children: "My name is Filip Jerga and I am an experienced software engineer and freelance developer. and this is my blog page."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (AuthorIntro);

/***/ }),

/***/ "./components/CardItem.js":
/*!********************************!*\
  !*** ./components/CardItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

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
            children: "Placeholder Author"
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
          className: "font-weight-bold mb-1",
          children: author === null || author === void 0 ? void 0 : author.name
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

/* harmony default export */ __webpack_exports__["default"] = (CardItem);

/***/ }),

/***/ "./components/CardListItem.js":
/*!************************************!*\
  !*** ./components/CardListItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\CardListItem.js";


const CardListItem = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: `fj-card fj-card-list`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-body-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        className: "d-flex flex-row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: 'https://via.placeholder.com/150',
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
            children: "Placeholder Author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
            className: "card-date",
            children: "Placeholder Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
          className: "card-main-title",
          children: "Placeholder Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
          children: "Placehodler Subtitle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      className: "card-button",
      children: "Read More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CardListItem);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\Navbar.js";


const BlogNavbar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    className: "fj-navbar fj-nav-base",
    bg: "transparent",
    expand: "lg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      className: "fj-navbar-brand",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        children: "Hung-Chih Huang"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        className: "ml-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
          className: "fj-navbar-item fj-navbar-link",
          href: "/",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BlogNavbar);

/***/ }),

/***/ "./components/PageLayout.js":
/*!**********************************!*\
  !*** ./components/PageLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\components\\PageLayout.js";


function PageLayout({
  children,
  className
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `page-wrapper ${className}`,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "page-footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "courses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), ' | ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), ' | ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getAllBlogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBlogs", function() { return getAllBlogs; });
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

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PageLayout */ "./components/PageLayout.js");
/* harmony import */ var components_AuthorIntro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AuthorIntro */ "./components/AuthorIntro.js");
/* harmony import */ var components_CardItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CardItem */ "./components/CardItem.js");
/* harmony import */ var components_CardListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/CardListItem */ "./components/CardListItem.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/api */ "./lib/api.js");

var _jsxFileName = "C:\\Users\\Mchig\\Desktop\\Portfolio\\henryblog\\pages\\index.js";







function Home({
  blogs
}) {
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
          author: blog.author,
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

async function getStaticProps() {
  const randomNumber = Math.random();
  const blogs = await Object(lib_api__WEBPACK_IMPORTED_MODULE_7__["getAllBlogs"])();
  return {
    props: {
      blogs,
      randomNumber
    }
  };
}

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRob3JJbnRyby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZExpc3RJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBpLmpzIiwid2VicGFjazovLy8uL2xpYi9zYW5pdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNhbml0eS9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkF1dGhvckludHJvIiwiQ2FyZEl0ZW0iLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW1hZ2UiLCJkYXRlIiwiYXV0aG9yIiwiYXZhdGFyIiwibmFtZSIsIkNhcmRMaXN0SXRlbSIsIkJsb2dOYXZiYXIiLCJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJibG9nRmllbGRzIiwiZ2V0QWxsQmxvZ3MiLCJyZXN1bHRzIiwiY2xpZW50IiwiZmV0Y2giLCJvcHRpb25zIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfREFUQVNFVF9OQU1FIiwicHJvamVjdElkIiwiU0FOSVRZX1BST0pFQ1RfSUQiLCJ1c2VDZG4iLCJzYW5pdHlDbGllbnQiLCJIb21lIiwiYmxvZ3MiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibWFwIiwiYmxvZyIsImNvdmVySW1hZ2UiLCJzbHVn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RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyxtREFBRDtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBSUlBLEtBQUssQ0FBQ0ksR0FBTixDQUFVQyxJQUFJLGlCQUNkLHFFQUFDLG1EQUFEO0FBQXFCLFVBQUUsRUFBQyxHQUF4QjtBQUFBLCtCQUNFLHFFQUFDLDJEQUFEO0FBQ0UsZ0JBQU0sRUFBRUEsSUFBSSxDQUFDNUIsTUFEZjtBQUVFLGVBQUssRUFBRTRCLElBQUksQ0FBQ2hDLEtBRmQ7QUFHRSxrQkFBUSxFQUFFZ0MsSUFBSSxDQUFDL0IsUUFIakI7QUFJRSxjQUFJLEVBQUUrQixJQUFJLENBQUM3QixJQUpiO0FBS0UsZUFBSyxFQUFFNkIsSUFBSSxDQUFDQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVRCxJQUFJLENBQUNFLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJELEMsQ0FFRDtBQUNBO0FBQ0E7O0FBQ08sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFyQjtBQUNBLFFBQU1YLEtBQUssR0FBRyxNQUFNZCwyREFBVyxFQUEvQjtBQUNBLFNBQU87QUFDTDBCLFNBQUssRUFBRTtBQUNMWixXQURLO0FBRUxTO0FBRks7QUFERixHQUFQO0FBTUQsQzs7Ozs7Ozs7Ozs7QUN0REQsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgUm93LCBDb2wsIE1lZGlhLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBBdXRob3JJbnRybyA9ICgpID0+XHJcbiAgPFJvdz5cclxuICAgIDxDb2wgbWQ9XCI4XCI+XHJcbiAgICAgIHsvKiBBVVRIT1IgSU5UUk8gU1RBUlRTICovfVxyXG4gICAgICA8TWVkaWEgY2xhc3NOYW1lPVwibWItNCBhZG1pbi1pbnRyb1wiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgcm91bmRlZENpcmNsZVxyXG4gICAgICAgICAgd2lkdGg9ezY0fVxyXG4gICAgICAgICAgaGVpZ2h0PXs2NH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTNcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5mbnljMS0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvcDk2MHg5NjAvMTIyMjMwODcwXzE1MjUzNDE1MDQzMjA0NDJfMTE5MjE3NTUzMjYwMzY3NzUzMV9vLmpwZz9fbmNfY2F0PTEwMyZjY2I9MiZfbmNfc2lkPTg1YTU3NyZfbmNfb2hjPXhweXMtdEhyWFpzQVg4Y2NkdDQmX25jX2h0PXNjb250ZW50LmZueWMxLTEuZm5hJnRwPTYmb2g9ZmRlOTdjM2FlYmNkNDZiZjdhMWQxZjNiZjdjYmMyN2Imb2U9NUZFMDkzM0FcIlxyXG4gICAgICAgICAgYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWVkaWEuQm9keT5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG1iLTBcIj5IZWxsbyBGcmllbmRzLDwvaDU+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3ZWxjb21lLXRleHRcIj5cclxuICAgICAgICAgIE15IG5hbWUgaXMgRmlsaXAgSmVyZ2EgYW5kIEkgYW0gYW4gZXhwZXJpZW5jZWQgc29mdHdhcmUgZW5naW5lZXIgYW5kIGZyZWVsYW5jZSBkZXZlbG9wZXIuXHJcbiAgICAgICAgICBhbmQgdGhpcyBpcyBteSBibG9nIHBhZ2UuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9NZWRpYS5Cb2R5PlxyXG4gICAgICA8L01lZGlhPlxyXG4gICAgICB7LyogQVVUSE9SIElOVFJPIEVORFMgKi99XHJcbiAgICA8L0NvbD5cclxuICA8L1Jvdz5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhvckludHJvOyIsImltcG9ydCB7IENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgQ2FyZEl0ZW0gPSAoe3RpdGxlLCBzdWJ0aXRsZSwgaW1hZ2UsIGRhdGUsIGF1dGhvcn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtgZmotY2FyZGB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS13cmFwcGVyXCI+XHJcbiAgICAgICAgPENhcmQuSGVhZGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXthdXRob3I/LmF2YXRhciB8fCAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MCd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIG1yLTNcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCIvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtYi0xXCI+UGxhY2Vob2xkZXIgQXV0aG9yPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT1cImNhcmQtZGF0ZVwiPntkYXRlfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXcgb3ZlcmxheVwiPlxyXG4gICAgICAgICAgPENhcmQuSW1nXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbWItMVwiPnthdXRob3I/Lm5hbWV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgPENhcmQuVGV4dD57c3VidGl0bGV9PC9DYXJkLlRleHQ+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLWJ1dHRvblwiPlxyXG4gICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSXRlbTsiLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IENhcmRMaXN0SXRlbSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtgZmotY2FyZCBmai1jYXJkLWxpc3RgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHktd3JhcHBlclwiPlxyXG4gICAgICAgIDxDYXJkLkhlYWRlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17J2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBtci0zXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICAgIGFsdD1cImF2YXRhclwiLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG1iLTFcIj5QbGFjZWhvbGRlciBBdXRob3I8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJjYXJkLWRhdGVcIj5QbGFjZWhvbGRlciBEYXRlPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cImNhcmQtbWFpbi10aXRsZVwiPlBsYWNlaG9sZGVyIFRpdGxlPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgPENhcmQuVGV4dD5QbGFjZWhvZGxlciBTdWJ0aXRsZTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWJ1dHRvblwiPlxyXG4gICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkTGlzdEl0ZW07IiwiaW1wb3J0IHsgTmF2YmFyLCBOYXYgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgQmxvZ05hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhclxyXG4gICAgICBjbGFzc05hbWU9XCJmai1uYXZiYXIgZmotbmF2LWJhc2VcIlxyXG4gICAgICBiZz1cInRyYW5zcGFyZW50XCJcclxuICAgICAgZXhwYW5kPVwibGdcIiA+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPVwiZmotbmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5IdW5nLUNoaWggSHVhbmc8L2E+XHJcbiAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmotbmF2YmFyLWl0ZW0gZmotbmF2YmFyLWxpbmtcIlxyXG4gICAgICAgICAgICBocmVmPScvJz5Ib21lXHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgIDwvTmF2YmFyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ05hdmJhcjsiLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VMYXlvdXQoe2NoaWxkcmVuLCBjbGFzc05hbWV9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYWdlLXdyYXBwZXIgJHtjbGFzc05hbWV9YH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwYWdlLWZvb3RlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPmNvdXJzZXM8L2E+eycgfCAnfVxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5naXRodWI8L2E+eycgfCAnfVxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5mYWNlYm9vazwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn0iLCJpbXBvcnQgY2xpZW50IGZyb20gJy4vc2FuaXR5JztcclxuXHJcblxyXG5jb25zdCBibG9nRmllbGRzID0gYFxyXG4gIHRpdGxlLFxyXG4gIHN1YnRpdGxlLFxyXG4gICdzbHVnJzogc2x1Zy5jdXJyZW50LFxyXG4gIGRhdGUsXHJcbiAgJ2F1dGhvcic6IGF1dGhvci0+e25hbWUsICdhdmF0YXInOiBhdmF0YXIuYXNzZXQtPnVybH0sXHJcbiAgJ2NvdmVySW1hZ2UnOiBjb3ZlckltYWdlLmFzc2V0LT51cmxcclxuICBcclxuYFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEJsb2dzKCkge1xyXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnRcclxuICAgIC5mZXRjaChgKltfdHlwZSA9PSBcImJsb2dcIl17JHtibG9nRmllbGRzfX1gKTtcclxuICByZXR1cm4gcmVzdWx0cztcclxufSIsImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5TQU5JVFlfREFUQVNFVF9OQU1FLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuU0FOSVRZX1BST0pFQ1RfSUQsXHJcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgLy8gdXNlQ2RuID09PSB0cnVlLCBnaXZlcyB5b3UgZmFzdCByZXNwb25zZSwgaXQgd2lsbCBnZXQgeW91XHJcbiAgLy8gY2FjaGVkIGRhdGFcclxuICAvLyB1c2VDZG4gPT09IGZhbHNlLCBnaXZlIHlvdSBsaXR0bGUgYml0IHNsb3dlciByZXNwb25zZSwgYnV0XHJcbiAgLy8gbGF0ZXN0IGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KG9wdGlvbnMpOyIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9QYWdlTGF5b3V0JztcclxuaW1wb3J0IEF1dGhvckludHJvIGZyb20gJ2NvbXBvbmVudHMvQXV0aG9ySW50cm8nO1xyXG5pbXBvcnQgQ2FyZEl0ZW0gZnJvbSAnY29tcG9uZW50cy9DYXJkSXRlbSc7XHJcbmltcG9ydCBDYXJkTGlzdEl0ZW0gZnJvbSAnY29tcG9uZW50cy9DYXJkTGlzdEl0ZW0nO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWxsQmxvZ3MgfSBmcm9tICdsaWIvYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2Jsb2dzfSkge1xyXG4gIGNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCcpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYmxvZ3MpO1xyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUxheW91dD5cclxuICAgICAgPEF1dGhvckludHJvIC8+XHJcbiAgICAgIDxoci8+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWItNVwiPlxyXG4gICAgICAgIHsvKiA8Q29sIG1kPVwiMTBcIj5cclxuICAgICAgICAgIDxDYXJkTGlzdEl0ZW0gLz5cclxuICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgeyBibG9ncy5tYXAoYmxvZyA9PlxyXG4gICAgICAgICAgPENvbCBrZXk9e2Jsb2cuc2x1Z30gbWQ9XCI0XCI+XHJcbiAgICAgICAgICAgIDxDYXJkSXRlbVxyXG4gICAgICAgICAgICAgIGF1dGhvcj17YmxvZy5hdXRob3J9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgc3VidGl0bGU9e2Jsb2cuc3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgZGF0ZT17YmxvZy5kYXRlfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtibG9nLmNvdmVySW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9QYWdlTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZHVyaW5nIHRoZSBidWlsZCAoYnVpbGQgdGltZSlcclxuLy8gUHJvdmlkZXMgcHJvcHMgdG8geW91ciBwYWdlXHJcbi8vIEl0IHdpbGwgY3JlYXRlIHN0YXRpYyBwYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgZ2V0QWxsQmxvZ3MoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYmxvZ3MsXHJcbiAgICAgIHJhbmRvbU51bWJlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=