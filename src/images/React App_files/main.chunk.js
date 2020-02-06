(this["webpackJsonpapp-example"] = this["webpackJsonpapp-example"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BarSlider/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/BarSlider/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".slide-bar-container {\n  display: flex; }\n  .slide-bar-container .range-bar {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    align-items: flex-end;\n    margin-right: 5px; }\n    .slide-bar-container .range-bar span {\n      color: #FFFFFF;\n      font-size: 20px; }\n    .slide-bar-container .range-bar .bottom-range {\n      position: absolute;\n      bottom: 0; }\n  .slide-bar-container .slide-bar {\n    height: 300px;\n    width: 50px;\n    cursor: pointer;\n    background: #FD4239; }\n    .slide-bar-container .slide-bar .green {\n      width: 100%;\n      background: #4ABF07; }\n\n.tooltip {\n  position: absolute;\n  width: 50px;\n  height: 30px;\n  cursor: pointer;\n  color: #FFFFFF;\n  background: #2A2C30;\n  font-size: 23px;\n  text-align: center;\n  line-height: 30px; }\n  .tooltip::before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 0px;\n    left: 5px;\n    top: 50%;\n    border: 15px solid transparent;\n    border-left: 0;\n    border-right: 15px solid #2A2C30;\n    transform: translate(calc(-100% - 5px), -50%); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/index.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/Header/index.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header {\n  background: #0076BE;\n  width: 100%;\n  height: 40px;\n  position: fixed;\n  z-index: 9;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n  .header .icon {\n    height: 30px;\n    width: 30px;\n    line-height: 40px;\n    border-radius: 50%;\n    background-color: #FFFFFF; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Input/index.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/Input/index.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".input-container {\n  display: flex; }\n  .input-container .blu-btn {\n    background: #0076BE80;\n    color: #FFFFFF;\n    border: none;\n    cursor: pointer; }\n    .input-container .blu-btn:nth-child(3) {\n      border-bottom-right-radius: 5px;\n      border-top-right-radius: 5px;\n      margin-left: 1px; }\n\n.form-group {\n  position: relative;\n  padding: 15px 0 0;\n  background: #002F4B;\n  width: 150px;\n  border-bottom-left-radius: 5px;\n  border-top-left-radius: 5px; }\n  .form-group img {\n    width: 15px;\n    position: absolute;\n    left: 5px;\n    bottom: 10px; }\n\n.form-field {\n  font-family: inherit;\n  border: 0;\n  outline: 0;\n  font-size: 14px;\n  color: #FFFFFF;\n  padding: 7px 23px;\n  background: transparent;\n  width: 85%;\n  padding: 7px 0 7px 23px; }\n  .form-field::placeholder {\n    color: transparent; }\n  .form-field:placeholder-shown ~ .form-label {\n    cursor: text;\n    top: 20px; }\n\n.form-label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  color: #939393;\n  padding-left: 23px;\n  padding-top: 5px;\n  font-size: 14px; }\n\n.form-field:focus {\n  padding-bottom: 7px;\n  border-image-slice: 1; }\n  .form-field:focus ~ .form-label {\n    position: absolute;\n    top: 0;\n    display: block;\n    transition: 0.2s;\n    color: #638294; }\n\n.form-field:required, .form-field:invalid {\n  box-shadow: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Modal/index.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/Modal/index.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal-container {\n  width: 100%;\n  height: 100vh; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/SVGAnimation/index.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/SVGAnimation/index.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".clam-animation {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  cursor: pointer; }\n  .clam-animation:hover .clam-animation-shell {\n    top: 60px;\n    transition: top 1s; }\n  .clam-animation .clam-animation-shell {\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    top: 79px;\n    transition: top 1s; }\n  .clam-animation img {\n    display: block; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Table/index.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/Table/index.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table-container {\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 5px;\n  overflow: hidden;\n  background: #002F4B;\n  min-width: 500px; }\n  .table-container .table-container-header {\n    display: flex;\n    background: #0076BE80; }\n    .table-container .table-container-header div {\n      text-align: left;\n      height: 30px;\n      line-height: 30px;\n      color: #638294;\n      width: 25%; }\n      .table-container .table-container-header div:nth-child(1) {\n        padding-left: 10px; }\n  .table-container .row {\n    display: flex;\n    height: 30px;\n    line-height: 30px;\n    font-size: 13px; }\n    .table-container .row div {\n      color: #FFFFFF;\n      width: 25%; }\n      .table-container .row div:nth-child(1) {\n        padding-left: 10px; }\n      .table-container .row div.positive {\n        color: #CC3A33; }\n      .table-container .row div.negative {\n        color: #4ABF07; }\n\n@media only screen and (max-width: 550px) {\n  .table-container {\n    min-width: 100px; }\n    .table-container .table-container-header div {\n      width: 50%; }\n    .table-container .row div {\n      width: 50%; }\n    .table-container .hide-mobile {\n      display: none; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/page/index.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/page/index.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-container {\n  padding: 80px 10px 0; }\n  .page-container .section {\n    display: flex;\n    justify-content: space-around; }\n    .page-container .section .section-item {\n      background: #313541;\n      border-radius: 5px;\n      padding: 20px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center; }\n      .page-container .section .section-item .slide-bar-item {\n        margin-bottom: 20px; }\n  @media only screen and (max-width: 1100px) {\n    .page-container .section {\n      display: flex;\n      flex-direction: column; }\n      .page-container .section .section-item {\n        margin-top: 20px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/global.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/scss/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: #2A2C30;\n  height: 100%;\n  width: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/reset.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/scss/reset.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page/index.js");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/reset.scss */ "./src/scss/reset.scss");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_reset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/global.scss */ "./src/scss/global.scss");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http */ "./src/http.js");
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/App.js";








function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
    client: _http__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/BarSlider/index.js":
/*!*******************************************!*\
  !*** ./src/components/BarSlider/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/components/BarSlider/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/components/BarSlider/index.js";





class BarSlider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      tooltip: {},
      greenBarHeight: 0
    };

    this.handelOnMouseMove = e => {
      const extraMarginLeft = 25;
      const extraMarginTop = 12;
      const extraPixel = 1;
      let boundingClient = this.slideBar.getBoundingClientRect();
      let height = boundingClient.height;
      let top = boundingClient.top;
      let percentage = 100 - (e.pageY - top) * 100 / height;
      this.setState({
        tooltip: {
          top: e.pageY - extraMarginTop,
          left: e.pageX + extraMarginLeft,
          percentage: Math.floor(percentage)
        },
        greenBarHeight: e.pageY - top + extraPixel
      });
    };

    this.getTooltip = () => {
      let {
        tooltip: {
          top,
          left,
          percentage
        }
      } = this.state;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"])(percentage)) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tooltip",
        style: {
          top,
          left
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, percentage);
    };
  }

  render() {
    let {
      greenBarHeight
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide-bar-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "range-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "100"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bottom-range",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide-bar",
      ref: node => this.slideBar = node,
      onMouseMove: this.handelOnMouseMove,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "green",
      style: {
        height: greenBarHeight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))), this.getTooltip());
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (BarSlider);

/***/ }),

/***/ "./src/components/BarSlider/index.scss":
/*!*********************************************!*\
  !*** ./src/components/BarSlider/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BarSlider/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BarSlider/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BarSlider/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/components/Header/index.js";



const Header = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/index.scss":
/*!******************************************!*\
  !*** ./src/components/Header/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/components/Input/index.js":
/*!***************************************!*\
  !*** ./src/components/Input/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_dolarIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/dolarIcon.png */ "./src/images/dolarIcon.png");
/* harmony import */ var _images_dolarIcon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_dolarIcon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/components/Input/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/components/Input/index.js";






class Input extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: ''
    };

    this.handelOnChange = ({
      target: {
        value
      }
    }) => {
      this.setState({
        value
      });
    };

    this.getDividedValue = () => {
      let {
        value
      } = this.state;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNaN"])(parseInt(value))) {
        return;
      }

      this.setState({
        value: value / 2
      });
    };

    this.getMultipleValue = () => {
      let {
        value
      } = this.state;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNaN"])(parseInt(value))) {
        return;
      }

      this.setState({
        value: value * 2
      });
    };
  }

  render() {
    let {
      value
    } = this.state;
    let {
      label,
      id
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_dolarIcon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "input",
      className: "form-field",
      placeholder: "Bet Amount",
      value: value,
      onChange: this.handelOnChange,
      id: id,
      name: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: id,
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, label)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "blu-btn",
      onClick: this.getDividedValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "1/2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "blu-btn",
      onClick: this.getMultipleValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "x2"));
  }

}

;
Input.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Input.defaultProps = {
  id: null,
  label: null
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/Input/index.scss":
/*!*****************************************!*\
  !*** ./src/components/Input/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Input/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Input/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Input/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/Modal/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/components/Modal/index.js";



class Modal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "kjljljkl"));
  }

}

/***/ }),

/***/ "./src/components/Modal/index.scss":
/*!*****************************************!*\
  !*** ./src/components/Modal/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Modal/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Modal/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Modal/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/components/SVGAnimation/index.js":
/*!**********************************************!*\
  !*** ./src/components/SVGAnimation/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_component_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/component_2.png */ "./src/images/component_2.png");
/* harmony import */ var _images_component_2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_component_2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_component_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/component.png */ "./src/images/component.png");
/* harmony import */ var _images_component_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_component_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/components/SVGAnimation/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/components/SVGAnimation/index.js";






const SVGAnimation = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clam-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_component_2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "clam-animation-shell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_component_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "clam-animation-clam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SVGAnimation);

/***/ }),

/***/ "./src/components/SVGAnimation/index.scss":
/*!************************************************!*\
  !*** ./src/components/SVGAnimation/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/SVGAnimation/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/SVGAnimation/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/SVGAnimation/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/components/Table/index.js":
/*!***************************************!*\
  !*** ./src/components/Table/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/components/Table/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/components/Table/index.js";




const BETS = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
{
    bets {
      id
      time
      bet
      payout
      profit
    }
  }
`;

const Table = () => {
  const {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(BETS);

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, "loading..."));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-container-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hide-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Bet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hide-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Multiplier"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Profit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, data.bets.map(item => {
    let date = new Date(item.time);
    let options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };
    let result = date.toLocaleDateString('en', options);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.id,
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, result), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hide-mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, item.bet / 1000), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hide-mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, `x${item.payout / 4}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${item.profit > 0 ? 'positive' : 'negative'}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, item.profit / 1000));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/components/Table/index.scss":
/*!*****************************************!*\
  !*** ./src/components/Table/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Table/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Table/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Table/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: BarSlider, Input, Table, Header, SVGAnimation, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarSlider */ "./src/components/BarSlider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarSlider", function() { return _BarSlider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./src/components/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table */ "./src/components/Table/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _SVGAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SVGAnimation */ "./src/components/SVGAnimation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGAnimation", function() { return _SVGAnimation__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/http.js":
/*!*********************!*\
  !*** ./src/http.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
 // import { gql } from "apollo-boost";

const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["default"]({
  uri: 'http://gambilife.com/graphql'
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./src/images/component.png":
/*!**********************************!*\
  !*** ./src/images/component.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/component.700253d8.png";

/***/ }),

/***/ "./src/images/component_2.png":
/*!************************************!*\
  !*** ./src/images/component_2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/dolarIcon.png":
/*!**********************************!*\
  !*** ./src/images/dolarIcon.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dolarIcon.2a297816.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/page/index.js":
/*!***************************!*\
  !*** ./src/page/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/reset.scss */ "./src/scss/reset.scss");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_reset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/page/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Sona/Desktop/unwork/app-example/src/page/index.js";





const Page = ({ ...props
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-bar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["BarSlider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: "betAmount",
    label: "Bet Amount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-item svg-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["SVGAnimation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/page/index.scss":
/*!*****************************!*\
  !*** ./src/page/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/page/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/page/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/page/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/scss/global.scss":
/*!******************************!*\
  !*** ./src/scss/global.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/global.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/global.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/global.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./reset.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/reset.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./reset.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/reset.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./reset.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/reset.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Sona/Desktop/unwork/app-example/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/Sona/Desktop/unwork/app-example/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Sona/Desktop/unwork/app-example/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map