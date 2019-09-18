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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navbar() {
  return __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'main-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1051662459" + " " + 'main-navbar__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Logo"))), __jsx("span", {
    className: "jsx-1051662459" + " " + 'main-navbar__icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'categorias',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Categorias"), ' '), __jsx("img", {
    width: "30px",
    src: "/static/icons/menu.svg",
    alt: "",
    className: "jsx-1051662459" + " " + 'icon-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1051662459" + " " + 'secondary-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-1051662459" + " " + 'secondary-navbar__items',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Hombres"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Mujeres"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Ni\xF1os"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Accesorios"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Regalos"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051662459",
    __self: this
  }, ".navbar-container.jsx-1051662459{position:relative;}.navbar.jsx-1051662459{width:100%;background:white;z-index:100;position:fixed;}.navbar.jsx-1051662459 h1.jsx-1051662459{margin:.5rem 0;}.main-navbar.jsx-1051662459{margin:0 auto;max-width:1150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.main-navbar__icon.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.categorias.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding-right:1rem;}.icon-menu.jsx-1051662459{color;}.secondary-navbar.jsx-1051662459{display:none;background:#F2F2F2;}.secondary-navbar__items.jsx-1051662459{max-width:1150px;margin:0 auto;}.secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1150px;width:100%;padding:0;margin:0;max-width:400px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;}.secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459 li.jsx-1051662459{list-style:none;font-size:.8rem;}@media (min-width:560px){.secondary-navbar.jsx-1051662459{display:block;}body{background:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ0ssQUFHd0IsQUFJWSxBQU1kLEFBR0QsQUFTZ0IsQUFLakIsQUFNQSxBQUVpQixBQUlkLEFBSUosQUFXRyxBQU1FLEFBR0EsTUE5QkgsS0E1QkcsRUFnQ25CLENBdkJrQixBQThDRSxDQWpEbkIsQ0E2Q2MsQ0FoQkMsQUF1QkksQ0E3REosVUFJZ0IsR0FVakIsQUF5QmQsQ0FKQSxBQW1CZSxRQWpEQyxlQUNoQixtQkFla0IsQUFLRSxBQWdCRixpQkFDVyxXQUNELEdBN0JHLE9BOEJILFNBQ00sZ0JBQ2Usc0NBeEJsRCxBQUtDLG1CQUFDLDBCQVptQixnQ0FnQ2lCLHNCQXpCckMsdUNBTmdCLGVBQ0QsaUJBZ0NELFlBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4tbmF2YmFyJz5cclxuXHRcdFx0XHRcdDxMaW5rIHJvdXRlPScvJz5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbWFpbi1uYXZiYXJfX3RpdGxlJz5Mb2dvPC9oMT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdtYWluLW5hdmJhcl9faWNvbic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWFzJz5cclxuXHRcdFx0XHRcdFx0XHQ8cD5DYXRlZ29yaWFzPC9wPnsnICd9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2ljb24tbWVudScgd2lkdGg9JzMwcHgnIHNyYz0nL3N0YXRpYy9pY29ucy9tZW51LnN2ZycgYWx0PScnIC8+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlY29uZGFyeS1uYXZiYXInPlxyXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9J3NlY29uZGFyeS1uYXZiYXJfX2l0ZW1zJz5cclxuXHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5Ib21icmVzPC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+TXVqZXJlczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPk5pw7FvczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPkFjY2Vzb3Jpb3M8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5SZWdhbG9zPC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWNvbnRhaW5lcntcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm5hdmJhciBoMXtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAuNXJlbSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm1haW4tbmF2YmFyIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDoxMTUwcHg7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW4tbmF2YmFyX19pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW06Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQgLmNhdGVnb3JpYXN7XHJcblx0XHRcdFx0XHRcdCBkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdCBhbGlnbi1pdGVtOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdCBwYWRkaW5nLXJpZ2h0OiAxcmVtXHJcblx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0Lmljb24tbWVudXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHQuc2Vjb25kYXJ5LW5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojRjJGMkYyXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuc2Vjb25kYXJ5LW5hdmJhcl9faXRlbXN7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDoxMTUwcHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnktbmF2YmFyX19pdGVtcyB1bCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeS1uYXZiYXJfX2l0ZW1zIHVsIGxpIHtcclxuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZTpub25lO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5LW5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGJvZHkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Navbar.js */"));
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

function Product(props) {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-banner',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "OFERTA EXCLUSIVA")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "GUCCI BAG")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "300.00$"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount__percentage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "-50%")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "150.00$")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.wrap ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Descripci\xF3n:"), " ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero")) : null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__delivery',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-truck-50.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), ' ', __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Env\xEDo internacional")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__reviews',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1255757704", [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__reviews--number',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "128 reviews")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1255757704",
    dynamic: [props.wrap ? '1000px' : '400px', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5'],
    __self: this
  }, `.product.__jsx-style-dynamic-selector{display:grid;background:white;max-width:${props.wrap ? '1000px' : '400px'};width:100%;margin:0 auto;font-size:11px;box-sizing:border-box;padding:1em;grid-template:auto /1fr 1fr 1fr;}.product__img.__jsx-style-dynamic-selector{grid-row:1/2;padding:.9em;box-sizing:border-box;}.product-title.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;padding:.5em 0 .7em 0;}.product__description.__jsx-style-dynamic-selector,.product__img.__jsx-style-dynamic-selector{background:white;width:100%;}.product__description.__jsx-style-dynamic-selector{padding-left:${props.wrap ? '7em' : '1.2em'};grid-column:2/4;grid-row:1/3;box-sizing:border-box;}.product-banner.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:white;font-size:.7em;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4em;}.product-discount.__jsx-style-dynamic-selector{margin-bottom:.6em;}.product-discount__price.__jsx-style-dynamic-selector{font-size:.8em;}.product-discount__percentage.__jsx-style-dynamic-selector{margin-left:.8em;color:red;font-size:1em;}.product-price.__jsx-style-dynamic-selector{font-size:1.rem;color:black;}.product-information__delivery.__jsx-style-dynamic-selector{padding:1.5em 0 .8em 0;}.product-information__reviews.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product-information__reviews--number.__jsx-style-dynamic-selector{color:#ffca28;margin-left:1rem;height:20px;}@media (min-width:660px){.product.__jsx-style-dynamic-selector{border:${props.wrap ? ' 0px' : '1px solid #d5d5d5'};font-size:15px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3RWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ESyxBQUdvQixBQVdBLEFBS0osQUFLUSxBQUl5QixBQU85QixBQU9PLEFBR0osQUFHRSxBQU1ELEFBS08sQUFHVixBQUlDLEFBT3VCLFNBckRmLEdBZ0JQLENBaENFLEFBV0osQ0FvREksQ0FyQmxCLENBU2EsQ0E5QkQsQUF3QkQsRUFOWCxJQWlCQSxHQTVDdUIsQ0FxQk0sQUFjZCxDQXpCZixBQThCQSxFQW5Ed0MsQ0FnQnhDLEFBK0NhLEtBTUksS0F0QmpCLENBdkJpQixDQXdDakIsS0FwREEsR0EwREMsRUFyQ29GLEtBUnZFLFdBeEJGLEVBeUJXLEdBZ0NILE1BeERMLGFBeUJmLENBeEJnQixlQUNPLG9CQThCUCxFQTdCSCxZQUNvQixDQTZCakMsdUJBd0JBLFFBcERBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3RWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QocHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9ndWNjaS5qcGVnJyB3aWR0aD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWJhbm5lcic+XHJcblx0XHRcdFx0XHQ8c3Bhbj5PRkVSVEEgRVhDTFVTSVZBPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cclxuXHRcdFx0XHRcdDxoMz5HVUNDSSBCQUc8L2gzPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudCc+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnRfX3ByaWNlJz4zMDAuMDAkPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LWRpc2NvdW50X19wZXJjZW50YWdlJz4tNTAlPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlJz5cclxuXHRcdFx0XHRcdDxzcGFuPjE1MC4wMCQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIGluZm8gKi99XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mb3JtYXRpb24nPlxyXG5cdFx0XHRcdFx0e3Byb3BzLndyYXAgPyAoXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWluZm9ybWF0aW9uX190ZXh0Jz5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdDxiPkRlc2NyaXBjacOzbjo8L2I+IGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLiBBdFxyXG5cdFx0XHRcdFx0XHRcdFx0dmVyb1xyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbl9fZGVsaXZlcnknPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtdHJ1Y2stNTAucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0PHNwYW4+RW52w61vIGludGVybmFjaW9uYWw8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXN0YXItZmlsbGVkLTQ4LnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtc3Rhci1maWxsZWQtNDgucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1zdGFyLWZpbGxlZC00OC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXN0YXItZmlsbGVkLTQ4LnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtc3Rhci1maWxsZWQtNDgucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mb3JtYXRpb25fX3Jldmlld3MtLW51bWJlcic+MTI4IHJldmlld3M8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdHtgXHJcblx0XHRcdFx0XHQucHJvZHVjdCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6ICR7cHJvcHMud3JhcCA/ICcxMDAwcHgnIDogJzQwMHB4J307XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxZW07XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGU6IGF1dG8gLzFmciAxZnIgMWZyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2ltZyB7XHJcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxLzI7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IC45ZW07XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC10aXRsZSBoMyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogLjVlbSAwIC43ZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0X19kZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdC5wcm9kdWN0X19pbWcge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9fZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6ICR7cHJvcHMud3JhcCA/ICc3ZW0nIDogJzEuMmVtJ307XHJcblx0XHRcdFx0XHRcdGdyaWQtY29sdW1uOiAyLzQ7XHJcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxLzM7XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtYmFubmVyIHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjdlbTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDE4MSwgMCwgMTkxKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE4MSwgMCwgMTkxLCAxKSAwJSwgcmdiYSgwLCA4LCAxODAsIDEpIDEwMCUpO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIC40ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IC42ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudF9fcHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC44ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudGFnZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAuOGVtO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1wcmljZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS5yZW07XHJcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucHJvZHVjdC1pbmZvcm1hdGlvbl9fZGVsaXZlcnkge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxLjVlbSAwIC44ZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzLS1udW1iZXIge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmY2EyODtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDFyZW07XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcclxuXHRcdFx0XHRcdFx0LnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogJHtwcm9wcy53cmFwID8gJyAwcHgnIDogJzFweCBzb2xpZCAjZDVkNWQ1J307XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyAucHJvZHVjdCB7XHJcblx0XHRcdFx0XHQvLyBcdG1heC13aWR0aDogOTAwcHg7XHJcblx0XHRcdFx0XHQvLyBcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0Ly8gLnByb2R1Y3RfX2ltZyB7XHJcblx0XHRcdFx0XHQvLyBcdHBhZGRpbmc6IDFyZW07XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHQvLyAucHJvZHVjdF9fZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0Ly8gXHRwYWRkaW5nLWxlZnQ6IDdyZW07XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHQvLyAucHJvZHVjdC1pbmZvcm1hdGlvbl9fdGV4dCB7XHJcblx0XHRcdFx0XHQvLyBcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdHtgXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */
/*@ sourceURL=C:\Users\Estacion\Desktop\Proyectos\jstore\component\ProductView.js */`), `
						
					`);
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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductViewMini.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ProductViewMini() {
  return __jsx("div", {
    className: "jsx-2370790873" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2370790873" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-2370790873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2370790873" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2370790873" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2370790873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "GUCCI BAG")), __jsx("div", {
    className: "jsx-2370790873" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2370790873" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "300$"), __jsx("span", {
    className: "jsx-2370790873" + " " + 'product-discount__percentage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "-50%")), __jsx("div", {
    className: "jsx-2370790873" + " " + 'product-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2370790873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "150$"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2370790873",
    __self: this
  }, ".product.jsx-2370790873{display:grid;grid-template:1fr 1fr 1fr/1fr;}.product__img.jsx-2370790873{grid-row:1/3;}.product-title.jsx-2370790873 h3.jsx-2370790873{border-bottom:1px solid #c5c5c5;margin:0;padding:.2rem 0;}.product__description.jsx-2370790873,.product__img.jsx-2370790873{background:white;width:100%;}.product__description.jsx-2370790873{padding-left:.4rem;box-sizing:border-box;}.product-banner.jsx-2370790873 span.jsx-2370790873{color:white;font-size:.7rem;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4rem;}.product-discount.jsx-2370790873{margin-bottom:.5rem;}.product-discount__price.jsx-2370790873{font-size:.8rem;}.product-discount__percentage.jsx-2370790873{margin-left:.4rem;color:red;font-size:.9rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3RWaWV3TWluaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkssQUFHb0IsQUFJQSxBQUdtQixBQU1mLEFBSUUsQUFLUCxBQU9RLEFBR0osQUFHRSxZQVpGLENBdEJjLEFBSS9CLEdBNEJBLENBbkJZLENBc0JELENBbEJZLENBWXZCLFFBZkEsQUFTNkIsQUFjWixJQTlCUCxTQUNPLEFBVWpCLEVBakJBLENBcUNBLFVBZHFGLEdBZnJGLHlFQWdCaUIsZ0JBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3RWaWV3TWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFZpZXdNaW5pKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0X19pbWcnPlxyXG5cdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2d1Y2NpLmpwZWcnIHdpZHRoPScxMDAlJyBhbHQ9JycgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxyXG5cdFx0XHRcdFx0PGgzPkdVQ0NJIEJBRzwvaDM+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWJhbm5lcic+XHJcblx0XHRcdFx0XHQ8c3Bhbj5PRkVSVEEgRVhDTFVTSVZBPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudCc+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnRfX3ByaWNlJz4zMDAkPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LWRpc2NvdW50X19wZXJjZW50YWdlJz4tNTAlPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlJz5cclxuXHRcdFx0XHRcdDxzcGFuPjE1MCQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdHtgXHJcblx0XHRcdFx0XHQucHJvZHVjdCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyLzFmcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0X19pbWcge1xyXG5cdFx0XHRcdFx0XHRncmlkLXJvdzogMS8zO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtdGl0bGUgaDMge1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M1YzVjNTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAuMnJlbSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2Rlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2ltZyB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0X19kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogLjRyZW07XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtYmFubmVyIHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjdyZW07XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigxODEsIDAsIDE5MSk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxODEsIDAsIDE5MSwgMSkgMCUsIHJnYmEoMCwgOCwgMTgwLCAxKSAxMDAlKTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAuNHJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWRpc2NvdW50IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogLjVyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudF9fcHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3BlcmNlbnRhZ2Uge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLjRyZW07XHJcblx0XHRcdFx0XHRcdGNvbG9yOiByZWQ7XHJcblxyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductViewMini.js */"));
}

/***/ }),

/***/ "./component/ProductosMini.js":
/*!************************************!*\
  !*** ./component/ProductosMini.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductosMini; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./component/Carousel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductViewMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductViewMini */ "./component/ProductViewMini.js");
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductView */ "./component/ProductView.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductosMini.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function ProductosMini() {
  return __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "150",
    height: "auto",
    margin: "10",
    slides: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "single",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "single",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "single",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "single",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "single",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "single",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3Rvc01pbmkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NlIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3Rvc01pbmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0Vmlld01pbmkgZnJvbSAnLi9Qcm9kdWN0Vmlld01pbmknO1xyXG5pbXBvcnQgUHJvZHVjdFZpZXcgZnJvbSAnLi9Qcm9kdWN0Vmlldyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdG9zTWluaSgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcm91c2VsIHdpZHRoPScxNTAnIGhlaWdodD0nYXV0bycgbWFyZ2luPScxMCcgc2xpZGVzPSc2Jz5cclxuXHRcdFx0PExpbmsgcm91dGU9J3NpbmdsZSc+XHJcblx0XHRcdFx0PGEgY2xhc3NOYW1lPSdjYXJvdXNlbF9faXRlbSc+XHJcblx0XHRcdFx0XHQ8UHJvZHVjdFZpZXdNaW5pIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHRcdDxMaW5rIHJvdXRlPSdzaW5nbGUnPlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0PFByb2R1Y3RWaWV3TWluaSAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8TGluayByb3V0ZT0nc2luZ2xlJz5cclxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHRcdDxQcm9kdWN0Vmlld01pbmkgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvTGluaz5cclxuXHRcdFx0PExpbmsgcm91dGU9J3NpbmdsZSc+XHJcblx0XHRcdFx0PGEgY2xhc3NOYW1lPSdjYXJvdXNlbF9faXRlbSc+XHJcblx0XHRcdFx0XHQ8UHJvZHVjdFZpZXdNaW5pIC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHRcdDxMaW5rIHJvdXRlPSdzaW5nbGUnPlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0PFByb2R1Y3RWaWV3TWluaSAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8TGluayByb3V0ZT0nc2luZ2xlJz5cclxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHRcdDxQcm9kdWN0Vmlld01pbmkgLz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcblx0XHQ8L0Nhcm91c2VsPlxyXG5cdCk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductosMini.js */"));
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

/***/ "./pages/single.js":
/*!*************************!*\
  !*** ./pages/single.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return single; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_ProductView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/ProductView */ "./component/ProductView.js");
/* harmony import */ var _component_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/ProductViewMini */ "./component/ProductViewMini.js");
/* harmony import */ var _component_ProductosMini__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/ProductosMini */ "./component/ProductosMini.js");
/* harmony import */ var _component_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Navbar */ "./component/Navbar.js");
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\single.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function single() {
  return __jsx("div", {
    className: "jsx-3063420462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_component_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3063420462" + " " + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_component_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    wrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3063420462" + " " + 'tiendas',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3063420462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Tambi\xE9n podr\xEDa gustarte: "), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3063420462",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-3063420462{max-width:1150px;width:100%;padding:0;padding-top:80px;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-3063420462{padding-left:10px;}h2.jsx-3063420462{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-3063420462 h2.jsx-3063420462{font-size:.9em;}.ofertas.jsx-3063420462{padding-left:10px;}.tiendas.jsx-3063420462,.ofertas.jsx-3063420462{margin-top:2.5rem;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-3063420462{padding-top:150px;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxwYWdlc1xcc2luZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZSxBQUUrRixBQUd4RSxBQVNDLEFBSUgsQUFNQSxBQUlHLEFBSUEsQUFJQyxBQU1MLEFBR08sQUFHRSxBQVFULEFBSUksQUFHQyxBQUdPLGNBdkIzQixDQXhCaUIsQUFNakIsRUFuQlksQUF1RFgsQ0E5Q0QsQUFjQSxBQUlBLEFBK0JDLENBM0JTLElBWWEsRUFrQnRCLEdBNURVLEFBK0JRLEdBbEJFLE9BWkgsT0EwQ0csQ0FYaUIsSUFPdEMsQ0F6QjBCLElBWlQsVUEwQ0UsTUF6Q0MsR0ErQ0ssRUFuQ3pCLE1Ba0JBLENBWWdCLE9BekNoQixzRUEwQ0EsYUFLQyIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGpzdG9yZVxccGFnZXNcXHNpbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0VmlldyBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdFZpZXcnO1xyXG5pbXBvcnQgUHJvZHVjdFZpZXdNaW5pIGZyb20gJy4uL2NvbXBvbmVudC9Qcm9kdWN0Vmlld01pbmknO1xyXG5pbXBvcnQgUHJvZHVjdG9zTWluaSBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdG9zTWluaSc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50L05hdmJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW5nbGUoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxOYXZiYXIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0PFByb2R1Y3RWaWV3IHdyYXA9e3RydWV9IC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RpZW5kYXMnPlxyXG5cdFx0XHRcdFx0PGgyPlRhbWJpw6luIHBvZHLDrWEgZ3VzdGFydGU6IDwvaDI+XHJcblx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDExNTBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiA4MHB4O1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDRyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGllbmRhcyB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMS41ZW07XHJcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQudGllbmRhcyBoMiB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IC45ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQub2ZlcnRhcyB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC50aWVuZGFzLFxyXG5cdFx0XHRcdC5vZmVydGFzIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDIuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjNmMztcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDpnbG9iYWwoKikge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM2NDY0NjQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDpnbG9iYWwoYSkge1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ6Z2xvYmFsKGltZykge1xyXG5cdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHQta2h0bWwtdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0LW1vei11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHR1c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xyXG5cdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTUwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\single.js */"));
}

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('/', 'index').add('porducto', 'producto');

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/single.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Estacion\Desktop\Proyectos\jstore\pages\single.js */"./pages/single.js");


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

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

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
//# sourceMappingURL=single.js.map