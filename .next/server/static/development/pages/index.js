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
    console.log(width);
    set({
      xy: down ? local : [Math.round(local[0] / (margin + width)) * (margin + width), 0]
    });

    if (!down) {
      local[0] = Math.round(local[0] / (margin + width)) * (margin + width);

      if (local[0] > 0 || !window.matchMedia('(max-width:950px)').matches && slides < 5) {
        local[0] = 0;
        set({
          xy: [0, 0]
        });
      } else if (window.matchMedia('(max-width:950px)').matches) {
        if (local[0] < window.innerWidth - (width * slides + margin * (slides - 1))) {
          local[0] = window.innerWidth - (width * slides + margin * (slides - 1));
          set({
            xy: [local[0], 0]
          });
        }
      } else {
        if (local[0] < 960 - (width * slides + margin * (slides - 1))) {
          local[0] = 960 - (width * slides + margin * (slides - 1));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2909508099", [width, height, margin]]]) + " " + 'carousel-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    id: `${slides < 6 ? 'flex' : null}`,
    className: "carousel",
    style: styleNeeded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2909508099",
    dynamic: [width, height, margin],
    __self: this
  }, `.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:${width}px;height:${height}px;background:white;margin-right:${margin}px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:960px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXENhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZSxBQUdzQixBQUdELEFBR0YsQUFJUSxBQWFQLGFBaEJmLEVBSEEsQ0FIQSxLQVVzQyxxQ0FDQyxnQkFZZCxzQkFYUCxpQkFDMkIsNENBQ25CLGdCQVV6QixTQVR3Qix3QkFDRixzQkFDRixvQkFDSCxxRkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LXVzZS1nZXN0dXJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XHJcblx0dmFyIG1hcmdpbiA9IHBhcnNlSW50KHByb3BzLm1hcmdpbiwgMTApO1xyXG5cdHZhciBzbGlkZXMgPSBwYXJzZUludChwcm9wcy5zbGlkZXMsIDEwKTtcclxuXHR2YXIgd2lkdGggPSBwYXJzZUludChwcm9wcy53aWR0aCwgMTApO1xyXG5cdHZhciBoZWlnaHQgPSBwYXJzZUludChwcm9wcy5oZWlnaHQsIDEwKTtcclxuXHRjb25zdCBbXHJcblx0XHR7IHh5IH0sXHJcblx0XHRzZXRcclxuXHRdID0gdXNlU3ByaW5nKCgpID0+ICh7XHJcblx0XHR4eSA6IFtcclxuXHRcdFx0MCxcclxuXHRcdFx0MFxyXG5cdFx0XVxyXG5cdH0pKTtcclxuXHJcblx0Y29uc3QgYmluZCA9IHVzZURyYWcoKHsgZG93biwgbG9jYWwsIHZlbG9jaXR5LCBkaXJlY3Rpb24gfSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cod2lkdGgpO1xyXG5cdFx0c2V0KHtcclxuXHRcdFx0eHkgOiBkb3duXHJcblx0XHRcdFx0PyBsb2NhbFxyXG5cdFx0XHRcdDogW1xyXG5cdFx0XHRcdFx0XHRNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSkgKiAobWFyZ2luICsgd2lkdGgpLFxyXG5cdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRdXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoIWRvd24pIHtcclxuXHRcdFx0bG9jYWxbMF0gPSBNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSkgKiAobWFyZ2luICsgd2lkdGgpO1xyXG5cdFx0XHRpZiAobG9jYWxbMF0gPiAwIHx8ICghd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6OTUwcHgpJykubWF0Y2hlcyAmJiBzbGlkZXMgPCA1KSkge1xyXG5cdFx0XHRcdGxvY2FsWzBdID0gMDtcclxuXHRcdFx0XHRzZXQoe1xyXG5cdFx0XHRcdFx0eHkgOiBbXHJcblx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdDBcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDo5NTBweCknKS5tYXRjaGVzKSB7XHJcblx0XHRcdFx0aWYgKGxvY2FsWzBdIDwgd2luZG93LmlubmVyV2lkdGggLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpKSB7XHJcblx0XHRcdFx0XHRsb2NhbFswXSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcclxuXHRcdFx0XHRcdHNldCh7XHJcblx0XHRcdFx0XHRcdHh5IDogW1xyXG5cdFx0XHRcdFx0XHRcdGxvY2FsWzBdLFxyXG5cdFx0XHRcdFx0XHRcdDBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChsb2NhbFswXSA8IDk2MCAtICh3aWR0aCAqIHNsaWRlcyArIG1hcmdpbiAqIChzbGlkZXMgLSAxKSkpIHtcclxuXHRcdFx0XHRcdGxvY2FsWzBdID0gOTYwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcclxuXHRcdFx0XHRcdHNldCh7XHJcblx0XHRcdFx0XHRcdHh5IDogW1xyXG5cdFx0XHRcdFx0XHRcdGxvY2FsWzBdLFxyXG5cdFx0XHRcdFx0XHRcdDBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICB3aW5kb3cuaW5uZXJXaWR0aCAtICh3aWR0aCAqIDUgKyBtYXJnaW4gKiA0KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHR2YXIgc3R5bGVOZWVkZWQgPSB7XHJcblx0XHR0cmFuc2Zvcm0gIDogeHkuaW50ZXJwb2xhdGUoKHgsIHkpID0+IGB0cmFuc2xhdGUzRCgke3h9cHgsMCwgMClgKSxcclxuXHRcdHdoaXRlU3BhY2UgOiAnbm93cmFwJyxcclxuXHRcdG1hcmdpbiAgICAgOiAnMCBhdXRvJ1xyXG5cclxuXHRcdC8vIGRpc3BsYXkgICAgICAgIDogc2xpZGVzIDwgNiA/ICdmbGV4JyA6ICdibG9jaycsXHJcblx0XHQvLyBqdXN0aWZ5Q29udGVudCA6IHNsaWRlcyA8IDYgPyAnY2VudGVyJyA6IG51bGxcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsLWNvbnRhaW5lcicgey4uLmJpbmQoKX0+XHJcblx0XHRcdDxhbmltYXRlZC5kaXYgaWQ9e2Ake3NsaWRlcyA8IDYgPyAnZmxleCcgOiBudWxsfWB9IGNsYXNzTmFtZT0nY2Fyb3VzZWwnIHN0eWxlPXtzdHlsZU5lZWRlZH0+XHJcblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8L2FuaW1hdGVkLmRpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXI6aG92ZXIge1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2Fyb3VzZWwtY29udGFpbmVyIDpnbG9iYWwoLmNhcm91c2VsX19pdGVtKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHR3aWR0aDogJHt3aWR0aH1weDtcclxuXHRcdFx0XHRcdGhlaWdodDogJHtoZWlnaHR9cHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogJHttYXJnaW59cHg7XHJcblx0XHRcdFx0XHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdFx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHRcdC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG5cdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */
/*@ sourceURL=C:\Users\Estacion\Desktop\Proyectos\jstore\component\Carousel.js */`));
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
    width: "230px",
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
  }, "img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXE1hcmNhc0Rpc3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JLLEFBRzhCLHVCQUNELHNCQUNGLG9CQUNGLGtCQUNILDZFQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGpzdG9yZVxcY29tcG9uZW50XFxNYXJjYXNEaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudC9DYXJvdXNlbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJjYXNEaXNwbGF5KCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2Fyb3VzZWwgc2xpZGVzPSc0JyB3aWR0aD0nMjMwcHgnIG1hcmdpbj0nMjVweCcgaGVpZ2h0PSc5OHB4Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9tYXJjYXMvQWRpZGFzLTEyODB4NzIwLmpwZycgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL21hcmNhcy9ndWNjaS5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9tYXJjYXMvbmlrZS5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9tYXJjYXMvQWRpZGFzLTEyODB4NzIwLmpwZycgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0Omdsb2JhbChpbWcpIHtcclxuXHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1tb3otdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9DYXJvdXNlbD5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\MarcasDisplay.js */"));
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
    className: "jsx-229787494" + " " + 'navbar-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-229787494" + " " + 'navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-229787494" + " " + 'main-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-229787494" + " " + 'main-navbar__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Logo"), __jsx("span", {
    className: "jsx-229787494" + " " + 'main-navbar__icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    width: "30px",
    src: "/static/icons/menu.svg",
    alt: "",
    className: "jsx-229787494" + " " + 'icon-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-229787494" + " " + 'secondary-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-229787494" + " " + 'secondary-navbar__items',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-229787494",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-229787494",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Hombres"), __jsx("li", {
    className: "jsx-229787494",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Mujeres"), __jsx("li", {
    className: "jsx-229787494",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Ni\xF1os"), __jsx("li", {
    className: "jsx-229787494",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Accesorios"), __jsx("li", {
    className: "jsx-229787494",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Regalos"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "229787494",
    __self: this
  }, ".navbar-container.jsx-229787494{position:relative;}.navbar.jsx-229787494{background:white;width:100%;position:fixed;}.main-navbar.jsx-229787494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.main-navbar__icon.jsx-229787494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;}.icon-menu.jsx-229787494{color;}.secondary-navbar.jsx-229787494{display:none;background:#F2F2F2;}.secondary-navbar__items.jsx-229787494 ul.jsx-229787494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:0;margin:0;max-width:600px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:3rem;}.secondary-navbar__items.jsx-229787494 ul.jsx-229787494 li.jsx-229787494{list-style:none;}@media (min-width:560px){.secondary-navbar.jsx-229787494{display:block;}body{background:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkssQUFJb0IsQUFFSSxBQU1KLEFBTWlCLEFBS2pCLEFBRWlCLEFBSUEsQUFXakIsQUFJSSxBQUdBLE1BeEJILE9BSUQsQ0FpQkssRUFKSixDQWpDZSxBQXdDWCxDQTNDSixVQUtDLElBa0JELFdBakJmLCtCQUcrQixBQU9qQixBQVVlLFdBQ0QsVUFDRCxTQUNPLGdCQUNjLHVEQWRqQyxjQU5LLHNEQXFCaUIsdUNBcEJyQixlQUNELHVDQXFCRCxZQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4tbmF2YmFyJz5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J21haW4tbmF2YmFyX190aXRsZSc+TG9nbzwvaDE+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J21haW4tbmF2YmFyX19pY29uJz5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2ljb24tbWVudScgd2lkdGg9JzMwcHgnIHNyYz0nL3N0YXRpYy9pY29ucy9tZW51LnN2ZycgYWx0PScnIC8+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlY29uZGFyeS1uYXZiYXInPlxyXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9J3NlY29uZGFyeS1uYXZiYXJfX2l0ZW1zJz5cclxuXHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5Ib21icmVzPC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+TXVqZXJlczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPk5pw7FvczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPkFjY2Vzb3Jpb3M8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5SZWdhbG9zPC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHQubmF2YmFyIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm1haW4tbmF2YmFyIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluLW5hdmJhcl9faWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtOmNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdC5pY29uLW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0LnNlY29uZGFyeS1uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I0YyRjJGMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5LW5hdmJhcl9faXRlbXMgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo2MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnktbmF2YmFyX19pdGVtcyB1bCBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeS1uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChib2R5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Navbar.js */"));
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
/* harmony import */ var _component_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Carousel */ "./component/Carousel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Productos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Productos() {
  return __jsx(_component_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "130",
    height: "210",
    margin: "10",
    slides: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product_description--name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Gucci bag"), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "300$ "), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__percent',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "-50% ")), __jsx("hr", {
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product__description--actual-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "150$ ")))), __jsx("div", {
    className: "jsx-4216260175" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product_description--name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Gucci bag"), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "300$ "), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__percent',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "-50% ")), __jsx("hr", {
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product__description--actual-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "150$ ")))), __jsx("div", {
    className: "jsx-4216260175" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product_description--name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Gucci bag"), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "300$ "), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__percent',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "-50% ")), __jsx("hr", {
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product__description--actual-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "150$ ")))), __jsx("div", {
    className: "jsx-4216260175" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product_description--name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Gucci bag"), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "300$ "), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__percent',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "-50% ")), __jsx("hr", {
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product__description--actual-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "150$ ")))), __jsx("div", {
    className: "jsx-4216260175" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product_description--name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Gucci bag"), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "300$ "), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__percent',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "-50% ")), __jsx("hr", {
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product__description--actual-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "150$ ")))), __jsx("div", {
    className: "jsx-4216260175" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product_description--name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Gucci bag"), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "300$ "), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__percent',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "-50% ")), __jsx("hr", {
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product__description--actual-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "150$ ")))), __jsx("div", {
    className: "jsx-4216260175" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("img", {
    src: "/static/gucci.jpeg",
    width: "100%",
    alt: "",
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product_description--name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Gucci bag"), __jsx("div", {
    className: "jsx-4216260175" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "300$ "), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product-discount__percent',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "-50% ")), __jsx("hr", {
    className: "jsx-4216260175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-4216260175" + " " + 'product__description--actual-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "150$ ")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4216260175",
    __self: this
  }, ".product.jsx-4216260175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.product__description.jsx-4216260175{height:100%;}.product-discount.jsx-4216260175{margin-top:.5rem;}.product-discount.jsx-4216260175,.product__description--actual-price.jsx-4216260175{margin:0 0 0 .5rem;display:inline-block;width:80%;}.product__description--actual-price.jsx-4216260175{font-weight:bold;}.product-discount__price.jsx-4216260175{-webkit-text-decoration:line-through;text-decoration:line-through;color:#b7b7b7;font-size:.8rem;}.product-discount__percent.jsx-4216260175{color:red;margin-left:.5rem;}.product_description--name.jsx-4216260175{border-bottom:1px solid #c5c5c5;padding:0 0 0 .5rem;display:block;margin-bottom:.5rem;}hr.jsx-4216260175{margin:.1rem 0;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}html{font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3Rvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SEssQUFHb0IsQUFLRCxBQUdLLEFBSUUsQUFLRixBQUdZLEFBS25CLEFBSXNCLEFBTWpCLEFBSUQsQUFJRSxVQWpCRSxFQXBCbkIsR0E4QkEsQUFRQyxFQW5DRCxBQVNBLEVBTHNCLFNBY3RCLElBR3FCLFFBaEJWLFVBQ1gsRUFnQmUsY0FWQSxBQVdNLFFBL0JFLEFBdUNFLE1BbEJSLE1BV2pCLFVBVkEsd0RBckJhLFlBQ2IsU0FzQ0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcUHJvZHVjdG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudC9DYXJvdXNlbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0b3MoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDYXJvdXNlbCB3aWR0aD0nMTMwJyBoZWlnaHQ9JzIxMCcgbWFyZ2luPScxMCcgc2xpZGVzPSc3Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3RfZGVzY3JpcHRpb24tLW5hbWUnPkd1Y2NpIGJhZzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudCc+LTUwJSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbi0tYWN0dWFsLXByaWNlJz4xNTAkIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3RfZGVzY3JpcHRpb24tLW5hbWUnPkd1Y2NpIGJhZzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudCc+LTUwJSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbi0tYWN0dWFsLXByaWNlJz4xNTAkIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3RfZGVzY3JpcHRpb24tLW5hbWUnPkd1Y2NpIGJhZzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudCc+LTUwJSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbi0tYWN0dWFsLXByaWNlJz4xNTAkIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3RfZGVzY3JpcHRpb24tLW5hbWUnPkd1Y2NpIGJhZzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudCc+LTUwJSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbi0tYWN0dWFsLXByaWNlJz4xNTAkIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3RfZGVzY3JpcHRpb24tLW5hbWUnPkd1Y2NpIGJhZzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudCc+LTUwJSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbi0tYWN0dWFsLXByaWNlJz4xNTAkIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3RfZGVzY3JpcHRpb24tLW5hbWUnPkd1Y2NpIGJhZzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudCc+LTUwJSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbi0tYWN0dWFsLXByaWNlJz4xNTAkIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvZ3VjY2kuanBlZycgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3RfZGVzY3JpcHRpb24tLW5hbWUnPkd1Y2NpIGJhZzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcHJpY2UnPjMwMCQgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudCc+LTUwJSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0X19kZXNjcmlwdGlvbi0tYWN0dWFsLXByaWNlJz4xNTAkIDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2Rlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAuNXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWRpc2NvdW50LFxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2Rlc2NyaXB0aW9uLS1hY3R1YWwtcHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCAwIC41cmVtO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9fZGVzY3JpcHRpb24tLWFjdHVhbC1wcmljZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3ByaWNlIHtcclxuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjYjdiN2I3O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3BlcmNlbnQge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLjVyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9kZXNjcmlwdGlvbi0tbmFtZSB7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzVjNWM1O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAuNXJlbTtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aHIge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IC4xcmVtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcclxuXHRcdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbChodG1sKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvQ2Fyb3VzZWw+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Productos.js */"));
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
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-3785694382",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: "jsx-3785694382",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), __jsx(_component_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3785694382" + " " + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3785694382" + " " + 'displayer',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(_component_MainDisplayer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3785694382" + " " + 'tiendas',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3785694382",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Tiendas disponibles"), __jsx(_component_MarcasDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3785694382" + " " + 'ofertas',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3785694382",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Mejores ofertas"), __jsx(_component_Productos__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3785694382",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-3785694382{max-width:960px;width:100%;padding:0;padding-top:140px;overflow:hidden;margin:0 auto;}.tiendas.jsx-3785694382{padding-left:10px;}h2.jsx-3785694382{font-size:1rem;font-weight:400;text-transform:uppercase;}.ofertas.jsx-3785694382{padding-left:10px;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}hr{border-width:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUVnRyxBQUV6RSxBQVFFLEFBR0gsQUFLRyxBQUlDLEFBTUwsQUFHRyxjQUZsQixDQWZpQixDQVhMLENBNkJaLENBckJBLEFBUUEsQ0FJVSxRQW5CQyxDQW9CUSxHQVRPLE1BVlAsU0FvQm1CLFNBbkJyQixDQVVqQixlQVRlLFdBbUJmLEdBbEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50L0Nhcm91c2VsJztcclxuaW1wb3J0IE1hcmNhc0Rpc3BsYXkgZnJvbSAnLi4vY29tcG9uZW50L01hcmNhc0Rpc3BsYXknO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gJy4uL2NvbXBvbmVudC9Qcm9kdWN0b3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTWFpbkRpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnQvTWFpbkRpc3BsYXllcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50L05hdmJhcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XHJcblx0XHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcdDxOYXZiYXIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5ZXInPlxyXG5cdFx0XHRcdFx0XHQ8TWFpbkRpc3BsYXllciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGllbmRhcyc+XHJcblx0XHRcdFx0XHRcdDxoMj5UaWVuZGFzIGRpc3BvbmlibGVzPC9oMj5cclxuXHRcdFx0XHRcdFx0PE1hcmNhc0Rpc3BsYXkgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHQ8aDI+TWVqb3JlcyBvZmVydGFzPC9oMj5cclxuXHRcdFx0XHRcdFx0PFByb2R1Y3RvcyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogOTYwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTQwcHg7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpZW5kYXMge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5vZmVydGFzIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDpnbG9iYWwoKikge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzY0NjQ2NDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDpnbG9iYWwoaHIpIHtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\index.js */"));
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