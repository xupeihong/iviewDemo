<template>
    <div id="three">
    <div class="container">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="main">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        mounted(){
            var header=this.$slots.header;
            var main=this.$slots.default;
            var footer=this.$slots.footer;
            console.log(footer);
            console.log(footer[0].elm.innerHTML);
        }
    }
</script>

<style scoped>

</style>