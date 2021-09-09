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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./main.global.less */ \"./src/main.global.less\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\nfunction App() {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null,\n                react_1.default.createElement(CardsList_1.CardsList, null)))));\n}\nexports.App = App;\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.less":
/*!******************************!*\
  !*** ./src/main.global.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \"body{padding:0;margin:0;background-color:#f4f4f4;font-size:14px;line-height:16px;font-family:Roboto,serif}*{color:#333;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul{margin:0;padding:0;list-style:none}a{text-decoration:none}button{padding:0;border:0;background:transparent;cursor:pointer}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.less?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nexports.indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n  <div id=\\\"react-root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar indexTemplate_1 = __webpack_require__(/*! ../server/indexTemplate */ \"./src/server/indexTemplate.js\");\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar app = express_1.default();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.listen(3000, function () {\n    console.log('server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_less_1 = __importDefault(__webpack_require__(/*! ./card.less */ \"./src/shared/CardsList/Card/card.less\"));\nvar Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\");\nvar Menu_1 = __webpack_require__(/*! ./Menu/Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\");\nvar Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\");\nvar TextContent_1 = __webpack_require__(/*! ./TextContent/TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\");\nfunction Card() {\n    return (react_1.default.createElement(\"li\", { className: card_less_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, null),\n        react_1.default.createElement(Preview_1.Preview, null),\n        react_1.default.createElement(Menu_1.Menu, null),\n        react_1.default.createElement(Controls_1.Controls, null)));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Controls = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar controls_less_1 = __importDefault(__webpack_require__(/*! ./controls.less */ \"./src/shared/CardsList/Card/Controls/controls.less\"));\nfunction Controls() {\n    return (react_1.default.createElement(\"div\", { className: controls_less_1.default.controls },\n        react_1.default.createElement(\"div\", { className: controls_less_1.default.votesCounter },\n            react_1.default.createElement(\"button\", { className: controls_less_1.default.up },\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\n            react_1.default.createElement(\"span\", { className: controls_less_1.default.votesValue }, \"132\"),\n            react_1.default.createElement(\"button\", { className: controls_less_1.default.down },\n                react_1.default.createElement(\"svg\", { className: controls_less_1.default.down__svg, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))),\n        react_1.default.createElement(\"button\", { className: controls_less_1.default.commentsButton },\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\n            react_1.default.createElement(\"span\", { className: controls_less_1.default.commentsNumber }, \"27\")),\n        react_1.default.createElement(\"div\", { className: controls_less_1.default.actions },\n            react_1.default.createElement(\"button\", { className: controls_less_1.default.shareButton },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\n            react_1.default.createElement(\"button\", { className: controls_less_1.default.saveButton },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\n}\nexports.Controls = Controls;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.less":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--3otGu\",\n\t\"votesCounter\": \"controls__votesCounter--1ekjp\",\n\t\"up\": \"controls__up--3Zuqh\",\n\t\"down\": \"controls__down--1H6Eo\",\n\t\"votesValue\": \"controls__votesValue--3Df21\",\n\t\"down__svg\": \"controls__down__svg--115hz\",\n\t\"commentsButton\": \"controls__commentsButton--2mJh9\",\n\t\"commentsNumber\": \"controls__commentsNumber--ZEdDQ\",\n\t\"actions\": \"controls__actions--318Fl\",\n\t\"saveButton\": \"controls__saveButton--ss1H8\",\n\t\"shareButton\": \"controls__shareButton--230A4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menu_less_1 = __importDefault(__webpack_require__(/*! ./menu.less */ \"./src/shared/CardsList/Card/Menu/menu.less\"));\nfunction Menu() {\n    return (react_1.default.createElement(\"div\", { className: menu_less_1.default.menu },\n        react_1.default.createElement(\"button\", { className: menu_less_1.default.menuButton },\n            react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n                react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n                react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })))));\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.less":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3HgxL\",\n\t\"menuButton\": \"menu__menuButton--3BpWR\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Preview = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar preview_less_1 = __importDefault(__webpack_require__(/*! ./preview.less */ \"./src/shared/CardsList/Card/Preview/preview.less\"));\nfunction Preview() {\n    return (react_1.default.createElement(\"div\", { className: preview_less_1.default.preview },\n        react_1.default.createElement(\"img\", { className: preview_less_1.default.previewImg, src: \"https://cdn.dribbble.com/users/486985/screenshots/11240082/p04_1x.png\", alt: \"preview\" })));\n}\nexports.Preview = Preview;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.less":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3CgtQ\",\n\t\"previewImg\": \"preview__previewImg--3TFva\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar textContent_less_1 = __importDefault(__webpack_require__(/*! ./textContent.less */ \"./src/shared/CardsList/Card/TextContent/textContent.less\"));\nfunction TextContent() {\n    return (react_1.default.createElement(\"div\", { className: textContent_less_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textContent_less_1.default.metaData },\n            react_1.default.createElement(\"div\", { className: textContent_less_1.default.userLink },\n                react_1.default.createElement(\"img\", { className: textContent_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/42578/avatars/mini/d0ac345ce3f79bf2c2e7e64527bbf342.jpg?1530900788\", alt: \"avatar\" }),\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: textContent_less_1.default.username }, \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\")),\n            react_1.default.createElement(\"span\", { className: textContent_less_1.default.createdAt },\n                react_1.default.createElement(\"span\", { className: textContent_less_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n        react_1.default.createElement(\"h2\", { className: textContent_less_1.default.title },\n            react_1.default.createElement(\"a\", { href: \"#post-url\", className: textContent_less_1.default.postLink }, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438\"))));\n}\nexports.TextContent = TextContent;\n;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textContent.less":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textContent.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textContent__textContent--2NJwL\",\n\t\"metaData\": \"textContent__metaData--3hA3O\",\n\t\"userLink\": \"textContent__userLink--2VmvG\",\n\t\"avatar\": \"textContent__avatar--mV0fz\",\n\t\"username\": \"textContent__username--3iDTf\",\n\t\"createdAt\": \"textContent__createdAt--3489h\",\n\t\"publishedLabel\": \"textContent__publishedLabel--34Z2O\",\n\t\"title\": \"textContent__title--VMfL1\",\n\t\"postLink\": \"textContent__postLink--2Bhqy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textContent.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/Card/card.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--3Kg9c\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.less?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\nfunction CardsList() {\n    return (react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardslist },\n        react_1.default.createElement(Card_1.Card, null)));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/cardslist.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardslist\": \"cardslist__cardslist--3lDCT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.less?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_less_1 = __importDefault(__webpack_require__(/*! ./content.less */ \"./src/shared/Content/content.less\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_less_1.default.content }, children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.less":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--3fgq5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.less?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_less_1 = __importDefault(__webpack_require__(/*! ./header.less */ \"./src/shared/Header/header.less\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\nvar ThreadTittle_1 = __webpack_require__(/*! ./ThreadTittle/ThreadTittle */ \"./src/shared/Header/ThreadTittle/ThreadTittle.tsx\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_less_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTittle_1.ThreadTittle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar searchBlock_less_1 = __importDefault(__webpack_require__(/*! ./searchBlock.less */ \"./src/shared/Header/SearchBlock/searchBlock.less\"));\nfunction SearchBlock() {\n    return (react_1.default.createElement(\"div\", { className: searchBlock_less_1.default.searchBlock }));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchBlock.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchBlock.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchBlock__searchBlock--2nufU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchBlock.less?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortBlock_less_1 = __importDefault(__webpack_require__(/*! ./sortBlock.less */ \"./src/shared/Header/SortBlock/sortBlock.less\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortBlock_less_1.default.sortBlock }, \"sorting dropdown\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortBlock.less":
/*!****************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortBlock.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortBlock__sortBlock--38_SV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortBlock.less?");

/***/ }),

/***/ "./src/shared/Header/ThreadTittle/ThreadTittle.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/Header/ThreadTittle/ThreadTittle.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTittle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadTittle_less_1 = __importDefault(__webpack_require__(/*! ./threadTittle.less */ \"./src/shared/Header/ThreadTittle/threadTittle.less\"));\nfunction ThreadTittle() {\n    return (react_1.default.createElement(\"h1\", { className: threadTittle_less_1.default.threadTittle }, \"Thread Tittle\"));\n}\nexports.ThreadTittle = ThreadTittle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTittle/ThreadTittle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTittle/threadTittle.less":
/*!**********************************************************!*\
  !*** ./src/shared/Header/ThreadTittle/threadTittle.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTittle\": \"threadTittle__threadTittle--32JET\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTittle/threadTittle.less?");

/***/ }),

/***/ "./src/shared/Header/header.less":
/*!***************************************!*\
  !*** ./src/shared/Header/header.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--rZiE5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.less?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_less_1 = __importDefault(__webpack_require__(/*! ./layout.less */ \"./src/shared/Layout/layout.less\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_less_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/layout.less":
/*!***************************************!*\
  !*** ./src/shared/Layout/layout.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--1XuYy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.less?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });