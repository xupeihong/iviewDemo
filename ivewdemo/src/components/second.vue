<template>
    <div id='second'>    
            {{message}}
        </div>
</template>

<script>
    export default {
        name:'second',
        data() {
            return {    
                message: '子组件内容'    
            }    
        },    
    }
</script>
<style scoped>
    
</style>