<template>
              <mt-swipe :auto="2000" class ="lunbo">
                        <mt-swipe-item v-for="(item,index) in pictures" :key="index">
                            <a :href = "item.url">
                                <img :src ="item.img"/>
                            </a>
                    
                        </mt-swipe-item>
                    
    
             </mt-swipe>
</template>

<script>
    export default {
        props: ['pictures']
    }
</script>
<style>
    .lunbo {
        height: 200px;
    }
    
    .lunbo img {
        width: 100%;
    }
</style>