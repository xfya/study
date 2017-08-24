<template>
<scroll class ="listview"  :data ="data">
    <ul>
        <li v-for = "group in data">
            <h2 class="list-group-title">{{group.title}}</h2>
            <ul>
                <li class="list-group-item" v-for = "item in group.items ">
                    <img class ="avatar" :src="item.avatar" alt="">
                    <span class="name">{{item.name}}</span>
                </li>
            </ul>
            
     
        </li>
        
    </ul>

    <div class="list-short-cut">
        <ul>
            <li v-for = "(item , index) in shortcutList">
                {{item}}
            </li>
        </ul>
    </div>
</scroll>

</template>
<script>
    import scroll from 'api/scroll/scroll.vue'
    import {getDate} from 'api/js/dom.js'
    
    export default {
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        components: {
            scroll
        },
        computed:{
            shortcutList(){
                return this.data.map((group)=>{
                    return group.title.substr(0,1)
                })
            }
        },
        methods:{
            onShortcutTouchStart(e){
                let anchorIndex = getDate(e.target,'index')
                
          
          }
        }
    }
</script>
<style >
.listview{
    height: 736px;
    position: relative;
}
.list-short-cut{
    position: absolute;
    top:20px;
    right:0;
    z-index:1000;
  
}
.list-short-cut ul{
  list-style:none;

}
.list-short-cut ul li{
    padding: 4px 8px;
}
</style>