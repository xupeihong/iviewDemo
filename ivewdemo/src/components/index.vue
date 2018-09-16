<template>
	<div id="index_main">	
		<user></user>	
		<a href="#"></a>
		<second ref='coma'></second>
		<button @click="handeRef">通过ref获取子组件</button>
		<!--访问slot内容-->
		<child-component :count="1">
			<h2 slot="header">标题</h2>
			<p>正文内容</p>
			<p>更多的正文内容</p>
			<div slot="footer">底部信息</div>
		</child-component>
   <div id='div' v-show="showDiv">测试文本内容</div>
   <button @click="getText">获取</button>
    </div>
			
</template> 
<script>
	import user from '@/components/user'	
	import second from '@/components/second'	
	import childComponent from '@/components/childComponent'
	import $ from 'jquery'
	export default {	
		name: 'index_main',	
		data() {	
			return {
				showDiv:false
			}	
		},	
		components: {	
			user,	
			second,
			childComponent	
		},	
		methods: {	
			handeRef() {	
				var msg = this.$refs.coma.message;	
				console.log(msg);
					
			},
			getText(){
				this.showDiv=true;
				// console.log($('#div').text());
				this.$nextTick(function(){
					console.log($('#div').text());
				})
			}
		}	
	}
</script>
<style scoped>
	
</style>