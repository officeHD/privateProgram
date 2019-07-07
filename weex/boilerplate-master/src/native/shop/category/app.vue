<template>
	<div class="layout">
		<head :back="false" bgcolor="#303030" @letfClick="letfClick" @rightClick="rightClick">
			<text class="leftIcon iconfont" slot="left">&#xe64a;</text>
			<text class="leftIcon iconfont" slot="right">&#xe600;</text>
		</head>
		<scroller class="scroller"></scroller>
		<tabnav active="Categories"></tabnav>
	</div>
</template>
<script>
	const navigator = weex.requireModule("navigator");

	export default {

		data() {
			return {
				imageList: [{
						src: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI5NDk2fQ'
					},
					{
						src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
					},
					{
						src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
					}
				]
			};
		},
		props: {},
		methods: {
			onLoad(p) {},
			gonext(url) {
				//this.push('test.js',{name:"ssss"})
				this.log("jdksdjsk", "error");
				navigator.push(url);
			},

			searchClick() {
				this.toast("搜索跳转")
			},
			letfClick() {
				this.toast("左边按钮跳转")
			},
			rightClick() {
				this.toast("右边边按钮跳转")
			},
		},
		created() {

		}
	};
</script>
<style scoped>
	.iconfont {
		font-family: iconfont;
	} 
	.leftIcon {
		color: #ffffff;
		font-size: 40px; 
	} 
	.layout {
		background-color: #ffffff;
	}

	.scroller {
		flex: 1;
		background-color: #f2f2f2;
	}
</style>
