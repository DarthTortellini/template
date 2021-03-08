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

/***/ "./src/server/congif/index.ts":
/*!************************************!*\
  !*** ./src/server/congif/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\nvar envFound = dotenv.config();\r\nif (!envFound) {\r\n    throw new Error(\"Can't find .env!\");\r\n}\r\nexports.default = {\r\n    mysql: {\r\n        host: process.env.DB_HOST,\r\n        user: process.env.DB_USER,\r\n        password: process.env.DB_PASS,\r\n        database: process.env.DB_SCHEMA\r\n    },\r\n    port: parseInt(process.env.PORT, 10)\r\n};\r\n\n\n//# sourceURL=webpack://template/./src/server/congif/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar router = express.Router();\r\nrouter.get(\"/test\", function (req, res, next) {\r\n    try {\r\n        res.status(200).json({ msg: \"Hello World\" });\r\n    }\r\n    catch (error) {\r\n        next(error);\r\n    }\r\n});\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\r\nvar congif_1 = __webpack_require__(/*! ./congif */ \"./src/server/congif/index.ts\");\r\nvar app = express();\r\napp.use(\"/api\", routes_1.default);\r\napp.use(express.static(\"public\"));\r\napp.use(express.json());\r\napp.use(morgan(\"dev\"));\r\napp.use(function (err, req, res, next) {\r\n    res.status(500).json({ name: err.name, msg: err.message });\r\n});\r\napp.use(\"*\", function (err, req, res, next) {\r\n    try {\r\n        if (err)\r\n            next(err);\r\n        res.status(404).json({ msg: \"Requested route not found\" });\r\n    }\r\n    catch (error) {\r\n        next(error);\r\n    }\r\n});\r\napp.listen(congif_1.default.port, function () { return console.log(\"The server is listening on port \" + congif_1.default.port + \" \"); });\r\n\n\n//# sourceURL=webpack://template/./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;