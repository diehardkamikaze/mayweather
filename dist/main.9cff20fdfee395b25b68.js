/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0px;\\n  padding: 10px;\\n  box-sizing: border-box;\\n  height: 100vh;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\nheader,\\nmain,\\nfooter {\\n  position: relative;\\n  z-index: 10;\\n}\\n\\n.control-block,\\n.forecast-for-today,\\n.three-days-forecast,\\n.location-info {\\n  position: relative;\\n  background-color: rgba(186, 223, 235, 0.7);\\n  display: flex;\\n  margin-bottom: 10px;\\n  padding: 20px;\\n  border: 1px solid grey;\\n  border-radius: 20px;\\n}\\n\\n/* control block styles */\\n\\n.control-block {\\n  justify-content: space-around;\\n}\\n\\n.control-block button {\\n  padding: 15px;\\n  border: 2px solid rgb(19, 2, 172);\\n  background-color: rgb(7, 128, 241);\\n  border-radius: 5px;\\n  color: white;\\n  font-weight: bold;\\n}\\n\\n.control-block .change-unit::before {\\n  content: \\\"°\\\";\\n}\\n\\n.control-block button:disabled {\\n  background-color: grey;\\n}\\n\\n.control-block input {\\n  padding: 5px;\\n}\\n\\n/* main */\\n\\nmain {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n/* forecast block styles */\\n\\n.forecast {\\n  height: 82vh;\\n  width: 48%;\\n}\\n\\n/* forecast-for-today */\\n.forecast-for-today {\\n  height: 50%;\\n}\\n\\n.forecast-for-today table {\\n  height: 100%;\\n}\\n\\n.summary {\\n  margin: auto;\\n}\\n\\n.summary .weather-icon {\\n  width: 150px;\\n}\\n.summary p {\\n  font-size: 20px;\\n  font-weight: bold;\\n  text-align: center;\\n}\\n\\n.city {\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\\n.country {\\n  font-size: 25px;\\n  font-weight: bold;\\n}\\n\\n.current-temperature {\\n  font-size: 40px;\\n}\\n/* thee-days-forecast */\\n.three-days-forecast {\\n  height: 32.5%;\\n}\\n\\n.forecast-list {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-evenly;\\n  list-style: none;\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\n.forecast-list li {\\n  font-weight: bold;\\n  margin: auto;\\n  text-align: center;\\n}\\n\\n.forecast-list img {\\n  width: 80px;\\n}\\n\\n/* location block styles */\\n.location-info {\\n  box-sizing: border-box;\\n  width: 48%;\\n}\\n\\n/* loader */\\n\\n.loader {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 200;\\n  background-color: white;\\n}\\n\\n.loader:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: calc(50% - 60px);\\n  left: calc(50% - 60px);\\n  border: 16px solid #f3f3f3;\\n  border-top: 16px solid #3498db;\\n  border-radius: 50%;\\n  width: 120px;\\n  height: 120px;\\n  animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.none {\\n  display: none;\\n}\\n\\n.background {\\n  z-index: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n}\\n\\n.longitude,\\n.latitude {\\n  position: absolute;\\n  top: 10%;\\n  left: 10%;\\n  background-color: rgba(128, 128, 128, 0.5);\\n  font-size: 20px;\\n}\\n\\n.latitude {\\n  top: calc(25px + 10%);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mayweather/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://mayweather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/fonts/Roboto/Roboto-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Roboto/Roboto-Regular.ttf ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/mnt/c/Users/diehard/Downloads/mayweather/dist/fonts/Roboto-Regular.ttf\");\n\n//# sourceURL=webpack://mayweather/./src/assets/fonts/Roboto/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://mayweather/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mayweather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/buttons_handlers/buttons_handler.js":
/*!*************************************************!*\
  !*** ./src/buttons_handlers/buttons_handler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeBgLogic\": () => (/* binding */ changeBgLogic),\n/* harmony export */   \"buttonBgHandler\": () => (/* binding */ buttonBgHandler),\n/* harmony export */   \"buttonSearchHandler\": () => (/* binding */ buttonSearchHandler),\n/* harmony export */   \"changeUnitLogic\": () => (/* binding */ changeUnitLogic),\n/* harmony export */   \"buttonUnitHandler\": () => (/* binding */ buttonUnitHandler),\n/* harmony export */   \"changeLangLogic\": () => (/* binding */ changeLangLogic),\n/* harmony export */   \"buttonLangHandler\": () => (/* binding */ buttonLangHandler),\n/* harmony export */   \"locationLogic\": () => (/* binding */ locationLogic)\n/* harmony export */ });\n/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader/loader */ \"./src/loader/loader.js\");\n/* harmony import */ var _utils_getjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getjson */ \"./src/utils/getjson.js\");\n/* harmony import */ var _utils_translit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/translit */ \"./src/utils/translit.js\");\n/* harmony import */ var _utils_errorhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/errorhandler */ \"./src/utils/errorhandler.js\");\n/* harmony import */ var _utils_changeunit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/changeunit */ \"./src/utils/changeunit.js\");\n/* harmony import */ var _utils_changelang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/changelang */ \"./src/utils/changelang.js\");\n\n\n\n\n\n\n\nconst changeBgLogic = () => (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_1__.default)('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17')\n  .then((result) => { window.masterObj.elements.bg.src = result.urls.regular; });\n\nconst buttonBgHandler = (event) => {\n  const clickedButton = event.target;\n  const elementLoader = (0,_loader_loader__WEBPACK_IMPORTED_MODULE_0__.default)(document.body);\n  clickedButton.disabled = true;\n  window.masterObj.elements.bg.onload = () => {\n    document.body.removeChild(elementLoader);\n  };\n  changeBgLogic()\n    .then(() => {\n      clickedButton.disabled = false;\n    });\n};\n\nconst changeLangLogic = (language) => {\n  const keys = Object.keys(window.masterObj.lang);\n  keys.forEach((key) => {\n    window.masterObj.lang[key].element.innerHTML = window.masterObj.lang[key][language];\n  });\n  // костыль\n  window.masterObj.elements.search.placeholder = window.masterObj.lang.searchinpt.element.innerHTML;\n};\n\nconst buttonLangHandler = (event) => {\n  setTimeout(() => {\n    localStorage.setItem('userLang', event.target.innerHTML);\n    const clickedButton = event.target;\n    clickedButton.disabled = true;\n    changeLangLogic(event.target.innerHTML.toLowerCase());\n    clickedButton.disabled = false;\n  }, 0);\n};\n\nconst changeUnitLogic = (unit) => {\n  const keys = Object.keys(window.masterObj.unit);\n  keys.forEach((key) => {\n    window.masterObj.unit[key].element.innerHTML = window.masterObj.unit[key][unit];\n  });\n};\n\nconst buttonUnitHandler = (event) => {\n  setTimeout(() => {\n    localStorage.setItem('userUnit', event.target.innerHTML);\n    const clickedButton = event.target;\n    clickedButton.disabled = true;\n    changeUnitLogic(event.target.innerHTML);\n    clickedButton.disabled = false;\n  }, 0);\n};\n\nconst locationLogic = (location) => {\n  window.masterObj.elements.maplon.innerHTML = `${location.lon}° / ${location.lon * 60}′ E`;\n  window.masterObj.elements.maplat.innerHTML = `${location.lat}° / ${location.lat * 60}′ N`;\n  window.masterObj.elements.mapframe.src = `https://api.mapbox.com/styles/v1/mapbox/dark-v10.html?title=true&zoomwheel=false&access_token=pk.eyJ1IjoiYWxtYXpvbi05NSIsImEiOiJja25tdnF4YzEwd2FqMm9wZTVkYW9kMThyIn0.3TivI8Cmoa_f22ocNJDVwg#9/${location.lat}/${location.lon}`;\n};\n\nconst changeSearchLogic = (location, lang) => (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_1__.default)(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent(location)}&days=3&lang=${encodeURIComponent(lang)}`)\n  .then((result) => result,\n    () => (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_1__.default)(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent((0,_utils_translit__WEBPACK_IMPORTED_MODULE_2__.default)(location))}&days=3&lang=${encodeURIComponent(lang)}`).then((result) => result, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_3__.default));\n\nconst buttonSearchHandler = (event) => {\n  if (!window.masterObj.elements.search.value) return alert('Введите значение');\n  let locationName = '';\n  const clickedButton = event.target;\n  const mapLoader = (0,_loader_loader__WEBPACK_IMPORTED_MODULE_0__.default)(window.masterObj.elements.map);\n  window.masterObj.elements.mapframe.src = ''; // не догнал зачем так делать\n  window.masterObj.elements.mapframe.onload = '';\n  const dayLoader = (0,_loader_loader__WEBPACK_IMPORTED_MODULE_0__.default)(window.masterObj.elements.forecastToday);\n  const days3Loader = (0,_loader_loader__WEBPACK_IMPORTED_MODULE_0__.default)(window.masterObj.elements.forecastTheeDays);\n  clickedButton.disabled = true;\n  locationName = window.masterObj.elements.search.value;\n  let weatherTmp = '';\n  changeSearchLogic(locationName, 'ru')\n    .then((weatherForecast) => {\n      weatherTmp = weatherForecast;\n      window.masterObj.elements.mapframe.onload = () => {\n        window.masterObj.elements.map.removeChild(mapLoader);\n        window.masterObj.elements.mapframe.onload = '';\n      };\n      locationLogic(weatherForecast.location);\n      (0,_utils_changeunit__WEBPACK_IMPORTED_MODULE_4__.fillUnit)(weatherForecast);\n      (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_5__.fillWeatherData)(weatherForecast, 'ru');\n      return changeSearchLogic(locationName, 'en');\n    }, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_3__.default)\n    .then((weatherForecast) => {\n      (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_5__.fillWeatherData)(weatherForecast, 'en');\n      return weatherForecast.location;\n    })\n    .then((location) => {\n      const promises = [\n        (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_1__.default)(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=en`)\n          .then((result) => { (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_5__.fillMeta)(result, 'en'); }, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_3__.default),\n        (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_1__.default)(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=ru`)\n          .then((result) => { (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_5__.fillMeta)(result, 'ru'); }, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_3__.default)];\n      return Promise.allSettled(promises);\n    }, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_3__.default)\n    .then(() => {\n      (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_5__.fillWithImages)([\n        weatherTmp.current.condition.icon,\n        weatherTmp.forecast.forecastday[0].day.condition.icon,\n        weatherTmp.forecast.forecastday[1].day.condition.icon,\n        weatherTmp.forecast.forecastday[2].day.condition.icon,\n      ], () => {\n        window.masterObj.elements.forecastToday.removeChild(dayLoader);\n        window.masterObj.elements.forecastTheeDays.removeChild(days3Loader);\n        changeUnitLogic(localStorage.getItem('userUnit'));\n        changeLangLogic(localStorage.getItem('userLang').toLowerCase());\n      });\n      clickedButton.disabled = false;\n    });\n  return 'something';\n};\n\n\n\n\n//# sourceURL=webpack://mayweather/./src/buttons_handlers/buttons_handler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_fonts_Roboto_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/fonts/Roboto/Roboto-Regular.ttf */ \"./src/assets/fonts/Roboto/Roboto-Regular.ttf\");\n/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader */ \"./src/loader/loader.js\");\n/* harmony import */ var _utils_getjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getjson */ \"./src/utils/getjson.js\");\n/* harmony import */ var _utils_changelang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/changelang */ \"./src/utils/changelang.js\");\n/* harmony import */ var _utils_changeunit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/changeunit */ \"./src/utils/changeunit.js\");\n/* harmony import */ var _buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons_handlers/buttons_handler */ \"./src/buttons_handlers/buttons_handler.js\");\n/* harmony import */ var _utils_errorhandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/errorhandler */ \"./src/utils/errorhandler.js\");\n\n\n\n\n\n\n\n\n\nconst pageLoading = (0,_loader_loader__WEBPACK_IMPORTED_MODULE_2__.default)(document.body);\nwindow.masterObj = {};\n\nfunction initAll() {\n  /* close general loader logic */\n  let loaderCounter = 0;\n  function dataDone() {\n    if (loaderCounter > 2) {\n      document.body.removeChild(pageLoading);\n    }\n    loaderCounter += 1;\n    (0,_buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.changeUnitLogic)(localStorage.getItem('userUnit'));\n    (0,_buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.changeLangLogic)(localStorage.getItem('userLang').toLowerCase());\n  }\n\n  /* clock timer */\n  setInterval(() => {\n    window.masterObj.elements.time.innerHTML = new Date().toLocaleTimeString();\n  }, 1000);\n\n  /* interface elements */\n  window.masterObj.elements = {};\n  window.masterObj.elements.bg = document.querySelector('.background');\n  window.masterObj.elements.map = document.querySelector('.location-info');\n  window.masterObj.elements.mapframe = document.querySelector('.location-info iframe');\n  window.masterObj.elements.maplon = document.querySelector('.longitude span');\n  window.masterObj.elements.maplat = document.querySelector('.latitude span');\n  window.masterObj.elements.forecastToday = document.querySelector('.forecast-for-today');\n  window.masterObj.elements.forecastTheeDays = document.querySelector('.three-days-forecast');\n\n  window.masterObj.elements.time = document.querySelector('.time');\n\n  /* control block elements */\n  window.masterObj.buttons = {};\n  window.masterObj.buttons.bg = document.querySelector('.change-bg');\n  window.masterObj.buttons.unit = document.querySelector('.change-unit');\n  window.masterObj.buttons.lang = document.querySelector('.change-lang');\n  window.masterObj.buttons.search = document.querySelector('.search-go');\n\n  window.masterObj.elements.search = document.querySelector('#search-input');\n\n  if (!localStorage.getItem('userLang')) localStorage.setItem('userLang', 'ru');\n  if (!localStorage.getItem('userUnit')) localStorage.setItem('userUnit', 'C');\n\n  window.masterObj.lang = (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_4__.getTranslateObj)();\n  window.masterObj.unit = (0,_utils_changeunit__WEBPACK_IMPORTED_MODULE_5__.getUnitObj)();\n\n  /* add event listeners */\n  window.masterObj.buttons.bg.addEventListener('click', _buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.buttonBgHandler);\n  window.masterObj.buttons.search.addEventListener('click', _buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.buttonSearchHandler);\n  window.masterObj.buttons.unit.addEventListener('click', _buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.buttonUnitHandler);\n  window.masterObj.buttons.lang.addEventListener('click', _buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.buttonLangHandler);\n\n  /* init bg */\n  (0,_buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.changeBgLogic)().then(dataDone);\n\n  /* get location, then weatherForecast, then   */\n  (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_3__.default)('http://ipinfo.io/?token=8f1769cb9f55d9')\n    .then((userLocation) => (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_3__.default)(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent(userLocation.city)}&days=3&lang=ru`),\n      _utils_errorhandler__WEBPACK_IMPORTED_MODULE_7__.default)\n    .then((weatherForecast) => {\n      console.log(weatherForecast);\n      (0,_buttons_handlers_buttons_handler__WEBPACK_IMPORTED_MODULE_6__.locationLogic)(weatherForecast.location);\n      (0,_utils_changeunit__WEBPACK_IMPORTED_MODULE_5__.fillUnit)(weatherForecast);\n      (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_4__.fillWeatherData)(weatherForecast, 'ru');\n      (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_4__.fillWithImages)([\n        weatherForecast.current.condition.icon,\n        weatherForecast.forecast.forecastday[0].day.condition.icon,\n        weatherForecast.forecast.forecastday[1].day.condition.icon,\n        weatherForecast.forecast.forecastday[2].day.condition.icon,\n      ], dataDone);\n      return (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_3__.default)(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent(weatherForecast.location.name)}&days=3&lang=en`);\n    })\n    .then((weatherForecast) => {\n      (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_4__.fillWeatherData)(weatherForecast, 'en');\n      return weatherForecast.location;\n    }, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_7__.default)\n    .then((location) => {\n      (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_3__.default)(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=en`)\n        .then((result) => { (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_4__.fillMeta)(result, 'en'); dataDone(); }, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_7__.default);\n      (0,_utils_getjson__WEBPACK_IMPORTED_MODULE_3__.default)(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=ru`)\n        .then((result) => { (0,_utils_changelang__WEBPACK_IMPORTED_MODULE_4__.fillMeta)(result, 'ru'); dataDone(); }, _utils_errorhandler__WEBPACK_IMPORTED_MODULE_7__.default);\n    });\n}\n\nwindow.masterObj = {\n};\ndocument.addEventListener('DOMContentLoaded', initAll);\n\n\n//# sourceURL=webpack://mayweather/./src/index.js?");

/***/ }),

/***/ "./src/loader/loader.js":
/*!******************************!*\
  !*** ./src/loader/loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLoader = (elem) => {\n  const childLoader = document.createElement('div');\n  childLoader.classList.add('loader');\n  elem.appendChild(childLoader);\n  return childLoader;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLoader);\n\n\n//# sourceURL=webpack://mayweather/./src/loader/loader.js?");

/***/ }),

/***/ "./src/utils/changelang.js":
/*!*********************************!*\
  !*** ./src/utils/changelang.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTranslateObj\": () => (/* binding */ getTranslateObj),\n/* harmony export */   \"fillWeatherData\": () => (/* binding */ fillWeatherData),\n/* harmony export */   \"fillMeta\": () => (/* binding */ fillMeta),\n/* harmony export */   \"fillWithImages\": () => (/* binding */ fillWithImages)\n/* harmony export */ });\nconst imageObj = document.querySelectorAll('.weather-icon');\nconst days = document.querySelectorAll('.forecast-list li');\n\nfunction getTranslateObj() {\n  return {\n    /* static */\n    bgbutton: {\n      element: window.masterObj.buttons.bg,\n      ru: 'Сменить фон очередной раз',\n      en: 'Change the background again',\n    },\n    langbutton: {\n      element: window.masterObj.buttons.lang,\n      ru: 'EN',\n      en: 'RU',\n    },\n    searchbutton: {\n      element: window.masterObj.buttons.search,\n      ru: 'Поиск',\n      en: 'Search',\n    },\n    searchinpt: {\n      element: { innerHTML: '' },\n      ru: 'Введите местоположение',\n      en: 'Enter location',\n    },\n    cityheader: {\n      element: document.querySelector('.city-head'),\n      ru: 'Город:',\n      en: 'City:',\n    },\n    countryheader: {\n      element: document.querySelector('.country-head'),\n      ru: 'Страна:',\n      en: 'Country:',\n    },\n    datehead: {\n      element: document.querySelector('.date-head'),\n      ru: 'Дата:',\n      en: 'Date:',\n    },\n    timehead: {\n      element: document.querySelector('.time-head'),\n      ru: 'Время:',\n      en: 'Time:',\n    },\n    currenttemperaturehead: {\n      element: document.querySelector('.current-temperature-head'),\n      ru: 'Текущая температура:',\n      en: 'Current temperature:',\n    },\n    apparenttemparaturehead: {\n      element: document.querySelector('.apparent-temparature-head'),\n      ru: 'По ощущению:',\n      en: 'Apparent temparature:',\n    },\n    windspeedhead: {\n      element: document.querySelector('.wind-speed-head'),\n      ru: 'Скорость ветра:',\n      en: 'Wind Speed:',\n    },\n    humidityhead: {\n      element: document.querySelector('.humidity-head'),\n      ru: 'Влажность:',\n      en: 'Humidity:',\n    },\n    longitude: {\n      element: document.querySelector('.longitude b'),\n      ru: 'Долгота:',\n      en: 'Longitude:',\n    },\n    latitude: {\n      element: document.querySelector('.latitude b'),\n      ru: 'Широта:',\n      en: 'Latitude:',\n    },\n    /* dynamic */\n    city: {\n      element: document.querySelector('.city'),\n      ru: '',\n      en: '',\n    },\n    country: {\n      element: document.querySelector('.country'),\n      ru: '',\n      en: '',\n    },\n    date: {\n      element: document.querySelector('.date'),\n      ru: '',\n      en: '',\n    },\n    windspeed: {\n      element: document.querySelector('.wind-speed'),\n      ru: '',\n      en: '',\n    },\n    humidity: {\n      element: document.querySelector('.humidity'),\n      ru: '',\n      en: '',\n    },\n    weathersummary: {\n      element: document.querySelector('.weather-summary'),\n      ru: '',\n      en: '',\n    },\n    day1: {\n      element: days[0].querySelector('.day'),\n      ru: '',\n      en: '',\n    },\n    day1summary: {\n      element: days[0].querySelector('.day-summary'),\n      ru: '',\n      en: '',\n    },\n    day2: {\n      element: days[1].querySelector('.day'),\n      ru: '',\n      en: '',\n    },\n    day2summary: {\n      element: days[1].querySelector('.day-summary'),\n      ru: '',\n      en: '',\n    },\n    day3: {\n      element: days[2].querySelector('.day'),\n      ru: '',\n      en: '',\n    },\n    day3summary: {\n      element: days[2].querySelector('.day-summary'),\n      ru: '',\n      en: '',\n    },\n  };\n}\n\nfunction fillWeatherData(forecast, language) {\n  const options = {\n    month: 'long', weekday: 'long', day: '2-digit', hour12: false,\n  };\n  const tmp = window.masterObj.lang;\n  tmp.humidity[language] = `${forecast.current.humidity} %`;\n  tmp.windspeed[language] = (forecast.current.wind_kph / 3.6).toFixed(2) + (language === 'ru' ? ' м/c' : ' mps');\n  tmp.weathersummary[language] = forecast.current.condition.text;\n\n  const dobj = forecast.forecast.forecastday;\n  tmp.day1[language] = new Date(dobj[0].date).toLocaleTimeString(language, options).slice(0, -10);\n  tmp.day1summary[language] = forecast.forecast.forecastday[0].day.condition.text;\n  tmp.day2[language] = new Date(dobj[1].date).toLocaleTimeString(language, options).slice(0, -10);\n  tmp.day2summary[language] = forecast.forecast.forecastday[1].day.condition.text;\n  tmp.day3[language] = new Date(dobj[2].date).toLocaleTimeString(language, options).slice(0, -10);\n  tmp.day3summary[language] = forecast.forecast.forecastday[2].day.condition.text;\n}\n\nfunction fillMeta(location, language) {\n  const tmp = window.masterObj.lang;\n  const options = {\n    month: 'long', weekday: 'short', day: '2-digit', hour12: false,\n  };\n  tmp.city[language] = location.results[0].components.city;\n  tmp.country[language] = location.results[0].components.country;\n  tmp.date[language] = new Date().toLocaleTimeString(language, options).slice(0, -10);\n}\n\nfunction fillWithImages(images, done) {\n  const promises = [];\n  for (let i = 0; i < images.length; i += 1) {\n    promises.push(new Promise((resolve, reject) => {\n      imageObj[i].onload = () => resolve(1);\n      imageObj[i].onerror = (error) => reject(error);\n    }));\n    imageObj[i].src = images[i];\n  }\n  Promise.allSettled(promises).then(done);\n}\n\n\n\n\n//# sourceURL=webpack://mayweather/./src/utils/changelang.js?");

/***/ }),

/***/ "./src/utils/changeunit.js":
/*!*********************************!*\
  !*** ./src/utils/changeunit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUnitObj\": () => (/* binding */ getUnitObj),\n/* harmony export */   \"fillUnit\": () => (/* binding */ fillUnit)\n/* harmony export */ });\nconst avgTemperatureArray = document.querySelectorAll('.average-temperature');\n\nfunction getUnitObj() {\n  return {\n    unitbutton: {\n      element: window.masterObj.buttons.unit,\n      C: 'F',\n      F: 'C',\n    },\n    currentTemperature: {\n      element: document.querySelector('.current-temperature'),\n      C: '12 C',\n      F: '15 F',\n    },\n    apparentTemparature: {\n      element: document.querySelector('.apparent-temparature'),\n      C: '',\n      F: '',\n    },\n    averageTemperatureDay1: {\n      element: avgTemperatureArray[0],\n      C: '',\n      F: '',\n    },\n    averageTemperatureDay2: {\n      element: avgTemperatureArray[1],\n      C: '',\n      F: '',\n    },\n    averageTemperatureDay3: {\n      element: avgTemperatureArray[2],\n      C: '',\n      F: '',\n    },\n  };\n}\n\nfunction fillUnit(forecast) {\n  const tmp = window.masterObj.unit;\n  tmp.currentTemperature.C = `${forecast.current.temp_c} °C`;\n  tmp.currentTemperature.F = `${forecast.current.temp_f} °F`;\n  tmp.apparentTemparature.C = `${forecast.current.feelslike_c} °C`;\n  tmp.apparentTemparature.F = `${forecast.current.feelslike_f} °F`;\n  tmp.averageTemperatureDay1.C = `${forecast.forecast.forecastday[0].day.avgtemp_c} °C`;\n  tmp.averageTemperatureDay1.F = `${forecast.forecast.forecastday[0].day.avgtemp_f} °F`;\n  tmp.averageTemperatureDay2.C = `${forecast.forecast.forecastday[1].day.avgtemp_c} °C`;\n  tmp.averageTemperatureDay2.F = `${forecast.forecast.forecastday[1].day.avgtemp_f} °F`;\n  tmp.averageTemperatureDay3.C = `${forecast.forecast.forecastday[2].day.avgtemp_c} °C`;\n  tmp.averageTemperatureDay3.F = `${forecast.forecast.forecastday[2].day.avgtemp_f} °F`;\n}\n\n\n\n\n//# sourceURL=webpack://mayweather/./src/utils/changeunit.js?");

/***/ }),

/***/ "./src/utils/errorhandler.js":
/*!***********************************!*\
  !*** ./src/utils/errorhandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((error) => { console.log(error); alert('problem, see console'); window.location.reload(); });\n\n\n//# sourceURL=webpack://mayweather/./src/utils/errorhandler.js?");

/***/ }),

/***/ "./src/utils/getjson.js":
/*!******************************!*\
  !*** ./src/utils/getjson.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getJSON = (address) => new Promise((resolve, reject) => {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', address, true);\n  xhr.responseType = 'json';\n  xhr.onload = () => {\n    if (xhr.status === 200) {\n      resolve(xhr.response);\n    } else { reject(xhr.response); }\n  };\n  xhr.send();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getJSON);\n\n\n//# sourceURL=webpack://mayweather/./src/utils/getjson.js?");

/***/ }),

/***/ "./src/utils/translit.js":
/*!*******************************!*\
  !*** ./src/utils/translit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ruslat = new Map([\n  ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'], ['д', 'd'], ['е', 'e'],\n  ['є', 'e'], ['ё', 'e'], ['ж', 'j'], ['з', 'z'], ['и', 'i'], ['ї', 'yi'], ['й', 'i'],\n  ['к', 'k'], ['л', 'l'], ['м', 'm'], ['н', 'n'], ['о', 'o'], ['п', 'p'], ['р', 'r'],\n  ['с', 's'], ['т', 't'], ['у', 'u'], ['ф', 'f'], ['х', 'h'], ['ц', 'c'], ['ч', 'ch'],\n  ['ш', 'sh'], ['щ', 'shh'], ['ы', 'y'], ['э', 'e'], ['ю', 'u'], ['я', 'ya'],\n]);\n\nfunction rusToLat(str) {\n  const result = [];\n  let i;\n  let word;\n\n  i = 0;\n  while (i < str.length) {\n    if (!(str[i] === 'ъ' || str[i] === 'ь')) {\n      word = ruslat.get(str[i].toLowerCase()) || str[i];\n      if (str[i] === str[i].toUpperCase()) word = word.toUpperCase();\n      result.push(word);\n    }\n    i += 1;\n  }\n\n  return result.join('');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rusToLat);\n\n\n//# sourceURL=webpack://mayweather/./src/utils/translit.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;