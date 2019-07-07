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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 2:
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(53)
)

/* script */
__vue_exports__ = __webpack_require__(54)

/* template */
var __vue_template__ = __webpack_require__(55)
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
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3da32070"
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

/***/ 53:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "display": "flex"
  },
  "layout": {
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "justifyContent": "center",
    "flex": 1
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
  }
}

/***/ }),

/***/ 54:
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

var navigator = weex.requireModule("navigator");
var head = __webpack_require__(6);
exports.default = {
  components: { head: head },
  data: function data() {
    return {};
  },

  props: {},
  methods: {
    onLoad: function onLoad(p) {},
    gonext: function gonext(url) {
      //                this.push('test.js',{name:"ssss"})
      this.log("jdksdjsk", "error");
      navigator.push(url);
    }
  },
  created: function created() {}
};

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('head', {
    attrs: {
      "back": false,
      "title": "app入口"
    }
  }), _c('div', {
    staticClass: ["layout"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": function($event) {
        _vm.gonext('root:/shop/app.js')
      }
    }
  }, [_vm._v("国外商城")]), _c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.gonext
    }
  }, [_vm._v("指点APp")]), _c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.gonext
    }
  }, [_vm._v("指点商户版")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 6:
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


/***/ })

/******/ });