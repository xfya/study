<template>
   <div class="newsdetail">
        <nav-bar title="新闻详情页"></nav-bar> 
      <h3 v-text ="infoes.title"></h3>
      <p>{{infoes.add_time | formatDate}}    点击次数{{infoes.click}}</p>
      <p v-html="infoes.content"></p>
   </div>
</template>

<script>
export default {
    data(){
        return{
            infoes:[]
        }
    },
    created(){
        let id = this.$route.query.id;
        console.log(id)
        this.$ajax.get('getnew/'+ id).then(res=>{
            // console.log(res.data.message[0])
            this.infoes = res.data.message[0]
        })
    },

}
</script>
<style>
.newsdetail img{
    width: 100%;
}
</style>


