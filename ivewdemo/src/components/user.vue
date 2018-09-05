<template>
	<div class="user">
		{{msg}}
		<p>点击测试子组件</p>
	</div>
</template>
<script >
	export default{
		name:'user',
		data(){
			return{
             msg:'测试传值'
			}
		},
		methods:{},
		mounted(){},
		computed:{},
		components:{}		
	}
</script>
<style scoped></style>