<template>
	<view>
		<!-- #ifdef MP -->
		<search-input></search-input>
		<!-- #endif -->
	</view>

</template>

<script>
	import searchInput from '@/components/common/search-input.vue'
	export default {
		components: {
			searchInput
		},
		data() {
			return {

			}
		},
		onLoad() {
			// #ifdef APP-NVUE
			this.placeholderData()
			// #endif
		},
		methods: {
			// 搜索框滚动数据
			placeholderData() {
				//获取当前页面实例, 仅 App 支持写在APP-PLUS条件编译下
				let webview = this.$scope.$getAppWebview();

				let arr = ['APP · 微信小程序', 'Java · SprinBoot', 'SpringCloud ·SpringSecurity', 'Vue · React'];
				let i = 0;
				webview.setStyle({
					'titleNView': {
						"searchInput": {
							"placeholder": arr[i]
						}
					}
				})
				setInterval(() => {
					// 定时循环显示每个元素，3最后一个元素，又从0第1个元素开始
					i = i < 3 ? ++i : 0;
					webview.setStyle({
						'titleNView': {
							"searchInput": {
								"placeholder": arr[i]
							}
						}
					})
				}, 3000) // ()
			}
		}


	}
</script>

<style>
</style>
