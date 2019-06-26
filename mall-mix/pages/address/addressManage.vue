<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.phone" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">地址</text>
			<text @click="togglePopup('bottoms')" class="input">
				{{addressData.province}} {{addressData.city}} {{addressData.area}}
			</text>
			<text class="yticon icon-shouhuodizhi"></text>
		</view>
		<uni-popup :show="opentype === 'bottoms'" position="bottom" mode="fixed" msg="选择收货地址" @hidePopup="togglePopup('')">

			<semp-city @confirm="onCityClick" platform="jd"></semp-city>
		</uni-popup>
		<view class="row b-b">
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.address" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>

		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.is_default==='2'" color="#fa436a" @change="switchChange" />
		</view>

		<button class="add-btn" @click="confirm">提交</button>
	</view>
</template>

<script>
	import sempCity from "@/components/semp-city/semp-city.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			sempCity,
			uniPopup
		},
		data() {
			return {
				opentype: "",
				addressData: {

					"id": 10,
					"name": "檀-2",
					"phone": "15145112434",
					"province": "河北省",
					"city": "唐山市",
					"area": "路南区",
					"address": "黄山路123号",
					"is_default": 2,
					"create_time": "2019-04-18 15:09:22"
				}
			}
		},
		onLoad(option) {
			let title = '新增收货地址';
			if (option.type === 'edit') {
				title = '编辑收货地址'

				this.addressData = JSON.parse(option.data)
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e) {
				this.addressData.is_default = e.detail ? "2" : "1";
			},
			onCityClick(e) {
				this.provinceName = e.province.label;
				this.cityName = e.city.label;
				this.countyName = e.county.label;
				this.townName = e.town.label;
				this.addressData.addressName = e.province.label + " " + e.city.label + " " + e.county.label + " " + e.town.label
				this.togglePopup("")
			},
			togglePopup(type) {
				console.log(type)
				this.opentype = type;
			},
			//地图选择地址
			chooseLocation() {
				uni.chooseLocation({
					success: (data) => {
						this.addressData.addressName = data.name;
						this.addressData.address = data.name;
					}
				})
			},

			//提交
			confirm() {
				let data = this.addressData;
				if (!data.name) {
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if (!/(^1[3|4|5|6|7|8|9][0-9]{9}$)/.test(data.phone)) {
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if (!data.area) {
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if (!data.address) {
					this.$api.msg('请填写门牌号信息');
					return;
				}
				this.$req.ajax({
					path: 'zdapp/address/edit_address_info',
					title: '正在加载',
					data: {
						users_id: "ff8080816a52909d016a533107f40000",
						"id": data.id,
						"name": data.name,
						"phone": data.phone,
						"province": data.province,
						"city": data.city,
						"area": data.area,
						"address": data.address,
						"is_default": data.is_default
					},
					finshFun: function(res) {
						 
					}

				});

				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList(data, this.manageType);
				// this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(() => {
					uni.navigateBack()
				}, 800)
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
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
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
