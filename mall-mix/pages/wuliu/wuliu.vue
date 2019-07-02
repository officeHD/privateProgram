<template>
	<view class="content"><ali :state="alidata2.state" :datas="alidata2.data" :ways="alidata2.information"></ali></view>
</template>

<script>
import ali from '../../components/WuLiu-step.vue';
export default {
	components: {
		ali
	},
	data() {
		return {
			alidata2: {
				state: 3,
				uptime: '2019-05-24 10:58:24',
				data: [
					{
						time: '2019-05-20 16:27:31',
						remark: '杭州市【杭州西湖区十八部】，公司门口！详情致电17609715305 已签收'
					},
					{
						time: '2019-05-20 14:03:11',
						remark: '杭州市【杭州西湖区十八部】，【谭德银17609715305】正在派件'
					},
					{
						time: '2019-05-20 10:53:15',
						remark: '到杭州市【杭州西湖区十八部】'
					},
					{
						time: '2019-05-20 04:22:38',
						remark: '杭州市【杭州转运营业中心】，正发往【杭州西湖区十八部】'
					},
					{
						time: '2019-05-20 03:30:17',
						remark: '到杭州市【杭州转运中心】'
					},
					{
						time: '2019-05-19 21:46:27',
						remark: '苏州市【无锡转运中心】，正发往【杭州转运中心】'
					},
					{
						time: '2019-05-19 21:43:28',
						remark: '到苏州市【无锡转运中心】'
					},
					{
						time: '2019-05-19 17:11:40',
						remark: '到南通市【海门】'
					},
					{
						time: '2019-05-19 13:17:56',
						remark: '南通市【海门】，【金喜露18068137656】已揽收'
					}
				],
				information: {
					no: '70939995911523',
					sName: 'HTKY',
					expName: '百世快递(原汇通)',
					url: 'http:www.htky365.com',
					tel: '021-62963636',
					img: 'https:oss-cn2.apistore.cnexpHTKY.png'
				}
			}
		};
	},
	onLoad() {
		this.init();
	},
	methods: {
		init() {}
	}
};
</script>

<style>
.content {
}
</style>
