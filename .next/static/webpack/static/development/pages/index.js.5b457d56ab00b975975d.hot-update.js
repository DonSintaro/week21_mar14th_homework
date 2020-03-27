webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Everyday\\Desktop\\GitHubPublic\\utbootcamp\\Homework\\week21_mar14th_homework\\components\\Results.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ResultsList(props) {
  var handleAuthors = function handleAuthors(value) {
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

  var handleFunction = function handleFunction(value) {
    console.log(value); //Just need to assign if/else for props.type save/delete => make mongo and express connection
  };

  return __jsx("div", {
    className: "container resultsBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, props.results.map(function (item) {
    return __jsx("li", {
      className: " container result",
      key: item.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "resultFunctions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, __jsx("button", {
      type: "button",
      className: "btn btn-light navFunction resultFunctionBtns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: item.volumeInfo.canonicalVolumeLink,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 108
      }
    }, "View")), __jsx("button", {
      type: "button",
      className: "btn btn-light navFunction resultFunctionBtns",
      onClick: function onClick() {
        return handleFunction({
          id: item.id,
          volumeInfo: {
            title: item.volumeInfo.title,
            subtitle: item.volumeInfo.subtitle,
            authors: item.volumeInfo.authors,
            imageLinks: {
              thumbnail: item.volumeInfo.imageLinks.thumbnail
            },
            description: item.volumeInfo.description
          }
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, props.type, " "))), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, item.volumeInfo.title), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, item.volumeInfo.subtitle), __jsx("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, "Written by: "), handleAuthors(item.volumeInfo.authors)), __jsx("div", {
      className: "container seperator",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container containIt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "imageBox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("img", {
      className: "bookImage",
      src: item.volumeInfo.imageLinks.thumbnail,
      alt: "Image of book",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    })), __jsx("p", {
      className: "aboutInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, " ", item.volumeInfo.description, " "), __jsx("div", {
      style: {
        clear: "both"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ResultsList);

/***/ })

})
//# sourceMappingURL=index.js.5b457d56ab00b975975d.hot-update.js.map