<template>
   <div class = "tmpl">
     <nav-bar title="图文详情页"></nav-bar> 
     <h4>{{info.title}}</h4>
     <p v-html="info.content"></p>
     <!--// {{pics.w}} //-->
      <comment :cid="id"></comment>
    
     
    

   
   </div>
</template>

<script>
export default {
  data(){
      return{
        info:[],
        pics:[],
      
        id:''
      }
  },
  created(){
      let id = this.$route.params.id
      this.id = this.$route.params.id
      console.log(id,'id')
    //   getthumimages/
      

         this.$ajax.all([this.$ajax.get('goods/getdesc/'+id), this.$ajax.get('getthumimages/'+id)])
            .then(this.$ajax.spread((res1,res2)=>{
                // console.log(res1,'res1')
                // console.log(res2,'res2')
                //  this.category = res1.data.message
                //  this.category2 = res2.data.message
                 this.info = res1.data.message[0]
                 
                 this.pics = res2.data.message
                 this.pics.forEach(function(element) {
                     element.w =300
                     element.h =300
                 });
            }))


  }
}
</script>
<style>
.pics{
    width: 120px;
    height: 120px;
    padding:5px;
}
.ul-common li{
    padding:5px;
    list-style: none;
}
</style>


