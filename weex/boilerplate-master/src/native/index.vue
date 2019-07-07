<template>
<div class="wrapper">
  <head :back="false" title="app入口"></head>
  <div class="layout">
    <text class="text" @click="gonext('root:/shop/app.js')">国外商城</text>
    <text class="text" @click="gonext">指点APp</text>
    <text class="text" @click="gonext">指点商户版</text>
  </div>
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
      this.log("jdksdjsk", "error");
      navigator.push(url);
    }
  },
  created() {}
};
</script>
<style scoped>
.wrapper{
    display: flex;
}
.layout {
  align-items: center;
  background-color: #ffffff;
  justify-content: center;
  flex: 1;
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
</style>