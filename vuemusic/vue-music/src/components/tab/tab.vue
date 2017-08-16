<template>
    <div class="tab">
        <router-link  tag = "div"   to="/recomend">
            <span>推荐</span>
        </router-link>
           <router-link  tag = "div"   to="/singer">
            <span>歌手</span>
        </router-link>
           <router-link  tag = "div"   to="/search">
            <span>搜索</span>
        </router-link>
           <router-link  tag = "div"   to="/rank">
            <span>排行榜</span>
        </router-link>
    </div>

</template>

<script>
    export default{}
</script>

<style scoped lang="">
    .tab{
        display: flex;
           height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-align: center;
        color: rgba(0,0,0,.6);
       
        /*background-color: palevioletred;*/
    }
    .tab div{
        flex:1
    }
    .tab div.router-link-active{
         color:#31c27c;
        border-bottom:2px solid #31c27c;
    }
</style>