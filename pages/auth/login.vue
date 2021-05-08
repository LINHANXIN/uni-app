<template>
	<view>
		登录页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(option) {
			console.log(11,JSON.parse(decodeURIComponent(option.params)))
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
