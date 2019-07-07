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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(80)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(82)
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
__vue_options__.__file = "F:\\Workspace\\兼职\\privateProgram\\weex\\boilerplate-master\\src\\native\\shop\\user\\app.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7a4d5854"
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

/***/ 80:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "layout": {
    "backgroundColor": "#ffffff"
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
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10",
    "marginLeft": "30",
    "marginTop": "40"
  },
  "subSection": {
    "height": "244",
    "width": "690",
    "marginLeft": "30",
    "marginTop": "40",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10"
  },
  "recommend": {
    "width": "690",
    "borderRadius": "10",
    "backgroundColor": "#FFFFFF",
    "marginLeft": "30",
    "marginTop": "40"
  }
}

/***/ }),

/***/ 81:
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

exports.default = {
	data: function data() {
		return {
			imageList: [{
				src: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI5NDk2fQ'
			}, {
				src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
			}, {
				src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
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

/***/ 82:
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
  }), _c('tabnav', {
    attrs: {
      "active": "User"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });