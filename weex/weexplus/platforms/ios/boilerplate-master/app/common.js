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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "backbg": {
    "width": 130,
    "height": 100,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "layout": {
    "backgroundColor": "#02993c",
    "height": 128,
    "width": 750,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 1 */
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

exports.default = {
  props: {
    title: {
      default: ""
    },
    back: {
      default: true
    },
    titleColor: {
      default: "#ffffff"
    },
    hideBottomLine: {
      default: false
    },

    bgcolor: {
      default: "#1EA5FC"
    },
    autoback: {
      default: true
    },
    isloading: {
      default: false
    },
    disabled: {
      default: false
    },

    type: {
      type: String,
      default: "text"
    },
    font_size: {
      default: 20
    },
    height: {
      default: 135
    },
    top: {
      default: 40
    },
    titletop: {
      default: 10
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    titleClick: function titleClick() {
      this.$emit("titleClick");
    },
    letfClick: function letfClick() {
      this.$emit("letfClick");
    },
    rightClick: function rightClick() {
      this.$emit("rightClick");
    },
    backTo: function backTo() {
      if (this.autoback) {
        var nav = weex.requireModule("navigator");
        nav.back();
        return;
      }
      this.$emit("backClick");
    },
    onclick: function onclick() {
      if (!this.disabled) this.$emit("onclick");
    },
    adjust: function adjust() {
      if (weex.config.env.platform == "android") {
        //                    if(weex.config.env.osVersion=)
        var p = weex.config.env.osVersion;
        p = p.replace(/\./g, "");
        if (p.length < 3) p = p + "0";
        if (p <= "440") {
          this.height = 108;
          this.top = 16;
          this.titletop = 4;
        }
      }
    }
  },

  created: function created() {
    this.adjust();
  },
  ready: function ready() {}
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["layout"],
    style: {
      'background-color': _vm.bgcolor,
      'height': _vm.height + 'px',
      'padding-top': _vm.top
    }
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      flex: "1",
      justifyContent: "space-between"
    }
  }, [(!_vm.back) ? _c('div', {
    staticClass: ["backbg"],
    on: {
      "click": _vm.letfClick
    }
  }, [_vm._t("left")], 2) : _vm._e(), (_vm.back) ? _c('div', {
    staticClass: ["backbg"],
    on: {
      "click": _vm.backTo
    }
  }, [_c('image', {
    staticStyle: {
      width: "70px",
      height: "70px",
      marginTop: "40px",
      marginLeft: "22px"
    },
    attrs: {
      "src": "root:img/back.png"
    }
  })]) : _vm._e(), _c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "36"
    },
    style: {
      'color': _vm.titleColor
    },
    on: {
      "click": _vm.titleClick
    }
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: ["backbg"],
    on: {
      "click": _vm.rightClick
    }
  }, [_vm._t("right")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
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

exports.default = {
  props: {},
  data: function data() {
    return {};
  },

  methods: {
    load: function load(param) {
      this.$emit('load', param);
    },
    show: function show(param) {
      this.$emit('show', param);
    }
  },
  created: function created() {}
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0"
    },
    on: {
      "load": _vm.load,
      "show": _vm.show
    }
  }, [_c('div', {
    staticStyle: {
      flex: "1"
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
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
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\component\\head.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-690b0d31"
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "width": "200",
    "height": "100",
    "backgroundColor": "#0088fb",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "10",
    "backgroundColor:active": "#5ac3ff"
  },
  "btn-text": {
    "color": "#ffffff",
    "textAlign": "center",
    "color:active": "#ffffff"
  }
}

/***/ }),
/* 8 */
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

exports.default = {
  props: {
    text: {
      default: 'button'
    },
    width: {
      default: 200
    },
    height: {
      default: 100
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    click: function click() {
      this.$emit('click');
    }
  },
  created: function created() {}
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["btn"],
    style: {
      'width': _vm.width + 'px',
      'height': _vm.height + 'px'
    },
    on: {
      "click": _vm.click
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    on: {
      "click": _vm.click
    }
  }, [_vm._v(_vm._s(_vm.text))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 11 */
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


exports.default = {
  components: {},
  props: {
    title: {
      default: 'sss'
    }
  },
  data: function data() {
    return {};
  },

  methods: {},
  created: function created() {}
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('head', {
    attrs: {
      "title": _vm.title
    }
  }), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "40",
    "marginBottom": "10"
  },
  "tabbar": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#FFFFFF",
    "alignItems": "flex-end",
    "justifyContent": "space-around",
    "flexDirection": "row",
    "paddingBottom": "10",
    "position": "relative"
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
/* 14 */
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

exports.default = {
	props: {
		active: {
			default: 'Home'
		}

	},
	data: function data() {
		return {};
	},

	methods: {
		gonext: function gonext(url) {
			//this.push('test.js',{name:"ssss"})
			// this.log("jdksdjsk", "error");
			this.push(url);
		},
		click: function click() {
			this.$emit('click');
		}
	},
	mounted: function mounted() {},
	created: function created() {}
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["tabbar"]
  }, [_c('div', {
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.gonext('root:/shop/app.js')
      }
    }
  }, [_c('text', {
    class: [_vm.active == 'Home' ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.active == 'Home' ? 'active' : '']
  }, [_vm._v("Home")])]), _c('div', {
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.gonext('root:/shop/category/app.js')
      }
    }
  }, [_c('text', {
    class: [_vm.active == 'Categories' ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.active == 'Categories' ? 'active' : '']
  }, [_vm._v("Categories")])]), _c('div', {
    staticClass: ["tabItem"]
  }), _c('div', {
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.gonext('root:/shop/cart/app.js')
      }
    }
  }, [_c('text', {
    class: [_vm.active == 'Cart' ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.active == 'Cart' ? 'active' : '']
  }, [_vm._v("Cart")])]), _c('div', {
    staticClass: ["tabItem"],
    on: {
      "click": function($event) {
        _vm.gonext('root:/shop/user/app.js')
      }
    }
  }, [_c('text', {
    class: [_vm.active == 'User' ? 'active' : '', 'iconfont']
  }, [_vm._v("")]), _c('text', {
    class: [_vm.active == 'User' ? 'active' : '']
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
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\component\\wraper.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0290c408"
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\component\\button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4f7f2343"
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\component\\page.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42729b40"
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\component\\tabnav.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-44a2c37f"
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(37);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_main2.default);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Mixins = {};
var wraper = __webpack_require__(17);
var head = __webpack_require__(6);
var button = __webpack_require__(18);
var page = __webpack_require__(19);
var tabnav = __webpack_require__(20);

Mixins.install = function (Vue, options) {
	Vue.mixin({
		components: {
			wraper: wraper,
			head: head,
			button: button,
			page: page,
			tabnav: tabnav
		},
		data: function data() {
			return {
				modal: {},
				navigator: {}
			};
		},

		methods: {
			toast: function toast(msg) {
				if (this.modal && this.modal.toast) this.modal.toast({
					message: msg
				});
			},
			alert: function alert(msg) {
				this.modal.alert({
					message: msg
				});
			},
			push: function push(url, param) {
				if (!param) this.navigator.push(url);else this.navigator.pushParam(url, param);
			},
			getScreenHeight: function getScreenHeight() {
				return 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight;
			},
			log: function log(msg, level) {
				if (!level) {
					level = 'info';
				}
				var type = typeof msg === 'undefined' ? 'undefined' : _typeof(msg);
				var log = weex.requireModule('log');
				if (type == 'object') {
					msg = JSON.stringify(msg);
				}
				log.log({
					msg: this.timestamp() + '    ' + msg + '',
					level: level
				});
			},
			timestamp: function timestamp() {
				var date = new Date(); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
				var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
				var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
				var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
				return Y + M + D + h + m + s;
			}
		},
		created: function created() {
			var _this = this;

			this.navigator = weex.requireModule('navigator');
			this.modal = weex.requireModule('modal');
			var globalEvent = weex.requireModule('globalEvent');
			//全局使用字体图标
			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('http://at.alicdn.com/t/font_1280399_l7rybe45th.ttf')"
			});
			globalEvent.addEventListener("onPageInit", function (param) {
				var p = param;
				if (param && p.param && p.bubbles) p = p.param;
				if (_this.onLoad != undefined) _this.onLoad(p);
			});
			globalEvent.addEventListener("viewWillDisappear", function (param) {

				if (_this.viewWillDisappear != undefined) _this.viewWillDisappear();
			});
			globalEvent.addEventListener("viewWillAppear", function (param) {

				if (_this.viewWillAppear != undefined) _this.viewWillAppear();
			});
			globalEvent.addEventListener("onResume", function (param) {

				if (_this.onResume != undefined) _this.onResume();
			});
		}
	});
};
var install = Mixins.install;
exports.install = install;
exports.default = Mixins;

/***/ })
/******/ ]);