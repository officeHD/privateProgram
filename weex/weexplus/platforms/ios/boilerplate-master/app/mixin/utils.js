// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var storage = weex.requireModule('storage');
var Utils = {
	getThemeColor: function getThemeColor(callback) {
		storage.getItem('theme', function (event) {
			if (event.result == "success") {
				if (event.data == "theme1") {
					callback('#2e3238', event.data, "46,50,56");
				}
				if (event.data == "theme2") {
					callback('#1B82D2', event.data, "27,130,210");
				}
				if (event.data == "theme3") {
					callback('#DF6766', event.data, "223,103,102");
				}
				if (event.data == "theme4") {
					callback('#DE7243', event.data, "222,114,67");
				}
				if (event.data == "theme5") {
					callback('#329C92', event.data, "50,156,146");
				}
				if (event.data == "theme6") {
					callback('#66538B', event.data, "102,83,139");
				}
				if (event.data == "theme7") {
					callback('#A80000', event.data, "168,0,0");
				}
			} else {
				callback('#1B82D2', "theme2", "27,130,210");
			}
		});
	},
	getUrlSearch: function getUrlSearch(url, name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = url.slice(url.indexOf('?') + 1).match(reg);
		if (r != null) {
			try {
				return decodeURIComponent(r[2]);
			} catch (_e) {
				return null;
			}
		}
		return null;
	},
	_typeof: function _typeof(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	},
	isPlainObject: function isPlainObject(obj) {
		return Utils._typeof(obj) === 'object';
	},
	isString: function isString(obj) {
		return typeof obj === 'string';
	},
	isNonEmptyArray: function isNonEmptyArray() {
		var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
	},
	isObject: function isObject(item) {
		return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
	},
	isEmptyObject: function isEmptyObject(obj) {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	},

	env: {
		isTaobao: function isTaobao() {
			var appName = weex.config.env.appName;

			return (/(tb|taobao|淘宝)/i.test(appName)
			);
		},
		isTrip: function isTrip() {
			var appName = weex.config.env.appName;

			return appName === 'LX';
		},
		isBoat: function isBoat() {
			var appName = weex.config.env.appName;

			return appName === 'Boat' || appName === 'BoatPlayground';
		},
		isWeb: function isWeb() {
			var platform = weex.config.env.platform;

			return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
		},
		isIOS: function isIOS() {
			var platform = weex.config.env.platform;

			return platform.toLowerCase() === 'ios';
		},

		/**
   * 是否为 iPhone X
   * @returns {boolean}
   */
		isIPhoneX: function isIPhoneX() {
			var deviceHeight = weex.config.env.deviceHeight;

			if (Utils.env.isWeb()) {
				return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
			}
			return Utils.env.isIOS() && deviceHeight === 2436;
		},
		isAndroid: function isAndroid() {
			var platform = weex.config.env.platform;

			return platform.toLowerCase() === 'android';
		},
		isAlipay: function isAlipay() {
			var appName = weex.config.env.appName;

			return appName === 'AP';
		},
		isTmall: function isTmall() {
			var appName = weex.config.env.appName;

			return (/(tm|tmall|天猫)/i.test(appName)
			);
		},
		isAliWeex: function isAliWeex() {
			return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
		},
		supportsEB: function supportsEB() {
			var weexVersion = weex.config.env.weexVersion || '0';
			var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
			var expressionBinding = weex.requireModule('expressionBinding');
			return expressionBinding && expressionBinding.enableBinding && isHighWeex;
		},


		/**
   * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
   * @returns {boolean}
   */
		supportsEBForAndroid: function supportsEBForAndroid() {
			return Utils.env.isAndroid() && Utils.env.supportsEB();
		},


		/**
   * 判断IOS容器是否支持是否支持expressionBinding
   * @returns {boolean}
   */
		supportsEBForIos: function supportsEBForIos() {
			return Utils.env.isIOS() && Utils.env.supportsEB();
		},


		/**
   * 获取weex屏幕真实的设置高度，需要减去导航栏高度
   * @returns {Number}
   */
		getPageHeight: function getPageHeight() {
			var env = weex.config.env;

			var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
			return env.deviceHeight / env.deviceWidth * 750 - navHeight;
		}
	},

	/**
  * 版本号比较
  * @memberOf Utils
  * @param currVer {string}
  * @param promoteVer {string}
  * @returns {boolean}
  * @example
  *
  * const { Utils } = require('@ali/wx-bridge');
  * const { compareVersion } = Utils;
  * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
  */
	compareVersion: function compareVersion() {
		var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
		var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

		if (currVer === promoteVer) return true;
		var currVerArr = currVer.split('.');
		var promoteVerArr = promoteVer.split('.');
		var len = Math.max(currVerArr.length, promoteVerArr.length);
		for (var i = 0; i < len; i++) {
			var proVal = ~~promoteVerArr[i];
			var curVal = ~~currVerArr[i];
			if (proVal < curVal) {
				return true;
			} else if (proVal > curVal) {
				return false;
			}
		}
		return false;
	},

	/**
  * 分割数组
  * @param arr 被分割数组
  * @param size 分割数组的长度
  * @returns {Array}
  */
	arrayChunk: function arrayChunk() {
		var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

		var groups = [];
		if (arr && arr.length > 0) {
			groups = arr.map(function (e, i) {
				return i % size === 0 ? arr.slice(i, i + size) : null;
			}).filter(function (e) {
				return e;
			});
		}
		return groups;
	},
	truncateString: function truncateString(str, len) {
		var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		var newLength = 0;
		var newStr = '';
		var singleChar = '';
		var chineseRegex = /[^\x00-\xff]/g;
		var strLength = str.replace(chineseRegex, '**').length;
		for (var i = 0; i < strLength; i++) {
			singleChar = str.charAt(i).toString();
			if (singleChar.match(chineseRegex) !== null) {
				newLength += 2;
			} else {
				newLength++;
			}
			if (newLength > len) {
				break;
			}
			newStr += singleChar;
		}

		if (hasDot && strLength > len) {
			newStr += '...';
		}
		return newStr;
	},
	formatDate: function formatDate(date, fmt) {
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		var o = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds()
		};
		for (var k in o) {
			if (new RegExp('(' + k + ')').test(fmt)) {
				var str = o[k] + '';
				fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : this.padLeftZero(str));
			}
		}
		return fmt;
	},
	padLeftZero: function padLeftZero(str) {
		return ('00' + str).substr(str.length);
	}
};

exports.default = Utils;

/***/ })

/******/ });