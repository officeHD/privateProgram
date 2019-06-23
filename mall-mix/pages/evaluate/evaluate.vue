<template>
	<view class="content">
		<uni-evaluate :list-data="evaluateData" :rate="rateData" />
	</view>
</template>

<script>
	import uniEvaluate from '@/components/xiujun-evaluate/uni-evaluate.vue';
	// import evaluateData from '@/common/list.js';
	const listData = [{
		header_img: "http://api.huxiaowen.vip/image/face_2.jpg",
		user_name: "测试1",
		rate:5,
		create_time: "2019-04-12",
		content: "好评",
		imgs:[
			'/com/face/face.jpg',
			'http://api.huxiaowen.vip/image/p10.jpg',
			'http://api.huxiaowen.vip/image/face_14.jpg',
			'http://api.huxiaowen.vip/image/face.jpg',
			'http://api.huxiaowen.vip/image/p10.jpg',
		]
	},
	{
		content: "中评",
		create_time: "2019-04-12",
		header_img: "http://api.huxiaowen.vip/image/face_12.jpg",
		user_name: "测试2",
		rate:3.5,
		// imgs:[]
	},
	{
		content: "",
		create_time: "2019-04-12",
		header_img: "http://api.huxiaowen.vip/image/face_15.jpg",
		user_name: "测试3",
		rate:2.3,
		// imgs:[]
	},{
		content: "好评",
		create_time: "2019-04-12",
		header_img: "http://api.huxiaowen.vip/image/face_2.jpg",
		user_name: "测试1",
		rate:5,
		imgs:[
			'http://api.huxiaowen.vip/image/face.jpg',
			'http://api.huxiaowen.vip/image/p10.jpg',
			'http://api.huxiaowen.vip/image/face_14.jpg',
			'http://api.huxiaowen.vip/image/face.jpg',
			'http://api.huxiaowen.vip/image/p10.jpg',
		]
	},
	{
		content: "中评",
		create_time: "2019-04-12",
		header_img: "http://api.huxiaowen.vip/image/face_12.jpg",
		user_name: "测试2",
		rate:3.5,
		// imgs:[]
	},
	{
		content: "",
		create_time: "2019-04-12",
		header_img: "http://api.huxiaowen.vip/image/face_15.jpg",
		user_name: "测试3",
		rate:2.3,
		// imgs:[]
	}]
	export default {
		components: {
			uniEvaluate
		},
		data() {
			return {
				evaluateData: listData,
				rateData: 4.6
			};
		},
		onLoad() {},
		methods: {}
	};
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
