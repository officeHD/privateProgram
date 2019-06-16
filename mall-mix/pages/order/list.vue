<template>
	<view class="content">
		<view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">
								{{array[index]||"账单类型"}}
								<image class="arrow" src="../../static/down.png"></image>
							</view>
						</picker>
					</view>
					<view class="uni-list-cell-db">
						<picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date||"选择时间"}}
								<image class="arrow" src="../../static/down.png"></image>
							</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="listT">
				<text class="listl">本月</text>
				<view class="listR">
					<text>支出</text>
					<text class="money">￥126.40</text>
				</view>
			</view>
			<view class="listC" v-for="i in 3">
				<view class="listCl">
					<text class="listDay">04-03</text>
					<text  class="listTime">08:45</text>
				</view>
				<view class="listCR">
					<view class="cleft">
						<text class="cTitle">黑色西装裤子女夏季薄款…</text>
						<text class="cType">服饰美容</text>
					</view>
					<text class="cright">-126.40</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {

			return {
				title: 'picker',
				array: ['服饰美容', '生活日用', '食品', '电器'],
				index: "",
				date: "",
				time: '12:01'
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},

			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}`;
			}
		}
	}
</script>

<style lang="scss">
	page, .content{
		background: #f5f5f5;
		height: 100%;
	}
	.uni-list-cell {
		display: flex;
		font-size: 28upx;
		height: 88upx;
		align-items: center;
		border-bottom: 1upx solid rgba(230, 230, 230, 1);
		background-color:#fff;
		.uni-list-cell-db {
			padding: 0 32upx;

			.uni-input {
				display: flex;
				align-items: center;
				min-width: 150upx;
				justify-content: space-between;
				color: #666;
			}

			.arrow {
				width: 20upx;
				height: 12upx;
				margin-left: 10upx;
			}
		}
	}

	.listT {
		height: 90upx;
		display: flex;
		justify-content: space-between;
		padding: 0 30upx;
		align-items: center;

		.listl {
			font-size: 28upx;
			color: #666;
		}

		.listR {
			font-size: 24upx;
			color: #999;

			.money {
				color: #333;
			}
		}
	}
	.listC{
		display: flex;
		justify-content: space-between;
		padding:0 ;
		padding-left: 30upx;
		height: 138upx;
		align-items: center;
		background: #fff;
		.listCl{
			width: 118upx;
			display: flex;
			flex-direction: column;
			.listDay{
				font-size:28upx; 
				color: #333;
			}
			.listTime{
				font-size:24upx; 
				color: #999999;
			}
		}
		&:last-child{
			.listCR{
				border-bottom: none;
			}
		}
		.listCR{
			flex: 1;
			height: 100%;
			display: flex;
			padding-right: 30upx;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1upx solid rgba(230, 230, 230, 1);
			.cleft{
				display: flex;
				flex-direction: column;
			}
			.cTitle{
				color: #1E1E1E;
				font-size: 28upx;
			}
			.cType{
				color:#666666;
				font-size: 24upx;
			}
			.cright{
				color: #1E1E1E;
				font-size: 34upx;
			}
		}
	}
</style>
