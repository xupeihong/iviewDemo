<template>
    <div id='second'>    
            {{message}}
      <div id="div" v-if="showDIV">一段文本测试</div>
      <button @click="getText">获取div的值</button>
    </div>
</template>

<script>
	import $ from 'jquery'
    export default {
        name:'second',
        data() {
            return {    
                message: '子组件内容',
                showDIV:false,
            }    
        },
        methods:{
            getText(){
                this.showDIV=true;
                console.log($("#div").html());
            }
        }
    }
</script>
<style scoped>
    
</style>