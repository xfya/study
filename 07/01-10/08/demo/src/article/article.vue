<template>
    <div>
        <div class="news-title">
            <p v-text="newsInfo.title"></p>
            <div>
                <span>{{newsInfo.click}}次点击</span>
                <span>{{newsInfo.add_time}}</span>
                <span>分类:民生经济1</span>
               
            </div>

           
        </div>
        <!-- 这里只是在设置给模板放什么内容，不是立刻就放上去了 -->
           <div class="news-content" v-html="newsInfo.content">
           </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          newsInfo:[]
      }
  },
  created(){
   
      let id = this.$route.query.id;
    //   console.log(id)
       //发起请求  baseURL->  http://webhm.top:8899/api/getnew/
         this.$ajax.get('getnew/' + id)
            .then((res)=>{
                console.log(res)
               this.newsInfo = res.data.message[0]
            })
  },

}
</script>

<style>

</style>


