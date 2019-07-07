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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
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

/***/ 21:
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

/***/ 22:
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

/***/ 23:
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

/***/ 40:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });