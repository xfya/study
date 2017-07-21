<template>
 <div>

       <div class="photo-list">

    <div class = "photo-header ">
         <h3> <span @click = "go" > <<< span</span>   图文分享</h3>
         <ul>
             <li  v-for="(item , index) in categorys" @click = "getCategoryId(item.id)"   :key ="item.id" >
                 {{item.title}}
                  <img v-lazy="item.img_url">
                        <p>
                            <span>{{item.title}}</span>
                            <br>
                            <span>{{item.zhaiyao}}</span>
                        </p>
             </li>
         </ul>
    </div>
    <div class="photo-list">
         <ul>
             <li  v-for="(item , index) in pics" @click = "getCategoryId(item.id)"   :key ="item.id" >
                 <span>{{item.title}} {{item.add_time}}</span> 
                 <p v-html = "item.content"></p>
             </li>
         </ul>
     </div>
     </div>
     </div>
</template>
<script>
export default {
  data(){
      return{
     categorys:[],
      pics: []
      }
  },
  created(){
    this.$ajax.get('getimgcategory')
    .then(res =>{
        // console.log(res.data.message)
        this.categorys = res.data.message;
    });





  },
  methods:{
    getCategoryId(id){
        this.$ajax.get("getnew/"+id)
            .then(res =>{
                console.log(res.data)
                this.pics = res.data.message

            })
    },
    go(){
        this.$router.go(-1)
    }
    
  }
  
}
</script>
<style scoped>
.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}
li{
    list-style: none;
   
 
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}
</style>


