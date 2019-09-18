webpackHotUpdate("static\\development\\pages\\index.js",{

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
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductosMini.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function ProductosMini() {
  return __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "150",
    height: "240",
    margin: "10",
    slides: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxjb21wb25lbnRcXFByb2R1Y3Rvc01pbmkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWUiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxqc3RvcmVcXGNvbXBvbmVudFxcUHJvZHVjdG9zTWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RWaWV3TWluaSBmcm9tICcuL1Byb2R1Y3RWaWV3TWluaSc7XHJcbmltcG9ydCBQcm9kdWN0VmlldyBmcm9tICcuL1Byb2R1Y3RWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3Rvc01pbmkoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDYXJvdXNlbCB3aWR0aD0nMTUwJyBoZWlnaHQ9JzI0MCcgbWFyZ2luPScxMCcgc2xpZGVzPSc3Jz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsX19pdGVtJyAvPlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuXHRcdDwvQ2Fyb3VzZWw+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\component\\ProductosMini.js */"));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Carousel */ "./component/Carousel.js");
/* harmony import */ var _component_MarcasDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/MarcasDisplay */ "./component/MarcasDisplay.js");
/* harmony import */ var _component_Productos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/Productos */ "./component/Productos.js");
/* harmony import */ var _component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/ProductosMini */ "./component/ProductosMini.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _component_MainDisplayer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/MainDisplayer */ "./component/MainDisplayer.js");
/* harmony import */ var _component_Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/Navbar */ "./component/Navbar.js");
/* harmony import */ var _component_ProductView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/ProductView */ "./component/ProductView.js");
/* harmony import */ var _component_ProductViewMini__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../component/ProductViewMini */ "./component/ProductViewMini.js");
/* harmony import */ var _component_BrandDisplayer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../component/BrandDisplayer */ "./component/BrandDisplayer.js");
/* harmony import */ var _component_Selector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../component/Selector */ "./component/Selector.js");
/* harmony import */ var _component_Filtros__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../component/Filtros */ "./component/Filtros.js");





var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;














var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-443793056",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-443793056",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), __jsx(_component_Navbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-443793056" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "443793056",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-443793056{max-width:1150px;width:100%;padding:0;padding-top:80px;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-443793056{padding-left:10px;}h2.jsx-443793056{font-size:1rem;font-weight:400;text-transform:uppercase;}.ofertas.jsx-443793056{padding-left:10px;}.search.jsx-443793056{padding:2em 0;margin:0;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}hr{border-width:0px;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-443793056{padding-top:150px;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUVnRyxBQUd4RSxBQVNDLEFBSUgsQUFLRyxBQUdKLEFBSUssQUFNTCxBQUdHLEFBSUgsQUFJSSxBQUdDLEFBR08sY0ExQmpCLEFBVVYsQ0FsQmlCLEVBYkwsQUFrQ1osQUFRQyxDQWpDRCxBQVNBLEFBMkJDLENBcEJTLElBSFYsRUEwQkMsR0EvQ1UsQUF5QlEsR0FaTyxPQVpSLFFBeUJvQixTQXhCckIsQ0FZakIsZUFYb0IsR0FrQ0ssUUFWekIsUUF2QkEsbUZBa0NDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcanN0b3JlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50L0Nhcm91c2VsJztcclxuaW1wb3J0IE1hcmNhc0Rpc3BsYXkgZnJvbSAnLi4vY29tcG9uZW50L01hcmNhc0Rpc3BsYXknO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gJy4uL2NvbXBvbmVudC9Qcm9kdWN0b3MnO1xyXG5pbXBvcnQgUHJvZHVjdG9zTWluaSBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdG9zTWluaSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNYWluRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudC9NYWluRGlzcGxheWVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnQvTmF2YmFyJztcclxuaW1wb3J0IFByb2R1Y3RWaWV3IGZyb20gJy4uL2NvbXBvbmVudC9Qcm9kdWN0Vmlldyc7XHJcbmltcG9ydCBQcm9kdWN0Vmlld01pbmkgZnJvbSAnLi4vY29tcG9uZW50L1Byb2R1Y3RWaWV3TWluaSc7XHJcbmltcG9ydCBCcmFuZERpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnQvQnJhbmREaXNwbGF5ZXInO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50L1NlbGVjdG9yJztcclxuaW1wb3J0IEZpbHRyb3MgZnJvbSAnLi4vY29tcG9uZW50L0ZpbHRyb3MnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHQ8TmF2YmFyIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTE1MHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDgwcHg7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDRyZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnRpZW5kYXMge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQub2ZlcnRhcyB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zZWFyY2gge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAyZW0gMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Omdsb2JhbCgqKSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjQ2NDY0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Omdsb2JhbChocikge1xyXG5cdFx0XHRcdFx0XHRib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKCNmbGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTUwcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\jstore\\pages\\index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.5fd3cba017d505621d2b.hot-update.js.map