/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n:root {\n\t--light-color: #fffbf8;\n\t--dark-color: #000001;\n\t--medium-color: #f2d0a4;\n\t--transparent-medium-color: #f2d0a4a8;\n\t--light-accent-color: #f8ead1;\n\t--transparent-light-accent-color: #f8ead196;\n\t--dark-accent-color: #8b635c;\n\t--basic-font: 'Courier New', Courier, monospace;\n}\n\n.content {\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 20px;\n\tfont-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n\tfont-size: 49px;\n}\n/* style project */\n.projectTab,\n.addProjectTab {\n    width: 250px;\n\tborder-radius: 15px;\n\tpadding: 15px;\t\n\tgap: 15px;\n}\n\n.projectTab {\n\tbackground-color: var(--light-accent-color);\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.addProjectTab{\n\tbackground-color: var(--transparent-light-accent-color);\n\theight: 110px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-new-project-btn,\n.add-new-group-btn {\n\tborder: none;\n\tbackground-color: transparent;\n\topacity: 0.3;\n}\n\n.add-new-project-btn:hover,\n.add-new-group-btn:hover {\n\tcursor: pointer;\n\topacity: 0.6;\n}\n\n.add-new-project-btn>img {\n\twidth: 75px;\n\theight: 75px;\n}\n\n.add-new-group-btn>img {\n\twidth: 35px;\n\theight: 35px;\n}\n\n/* style todo elements */\n.groupTab,\n.addGroupTab {\n    width: 230px;\n\tpadding: 10px;\n    height: 50px;\n\tborder-radius: 15px;\n\n}\n\n.groupTab {\n\tbackground-color: var(--medium-color);\n\tdisplay: grid;\n\tgrid-template: 1fr 1fr / 1fr 1fr;\n\n}\n\n.addGroupTab {\n\tbackground-color: var(--transparent-medium-color);\n\tmargin-right: 15px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.todoTask {\n\tborder: none;\n\tborder-radius: 7px;\n\theight: 20px;\n\tgrid-area: 1 / 1 / 2 / 3;\n\tbackground-color: var(--transparent-light-accent-color);\n}\n\n\n.todoDueDate,\n.todoPriority {\n\twidth: auto;\n\tborder: none;\n\tborder-radius: 7px;\n\theight: 20px;\n\tbackground-color: transparent;\n}\n\n.todoDueDate {\n\tjustify-self: flex-start;\n\talign-self: flex-end;\n}\n\n.todoPriority {\n\tjustify-self: flex-end;\n\talign-self: flex-end;\n}\n\n.todoPriorityOption {\n\ttext-align: end;\n}\n\n.todolow {\n\tbackground-color: green;\n}\n\n.todomedium {\n\tbackground-color: yellow;\n}\n\n.todohigh {\n\tbackground-color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;;AAGA;CACC,sBAAsB;CACtB,qBAAqB;CACrB,uBAAuB;CACvB,qCAAqC;CACrC,6BAA6B;CAC7B,2CAA2C;CAC3C,4BAA4B;CAC5B,+CAA+C;AAChD;;AAEA;CACC,aAAa;CACb,aAAa;CACb,eAAe;CACf,SAAS;CACT,sEAAsE;CACtE,eAAe;AAChB;AACA,kBAAkB;AAClB;;IAEI,YAAY;CACf,mBAAmB;CACnB,aAAa;CACb,SAAS;AACV;;AAEA;CACC,2CAA2C;CAC3C,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,uDAAuD;CACvD,aAAa;CACb,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;;CAEC,YAAY;CACZ,6BAA6B;CAC7B,YAAY;AACb;;AAEA;;CAEC,eAAe;CACf,YAAY;AACb;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA,wBAAwB;AACxB;;IAEI,YAAY;CACf,aAAa;IACV,YAAY;CACf,mBAAmB;;AAEpB;;AAEA;CACC,qCAAqC;CACrC,aAAa;CACb,gCAAgC;;AAEjC;;AAEA;CACC,iDAAiD;CACjD,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,wBAAwB;CACxB,uDAAuD;AACxD;;;AAGA;;CAEC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,6BAA6B;AAC9B;;AAEA;CACC,wBAAwB;CACxB,oBAAoB;AACrB;;AAEA;CACC,sBAAsB;CACtB,oBAAoB;AACrB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,qBAAqB;AACtB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n:root {\n\t--light-color: #fffbf8;\n\t--dark-color: #000001;\n\t--medium-color: #f2d0a4;\n\t--transparent-medium-color: #f2d0a4a8;\n\t--light-accent-color: #f8ead1;\n\t--transparent-light-accent-color: #f8ead196;\n\t--dark-accent-color: #8b635c;\n\t--basic-font: 'Courier New', Courier, monospace;\n}\n\n.content {\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 20px;\n\tfont-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n\tfont-size: 49px;\n}\n/* style project */\n.projectTab,\n.addProjectTab {\n    width: 250px;\n\tborder-radius: 15px;\n\tpadding: 15px;\t\n\tgap: 15px;\n}\n\n.projectTab {\n\tbackground-color: var(--light-accent-color);\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.addProjectTab{\n\tbackground-color: var(--transparent-light-accent-color);\n\theight: 110px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-new-project-btn,\n.add-new-group-btn {\n\tborder: none;\n\tbackground-color: transparent;\n\topacity: 0.3;\n}\n\n.add-new-project-btn:hover,\n.add-new-group-btn:hover {\n\tcursor: pointer;\n\topacity: 0.6;\n}\n\n.add-new-project-btn>img {\n\twidth: 75px;\n\theight: 75px;\n}\n\n.add-new-group-btn>img {\n\twidth: 35px;\n\theight: 35px;\n}\n\n/* style todo elements */\n.groupTab,\n.addGroupTab {\n    width: 230px;\n\tpadding: 10px;\n    height: 50px;\n\tborder-radius: 15px;\n\n}\n\n.groupTab {\n\tbackground-color: var(--medium-color);\n\tdisplay: grid;\n\tgrid-template: 1fr 1fr / 1fr 1fr;\n\n}\n\n.addGroupTab {\n\tbackground-color: var(--transparent-medium-color);\n\tmargin-right: 15px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.todoTask {\n\tborder: none;\n\tborder-radius: 7px;\n\theight: 20px;\n\tgrid-area: 1 / 1 / 2 / 3;\n\tbackground-color: var(--transparent-light-accent-color);\n}\n\n\n.todoDueDate,\n.todoPriority {\n\twidth: auto;\n\tborder: none;\n\tborder-radius: 7px;\n\theight: 20px;\n\tbackground-color: transparent;\n}\n\n.todoDueDate {\n\tjustify-self: flex-start;\n\talign-self: flex-end;\n}\n\n.todoPriority {\n\tjustify-self: flex-end;\n\talign-self: flex-end;\n}\n\n.todoPriorityOption {\n\ttext-align: end;\n}\n\n.todolow {\n\tbackground-color: green;\n}\n\n.todomedium {\n\tbackground-color: yellow;\n}\n\n.todohigh {\n\tbackground-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-new-project-template.js":
/*!*****************************************!*\
  !*** ./src/dom-new-project-template.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupTab": () => (/* binding */ groupTab),
/* harmony export */   "newGroupTab": () => (/* binding */ newGroupTab),
/* harmony export */   "newProjectTab": () => (/* binding */ newProjectTab),
/* harmony export */   "projectTab": () => (/* binding */ projectTab)
/* harmony export */ });
/* harmony import */ var _img_add_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/add.png */ "./src/img/add.png");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




/* add todo element */
const groupTab = (e) => {
    let project = e.target.closest('.projectTab');
    let projectIndex = Array.from(project.parentNode.children).indexOf(project);
    let addGroupTab = e.target.closest('.addGroupTab');
    let groupTab = document.createElement('div');
    groupTab.setAttribute('class', 'groupTab');

    let currentProject = (_projects__WEBPACK_IMPORTED_MODULE_1__.projects.getProjectsList())[projectIndex];
    currentProject.addTask((0,_projects__WEBPACK_IMPORTED_MODULE_1__.newTodoItem)('Task','2','3'));

    
    /* add name */
    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Task');
    name.setAttribute('class', 'todoTask');
    name.addEventListener('change', (event) =>{
        let taskIndex = Array.from(project.children).indexOf(name.parentNode);
        (currentProject.getTasks()[taskIndex]).changeTask(name.value);
    }); 
    groupTab.appendChild(name);

    /* add due date */
    let dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.addEventListener('change', (event) =>{
        let taskIndex = Array.from(project.children).indexOf(dueDate.parentNode);
        (currentProject.getTasks()[taskIndex]).changeDueDate(dueDate.value); 
    }); 
    groupTab.appendChild(dueDate);

    /* add priority */
    let priorityList = document.createElement('select');
    priorityList.setAttribute('class', 'todoPriority');
    let priorityOptions = ['low', 'medium', 'high'];
    for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement("option");
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        option.setAttribute('class', 'todoPriorityOption');
        priorityList.appendChild(option);
    };
    priorityList.addEventListener('change', (event) =>{
        let taskIndex = Array.from(project.children).indexOf(priorityList.parentNode);
        (currentProject.getTasks()[taskIndex]).changePriority(priorityList.value);
        console.log((currentProject.getTasks()));
    }); 
    groupTab.appendChild(priorityList);

   

    project.insertBefore(groupTab, addGroupTab);
}

const newGroupTab = (projectTab) => {
    let project = projectTab;

    let addGroupTab = document.createElement('div');
    addGroupTab.setAttribute('class', 'addGroupTab');

    let addButton = document.createElement('button');
    addButton.setAttribute('class', 'add-new-group-btn');
    let btnImg = document.createElement('img');
    btnImg.src = _img_add_png__WEBPACK_IMPORTED_MODULE_0__;
    addButton.appendChild(btnImg);

    addButton.addEventListener('click', groupTab);

    addGroupTab.appendChild(addButton);   

    project.appendChild(addGroupTab);
}



const projectTab = () => {
    let content = document.querySelector('.content');
    let addProjectTab = document.querySelector('.addProjectTab');
    let projectTab= document.createElement('div');
    projectTab.setAttribute('class', 'projectTab');

    let projectsList = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.getProjectsList();
    _projects__WEBPACK_IMPORTED_MODULE_1__.projects.addProject((0,_projects__WEBPACK_IMPORTED_MODULE_1__.newProject)());
    console.log(projectsList);
    projectsList.forEach(project => console.log(project)); 

    newGroupTab(projectTab);

    content.insertBefore(projectTab, addProjectTab);
}

const newProjectTab = () => {
    let content = document.querySelector('.content');

    let addProjectTab = document.createElement('div');
    addProjectTab.setAttribute('class', 'addProjectTab');

    let addButton = document.createElement('button');
    addButton.setAttribute('class', 'add-new-project-btn');
    let btnImg = document.createElement('img');
    btnImg.src = _img_add_png__WEBPACK_IMPORTED_MODULE_0__;
    addButton.appendChild(btnImg);

    addButton.addEventListener('click', projectTab);

    addProjectTab.appendChild(addButton);

    content.appendChild(addProjectTab);
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "newTodoItem": () => (/* binding */ newTodoItem),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = (() => {
    let projectsList = [];
    const getProjectsList = () => projectsList;
    const addProject = newProject => {
        projectsList.push(newProject);
    }

    return{getProjectsList, addProject};

    
})();

/* create project */
const newProject = () => {
    let tasks = [];
    const getTasks = () => tasks;
    const addTask = newTask => {
        tasks.push(newTask);
    }

    return {getTasks, addTask, tasks};
};

/* create todo item */
const newTodoItem = (task, dueDate, priority) => {
    const changeTask = function(newTask){
        this.task = newTask;
    };
    const changeDueDate = function(newDueDate){
        this.dueDate = newDueDate;
    }
    const changePriority = function(newPriority){
        this.priority = newPriority;
    }

    return {task, dueDate, priority, changeTask, changeDueDate, changePriority};
    
}



/***/ }),

/***/ "./src/img/add.png":
/*!*************************!*\
  !*** ./src/img/add.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "132696644e79a1f05c3b.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_new_project_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-new-project-template */ "./src/dom-new-project-template.js");






(0,_dom_new_project_template__WEBPACK_IMPORTED_MODULE_1__.newProjectTab)();
(0,_dom_new_project_template__WEBPACK_IMPORTED_MODULE_1__.projectTab)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlDQUFPO0FBQ3hCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrRDs7Ozs7QUFLdkUsd0VBQWE7QUFDYixxRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLW5ldy1wcm9qZWN0LXRlbXBsYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5cXG46cm9vdCB7XFxuXFx0LS1saWdodC1jb2xvcjogI2ZmZmJmODtcXG5cXHQtLWRhcmstY29sb3I6ICMwMDAwMDE7XFxuXFx0LS1tZWRpdW0tY29sb3I6ICNmMmQwYTQ7XFxuXFx0LS10cmFuc3BhcmVudC1tZWRpdW0tY29sb3I6ICNmMmQwYTRhODtcXG5cXHQtLWxpZ2h0LWFjY2VudC1jb2xvcjogI2Y4ZWFkMTtcXG5cXHQtLXRyYW5zcGFyZW50LWxpZ2h0LWFjY2VudC1jb2xvcjogI2Y4ZWFkMTk2O1xcblxcdC0tZGFyay1hY2NlbnQtY29sb3I6ICM4YjYzNWM7XFxuXFx0LS1iYXNpYy1mb250OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbi5jb250ZW50IHtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogMjBweDtcXG5cXHRmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcblxcdGZvbnQtc2l6ZTogNDlweDtcXG59XFxuLyogc3R5bGUgcHJvamVjdCAqL1xcbi5wcm9qZWN0VGFiLFxcbi5hZGRQcm9qZWN0VGFiIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0cGFkZGluZzogMTVweDtcXHRcXG5cXHRnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0VGFiIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZFByb2plY3RUYWJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbGlnaHQtYWNjZW50LWNvbG9yKTtcXG5cXHRoZWlnaHQ6IDExMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1uZXctcHJvamVjdC1idG4sXFxuLmFkZC1uZXctZ3JvdXAtYnRuIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0b3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uYWRkLW5ldy1wcm9qZWN0LWJ0bjpob3ZlcixcXG4uYWRkLW5ldy1ncm91cC1idG46aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5hZGQtbmV3LXByb2plY3QtYnRuPmltZyB7XFxuXFx0d2lkdGg6IDc1cHg7XFxuXFx0aGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4uYWRkLW5ldy1ncm91cC1idG4+aW1nIHtcXG5cXHR3aWR0aDogMzVweDtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi8qIHN0eWxlIHRvZG8gZWxlbWVudHMgKi9cXG4uZ3JvdXBUYWIsXFxuLmFkZEdyb3VwVGFiIHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbn1cXG5cXG4uZ3JvdXBUYWIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1jb2xvcik7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcXG5cXG59XFxuXFxuLmFkZEdyb3VwVGFiIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1tZWRpdW0tY29sb3IpO1xcblxcdG1hcmdpbi1yaWdodDogMTVweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvVGFzayB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0Z3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWxpZ2h0LWFjY2VudC1jb2xvcik7XFxufVxcblxcblxcbi50b2RvRHVlRGF0ZSxcXG4udG9kb1ByaW9yaXR5IHtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcdGhlaWdodDogMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvZG9EdWVEYXRlIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvUHJpb3JpdHkge1xcblxcdGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvUHJpb3JpdHlPcHRpb24ge1xcblxcdHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvZG9sb3cge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kb21lZGl1bSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4udG9kb2hpZ2gge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOzs7QUFHQTtDQUNDLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLHFDQUFxQztDQUNyQyw2QkFBNkI7Q0FDN0IsMkNBQTJDO0NBQzNDLDRCQUE0QjtDQUM1QiwrQ0FBK0M7QUFDaEQ7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLGVBQWU7Q0FDZixTQUFTO0NBQ1Qsc0VBQXNFO0NBQ3RFLGVBQWU7QUFDaEI7QUFDQSxrQkFBa0I7QUFDbEI7O0lBRUksWUFBWTtDQUNmLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsU0FBUztBQUNWOztBQUVBO0NBQ0MsMkNBQTJDO0NBQzNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx1REFBdUQ7Q0FDdkQsYUFBYTtDQUNiLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLFlBQVk7Q0FDWiw2QkFBNkI7Q0FDN0IsWUFBWTtBQUNiOztBQUVBOztDQUVDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQSx3QkFBd0I7QUFDeEI7O0lBRUksWUFBWTtDQUNmLGFBQWE7SUFDVixZQUFZO0NBQ2YsbUJBQW1COztBQUVwQjs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQyxhQUFhO0NBQ2IsZ0NBQWdDOztBQUVqQzs7QUFFQTtDQUNDLGlEQUFpRDtDQUNqRCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWix3QkFBd0I7Q0FDeEIsdURBQXVEO0FBQ3hEOzs7QUFHQTs7Q0FFQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuXFxuOnJvb3Qge1xcblxcdC0tbGlnaHQtY29sb3I6ICNmZmZiZjg7XFxuXFx0LS1kYXJrLWNvbG9yOiAjMDAwMDAxO1xcblxcdC0tbWVkaXVtLWNvbG9yOiAjZjJkMGE0O1xcblxcdC0tdHJhbnNwYXJlbnQtbWVkaXVtLWNvbG9yOiAjZjJkMGE0YTg7XFxuXFx0LS1saWdodC1hY2NlbnQtY29sb3I6ICNmOGVhZDE7XFxuXFx0LS10cmFuc3BhcmVudC1saWdodC1hY2NlbnQtY29sb3I6ICNmOGVhZDE5NjtcXG5cXHQtLWRhcmstYWNjZW50LWNvbG9yOiAjOGI2MzVjO1xcblxcdC0tYmFzaWMtZm9udDogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG5cXHRmb250LXNpemU6IDQ5cHg7XFxufVxcbi8qIHN0eWxlIHByb2plY3QgKi9cXG4ucHJvamVjdFRhYixcXG4uYWRkUHJvamVjdFRhYiB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcdHBhZGRpbmc6IDE1cHg7XFx0XFxuXFx0Z2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdFRhYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50LWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGRQcm9qZWN0VGFie1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWxpZ2h0LWFjY2VudC1jb2xvcik7XFxuXFx0aGVpZ2h0OiAxMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtbmV3LXByb2plY3QtYnRuLFxcbi5hZGQtbmV3LWdyb3VwLWJ0biB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmFkZC1uZXctcHJvamVjdC1idG46aG92ZXIsXFxuLmFkZC1uZXctZ3JvdXAtYnRuOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3BhY2l0eTogMC42O1xcbn1cXG5cXG4uYWRkLW5ldy1wcm9qZWN0LWJ0bj5pbWcge1xcblxcdHdpZHRoOiA3NXB4O1xcblxcdGhlaWdodDogNzVweDtcXG59XFxuXFxuLmFkZC1uZXctZ3JvdXAtYnRuPmltZyB7XFxuXFx0d2lkdGg6IDM1cHg7XFxuXFx0aGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4vKiBzdHlsZSB0b2RvIGVsZW1lbnRzICovXFxuLmdyb3VwVGFiLFxcbi5hZGRHcm91cFRhYiB7XFxuICAgIHdpZHRoOiAyMzBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXG59XFxuXFxuLmdyb3VwVGFiIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tY29sb3IpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxuXFxufVxcblxcbi5hZGRHcm91cFRhYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtbWVkaXVtLWNvbG9yKTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kb1Rhc2sge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1saWdodC1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5cXG4udG9kb0R1ZURhdGUsXFxuLnRvZG9Qcmlvcml0eSB7XFxuXFx0d2lkdGg6IGF1dG87XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b2RvRHVlRGF0ZSB7XFxuXFx0anVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kb1ByaW9yaXR5IHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kb1ByaW9yaXR5T3B0aW9uIHtcXG5cXHR0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RvbG93IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG9tZWRpdW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLnRvZG9oaWdoIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHBsdXNJbWcgZnJvbSAnLi9pbWcvYWRkLnBuZyc7XG5pbXBvcnQgeyBwcm9qZWN0cywgbmV3UHJvamVjdCwgbmV3VG9kb0l0ZW0gfSBmcm9tICcuL3Byb2plY3RzJztcblxuLyogYWRkIHRvZG8gZWxlbWVudCAqL1xuY29uc3QgZ3JvdXBUYWIgPSAoZSkgPT4ge1xuICAgIGxldCBwcm9qZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3RUYWInKTtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gQXJyYXkuZnJvbShwcm9qZWN0LnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YocHJvamVjdCk7XG4gICAgbGV0IGFkZEdyb3VwVGFiID0gZS50YXJnZXQuY2xvc2VzdCgnLmFkZEdyb3VwVGFiJyk7XG4gICAgbGV0IGdyb3VwVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JvdXBUYWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdncm91cFRhYicpO1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gKHByb2plY3RzLmdldFByb2plY3RzTGlzdCgpKVtwcm9qZWN0SW5kZXhdO1xuICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sobmV3VG9kb0l0ZW0oJ1Rhc2snLCcyJywnMycpKTtcblxuICAgIFxuICAgIC8qIGFkZCBuYW1lICovXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzaycpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvVGFzaycpO1xuICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PntcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IEFycmF5LmZyb20ocHJvamVjdC5jaGlsZHJlbikuaW5kZXhPZihuYW1lLnBhcmVudE5vZGUpO1xuICAgICAgICAoY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdKS5jaGFuZ2VUYXNrKG5hbWUudmFsdWUpO1xuICAgIH0pOyBcbiAgICBncm91cFRhYi5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIC8qIGFkZCBkdWUgZGF0ZSAqL1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+e1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gQXJyYXkuZnJvbShwcm9qZWN0LmNoaWxkcmVuKS5pbmRleE9mKGR1ZURhdGUucGFyZW50Tm9kZSk7XG4gICAgICAgIChjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0pLmNoYW5nZUR1ZURhdGUoZHVlRGF0ZS52YWx1ZSk7IFxuICAgIH0pOyBcbiAgICBncm91cFRhYi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIC8qIGFkZCBwcmlvcml0eSAqL1xuICAgIGxldCBwcmlvcml0eUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eUxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvUHJpb3JpdHknKTtcbiAgICBsZXQgcHJpb3JpdHlPcHRpb25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5T3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlPcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5T3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kb1ByaW9yaXR5T3B0aW9uJyk7XG4gICAgICAgIHByaW9yaXR5TGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH07XG4gICAgcHJpb3JpdHlMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT57XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBBcnJheS5mcm9tKHByb2plY3QuY2hpbGRyZW4pLmluZGV4T2YocHJpb3JpdHlMaXN0LnBhcmVudE5vZGUpO1xuICAgICAgICAoY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdKS5jaGFuZ2VQcmlvcml0eShwcmlvcml0eUxpc3QudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZygoY3VycmVudFByb2plY3QuZ2V0VGFza3MoKSkpO1xuICAgIH0pOyBcbiAgICBncm91cFRhYi5hcHBlbmRDaGlsZChwcmlvcml0eUxpc3QpO1xuXG4gICBcblxuICAgIHByb2plY3QuaW5zZXJ0QmVmb3JlKGdyb3VwVGFiLCBhZGRHcm91cFRhYik7XG59XG5cbmNvbnN0IG5ld0dyb3VwVGFiID0gKHByb2plY3RUYWIpID0+IHtcbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RUYWI7XG5cbiAgICBsZXQgYWRkR3JvdXBUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRHcm91cFRhYi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZEdyb3VwVGFiJyk7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLW5ldy1ncm91cC1idG4nKTtcbiAgICBsZXQgYnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnRuSW1nLnNyYyA9IHBsdXNJbWc7XG4gICAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKGJ0bkltZyk7XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncm91cFRhYik7XG5cbiAgICBhZGRHcm91cFRhYi5hcHBlbmRDaGlsZChhZGRCdXR0b24pOyAgIFxuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChhZGRHcm91cFRhYik7XG59XG5cblxuXG5jb25zdCBwcm9qZWN0VGFiID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgYWRkUHJvamVjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0VGFiJyk7XG4gICAgbGV0IHByb2plY3RUYWI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUYWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0VGFiJyk7XG5cbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gcHJvamVjdHMuZ2V0UHJvamVjdHNMaXN0KCk7XG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KCkpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzTGlzdCk7XG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2gocHJvamVjdCA9PiBjb25zb2xlLmxvZyhwcm9qZWN0KSk7IFxuXG4gICAgbmV3R3JvdXBUYWIocHJvamVjdFRhYik7XG5cbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShwcm9qZWN0VGFiLCBhZGRQcm9qZWN0VGFiKTtcbn1cblxuY29uc3QgbmV3UHJvamVjdFRhYiA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBsZXQgYWRkUHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RUYWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0VGFiJyk7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLW5ldy1wcm9qZWN0LWJ0bicpO1xuICAgIGxldCBidG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBidG5JbWcuc3JjID0gcGx1c0ltZztcbiAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RUYWIpO1xuXG4gICAgYWRkUHJvamVjdFRhYi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGFiKTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdFRhYiwgbmV3UHJvamVjdFRhYiwgZ3JvdXBUYWIsIG5ld0dyb3VwVGFifSIsImNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gW107XG4gICAgY29uc3QgZ2V0UHJvamVjdHNMaXN0ID0gKCkgPT4gcHJvamVjdHNMaXN0O1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBuZXdQcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJue2dldFByb2plY3RzTGlzdCwgYWRkUHJvamVjdH07XG5cbiAgICBcbn0pKCk7XG5cbi8qIGNyZWF0ZSBwcm9qZWN0ICovXG5jb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG4gICAgY29uc3QgYWRkVGFzayA9IG5ld1Rhc2sgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VGFza3MsIGFkZFRhc2ssIHRhc2tzfTtcbn07XG5cbi8qIGNyZWF0ZSB0b2RvIGl0ZW0gKi9cbmNvbnN0IG5ld1RvZG9JdGVtID0gKHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgY2hhbmdlVGFzayA9IGZ1bmN0aW9uKG5ld1Rhc2spe1xuICAgICAgICB0aGlzLnRhc2sgPSBuZXdUYXNrO1xuICAgIH07XG4gICAgY29uc3QgY2hhbmdlRHVlRGF0ZSA9IGZ1bmN0aW9uKG5ld0R1ZURhdGUpe1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IGZ1bmN0aW9uKG5ld1ByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIHJldHVybiB7dGFzaywgZHVlRGF0ZSwgcHJpb3JpdHksIGNoYW5nZVRhc2ssIGNoYW5nZUR1ZURhdGUsIGNoYW5nZVByaW9yaXR5fTtcbiAgICBcbn1cblxuZXhwb3J0IHtwcm9qZWN0cywgbmV3UHJvamVjdCwgbmV3VG9kb0l0ZW19OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG5ld1Byb2plY3RUYWIsIHByb2plY3RUYWIgfSBmcm9tICcuL2RvbS1uZXctcHJvamVjdC10ZW1wbGF0ZSc7XG5cblxuXG5cbm5ld1Byb2plY3RUYWIoKTtcbnByb2plY3RUYWIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==