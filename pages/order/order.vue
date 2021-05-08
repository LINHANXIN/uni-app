<template>
	<view>
		订单页
		<button type="default" @click="toCategory">跳转到分类页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(option) {
			var obj = JSON.parse(option.obj)
		},
		methods: {
			toCategory() {
				uni.switchTab({
					url:'/pages/category/category'
				})
			}
		}
	}
</script>

<style>

</style>
