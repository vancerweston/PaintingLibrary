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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paintingMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paintingMath */ \"./src/paintingMath.js\");\n\r\n\r\nlet lotLength = 1350;\r\nlet endCapLength = 18;\r\n\r\nlet straitStallLines = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].numOfStraitStallLines(lotLength);\r\n\r\nconsole.log('Strait Stall Lines:', straitStallLines);\r\n\r\nlet diagonalStallLines = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].numOfDiagonalStallLines(lotLength);\r\n\r\nconsole.log('Diagonal Stall Lines:', diagonalStallLines);\r\n\r\nlet parallelStallLines = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].numOfParallelStallLines(lotLength);\r\n\r\nconsole.log('Parallel Stall Lines:', parallelStallLines);\r\n\r\nlet straitStalls = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].numOfStraitStalls(lotLength);\r\n\r\nconsole.log('Number of strait Stalls:', straitStalls);\r\n\r\nlet diagonalStalls = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].numOfDiagonalStalls(lotLength);\r\n\r\nconsole.log('Number of Diagonal Stalls:', diagonalStalls);\r\n\r\nlet parallelStalls = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].numOfParallelStalls(lotLength);\r\n\r\nconsole.log('Number of Parallel Stalls:', parallelStalls);\r\n\r\nlet totalPaintUsedStrait = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].totalPaintUsedStrait(endCapLength, lotLength);\r\n\r\nconsole.log('Total Paint in gallons for Strait Lines:', totalPaintUsedStrait);\r\n\r\nlet totalPaintUsedDiagonal = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].totalPaintUsedDiagonal(endCapLength, lotLength);\r\n\r\nconsole.log('Total Paint in gallons for Diagonal Lines:', totalPaintUsedDiagonal);\r\n\r\nlet totalPaintUsedParallel = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].totalPaintUsedParallel(endCapLength, lotLength);\r\n\r\nconsole.log('Total Paint in gallons for Parallel Lines:', totalPaintUsedParallel);\r\n\r\nlet timeToPaint = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].timeToPaint(endCapLength, lotLength);\r\n\r\nconsole.log('Estimate of Time to Paint Lines in hours:', timeToPaint);\r\n\r\nlet crewSize = _paintingMath__WEBPACK_IMPORTED_MODULE_0__[\"paintMath\"].crewSize(endCapLength, lotLength);\r\n\r\nconsole.log('Estimate of Crew Members to send to Job:', crewSize);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWludE1hdGggfSBmcm9tICcuL3BhaW50aW5nTWF0aCc7XHJcblxyXG5sZXQgbG90TGVuZ3RoID0gMTM1MDtcclxubGV0IGVuZENhcExlbmd0aCA9IDE4O1xyXG5cclxubGV0IHN0cmFpdFN0YWxsTGluZXMgPSBwYWludE1hdGgubnVtT2ZTdHJhaXRTdGFsbExpbmVzKGxvdExlbmd0aCk7XHJcblxyXG5jb25zb2xlLmxvZygnU3RyYWl0IFN0YWxsIExpbmVzOicsIHN0cmFpdFN0YWxsTGluZXMpO1xyXG5cclxubGV0IGRpYWdvbmFsU3RhbGxMaW5lcyA9IHBhaW50TWF0aC5udW1PZkRpYWdvbmFsU3RhbGxMaW5lcyhsb3RMZW5ndGgpO1xyXG5cclxuY29uc29sZS5sb2coJ0RpYWdvbmFsIFN0YWxsIExpbmVzOicsIGRpYWdvbmFsU3RhbGxMaW5lcyk7XHJcblxyXG5sZXQgcGFyYWxsZWxTdGFsbExpbmVzID0gcGFpbnRNYXRoLm51bU9mUGFyYWxsZWxTdGFsbExpbmVzKGxvdExlbmd0aCk7XHJcblxyXG5jb25zb2xlLmxvZygnUGFyYWxsZWwgU3RhbGwgTGluZXM6JywgcGFyYWxsZWxTdGFsbExpbmVzKTtcclxuXHJcbmxldCBzdHJhaXRTdGFsbHMgPSBwYWludE1hdGgubnVtT2ZTdHJhaXRTdGFsbHMobG90TGVuZ3RoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdOdW1iZXIgb2Ygc3RyYWl0IFN0YWxsczonLCBzdHJhaXRTdGFsbHMpO1xyXG5cclxubGV0IGRpYWdvbmFsU3RhbGxzID0gcGFpbnRNYXRoLm51bU9mRGlhZ29uYWxTdGFsbHMobG90TGVuZ3RoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdOdW1iZXIgb2YgRGlhZ29uYWwgU3RhbGxzOicsIGRpYWdvbmFsU3RhbGxzKTtcclxuXHJcbmxldCBwYXJhbGxlbFN0YWxscyA9IHBhaW50TWF0aC5udW1PZlBhcmFsbGVsU3RhbGxzKGxvdExlbmd0aCk7XHJcblxyXG5jb25zb2xlLmxvZygnTnVtYmVyIG9mIFBhcmFsbGVsIFN0YWxsczonLCBwYXJhbGxlbFN0YWxscyk7XHJcblxyXG5sZXQgdG90YWxQYWludFVzZWRTdHJhaXQgPSBwYWludE1hdGgudG90YWxQYWludFVzZWRTdHJhaXQoZW5kQ2FwTGVuZ3RoLCBsb3RMZW5ndGgpO1xyXG5cclxuY29uc29sZS5sb2coJ1RvdGFsIFBhaW50IGluIGdhbGxvbnMgZm9yIFN0cmFpdCBMaW5lczonLCB0b3RhbFBhaW50VXNlZFN0cmFpdCk7XHJcblxyXG5sZXQgdG90YWxQYWludFVzZWREaWFnb25hbCA9IHBhaW50TWF0aC50b3RhbFBhaW50VXNlZERpYWdvbmFsKGVuZENhcExlbmd0aCwgbG90TGVuZ3RoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdUb3RhbCBQYWludCBpbiBnYWxsb25zIGZvciBEaWFnb25hbCBMaW5lczonLCB0b3RhbFBhaW50VXNlZERpYWdvbmFsKTtcclxuXHJcbmxldCB0b3RhbFBhaW50VXNlZFBhcmFsbGVsID0gcGFpbnRNYXRoLnRvdGFsUGFpbnRVc2VkUGFyYWxsZWwoZW5kQ2FwTGVuZ3RoLCBsb3RMZW5ndGgpO1xyXG5cclxuY29uc29sZS5sb2coJ1RvdGFsIFBhaW50IGluIGdhbGxvbnMgZm9yIFBhcmFsbGVsIExpbmVzOicsIHRvdGFsUGFpbnRVc2VkUGFyYWxsZWwpO1xyXG5cclxubGV0IHRpbWVUb1BhaW50ID0gcGFpbnRNYXRoLnRpbWVUb1BhaW50KGVuZENhcExlbmd0aCwgbG90TGVuZ3RoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdFc3RpbWF0ZSBvZiBUaW1lIHRvIFBhaW50IExpbmVzIGluIGhvdXJzOicsIHRpbWVUb1BhaW50KTtcclxuXHJcbmxldCBjcmV3U2l6ZSA9IHBhaW50TWF0aC5jcmV3U2l6ZShlbmRDYXBMZW5ndGgsIGxvdExlbmd0aCk7XHJcblxyXG5jb25zb2xlLmxvZygnRXN0aW1hdGUgb2YgQ3JldyBNZW1iZXJzIHRvIHNlbmQgdG8gSm9iOicsIGNyZXdTaXplKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/paintingMath.js":
/*!*****************************!*\
  !*** ./src/paintingMath.js ***!
  \*****************************/
/*! exports provided: paintMath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintMath\", function() { return paintMath; });\nlet paintMath = (() => {\r\n    return {\r\n        numOfStraitStallLines: (lotLength) => {\r\n            return Math.floor(lotLength / 9) - 1;\r\n        },\r\n        numOfDiagonalStallLines: (lotLength) => {\r\n            return Math.floor(lotLength / 11) - 1;\r\n        },\r\n        numOfParallelStallLines: (lotLength) => {\r\n            return Math.floor(lotLength / 25) - 1;\r\n        },\r\n        numOfDoubleStallLines: (lotLength) => {\r\n            return Math.floor(lotLength / 9) -1;\r\n        },\r\n        numOfStraitStalls: (lotLength) => {\r\n            let result = Math.floor(paintMath.numOfStraitStallLines(lotLength)) + 1;\r\n            return result;\r\n        },\r\n        numOfDiagonalStalls: (lotLength) => {\r\n            let result = Math.floor(paintMath.numOfDiagonalStallLines(lotLength)) + 1;\r\n            return result;\r\n        },\r\n        numOfParallelStalls: (lotLength) => {\r\n            let result = Math.floor(paintMath.numOfParallelStallLines(lotLength)) + 1;\r\n            return result;\r\n        },\r\n        numOfDoubleStalls: (lotLength) => {\r\n            let result = Math.floor(paintMath.numOfDoubleStallLines(lotLength)) + 1;\r\n            return result;\r\n        },\r\n        totalPaintUsedStrait: (endCapLength, lotLength) => {\r\n            let paint = 0.01\r\n            let time = endCapLength / 4;\r\n\r\n            let amountStraitLines = paintMath.numOfStraitStallLines(lotLength);\r\n            \r\n            let strait = (time * amountStraitLines) * paint;\r\n            return Number(strait.toFixed(3));\r\n        },\r\n        totalPaintUsedDiagonal:  (endCapLength, lotLength) => {\r\n            let paint = 0.01;\r\n            //to find the painted angled line c2 = a2 + b2\r\n            let lineLength = (9*9) + (endCapLength * endCapLength);\r\n            let time = Math.sqrt(lineLength) / 3;\r\n\r\n            let amountDiagLines = paintMath.numOfDiagonalStallLines(lotLength);\r\n\r\n            let diagonal = (time * amountDiagLines) * paint;\r\n            return Number(diagonal.toFixed(3));\r\n        },\r\n        totalPaintUsedParallel:  (endCapLength, lotLength) => {\r\n            let paint = 0.01;\r\n            let time = endCapLength / 4;\r\n\r\n            let amountParLines = paintMath.numOfParallelStallLines(lotLength);\r\n\r\n            let parallel = (time * amountParLines) * paint;\r\n            return Number(parallel.toFixed(3));\r\n        },\r\n        totalPaintUsedDouble: (endCapLength, lotLength) => {\r\n            let paint = 0.01;\r\n            let time = (endCapLength) /4;\r\n\r\n            let amountDoubLines = paintMath.numOfDiagonalStallLines(lotLength);\r\n            \r\n            let double = (time * amountDoubLines) * paint;\r\n            return Number(double.toFixed(3));\r\n        },\r\n        timeToPaint: (endCapLength, lotLength) => {\r\n            let time = endCapLength / 4;\r\n\r\n            let lineTotal = paintMath.numOfStraitStallLines(lotLength);\r\n\r\n            let totalTime = (time * lineTotal) / 2.75; \r\n            let timeInHours = totalTime / 120;\r\n\r\n            return Number(timeInHours.toFixed(2));\r\n        },\r\n        crewSize: (endCapLength, lotLength) => {\r\n            let jobTime = paintMath.timeToPaint(endCapLength, lotLength);\r\n\r\n            let crewMembers = (Math.ceil(jobTime / 6) + 1);\r\n\r\n            return crewMembers;\r\n        }\r\n    }\r\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFpbnRpbmdNYXRoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhaW50aW5nTWF0aC5qcz9hM2YxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgcGFpbnRNYXRoID0gKCgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbnVtT2ZTdHJhaXRTdGFsbExpbmVzOiAobG90TGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGxvdExlbmd0aCAvIDkpIC0gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG51bU9mRGlhZ29uYWxTdGFsbExpbmVzOiAobG90TGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGxvdExlbmd0aCAvIDExKSAtIDE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBudW1PZlBhcmFsbGVsU3RhbGxMaW5lczogKGxvdExlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihsb3RMZW5ndGggLyAyNSkgLSAxO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbnVtT2ZEb3VibGVTdGFsbExpbmVzOiAobG90TGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGxvdExlbmd0aCAvIDkpIC0xO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbnVtT2ZTdHJhaXRTdGFsbHM6IChsb3RMZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IE1hdGguZmxvb3IocGFpbnRNYXRoLm51bU9mU3RyYWl0U3RhbGxMaW5lcyhsb3RMZW5ndGgpKSArIDE7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBudW1PZkRpYWdvbmFsU3RhbGxzOiAobG90TGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBNYXRoLmZsb29yKHBhaW50TWF0aC5udW1PZkRpYWdvbmFsU3RhbGxMaW5lcyhsb3RMZW5ndGgpKSArIDE7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBudW1PZlBhcmFsbGVsU3RhbGxzOiAobG90TGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBNYXRoLmZsb29yKHBhaW50TWF0aC5udW1PZlBhcmFsbGVsU3RhbGxMaW5lcyhsb3RMZW5ndGgpKSArIDE7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBudW1PZkRvdWJsZVN0YWxsczogKGxvdExlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gTWF0aC5mbG9vcihwYWludE1hdGgubnVtT2ZEb3VibGVTdGFsbExpbmVzKGxvdExlbmd0aCkpICsgMTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdGFsUGFpbnRVc2VkU3RyYWl0OiAoZW5kQ2FwTGVuZ3RoLCBsb3RMZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhaW50ID0gMC4wMVxyXG4gICAgICAgICAgICBsZXQgdGltZSA9IGVuZENhcExlbmd0aCAvIDQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW1vdW50U3RyYWl0TGluZXMgPSBwYWludE1hdGgubnVtT2ZTdHJhaXRTdGFsbExpbmVzKGxvdExlbmd0aCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgc3RyYWl0ID0gKHRpbWUgKiBhbW91bnRTdHJhaXRMaW5lcykgKiBwYWludDtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzdHJhaXQudG9GaXhlZCgzKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3RhbFBhaW50VXNlZERpYWdvbmFsOiAgKGVuZENhcExlbmd0aCwgbG90TGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYWludCA9IDAuMDE7XHJcbiAgICAgICAgICAgIC8vdG8gZmluZCB0aGUgcGFpbnRlZCBhbmdsZWQgbGluZSBjMiA9IGEyICsgYjJcclxuICAgICAgICAgICAgbGV0IGxpbmVMZW5ndGggPSAoOSo5KSArIChlbmRDYXBMZW5ndGggKiBlbmRDYXBMZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IE1hdGguc3FydChsaW5lTGVuZ3RoKSAvIDM7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW1vdW50RGlhZ0xpbmVzID0gcGFpbnRNYXRoLm51bU9mRGlhZ29uYWxTdGFsbExpbmVzKGxvdExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlhZ29uYWwgPSAodGltZSAqIGFtb3VudERpYWdMaW5lcykgKiBwYWludDtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihkaWFnb25hbC50b0ZpeGVkKDMpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdGFsUGFpbnRVc2VkUGFyYWxsZWw6ICAoZW5kQ2FwTGVuZ3RoLCBsb3RMZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhaW50ID0gMC4wMTtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBlbmRDYXBMZW5ndGggLyA0O1xyXG5cclxuICAgICAgICAgICAgbGV0IGFtb3VudFBhckxpbmVzID0gcGFpbnRNYXRoLm51bU9mUGFyYWxsZWxTdGFsbExpbmVzKGxvdExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYWxsZWwgPSAodGltZSAqIGFtb3VudFBhckxpbmVzKSAqIHBhaW50O1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBhcmFsbGVsLnRvRml4ZWQoMykpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG90YWxQYWludFVzZWREb3VibGU6IChlbmRDYXBMZW5ndGgsIGxvdExlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFpbnQgPSAwLjAxO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IChlbmRDYXBMZW5ndGgpIC80O1xyXG5cclxuICAgICAgICAgICAgbGV0IGFtb3VudERvdWJMaW5lcyA9IHBhaW50TWF0aC5udW1PZkRpYWdvbmFsU3RhbGxMaW5lcyhsb3RMZW5ndGgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGRvdWJsZSA9ICh0aW1lICogYW1vdW50RG91YkxpbmVzKSAqIHBhaW50O1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGRvdWJsZS50b0ZpeGVkKDMpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVUb1BhaW50OiAoZW5kQ2FwTGVuZ3RoLCBsb3RMZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBlbmRDYXBMZW5ndGggLyA0O1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVUb3RhbCA9IHBhaW50TWF0aC5udW1PZlN0cmFpdFN0YWxsTGluZXMobG90TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b3RhbFRpbWUgPSAodGltZSAqIGxpbmVUb3RhbCkgLyAyLjc1OyBcclxuICAgICAgICAgICAgbGV0IHRpbWVJbkhvdXJzID0gdG90YWxUaW1lIC8gMTIwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih0aW1lSW5Ib3Vycy50b0ZpeGVkKDIpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZXdTaXplOiAoZW5kQ2FwTGVuZ3RoLCBsb3RMZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGpvYlRpbWUgPSBwYWludE1hdGgudGltZVRvUGFpbnQoZW5kQ2FwTGVuZ3RoLCBsb3RMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNyZXdNZW1iZXJzID0gKE1hdGguY2VpbChqb2JUaW1lIC8gNikgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjcmV3TWVtYmVycztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/paintingMath.js\n");

/***/ })

/******/ });