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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Everyday\\Desktop\\GitHubPublic\\utbootcamp\\Homework\\week21_mar14th_homework\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "navHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "navName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: {
      color: "blue"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 27
    }
  }, "G"), __jsx("span", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 64
    }
  }, "o"), __jsx("span", {
    style: {
      color: "#ffeb00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 100
    }
  }, "o"), __jsx("span", {
    style: {
      color: "blue"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 140
    }
  }, "g"), __jsx("span", {
    style: {
      color: "green"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 177
    }
  }, "l"), __jsx("span", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 215
    }
  }, "e"), " Books"), __jsx("button", {
    type: "button",
    className: "btn btn-light navFunction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 69
    }
  }, "Searched")), __jsx("button", {
    type: "button",
    className: "btn btn-light navFunction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/saved",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 69
    }
  }, "Saved"))), __jsx("div", {
    className: "littleSpace",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "container booksHeader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "(React) ", __jsx("span", {
    style: {
      color: "blue"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "G"), __jsx("span", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 58
    }
  }, "o"), __jsx("span", {
    style: {
      color: "#ffeb00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 94
    }
  }, "o"), __jsx("span", {
    style: {
      color: "blue"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 134
    }
  }, "g"), __jsx("span", {
    style: {
      color: "green"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 171
    }
  }, "l"), __jsx("span", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 209
    }
  }, "e"), " Books Search"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Search for and Save Books of Interest")), props.children);
}

/***/ }),

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/API.js */ "./utils/API.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ResultsList(props) {
  const handleAuthors = value => {
    if (value) {
      return value.map(function (a, i) {
        if (value.length > 1 && i < value.length - 1) {
          return a + ", ";
        } else {
          return a;
        }
      });
    } else {
      return "*No Author Known*";
    }
  };

  const handleFunction = value => {
    if (props.type === "Save") {
      _utils_API_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveBook(value);
    } else if (props.type === "Delete") {
      _utils_API_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteBook(value.id).then(function () {
        props.updateList();
      });
    } else {
      "Some Error happened";
    }
  };

  const hereOrNot = item => {
    if (item && item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) {
      return item.volumeInfo.imageLinks.thumbnail;
    }
  };

  return __jsx("div", {
    className: "container resultsBox"
  }, __jsx("ul", null, props.results.map(function (item) {
    return __jsx("li", {
      className: " container result",
      key: item.id
    }, __jsx("div", null, __jsx("div", {
      className: "resultFunctions"
    }, __jsx("button", {
      type: "button",
      className: "btn btn-light navFunction resultFunctionBtns"
    }, __jsx("a", {
      href: item.volumeInfo.canonicalVolumeLink,
      target: "_blank",
      rel: "noopener noreferrer"
    }, "View")), __jsx("button", {
      type: "button",
      className: "btn btn-light navFunction resultFunctionBtns",
      onClick: () => handleFunction({
        id: item.id,
        volumeInfo: {
          canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink,
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          authors: item.volumeInfo.authors,
          imageLinks: {
            thumbnail: item.volumeInfo.imageLinks.thumbnail
          },
          description: item.volumeInfo.description
        }
      })
    }, props.type, " "))), __jsx("h4", null, item.volumeInfo.title), __jsx("h5", null, item.volumeInfo.subtitle), __jsx("h6", null, __jsx("span", null, "Written by: "), handleAuthors(item.volumeInfo.authors)), __jsx("div", {
      className: "container seperator"
    }), __jsx("div", {
      className: "container containIt"
    }, __jsx("div", {
      className: "imageBox"
    }, __jsx("img", {
      className: "bookImage",
      src: hereOrNot(item),
      alt: "Image of book"
    })), __jsx("p", {
      className: "aboutInfo"
    }, " ", item.volumeInfo.description, " "), __jsx("div", {
      style: {
        clear: "both"
      }
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ResultsList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Searched; });
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Results.js */ "./components/Results.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Searched() {
  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Save");
  const {
    0: searched,
    1: setSearched
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");

  const searchBooks = async () => {
    const result = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://www.googleapis.com/books/v1/volumes?q=$' + searched);
    setResults(result.data.items);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    searchBooks();
  };

  const handleInputChange = event => {
    const value = event.target.value;
    setSearched(value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_0__["default"], null, __jsx("div", {
    className: "container searchBarBox"
  }, __jsx("h4", {
    className: "subHeader"
  }, "Search Results"), __jsx("form", null, __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Book Name",
    "aria-label": "Book Name",
    "aria-describedby": "basic-addon2",
    id: "bookSearch",
    onChange: handleInputChange,
    value: searched
  })), __jsx("button", {
    type: "submit",
    className: "btn btn-light submitSearch",
    onClick: handleFormSubmit,
    value: searched
  }, "Search"))), __jsx(_components_Results_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    results: results,
    type: type
  })));
}

/***/ }),

/***/ "./utils/API.js":
/*!**********************!*\
  !*** ./utils/API.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  // Gets all books
  getBooks: function () {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/saved");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/save", bookData);
  }
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Everyday\Desktop\GitHubPublic\utbootcamp\Homework\week21_mar14th_homework\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map