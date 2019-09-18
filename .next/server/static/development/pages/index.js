module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/BrandDisplayer.js":
/*!*************************************!*\
  !*** ./component/BrandDisplayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrandDisplayer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\BrandDisplayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function BrandDisplayer() {
  return __jsx("div", {
    className: "jsx-978346697" + " " + 'brands',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-978346697" + " " + 'brand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-978346697" + " " + 'brand__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-978346697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-978346697" + " " + 'brand__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "GUCCI")), __jsx("div", {
    className: "jsx-978346697" + " " + 'brand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-978346697" + " " + 'brand__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-978346697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-978346697" + " " + 'brand__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "GUCCI")), __jsx("div", {
    className: "jsx-978346697" + " " + 'brand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-978346697" + " " + 'brand__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-978346697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-978346697" + " " + 'brand__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "GUCCI")), __jsx("div", {
    className: "jsx-978346697" + " " + 'brand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-978346697" + " " + 'brand__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-978346697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-978346697" + " " + 'brand__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "GUCCI")), __jsx("div", {
    className: "jsx-978346697" + " " + 'brand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-978346697" + " " + 'brand__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-978346697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-978346697" + " " + 'brand__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "GUCCI")), __jsx("div", {
    className: "jsx-978346697" + " " + 'brand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-978346697" + " " + 'brand__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-978346697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-978346697" + " " + 'brand__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "GUCCI")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "978346697",
    __self: this
  }, ".brands.jsx-978346697{display:grid;gap:.7em;margin:0 auto;padding:.4em;max-width:400px;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));}.brand.jsx-978346697{margin:0 auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.brand__img.jsx-978346697{position:relative;padding:0 .9rem;box-sizing:border-box;text-align:center;}.brand__img.jsx-978346697 img.jsx-978346697{width:70%;max-width:120px;}.brand__img.jsx-978346697::after{content:\"\";width:100%;height:1px;display:block;margin:0 auto;bottom:0;background:#ababab;}.brand__title.jsx-978346697{margin:.7rem 0;font-size:.9em;font-weight:400;}@media (min-width:660px){.brand.jsx-978346697{border:1px solid #d5d5d5;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXEJyYW5kRGlzcGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDSyxBQUdvQixBQVNDLEFBU0ksQUFNUixBQUlDLEFBU0ksQUFNVyxVQWxCVixDQUlMLEVBNUJGLENBVUUsQ0EyQkksR0FuQkMsSUFqQkYsQUE0QkgsR0FsQkUsQUFnQ2IsQ0FsQkQsSUFhaUIsR0FSRixDQVhRLEVBakJULFVBcUNkLENBUmUsRUEzQkUsT0FnQkUsS0FZVCxJQTNCbUQsS0E0QnpDLElBWnBCLGVBYUEsVUF0QmtCLGlCQUNLLE9BUHZCLHVFQVFvQiw2RkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcQnJhbmREaXNwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJhbmREaXNwbGF5ZXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdicmFuZHMnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnJhbmQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdicmFuZF9faW1nJz5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlOycgYWx0PScnIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nYnJhbmRfX3RpdGxlJz5HVUNDSTwvaDM+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnJhbmQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdicmFuZF9faW1nJz5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlOycgYWx0PScnIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nYnJhbmRfX3RpdGxlJz5HVUNDSTwvaDM+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnJhbmQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdicmFuZF9faW1nJz5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlOycgYWx0PScnIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nYnJhbmRfX3RpdGxlJz5HVUNDSTwvaDM+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnJhbmQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdicmFuZF9faW1nJz5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlOycgYWx0PScnIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nYnJhbmRfX3RpdGxlJz5HVUNDSTwvaDM+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnJhbmQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdicmFuZF9faW1nJz5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlOycgYWx0PScnIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nYnJhbmRfX3RpdGxlJz5HVUNDSTwvaDM+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnJhbmQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdicmFuZF9faW1nJz5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlOycgYWx0PScnIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nYnJhbmRfX3RpdGxlJz5HVUNDSTwvaDM+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdHtgXHJcblx0XHRcdFx0XHQuYnJhbmRzIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0Z2FwOiAuN2VtO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogLjRlbTtcclxuXHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEzMHB4LCAxZnIpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5icmFuZCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmJyYW5kX19pbWcge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgLjlyZW07XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5icmFuZF9faW1nIGltZyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA3MCU7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTIwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuYnJhbmRfX2ltZzo6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxcHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjYWJhYmFiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmJyYW5kX190aXRsZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogLjdyZW0gMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOWVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdC5icmFuZCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2Q1ZDVkNTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\BrandDisplayer.js */"));
}

/***/ }),

/***/ "./component/Carousel.js":
/*!*******************************!*\
  !*** ./component/Carousel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-gesture */ "react-use-gesture");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_gesture__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function Carousel(props) {
  var margin = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.margin, 10);

  var slides = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.slides, 10);

  var width = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.width, 10);

  var height = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.height, 10);

  const [{
    xy
  }, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(() => ({
    xy: [0, 0]
  }));
  const bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_5__["useDrag"])(({
    down,
    local,
    velocity,
    direction
  }) => {
    console.log(direction);
    set({
      xy: down ? [local[0], 0] : [Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width), 0]
    });

    if (!down) {
      local[0] = Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width);

      if (local[0] > 0 || !window.matchMedia('(max-width:1150px)').matches && slides < 5) {
        local[0] = 0;
        set({
          xy: [0, 0]
        });
      } else if (window.matchMedia('(max-width:950px)').matches) {
        console.log('da');

        if (local[0] < window.innerWidth - (width * slides + margin * (slides - 1))) {
          local[0] = window.innerWidth - 10 - (width * slides + margin * (slides - 1));
          console.log(width);
          set({
            xy: [local[0], 0]
          });
        }
      } else {
        if (local[0] < 1150 - (width * slides + margin * (slides - 1))) {
          local[0] = 1150 - 25 - (width * slides + margin * (slides - 1));
          set({
            xy: [local[0], 0]
          });
        }
      } //  window.innerWidth - (width * 5 + margin * 4);

    }
  });
  var styleNeeded = {
    transform: xy.interpolate((x, y) => `translate3D(${x}px,0, 0)`),
    whiteSpace: 'nowrap',
    margin: '0 auto' // display        : slides < 6 ? 'flex' : 'block',
    // justifyContent : slides < 6 ? 'center' : null

  };
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3790363973", [width, height, margin]]]) + " " + 'carousel-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    id: `${slides < 6 ? 'flex' : null}`,
    className: "carousel",
    style: styleNeeded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3790363973",
    dynamic: [width, height, margin],
    __self: this
  }, `.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:${width}px;height:${height}px;background:white;margin-right:${margin}px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:1150px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXENhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGZSxBQUdzQixBQUdELEFBR0YsQUFJUSxBQWFQLEFBSUcsYUFwQmxCLEVBSEEsQ0FIQSxBQTJCQyxLQWpCcUMscUNBQ0MsZ0JBWWQsc0JBWFAsaUJBQzJCLDRDQUNuQixnQkFVekIsU0FUd0Isd0JBQ0Ysc0JBQ0Ysb0JBQ0gscUZBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXENhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IHVzZURyYWcsIHVzZVNjcm9sbCB9IGZyb20gJ3JlYWN0LXVzZS1nZXN0dXJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XHJcblx0dmFyIG1hcmdpbiA9IHBhcnNlSW50KHByb3BzLm1hcmdpbiwgMTApO1xyXG5cdHZhciBzbGlkZXMgPSBwYXJzZUludChwcm9wcy5zbGlkZXMsIDEwKTtcclxuXHR2YXIgd2lkdGggPSBwYXJzZUludChwcm9wcy53aWR0aCwgMTApO1xyXG5cdHZhciBoZWlnaHQgPSBwYXJzZUludChwcm9wcy5oZWlnaHQsIDEwKTtcclxuXHRjb25zdCBbXHJcblx0XHR7IHh5IH0sXHJcblx0XHRzZXRcclxuXHRdID0gdXNlU3ByaW5nKCgpID0+ICh7XHJcblx0XHR4eSA6IFtcclxuXHRcdFx0MCxcclxuXHRcdFx0MFxyXG5cdFx0XVxyXG5cdH0pKTtcclxuXHJcblx0Y29uc3QgYmluZCA9IHVzZURyYWcoKHsgZG93biwgbG9jYWwsIHZlbG9jaXR5LCBkaXJlY3Rpb24gfSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGlyZWN0aW9uKTtcclxuXHRcdHNldCh7XHJcblx0XHRcdHh5IDogZG93blxyXG5cdFx0XHRcdD8gW1xyXG5cdFx0XHRcdFx0XHRsb2NhbFswXSxcclxuXHRcdFx0XHRcdFx0MFxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdDogW1xyXG5cdFx0XHRcdFx0XHRNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKiAobWFyZ2luICsgd2lkdGgpLFxyXG5cdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRdXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoIWRvd24pIHtcclxuXHRcdFx0bG9jYWxbMF0gPSBNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKiAobWFyZ2luICsgd2lkdGgpO1xyXG5cdFx0XHRpZiAobG9jYWxbMF0gPiAwIHx8ICghd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6MTE1MHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNSkpIHtcclxuXHRcdFx0XHRsb2NhbFswXSA9IDA7XHJcblx0XHRcdFx0c2V0KHtcclxuXHRcdFx0XHRcdHh5IDogW1xyXG5cdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6OTUwcHgpJykubWF0Y2hlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYScpO1xyXG5cdFx0XHRcdGlmIChsb2NhbFswXSA8IHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xyXG5cdFx0XHRcdFx0bG9jYWxbMF0gPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHdpZHRoKTtcclxuXHJcblx0XHRcdFx0XHRzZXQoe1xyXG5cdFx0XHRcdFx0XHR4eSA6IFtcclxuXHRcdFx0XHRcdFx0XHRsb2NhbFswXSxcclxuXHRcdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAobG9jYWxbMF0gPCAxMTUwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xyXG5cdFx0XHRcdFx0bG9jYWxbMF0gPSAxMTUwIC0gMjUgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xyXG5cdFx0XHRcdFx0c2V0KHtcclxuXHRcdFx0XHRcdFx0eHkgOiBbXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxbMF0sXHJcblx0XHRcdFx0XHRcdFx0MFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gIHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogNSArIG1hcmdpbiAqIDQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHZhciBzdHlsZU5lZWRlZCA9IHtcclxuXHRcdHRyYW5zZm9ybSAgOiB4eS5pbnRlcnBvbGF0ZSgoeCwgeSkgPT4gYHRyYW5zbGF0ZTNEKCR7eH1weCwwLCAwKWApLFxyXG5cdFx0d2hpdGVTcGFjZSA6ICdub3dyYXAnLFxyXG5cdFx0bWFyZ2luICAgICA6ICcwIGF1dG8nXHJcblxyXG5cdFx0Ly8gZGlzcGxheSAgICAgICAgOiBzbGlkZXMgPCA2ID8gJ2ZsZXgnIDogJ2Jsb2NrJyxcclxuXHRcdC8vIGp1c3RpZnlDb250ZW50IDogc2xpZGVzIDwgNiA/ICdjZW50ZXInIDogbnVsbFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udGFpbmVyJyB7Li4uYmluZCgpfT5cclxuXHRcdFx0PGFuaW1hdGVkLmRpdiBpZD17YCR7c2xpZGVzIDwgNiA/ICdmbGV4JyA6IG51bGx9YH0gY2xhc3NOYW1lPSdjYXJvdXNlbCcgc3R5bGU9e3N0eWxlTmVlZGVkfT5cclxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvYW5pbWF0ZWQuZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIge1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNhcm91c2VsLWNvbnRhaW5lcjpob3ZlciB7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIgOmdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdHdpZHRoOiAke3dpZHRofXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAke2hlaWdodH1weDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAke21hcmdpbn1weDtcclxuXHRcdFx0XHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDExNTBweCkge1xyXG5cdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */
/*@ sourceURL=C:\Users\Estacion\Desktop\Proyectos\jstore\component\Carousel.js */`));
}

/***/ }),

/***/ "./component/Filtros.js":
/*!******************************!*\
  !*** ./component/Filtros.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filtros; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Filtros.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Filtros() {
  return __jsx("div", {
    className: "jsx-2022846838" + " " + 'filtros',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2022846838" + " " + 'filtro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-filter-50.png",
    width: "20px",
    alt: "",
    className: "jsx-2022846838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), " ", __jsx("span", {
    className: "jsx-2022846838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Filtros")), __jsx("div", {
    className: "jsx-2022846838" + " " + 'vista',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-view-stream-50.png",
    width: "20px",
    alt: "",
    className: "jsx-2022846838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), " ", __jsx("span", {
    className: "jsx-2022846838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Filtros")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2022846838",
    __self: this
  }, ".filtros.jsx-2022846838{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;max-width:900px;border:1px solid black;padding:.4em;box-sizing:border-box;margin:0 auto;}.vista.jsx-2022846838{padding:0 .5em;}.vista.jsx-2022846838,.filtro.jsx-2022846838{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXEZpbHRyb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWUsQUFHbUIsQUFVRSxBQUlGLGVBSGQsMkRBVjBCLEFBY04sNkZBQ3BCLElBZFksV0FDSyxnQkFDTyx1QkFDVixhQUNTLHNCQUNSLGNBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcRmlsdHJvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0cm9zKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmlsdHJvcyc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmaWx0cm8nPlxyXG5cdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1maWx0ZXItNTAucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+IDxzcGFuPkZpbHRyb3M8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Zpc3RhJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtdmlldy1zdHJlYW0tNTAucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+IDxzcGFuPkZpbHRyb3M8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LmZpbHRyb3Mge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogOTAwcHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHRcdFx0XHRcdHBhZGRpbmc6IC40ZW07XHJcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC52aXN0YSB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIC41ZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC52aXN0YSxcclxuXHRcdFx0XHQuZmlsdHJvIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Filtros.js */"));
}

/***/ }),

/***/ "./component/MainDisplayer.js":
/*!************************************!*\
  !*** ./component/MainDisplayer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainDisplayer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\MainDisplayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function MainDisplayer() {
  return __jsx("div", {
    className: "jsx-1997168931" + " " + 'main-displayer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    id: "item1",
    className: "jsx-1997168931" + " " + 'main-displayer__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "/static/main/fashion.jpg",
    height: "100%",
    width: "100%",
    alt: "",
    className: "jsx-1997168931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    id: "item2",
    className: "jsx-1997168931" + " " + 'main-displayer__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    id: "item3",
    className: "jsx-1997168931" + " " + 'main-displayer__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1997168931",
    __self: this
  }, ".main-displayer.jsx-1997168931{display:grid;grid-template:1fr 1fr 1fr / 1fr 1fr;height:25rem;}#item1.jsx-1997168931{grid-column:1/3;grid-row:1/3;}#item2.jsx-1997168931{background:rgb(109,104,255);background:linear-gradient(90deg,rgba(109,104,255,1) 0%,rgba(255,86,244,1) 100%);}#item3.jsx-1997168931{background:rgb(228,113,62);background:linear-gradient(90deg,rgba(228,113,62,1) 0%,rgba(209,0,181,1) 100%);}.main-displayer__item.jsx-1997168931{overflow:hidden;}@media (min-width:560px){.main-displayer.jsx-1997168931{grid-template:200px 200px/ 1fr 1fr 1.5fr;}#item1.jsx-1997168931{grid-column:1/3;grid-row:1/3;}}img.jsx-1997168931{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXE1haW5EaXNwbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0ssQUFHb0IsQUFLRyxBQUljLEFBSUQsQUFLYixBQUswQixBQUd6QixBQUtBLGFBOUJtQixHQUt2QixBQWFkLEFBUWUsQ0FLZixVQWxCd0YsQ0FKRSxDQUgxRixBQXFCQyxZQUpBLFFBdEJhLGFBQ2QsNENBWUEsR0FKQSIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGpzdG9yZVxcY29tcG9uZW50XFxNYWluRGlzcGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5EaXNwbGF5ZXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWRpc3BsYXllcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWRpc3BsYXllcl9faXRlbScgaWQ9J2l0ZW0xJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9tYWluL2Zhc2hpb24uanBnJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBhbHQ9JycgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWRpc3BsYXllcl9faXRlbScgaWQ9J2l0ZW0yJyAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbi1kaXNwbGF5ZXJfX2l0ZW0nIGlkPSdpdGVtMycgLz5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0Lm1haW4tZGlzcGxheWVyIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI1cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I2l0ZW0xIHtcclxuXHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW46IDEvMztcclxuXHRcdFx0XHRcdFx0Z3JpZC1yb3c6IDEvMztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNpdGVtMiB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigxMDksIDEwNCwgMjU1KTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEwOSwgMTA0LCAyNTUsIDEpIDAlLCByZ2JhKDI1NSwgODYsIDI0NCwgMSkgMTAwJSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQjaXRlbTMge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMjI4LCAxMTMsIDYyKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyOCwgMTEzLCA2MiwgMSkgMCUsIHJnYmEoMjA5LCAwLCAxODEsIDEpIDEwMCUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluLWRpc3BsYXllcl9faXRlbSB7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcblx0XHRcdFx0XHRcdC5tYWluLWRpc3BsYXllciB7XHJcblx0XHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZTogMjAwcHggMjAwcHgvIDFmciAxZnIgMS41ZnI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0I2l0ZW0xIHtcclxuXHRcdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMS8zO1xyXG5cdFx0XHRcdFx0XHRcdGdyaWQtcm93OiAxLzM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\MainDisplayer.js */"));
}

/***/ }),

/***/ "./component/MarcasDisplay.js":
/*!************************************!*\
  !*** ./component/MarcasDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarcasDisplay; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Carousel */ "./component/Carousel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\MarcasDisplay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function MarcasDisplay() {
  return __jsx(_component_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slides: "4",
    width: "210px",
    margin: "25px",
    height: "98px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/Adidas-1280x720.jpg",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/gucci.png",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/nike.png",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "/static/marcas/Adidas-1280x720.jpg",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2509371334",
    __self: this
  }, "img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXE1hcmNhc0Rpc3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JLLEFBRzhCLHVCQUNELHNCQUNGLG9CQUNGLGtCQUNILDZFQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGpzdG9yZVxcY29tcG9uZW50XFxNYXJjYXNEaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudC9DYXJvdXNlbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJjYXNEaXNwbGF5KCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2Fyb3VzZWwgc2xpZGVzPSc0JyB3aWR0aD0nMjEwcHgnIG1hcmdpbj0nMjVweCcgaGVpZ2h0PSc5OHB4Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9tYXJjYXMvQWRpZGFzLTEyODB4NzIwLmpwZycgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9tYXJjYXMvbmlrZS5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9tYXJjYXMvQWRpZGFzLTEyODB4NzIwLmpwZycgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0Omdsb2JhbChpbWcpIHtcclxuXHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1tb3otdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9DYXJvdXNlbD5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\MarcasDisplay.js */"));
}

/***/ }),

/***/ "./component/Navbar.js":
/*!*****************************!*\
  !*** ./component/Navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Navbar() {
  return __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'main-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1051662459" + " " + 'main-navbar__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Logo"), __jsx("span", {
    className: "jsx-1051662459" + " " + 'main-navbar__icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'categorias',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Categorias"), ' '), __jsx("img", {
    width: "30px",
    src: "/static/icons/menu.svg",
    alt: "",
    className: "jsx-1051662459" + " " + 'icon-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1051662459" + " " + 'secondary-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-1051662459" + " " + 'secondary-navbar__items',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Hombres"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Mujeres"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Ni\xF1os"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Accesorios"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Regalos"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051662459",
    __self: this
  }, ".navbar-container.jsx-1051662459{position:relative;}.navbar.jsx-1051662459{width:100%;background:white;z-index:100;position:fixed;}.navbar.jsx-1051662459 h1.jsx-1051662459{margin:.5rem 0;}.main-navbar.jsx-1051662459{margin:0 auto;max-width:1150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.main-navbar__icon.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.categorias.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding-right:1rem;}.icon-menu.jsx-1051662459{color;}.secondary-navbar.jsx-1051662459{display:none;background:#F2F2F2;}.secondary-navbar__items.jsx-1051662459{max-width:1150px;margin:0 auto;}.secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1150px;width:100%;padding:0;margin:0;max-width:400px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;}.secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459 li.jsx-1051662459{list-style:none;font-size:.8rem;}@media (min-width:560px){.secondary-navbar.jsx-1051662459{display:block;}body{background:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QkssQUFHd0IsQUFJWSxBQU1kLEFBR0QsQUFTZ0IsQUFLakIsQUFNQSxBQUVpQixBQUlkLEFBSUosQUFXRyxBQU1FLEFBR0EsTUE5QkgsS0E1QkcsRUFnQ25CLENBdkJrQixBQThDRSxDQWpEbkIsQ0E2Q2MsQ0FoQkMsQUF1QkksQ0E3REosVUFJZ0IsR0FVakIsQUF5QmQsQ0FKQSxBQW1CZSxRQWpEQyxlQUNoQixtQkFla0IsQUFLRSxBQWdCRixpQkFDVyxXQUNELEdBN0JHLE9BOEJILFNBQ00sZ0JBQ2Usc0NBeEJsRCxBQUtDLG1CQUFDLDBCQVptQixnQ0FnQ2lCLHNCQXpCckMsdUNBTmdCLGVBQ0QsaUJBZ0NELFlBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhci1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXZiYXInPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbWFpbi1uYXZiYXJfX3RpdGxlJz5Mb2dvPC9oMT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWFpbi1uYXZiYXJfX2ljb24nPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcmlhcyc+XHJcblx0XHRcdFx0XHRcdFx0PHA+Q2F0ZWdvcmlhczwvcD57JyAnfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdpY29uLW1lbnUnIHdpZHRoPSczMHB4JyBzcmM9Jy9zdGF0aWMvaWNvbnMvbWVudS5zdmcnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRhcnktbmF2YmFyJz5cclxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPSdzZWNvbmRhcnktbmF2YmFyX19pdGVtcyc+XHJcblx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+SG9tYnJlczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPk11amVyZXM8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5OacOxb3M8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5BY2Nlc29yaW9zPC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+UmVnYWxvczwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhci1jb250YWluZXJ7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHQubmF2YmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5uYXZiYXIgaDF7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogLjVyZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5tYWluLW5hdmJhciB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6MTE1MHB4O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluLW5hdmJhcl9faWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtOmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlclxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0IC5jYXRlZ29yaWFze1xyXG5cdFx0XHRcdFx0XHQgZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHQgYWxpZ24taXRlbTogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHQgcGFkZGluZy1yaWdodDogMXJlbVxyXG5cdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdC5pY29uLW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0LnNlY29uZGFyeS1uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I0YyRjJGMlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnNlY29uZGFyeS1uYXZiYXJfX2l0ZW1ze1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6MTE1MHB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5LW5hdmJhcl9faXRlbXMgdWwge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnktbmF2YmFyX19pdGVtcyB1bCBsaSB7XHJcblx0XHRcdFx0XHRcdGxpc3Qtc3R5bGU6bm9uZTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeS1uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChib2R5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Navbar.js */"));
}

/***/ }),

/***/ "./component/ProductView.js":
/*!**********************************!*\
  !*** ./component/ProductView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Product() {
  return __jsx("div", {
    className: "jsx-377624558" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-377624558" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-377624558" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-377624558" + " " + 'product-banner',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "OFERTA EXCLUSIVA")), __jsx("div", {
    className: "jsx-377624558" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "GUCCI BAG")), __jsx("div", {
    className: "jsx-377624558" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-377624558" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "300.00$"), __jsx("span", {
    className: "jsx-377624558" + " " + 'product-discount__percentage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "-50%")), __jsx("div", {
    className: "jsx-377624558" + " " + 'product-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "150.00$")), __jsx("div", {
    className: "jsx-377624558" + " " + 'product-information',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-377624558" + " " + 'product-information__text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Descripci\xF3n:"), " ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero")), __jsx("div", {
    className: "jsx-377624558" + " " + 'product-information__delivery',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-truck-50.png",
    width: "20px",
    alt: "",
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), ' ', __jsx("span", {
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Env\xEDo internacional")), __jsx("div", {
    className: "jsx-377624558" + " " + 'product-information__reviews',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: "jsx-377624558",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-377624558" + " " + 'product-information__reviews--number',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "128 reviews")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "377624558",
    __self: this
  }, ".product.jsx-377624558{display:grid;background:white;max-width:400px;width:100%;margin:0 auto;font-size:11px;box-sizing:border-box;padding:1em;grid-template:auto /1fr 1fr 1fr;}.product__img.jsx-377624558{grid-row:1/2;padding:.9em;box-sizing:border-box;}.product-title.jsx-377624558 h3.jsx-377624558{margin:0;padding:.5em 0 .7em 0;}.product__description.jsx-377624558,.product__img.jsx-377624558{background:white;width:100%;}.product__description.jsx-377624558{padding-left:1.2em;grid-column:2/4;grid-row:1/3;box-sizing:border-box;}.product-banner.jsx-377624558 span.jsx-377624558{color:white;font-size:.7em;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4em;}.product-discount.jsx-377624558{margin-bottom:.6em;}.product-discount__price.jsx-377624558{font-size:.8em;}.product-discount__percentage.jsx-377624558{margin-left:.8em;color:red;font-size:1em;}.product-price.jsx-377624558{font-size:1.rem;color:black;}.product-information__text.jsx-377624558{display:none;}.product-information__delivery.jsx-377624558{padding:1.5em 0 .8em 0;}.product-information__reviews.jsx-377624558{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product-information__reviews--number.jsx-377624558{color:#ffca28;margin-left:1rem;height:20px;}@media (min-width:660px){.product.jsx-377624558{border:1px solid #d5d5d5;font-size:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3RWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdESyxBQUdvQixBQVdBLEFBS0osQUFLUSxBQUlFLEFBT1AsQUFPTyxBQUdKLEFBR0UsQUFNRCxBQUlILEFBR1UsQUFHVixBQUlDLEFBTVksU0F0REosR0FnQlAsQ0FoQ0UsQUFXSixBQTRDZCxDQVVrQixDQXZCbEIsQ0FTYSxDQTlCRCxBQXdCRCxFQXBCTSxBQWNqQixJQW1CQSxFQWFpQixDQTNETSxDQXFCTSxBQWNkLENBekJmLEFBOEJBLEVBbkRpQixDQWdCakIsQUFpRGEsSUF4Q0MsS0E4Q2IsQ0F4QkQsRUFtQkEsR0FqRVksRUFXWixBQWN1QixLQU84RCxJQS9CdEUsYUF5QmYsQ0F4QmdCLEdBeURJLFlBeERHLHNCQUNWLFlBQ29CLFNBNEJqQixlQUNoQixRQTVCQSxlQXNEQSIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGpzdG9yZVxcY29tcG9uZW50XFxQcm9kdWN0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0X19pbWcnPlxyXG5cdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2d1Y2NpLmpwZWcnIHdpZHRoPScxMDAlJyBhbHQ9JycgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtYmFubmVyJz5cclxuXHRcdFx0XHRcdDxzcGFuPk9GRVJUQSBFWENMVVNJVkE8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxyXG5cdFx0XHRcdFx0PGgzPkdVQ0NJIEJBRzwvaDM+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWRpc2NvdW50Jz5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMC4wMCQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnRfX3BlcmNlbnRhZ2UnPi01MCU8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtcHJpY2UnPlxyXG5cdFx0XHRcdFx0PHNwYW4+MTUwLjAwJDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7LyogaW5mbyAqL31cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbl9fdGV4dCc+XHJcblx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdDxiPkRlc2NyaXBjacOzbjo8L2I+IGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteVxyXG5cdFx0XHRcdFx0XHRcdGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVyb1xyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWluZm9ybWF0aW9uX19kZWxpdmVyeSc+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC10cnVjay01MC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz57JyAnfVxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj5FbnbDrW8gaW50ZXJuYWNpb25hbDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mb3JtYXRpb25fX3Jldmlld3MnPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtc3Rhci1maWxsZWQtNDgucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1zdGFyLWZpbGxlZC00OC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXN0YXItZmlsbGVkLTQ4LnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtc3Rhci1maWxsZWQtNDgucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1zdGFyLWZpbGxlZC00OC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz5cclxuXHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbl9fcmV2aWV3cy0tbnVtYmVyJz4xMjggcmV2aWV3czwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxZW07XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGU6IGF1dG8gLzFmciAxZnIgMWZyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2ltZyB7XHJcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxLzI7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IC45ZW07XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC10aXRsZSBoMyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogLjVlbSAwIC43ZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0X19kZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdC5wcm9kdWN0X19pbWcge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9fZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEuMmVtO1xyXG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMi80O1xyXG5cdFx0XHRcdFx0XHRncmlkLXJvdzogMS8zO1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWJhbm5lciBzcGFuIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC43ZW07XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigxODEsIDAsIDE5MSk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxODEsIDAsIDE5MSwgMSkgMCUsIHJnYmEoMCwgOCwgMTgwLCAxKSAxMDAlKTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAuNGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAuNmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3ByaWNlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3BlcmNlbnRhZ2Uge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLjhlbTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcclxuXHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtcHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEucmVtO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogYmxhY2s7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1pbmZvcm1hdGlvbl9fdGV4dCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1pbmZvcm1hdGlvbl9fZGVsaXZlcnkge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxLjVlbSAwIC44ZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzLS1udW1iZXIge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmY2EyODtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDFyZW07XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xyXG5cdFx0XHRcdFx0XHQucHJvZHVjdCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2Q1ZDVkNTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gLnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0XHQvLyBcdG1heC13aWR0aDogOTAwcHg7XHJcblx0XHRcdFx0XHRcdC8vIFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdFx0Ly8gLnByb2R1Y3RfX2ltZyB7XHJcblx0XHRcdFx0XHRcdC8vIFx0cGFkZGluZzogMXJlbTtcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0XHQvLyAucHJvZHVjdF9fZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0XHQvLyBcdHBhZGRpbmctbGVmdDogN3JlbTtcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0XHQvLyAucHJvZHVjdC1pbmZvcm1hdGlvbl9fdGV4dCB7XHJcblx0XHRcdFx0XHRcdC8vIFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductView.js */"));
}

/***/ }),

/***/ "./component/ProductViewMini.js":
/*!**************************************!*\
  !*** ./component/ProductViewMini.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductViewMini; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductViewMini.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ProductViewMini() {
  return __jsx("div", {
    className: "jsx-2370790873" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2370790873" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-2370790873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2370790873" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2370790873" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2370790873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "GUCCI BAG")), __jsx("div", {
    className: "jsx-2370790873" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2370790873" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "300$"), __jsx("span", {
    className: "jsx-2370790873" + " " + 'product-discount__percentage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "-50%")), __jsx("div", {
    className: "jsx-2370790873" + " " + 'product-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2370790873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "150$"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2370790873",
    __self: this
  }, ".product.jsx-2370790873{display:grid;grid-template:1fr 1fr 1fr/1fr;}.product__img.jsx-2370790873{grid-row:1/3;}.product-title.jsx-2370790873 h3.jsx-2370790873{border-bottom:1px solid #c5c5c5;margin:0;padding:.2rem 0;}.product__description.jsx-2370790873,.product__img.jsx-2370790873{background:white;width:100%;}.product__description.jsx-2370790873{padding-left:.4rem;box-sizing:border-box;}.product-banner.jsx-2370790873 span.jsx-2370790873{color:white;font-size:.7rem;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4rem;}.product-discount.jsx-2370790873{margin-bottom:.5rem;}.product-discount__price.jsx-2370790873{font-size:.8rem;}.product-discount__percentage.jsx-2370790873{margin-left:.4rem;color:red;font-size:.9rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3RWaWV3TWluaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkssQUFHb0IsQUFJQSxBQUdtQixBQU1mLEFBSUUsQUFLUCxBQU9RLEFBR0osQUFHRSxZQVpGLENBdEJjLEFBSS9CLEdBNEJBLENBbkJZLENBc0JELENBbEJZLENBWXZCLFFBZkEsQUFTNkIsQUFjWixJQTlCUCxTQUNPLEFBVWpCLEVBakJBLENBcUNBLFVBZHFGLEdBZnJGLHlFQWdCaUIsZ0JBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3RWaWV3TWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Vmlld01pbmkoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RfX2ltZyc+XHJcblx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RfX2Rlc2NyaXB0aW9uJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+XHJcblx0XHRcdFx0XHQ8aDM+R1VDQ0kgQkFHPC9oMz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtYmFubmVyJz5cclxuXHRcdFx0XHRcdDxzcGFuPk9GRVJUQSBFWENMVVNJVkE8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWRpc2NvdW50Jz5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnRfX3BlcmNlbnRhZ2UnPi01MCU8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtcHJpY2UnPlxyXG5cdFx0XHRcdFx0PHNwYW4+MTUwJDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIvMWZyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2ltZyB7XHJcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxLzM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC10aXRsZSBoMyB7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzVjNWM1O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IC4ycmVtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9fZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHQucHJvZHVjdF9faW1nIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2Rlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAuNHJlbTtcclxuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucHJvZHVjdC1iYW5uZXIgc3BhbiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuN3JlbTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDE4MSwgMCwgMTkxKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE4MSwgMCwgMTkxLCAxKSAwJSwgcmdiYSgwLCA4LCAxODAsIDEpIDEwMCUpO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIC40cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWRpc2NvdW50X19wcmljZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudGFnZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAuNHJlbTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcclxuXHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductViewMini.js */"));
}

/***/ }),

/***/ "./component/Productos.js":
/*!********************************!*\
  !*** ./component/Productos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Productos; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductView */ "./component/ProductView.js");
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Productos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Productos() {
  return __jsx("div", {
    className: "jsx-557563258" + " " + 'productos',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "557563258",
    __self: this
  }, ".productos.jsx-557563258{display:grid;gap:1em;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3Rvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhSyxBQUdrQyxhQUNKLFFBRWQsMERBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcUHJvZHVjdG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RWaWV3IGZyb20gJy4vUHJvZHVjdFZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdG9zKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdG9zJz5cclxuXHRcdFx0PFByb2R1Y3RWaWV3IC8+XHJcblx0XHRcdDxQcm9kdWN0VmlldyAvPlxyXG5cdFx0XHQ8UHJvZHVjdFZpZXcgLz5cclxuXHRcdFx0PFByb2R1Y3RWaWV3IC8+XHJcblx0XHRcdDxQcm9kdWN0VmlldyAvPlxyXG5cdFx0XHQ8UHJvZHVjdFZpZXcgLz5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Rvc3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMWVtIDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwxZnIpKVxyXG4gICAgICAgICAgICAgICAgYH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Productos.js */"));
}

/***/ }),

/***/ "./component/Selector.js":
/*!*******************************!*\
  !*** ./component/Selector.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selector; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Selector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Selector() {
  return __jsx("div", {
    className: "jsx-3752031212" + " " + 'selector',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3752031212" + " " + 'drop-bar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("select", {
    name: "product",
    id: "product",
    className: "jsx-3752031212",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("option", {
    value: "zapatillas",
    className: "jsx-3752031212",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "zapatillas"), __jsx("option", {
    value: "polos",
    className: "jsx-3752031212",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "polos"), __jsx("option", {
    value: "carteras",
    className: "jsx-3752031212",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "carteras"), __jsx("option", {
    value: "pantalones",
    className: "jsx-3752031212",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "pantalones"))), __jsx("div", {
    className: "jsx-3752031212" + " " + 'filter',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3752031212",
    __self: this
  }, ".selector.jsx-3752031212{padding:2em 2em 0 2em;}.drop-bar.jsx-3752031212{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}select.jsx-3752031212{width:100%;font-size:1.3em;padding:.5em;font-weight:300;margin:0 auto;max-width:900px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVlLEFBRzRCLEFBR1QsQUFJRixXQUNLLFdBUGpCLEtBUWMsYUFDRyxnQkFDRixjQUNFLElBUk8sWUFTeEIsdUZBUkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcU2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0b3IoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3Rvcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wLWJhcic+XHJcblx0XHRcdFx0PHNlbGVjdCBuYW1lPSdwcm9kdWN0JyBpZD0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSd6YXBhdGlsbGFzJz56YXBhdGlsbGFzPC9vcHRpb24+XHJcblx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdwb2xvcyc+cG9sb3M8L29wdGlvbj5cclxuXHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J2NhcnRlcmFzJz5jYXJ0ZXJhczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0ncGFudGFsb25lcyc+cGFudGFsb25lczwvb3B0aW9uPlxyXG5cdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXInIC8+XHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQuc2VsZWN0b3Ige1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMmVtIDJlbSAwIDJlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmRyb3AtYmFyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2VsZWN0IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjNlbTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IC41ZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDkwMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Selector.js */"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Carousel */ "./component/Carousel.js");
/* harmony import */ var _component_MarcasDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/MarcasDisplay */ "./component/MarcasDisplay.js");
/* harmony import */ var _component_Productos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Productos */ "./component/Productos.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_MainDisplayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/MainDisplayer */ "./component/MainDisplayer.js");
/* harmony import */ var _component_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Navbar */ "./component/Navbar.js");
/* harmony import */ var _component_ProductView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/ProductView */ "./component/ProductView.js");
/* harmony import */ var _component_ProductViewMini__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/ProductViewMini */ "./component/ProductViewMini.js");
/* harmony import */ var _component_BrandDisplayer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/BrandDisplayer */ "./component/BrandDisplayer.js");
/* harmony import */ var _component_Selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/Selector */ "./component/Selector.js");
/* harmony import */ var _component_Filtros__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/Filtros */ "./component/Filtros.js");
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












class index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-837663333",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: "jsx-837663333",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), __jsx(_component_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-837663333" + " " + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_component_BrandDisplayer__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx(_component_Selector__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(_component_Filtros__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx(_component_Productos__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "837663333",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-837663333{max-width:1150px;width:100%;padding:0;padding-top:80px;overflow:hidden;margin:0 auto 4rem;}.container.jsx-837663333>div.jsx-837663333{margin-bottom:2.5rem;}.tiendas.jsx-837663333{padding-left:10px;}h2.jsx-837663333{font-size:1rem;font-weight:400;text-transform:uppercase;}.ofertas.jsx-837663333{padding-left:10px;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}hr{border-width:0px;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-837663333{padding-top:150px;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQixBQUVnRyxBQUd4RSxBQVFJLEFBR0gsQUFJSCxBQUtHLEFBSUMsQUFNTCxBQUdHLEFBSUgsQUFJSSxBQUdDLEFBR08sY0FoQjNCLENBZmlCLEVBZkwsQUFpQ1osQUFRQyxDQTlCRCxBQVNBLEFBd0JDLENBcEJTLEVBaEJWLElBdUNDLEdBOUNVLEFBd0JRLEdBVE8sT0FkUixRQXdCb0IsU0F2QnJCLENBY2pCLGVBYm9CLEdBaUNLLFFBVnpCLFFBdEJBLG1GQWlDQyIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGpzdG9yZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudC9DYXJvdXNlbCc7XHJcbmltcG9ydCBNYXJjYXNEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudC9NYXJjYXNEaXNwbGF5JztcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdG9zJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE1haW5EaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50L01haW5EaXNwbGF5ZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudC9OYXZiYXInO1xyXG5pbXBvcnQgUHJvZHVjdFZpZXcgZnJvbSAnLi4vY29tcG9uZW50L1Byb2R1Y3RWaWV3JztcclxuaW1wb3J0IFByb2R1Y3RWaWV3TWluaSBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdFZpZXdNaW5pJztcclxuaW1wb3J0IEJyYW5kRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudC9CcmFuZERpc3BsYXllcic7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnQvU2VsZWN0b3InO1xyXG5pbXBvcnQgRmlsdHJvcyBmcm9tICcuLi9jb21wb25lbnQvRmlsdHJvcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XHJcblx0XHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcdDxOYXZiYXIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxCcmFuZERpc3BsYXllciAvPlxyXG5cdFx0XHRcdFx0PFNlbGVjdG9yIC8+XHJcblx0XHRcdFx0XHQ8RmlsdHJvcyAvPlxyXG5cdFx0XHRcdFx0PFByb2R1Y3RvcyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTE1MHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDgwcHg7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDRyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuY29udGFpbmVyID4gZGl2IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpZW5kYXMge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQub2ZlcnRhcyB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjNmMztcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NDY0NjQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKGhyKSB7XHJcblx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDogMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdDpnbG9iYWwoI2ZsZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\index.js */"));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Estacion\Desktop\Proyectos\jstore\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-use-gesture":
/*!************************************!*\
  !*** external "react-use-gesture" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map