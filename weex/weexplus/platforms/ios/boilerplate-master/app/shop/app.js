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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
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

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "40",
    "marginBottom": "10"
  },
  "wxc-tab-page": {
    "flex": 1
  },
  "tab-title-list": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "backgroundColor": "#FFFFFF",
    "alignItems": "flex-end",
    "paddingBottom": "10",
    "position": "relative"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "tab-page-wrap": {
    "width": "750",
    "flex": 1,
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "desc-tag": {
    "position": "absolute",
    "top": "10",
    "right": "22",
    "borderRadius": "30",
    "backgroundColor": "#FF3E3E",
    "height": "30",
    "width": "30",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "dot": {
    "width": "14",
    "height": "14",
    "borderBottomRightRadius": "14",
    "borderBottomLeftRadius": "14",
    "borderTopLeftRadius": "14",
    "borderTopRightRadius": "14",
    "position": "absolute",
    "top": "13",
    "right": "43",
    "backgroundColor": "#FF3E3E"
  },
  "desc-text": {
    "fontSize": "20",
    "color": "#ffffff"
  },
  "icon-font": {
    "marginBottom": "8"
  },
  "no-margin": {
    "marginBottom": "0"
  },
  "tabItem": {
    "alignItems": "center",
    "width": "140"
  },
  "centerNav": {
    "position": "fixed",
    "left": "325",
    "bottom": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "centerIcon": {
    "width": "116",
    "height": "116",
    "textAlign": "center",
    "lineHeight": "96",
    "backgroundColor": "#C09244",
    "borderRadius": "58",
    "color": "#FFFFFF",
    "borderColor": "#FEFEFE",
    "borderWidth": "10",
    "borderStyle": "solid",
    "boxShadow": "-5px 0 5px #FFFFFF"
  },
  "active": {
    "color": "#BD8D38"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(16);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
exports.default = {
	props: {
		tabTitles: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		tabStyles: {
			type: Object,
			default: function _default() {
				return {
					bgColor: '#FFFFFF',
					height: 120,
					width: 140
				};
			}
		},
		titleType: {
			type: String,
			default: 'icon'
		},
		titleUseSlot: {
			type: Boolean,
			default: false
		},
		isTabView: {
			type: Boolean,
			default: true
		},
		duration: {
			type: [Number, String],
			default: 300
		},
		timingFunction: {
			type: String,
			default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
		},
		wrapBgColor: {
			type: String,
			default: '#f2f2f2'
		}
	},
	data: function data() {
		return {
			currentPage: 0,
			translateX: 0
		};
	},
	created: function created() {
		var titleType = this.titleType,
		    tabStyles = this.tabStyles;


		this.isIPhoneX = _utils2.default.env.isIPhoneX();
		this.isIphone = _utils2.default.env.isIOS();
		if (this.isIphone == true) {}
	},

	methods: {
		next: function next() {
			var page = this.currentPage;
			if (page < this.tabTitles.length - 1) {
				page++;
			}
			this.setPage(page);
		},
		prev: function prev() {
			var page = this.currentPage;
			if (page > 0) {
				page--;
			}
			this.setPage(page);
		},
		setPage: function setPage(page) {
			var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			if (!this.isTabView) {
				this.jumpOut(url);
				return;
			}
			var previousPage = this.currentPage;
			var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
			var width = this.tabStyles.width;

			var appearNum = parseInt(750 / width);
			var tabsNum = this.tabTitles.length;
			var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;
			if (appearNum < tabsNum) {
				(previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
					offset: offset,
					animated: animated
				});
				page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
					offset: -width * page,
					animated: animated
				});
			}
			this.currentPage = page;
			this._animateTransformX(page, animated);
		},
		jumpOut: function jumpOut(url) {
			url && _utils2.default.goToH5Page(url);
		},
		_animateTransformX: function _animateTransformX(page, animated) {
			var duration = this.duration,
			    timingFunction = this.timingFunction;

			var computedDur = animated ? duration : 0.00001;
			var containerEl = this.$refs['tab-container'];
			var dist = page * 750;
			containerEl.s;
			animation.transition(containerEl, {
				styles: {
					transform: 'translateX(' + -dist + 'px)'
				},
				duration: 0,
				timingFunction: timingFunction,
				delay: 0
			}, function () {});
		}
	}
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"]
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)]), _c('div', {
    staticClass: ["tab-title-list"],
    style: {
      height: (_vm.tabStyles.height + (_vm.isIPhoneX ? 78 : 0)) + 'px',
      paddingBottom: _vm.isIPhoneX ? '88px' : '10px'
    }
  }, [_c('div', {
    ref: "wxc-tab-title-0",
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.setPage(0)
      }
    }
  }, [_c('text', {
    class: [_vm.currentPage == 0 ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.currentPage == 0 ? 'active' : '']
  }, [_vm._v("Home")])]), _c('div', {
    ref: "wxc-tab-title-1",
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.setPage(1)
      }
    }
  }, [_c('text', {
    class: [_vm.currentPage == 1 ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.currentPage == 1 ? 'active' : '']
  }, [_vm._v("Categories")])]), _c('div', {
    staticClass: ["tabItem"]
  }), _c('div', {
    ref: "wxc-tab-title-2",
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.setPage(2)
      }
    }
  }, [_c('text', {
    class: [_vm.currentPage == 2 ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.currentPage == 2 ? 'active' : '']
  }, [_vm._v("Cart")])]), _c('div', {
    ref: "wxc-tab-title-3",
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.setPage(3)
      }
    }
  }, [_c('text', {
    class: [_vm.currentPage == 3 ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.currentPage == 3 ? 'active' : '']
  }, [_vm._v("My GIV")])]), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["centerNav"]
  }, [_c('text', {
    staticClass: ["iconfont", "centerIcon"]
  }, [_vm._v("")]), _c('text', [_vm._v("Post")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "layout": {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0"
  },
  "goods-tis": {
    "width": 100,
    "height": "60",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "32"
  },
  "goods-menu": {
    "position": "absolute",
    "width": 30,
    "height": 100,
    "right": 0,
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#FF0000",
    "color": "#ffffff",
    "zIndex": 2
  },
  "goods-icon": {
    "color": "#ffffff"
  },
  "goodsopen": {
    "animation": "showMenu 0.25s linear both"
  },
  "goodsclose": {
    "animation": "closeMenu 0.15s linear both"
  },
  "goods-list": {
    "backgroundColor": "#ffffff",
    "width": "750",
    "flex": 1,
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0
  },
  "goods-row": {
    "width": "710",
    "display": "flex",
    "flexDirection": "row",
    "paddingBottom": "20",
    "paddingTop": "20",
    "marginLeft": "20",
    "borderBottomColor": "#e7e7e7",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "checkbox-box": {
    "width": "40",
    "height": "40"
  },
  "selectIcon": {
    "fontSize": "32",
    "color": "#b98732"
  },
  "noselect": {
    "fontSize": "32"
  },
  "goods-info": {
    "flex": 1,
    "flexDirection": "row"
  },
  "info": {
    "flex": 1
  },
  "imgbox": {
    "width": "120"
  },
  "infospec": {
    "height": "60",
    "lineHeight": "60"
  },
  "price-number": {
    "height": "80",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "price": {
    "color": "#f06c7a"
  },
  "gnumber": {
    "flexDirection": "row"
  },
  "numaction": {
    "width": "44",
    "height": "44",
    "backgroundColor": "#e7e7e7",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "numinputbox": {
    "width": "100",
    "height": "44",
    "backgroundColor": "#fdfeff"
  },
  "numinput": {
    "width": "100",
    "height": "44",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#000000"
  },
  "numIcon": {
    "color": "#ffffff"
  },
  "delBtn": {
    "border": "solid 1px #f06c7a",
    "color": "#f06c7a",
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30",
    "height": "50",
    "borderRadius": "30",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "money": {
    "fontWeight": "600",
    "marginRight": "20"
  },
  "sum": {
    "width": 50,
    "fontSize": "28",
    "marginRight": "10",
    "display": "flex",
    "justifyContent": "flex-end",
    "flexDirection": "row",
    "flex": 1,
    "alignItems": "center"
  },
  "footer": {
    "width": 92,
    "paddingTop": 0,
    "paddingRight": 4,
    "paddingBottom": 0,
    "paddingLeft": 4,
    "backgroundColor": "#fbfbfb",
    "height": "100",
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "28",
    "position": "fixed",
    "bottom": "0",
    "zIndex": 5
  },
  "settlement": {
    "height": "100",
    "display": "flex",
    "justifyContent": "flex-end",
    "alignItems": "center",
    "flex": 1,
    "flexDirection": "row"
  },
  "cartfooter": {
    "height": "100",
    "width": "750",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "footerLeft": {
    "height": "100",
    "paddingLeft": "20",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "selecttext": {
    "fontSize": "30",
    "marginLeft": "20"
  },
  "cardelBtn": {
    "color": "#f06c7a",
    "marginLeft": "20"
  },
  "cartbtn": {
    "width": "200",
    "height": "100",
    "textAlign": "center",
    "lineHeight": "100",
    "color": "#ffffff",
    "backgroundColor": "#9A9A9A"
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule("navigator");

exports.default = {
  data: function data() {
    return {
      sumPrice: "0.00",
      headerPosition: "fixed",
      headerTop: null,
      statusTop: null,
      selectedList: [],
      isAllselected: false,
      goodsList: [{
        id: 1,
        img: "../../static/img/goods/p1.jpg",
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        spec: "规格:S码",
        price: 127.5,
        number: 1,
        selected: false
      }, {
        id: 2,
        img: "../../static/img/goods/p2.jpg",
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        spec: "规格:S码",
        price: 127.5,
        number: 1,
        selected: false
      }, {
        id: 3,
        img: "../../static/img/goods/p3.jpg",
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        spec: "规格:S码",
        price: 127.5,
        number: 1,
        selected: false
      }, {
        id: 4,
        img: "../../static/img/goods/p4.jpg",
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        spec: "规格:S码",
        price: 127.5,
        number: 1,
        selected: false
      }, {
        id: 5,
        img: "../../static/img/goods/p5.jpg",
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        spec: "规格:S码",
        price: 127.5,
        number: 1,
        selected: false
      }],
      //控制滑动效果
      theIndex: null,
      oldIndex: null,
      isStop: false
    };
  },
  onPageScroll: function onPageScroll(e) {
    //兼容iOS端下拉时顶部漂移
    this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
    this.headerTop = e.scrollTop >= 0 ? null : 0;
    this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + "px";
  },

  //下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
  onPullDownRefresh: function onPullDownRefresh() {
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onLoad: function onLoad() {},

  methods: {
    //加入商品 参数 goods:商品数据
    joinGoods: function joinGoods(goods) {
      /*
       * 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
       * 在实际应用上，前端并不会直接插入记录到goodsList这一个动作，一般是更新列表和本地列表缓存。
       * 一般商城购物车的增删改动作是由后端来完成的,
       * 后端记录后返回前端更新前端缓存
       */
      var len = this.goodsList.length;
      var isFind = false; //是否找到ID一样的商品
      for (var _i = 0; _i < len; _i++) {
        var row = this.goodsList[_i];
        if (row.id == goods.id) {
          //找到商品一样的商品
          this.goodsList[_i].number++; //数量自增
          isFind = true; //找到一样的商品
          break; //跳出循环
        }
      }
      if (!isFind) {
        //没有找到一样的商品，新增一行到购物车商品列表头部
        this.goodsList[i].unshift(goods);
      }
    },


    //控制左滑删除效果-end

    //商品跳转
    toGoods: function toGoods(e) {
      uni.showToast({ title: "商品" + e.id, icon: "none" });
      uni.navigateTo({
        url: "../goods/goods"
      });
    },

    //跳转确认订单页面
    toConfirmation: function toConfirmation() {
      var tmpList = [];
      var len = this.goodsList.length;
      for (var _i2 = 0; _i2 < len; _i2++) {
        if (this.goodsList[_i2].selected) {
          tmpList.push(this.goodsList[_i2]);
        }
      }
      if (tmpList.length < 1) {
        uni.showToast({
          title: "请选择商品结算",
          icon: "none"
        });
        return;
      }
      uni.setStorage({
        key: "buylist",
        data: tmpList,
        success: function success() {
          uni.navigateTo({
            url: "../order/confirmation"
          });
        }
      });
    },

    //删除商品
    deleteGoods: function deleteGoods(id) {
      var len = this.goodsList.length;
      for (var _i3 = 0; _i3 < len; _i3++) {
        if (id == this.goodsList[_i3].id) {
          this.goodsList.splice(_i3, 1);
          break;
        }
      }
      this.selectedList.splice(this.selectedList.indexOf(id), 1);
      this.sum();
      this.oldIndex = null;
      this.theIndex = null;
    },

    // 删除商品s
    deleteList: function deleteList() {
      var len = this.selectedList.length;
      while (this.selectedList.length > 0) {
        this.deleteGoods(this.selectedList[0]);
      }
      this.selectedList = [];
      this.isAllselected = this.selectedList.length == this.goodsList.length && this.goodsList.length > 0;
      this.sum();
    },

    // 选中商品
    selected: function selected(index) {
      this.goodsList[index].selected = this.goodsList[index].selected ? false : true;
      var i = this.selectedList.indexOf(this.goodsList[index].id);
      i > -1 ? this.selectedList.splice(i, 1) : this.selectedList.push(this.goodsList[index].id);
      this.isAllselected = this.selectedList.length == this.goodsList.length;
      this.sum();
    },

    //全选
    allSelect: function allSelect() {
      var len = this.goodsList.length;
      var arr = [];
      for (var _i4 = 0; _i4 < len; _i4++) {
        this.goodsList[_i4].selected = this.isAllselected ? false : true;
        arr.push(this.goodsList[_i4].id);
      }
      this.selectedList = this.isAllselected ? [] : arr;
      this.isAllselected = this.isAllselected || this.goodsList.length == 0 ? false : true;
      this.sum();
    },

    // 减少数量
    sub: function sub(index) {
      if (this.goodsList[index].number <= 1) {
        return;
      }
      this.goodsList[index].number--;
      this.sum();
    },

    // 增加数量
    add: function add(index) {
      this.goodsList[index].number++;
      this.sum();
    },

    // 合计
    sum: function sum(e, index) {
      this.sumPrice = 0;
      var len = this.goodsList.length;
      for (var _i5 = 0; _i5 < len; _i5++) {
        if (this.goodsList[_i5].selected) {
          if (e && _i5 == index) {
            this.sumPrice = this.sumPrice + e.detail.value * this.goodsList[_i5].price;
          } else {
            this.sumPrice = this.sumPrice + this.goodsList[_i5].number * this.goodsList[_i5].price;
          }
        }
      }
      this.sumPrice = this.sumPrice.toFixed(2);
    },
    discard: function discard() {
      //丢弃
    }
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"]
  }, [_c('head', {
    attrs: {
      "back": false,
      "bgcolor": "#303030",
      "title": "Cart"
    }
  }), _c('scroller', {
    staticClass: ["goods-list"]
  }, [(_vm.goodsList.length == 0) ? _c('div', {
    staticClass: ["goods-tis"]
  }, [_vm._v("购物车是空的哦~")]) : _vm._e(), _vm._l((_vm.goodsList), function(row, index) {
    return _c('div', {
      key: index,
      staticClass: ["goods-row"]
    }, [_c('div', {
      staticClass: ["checkbox-box"],
      on: {
        "click": function($event) {
          _vm.selected(index)
        }
      }
    }, [(row.selected) ? _c('text', {
      staticClass: ["iconfont", "selectIcon"]
    }, [_vm._v("")]) : _c('text', {
      staticClass: ["iconfont", "noselect"]
    }, [_vm._v("")])]), _c('div', {
      staticClass: ["goods-info"],
      on: {
        "tap": function($event) {
          _vm.toGoods(row)
        }
      }
    }, [_c('div', {
      staticClass: ["imgbox"]
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": row.img
      }
    })]), _c('div', {
      staticClass: ["info"]
    }, [_c('div', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(row.name))]), _c('text', {
      staticClass: ["infospec"]
    }, [_vm._v(_vm._s(row.spec))]), _c('div', {
      staticClass: ["price-number"]
    }, [_c('text', {
      staticClass: ["price"]
    }, [_vm._v("￥" + _vm._s(row.price))]), _c('div', {
      staticClass: ["gnumber"]
    }, [_c('div', {
      staticClass: ["numaction"],
      on: {
        "click": function($event) {
          _vm.sub(index)
        }
      }
    }, [_c('text', {
      staticClass: ["iconfont", "numIcon"]
    }, [_vm._v("")])]), _c('div', {
      staticClass: ["numinputbox"],
      on: {
        "click": _vm.discard
      }
    }, [_c('input', {
      staticClass: ["numinput"],
      attrs: {
        "type": "number",
        "value": (row.number)
      },
      on: {
        "input": [function($event) {
          _vm.$set(row, "number", $event.target.attr.value)
        }, function($event) {
          _vm.sum($event, index)
        }]
      }
    })]), _c('div', {
      staticClass: ["numaction"],
      on: {
        "click": function($event) {
          _vm.add(index)
        }
      }
    }, [_c('text', {
      staticClass: ["iconfont", "numIcon"]
    }, [_vm._v("")])])])])])])])
  })], 2), _c('div', {
    staticClass: ["cartfooter"]
  }, [_c('div', {
    staticClass: ["footerLeft"],
    on: {
      "click": _vm.allSelect
    }
  }, [_c('div', {
    staticClass: ["checkbox-box"]
  }, [(_vm.isAllselected) ? _c('text', {
    staticClass: ["iconfont", "selectIcon"]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["iconfont", "noselect"]
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["selecttext"]
  }, [_vm._v("Select all")])]), (_vm.selectedList.length > 0) ? _c('text', {
    staticClass: ["cardelBtn"],
    on: {
      "tap": _vm.deleteList
    }
  }, [_vm._v("删除")]) : _vm._e(), _c('div', {
    staticClass: ["settlement"]
  }, [_c('div', {
    staticClass: ["sum"]
  }, [_vm._v("\r\n        合计:\r\n        "), _c('text', {
    staticClass: ["money"]
  }, [_vm._v("￥" + _vm._s(_vm.sumPrice))])]), _c('text', {
    staticClass: ["cartbtn"],
    on: {
      "tap": _vm.toConfirmation
    }
  }, [_vm._v("Pay")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "leftIcon": {
    "color": "#ffffff",
    "fontSize": "40"
  },
  "layout": {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0"
  },
  "scroller": {
    "flex": 1,
    "backgroundColor": "#f06c7a"
  },
  "header": {
    "width": "750",
    "height": "100",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "row",
    "backgroundColor": "#fafafa",
    "justifyContent": "center"
  },
  "input-box": {
    "width": "600",
    "height": "60",
    "backgroundColor": "#f5f5f5",
    "borderRadius": "30",
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row"
  },
  "input": {
    "paddingLeft": "28",
    "height": "28",
    "fontSize": "28"
  },
  "iconSearch": {
    "marginRight": "15",
    "fontSize": "30"
  },
  "category-list": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "display": "flex",
    "flex": 1,
    "flexDirection": "row"
  },
  "scrollerleft": {
    "flex": 2,
    "backgroundColor": "#f2f2f2",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "leftrow": {
    "widows": "213",
    "height": "90",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#f2f2f2"
  },
  "leftrowon": {
    "height": "90",
    "backgroundColor": "#ffffff",
    "borderLeftWidth": "4",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#ba8833"
  },
  "lefttext": {
    "flex": 1,
    "fontSize": "28",
    "display": "flex",
    "justifyContent": "center",
    "color": "#3c3c3c",
    "alignItems": "center"
  },
  "scrollerright": {
    "flex": 5,
    "backgroundColor": "#f2f2f2"
  },
  "categoryList": {
    "width": "537",
    "backgroundColor": "#f2f2f2"
  },
  "catelist": {
    "width": "537",
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "marginBottom": "20",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexWrap": "wrap"
  },
  "catetext": {
    "fontSize": "30",
    "marginBottom": "15"
  },
  "listBox": {
    "width": "537",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "flexWrap": "wrap"
  },
  "listitem": {
    "width": "170",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "marginBottom": "15"
  },
  "itemImg": {
    "width": "120",
    "height": "140",
    "backgroundColor": "#f2f2f2",
    "marginBottom": "10"
  },
  "itemName": {
    "width": "170",
    "textAlign": "center"
  },
  "catebanner": {
    "borderRadius": "10"
  },
  "block": {
    "position": "absolute",
    "width": "10",
    "left": 0,
    "height": 80,
    "top": 10,
    "backgroundColor": "#f06c7a"
  },
  "text": {
    "width": 100,
    "position": "relative",
    "fontSize": "26",
    "display": "flex",
    "justifyContent": "center",
    "color": "#2d2d2d",
    "fontWeight": "600",
    "marginTop": "5"
  },
  "row": {
    "width": "200",
    "height": "90",
    "display": "flex",
    "alignItems": "center"
  },
  "banner": {
    "width": 100,
    "height": 24.262,
    "borderRadius": "10",
    "overflow": "hidden",
    "boxShadow": "0px 5px 20px rgba(0, 0, 0, 0.3)"
  },
  "right": {
    "width": 76,
    "left": 24
  },
  "category": {
    "width": "550"
  },
  "list": {
    "marginTop": "40",
    "width": 100,
    "display": "flex",
    "flexWrap": "wrap"
  },
  "box": {
    "marginBottom": "30",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexWrap": "wrap"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule("navigator");

exports.default = {
  data: function data() {
    return {
      showCategoryIndex: 0,
      headerPosition: "fixed",
      city: "北京",
      //分类列表
      categoryList: [{
        id: 1,
        title: "Women's Wear",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 2,
        title: "Beauty makeup",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 3,
        title: "wears",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 4,
        title: "Digital",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }, {
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 5,
        title: "shoes",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 6,
        title: "trousers",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 7,
        title: "Children's",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 8,
        title: "Toys",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 9,
        title: "furniture",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 10,
        title: "Bag",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 11,
        title: "Wash and care",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }, {
        id: 12,
        title: "Stationery",
        banner: "../../static/img/category/banner.jpg",
        list: [{
          title: "Best Sellers",
          list: [{ name: "电视", img: "2.jpg" }, { name: "空调", img: "3.jpg" }, { name: "洗衣机", img: "4.jpg" }, { name: "风扇", img: "5.jpg" }, { name: "燃气灶", img: "6.jpg" }, { name: "热水器", img: "7.jpg" }]
        }]
      }]
    };
  },
  onPageScroll: function onPageScroll(e) {
    //兼容iOS端下拉时顶部漂移
    if (e.scrollTop >= 0) {
      this.headerPosition = "fixed";
    } else {
      this.headerPosition = "absolute";
    }
  },
  onLoad: function onLoad() {},

  methods: {
    //消息列表
    toMsg: function toMsg() {
      uni.navigateTo({
        url: "../msg/msg"
      });
    },

    //分类切换显示
    showCategory: function showCategory(index) {
      this.showCategoryIndex = index;
    },
    toCategory: function toCategory(e) {
      //uni.showToast({title: e.name,icon:"none"});
      uni.navigateTo({
        url: "../goods/goods-list?cid=" + e.id + "&name=" + e.name
      });
    },

    //搜索跳转
    toSearch: function toSearch() {
      uni.showToast({ title: "建议跳转到新页面做搜索功能" });
    }
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"]
  }, [_c('head', {
    attrs: {
      "back": false,
      "bgcolor": "#303030",
      "title": "Categories"
    }
  }), _c('view', {
    staticClass: ["header"]
  }, [_c('view', {
    staticClass: ["input-box"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "默认关键字",
      "placeholderStyle": "color:#c0c0c0;"
    },
    on: {
      "tap": function($event) {
        _vm.toSearch()
      }
    }
  }), _c('text', {
    staticClass: ["iconfont", "iconSearch"]
  }, [_vm._v("")])])]), _c('view', {
    staticClass: ["category-list"]
  }, [_c('scroller', {
    staticClass: ["scrollerleft"]
  }, _vm._l((_vm.categoryList), function(category, index) {
    return _c('view', {
      key: category.id,
      staticClass: ["leftrow"],
      class: [index == _vm.showCategoryIndex ? 'leftrowon' : ''],
      on: {
        "click": function($event) {
          _vm.showCategory(index)
        }
      }
    }, [_c('view', {
      staticClass: ["lefttext"]
    }, [_c('text', [_vm._v(_vm._s(category.title))])])])
  })), _c('scroller', {
    staticClass: ["scrollerright"]
  }, _vm._l((_vm.categoryList), function(category, index) {
    return _c('block', {
      key: category.id
    }, [(index == _vm.showCategoryIndex) ? _c('div', {
      staticClass: ["categoryList"]
    }, _vm._l((category.list), function(box, i) {
      return _c('div', {
        key: i,
        staticClass: ["catelist"],
        on: {
          "tap": function($event) {
            _vm.toCategory(box)
          }
        }
      }, [_c('text', {
        staticClass: ["catetext"]
      }, [_vm._v(_vm._s(box.title))]), _c('div', {
        staticClass: ["listBox"]
      }, _vm._l((box.list), function(item, index) {
        return _c('div', {
          key: index,
          staticClass: ["listitem"]
        }, [_c('image', {
          staticClass: ["itemImg"],
          attrs: {
            "src": item.img
          }
        }), _c('text', {
          staticClass: ["itemName"]
        }, [_vm._v(_vm._s(item.name))])])
      }))])
    })) : _vm._e()])
  }))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "layout": {
    "backgroundColor": "#ffffff",
    "flex": 1
  },
  "scroller": {
    "flex": 1,
    "backgroundColor": "#f2f2f2"
  },
  "header": {
    "height": "310",
    "paddingTop": "45",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "marginTop": "-310"
  },
  "inputbox": {
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "width": "680",
    "borderRadius": "70",
    "height": "70",
    "paddingTop": 0,
    "paddingRight": "35",
    "paddingBottom": 0,
    "paddingLeft": "35"
  },
  "searchIcon": {
    "color": "#666666",
    "marginRight": "10",
    "fontSize": "30"
  },
  "tips": {
    "color": "#666666"
  },
  "leftIcon": {
    "color": "#ffffff",
    "fontSize": "40"
  },
  "img": {
    "width": "200",
    "height": "200",
    "marginTop": "-100"
  },
  "text": {
    "color": "#000000",
    "marginTop": "30",
    "fontSize": "70",
    "fontWeight": "bold",
    "marginBottom": "50"
  },
  "image": {
    "width": "750",
    "height": "310"
  },
  "slider": {
    "marginTop": 0,
    "marginLeft": 0,
    "width": "750",
    "height": "310"
  },
  "frame": {
    "width": "750",
    "height": "310",
    "position": "relative"
  },
  "tabSection": {
    "width": "690",
    "height": "350",
    "backgroundColor": "#ffffff",
    "borderRadius": "10",
    "marginLeft": "30",
    "marginTop": "40",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": "30"
  },
  "tabItem": {
    "width": "172.5",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "10",
    "marginBottom": "10"
  },
  "tabImg": {
    "width": "90",
    "height": "90"
  },
  "subSection": {
    "height": "244",
    "width": "690",
    "marginLeft": "30",
    "marginTop": "40",
    "backgroundColor": "#ffffff",
    "borderRadius": "10"
  },
  "recommend": {
    "width": "690",
    "marginLeft": "30",
    "marginTop": "40"
  },
  "retitle": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "fontSize": "30"
  },
  "fz30": {
    "fontSize": "30"
  },
  "recontent": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "paddingBottom": "30"
  },
  "reitem": {
    "height": "600",
    "marginTop": "10",
    "marginBottom": "10",
    "backgroundColor": "#ffffff",
    "borderRadius": "10",
    "justifyContent": "space-between"
  },
  "goodsImg": {
    "width": "336",
    "height": "336"
  },
  "contentBox": {
    "width": "336",
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20"
  },
  "goodsTitle": {
    "fontSize": "28",
    "color": "#000000",
    "textOverflow": "ellipsis",
    "lines": 2,
    "wordWrap": "break-word"
  },
  "priceInfo": {
    "marginTop": "20",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "leftInfo": {
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "symbol": {
    "color": "#FF0000",
    "marginBottom": "5"
  },
  "money": {
    "color": "#FF0000",
    "fontSize": "32",
    "fontWeight": "bold",
    "marginRight": "5"
  },
  "reduce": {
    "color": "#FF0000",
    "marginRight": "5"
  },
  "shopType": {
    "color": "#FF0000"
  },
  "shopIcon": {
    "fontSize": "32",
    "marginLeft": "10"
  },
  "user": {
    "flexDirection": "row",
    "marginTop": "15"
  },
  "avator": {
    "width": "40",
    "height": "40",
    "borderRadius": "40",
    "marginTop": "15"
  },
  "userInfo": {
    "flex": 1,
    "paddingLeft": "15"
  },
  "userName": {
    "fontSize": "32",
    "color": "#333333"
  },
  "c666": {
    "color": "#666666",
    "marginTop": "5"
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule("navigator");

exports.default = {
  data: function data() {
    return {
      imageList: [{
        src: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI5NDk2fQ"
      }, {
        src: "https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"
      }, {
        src: "https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"
      }],
      tabSection: [{
        img: "root:img/nav1.png",
        title: "phone"
      }, {
        img: "root:img/nav2.png",
        title: "Electronics"
      }, {
        img: "root:img/nav3.png",
        title: "books"
      }, {
        img: "root:img/nav4.png",
        title: "appliances"
      }, {
        img: "root:img/nav5.png",
        title: "clothes"
      }, {
        img: "root:img/nav6.png",
        title: "cosmetics"
      }, {
        img: "root:img/nav7.png",
        title: "furnture"
      }, {
        img: "root:img/nav8.png",
        title: "baby"
      }]
    };
  },

  props: {},
  methods: {
    onLoad: function onLoad(p) {},
    gonext: function gonext(url) {
      //this.push('test.js',{name:"ssss"})
      this.log("jdksdjsk", "error");
      navigator.push(url);
    },
    searchClick: function searchClick() {
      this.toast("搜索跳转");
    },
    letfClick: function letfClick() {
      this.toast("左边按钮跳转");
    },
    rightClick: function rightClick() {
      this.toast("右边边按钮跳转");
    }
  },
  created: function created() {}
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"]
  }, [_c('head', {
    attrs: {
      "back": false,
      "bgcolor": "#303030"
    },
    on: {
      "letfClick": _vm.letfClick,
      "rightClick": _vm.rightClick
    }
  }, [_c('text', {
    staticClass: ["leftIcon", "iconfont"],
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_vm._v("")]), _c('text', {
    staticClass: ["leftIcon", "iconfont"],
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_vm._v("")])]), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "false"
    }
  }, _vm._l((_vm.imageList), function(img, index) {
    return _c('div', {
      key: index,
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  })), _c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["inputbox"],
    on: {
      "click": _vm.searchClick
    }
  }, [_c('text', {
    staticClass: ["searchIcon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["tips"]
  }, [_vm._v("noteBook")])])]), _c('div', {
    staticClass: ["tabSection"]
  }, _vm._l((_vm.tabSection), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["tabItem"]
    }, [_c('image', {
      staticClass: ["tabImg"],
      attrs: {
        "src": item.img
      }
    }), _c('text', {
      staticClass: ["tips"]
    }, [_vm._v(_vm._s(item.title))])])
  })), _vm._m(0), _c('div', {
    staticClass: ["recommend"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["recontent"]
  }, _vm._l((10), function(item) {
    return _c('div', {
      key: item,
      staticClass: ["reitem"]
    }, [_c('image', {
      staticClass: ["goodsImg"],
      attrs: {
        "src": "root:img/goods.png"
      }
    }), _vm._m(2, true)])
  }))])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["subSection"]
  }, [_c('div', {
    staticClass: ["leftSub"]
  }), _c('div', {
    staticClass: ["rightSub"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["retitle"]
  }, [_c('text', {
    staticClass: ["fz30"]
  }, [_vm._v("recommend")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: ["contentBox"]
  }, [_c('text', {
    staticClass: ["goodsTitle"]
  }, [_vm._v("Bao Bao Women's New Style Of Small")]), _c('view', {
    staticClass: ["priceInfo"]
  }, [_c('view', {
    staticClass: ["leftInfo"]
  }, [_c('text', {
    staticClass: ["symbol"]
  }, [_vm._v("￥")]), _c('text', {
    staticClass: ["money"]
  }, [_vm._v("52.3")]), _c('text', {
    staticClass: ["reduce"]
  }, [_vm._v("80%")]), _c('text', {
    staticClass: ["shopType"]
  }, [_vm._v("NEW")])]), _c('view', {
    staticClass: ["leftInfo"]
  }, [_c('text', {
    staticClass: ["iconfont", "shopIcon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["iconfont", "shopIcon"]
  }, [_vm._v("")])])]), _c('view', {
    staticClass: ["user"]
  }, [_c('image', {
    staticClass: ["avator"],
    attrs: {
      "src": "root:img/user.jpg"
    }
  }), _c('view', {
    staticClass: ["userInfo"]
  }, [_c('text', {
    staticClass: ["userName"]
  }, [_vm._v("LI YAN")]), _c('text', {
    staticClass: ["c666"]
  }, [_vm._v("Heifei High-Tech Zone ")]), _c('text', {
    staticClass: ["c666"]
  }, [_vm._v("18 Minutes ago ")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "layout": {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0",
    "backgroundColor": "#f2f2f2"
  },
  "scroller": {
    "flex": 1,
    "backgroundColor": "#f2f2f2"
  },
  "userhead": {
    "width": "750",
    "paddingTop": "20",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "backgroundColor": "#ffffff",
    "justifyContent": "center"
  },
  "userTop": {
    "borderBottomColor": "#f2f2f2",
    "borderBottomWidth": "2",
    "borderBottomStyle": "dashed",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": 0
  },
  "userImg": {
    "width": "100",
    "height": "100"
  },
  "userInfo": {
    "flex": 1
  },
  "username": {
    "fontSize": "32",
    "fontWeight": "bold",
    "marginBottom": "10"
  },
  "userPhone": {
    "fontSize": "28"
  },
  "righticon": {
    "fontSize": "40"
  },
  "userSection": {
    "flexDirection": "row",
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": 0
  },
  "sectionItem": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "itemNum": {
    "marginBottom": "10",
    "color": "#333333"
  },
  "itemTitle": {
    "color": "#666666"
  },
  "refresh": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator": {
    "marginTop": "30",
    "marginBottom": "20",
    "height": "70",
    "width": "70",
    "color": "#ce2020"
  },
  "panel": {
    "backgroundColor": "#ffffff",
    "paddingLeft": "15",
    "paddingRight": "30",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9",
    "backgroundColor:active": "#eeeeee"
  },
  "panel-content": {
    "flexDirection": "row",
    "marginLeft": "20",
    "paddingTop": "25",
    "paddingBottom": "25"
  },
  "content-img": {
    "width": "140",
    "height": "140",
    "borderRadius": "10"
  },
  "content-div": {
    "flex": 1,
    "paddingLeft": "30"
  },
  "content-title": {
    "marginTop": "25",
    "color": "#333333",
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "35"
  },
  "ios-top": {
    "marginTop": "20"
  },
  "content-text": {
    "color": "#888888",
    "textOverflow": "ellipsis",
    "lines": 1,
    "marginTop": "18",
    "fontSize": "28"
  },
  "list-icon": {
    "height": "65",
    "width": "65",
    "borderRadius": "10",
    "marginRight": "20",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "list-margin": {
    "marginTop": "30"
  },
  "cell-icon": {
    "color": "#ffffff"
  },
  "panel-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "84",
    "height": "150"
  },
  "panel-right-icon": {
    "fontSize": "50",
    "color": "#c1c1c1"
  },
  "panel-right-icon2": {
    "fontSize": "50",
    "color": "#c1c1c1"
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule("navigator");

exports.default = {
  components: {
    "x-cell": __webpack_require__(83)
  },
  data: function data() {
    return {
      refreshing: false,
      user: {
        name: "JAck",
        phone: "1321526262"
      }
    };
  },

  props: {},
  methods: {
    onrefresh: function onrefresh(event) {
      var s = this;
      s.refreshing = true;
      setTimeout(function () {
        s.refreshing = false;
      }, 1000);
    },
    gonext: function gonext(url) {
      //this.push('test.js',{name:"ssss"})
      this.log("jdksdjsk", "error");
      navigator.push(url);
    }
  },
  created: function created() {}
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"]
  }, [_c('head', {
    attrs: {
      "back": false,
      "bgcolor": "#303030",
      "title": "mine"
    }
  }), _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "showScrollbar": false
    }
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _c('div', {
    staticClass: ["userhead"]
  }, [_c('div', {
    staticClass: ["userTop"]
  }, [_c('div', {
    staticClass: ["userImg"]
  }, [_c('image', {
    staticClass: ["avator"],
    attrs: {
      "src": _vm.user.face
    }
  })]), _c('div', {
    staticClass: ["userInfo"]
  }, [_c('text', {
    staticClass: ["username"]
  }, [_vm._v(_vm._s(_vm.user.name))]), _c('text', {
    staticClass: ["userPhone"]
  }, [_vm._v(_vm._s(_vm.user.phone))])]), _c('text', {
    staticClass: ["iconfont", "righticon"]
  }, [_vm._v("")])]), _vm._m(0)]), _c('x-cell', {
    staticClass: ["list-margin"],
    attrs: {
      "title": "My order",
      "hasArrow": true
    }
  }, [_c('text', {
    staticStyle: {
      color: "#999",
      fontSize: "30px"
    },
    attrs: {
      "slot": "value"
    },
    slot: "value"
  }, [_vm._v("View my orders")])]), _c('x-cell', {
    attrs: {
      "title": "Selling",
      "hasArrow": true
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "Sold",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('messageSeting')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "Unpaid",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('helpCenter')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "Waiting for shipping",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('share')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "shipped",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('share')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "After sale",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('share')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "Help",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('share')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "Customer service",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('share')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "Make an appointment",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('share')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 40
    }
  }, [_vm._v("")])])]), _c('x-cell', {
    attrs: {
      "title": "Setting",
      "hasArrow": true
    },
    on: {
      "cellClick": function($event) {
        _vm.gonext('setting')
      }
    }
  }, [_c('div', {
    staticClass: ["list-icon"],
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: {
      fontSize: 38
    }
  }, [_vm._v("")])])]), _c('div', {
    staticStyle: {
      marginBottom: "40px"
    }
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["userSection"]
  }, [_c('div', {
    staticClass: ["sectionItem"]
  }, [_c('text', {
    staticClass: ["itemNum"]
  }, [_vm._v("6")]), _c('text', {
    staticClass: ["itemTitle"]
  }, [_vm._v("like")])]), _c('div', {
    staticClass: ["sectionItem"]
  }, [_c('text', {
    staticClass: ["itemNum"]
  }, [_vm._v("6")]), _c('text', {
    staticClass: ["itemTitle"]
  }, [_vm._v("like")])]), _c('div', {
    staticClass: ["sectionItem"]
  }, [_c('text', {
    staticClass: ["itemNum"]
  }, [_vm._v("6")]), _c('text', {
    staticClass: ["itemTitle"]
  }, [_vm._v("like")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(63)
)

/* script */
__vue_exports__ = __webpack_require__(64)

/* template */
var __vue_template__ = __webpack_require__(70)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\shop\\app.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-caea54e6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {
  "layout": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "item-container": {
    "flex": 1,
    "width": "750",
    "backgroundColor": "#f5f5f5"
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(16);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule("navigator");
exports.default = {
	components: {
		"x-tabbar": __webpack_require__(65),
		"home": __webpack_require__(66),
		"category": __webpack_require__(67),
		"cart": __webpack_require__(68),
		"user": __webpack_require__(69)
	},

	methods: {
		onLoad: function onLoad(p) {},
		gonext: function gonext(url) {
			//this.push('test.js',{name:"ssss"})
			this.log("jdksdjsk", "error");
			navigator.push(url);
		},
		searchClick: function searchClick() {
			this.toast("搜索跳转");
		},
		letfClick: function letfClick() {
			this.toast("左边按钮跳转");
		},
		rightClick: function rightClick() {
			this.toast("右边边按钮跳转");
		}
	},
	created: function created() {
		var tabPageHeight = _utils2.default.env.getPageHeight();
		var tabStyles = this.tabStyles;

		this.contentStyle = {
			height: tabPageHeight + 10 + "px"
		};
	}
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\component\\mainpage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3ea9ea99"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(32)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\shop\\app\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bf1f1b04"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\shop\\app\\category.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43c8779d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(26)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\shop\\app\\cart.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-84621f82"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(33)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(35)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\shop\\app\\user.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a4edd92c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"]
  }, [_c('x-tabbar', [_c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('home', {
    ref: "messageCom"
  })], 1), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('category', {
    ref: "appcenterCom"
  })], 1), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('cart', {
    ref: "maillistCom"
  })], 1), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('user', {
    ref: "myinfo"
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(84)
)

/* script */
__vue_exports__ = __webpack_require__(85)

/* template */
var __vue_template__ = __webpack_require__(86)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\component\\cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-74db37b3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wxc-cello": {
    "paddingLeft": "30",
    "backgroundColor": "#ffffff"
  },
  "wxc-cell": {
    "height": "100",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingRight": "20"
  },
  "cell-disabeld": {
    "backgroundColor": "#ffffff",
    "backgroundColor:active": "#eeeeee"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "color": "#c1c1c1",
    "fontSize": "50"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4"
  }
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    topBorder: {
      type: Boolean,
      default: false
    },
    bottomBorder: {
      type: Boolean,
      default: false
    },
    disabeld: {
      type: Boolean,
      default: false
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      this.$emit('cellClick', { e: e });
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cello', _vm.topBorder && 'cell-top-border', _vm.bottomBorder && 'cell-bottom-border', !_vm.disabeld && 'cell-disabeld'],
    on: {
      "click": _vm.cellClicked
    }
  }, [_c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && !_vm.bottomBorder && 'cell-bottom-border', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.hasArrow) ? _c('text', {
    staticClass: ["iconfont", "cell-arrow-icon"]
  }, [_vm._v("")]) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);