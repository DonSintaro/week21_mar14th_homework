webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Searched; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Results.js */ "./components/Results.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Everyday\\Desktop\\GitHubPublic\\utbootcamp\\Homework\\week21_mar14th_homework\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function Searched() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      results = _useState[0],
      setResults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Save"),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      searched = _useState3[0],
      setSearched = _useState3[1];

  var handleFunction = function handleFunction(event) {};

  var searchBooks = function searchBooks() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function searchBooks$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(searched);
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://www.googleapis.com/books/v1/volumes?q=$' + {
              searched: searched
            }));

          case 3:
            result = _context.sent;
            setResults(result.data.items);
            console.log(result.data.items);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }; //////////////////


  var handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault();
    searchBooks();
  }; /////////////////


  var handleInputChange = function handleInputChange(event) {
    var value = event.target.value;
    setSearched(value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container searchBarBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "subHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Book Search"), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Book Name",
    "aria-label": "Book Name",
    "aria-describedby": "basic-addon2",
    id: "bookSearch",
    onChange: handleInputChange,
    value: searched,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  })), __jsx("button", {
    type: "submit",
    className: "btn btn-light submitSearch",
    onClick: handleFormSubmit,
    value: searched,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Search"))), __jsx(_components_Results_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    results: results,
    type: type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.6e8be219d1aaa06d761c.hot-update.js.map