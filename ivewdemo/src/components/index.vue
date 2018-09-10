<template>
	<div id="index_main">	
		<user></user>	
		<a href="#"></a>
		<second ref='coma'></second>
		<button @click="handeRef">通过ref获取子组件</button>
		<!--访问slot内容-->
		<child-component>
			<h2 slot="header">标题</h2>
			<p>正文内容</p>
			<p>更多的正文内容</p>
			<div slot="footer">底部信息</div>
		</child-component>
		
    </div>
			
</template> 
<script>
	import user from '@/components/user'	
	import second from '@/components/second'	
	import childComponent from '@/components/childComponent'
	export default {	
		name: 'index_main',	
		data() {	
			return {}	
		},	
		components: {	
			user,	
			second,
			childComponent	
		},	
		methods: {	
			handeRef() {	
				var msg = this.$refs.coma.message;	
				console.log(msg)	
			}	
		}	
	}
</script>
<style scoped>
	
</style>