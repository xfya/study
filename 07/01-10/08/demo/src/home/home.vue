<template>
<div class = "banner">
 <div class="lunbo">


    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item ,index) in lunbo" :key="index">
            <a href="item.url">
                <img :src="item.img" alt="">
            </a>
        </mt-swipe-item>
   
    </mt-swipe>

      </div>
    <!--九宫格 start-->
        <div class="mui-content fd">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                          
                          <router-link  :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div>
                            
                            </router-link>
                            
                             


                            
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        
                        <router-link  :to="{name:'photo.share'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">图片分享</div>
                            
                            </router-link>
                            
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        
                        
                             <router-link  :to="{name:'photo.goodsList'}">
                                <span class="mui-icon mui-icon-home"></span>
                                <div class="mui-media-body">商品展示</div>
                            
                            </router-link>
                            
                            
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            
		        </ul> 

               
		</div>
      

</div>
</template>

<script>
    export default {
        data() {
            return {
                lunbo: [],
                icon: [{
                        name: "Home",
                        unicode: "&#xe619;"
                    }, {
                        name: "Home",
                        unicode: "&#xe61c;"
                    }, {
                        name: "Home",
                        unicode: "&#xe61c;"
                    }, {
                        name: "Home",
                        unicode: "&#xe63d;"
                    }, {
                        name: "Home",
                        unicode: "&#xe68f;"
                    }, {
                        name: "Home",
                        unicode: "&#xe61d;"
                    }



                ]
            }
        },
        created() {

            this.$ajax.get("getlunbo")
                .then((res) => {
                    // console.log(res)
                    this.lunbo = res.data.message
             })
        },

    }
</script>

<style scoped>
    .banner .lunbo {
        height: 150px;
    }
    
    .banner img {
        width: 100%;
    }
    
    .iconfont {
        font-size: 25px;
    }
    
    .fd {
        overflow: hidden;
    }
</style>