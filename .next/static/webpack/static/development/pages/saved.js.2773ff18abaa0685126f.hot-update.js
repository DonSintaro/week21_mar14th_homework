webpackHotUpdate("static\\development\\pages\\saved.js",{

/***/ "./pages/saved.js":
/*!************************!*\
  !*** ./pages/saved.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Saved; });
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Results.js */ "./components/Results.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_API_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/API.js */ "./utils/API.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Saved() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      results = _useState[0],
      setResults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Delete"),
      type = _useState2[0],
      setType = _useState2[1];

  var updateList = function updateList() {
    console.log("Got to update list thing");
    _utils_API_js__WEBPACK_IMPORTED_MODULE_3__["default"].getBooks().then(function (data) {
      setResults([data]);
      console.log(results);
    });
  };

  updateList();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_0__["default"], null, __jsx("div", {
    className: "container resultsBox"
  }, __jsx("h4", {
    className: "subHeader"
  }, "Results"), __jsx(_components_Results_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    results: results,
    type: type,
    updateList: updateList()
  }))));
}

/***/ })

})
//# sourceMappingURL=saved.js.2773ff18abaa0685126f.hot-update.js.map