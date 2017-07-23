<template>
  <div class="hello">
  <div class ="hello1">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in pictures" :key="index">
          <a :href = "item.url">
            <img :src ="item.img"/>
          </a>
      
        </mt-swipe-item>
      
    
    </mt-swipe>
   </div>
    <!--9 宫格  start-->
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#">
                    <router-link :to="{name:'newsList'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                    </router-link>    
                        
                  </a>
                        
                 </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  :to="{name:'photeShare'}">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图文分享</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link :to="{name:'goods.list'}">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品展示</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone mui-icon-search"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon2 icon iconfont">&#xe61f;</span>
		                    <div class="mui-media-body">Setting</div></a></li>
		
		        </ul> 
		</div>
     <!--9 宫格  end-->

  </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                pictures: []
            }
        },
        created() {

            this.$ajax.get('getlunbo')
                .then(res => {
                    console.log(res)
                    this.pictures = res.data.message
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello1 {
        height: 200px;
    }
    
    .hello1 img {
        width: 100%;
    }
    
    .mui-grid-view.mui-grid-9,
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        background: #fff;
        border: none;
    }
    
    .mui-icon:before {
        content: "";
    }
    
    .mui-icon2 {
        font-size: 50px;
    }
    
    .mui-icon-home {
        width: 50px;
        height: 50px;
        background: url('../static/img/news.png') round;
    }
    
    .mui-icon-email {
        width: 50px;
        height: 50px;
        background: url('../static/img/callme.png') round;
    }
    
    .mui-icon-chatbubble {
        width: 50px;
        height: 50px;
        background: url('../static/img/goodShow.png') round;
    }
    
    .mui-icon-location {
        width: 50px;
        height: 50px;
        background: url('../static/img/picShare.png') round;
    }
    
    .mui-icon-search {
        width: 50px;
        height: 50px;
        background: url('../static/img/search.png') round;
    }
    
    @font-face {
        font-family: "iconfont";
        src: url('../static/iconfont.eot');
        /* IE9*/
        src: url('../static/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/iconfont.woff') format('woff'), /* chrome, firefox */
        url('../static/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../static/iconfont.svg#iconfont') format('svg');
        /* iOS 4.1- */
    }
    
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>