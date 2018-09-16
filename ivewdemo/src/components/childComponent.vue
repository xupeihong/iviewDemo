<template>
    <div id="three">
    <div class="container">
        <div class="header">
            头部
            <slot name="header"></slot>
        </div>
        <div class="main">
            内容
            <slot></slot>
        </div>
        <div class="footer">
            底部
            <slot name="footer"></slot>
        </div>
    </div>
    <div class="child">
        <child-component :count="count+1" v-if="count<2"></child-component>
    </div>
    </div>
</template>

<script>
    export default {
        name:'child-component',
        props:{
            count:{
                type:Number,
                default:1
            }
        },
        data(){
            return{}
        },
        mounted(){
            var header=this.$slots.header;
            var main=this.$slots.default;
            var footer=this.$slots.footer;
            // console.log(footer);
            // console.log(footer[0].elm.innerHTML);
        }
    }
</script>

<style scoped>

</style>