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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/languageSelector.js":
/*!***************************************!*\
  !*** ./source/js/languageSelector.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mobileQuery = getComputedStyle(document.body).getPropertyValue(\"--phoneWidth\");\n\nvar isMobile = function isMobile() {\n  return window.matchMedia(mobileQuery).matches;\n};\n\nif (!isMobile()) {\n  languageSelector = document.querySelector(\".language-selector-current\");\n  moreLanguagesContainer = document.querySelector(\".language-selector__more\");\n  document.body.addEventListener(\"click\", function () {\n    if (moreLanguagesContainer && !moreLanguagesContainer.classList.contains(\"hidden\")) {\n      moreLanguagesContainer.classList.add(\"hidden\");\n    }\n  });\n  languageSelector && languageSelector.addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    moreLanguagesContainer.classList.toggle(\"hidden\");\n  });\n}\n\n//# sourceURL=webpack:///./source/js/languageSelector.js?");

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Add your script here\n\n//# sourceURL=webpack:///./source/js/main.js?");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var container = document.querySelector(\".container\");\nvar menu = document.querySelector(\".menu\");\nvar mobileMenuTrigger = document.querySelector(\".menu-trigger\");\nvar desktopMenu = document.querySelector(\".menu__inner--desktop\");\nvar desktopMenuTrigger = document.querySelector(\".menu__sub-inner-more-trigger\");\nvar menuMore = document.querySelector(\".menu__sub-inner-more\");\nvar mobileQuery = getComputedStyle(document.body).getPropertyValue(\"--phoneWidth\");\n\nvar isMobile = function isMobile() {\n  return window.matchMedia(mobileQuery).matches;\n};\n\nvar handleMenuClasses = function handleMenuClasses() {\n  mobileMenuTrigger && mobileMenuTrigger.classList.toggle(\"hidden\", !isMobile());\n  menu && menu.classList.toggle(\"hidden\", isMobile());\n  menuMore && menuMore.classList.toggle(\"hidden\", !isMobile());\n}; // Common\n\n\nmenu && menu.addEventListener(\"click\", function (e) {\n  return e.stopPropagation();\n});\nmenuMore && menuMore.addEventListener(\"click\", function (e) {\n  return e.stopPropagation();\n});\nhandleMenuClasses();\ndocument.body.addEventListener(\"click\", function () {\n  if (!isMobile() && menuMore && !menuMore.classList.contains(\"hidden\")) {\n    menuMore.classList.add(\"hidden\");\n  } else if (isMobile() && !menu.classList.contains(\"hidden\")) {\n    menu.classList.add(\"hidden\");\n  }\n});\nwindow.addEventListener(\"resize\", handleMenuClasses); // Mobile menu\n\nmobileMenuTrigger && mobileMenuTrigger.addEventListener(\"click\", function (e) {\n  e.stopPropagation();\n  menu && menu.classList.toggle(\"hidden\");\n}); // Desktop menu\n\ndesktopMenuTrigger && desktopMenuTrigger.addEventListener(\"click\", function (e) {\n  e.stopPropagation();\n  menuMore && menuMore.classList.toggle(\"hidden\");\n\n  if (menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right) {\n    menuMore.style.left = \"auto\";\n    menuMore.style.right = 0;\n  }\n});\n\n//# sourceURL=webpack:///./source/js/menu.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************!*\
  !*** multi ./source/js/main.js ./source/js/menu.js ./source/js/languageSelector.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/radek/Documents/Git/Moje/hugoBasicExample/themes/terminal/source/js/main.js */\"./source/js/main.js\");\n__webpack_require__(/*! /Users/radek/Documents/Git/Moje/hugoBasicExample/themes/terminal/source/js/menu.js */\"./source/js/menu.js\");\nmodule.exports = __webpack_require__(/*! /Users/radek/Documents/Git/Moje/hugoBasicExample/themes/terminal/source/js/languageSelector.js */\"./source/js/languageSelector.js\");\n\n\n//# sourceURL=webpack:///multi_./source/js/main.js_./source/js/menu.js_./source/js/languageSelector.js?");

/***/ })

/******/ });