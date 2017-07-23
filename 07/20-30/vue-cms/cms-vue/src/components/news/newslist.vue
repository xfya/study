<template>
  <div class = "temp">
    	 <nav-bar title="test"></nav-bar> 
    <div class="mui-content ">
	
			<ul class="mui-table-view">

				<li class="mui-table-view-cell mui-media" v-for="(item ,index) in newsList" :key="item.id">
					<router-link :to="{name:'newsDetail',query:{id:item.id}}" >
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'> {{item.add_time | formatDate}} {{item.zhaiyao}}</p>
						</div>
					</router-link>
				</li>
			

			</ul>
		

		</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      newsList:[]
    }
  },
  created(){
    this.$ajax.get('getnewslist').then(res=>{
      console.log(res.data.message)
      this.newsList = res.data.message;
    })
  }
}
</script>
<style scoped>
.temp .mui-bar-nav{
  position: static;
      z-index: 10;
    right: 0;
    left: 0;
    height: 44px;
    padding-right: 10px;
    padding-left: 10px;
    border-bottom: 0;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>


