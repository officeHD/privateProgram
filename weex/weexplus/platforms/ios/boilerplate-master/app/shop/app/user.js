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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
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

/***/ 34:
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

/***/ 35:
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

/***/ 61:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 83:
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

/***/ 84:
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

/***/ 85:
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

/***/ 86:
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

/******/ });