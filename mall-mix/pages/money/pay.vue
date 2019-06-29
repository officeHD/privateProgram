<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<text class="price">{{pay_price}}</text>
		</view>
		<view class="titleBox">
			<image class="imgicon" src="../../static/pay/title.png" mode="widthFix"></image>全购支付
		</view>
		<view class="pay-type-list">
			<view class="type-item b-b" @click="changePayType(1)">
				<image class="imgicon" src="../../static/pay/account.png" mode="widthFix"></image>
				<view class="con">
					<text class="tit">账户余额</text>
					<text>(剩余：¥{{balance}})</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 1' :disabled="balance<pay_price" />
					</radio>
				</label>
			</view>
			<!-- <view class="type-item b-b" @click="changePayType(2)">
				<image class="imgicon" src="../../static/pay/cunbei.png" mode="widthFix"></image>
				<view class="con">
					<text class="tit">村贝</text>
					<text>(可用{{cunbei}}分，可抵{{cunbei}}.00元人民币)</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 2' />
					</radio>
				</label>
			</view> -->
		</view>
		<view class="pay-type-list">

			<view class="type-item b-b" @click="changePayType(2)">
				<text class="icon yticon icon-weixinzhifu"></text>
				<view class="con">
					<text class="tit">微信支付</text>
					<text></text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 2' />
					</radio>
				</label>
			</view>
			<view class="type-item " @click="changePayType(3)">
				<text class="icon yticon icon-alipay"></text>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 3' />
					</radio>
				</label>
			</view>

		</view>

		<text class="mix-btn" @click="confirm">确认支付</text>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {

				out_trade_Id: "",
				pay_price: "",
				payType: 1,
				orderInfo: {},
				balance: 0,
				cunbei: 0,
			};
		},
		computed: {
			...mapState(['hasLogin', 'userInfo','openId'])
		},
		async onLoad(options) {
			// this.total_order_id = options.id;
			const account = await this.$req.ajax({
				path: 'zdapp/users/get_users_info',
				title: '正在加载',
				data: {
					users_id: this.userInfo.id
				}
			});
			if (account.data.code == 200) {
				// console.log(account.data.data)
				if (account.data.data.balance) {
					this.balance = account.data.data.balance;
				}
				if (account.data.data.group_cowry) {
					this.cunbei = account.data.data.group_cowry;

				}

			}
			console.log(options)
			var res = await this.$req.ajax({
				path: 'zdapp/order_pay/get_order_pay',
				title: '正在加载',
				data: {
					users_id: this.userInfo.id,
					co_order_id: options.id

				}
			});
			if (res.data.code == 200) {
				this.out_trade_no = res.data.data.out_trade_no;
				this.pay_price = res.data.data.pay_price;
				this.create_time = res.data.data.create_time;
				this.out_trade_Id = res.data.data.id;
				if (this.balance < res.data.data.pay_price) {
					this.payType = 2
				}

			}
		},

		methods: {
			//选择支付方式
			changePayType(type) {
				if (type == 1 && this.balance < this.pay_price) {
					this.$api.msg("账户余额不足");
					return false;
				}
				this.payType = type;
			},
			//确认支付
			confirm: async function() {

				if (this.payType == 1) {
					var res = await this.$req.ajax({
						path: 'zdapp/pay/pay_balance',
						title: '正在加载',
						data: {
							users_id: this.userInfo.id,
							total_order_id: this.out_trade_Id
						}
					});
					if (res.data.code == 200) {
						uni.redirectTo({
							url: '/pages/money/paySuccess'
						})
					} else {

						this.$api.msg(res.data.message);
					}
				}
				if (this.payType == 2) {
					var res = await this.$req.ajax({
						path: 'zdapp/pay/pay_wxapp',
						title: '正在加载',
						data: {
							users_id: this.userInfo.id,
							open_id:this.openId,
							total_order_id: this.out_trade_Id,
						}
					});
					console.log(res)
					if (res.data.code == 200) {
						let dataSim=res.data.data;
						// appId: "wxf08b7ec6cc2c2841"
						// nonceStr: "sywrtilloiqekzu048zi2d0bgnarpawl"
						// package: "prepay_id=wx29174356967466075deb52d21537226100"
						// paySign: "F6D21FBAF0D2B751490073FEBFA4AE25"
						// signType: "MD5"
						// timeStamp: "1561801436"
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp:dataSim.timeStamp,
							nonceStr:dataSim.nonceStr,
							package: dataSim.package,
							signType: dataSim.signType,
							paySign: dataSim.paySign,
							success: function(res) {
								uni.redirectTo({
									url: '/pages/money/paySuccess'
								})
							},
							fail: function(err) {
								console.log('fail:' + JSON.stringify(err));
							}
						});

					} else {
						this.$api.msg(res.data.message);
					}
				}

			},
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
		height: 100vh;
		background-color: #f2f2f2;
	}

	.titleBox {
		padding: 0 30upx;
		background-color: #FEF8F3;
		height: 90upx;
		display: flex;
		align-items: center;
		color: #FA5802;
		font-size: 26upx;


	}

	.imgicon {
		width: 40upx;
		margin-right: 20upx;
	}

	.price-box {
		background-color: #fff;
		height: 245upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #909399;

		.price {
			font-size: 50upx;
			color: #303133;
			margin-top: 12upx;

			&:before {
				content: '￥';
				font-size: 40upx;
			}
		}
	}

	.pay-type-list {
		margin-bottom: 20upx;
		background-color: #fff;
		padding-left: 30upx;

		.type-item {
			height: 120upx;
			padding: 20upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60upx;
			font-size: 30upx;
			position: relative;
		}

		.icon {
			width: 70upx;
			font-size: 40upx;
		}

		.icon-erjiye-yucunkuan {
			color: #fe8e2e;
		}

		.icon-weixinzhifu {
			color: #36cb59;
		}

		.icon-alipay {
			color: #01aaef;
		}

		.tit {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 4upx;
		}

		.con {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}

	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630upx;
		height: 80upx;
		margin: 80upx auto 30upx;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
