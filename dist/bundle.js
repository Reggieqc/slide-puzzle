/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_fonts_klavika_bold_webfont_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/fonts/klavika-bold-webfont.woff */ \"./src/assets/fonts/klavika-bold-webfont.woff\");\n/* harmony import */ var _assets_fonts_klavika_light_webfont_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/klavika-light-webfont.woff */ \"./src/assets/fonts/klavika-light-webfont.woff\");\n/* harmony import */ var _assets_fonts_klavika_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/klavika-regular-webfont.woff */ \"./src/assets/fonts/klavika-regular-webfont.woff\");\n/* harmony import */ var _assets_fonts_klavika_medium_webfont_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/klavika-medium-webfont.woff */ \"./src/assets/fonts/klavika-medium-webfont.woff\");\n/* harmony import */ var _assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/background.jpg */ \"./src/assets/images/background.jpg\");\n// Imports\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_klavika_bold_webfont_woff__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_klavika_light_webfont_woff__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_klavika_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_klavika_medium_webfont_woff__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\n  font-family: 'klavika-bold';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff\\\"); }\\n\\n@font-face {\\n  font-family: 'klavika-light';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\"); }\\n\\n@font-face {\\n  font-family: 'klavika-regular';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff\\\"); }\\n\\n@font-face {\\n  font-family: 'klavika-medium';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\"); }\\n\\n/*-------------------------------\\n\\t\\t0.-CSS RESET\\n--------------------------------*/\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block; }\\n\\nol,\\nul {\\n  list-style: none; }\\n\\nblockquote,\\nq {\\n  quotes: none; }\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none; }\\n\\nhtml * {\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\nbody {\\n  overflow: hidden;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-size: contain;\\n  background-color: #1a1a1a;\\n  font-family: \\\"klavika-regular\\\"; }\\n\\n#puzzle-img {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column; }\\n\\n.overlay-shadow {\\n  position: absolute;\\n  top: 50%;\\n  width: 100%;\\n  height: 100%;\\n  left: 50%;\\n  border: 1px solid var(--border-color);\\n  transform: translate(-50%, -50%);\\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 11%, #0a0a0c 40%);\\n  z-index: 0; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/fonts/klavika-bold-webfont.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/klavika-bold-webfont.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2ec93083e4e923fc906a399a8ad488c1.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/klavika-bold-webfont.woff?");

/***/ }),

/***/ "./src/assets/fonts/klavika-light-webfont.woff":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/klavika-light-webfont.woff ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"35fde9d25311158df02e6a38f5e0ece0.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/klavika-light-webfont.woff?");

/***/ }),

/***/ "./src/assets/fonts/klavika-medium-webfont.woff":
/*!******************************************************!*\
  !*** ./src/assets/fonts/klavika-medium-webfont.woff ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1b70152b188d5969e2390c509d548def.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/klavika-medium-webfont.woff?");

/***/ }),

/***/ "./src/assets/fonts/klavika-regular-webfont.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/klavika-regular-webfont.woff ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"031c20f0d79e79d6eba28eae3619dd39.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/klavika-regular-webfont.woff?");

/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"305ba829b44a80b50a85db717f44a9e0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/background.jpg?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _puzzle_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle-image */ \"./src/puzzle-image.ts\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst inputElement = document.getElementById('input');\r\nconst buttonElement = document.getElementById('button');\r\nlet inputValue = 4;\r\nconst puzzleImage = new _puzzle_image__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputValue, document.querySelector('#puzzle-img'), 'src/assets/images/monks.jpg', 400);\r\ninputElement.addEventListener('change', getInputValue);\r\nbuttonElement.addEventListener('click', randomShufflePuzzle);\r\nfunction getInputValue(event) {\r\n    inputValue = Number(event.target.value);\r\n    setPuzzleImageDimensions();\r\n}\r\nfunction setPuzzleImageDimensions() {\r\n    puzzleImage.changeDimensions(inputValue);\r\n}\r\nfunction randomShufflePuzzle() {\r\n    puzzleImage.shuffle();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/puzzle-blocks.ts":
/*!******************************!*\
  !*** ./src/puzzle-blocks.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Puzzleblock; });\nclass Puzzleblock {\r\n    constructor(puzzle, index) {\r\n        this.isEmpty = false;\r\n        this.index = index;\r\n        this.puzzle = puzzle;\r\n        this.width = this.puzzle.width / this.puzzle.dimensions;\r\n        this.height = this.puzzle.height / this.puzzle.dimensions;\r\n        this.el = this.createBlock();\r\n        puzzle.el.appendChild(this.el);\r\n        if (this.index === this.puzzle.dimensions * this.puzzle.dimensions - 1) {\r\n            this.isEmpty = true;\r\n            this.el.style.backgroundImage = `url(src/assets/images/monk.png)`;\r\n            this.el.style.backgroundSize = 'contain';\r\n            return;\r\n        }\r\n        this.setBackgroundBlock();\r\n    }\r\n    createBlock() {\r\n        const div = document.createElement('div');\r\n        div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;\r\n        div.style.position = 'absolute';\r\n        div.style.width = `${this.width}px`;\r\n        div.style.height = `${this.height}px`;\r\n        div.style.border = '1px solid #333';\r\n        div.onclick = () => {\r\n            const currentBlockIndex = this.puzzle.findBlockPosition(this.index);\r\n            const emptyBlockIndex = this.puzzle.findEmptyBlockPosition();\r\n            const { x, y } = this.getCoordinatesXY(currentBlockIndex);\r\n            const { x: emptyX, y: emptyY } = this.getCoordinatesXY(emptyBlockIndex);\r\n            if ((x === emptyX || y === emptyY) &&\r\n                (Math.abs(x - emptyX) === 1 || Math.abs(y - emptyY) === 1)) {\r\n                this.puzzle.swapBlocks(currentBlockIndex, emptyBlockIndex);\r\n            }\r\n        };\r\n        return div;\r\n    }\r\n    setPosition(index) {\r\n        const { left, top } = this.getPositionFromIndex(index);\r\n        this.el.style.left = `${left}px`;\r\n        this.el.style.top = `${top}px`;\r\n    }\r\n    setBackgroundBlock() {\r\n        const { x, y } = this.getCoordinatesXY(this.index);\r\n        const left = this.width * x;\r\n        const top = this.height * y;\r\n        this.el.style.backgroundImage = `url(${this.puzzle.imgSrc})`;\r\n        this.el.style.backgroundPosition = `-${left}px -${top}px`;\r\n    }\r\n    getPositionFromIndex(index) {\r\n        const { x, y } = this.getCoordinatesXY(index);\r\n        return {\r\n            left: this.width * x,\r\n            top: this.height * y\r\n        };\r\n    }\r\n    getCoordinatesXY(index) {\r\n        return {\r\n            x: index % this.puzzle.dimensions,\r\n            y: Math.floor(index / this.puzzle.dimensions)\r\n        };\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/puzzle-blocks.ts?");

/***/ }),

/***/ "./src/puzzle-image.ts":
/*!*****************************!*\
  !*** ./src/puzzle-image.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PuzzleImage; });\n/* harmony import */ var _puzzle_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle-blocks */ \"./src/puzzle-blocks.ts\");\n\r\nclass PuzzleImage {\r\n    constructor(dimensions, el, imgSrc, width) {\r\n        this.dimensions = dimensions;\r\n        this.parentEl = el;\r\n        this.width = width;\r\n        this.imgSrc = imgSrc;\r\n        this.blocks = [];\r\n        this.initialiceWidthandHeightParent();\r\n        this.configContainerHeightAndImageSize();\r\n    }\r\n    createContainer() {\r\n        const div = document.createElement('div');\r\n        div.style.position = 'relative';\r\n        div.style.margin = '0 auto';\r\n        return div;\r\n    }\r\n    changeDimensions(dimensions) {\r\n        this.dimensions = dimensions;\r\n        console.log(this.el);\r\n        this.parentEl.removeChild(this.el);\r\n        this.initialiceWidthandHeightParent();\r\n        this.configContainerHeightAndImageSize();\r\n    }\r\n    configContainerHeightAndImageSize() {\r\n        const image = new Image();\r\n        image.onload = () => {\r\n            this.height = image.height * this.width / image.width;\r\n            this.el.style.width = `${this.width}px`;\r\n            this.el.style.height = `${this.height}px`;\r\n            this.config();\r\n        };\r\n        image.src = this.imgSrc;\r\n    }\r\n    initialiceWidthandHeightParent() {\r\n        this.el = this.createContainer();\r\n        this.parentEl.appendChild(this.el);\r\n    }\r\n    config() {\r\n        this.blocks = [];\r\n        for (let i = 0; i < this.dimensions * this.dimensions; i++) {\r\n            this.blocks.push(new _puzzle_blocks__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, i));\r\n        }\r\n        this.shuffle();\r\n    }\r\n    shuffle() {\r\n        for (let i = this.blocks.length - 1; i > 0; i--) {\r\n            const j = Math.floor(Math.random() * (i + 1));\r\n            this.swapBlocks(i, j);\r\n        }\r\n        return this.blocks;\r\n    }\r\n    swapBlocks(i, j) {\r\n        [this.blocks[i], this.blocks[j]] = [this.blocks[j], this.blocks[i]];\r\n        this.blocks[i].setPosition(i);\r\n        this.blocks[j].setPosition(j);\r\n        if (this.isAssambled()) {\r\n            alert('You win');\r\n        }\r\n    }\r\n    isAssambled() {\r\n        for (let i = 0; i < this.blocks.length; i++) {\r\n            if (i !== this.blocks[i].index) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    findBlockPosition(index) {\r\n        return this.blocks.findIndex(block => block.index === index);\r\n    }\r\n    findEmptyBlockPosition() {\r\n        return this.blocks.findIndex(block => block.isEmpty);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/puzzle-image.ts?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });