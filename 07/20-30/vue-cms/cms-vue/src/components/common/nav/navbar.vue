<template>
  <div>
    <header class="headercommon"  >
			<a @click = "goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title" >{{title}}</h1>
	</header>
      
  </div>
</template>
<script>

        export default {
            methods:{
                goback(){
                        this.$router.go(-1)
                },

            },
            data(){
                return{
                    test:'[]'
                }
            },
            created(){
              
            },
            props:['title']
        
        }
</script>
<style scoped>
.headercommon{
    height: 50px;
    background:rgba(125,123,456,.5)
}
.headercommon a{
    width: 20px;
    height: 20px;
    display: block;
    z-index: 10;
    position: relative;
    padding: 10px;
}
</style>


