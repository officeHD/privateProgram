<template>
<div class="wrapper">
  <head :back="false" title="指点商户版"  ></head>
  <div class="tabnav">
    <text class="tabText">
        阿萨德
    </text>
  </div>
  <div class="layout">

    <text class="text" @click="gonext('root:/shop/app.js')">国外商城</text>
    <text class="text" @click="gonext">指点APp</text>
    <text class="text" @click="gonext">指点商户版</text>
    <text class="text height0" @click="gonext"></text>
    <text class="text height0" @click="gonext"></text>
    <text class="text height0" @click="gonext"></text>
  </div>
  <text class="text" @click="gonext">指点商户版</text>
</div>
</template>
<script>
const navigator = weex.requireModule("navigator");
var head = require("./component/head.vue");
export default {
  components: { head },
  data() {
    return {};
  },
  props: {},
  methods: {
    onLoad(p) {},
    gonext(url) {
      //                this.push('test.js',{name:"ssss"}) 
      navigator.push(url);
    }
  },
  created() {}
};
</script>
<style scoped>
.wrapper{
}
.layout {
  align-items: center;
  background-color: #ffffff;
  justify-content: space-around;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
}
.height0{
  height: 0;
}
.img {
  width: 200px;
  height: 200px;
  margin-top: -100px;
}
.text {
  color: black;
  margin-top: 30px;
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 50px;
}
.tabnav{
  color: #fff000;
}
.tabText{
  font-size: 60px;
  font-weight: 600;
}
</style>