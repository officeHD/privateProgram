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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

/***/ 60:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });