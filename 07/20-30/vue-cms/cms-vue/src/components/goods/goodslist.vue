<template>
   <div style="height:100%">
        <nav-bar title="商品列表"></nav-bar>
        <mt-loadmore :bottom-method="loadBottom" :auto-fill='false' ref="loadmore"  @bottom-status-change="handdleBottomChange">
            <ul class="mui-table-view mui-grid-view">
                    <li v-for="goods in goodsList" :key="goods.id" class="mui-table-view-cell mui-media mui-col-xs-6">
                        <router-link :to="{name:'goods.detail',params:{gid:goods.id}}">
                            <img class="mui-media-object" :src="goods.img_url">
                            <div class="mui-media-body">{{goods.title}}</div>
                            <div class="desc">
                                <div class="sell">
                                    <span>￥{{goods.sell_price}}</span>
                                    <s>￥{{goods.market_price}}</s>
                                </div>
                                <div class="detail">
                                    <div class="hot">
                                        热卖中
                                    </div>
                                    <div class="count">
                                        剩{{goods.stock_quantity}}件
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </mt-loadmore>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                pageindex: 1,
                goodsList: []
            }
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            getGoodsList() {
                this.$ajax.get('getgoods?pageindex=' + this.pageindex).then(res => {
                    console.log(res)
                    if (!res.data.message.length) return;
                    this.pageindex++
                        this.goodsList = this.goodsList.concat(res.data.message)
                })
            },
            handdleBottomChange(s) {
                console.log(s)
            },
            loadBottom() {

                console.log(this.pageindex)
                this.getGoodsList()
                this.$refs.loadmore.onBottomLoaded()
            },

        }
    }
</script>
<style>

</style>