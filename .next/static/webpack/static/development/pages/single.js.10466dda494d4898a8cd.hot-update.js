webpackHotUpdate("static\\development\\pages\\single.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");



var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



function Carousel(props) {
  var margin = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.margin, 10);

  var slides = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.slides, 10);

  var width = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.width, 10);

  var height = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.height, 10);

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])(function () {
    return {
      xy: [0, 0]
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      xy = _useSpring2[0].xy,
      set = _useSpring2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useDrag"])(function (_ref) {
    var down = _ref.down,
        local = _ref.local,
        velocity = _ref.velocity,
        direction = _ref.direction;
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
    transform: xy.interpolate(function (x, y) {
      return "translate3D(".concat(x, "px,0, 0)");
    }),
    whiteSpace: 'nowrap',
    margin: '0 auto' // display        : slides < 6 ? 'flex' : 'block',
    // justifyContent : slides < 6 ? 'center' : null

  };
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["3790363973", [width, height, margin]]]) + " " + 'carousel-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    id: "".concat(slides < 6 ? 'flex' : null),
    className: "carousel",
    style: styleNeeded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3790363973",
    dynamic: [width, height, margin],
    __self: this
  }, ".carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:".concat(width, "px;height:").concat(height, "px;background:white;margin-right:").concat(margin, "px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:1150px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXENhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGZSxBQUdzQixBQUdELEFBR0YsQUFJUSxBQWFQLEFBSUcsYUFwQmxCLEVBSEEsQ0FIQSxBQTJCQyxLQWpCcUMscUNBQ0MsZ0JBWWQsc0JBWFAsaUJBQzJCLDRDQUNuQixnQkFVekIsU0FUd0Isd0JBQ0Ysc0JBQ0Ysb0JBQ0gscUZBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXENhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IHVzZURyYWcsIHVzZVNjcm9sbCB9IGZyb20gJ3JlYWN0LXVzZS1nZXN0dXJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XHJcblx0dmFyIG1hcmdpbiA9IHBhcnNlSW50KHByb3BzLm1hcmdpbiwgMTApO1xyXG5cdHZhciBzbGlkZXMgPSBwYXJzZUludChwcm9wcy5zbGlkZXMsIDEwKTtcclxuXHR2YXIgd2lkdGggPSBwYXJzZUludChwcm9wcy53aWR0aCwgMTApO1xyXG5cdHZhciBoZWlnaHQgPSBwYXJzZUludChwcm9wcy5oZWlnaHQsIDEwKTtcclxuXHRjb25zdCBbXHJcblx0XHR7IHh5IH0sXHJcblx0XHRzZXRcclxuXHRdID0gdXNlU3ByaW5nKCgpID0+ICh7XHJcblx0XHR4eSA6IFtcclxuXHRcdFx0MCxcclxuXHRcdFx0MFxyXG5cdFx0XVxyXG5cdH0pKTtcclxuXHJcblx0Y29uc3QgYmluZCA9IHVzZURyYWcoKHsgZG93biwgbG9jYWwsIHZlbG9jaXR5LCBkaXJlY3Rpb24gfSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGlyZWN0aW9uKTtcclxuXHRcdHNldCh7XHJcblx0XHRcdHh5IDogZG93blxyXG5cdFx0XHRcdD8gW1xyXG5cdFx0XHRcdFx0XHRsb2NhbFswXSxcclxuXHRcdFx0XHRcdFx0MFxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdDogW1xyXG5cdFx0XHRcdFx0XHRNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKiAobWFyZ2luICsgd2lkdGgpLFxyXG5cdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRdXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoIWRvd24pIHtcclxuXHRcdFx0bG9jYWxbMF0gPSBNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKiAobWFyZ2luICsgd2lkdGgpO1xyXG5cdFx0XHRpZiAobG9jYWxbMF0gPiAwIHx8ICghd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6MTE1MHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNSkpIHtcclxuXHRcdFx0XHRsb2NhbFswXSA9IDA7XHJcblx0XHRcdFx0c2V0KHtcclxuXHRcdFx0XHRcdHh5IDogW1xyXG5cdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6OTUwcHgpJykubWF0Y2hlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYScpO1xyXG5cdFx0XHRcdGlmIChsb2NhbFswXSA8IHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xyXG5cdFx0XHRcdFx0bG9jYWxbMF0gPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHdpZHRoKTtcclxuXHJcblx0XHRcdFx0XHRzZXQoe1xyXG5cdFx0XHRcdFx0XHR4eSA6IFtcclxuXHRcdFx0XHRcdFx0XHRsb2NhbFswXSxcclxuXHRcdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAobG9jYWxbMF0gPCAxMTUwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xyXG5cdFx0XHRcdFx0bG9jYWxbMF0gPSAxMTUwIC0gMjUgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xyXG5cdFx0XHRcdFx0c2V0KHtcclxuXHRcdFx0XHRcdFx0eHkgOiBbXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxbMF0sXHJcblx0XHRcdFx0XHRcdFx0MFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gIHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogNSArIG1hcmdpbiAqIDQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHZhciBzdHlsZU5lZWRlZCA9IHtcclxuXHRcdHRyYW5zZm9ybSAgOiB4eS5pbnRlcnBvbGF0ZSgoeCwgeSkgPT4gYHRyYW5zbGF0ZTNEKCR7eH1weCwwLCAwKWApLFxyXG5cdFx0d2hpdGVTcGFjZSA6ICdub3dyYXAnLFxyXG5cdFx0bWFyZ2luICAgICA6ICcwIGF1dG8nXHJcblxyXG5cdFx0Ly8gZGlzcGxheSAgICAgICAgOiBzbGlkZXMgPCA2ID8gJ2ZsZXgnIDogJ2Jsb2NrJyxcclxuXHRcdC8vIGp1c3RpZnlDb250ZW50IDogc2xpZGVzIDwgNiA/ICdjZW50ZXInIDogbnVsbFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udGFpbmVyJyB7Li4uYmluZCgpfT5cclxuXHRcdFx0PGFuaW1hdGVkLmRpdiBpZD17YCR7c2xpZGVzIDwgNiA/ICdmbGV4JyA6IG51bGx9YH0gY2xhc3NOYW1lPSdjYXJvdXNlbCcgc3R5bGU9e3N0eWxlTmVlZGVkfT5cclxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvYW5pbWF0ZWQuZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIge1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNhcm91c2VsLWNvbnRhaW5lcjpob3ZlciB7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIgOmdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdHdpZHRoOiAke3dpZHRofXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAke2hlaWdodH1weDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAke21hcmdpbn1weDtcclxuXHRcdFx0XHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDExNTBweCkge1xyXG5cdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\Carousel.js */")));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./component/Carousel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    height: "240",
    margin: "10",
    slides: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "producto",
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
    route: "producto",
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
    route: "producto",
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
    route: "producto",
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
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3Rvc01pbmkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJlIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3Rvc01pbmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0Vmlld01pbmkgZnJvbSAnLi9Qcm9kdWN0Vmlld01pbmknO1xyXG5pbXBvcnQgUHJvZHVjdFZpZXcgZnJvbSAnLi9Qcm9kdWN0Vmlldyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdG9zTWluaSgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcm91c2VsIHdpZHRoPScxNTAnIGhlaWdodD0nMjQwJyBtYXJnaW49JzEwJyBzbGlkZXM9JzQnPlxyXG5cdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nPlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0PFByb2R1Y3RWaWV3TWluaSAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nPlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0PFByb2R1Y3RWaWV3TWluaSAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nPlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0PFByb2R1Y3RWaWV3TWluaSAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nPlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0PFByb2R1Y3RWaWV3TWluaSAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuXHRcdDwvQ2Fyb3VzZWw+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductosMini.js */"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-use-gesture/dist/react-use-gesture.esm.js ***!
  \**********************************************************************/
/*! exports provided: useDrag, useGesture, useHover, useMove, usePinch, useScroll, useWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return useDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGesture", function() { return useGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return useHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMove", function() { return useMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePinch", function() { return usePinch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return useScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWheel", function() { return useWheel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() {
  _extends = Object.assign || function (target) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var GestureFlag;

(function (GestureFlag) {
  GestureFlag["OnStart"] = "start";
  GestureFlag["OnChange"] = "change";
  GestureFlag["OnEnd"] = "end";
})(GestureFlag || (GestureFlag = {}));

// blank function
var noop = function noop() {}; // returns a function that chains all functions given as parameters

var chainFns = function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn.apply(void 0, args);
    });
  };
}; // vector add

var addV = function addV(v1, v2) {
  return v1.map(function (v, i) {
    return v + v2[i];
  });
}; // vector substract

var subV = function subV(v1, v2) {
  return v1.map(function (v, i) {
    return v - v2[i];
  });
};

var setListeners = function setListeners(add) {
  return function (el, listeners, options) {
    var action = add ? 'addEventListener' : 'removeEventListener';
    listeners.forEach(function (_ref) {
      var type = _ref[0],
          fn = _ref[1];
      return el[action](type, fn, options);
    });
  };
};

var addListeners =
/*#__PURE__*/
setListeners(true);
var removeListeners =
/*#__PURE__*/
setListeners(false);
/**
 * Gets modifier keys from event
 * @param event
 * @returns modifier keys
 */

function getModifierKeys(event) {
  var shiftKey = event.shiftKey,
      altKey = event.altKey,
      metaKey = event.metaKey,
      ctrlKey = event.ctrlKey;
  return {
    shiftKey: shiftKey,
    altKey: altKey,
    metaKey: metaKey,
    ctrlKey: ctrlKey
  };
}
/**
 * Gets scroll event data
 * @param event
 * @returns scroll event data
 */

function getScrollEventData(event) {
  // If the currentTarget is the window then we return the scrollX/Y position.
  // If not (ie the currentTarget is a DOM element), then we return scrollLeft/Top
  var _event$currentTarget = event.currentTarget,
      scrollX = _event$currentTarget.scrollX,
      scrollY = _event$currentTarget.scrollY,
      scrollLeft = _event$currentTarget.scrollLeft,
      scrollTop = _event$currentTarget.scrollTop;
  return _extends({
    values: [scrollX || scrollLeft || 0, scrollY || scrollTop || 0]
  }, getModifierKeys(event));
}
/**
 * Gets wheel event data
 * @param event
 * @returns wheel event data
 */

function getWheelEventData(event) {
  var deltaX = event.deltaX,
      deltaY = event.deltaY; //TODO implement polyfill ?
  // https://developer.mozilla.org/en-US/docs/Web/Events/wheel#Polyfill

  return _extends({
    values: [deltaX, deltaY]
  }, getModifierKeys(event));
}
/**
 * Gets pointer event data
 * @param event
 * @returns pointer event data
 */

function getPointerEventData(event) {
  var touches = event.touches,
      buttons = event.buttons,
      changedTouches = event.changedTouches;
  var touchEvents = touches && touches.length > 0 ? touches : changedTouches && changedTouches.length > 0 ? changedTouches : null;

  var _ref2 = touchEvents ? touchEvents[0] : event,
      clientX = _ref2.clientX,
      clientY = _ref2.clientY;

  var down = touchEvents && touchEvents.length > 0 || buttons > 0;
  return _extends({
    values: [clientX, clientY],
    touches: touchEvents && touchEvents.length || 0,
    down: down,
    buttons: buttons
  }, getModifierKeys(event));
}
/**
 * Gets two touches event data
 * @param event
 * @returns two touches event data
 */

function getTwoTouchesEventData(event) {
  var touches = event.touches;
  var dx = touches[1].clientX - touches[0].clientX;
  var dy = touches[1].clientY - touches[0].clientY;
  var da = [Math.hypot(dx, dy), -(Math.atan2(dx, dy) * 180) / Math.PI];
  var origin = [(touches[1].clientX + touches[0].clientX) / 2, (touches[1].clientY + touches[0].clientY) / 2];
  return _extends({
    values: da,
    origin: origin,
    touches: 2,
    down: touches.length > 0
  }, getModifierKeys(event));
}
/**
 * Calculates velocity
 * @param diff the difference between current and previous vectors
 * @param delta_t the time delta
 * @param len the length of the diff vector
 * @returns velocity
 */

function calculateVelocity(diff, delta_t, len) {
  len = len || Math.hypot.apply(Math, diff);
  return delta_t ? len / delta_t : 0;
}
/**
 * Calculates velocities vector
 * @template T the expected vector type
 * @param diff the previous value
 * @param delta_t the time delta
 * @returns velocities vector
 */

function calculateVelocities(diff, delta_t) {
  return delta_t ? diff.map(function (v) {
    return v / delta_t;
  }) : Array(diff.length).fill(0);
}
/**
 * Calculates distance
 * @param delta the difference between current and initial vectors
 * @returns distance
 */

function calculateDistance(delta) {
  return Math.hypot.apply(Math, delta);
}
/**
 * Calculates direction
 * @template T the expected vector type
 * @param diff
 * @param len
 * @returns direction
 */

function calculateDirection(diff, len) {
  len = len || Math.hypot.apply(Math, diff) || 1;
  return diff.map(function (v) {
    return v / len;
  });
}
/**
 * Calculates all kinematics
 * @template T the expected vector type
 * @param delta the difference between current and initial vectors
 * @param diff the difference between current and previous vectors
 * @param delta_t the time delta between current and previous timestamps
 * @returns all kinematics
 */

function calculateAllKinematics(delta, diff, delta_t) {
  var len = Math.hypot.apply(Math, diff);
  return {
    velocities: calculateVelocities(diff, delta_t),
    velocity: calculateVelocity(diff, delta_t, len),
    distance: calculateDistance(delta),
    direction: calculateDirection(diff, len)
  };
}
/**
 * Whether the browser supports GestureEvent (ie Safari)
 * @returns true if the browser supports gesture event
 */

function supportsGestureEvent() {
  try {
    // TODO [TS] possibly find GestureEvent definitions?
    // @ts-ignore: Unreachable code error
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}

/**
 * Some gestures might use the state key from another gesture (i.e. hover)
 * so mappedKeys is a commodity object to get the state key and handler key
 * for every gesture
 */

var mappedKeys = {
  drag: {
    stateKey: 'drag',
    handlerKey: 'onDrag'
  },
  pinch: {
    stateKey: 'pinch',
    handlerKey: 'onPinch'
  },
  move: {
    stateKey: 'move',
    handlerKey: 'onMove'
  },
  scroll: {
    stateKey: 'scroll',
    handlerKey: 'onScroll'
  },
  wheel: {
    stateKey: 'wheel',
    handlerKey: 'onWheel'
  },
  hover: {
    stateKey: 'move',
    handlerKey: 'onHover'
  }
}; // default config (will extend user config)

var defaultConfig = {
  domTarget: undefined,
  event: {
    passive: true,
    capture: false
  },
  pointerEvents: false,
  window: typeof window !== 'undefined' ? window : undefined,
  transform: {
    x: function x(_x) {
      return _x;
    },
    y: function y(_y) {
      return _y;
    }
  },
  enabled: true,
  drag: true,
  pinch: true,
  scroll: true,
  wheel: true,
  hover: true,
  move: true
}; // common initial state for all gestures

var initialCommon = {
  event: undefined,
  currentTarget: undefined,
  pointerId: undefined,
  values: [0, 0],
  velocities: [0, 0],
  delta: [0, 0],
  initial: [0, 0],
  previous: [0, 0],
  transform: undefined,
  local: [0, 0],
  lastLocal: [0, 0],
  first: false,
  last: false,
  active: false,
  time: undefined,
  cancel: noop,
  canceled: false,
  memo: undefined,
  args: undefined
}; // initial state for coordinates-based gestures

var initialCoordinates = {
  xy: [0, 0],
  vxvy: [0, 0],
  velocity: 0,
  distance: 0,
  direction: [0, 0]
}; // xy coordinates
// initial state for distance and angle-based gestures (pinch)

var initialDistanceAngle = {
  da: [0, 0],
  vdva: [0, 0],
  origin: [0, 0],
  turns: 0
}; // distance and angle
// initial state object (used by the gesture controller)

var initialState = {
  shared: {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false
  },
  move: _extends({}, initialCommon, {}, initialCoordinates),
  drag: _extends({}, initialCommon, {}, initialCoordinates),
  scroll: _extends({}, initialCommon, {}, initialCoordinates),
  wheel: _extends({}, initialCommon, {}, initialCoordinates),
  pinch: _extends({}, initialCommon, {}, initialDistanceAngle)
}; // generic end state for all gestures

var genericEndState = {
  first: false,
  last: true,
  active: false
};

/**
 * Recognizer abstract class
 * @template GestureType whether the Recognizer should deal with coordinates or distance / angle
 */

var Recognizer =
/**
 * Creates an instance of a gesture recognizer.
 * @param gestureKey drag, move, hover, pinch, etc.
 * @param controller the controller attached to the gesture
 * @param [args] the args that should be passed to the gesture handler
 */
function Recognizer(gestureKey, controller, args) {
  var _this = this;

  if (args === void 0) {
    args = [];
  }

  this.gestureKey = gestureKey;
  this.controller = controller;
  this.args = args;

  this.isEnabled = function () {
    return _this.controller.config.enabled && _this.controller.config[_this.gestureKey];
  }; // convenience method to set a timeout for a given gesture


  this.setTimeout = function (callback, ms) {
    var _window;

    if (ms === void 0) {
      ms = 140;
    }

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args));
  }; // convenience method to clear a timeout for a given gesture


  this.clearTimeout = function () {
    clearTimeout(_this.controller.timeouts[_this.stateKey]);
  }; // get the controller state for a given gesture


  this.getState = function () {
    return _this.controller.state[_this.stateKey];
  }; // get the controller shared state


  this.getSharedState = function () {
    return _this.controller.state.shared;
  }; // does the controller config has pointer events enabled


  this.pointerEventsEnabled = function () {
    return _this.controller.config.pointerEvents;
  }; // gets the transform config of the controller


  this.getTransformConfig = function () {
    return _this.controller.config.transform;
  }; // convenience method to add window listeners for a given gesture


  this.addWindowListeners = function (listeners) {
    _this.controller.addWindowListeners(_this.stateKey, listeners);
  }; // convenience method to remove window listeners for a given gesture


  this.removeWindowListeners = function () {
    _this.controller.removeWindowListeners(_this.stateKey);
  };
  /**
   * convenience method to update the controller state for a given gesture
   * @param sharedState shared partial state object
   * @param gestureState partial state object for the gesture handled by the recognizer
   * @param [gestureFlag] if set, will also fire the gesture handler set by the user
   */


  this.updateState = function (sharedState, gestureState, gestureFlag) {
    _this.controller.updateState(sharedState, gestureState, _this.gestureKey, gestureFlag);
  };
  /**
   * returns the start state for a given gesture
   * @param values the values of the start state
   * @param event the event that triggers the gesture start
   */


  this.getStartState = function (values, event) {
    var state = _this.getState();

    var initial = initialState[_this.stateKey];

    var transform = state.transform || event.transform || _this.getTransformConfig();

    var lastLocal = state.local || initial.local;
    return _extends({}, initial, {
      event: event,
      values: values,
      initial: values,
      previous: values,
      local: lastLocal,
      lastLocal: lastLocal,
      first: true,
      active: true,
      transform: transform,
      time: event.timeStamp,
      args: _this.args
    });
  }; // mapping this.stateKey to the state key the gesture handles
  // (ie hover actually deals with the move gesture state)


  this.stateKey = mappedKeys[gestureKey].stateKey;
};

/**
 * Abstract class for coordinates-based gesture recongizers
 */

var CoordinatesRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer, _Recognizer);

  function CoordinatesRecognizer() {
    var _this;

    _this = _Recognizer.apply(this, arguments) || this;
    /**
     * Utility function to get kinematics of the gesture
     * @values values we want to calculate the kinematics from
     * @event
     * @returns set of values including delta, velocity, velocities, distance and direction
     */

    _this.getKinematics = function (values, event) {
      // we get the gesture specific state
      var state = _this.getState();

      var xy = state.values,
          initial = state.initial,
          lastLocal = state.lastLocal,
          _state$time = state.time,
          time = _state$time === void 0 ? 0 : _state$time;

      var transform = state.transform || event.transform || _this.getTransformConfig(); // delta is the difference between the current and initial value vectors


      var delta = subV(values, initial).map(function (v, i) {
        return Object.values(transform)[i](v);
      }); // diff is the difference between the current and previous value vectors

      var diff = subV(values, xy).map(function (v, i) {
        return Object.values(transform)[i](v);
      });
      var delta_t = event.timeStamp - time;

      var _calculateAllKinemati = calculateAllKinematics(delta, diff, delta_t),
          velocity = _calculateAllKinemati.velocity,
          velocities = _calculateAllKinemati.velocities,
          distance = _calculateAllKinemati.distance,
          direction = _calculateAllKinemati.direction;

      return {
        event: event,
        values: values,
        delta: delta,
        velocity: velocity,
        velocities: velocities,
        distance: distance,
        direction: direction,
        local: addV(lastLocal, delta),
        previous: xy,
        transform: transform,
        time: event.timeStamp
      };
    };

    return _this;
  }

  return CoordinatesRecognizer;
}(Recognizer);

var DragRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer, _CoordinatesRecognize);

  function DragRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'drag', controller, args) || this;

    _this.onStart = function (event) {
      if (!_this.isEnabled()) return;

      var _getPointerEventData = getPointerEventData(event),
          values = _getPointerEventData.values,
          rest = _objectWithoutPropertiesLoose(_getPointerEventData, ["values"]); // making sure we're not dragging the element when more than one finger press the screen


      if (rest.touches > 1) return;
      var currentTarget = event.currentTarget,
          pointerId = event.pointerId;

      if (_this.pointerEventsEnabled()) {
        // if pointers events
        currentTarget && currentTarget.setPointerCapture(pointerId);
      } else {
        _this.removeWindowListeners();

        var dragListeners = [['mousemove', _this.onChange], ['mouseup', _this.onEnd], ['touchmove', _this.onChange], ['touchend', _this.onEnd], ['touchcancel', _this.onEnd]];

        _this.addWindowListeners(dragListeners);
      }

      var startState = _this.getStartState(values, event);

      _this.updateState(_extends({}, rest, {
        dragging: true,
        down: true
      }), _extends({}, startState, {
        currentTarget: currentTarget,
        pointerId: pointerId,
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      }), GestureFlag.OnStart);
    };

    _this.onChange = function (event) {
      var _this$getState = _this.getState(),
          canceled = _this$getState.canceled,
          active = _this$getState.active;

      if (canceled || !active) return;

      var _getPointerEventData2 = getPointerEventData(event),
          values = _getPointerEventData2.values,
          rest = _objectWithoutPropertiesLoose(_getPointerEventData2, ["values"]);

      if (rest.buttons === 0 && rest.touches === 0) {
        _this.onEnd(event);

        return;
      }

      var kinematics = _this.getKinematics(values, event);

      var cancel = function cancel() {
        return _this.onCancel(event);
      };

      _this.updateState(rest, _extends({}, kinematics, {
        first: false,
        cancel: cancel
      }), GestureFlag.OnChange);
    };

    _this.onEnd = function (event) {
      var state = _this.getState();

      if (!state.active) return;
      var currentTarget = state.currentTarget,
          pointerId = state.pointerId;
      if (currentTarget && _this.pointerEventsEnabled()) currentTarget.releasePointerCapture(pointerId);else _this.removeWindowListeners();

      _this.updateState({
        dragging: false,
        down: false,
        buttons: 0,
        touches: 0
      }, _extends({}, genericEndState, {
        event: event
      }), GestureFlag.OnEnd);
    };

    _this.onCancel = function (event) {
      _this.updateState(null, {
        canceled: true,
        cancel: noop
      });

      requestAnimationFrame(function () {
        return _this.onEnd(event);
      });
    };

    return _this;
  }

  var _proto = DragRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    if (this.pointerEventsEnabled()) {
      return [['onPointerDown', this.onStart], ['onPointerMove', this.onChange], [['onPointerUp', 'onPointerCancel'], this.onEnd]];
    }

    return [[['onMouseDown', 'onTouchStart'], this.onStart]];
  };

  return DragRecognizer;
}(CoordinatesRecognizer);

var ScrollRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(ScrollRecognizer, _CoordinatesRecognize);

  function ScrollRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'scroll', controller, args) || this;

    _this.onChange = function (event) {
      if (!_this.isEnabled()) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      var _getScrollEventData = getScrollEventData(event),
          values = _getScrollEventData.values,
          rest = _objectWithoutPropertiesLoose(_getScrollEventData, ["values"]);

      if (!_this.getState().active) {
        var startState = _this.getStartState(values, event);

        _this.updateState(_extends({
          scrolling: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics(values, event);

        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };

    _this.onEnd = function () {
      if (!_this.getState().active) return;

      _this.updateState({
        scrolling: false
      }, _extends({}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      }), GestureFlag.OnEnd);
    };

    return _this;
  }

  var _proto = ScrollRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    return [['onScroll', this.onChange]];
  };

  return ScrollRecognizer;
}(CoordinatesRecognizer);

var WheelRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(WheelRecognizer, _CoordinatesRecognize);

  function WheelRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'wheel', controller, args) || this;

    _this.onChange = function (event) {
      if (!_this.isEnabled()) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      var _getWheelEventData = getWheelEventData(event),
          eventValues = _getWheelEventData.values,
          rest = _objectWithoutPropertiesLoose(_getWheelEventData, ["values"]);

      var values = addV(eventValues, _this.getState().values);

      if (!_this.getState().active) {
        var startState = _this.getStartState(values, event);

        _this.updateState(_extends({
          wheeling: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics(values, event);

        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };

    _this.onEnd = function () {
      if (!_this.getState().active) return;

      _this.updateState({
        wheeling: false
      }, _extends({}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      }), GestureFlag.OnEnd);
    };

    return _this;
  }

  var _proto = WheelRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    return [['onWheel', this.onChange]];
  };

  return WheelRecognizer;
}(CoordinatesRecognizer);

var MoveRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(MoveRecognizer, _CoordinatesRecognize);

  function MoveRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'move', controller, args) || this;

    _this.onChange = function (event) {
      if (!_this.isEnabled()) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      var _getPointerEventData = getPointerEventData(event),
          values = _getPointerEventData.values,
          rest = _objectWithoutPropertiesLoose(_getPointerEventData, ["values"]);

      if (!_this.getState().active) {
        var startState = _this.getStartState(values, event);

        _this.updateState(_extends({
          moving: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics(values, event);

        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };

    _this.onEnd = function () {
      if (!_this.getState().active) return;

      _this.updateState({
        moving: false
      }, _extends({}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      }), GestureFlag.OnEnd);
    };

    return _this;
  }

  var _proto = MoveRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    if (this.pointerEventsEnabled()) {
      return [['onPointerMove', this.onChange]];
    }

    return [['onMouseMove', this.onChange]];
  };

  return MoveRecognizer;
}(CoordinatesRecognizer);

var HoverRecognizer =
/*#__PURE__*/
function (_CoordinatesRecognize) {
  _inheritsLoose(HoverRecognizer, _CoordinatesRecognize);

  function HoverRecognizer(controller, args) {
    var _this;

    _this = _CoordinatesRecognize.call(this, 'hover', controller, args) || this;

    _this.onStart = function (event) {
      if (!_this.isEnabled()) return;

      var _getPointerEventData = getPointerEventData(event),
          values = _getPointerEventData.values,
          rest = _objectWithoutPropertiesLoose(_getPointerEventData, ["values"]);

      _this.updateState(_extends({
        hovering: true
      }, rest), {
        values: values,
        event: event,
        args: _this.args
      }, GestureFlag.OnChange);
    };

    _this.onEnd = function (event) {
      if (!_this.isEnabled()) return;

      var _getPointerEventData2 = getPointerEventData(event),
          values = _getPointerEventData2.values,
          rest = _objectWithoutPropertiesLoose(_getPointerEventData2, ["values"]);

      var kinematics = _this.getKinematics(values, event);

      _this.updateState(_extends({
        hovering: false,
        moving: false
      }, rest), _extends({}, kinematics, {}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      })); // when the mouse leaves the element, we also fire the move handler
      // without waiting for move to end with debounce


      _this.controller.fireGestureHandler('move', GestureFlag.OnEnd);

      _this.controller.fireGestureHandler('hover', GestureFlag.OnChange);
    };

    return _this;
  }

  var _proto = HoverRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    if (this.pointerEventsEnabled()) {
      return [['onPointerEnter', this.onStart], ['onPointerLeave', this.onEnd]];
    }

    return [['onMouseEnter', this.onStart], ['onMouseLeave', this.onEnd]];
  };

  return HoverRecognizer;
}(CoordinatesRecognizer);

/**
 * Abstract class for distance/angle-based gesture recongizers
 */

var DistanceAngleRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(DistanceAngleRecognizer, _Recognizer);

  function DistanceAngleRecognizer() {
    var _this;

    _this = _Recognizer.apply(this, arguments) || this;
    /**
     * Utility function to get kinematics of the gesture
     * @d distance
     * @a angle
     * @event
     * @returns set of values including delta, velocities, turns
     */

    _this.getKinematics = function (_ref, event) {
      var d = _ref[0],
          a = _ref[1];

      var state = _this.getState();

      var da = state.values,
          turns = state.turns,
          initial = state.initial,
          lastLocal = state.lastLocal,
          _state$time = state.time,
          time = _state$time === void 0 ? 0 : _state$time; // angle might not be defined when ctrl wheel is used for zoom only
      // in that case we set it to the previous angle value

      a = a === undefined ? da[1] : a;
      var diff_d = d - da[0];
      var diff_a = a - da[1];
      /**
       * The angle value might jump from 179deg to -179deg when we actually want to
       * read 181deg to ensure continuity. To make that happen, we detect when the jump
       * is supsiciously high (ie > 300deg) and increase the `turns` value
       */

      var newTurns = Math.abs(diff_a) > 300 ? turns + Math.sign(diff_a) : turns; // we update the angle difference to its corrected value

      diff_a -= 360 * newTurns;
      var delta_d = d - initial[0];
      var delta_a = a - 360 * newTurns - initial[1];
      var delta = [delta_d, delta_a];
      var delta_t = event.timeStamp - time;
      var velocities = calculateVelocities([diff_d, diff_a], delta_t);
      return {
        event: event,
        values: [d, a],
        delta: delta,
        velocities: velocities,
        turns: newTurns,
        local: addV(lastLocal, delta),
        previous: da,
        time: event.timeStamp
      };
    };

    return _this;
  }

  return DistanceAngleRecognizer;
}(Recognizer);

var PinchRecognizer =
/*#__PURE__*/
function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchRecognizer, _DistanceAngleRecogni);

  function PinchRecognizer(controller, args) {
    var _this;

    _this = _DistanceAngleRecogni.call(this, 'pinch', controller, args) || this;

    _this.onStart = function (event) {
      if (!_this.isEnabled() || event.touches.length !== 2) return;

      var _getTwoTouchesEventDa = getTwoTouchesEventData(event),
          values = _getTwoTouchesEventDa.values,
          origin = _getTwoTouchesEventDa.origin,
          rest = _objectWithoutPropertiesLoose(_getTwoTouchesEventDa, ["values", "origin"]);

      var startState = _this.getStartState(values, event);

      _this.updateState(_extends({}, rest, {
        pinching: true,
        down: true
      }), _extends({}, startState, {
        origin: origin,
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      }), GestureFlag.OnStart);
    };

    _this.onChange = function (event) {
      var _this$getState = _this.getState(),
          canceled = _this$getState.canceled,
          active = _this$getState.active;

      if (canceled || !active || event.touches.length !== 2) return;

      var _getTwoTouchesEventDa2 = getTwoTouchesEventData(event),
          values = _getTwoTouchesEventDa2.values,
          origin = _getTwoTouchesEventDa2.origin,
          rest = _objectWithoutPropertiesLoose(_getTwoTouchesEventDa2, ["values", "origin"]);

      var kinematics = _this.getKinematics(values, event);

      var cancel = function cancel() {
        return _this.onCancel(event);
      };

      _this.updateState(rest, _extends({}, kinematics, {
        origin: origin,
        first: false,
        cancel: cancel
      }), GestureFlag.OnChange);
    };

    _this.onEnd = function (event) {
      if (!_this.getState().active) return;

      _this.updateState({
        pinching: false,
        down: false,
        touches: 0
      }, _extends({}, genericEndState, {
        event: event
      }), GestureFlag.OnEnd);
    };

    _this.onCancel = function (event) {
      _this.updateState(null, {
        canceled: true,
        cancel: noop
      });

      requestAnimationFrame(function () {
        return _this.onEnd(event);
      });
    };

    return _this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    return [['onTouchStart', this.onStart], ['onTouchMove', this.onChange], [['onTouchEnd', 'onTouchCancel'], this.onEnd]];
  };

  return PinchRecognizer;
}(DistanceAngleRecognizer);

var PinchWheelRecognizer =
/*#__PURE__*/
function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchWheelRecognizer, _DistanceAngleRecogni);

  function PinchWheelRecognizer(controller, args) {
    var _this;

    _this = _DistanceAngleRecogni.call(this, 'pinch', controller, args) || this;

    _this.onChange = function (event) {
      if (!_this.isEnabled() || !event.ctrlKey) return;
      event.preventDefault();

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      var _getWheelEventData = getWheelEventData(event),
          values = _getWheelEventData.values,
          rest = _objectWithoutPropertiesLoose(_getWheelEventData, ["values"]);

      var d = _this.getState().values[0] - values[1];

      if (!_this.getState().active) {
        var startState = _this.getStartState([d, 0], event);

        _this.updateState(_extends({
          pinching: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics([d, undefined], event);

        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };

    _this.onEnd = function () {
      if (!_this.getState().active) return;

      _this.updateState({
        pinching: false,
        down: false,
        touches: 0
      }, _extends({}, genericEndState), GestureFlag.OnEnd);
    };

    return _this;
  }

  var _proto = PinchWheelRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    return [['onWheel', this.onChange]];
  };

  return PinchWheelRecognizer;
}(DistanceAngleRecognizer);

var SCALE_FACTOR = 260;

var PinchWebKitGestureRecognizer =
/*#__PURE__*/
function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchWebKitGestureRecognizer, _DistanceAngleRecogni);

  function PinchWebKitGestureRecognizer(controller, args) {
    var _this;

    _this = _DistanceAngleRecogni.call(this, 'pinch', controller, args) || this;

    _this.onStart = function (event) {
      if (!_this.isEnabled()) return;
      event.preventDefault();
      var da = [event.scale * SCALE_FACTOR, event.rotation];

      var startState = _this.getStartState(da, event);

      _this.updateState({
        pinching: true,
        down: true,
        touches: 2
      }, _extends({}, startState, {
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      }), GestureFlag.OnStart);
    };

    _this.onChange = function (event) {
      var _this$getState = _this.getState(),
          canceled = _this$getState.canceled,
          active = _this$getState.active;

      if (canceled || !active) return;
      event.preventDefault();
      var da = [event.scale * SCALE_FACTOR, event.rotation];

      var kinematics = _this.getKinematics(da, event);

      var cancel = function cancel() {
        return _this.onCancel(event);
      };

      _this.updateState(null, _extends({}, kinematics, {
        first: false,
        cancel: cancel
      }), GestureFlag.OnChange);
    };

    _this.onEnd = function (event) {
      if (!_this.getState().active) return;
      event.preventDefault();

      _this.updateState({
        pinching: false,
        down: false,
        touches: 0
      }, _extends({}, genericEndState, {
        event: event
      }), GestureFlag.OnEnd);
    };

    _this.onCancel = function (event) {
      _this.updateState(null, {
        canceled: true,
        cancel: noop
      });

      requestAnimationFrame(function () {
        return _this.onEnd(event);
      });
    };

    _this.updateTouchData = function (event) {
      if (!_this.isEnabled() || event.touches.length !== 2) return;

      var _getTwoTouchesEventDa = getTwoTouchesEventData(event),
          origin = _getTwoTouchesEventDa.origin;

      _this.updateState(null, {
        origin: origin
      });
    };

    return _this;
  }

  var _proto = PinchWebKitGestureRecognizer.prototype;

  _proto.getEventBindings = function getEventBindings() {
    return [['onGestureStart', this.onStart], ['onGestureChange', this.onChange], [['onGestureEnd', 'onTouchCancel'], this.onEnd], [['onTouchStart', 'onTouchMove'], this.updateTouchData]];
  };

  return PinchWebKitGestureRecognizer;
}(DistanceAngleRecognizer);

/**
 * Gesture controller will create gesture recognizers (which handle the gesture logic)
 * and keep track of the state for all gestures
 *
 * @template BinderType the type the bind function should return
 */

var GestureController = function GestureController(handlers, config) {
  var _this = this;

  this.handlers = handlers;
  this.config = config;
  this.state = initialState; // state for all gestures

  this.timeouts = {}; // keeping track of timeouts for debounced gestures (such as move, scroll, wheel)

  this.bindings = {}; // an object holding the handlers associated to the gestures

  this.domListeners = []; // when config.domTarget is set, we attach events directly to the dom

  this.windowListeners = {}; // keeps track of window listeners added by gestures (drag only at the moment)

  /**
   * Function run on component unmount
   * Cleans timeouts and removes dom listeners set by the bind function
   */

  this.clean = function () {
    _this.cleanOnBind();

    Object.values(_this.timeouts).forEach(clearTimeout);
    Object.keys(_this.windowListeners).forEach(function (stateKey) {
      return _this.removeWindowListeners(stateKey);
    });
  };
  /**
   * Function run every time the bind function is run (ie on every render)
   * Reset the binding object and remove dom listeners attached to config.domTarget
   */


  this.cleanOnBind = function () {
    _this.bindings = {};
    var domTarget = _this.config.domTarget;

    if (domTarget) {
      removeListeners(domTarget, _this.domListeners, _this.config.event);
      _this.domListeners = [];
    }
  };
  /**
   * Commodity function to let gesture recognizer update global state
   * @param sharedState shared partial state object
   * @param gestureState partial gesture specific state object
   * @param gestureKey the gesture key ('drag', 'move'...)
   * @param [gestureFlag] if set, will also fire the gesture handler set by the user
   */


  this.updateState = function (sharedState, gestureState, gestureKey, gestureFlag) {
    var _extends2;

    var stateKey = mappedKeys[gestureKey].stateKey;
    _this.state = _extends({}, _this.state, (_extends2 = {
      shared: _extends({}, _this.state.shared, {}, sharedState)
    }, _extends2[stateKey] = _extends({}, _this.state[stateKey], {}, gestureState), _extends2));

    if (gestureFlag) {
      _this.fireGestureHandler(gestureKey, gestureFlag);
    }
  }; // fire the gesture handler defined by the user


  this.fireGestureHandler = function (gestureKey, gestureFlag) {
    // gets the state key and handler key from the gesture key
    // gestureKey: 'hover' -> stateKey: 'move', handlerKey: 'onHover'
    var _mappedKeys$gestureKe = mappedKeys[gestureKey],
        stateKey = _mappedKeys$gestureKe.stateKey,
        handlerKey = _mappedKeys$gestureKe.handlerKey;

    var state = _extends({}, _this.state.shared, {}, _this.state[stateKey]);

    if (gestureKey === 'pinch') {
      var pinchState = state;
      pinchState.da = state.values; // legacy state attribute for pinch gestures

      pinchState.vdva = state.velocities; // legacy state attribute for pinch gestures
    } else {
      var coordinatesState = state;
      coordinatesState.xy = state.values; // legacy state attribute for xy gestures

      coordinatesState.vxvy = state.velocities; // legacy state attribute for xy gestures
    } // TODO to be removed in future versions


    state.temp = state.memo; // legacy temp attribute

    if (gestureFlag === GestureFlag.OnStart) {
      var handlerStart = handlerKey + "Start";
      var _handler = _this.handlers[handlerStart];
      _handler && _handler(state);
    } // whenever a flag is set, we run the default on[Gesture] function
    // i.e. GestureFlag.OnStart would trigger both onDragStart and onDrag


    var handler = _this.handlers[handlerKey];

    if (handler) {
      var newMemo = handler(state);
      _this.state[stateKey].memo = newMemo !== undefined ? newMemo : _this.state[stateKey].memo;
    }

    if (gestureFlag === GestureFlag.OnEnd) {
      var handlerEnd = handlerKey + "End";
      var _handler2 = _this.handlers[handlerEnd];
      _handler2 && _handler2(state);
    }
  };
  /**
   * Commodity function to let recognizers simply add listeners to config.window
   * @param stateKey
   * @param listeners
   */


  this.addWindowListeners = function (stateKey, listeners) {
    if (!_this.config.window) return; // we use this.windowListeners to keep track of the listeners we add

    _this.windowListeners[stateKey] = listeners;
    addListeners(_this.config.window, listeners, _this.config.event);
  }; // commodity function to let recognizers simply remove listeners from config.window


  this.removeWindowListeners = function (stateKey) {
    if (!_this.config.window) return;
    var listeners = _this.windowListeners[stateKey];

    if (listeners) {
      removeListeners(_this.config.window, listeners, _this.config.event);
      delete _this.windowListeners[stateKey];
    }
  };
  /**
   * Adds a recognizer to this.bindings
   * @param recognizer
   */


  this.addRecognizer = function (recognizer) {
    recognizer.getEventBindings().map(_this.addEventBindings);
  };
  /**
   * this.bindings is an object which keys match ReactEventHandlerKeys (onMouseMove, onTouchStart...).
   * Since a recognizer might want to bind a handler function to an event key already used by a previously
   * added recognizer, we need to make sure that each event key is an array of all the functions mapped for
   * that key.
   */


  this.addEventBindings = function (_ref) {
    var eventNames = _ref[0],
        fn = _ref[1];
    var eventNamesArray = !Array.isArray(eventNames) ? [eventNames] : eventNames;
    eventNamesArray.forEach(function (eventName) {
      _this.bindings[eventName] = _this.bindings[eventName] ? [].concat(_this.bindings[eventName], [fn]) : [fn];
    });
  };
  /**
   * When config.domTarget is set, this function will add dom listeners to it
   */


  this.addDomTargetListeners = function () {
    var domTarget = _this.config.domTarget; // we iterate on the entries of this.binding
    // for each event, we chain the array of functions mapped to it
    // and push it to this.domListeners

    Object.entries(_this.bindings).forEach(function (_ref2) {
      var event = _ref2[0],
          fns = _ref2[1];

      _this.domListeners.push([event.substr(2).toLowerCase(), chainFns.apply(void 0, fns)]);
    });
    addListeners(domTarget, _this.domListeners, _this.config.event);
  };
  /**
   * getBindings will return an object that will be bound by users
   * to the react component they want to interact with
   */


  this.getBindings = function () {
    var output = {};
    var captureString = _this.config.event.capture ? 'Capture' : '';
    Object.entries(_this.bindings).forEach(function (_ref3) {
      var event = _ref3[0],
          fns = _ref3[1];
      var fnsArray = Array.isArray(fns) ? fns : [fns];
      var key = event + captureString;
      output[key] = chainFns.apply(void 0, fnsArray);
    });
    return output;
  };

  this.bind = function () {
    // if handlers contains {onDragStart, onDrag, onDragEnd, onMoveStart, onMove}
    // actions will skip on[Gesture]["Start"|"End"] functions and include
    // ['onDrag', 'onMove']
    var actions = new Set(Object.keys(_this.handlers).filter(function (k) {
      return k.indexOf('on') === 0;
    }).map(function (k) {
      var match = k.match(/(on[A-Z][a-z]+)/);
      return match ? match[1] : undefined;
    }));
    var domTarget = _this.config.domTarget;

    var genuineHandlers = _extends({}, _this.handlers); // cleaning before adding


    _this.cleanOnBind();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (actions.has('onDrag')) {
      _this.addRecognizer(new DragRecognizer(_this, args));

      delete genuineHandlers.onDrag;
      delete genuineHandlers.onDragStart;
      delete genuineHandlers.onDragEnd;
    }

    if (actions.has('onScroll')) {
      _this.addRecognizer(new ScrollRecognizer(_this, args));

      delete genuineHandlers.onScroll;
      delete genuineHandlers.onScrollStart;
      delete genuineHandlers.onScrollEnd;
    }

    if (actions.has('onWheel')) {
      _this.addRecognizer(new WheelRecognizer(_this, args));

      delete genuineHandlers.onWheel;
      delete genuineHandlers.onWheelStart;
      delete genuineHandlers.onWheelEnd;
    }

    if (actions.has('onMove')) {
      _this.addRecognizer(new MoveRecognizer(_this, args));

      delete genuineHandlers.onMove;
      delete genuineHandlers.onMoveStart;
      delete genuineHandlers.onMoveEnd;
    }

    if (actions.has('onHover')) {
      _this.addRecognizer(new HoverRecognizer(_this, args));

      delete genuineHandlers.onHover;
    }

    if (actions.has('onPinch')) {
      // since react doesn't have handlers for gesture events we can only use them
      // domTarget is set (and when the browser supprots them).
      if (domTarget && supportsGestureEvent()) {
        _this.addRecognizer(new PinchWebKitGestureRecognizer(_this, args));
      } else {
        _this.addRecognizer(new PinchRecognizer(_this, args));

        _this.addRecognizer(new PinchWheelRecognizer(_this, args));
      }

      delete genuineHandlers.onPinch;
      delete genuineHandlers.onPinchStart;
      delete genuineHandlers.onPinchEnd;
    } // we also add event bindings for genuine handlers


    Object.entries(genuineHandlers).map(function (_ref4) {
      var event = _ref4[0],
          fn = _ref4[1];

      // we're cheating when it comes to event type :(
      _this.addEventBindings([event, fn]);
    }); // if config.domTarget is set we add event listeners to it and return the clean function

    if (domTarget) {
      _this.addDomTargetListeners();

      return _this.clean;
    } // if not, we return an object that contains gesture handlers mapped to react handler event keys


    return _this.getBindings();
  };
};

function useGesture(handlers, config) {
  // the gesture controller will keep track of all gesture states
  var gestureController = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  if (!gestureController.current) {
    // we initialize the gesture controller once
    gestureController.current = new GestureController(getDerivedHandlers(handlers), getDerivedConfig(config));
  }

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    // every time handlers or config change, we let the gesture controller compute
    // them so that the gesture handlers functions are aware of the changes
    gestureController.current.config = getDerivedConfig(config);
    gestureController.current.handlers = getDerivedHandlers(handlers);
  }, [handlers, config]); // when the user component unmounts, we run our gesture controller clean function

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    return gestureController.current.clean;
  }, []); // we return the bind function of our controller, which returns an binding object or
  // a cleaning function depending on whether config.domTarget is set

  return gestureController.current.bind;
}
/* SHORTHAND HANDLERS */

var useDrag = function useDrag(handler, config) {
  return useGesture({
    onDrag: handler
  }, config);
};
var useMove = function useMove(handler, config) {
  return useGesture({
    onMove: handler
  }, config);
};
var useHover = function useHover(handler, config) {
  return useGesture({
    onHover: handler
  }, config);
};
var useScroll = function useScroll(handler, config) {
  return useGesture({
    onScroll: handler
  }, config);
};
var useWheel = function useWheel(handler, config) {
  return useGesture({
    onWheel: handler
  }, config);
};
var usePinch = function usePinch(handler, config) {
  return useGesture({
    onPinch: handler
  }, config);
};

function getDerivedHandlers(handlers) {
  if (typeof handlers === 'function') return {
    onDrag: handlers
  };

  var onAction = handlers.onAction,
      rest = _objectWithoutPropertiesLoose(handlers, ["onAction"]);

  var derivedHandlers = rest;
  if (onAction) derivedHandlers.onDrag = onAction;
  return derivedHandlers;
}

function getDerivedConfig(config) {
  var derivedConfig = _extends({}, defaultConfig, {}, config);

  var domTarget = derivedConfig.domTarget;
  var realDomTarget = domTarget && 'current' in domTarget ? domTarget.current : domTarget;
  derivedConfig.domTarget = realDomTarget;
  return derivedConfig;
}


//# sourceMappingURL=react-use-gesture.esm.js.map


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ProductView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/ProductView */ "./component/ProductView.js");
/* harmony import */ var _component_ProductViewMini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/ProductViewMini */ "./component/ProductViewMini.js");
/* harmony import */ var _component_ProductosMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/ProductosMini */ "./component/ProductosMini.js");
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\single.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function single() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_component_ProductView__WEBPACK_IMPORTED_MODULE_1__["default"], {
    wrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=single.js.10466dda494d4898a8cd.hot-update.js.map