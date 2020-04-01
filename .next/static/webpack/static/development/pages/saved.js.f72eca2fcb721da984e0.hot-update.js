webpackHotUpdate("static\\development\\pages\\saved.js",{

/***/ "./pages/saved.js":
/*!************************!*\
  !*** ./pages/saved.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saved; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Results.js */ "./components/Results.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_API_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/API.js */ "./utils/API.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var __N_SSP = true;
function Saved(_ref) {
  var resultsa = _ref.resultsa;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Delete"),
      type = _useState[0],
      setType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(resultsa),
      results = _useState2[0],
      setResults = _useState2[1];

  var updateList = function updateList() {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateList$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Got to updateList");
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_API_js__WEBPACK_IMPORTED_MODULE_4__["default"].getBooks());

          case 3:
            res = _context.sent;
            setResults(res.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", null, __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("div", {
    className: "container resultsBox"
  }, __jsx("h4", {
    className: "subHeader"
  }, "Results"), __jsx(_components_Results_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: type,
    results: results,
    updateList: updateList
  }))));
}

/***/ })

})
//# sourceMappingURL=saved.js.f72eca2fcb721da984e0.hot-update.js.map