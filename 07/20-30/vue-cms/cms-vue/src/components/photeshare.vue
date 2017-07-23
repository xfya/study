<template>
   <div class = "temp">
        <nav-bar title="图片分享"></nav-bar> 
       <ul>
           <li v-for="(item,index) in category" :key="item.id" @click = 'test(item.id)'>
               {{item.title}}
           </li>
       </ul>

            <ul>
           <li v-for="(item,index) in category2" :key="item.id" @click = 'test'>
               <router-link :to="{name:'photto.detail',params:{id:item.id}}">
                    {{item.title}}
                <img  v-lazy="item.img_url" />
               </router-link>
              
               <!--<p>{{item.}}</p>-->
           </li>
       </ul>

      
   </div>
</template>

<script>
export default {
  data(){
      return{
        category:[],
        category2:[],
      }
  },
  created(){
    //   this.$ajax.get('getimgcategory')
    //   .then(res=>{
    //     //   console.log(res)
    //       this.category = res.data.message
    //   })
    //   this.test(0)
// 合并ajax 请求
      this.$ajax.all([this.$ajax.get('getimgcategory'), this.test(0)])
            .then(this.$ajax.spread((res1)=>{
                // console.log(res1,'res1')
                // console.log(res2,'res2')
                 this.category = res1.data.message
                //  this.category2 = res2.data.message
            }))
  },
  methods:{
      test(id){
         return this.$ajax.get('getimages/'+id).then(res=>{
             console.log(res,'res2')
              this.category2 = res.data.message
         })
            
      }
  }
}
</script>

<style>
.temp {
    width: 100%;
}
  .temp ul li{
      float: left;
      list-style: none;
      padding:5px;
  }
  image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>


