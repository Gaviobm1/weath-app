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

/***/ "./src/apirequest.js":
/*!***************************!*\
  !*** ./src/apirequest.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCurrentWeather = async location => {\n  const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=e582b20ef61d4ca2837175640240303&q=${location}`, {\n    mode: 'cors'\n  });\n  return weather.json();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentWeather);\n\n//# sourceURL=webpack://project-template/./src/apirequest.js?");

/***/ }),

/***/ "./src/currentPosition.js":
/*!********************************!*\
  !*** ./src/currentPosition.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst place = pos => {\n  const crd = pos.coords;\n  return `${crd.latitude},${crd.longitude}`;\n};\nconst currentPosition = () => navigator.geolocation.getCurrentPosition(place);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentPosition);\n\n//# sourceURL=webpack://project-template/./src/currentPosition.js?");

/***/ }),

/***/ "./src/htmlelements.js":
/*!*****************************!*\
  !*** ./src/htmlelements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addSearchBox = () => {\n  const searchBox = document.createElement('input');\n  searchBox.setAttribute('placeholder', 'City...');\n  return searchBox;\n};\nconst addsearchButton = () => {\n  const searchButton = document.createElement('button');\n  searchButton.textContent = 'Search';\n  return searchButton;\n};\nconst cityName = city => {\n  const container = document.createElement('div');\n  const cityN = document.createElement('p');\n  cityN.textContent = city;\n  container.appendChild(cityN);\n  return container;\n};\nconst weatherInfoDiv = (temperature, weatherType) => {\n  const container = document.createElement('div');\n  const temp = document.createElement('p');\n  temp.textContent = temperature;\n  const weather = document.createElement('p');\n  weather.textContent = weatherType;\n  container.appendChild(temp);\n  container.appendChild(weather);\n  return container;\n};\nconst searchSet = (city, temp, weather) => {\n  const container = document.createElement('div');\n  container.appendChild(addSearchBox());\n  container.appendChild(addsearchButton());\n  container.appendChild(cityName(city));\n  container.appendChild(weatherInfoDiv(temp, weather));\n  document.body.appendChild(container);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSet);\n\n//# sourceURL=webpack://project-template/./src/htmlelements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n/* harmony import */ var _currentPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentPosition */ \"./src/currentPosition.js\");\n\n\nwindow.addEventListener('load', () => {\n  const location = (0,_currentPosition__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\n});\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apirequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apirequest */ \"./src/apirequest.js\");\n/* harmony import */ var _htmlelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlelements */ \"./src/htmlelements.js\");\n\n\nconst weatherInfo = async city => {\n  const weather = await (0,_apirequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city);\n  (0,_htmlelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weather.location.name, weather.current.temp_c, weather.current.condition.text);\n  const button = document.querySelector('button');\n  button.addEventListener('click', () => {\n    const input = document.querySelector('input');\n    weatherInfo(input.value);\n    const div = document.querySelector('div');\n    document.body.removeChild(div);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherInfo);\n\n//# sourceURL=webpack://project-template/./src/interface.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;