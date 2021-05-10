<template>
	<view class="content">
		<button type="default" @click="navTo">跳转到登录11</button>
		<view class="iconfont">&#xe8e9;</view>
		<view class="iconfont icon-star"></view>
		<view class="mxg-icon mxg-icon-list-color"></view>
		<view>组件跳转</view>
		<navigator :url="'/pages/auth/login?params='+encodeURIComponent(JSON.stringify({id:1,name:'meng'}))">


			跳转到登录页
		</navigator>
		<navigator url="/pages/category/category" open-type="switchTab">
			跳转到分类页
		</navigator>
		<view v-for="(item,index) in 50" :key="index">{{item}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hell1o22311'
			}
		},
		onPullDownRefresh() {
			console.log('下拉刷新')
		},
		onReachBottom() {
			console.log('上拉')
		},
		onLoad() {

		},
		methods: {
			navTo() {
				const params = {
					id: 1,
					name: 'meng'
				}
				uni.navigateTo({
					// url: '/pages/auth/login?id=1&name="meng"',
					url: `/pages/auth/login?params=${encodeURIComponent(JSON.stringify(params))}`,
					animationDuration: 1000,
					animationType: 'slide-in-bottom',

				})
			}
		}
	}
</script>

<style>
	@font-face {
		font-family: 'iconfont';
		src: url('~@/static/icon/iconfont.ttf');
	}

	.iconfont {
		font-family: iconfont;
	}
</style>
