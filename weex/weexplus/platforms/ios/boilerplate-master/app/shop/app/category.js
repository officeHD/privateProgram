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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
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

/***/ 28:
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

/***/ 29:
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

/***/ 59:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });