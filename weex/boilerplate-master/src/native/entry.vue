<template>
  <div style></div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    onLoad() {
      let url = "root:index.js";
      this.initIconFont();
      this.goToMain(url);
			
    },
		initIconFont () {
      // eslint-disable-next-line no-undef
      let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_1280399_9o3zchtr3l6.ttf')"
        });
    },
    goToMain(url) {
      let navigator = weex.requireModule("navigator");
      this.log(weex.config.env.platform);

      if (weex.config.env.platform != "iOS") {
        //注意android不要用presentFull
        navigator.pushFull({ url: url, animated: false });
      } else {
        navigator.presentFull({ url: url, animated: false });
      }
    }
  },
  created() {}
};
</script>
<style>
	 
</style>
