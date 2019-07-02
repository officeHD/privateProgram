<!-- 退换货 -->
<template>
	<view class="container">
		<view class="g-item">
			<view class="img">
				<v-lazyLoad mode="aspectFill" :realSrc="goodsInfo.thumb" :errorImage="errorImage" :placeholdSrc="placeholderSrc"></v-lazyLoad>
			</view>
			
			 
			<view class="right">
				<text class="title clamp ">{{goodsInfo.title}}</text>
				<text class="spec">{{goodsInfo.spec_name}}</text>
			</view>
		</view>

		<view class="row b-b mt20">
			<text class="tit">服务类型</text>
			<text class="input">
				请选择地址
			</text>

			<text class="yticon icon-you"></text>
		</view>
		<view class="row b-b ">
			<text class="tit">商品状态</text>
			<text class="input">
				请选择地址
			</text> 
			<text class="yticon icon-you"></text>
		</view>
		<view class="row b-b ">
			<text class="tit">退款原因</text>
			<text class="input">
				请选择地址
			</text>
			<text class="yticon icon-you"></text>
		</view>
		
		<view class="imgBox mt20">
			<view class="title">
				上传凭证
			</view>
			<view class="img" v-for="(img,imgi) in file" :key="imgi">
				<image :src="img.file_url" mode="aspectFill"></image>
			</view>
			<view class="img" @click="testUp(index)">
				<image src="../../static/add.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="issue-btn-box">
			<button   class="submit-btn" type="primary" @click="doSubmit">提交</button>
						 
		</view>
	</view>
</template>

<script>
	import rup from '@/common/request/request-upFiles.js';
	import VLazyLoad from "@/components/lazyLoad";

	import {
		mapState
	} from 'vuex';
	export default {
		components: {
			VLazyLoad
		},
		computed: {
			...mapState(['hasLogin', 'userInfo'])
		},
		data() {
			return {
				errorImage: '../static/errorImage.jpg',
				placeholderSrc: '../static/loading.png',
				 
				goodsInfo:{},
				file: [],
				id:"104"
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			async loadData(){
				 
				let res = await this.$req.ajax({
					path: 'zdapp/order/get_order_info',
					title: '正在加载',
					data: {
						users_id: this.userInfo.id,
						order_id: this.id, 
					}
				});
				if(res.data.code==200){
					this.goodsInfo=res.data.data;
				}
			 
				
			},
			async testUp(index) {
				try {
					const res = await rup.selectFiles({
						type: 2,
						maximum: 3,
						upload: {
							path: 'https://www.i2b2b.com/public/index.php/zdapp/upload/upload',
							files: ['file'],
							title: '正在上传',
							extra: {
								type: 1
							}
						}
					})

					// let imageArr=
					if (res.upload && res.upload.length > 0) {
						res.upload.forEach(item => {
							let returnData = JSON.parse(item);
							if (returnData.code == 200) {
								this.file.push({
									file_url: returnData.data.file_url,
									type: 1
								})
							}

						})
					}
					console.log(this.eva)
				} catch (e) {
					console.log(e)
				}
			},
			doSubmit(){
				 uni.navigateTo({
					url: '/pages/product/returnDetail',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
		}

	}
</script>

<style lang="scss">
	.imgBox {
		display: flex;
		flex-wrap: wrap;
		background-color: #fff;
		padding: 20upx 0;
		.title{
			width: 100%;
			font-size: 26upx;
			color: #333;
			padding: 0 20upx;
			 
		}
		.img {
			width: 25vw;
			height: 25vw;
			padding: 20upx;

			image {
				border-radius: 10upx;
				width: 100%;
				height: 100%;
			}
		}

	}

	.container {
		min-height: 100vh;
		background-color: #f2f2f2;
	}

	.g-item {
		display: flex;
		padding: 20upx 30upx;
		background-color: #fff;
		.img{
			width: 140upx;
			height: 140upx;
			border-radius: 4upx;
		}
		image {
			flex-shrink: 0;
			display: block;
			width: 140upx;
			height: 140upx;
			border-radius: 4upx;
		}

		.right {
			flex: 1;
			padding-left: 24upx;
			overflow: hidden;
		}

		.title {
			font-size: 30upx;
			color: $font-color-dark;
		}

		.spec {
			font-size: 26upx;
			color: $font-color-light;
		}




	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
			text-align: right;
			padding-right: 20upx;

		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.mt20 {
		margin-top: 20upx;
	}
	.issue-btn-box{
		height: 100upx;
		position: fixed;
		padding: 0 30upx;
		left: 0;
		bottom:0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1upx solid #e6e6e6;
		button{
			width:100%;
			height: 80upx;
			 
			font-size: 30upx;
			background-color: #3682FF;
			line-height: 80upx
		}
	}
</style>
