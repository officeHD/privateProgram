<template>
	<view>
		<view class="user-section">
			<text class="top-title" v-if="maskState == 1">订单待付款</text>
			<text class="top-title" v-if="maskState == 2">已付款</text>
			<text class="top-title" v-if="maskState == 3">订单待收货</text>
			<text class="top-title" v-if="maskState == 4">订单已完成</text>
			<text class="top-con" v-if="maskState == 1">剩余24小时32分钟自动关闭</text>
			<text class="top-con" v-if="maskState == 2">等待商家发货</text>
			<text class="top-con" v-if="maskState == 3">等待收货</text>
			<text class="top-con" v-if="maskState == 4">去评价</text>
		</view>

		<!-- 地址 -->
		<view class="address-section">
			<view class="order-content">
				<view class="top">
					<text class="name">{{addressData.name}}</text>
					<text class="mobile">{{addressData.mobile}}</text>
				</view>
				<text class="address">{{addressData.address}} {{addressData.area}}</text>
			</view>

		</view>

		<view class="goods-section">
			<view class="g-header b-b">
				<image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image>
				<text class="name">西城小店铺</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item">
				<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg"></image>
				<view class="right">
					<text class="title clamp">古黛妃 短袖t恤女夏装2019新款</text>
					<text class="spec">春装款 L</text>
					<view class="price-box">
						<text class="price">￥17.8</text>
						<text class="number">x 1</text>
					</view>
				</view>
			</view>
			<view class="g-item ">
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"></image>
				<view class="right">
					<text class="title clamp">韩版于是洞洞拖鞋 夏季浴室防滑简约居家【新人专享，限选意见】</text>
					<text class="spec">春装款 L</text>
					<view class="price-box">
						<text class="price">￥17.8</text>
						<text class="number">x 1</text>
					</view>
				</view>
			</view>
			<!-- 金额明细 -->
			<view class="yt-list">
				<view class="yt-list-cell  ">
					<text class="cell-tit clamp">商品金额</text>
					<text class="cell-tip">￥179.88</text>
				</view>
				<view class="yt-list-cell ">
					<text class="cell-tit clamp">优惠金额</text>
					<text class="cell-tip ">-￥35</text>
				</view>
				<view class="yt-list-cell ">
					<text class="cell-tit clamp">运费</text>
					<text class="cell-tip">免运费</text>
				</view>
				<view class="yt-list-cell  ">
					<text class="cell-tit clamp">需付款</text>
					<text class="cell-tip red">￥33.0</text>
				</view>
			</view>
		</view>



		<view class="order-mes">
			<text class="order-tit">订单信息</text>
			<view class="order-ite">
				<text class="ite-tit">订单编号</text>
				<text>订单编号</text>
				<text class="copy">复制</text>
			</view>

			<view class="order-ite">
				<text class="ite-tit">订单编号</text>
				<text>订单编号</text>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<text class="submit" @click="submit">修改地址</text>
			<text class="submit" @click="submit">取消订单</text>
			<text class="submit pay" @click="submit">付款</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				maskState: 0, //优惠券面板显示状态
				desc: '', //备注
				payType: 1, //1微信 2支付宝
				couponList: [{
						title: '新用户专享优惠券',
						price: 5,
					},
					{
						title: '庆五一发一波优惠券',
						price: 10,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					}
				],
				addressData: {
					name: '许小星',
					mobile: '13853989563',
					addressName: '金九大道',
					address: '山东省济南市历城区',
					area: '149号',
					default: false,
				}
			}
		},
		onLoad(option) {
			//商品数据
			let id = JSON.parse(option.id);
			this.maskState=id;
		},
		methods: {
		 
			 
			 
			submit() {
				uni.redirectTo({
					url: '/pages/money/pay'
				})
			},
			stopPrevent() {}
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}

	.user-section {
		height: 228upx;
		padding: 105upx 30upx 0;
		position: relative;
		background: linear-gradient(to right, #6ab0e6, #4b9fe0);
		display: flex;
		flex-direction: column;

		color: #fff;

		.top-title {
			font-size: 32upx;
			margin-bottom: 10upx;

		}

		.top-con {
			font-size: 22upx;
		}
	}

	.address-section {
		margin: 20upx 0;
		padding: 20upx 30upx;
		background: #fff;
		position: relative;

		.order-content {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			font-size: 28upx;
			color: $font-color-dark;

		}




		.name {
			font-size: 24upx;
			margin-right: 24upx;
			color: #333;
		}

		.mobile {
			font-size: 24upx;

			color: #999;
		}

		.address {
			margin-top: 10upx;
			color: #333;
			font-size: 24upx;
		}
	}

	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}

		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
		}

		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}

		.g-item {
			display: flex;
			margin: 20upx 30upx;

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

			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: $font-color-dark;
				padding-top: 10upx;

				.price {
					margin-bottom: 4upx;
				}

				.number {
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}

			.step-box {
				position: relative;
			}
		}
	}

	.yt-list {
		margin-top: 16upx;
		padding-top: 20upx;
		padding-bottom: 30upx;
		background: #fff;
		border-top: 1upx solid #e6e6e6;
	}

	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 5upx 40upx;

		position: relative;

		&.cell-hover {
			background: #fafafa;
		}



		.cell-icon {
			height: 32upx;
			width: 32upx;
			font-size: 22upx;
			color: #fff;
			text-align: center;
			line-height: 32upx;
			background: #f85e52;
			border-radius: 4upx;
			margin-right: 12upx;

			&.hb {
				background: #ffaa0e;
			}

			&.lpk {
				background: #3ab54a;
			}

		}

		.cell-more {
			align-self: center;
			font-size: 24upx;
			color: $font-color-light;
			margin-left: 8upx;
			margin-right: -10upx;
		}

		.cell-tit {
			flex: 1;
			font-size: 20upx;
			color: #999999;
			margin-right: 10upx;
		}

		.cell-tip {
			font-size: 26upx;
			color: $font-color-dark;

			&.disabled {
				color: $font-color-light;
			}

			&.active {
				color: $base-color;
			}

			&.red {
				color: $base-color;
			}
		}

		&.desc-cell {
			.cell-tit {
				max-width: 90upx;
			}
		}

		.desc {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
		}
	}

	/* 支付列表 */
	.pay-list {
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;

		.pay-item {
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;
			position: relative;
		}

		.icon-weixinzhifu {
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}

		.icon-alipay {
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}

		.icon-xuanzhong2 {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			color: $base-color;
		}

		.tit {
			font-size: 32upx;
			color: $font-color-dark;
			flex: 1;
		}
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 98upx;
		justify-content: flex-end;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: $font-color-base;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

		.price-content {
			padding-left: 30upx;
		}

		.price-tip {
			color: $base-color;
			margin-left: 8upx;
		}



		.submit {
			display: flex;
			align-items: center;
			justify-content: center;
			width: auto;
			height: 68upx;
			min-width: 170upx;
			color: #fff;
			padding: 5upx 25upx;
			font-size: 30upx;
			background: #E6EAED;
			margin: 0 10upx;
			color: #2677B6;
			border-radius: 8upx;

			&.pay {
				background-color: #55A4E2;
				color: #fff;
			}
		}
	}

	/* 优惠券面板 */
	.mask {
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 9995;
		transition: .3s;

		.mask-content {
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y: scroll;
		}

		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.mask-content {
				transform: translateY(0);
			}
		}
	}

	.order-mes {
		margin: 20upx 0;
		background-color: #fff;
		padding: 20upx 30upx;

		.order-tit {
			font-size: 26upx;
			color: #494949;
		}

		.order-ite {
			margin: 15upx 0 10upx;
			position: relative;
			font-size: 20upx;

			color: #333333;

			.copy {
				position: absolute;
				right: 0;
				background-color: #E6EAED;
				color: #2677B6;
				padding: 10upx 20upx;
			}
		}

		.ite-tit {
			margin-right: 40upx;
			color: #999;
		}
	}
</style>
