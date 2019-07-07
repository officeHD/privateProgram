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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
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

/***/ 25:
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

/***/ 26:
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

/***/ 58:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });