<template>
	<view class="container">
		<view class="user-section">
			<!-- <image class="bg" src="/static/user-bg.jpg"></image> -->
		</view>
		<view class="vip-card-box">
			<!-- <image class="card-bg" src="/static/vip-card-bg.png" mode=""></image> -->
			<view class="user-info-box" >
				<view class="user-info-box-l">
					<view class="portrait-box">
						<image class="portrait" :src="userData.headimgurl || '/static/missing-face.png'"></image>
					</view>
					<view class="info-box">
						<text class="username ml20 f28 c3">{{ userData.nickname || '游客' }}</text>
						<text class="userphone ml20 c6 f24">{{ userData.phone_number || '' }}</text>
					</view>
				</view>

				<!-- <text class="f28 ml10 yticon icon-you c6"></text> -->
			</view>
			<view class="account">
				<view class="tj-item br">
					<text class="f24 c6">余额：</text>
					<text class="num f24 c6">￥{{userData.balance||0}}</text>

				</view>
				<view class="tj-item">
					<text class="f24 c6">可用村贝：</text>
					<text class="num f24 c6">{{userData.group_cowry||0}}</text>
				</view>
			</view>

			<view class="searchList" @click="navTo('/pages/order/list')">
				<text class="f24">账单查询</text>
			</view>

			<!-- <view class="b-btn">立即开通</view> -->
			<!-- <view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					DCloud会员
				</view> -->
			<!-- <text class="e-m">DCloud Union</text> -->
			<!-- <text class="e-b">开通会员开发无bug 一测就上线</text> -->
		</view>
		<view class="cover-container">
			<!-- <image class="arc" src="/static/arc.png"></image> -->

			<!-- <view class="tj-sction">
				<view class="tj-item">
					<text class="num">128.8</text>
					<text>余额</text>
				</view>
				<view class="tj-item">
					<text class="num">0</text>
					<text>优惠券</text>
				</view>
				<view class="tj-item">
					<text class="num">20</text>
					<text>积分</text>
				</view>
			</view> -->
			<!-- 订单 -->
			<view class="tabTitle">
				<text class="f28">全部订单</text>
				<view @click="navTo('/pages/order/order?state=0')">
					<text class="f28 c9">查看全部订单</text>
					<text class="f28 ml10 yticon icon-you c6"></text>
				</view>
			</view>
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=1')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>待发货</text>
				</view>

				<view class="order-item" @click="navTo('/pages/order/order?state=3')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>已完成</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=5')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view>
			<view class="tabTitle">
				<text class="f28">常用工具</text>
				<view>

				</view>
			</view>
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/tool/markProduct?state=1')" hover-class="common-hover"
				 :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>收藏夹</text>
				</view>
				<view class="order-item" @click="navTo('/pages/tool/coupon')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>优惠券</text>
				</view>

				<view class="order-item" @click="navTo('/pages/address/address')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>收货地址</text>
				</view>
				<view class="order-item" @click="navTo('/pages/tool/vipCard')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>会员卡</text>
				</view>
				<view class="order-item" @click="navTo('/pages/tool/markShop')" hover-class="common-hover"
				 :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>我的推荐</text>
				</view>
			</view>
			<!-- 浏览历史 -->
			<!-- <view class="history-section icon">
				<view class="sec-header">
					<text class="yticon icon-lishijilu"></text>
					<text>浏览历史</text>
				</view>
				<scroll-view scroll-x class="h-list">
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105186633&di=c121a29beece4e14269948d990f9e720&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fm8%2FM04%2FDE%2FDE%2FwKhQplZ-QteEBvsbAAAAADUkobU751.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105231218&di=09534b9833b5243296630e6d5b728eff&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fm1%2FM05%2FD1%2FAC%2FwKhQcFQ3iN2EQTo8AAAAAHQU6_8355.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105320890&di=c743386be51f2c4c0fd4b75754d14f3c&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fhb%2FMTQ1OTg4ODY0MDA3Ny05OTQ4ODY1NDQ%3D.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2691146630,2165926318&fm=26&gp=0.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105443324&di=8141bf13f3f208c61524d67f9bb83942&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ac9a5548d29b0000019ae98e6d98.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=191678693,2701202375&fm=26&gp=0.jpg"
					 mode="aspectFill"></image>
				</scroll-view>
				<list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="您的会员还有3天过期"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理" @eventClick="navTo('/pages/address/address')"></list-cell>
				<list-cell icon="icon-share" iconColor="#9789f7" title="分享" tips="邀请好友赢10万大礼"></list-cell>
				<list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="晒单" tips="晒单抢红包"></list-cell>
				<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="我的收藏"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="设置" border="" @eventClick="navTo('/pages/set/set')"></list-cell>
			</view> -->
		</view>
	</view>
</template>
<script>
	import listCell from '@/components/mix-list-cell';
	import {
		mapState
	} from 'vuex';
	let startY = 0,
		moveY = 0,
		pageAtTop = true;
	export default {
		components: {
			listCell
		},
		data() {
			return {
				userData: {

				},
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false
			};
		},
		onShow() {
			if(this.hasLogin){
				this.loadData();
			}
			
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				});
			}
		},
		// #endif
		computed: {
			...mapState(['hasLogin','userInfo'])
		},
		methods: {
			async loadData() {
				const res = await this.$req.ajax({
					path: 'zdapp/users/get_users_info',
					// title: '正在加载',
					data: {
						users_id: this.userInfo.id
					}
				});
				if (res.data.code == 200) {
					console.log(res.data.data)
					this.userData = res.data.data;
					
				}

			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url) {
				if (!this.hasLogin) {
					url = '/pages/public/login';
				}
				uni.navigateTo({
					url
				});
			},

			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e) {
				if (pageAtTop === false) {
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e) {
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if (moveDistance < 0) {
					this.moving = false;
					return;
				}
				this.moving = true;
				if (moveDistance >= 80 && moveDistance < 100) {
					moveDistance = 80;
				}

				if (moveDistance > 0 && moveDistance <= 80) {
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend() {
				if (this.moving === false) {
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
		}
	};
</script>
<style lang="scss">
	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}

	.tabTitle {
		height: 87upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10upx 20upx;
		margin-top: 20upx;
		background-color: #fff;
		border-bottom: 1upx solid #E1E1E1;
	}

	.user-section {
		height: 280upx;
		padding: 100upx 30upx 0;
		position: relative;
		background: linear-gradient(to right, #6ab0e6, #4b9fe0);

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: 0.7;
		}
	}

	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1;
		border-bottom: 1upx dashed #E0E0E0;
		margin-left: 48upx;
		margin-right: 48upx;

		.user-info-box-l {
			display: flex;
			align-items: center;
			position: relative;
		}

		.portrait {
			width: 108upx;
			height: 108upx;
			// border: 5upx solid #fff;
			border-radius: 50%;
			margin-left: 20upx;
		}

		.info-box {
			display: flex;
			flex-direction: column;
		}

		.username {}

		.userphone {}
	}

	.account {
		display: flex;
		justify-content: center;
		padding: 20upx 0;

		.tj-item {
			flex: 1;
			text-align: center;
		}

		.br {
			border-right: 1upx solid #ccc;
		}
	}

	.searchList {
		text-align: center;
		padding-top: 20upx;
		border-top: 1upx solid #EBEBEB;
		color: #2279BD;
		font-size: 26upx;
	}

	.vip-card-box {
		display: flex;
		flex-direction: column;
		color: #f7d680;
		// height: 240upx;
		// background: linear-gradient(left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
		background-color: #fff;
		border-radius: 16upx;
		overflow: hidden;
		position: relative;
		padding: 20upx 0;
		margin-top: -180upx;
		width: 686upx;
		margin-left: auto;
		margin-right: auto;

		.card-bg {
			position: absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}

		.b-btn {
			position: absolute;
			right: 20upx;
			top: 16upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}

		.tit {
			font-size: $font-base + 2upx;
			color: #f7d680;
			margin-bottom: 28upx;

			.yticon {
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}

		.e-b {
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}

	.container {
		background: #f5f5f5;
		height: 100%;
	}

	.cover-container {
		background: $page-color-base;
		// margin-top: -150upx;
		padding: 0;
		position: relative;
		background: #f5f5f5;
		padding-bottom: 20upx;

		.arc {
			position: absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}

	.tj-sction {
		@extend %section;

		.tj-item {
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}

		.num {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}

	.order-section {
		@extend %section;
		padding: 28upx 0;

		.order-item {
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}

		.yticon {
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #333333;
		}

		.icon-shouhoutuikuan {
			font-size: 44upx;
		}
	}

	.history-section {
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius: 10upx;

		.sec-header {
			display: flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;

			.yticon {
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}

		.h-list {
			white-space: nowrap;
			padding: 30upx 30upx 0;

			image {
				display: inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
</style>
