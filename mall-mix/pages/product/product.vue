<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-if="shopInfo.video">
					<view class="image-wrapper">
						<video class="myVideo" id="" :src="shopInfo.video" enable-danmu danmu-btn controls></video>
					</view>
				</swiper-item>
				<swiper-item class="swiper-item" v-for="(item,index) in bannerImg" :key="index">
					<view class="image-wrapper">
						<image :src="item" class="loaded" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="introduce-section">
			<text class="title">{{shopInfo.title}}</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{shopInfo.price}}</text>
				<text class="m-price">¥{{shopInfo.old_price}}</text>
				<text class="coupon-tip" v-for="(item,index) in shopLabel" :key="index">{{item}}</text>
			</view>
			<!-- <view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view> -->
		</view>

		<!--  分享 -->
		<!-- <view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>

		</view>
 -->
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec('Param')">
				<text class="tit">商品参数</text>
				<view class="con">
					<text class="selected-text mr10" v-for="(sItem, sIndex) in goodsParam" :key="sIndex">
						{{sItem.title}}:{{sItem.description}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<navigator url="/pages/address/address?source=1" class="c-row b-b">
				<text class="tit">收货地址</text>
				<view class="con">
					<text class="selected-text">
						{{addressData.province}} {{addressData.city}} {{addressData.area}} {{addressData.address}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</navigator>
			<view class="c-row b-b" @click="toggleSpec('Spec')">
				<text class="tit">商品规格</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b" @click="toggleSpec('Coupon')" v-if="coupon_list.lenght>0">
				<text class="tit">优惠券</text>
				<text class="con t-r red">领取优惠券</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view>
			</view>
		</view>

		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header" @tap="evaluate()">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>

		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<image class="img" :src="shopInfo.thumb" mode="widthFix"></image>
		</view>

		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>购物车</text>
			</navigator>
			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view>

			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="addCart">加入购物车</button>
			</view>
		</view>


		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent" v-if="toogleType=='Spec'">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.title}}</text>
					<view class="item-list">
						<text v-for="(childItem, childIndex) in item.content" :key="childIndex" class="tit" :class="{selected: childItem.selected}"
						 @click="selectSpec(childIndex, index)">
							{{childItem.name}}
						</text>
					</view>
				</view>
				<view class="attr-list">
					<text>商品数量</text>
					<view class="item-list numberAdd">
					<uni-number-box class="step" :min="1" :max="1000" :value="number"
					 :isMax="number>=item.stock?true:false" :isMin="number===1"   @eventChange="numberChange"></uni-number-box>
					 </view>
				</view>
				
				<button class="btn" @click="toggleSpec">完成</button>
			</view>
			<view class="layer attr-content " v-if="toogleType=='Param'">
				<view class="titleC">产品参数</view>
				<view class="c-list">
					<view class="c-row b-b" v-for="(sItem, sIndex) in goodsParam" :key="sIndex">
						<text class="tit">{{sItem.title}}</text>
						<view class="con">
							<text class="selected-text mr10">
								{{sItem.description}}
							</text>
						</view>
					</view>
				</view>

				<button class="btn" @click="toggleSpec">关闭</button>
			</view>
			<view class="layer attr-content " v-if="toogleType=='Coupon'">
				<view class="row" v-for="(row,index) in coupon_list" :key="index">

					<view class="carrier">
						<view class="left">
							<view class="title">
								<text v-if="row.discount_type==1">{{row.discount}}折</text>
								<text v-else>￥{{row.reduce}}</text>
							</view>
							<view class="criteria">
								满{{row.min_price}}元使用 <text>（{{row.discount_type|couponType}} ）</text>
							</view>
							<view class="term">
								{{row.start_time}} ~ {{row.end_time}}
							</view>
							<view class="gap-top"></view>
							<view class="gap-bottom"></view>
						</view>
						<view class="right">

							<view class="use">
								领取
							</view>
						</view>
					</view>
				</view>
				<button class="btn" @click="toggleSpec">关闭</button>
			</view>
		</view>
		<!-- 分享 -->
		<share ref="share" :contentHeight="580" :shareList="shareList"></share>
	</view>
</template>

<script>
	import share from '@/components/share';
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		components: {
			share,uniNumberBox
		},
		computed: {
			shopLabel() {
				let lable = [];
				if (this.shopInfo.label) {
					lable = this.shopInfo.label.split(',')
				}
				return lable
			},
			bannerImg() {
				let lable = [];
				if (this.shopInfo.thumb_url) {
					lable = this.shopInfo.thumb_url.split(',')
				}
				return lable
			}
		},
		data() {
			return {
				number:1,
				addressData: {
					id:"",
					province:"",
					city:"",
					area:"",
					area:"",
				 
				},
				co_id: "", //商家D
				toogleType: "",
				shopInfo: {
					"id": 1,
					"title": "毛绒娃娃",
					"subtitle": "儿童玩具",
					"label": "春季新品",
					"postage": "0.00",
					"content": "这里是详情",
					"video": "http://c_inventory.i2f2f.com/upload/20190419/a4c04fcbb3d8262226b8037df0316ea2.mp4",
					"price": "0.01",
					"old_price": "123.12",
					"thumb": "https://www.i2f2f.com/attachment/images/26/2019/04/giXIQxrG74ZXPnLnnFxnd4Rn0QpCFP.jpg",
					"thumb_url": "../../images/banner.png,../../images/banner1.png",
					"is_service": null
				},
				goodsParam: [{
						"id": 53,
						"title": "品牌",
						"description": "茵曼"
					},
					{
						"id": 54,
						"title": "适用年龄",
						"description": "18-25周岁"
					},
				],
				coupon_list: [],
				specClass: 'none',
				specSelected: [],
				favorite: false,
				shareList: [],
				specList: [{
					id: 1,
					title: '颜色',
					content: [{
						"id": 28,
						"name": "白色"
					}]
				}],

			};
		},
		async onLoad(options) {

			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			let co_id = options.co_id;
			this.co_id = co_id;
			if (id) {
				const res = await this.$req.ajax({
					path: 'zdapp/goods/get_goods_info',
					title: '正在加载',
					data: {
						id: id
					}
				});
				if (res.data.code == 200) {
					this.shopInfo = res.data.data;
				}
				const goods_param = await this.$req.ajax({
					path: 'zdapp/goods/get_goods_param',
					title: '正在加载',
					data: {
						goods_id: id
					}
				});
				if (goods_param.data.code == 200) {
					// console.log(goods_param.data.data)
					this.goodsParam = goods_param.data.data;
				}
				const goods_spec = await this.$req.ajax({
					path: 'zdapp/goods/get_goods_spec',
					title: '正在加载',
					data: {
						goods_id: id
					}
				});
				if (goods_spec.data.code == 200) {
					this.specList = goods_spec.data.data;
				}
				
				const location = await this.$req.ajax({
					path: 'zdapp/address/get_address_list',
					title: '正在加载',
					data: {
						users_id: "ff8080816a52909d016a533107f40000",
						page:"1",
						page_num:"10"
					}
				});
				if (location.data.code == 200) {
					 console.log(location.data.data.list)
					 this.addressData=location.data.data.list.filter(item=>item.is_default=='2')[0];
				}
			}
			if (co_id) {
				const coupon_list = await this.$req.ajax({
					path: 'zdapp/coupon/get_coupon_list',
					title: '正在加载',
					data: {
						co_id: co_id
					}
				});
				if (coupon_list.data.code == 200) {
					console.log(coupon_list.data.data)
					this.coupon_list = coupon_list.data.data;
				}
			}

			//规格 默认选中第一条
			this.specList.forEach(item => {
				item.content.forEach((citem, index) => {

					if (index == 0) {
						this.$set(citem, "pid", item.id)
						this.$set(citem, "selected", true)
						this.specSelected.push(citem);
					}
				})
			})
			this.shareList = await this.$api.json('shareList');
		},
		methods: {
			//规格弹窗开关
			toggleSpec(type) {
				if (type) {
					this.toogleType = type;
				}
				if (this.specClass === 'show') {
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			//选择数量
			numberChange(data) {
				this.number = data.number; 
			},
			//选择规格
			selectSpec(index, pid) {
				console.log(index, pid)
				this.specList[pid].content.forEach(item => {


					this.$set(item, "selected", false)
				})
				this.$set(this.specList[pid].content[index], 'selected', true);
				console.log(this.specList)

				this.specSelected = [];
				this.specList.forEach(item => {
					item.content.forEach(citem => {
						if (citem.selected === true) {
							this.$set(citem, "pid", item.id)
							this.specSelected.push(citem);
						}
					})

				})
				console.log(this.specSelected)
			},
			//分享
			share() {
				this.$refs.share.toggleMask();
			},
			//收藏
			async toFavorite() {
				var res = await this.$req.ajax({
					path: 'zdapp/goods_collection/add_goods_collection',
					title: '正在加载',
					data: {
						goods_id: this.shopInfo.id,
						users_id: "ff8080816a52909d016a533107f40000",
						group_id: "2c918aee6a48c1df016a48cdc53a0002"
					}
				});
				if (res.data.code == 200) {
					// this.$api.msg('请填写收货人姓名');
				} else {
					// this.$api.msg('请填写收货人姓名');
				}
				this.favorite = !this.favorite;
			},
			buy() {
				let option_id = this.specSelected.map(item => item.id);
				let option_idStr = option_id.join(',');
				uni.navigateTo({
					url: `/pages/order/createOrder?goods_id=${this.shopInfo.id}&option_id=${option_idStr}&number=${this.number}&address_id=${this.addressData.id}`
				})
			},
			async addCart() {
				let option_id = this.specSelected.map(item => item.id);
				let option_idStr = option_id.join(',');
				console.log(option_idStr);
				var res = await this.$req.ajax({
					path: 'zdapp/cart/add_order_info',
					title: '正在加载',
					data: {
						goods_id: this.shopInfo.id,
						users_id: "ff8080816a52909d016a533107f40000",
						group_id: "2c918aee6a48c1df016a48cdc53a0002",
						option_id: option_idStr,
						address_id: this.addressData.id,
						number: this.number
					}
				});
				console.log(res)
				if (res.data.code == 200) {
					// this.$api.msg('请填写收货人姓名');
				} else {
					this.$api.msg(res.data.message);
				}

			},
			evaluate() {
				uni.navigateTo({
					url: `/pages/evaluate/evaluate`
				})
			},

			stopPrevent() {}
		},

	}
</script>

<style lang='scss'>
	page {
		background: $page-color-base;
		padding-bottom: 160upx;
	}

	.mr10 {
		margin-right: 10upx;
	}

	.icon-you {
		font-size: $font-base + 2upx;
		color: #888;
	}

	.carousel {
		height: 700upx;
		position: relative;

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;

			.myVideo {
				width: 100%;
				height: 100%;
			}
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 700upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 20upx 30upx;

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}

		.price-box {
			display: flex;
			align-items: baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color: $uni-color-primary;
		}

		.price {
			font-size: $font-lg + 2upx;
		}

		.m-price {
			margin: 0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;

			text {
				flex: 1;
			}
		}
	}

	/* 分享 */
	.share-section {
		display: flex;
		align-items: center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;

		.share-icon {
			display: flex;
			align-items: center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position: relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;

			&:after {
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position: absolute;
				background: $uni-color-primary;
			}
		}

		.icon-xingxing {
			position: relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}

		.tit {
			font-size: $font-base;
			margin-left: 10upx;
		}

		.icon-bangzhu1 {
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}

		.share-btn {
			flex: 1;
			text-align: right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}

		.icon-you {
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;

		.c-row {
			display: flex;
			align-items: center;
			padding: 20upx 30upx;
			position: relative;
		}

		.tit {
			width: 140upx;
		}

		.con {
			flex: 1;
			color: $font-color-dark;

			.selected-text {
				margin-right: 10upx;
			}
		}

		.bz-list {
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;

			text {
				display: inline-block;
				margin-right: 30upx;
			}
		}

		.con-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}

		.red {
			color: $uni-color-primary;
		}
	}

	/* 评价 */
	.eva-section {
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.e-header {
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.tit {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}

			.tip {
				flex: 1;
				text-align: right;
			}

			.icon-you {
				margin-left: 10upx;
			}
		}
	}

	.eva-box {
		display: flex;
		padding: 20upx 0;

		.portrait {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;

			.con {
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}

			.bot {
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color: $font-color-light;
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 16upx;

		image {
			width: 100%;
		}

		.img {
			width: 100%;
		}

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}
	}

	/* 规格选择弹窗 */
	.attr-content {
		padding: 10upx 30upx;

		.a-t {
			display: flex;

			image {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;
				;
			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;

				.price {
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}

				.selected-text {
					margin-right: 10upx;
				}
			}
		}

		.attr-list {
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}

		.item-list {
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;

			text {
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}

			.selected {
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
		.numberAdd{
			position: relative;
		}
	}

	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}

		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.titleC {
				text-align: center;
				padding: 20upx;
				font-size: 30upx;
			}

			.btn {
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}

		.row {
			width: 100%;
			height: 150upx;
			margin: 20upx 0;
			border-radius: 8upx;
			// box-shadow: 0upx 0 10upx rgba(0,0,0,0.1);
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border: 0;

			.menu {
				.icon {
					color: #fff;
					font-size: 50upx;
				}

				position: absolute;
				width: 28%;
				height: 100%;
				right: 0;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}

			.carrier {


				&.open {
					animation: showMenu 0.25s linear both;
				}

				&.close {
					animation: closeMenu 0.15s linear both;
				}

				background-color: #fff;
				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				flex-wrap: nowrap;
				display: flex;

				.left {
					flex: 1;
					background: #E0F0F3;
					border-right: 2upx dashed #999999;

					.title {
						padding-top: 10upx;
						width: 90%;
						margin: 0 5%;
						font-size: 40upx;
						color: #E31010;
					}

					.criteria {
						width: 90%;
						margin: 0 5%;
						font-size: 23upx;
						color: #666666;
					}

					.term {
						width: 90%;
						margin: 0 5%;
						font-size: 20upx;
						color: #999;
						margin-top: 15upx;
					}

					position: relative;

					.gap-top,
					.gap-bottom {
						position: absolute;
						width: 20upx;
						height: 20upx;
						right: -10upx;
						border-radius: 100%;
						background-color: #f5f5f5;
					}

					.gap-top {
						top: -10upx;
					}

					.gap-bottom {
						bottom: -10upx;
					}

					.shixiao {
						position: absolute;
						right: 20upx;
						font-size: 150upx;
						z-index: 6;
						color: rgba(153, 153, 153, 0.2)
					}
				}

				.right {
					flex-shrink: 0;
					width: 160upx;
					color: #fff;
					background: #E0F0F3;
					display: flex;

					&.invalid {
						background: linear-gradient(to right, #aaa, #999);

						.use {
							color: #aaa;
						}
					}

					justify-content: center;
					align-items: center;

					.ticket,
					.criteria {
						width: 100%;
					}

					.ticket {
						padding-top: 1vw;
						justify-content: center;
						align-items: baseline;
						height: 6vw;

						.num {
							font-size: 42upx;
							font-weight: 600;
						}

						.unit {
							font-size: 24upx;
						}
					}

					.criteria {
						justify-content: center;

						font-size: 28upx;
					}

					.use {
						width: 112upx;
						height: 54upx;
						text-align: center;
						line-height: 54upx;
						font-size: 26upx;
						background: linear-gradient(to right, #66ADE5, #1589E3);

						color: #fff;
						border-radius: 4upx;
						padding: 0 10upx;
					}
				}
			}
		}
	}

	/* 底部操作菜单 */
	.page-bottom {
		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.p-b-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;

			.yticon {
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}

			&.active,
			&.active .yticon {
				color: $uni-color-primary;
			}

			.icon-fenxiang2 {
				font-size: 42upx;
				transform: translateY(-2upx);
			}

			.icon-shoucang {
				font-size: 46upx;
			}
		}

		.action-btn-group {
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
			margin-left: 20upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255, 255, 255, .5);
			}

			.action-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}

	}
</style>
