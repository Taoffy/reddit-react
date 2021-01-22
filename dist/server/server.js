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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./main.global.less */ \"./src/main.global.less\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\nfunction App() {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null))));\n}\nexports.App = App;\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.less":
/*!******************************!*\
  !*** ./src/main.global.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/main.global.less?");

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