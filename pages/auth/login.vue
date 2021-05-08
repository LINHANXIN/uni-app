<template>
	<view>
		登录页面
		<button type="default" @click="toOrder">跳转到订单页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(option) {
			console.log(11, JSON.parse(decodeURIComponent(option.params)))
		},
		methods: {
			toOrder() {
				var obj = {
					id: 1,
					name: 2
				}
				// redirectTo关闭当前页
				// uni.redirectTo({
				// 	url: '/pages/order/order?obj=' + JSON.stringify(obj)
				// })
				// reLaunch关闭所有页面
				uni.reLaunch({
					url: '/pages/order/order?obj=' + JSON.stringify(obj)
				})
			}
		}
	}
</script>

<style>

</style>
