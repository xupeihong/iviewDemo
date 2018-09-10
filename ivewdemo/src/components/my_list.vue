<template>
    <div id='list'>
     <ul >
      <slot name="book" v-for="book in books" :book-name="book.name"></slot>
     </ul>
    </div>
</template>

<script>
    export default {
        props:{
            books:{
                type:Array,
                default:function(){
                    return[];
                }
            }
        },        
    data(){
        // return{
           books:[
               {name:'vuejs实战'},
               {name:'js实战'},
               {name:'vuejs案例分析'},
           ]
        // }
    },
    mounted(){},
    computed:{},
    components:{}
    
    }
</script>

<style scoped>

</style>