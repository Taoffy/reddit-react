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

/***/ "./src/shared/CardsList/Card/ActionsDropdown/ActionsDropdown.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/ActionsDropdown/ActionsDropdown.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar actionsDropdown_module_less_1 = __importDefault(__webpack_require__(/*! ./actionsDropdown.module.less */ \"./src/shared/CardsList/Card/ActionsDropdown/actionsDropdown.module.less\"));\nvar GenericList_1 = __importDefault(__webpack_require__(/*! ../../../GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\"));\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar Text_1 = __importDefault(__webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\"));\nvar ACTIONS_LIST = [\n    {\n        As: \"li\",\n        img: react_1.default.createElement(Icons_1.CommentsIcon, null),\n        className: actionsDropdown_module_less_1.default.item,\n        text: 'Комментарии',\n    },\n    {\n        As: \"li\",\n        img: react_1.default.createElement(Icons_1.ShareIcon, null),\n        className: actionsDropdown_module_less_1.default.item,\n        text: 'Поделиться',\n    },\n    {\n        As: \"li\",\n        img: react_1.default.createElement(Icons_1.BlockIcon, null),\n        className: actionsDropdown_module_less_1.default.item,\n        text: 'Скрыть',\n    },\n    {\n        As: \"li\",\n        img: react_1.default.createElement(Icons_1.SaveIcon, null),\n        className: actionsDropdown_module_less_1.default.item,\n        text: 'Сохранить',\n    },\n    {\n        As: \"li\",\n        img: react_1.default.createElement(Icons_1.WarningIcon, null),\n        className: actionsDropdown_module_less_1.default.item,\n        text: 'Пожаловаться',\n    },\n].map(generateRandomIndex_1.generateId);\nvar ActionsDropdown = function () {\n    return (react_1.default.createElement(\"div\", { className: actionsDropdown_module_less_1.default.dropdown },\n        react_1.default.createElement(\"ul\", { className: actionsDropdown_module_less_1.default.list },\n            react_1.default.createElement(GenericList_1.default, { list: ACTIONS_LIST })),\n        react_1.default.createElement(\"button\", { type: \"button\", className: actionsDropdown_module_less_1.default.closeButton },\n            react_1.default.createElement(Text_1.default, { children: \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\", size: 14, mobileSize: 12, color: \"grey66\" }))));\n};\nexports.default = ActionsDropdown;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ActionsDropdown/ActionsDropdown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ActionsDropdown/actionsDropdown.module.less":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/ActionsDropdown/actionsDropdown.module.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdown\": \"actionsDropdown-module__dropdown--3DaOz\",\n\t\"list\": \"actionsDropdown-module__list--2pyn6\",\n\t\"item\": \"actionsDropdown-module__item--OULdi\",\n\t\"closeButton\": \"actionsDropdown-module__closeButton--MhhVU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ActionsDropdown/actionsDropdown.module.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_module_less_1 = __importDefault(__webpack_require__(/*! ./card.module.less */ \"./src/shared/CardsList/Card/card.module.less\"));\nvar Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\");\nvar Menu_1 = __webpack_require__(/*! ./Menu/Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\");\nvar Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\");\nvar TextContent_1 = __webpack_require__(/*! ./TextContent/TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\");\nfunction Card() {\n    return (react_1.default.createElement(\"li\", { className: card_module_less_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, null),\n        react_1.default.createElement(Preview_1.Preview, null),\n        react_1.default.createElement(Menu_1.Menu, null),\n        react_1.default.createElement(Controls_1.Controls, null)));\n}\nexports.Card = Card;\n;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Controls = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar controls_module_less_1 = __importDefault(__webpack_require__(/*! ./controls.module.less */ \"./src/shared/CardsList/Card/Controls/controls.module.less\"));\nfunction Controls() {\n    return (react_1.default.createElement(\"div\", { className: controls_module_less_1.default.controls },\n        react_1.default.createElement(\"div\", { className: controls_module_less_1.default.votesCounter },\n            react_1.default.createElement(\"button\", { className: controls_module_less_1.default.up },\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\n            react_1.default.createElement(\"span\", { className: controls_module_less_1.default.votesValue }, \"132\"),\n            react_1.default.createElement(\"button\", { className: controls_module_less_1.default.down },\n                react_1.default.createElement(\"svg\", { className: controls_module_less_1.default.down__svg, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))),\n        react_1.default.createElement(\"button\", { className: controls_module_less_1.default.commentsButton },\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\n            react_1.default.createElement(\"span\", { className: controls_module_less_1.default.commentsNumber }, \"27\")),\n        react_1.default.createElement(\"div\", { className: controls_module_less_1.default.actions },\n            react_1.default.createElement(\"button\", { className: controls_module_less_1.default.shareButton },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\n            react_1.default.createElement(\"button\", { className: controls_module_less_1.default.saveButton },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\n}\nexports.Controls = Controls;\n;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.module.less":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.module.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls-module__controls--14Pkz\",\n\t\"votesCounter\": \"controls-module__votesCounter--235yJ\",\n\t\"up\": \"controls-module__up--1ic_R\",\n\t\"down\": \"controls-module__down--2zVTK\",\n\t\"votesValue\": \"controls-module__votesValue--ZxvM7\",\n\t\"down__svg\": \"controls-module__down__svg--3tQFj\",\n\t\"commentsButton\": \"controls-module__commentsButton--1ia72\",\n\t\"commentsNumber\": \"controls-module__commentsNumber--31Mcy\",\n\t\"actions\": \"controls-module__actions--3N2J9\",\n\t\"saveButton\": \"controls-module__saveButton--1FXcC\",\n\t\"shareButton\": \"controls-module__shareButton--DxYZV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.module.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menu_module_less_1 = __importDefault(__webpack_require__(/*! ./menu.module.less */ \"./src/shared/CardsList/Card/Menu/menu.module.less\"));\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ../../../Dropdown/Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"));\nvar ActionsDropdown_1 = __importDefault(__webpack_require__(/*! ../ActionsDropdown/ActionsDropdown */ \"./src/shared/CardsList/Card/ActionsDropdown/ActionsDropdown.tsx\"));\nvar MenuButton_1 = __importDefault(__webpack_require__(/*! ./MenuButton/MenuButton */ \"./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx\"));\nfunction Menu() {\n    return (react_1.default.createElement(\"div\", { className: menu_module_less_1.default.menu },\n        react_1.default.createElement(Dropdown_1.default, { button: react_1.default.createElement(MenuButton_1.default, null) },\n            react_1.default.createElement(ActionsDropdown_1.default, null))));\n}\nexports.Menu = Menu;\n;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menuButton_module_less_1 = __importDefault(__webpack_require__(/*! ./menuButton.module.less */ \"./src/shared/CardsList/Card/Menu/MenuButton/menuButton.module.less\"));\nvar MenuButton = function () {\n    return (react_1.default.createElement(\"button\", { type: \"button\", className: menuButton_module_less_1.default.menuButton },\n        react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" }))));\n};\nexports.default = MenuButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuButton/MenuButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuButton/menuButton.module.less":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuButton/menuButton.module.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuButton\": \"menuButton-module__menuButton--2FSzu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuButton/menuButton.module.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.module.less":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.module.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu-module__menu--3vMRJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.module.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Preview = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar preview_module_less_1 = __importDefault(__webpack_require__(/*! ./preview.module.less */ \"./src/shared/CardsList/Card/Preview/preview.module.less\"));\nfunction Preview() {\n    return (react_1.default.createElement(\"div\", { className: preview_module_less_1.default.preview },\n        react_1.default.createElement(\"img\", { className: preview_module_less_1.default.previewImg, src: \"https://cdn.dribbble.com/users/486985/screenshots/11240082/p04_1x.png\", alt: \"preview\" })));\n}\nexports.Preview = Preview;\n;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.module.less":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.module.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview-module__preview--2aD02\",\n\t\"previewImg\": \"preview-module__previewImg--2fzeI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.module.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar textContent_module_less_1 = __importDefault(__webpack_require__(/*! ./textContent.module.less */ \"./src/shared/CardsList/Card/TextContent/textContent.module.less\"));\nfunction TextContent() {\n    return (react_1.default.createElement(\"div\", { className: textContent_module_less_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textContent_module_less_1.default.metaData },\n            react_1.default.createElement(\"div\", { className: textContent_module_less_1.default.userLink },\n                react_1.default.createElement(\"img\", { className: textContent_module_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/42578/avatars/mini/d0ac345ce3f79bf2c2e7e64527bbf342.jpg?1530900788\", alt: \"avatar\" }),\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: textContent_module_less_1.default.username }, \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\")),\n            react_1.default.createElement(\"span\", { className: textContent_module_less_1.default.createdAt },\n                react_1.default.createElement(\"span\", { className: textContent_module_less_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n        react_1.default.createElement(\"h2\", { className: textContent_module_less_1.default.title },\n            react_1.default.createElement(\"a\", { href: \"#post-url\", className: textContent_module_less_1.default.postLink }, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438\"))));\n}\nexports.TextContent = TextContent;\n;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textContent.module.less":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textContent.module.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textContent-module__textContent--3rFpH\",\n\t\"metaData\": \"textContent-module__metaData--2Vn4y\",\n\t\"userLink\": \"textContent-module__userLink--2BP7M\",\n\t\"avatar\": \"textContent-module__avatar--3lrlh\",\n\t\"username\": \"textContent-module__username--2NRlf\",\n\t\"createdAt\": \"textContent-module__createdAt--1lb5u\",\n\t\"publishedLabel\": \"textContent-module__publishedLabel--2HZIF\",\n\t\"title\": \"textContent-module__title--1h3PJ\",\n\t\"postLink\": \"textContent-module__postLink--35Kfm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textContent.module.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.module.less":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/card.module.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card-module__card--270X1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.module.less?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nvar cardslist_module_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.module.less */ \"./src/shared/CardsList/cardslist.module.less\"));\nfunction CardsList() {\n    return (react_1.default.createElement(\"ul\", { className: cardslist_module_less_1.default.cardslist },\n        react_1.default.createElement(Card_1.Card, null)));\n}\nexports.CardsList = CardsList;\n;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.module.less":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/cardslist.module.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardslist\": \"cardslist-module__cardslist--B2Us7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.module.less?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_module_less_1 = __importDefault(__webpack_require__(/*! ./content.module.less */ \"./src/shared/Content/content.module.less\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_module_less_1.default.content }, children));\n}\nexports.Content = Content;\n;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.module.less":
/*!************************************************!*\
  !*** ./src/shared/Content/content.module.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content-module__content--2ZASc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.module.less?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar dropdown_module_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.module.less */ \"./src/shared/Dropdown/dropdown.module.less\"));\nvar NOOP = function () { };\nvar Dropdown = function (_a) {\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\n    var _d = react_1.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\n    var handleOpen = function () {\n        if (isOpen === undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n    };\n    react_1.useEffect(function () {\n        setIsDropdownOpen(isOpen);\n    }, [isOpen]);\n    react_1.useEffect(function () {\n        isDropdownOpen ? onOpen() : onClose();\n    }, [isDropdownOpen]);\n    return (react_1.default.createElement(\"div\", { className: dropdown_module_less_1.default.container },\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\n        isDropdownOpen &&\n            react_1.default.createElement(\"div\", { className: dropdown_module_less_1.default.listContainer },\n                react_1.default.createElement(\"div\", { className: dropdown_module_less_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))));\n};\nexports.default = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.module.less":
/*!**************************************************!*\
  !*** ./src/shared/Dropdown/dropdown.module.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown-module__container--tdS9s\",\n\t\"listContainer\": \"dropdown-module__listContainer--2XXhk\",\n\t\"list\": \"dropdown-module__list--9e1fo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.module.less?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar genericList_module_less_1 = __importDefault(__webpack_require__(/*! ./genericList.module.less */ \"./src/shared/GenericList/genericList.module.less\"));\nvar NOOP = function (id) { };\nfunction GenericList(_a) {\n    var list = _a.list;\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? NOOP : _c, className = _a.className, id = _a.id, href = _a.href, img = _a.img;\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href },\n            img,\n            react_1.default.createElement(\"span\", { className: genericList_module_less_1.default.text }, text)));\n    })));\n}\n;\nexports.default = GenericList;\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/genericList.module.less":
/*!********************************************************!*\
  !*** ./src/shared/GenericList/genericList.module.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"text\": \"genericList-module__text--2Yc9y\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/genericList.module.less?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_module_less_1 = __importDefault(__webpack_require__(/*! ./header.module.less */ \"./src/shared/Header/header.module.less\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\nvar ThreadTittle_1 = __webpack_require__(/*! ./ThreadTittle/ThreadTittle */ \"./src/shared/Header/ThreadTittle/ThreadTittle.tsx\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_module_less_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTittle_1.ThreadTittle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar searchBlock_module_less_1 = __importDefault(__webpack_require__(/*! ./searchBlock.module.less */ \"./src/shared/Header/SearchBlock/searchBlock.module.less\"));\nfunction SearchBlock() {\n    return (react_1.default.createElement(\"div\", { className: searchBlock_module_less_1.default.searchBlock }));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchBlock.module.less":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchBlock.module.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchBlock-module__searchBlock--2XReB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchBlock.module.less?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortBlock_module_less_1 = __importDefault(__webpack_require__(/*! ./sortBlock.module.less */ \"./src/shared/Header/SortBlock/sortBlock.module.less\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortBlock_module_less_1.default.sortBlock }, \"sorting dropdown\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortBlock.module.less":
/*!***********************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortBlock.module.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortBlock-module__sortBlock--ZOwFY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortBlock.module.less?");

/***/ }),

/***/ "./src/shared/Header/ThreadTittle/ThreadTittle.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/Header/ThreadTittle/ThreadTittle.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTittle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadTittle_module_less_1 = __importDefault(__webpack_require__(/*! ./threadTittle.module.less */ \"./src/shared/Header/ThreadTittle/threadTittle.module.less\"));\nfunction ThreadTittle() {\n    return (react_1.default.createElement(\"h1\", { className: threadTittle_module_less_1.default.threadTittle }, \"Thread Tittle\"));\n}\nexports.ThreadTittle = ThreadTittle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTittle/ThreadTittle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTittle/threadTittle.module.less":
/*!*****************************************************************!*\
  !*** ./src/shared/Header/ThreadTittle/threadTittle.module.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTittle\": \"threadTittle-module__threadTittle--1MA8H\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTittle/threadTittle.module.less?");

/***/ }),

/***/ "./src/shared/Header/header.module.less":
/*!**********************************************!*\
  !*** ./src/shared/Header/header.module.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header-module__header--lVjp2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.module.less?");

/***/ }),

/***/ "./src/shared/Icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BlockIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.BlockIcon = function () {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/CommentsIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/CommentsIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.CommentsIcon = function () {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.SaveIcon = function () {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.ShareIcon = function () {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.WarningIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.WarningIcon = function () {\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/Icons/CommentsIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/Icons/WarningIcon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_module_less_1 = __importDefault(__webpack_require__(/*! ./layout.module.less */ \"./src/shared/Layout/layout.module.less\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_module_less_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/layout.module.less":
/*!**********************************************!*\
  !*** ./src/shared/Layout/layout.module.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout-module__layout--1ymQa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.module.less?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar text_module_less_1 = __importDefault(__webpack_require__(/*! ./text.module.less */ \"./src/shared/Text/text.module.less\"));\nvar Text = function (_a) {\n    var size = _a.size, mobileSize = _a.mobileSize, color = _a.color, children = _a.children;\n    return (react_1.default.createElement(\"span\", { className: text_module_less_1.default.text + \" \" + (size && text_module_less_1.default[\"text__s\" + size]) + \" \" + (mobileSize && text_module_less_1.default[\"text__m\" + mobileSize]) + \" \" + (color && text_module_less_1.default[\"text__\" + color]) + \" \" }, children));\n};\nexports.default = Text;\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/text.module.less":
/*!******************************************!*\
  !*** ./src/shared/Text/text.module.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"text\": \"text-module__text--tsEoN\",\n\t\"text__s14\": \"text-module__text__s14--1Wbx0\",\n\t\"text__m12\": \"text-module__text__m12--O-2JC\",\n\t\"text__grey66\": \"text-module__text__grey66--308-h\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.module.less?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\nfunction assoc(key, value) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\n    };\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\nexports.generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\nexports.assignId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };\nexports.generateId = function (obj) { return exports.assignId(obj); };\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

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