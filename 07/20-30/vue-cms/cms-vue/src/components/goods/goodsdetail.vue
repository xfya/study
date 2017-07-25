<template>
    <div class = "goods-detail">
         <nav-bar title="商品列表"></nav-bar>
        <h3>{{msg.title}}</h3>
        <lunbo :pictures="infos"></lunbo>
        <!--<p v-html="msg.content"></p>-->
    </div>
</template>
<script>
    import lunbo from '../common/lunbo.vue'
    export default {
        data() {
            return {
                msg: [],
                infos: []
            }
        },
        created() {
            let gid = this.$route.params.gid;
            console.log(gid)
            this.getGoodsDetail(gid)

            this.$ajax.get('getthumimages/' + gid)
                .then(res => {
                    console.log(res)
                    this.infos = res.data.message
                        // this.msg = res.data.message
                })

        },
        methods: {
            getGoodsDetail(gid) {
                this.$ajax.get('getimageInfo/' + gid)
                    .then(res => {
                        // console.log(res)
                        this.msg = res.data.message[0]
                    })

            }
        },
        components: {
            lunbo
        }
    }
</script>
<style>
    .goods-detail img {
        width: 100%;
    }
    
    .lunbo {
        height: 500px;
        margin-bottom: 20px;
    }
    
    .lunbo img {
        width: 100%;
    }
</style>