<template>

		<div class="mui-content">
	
			
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media"  v-for ="(item ,index)  in newlist" :key ="item.id" >
					<router-link  :to="{name:'name.newsList.article',query:{id:item.id}}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
                           
							<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
						</div>
					</router-link>
				</li>
				

			</ul>
	
		</div>
</template>
<script>
    export default {
        data() {
            return {
                newlist: ['xfa', 1]
            }
        },
        created() {
            var _this = this
            this.$ajax.get("getnewslist")
                .then((res) => {
                    // console.log(res,"123")
                    // console.log(this,_this)
                    this.newlist = res.data.message
                        // console.log( this.newlist)
                })
        },
    }
</script>

<style>

</style>