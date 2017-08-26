<template>
<transition name="slide">    
  <div>
      123  singer-detail
  </div>

  </transition>
</template>


<script>
import {mapGetters} from "vuex"
import {getSingerDetail,getSingerDetail1} from "@/common/api/single.js"
    export default{
        computed:{
            ...mapGetters([
                "singer"
            ])
        },
        created(){
            this.getDetail()
            console.log(this.singer.id,"test vuex")
        },
        methods:{
            getDetail(){
                if(!this.singer.id){
                    this.$router.push({
                        path:'/singer'
                    })
                }
                getSingerDetail1(this.singer.id).then((res)=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style>
.slide-enter-active,.slide-leave-active{
    transition:all .3s;
}
.slide-enter,.slide-leave-to{
    transform:translate3d(100%,0,0)
}
</style>
