webpackHotUpdate("static\\development\\pages\\saved.js",{

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
/* harmony import */ var _utils_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/API.js */ "./utils/API.js");

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

  var hereOrNot = function hereOrNot(item) {
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
      onClick: function onClick() {
        return handleFunction({
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
        });
      }
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

/***/ })

})
//# sourceMappingURL=saved.js.d44dbf1551d5dd3a4b90.hot-update.js.map