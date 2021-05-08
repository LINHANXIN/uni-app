<template>
	<view>
		<view v-for="(item,index) in 100" :key="index">{{item}}</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>

<style>
</style>
