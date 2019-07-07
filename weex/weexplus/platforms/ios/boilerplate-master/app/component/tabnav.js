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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
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

/***/ 14:
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

/***/ 15:
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

/***/ 42:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });