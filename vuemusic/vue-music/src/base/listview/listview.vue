<template>
<scroll class ="listview"  :data ="data" ref ="listview">
    <ul>
        <li v-for="group in data"  :key="group.id"
        ref="listgroup" 
       
        >
            <h2 class="list-group-title">{{group.title}}</h2>
            <ul>
                <li class="list-group-item" v-for="item in group.items " :key=""  @click="selectItem(item)">
                    <img class ="avatar" :src="item.avatar" alt="">
                    <span class="name">{{item.name}}</span>
                </li>
            </ul>
            
     
        </li>
        
    </ul>

    <div class="list-short-cut">
        <ul>
            <li  v-for ="(item , index) in shortcutList" :key="index"
             :data-index ="index"   
             @touchstart = "onShortcutTouchStart"
             @touchmove = "onShortcutTouchMove"
             :listenScroll = "listenScroll"
             @scroll="scroll"
             :probeType = "probeType"
             >
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
        data(){
            return {
                scrollY:-1,
                currentIndex:0
            }
        },
        created(){
            // 不在data 中创建 touch 中   在data 中 会自动观测 
        
            this.touch = {}
            this.listenScroll = true;
            this.listHeight = [];
            this.probeType = 3;
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
                let firstTouch = e.touches[0];
                 this.touch.y1  = firstTouch.pageY
                this.touch.anchorIndex = anchorIndex;
                
                 this._scrollTo(anchorIndex)
                 
          },
          onShortcutTouchMove(e){
               let firstTouch = e.touches[0];
              this.touch.y2  = firstTouch.pageY
              let delta = (this.touch.y2-this.touch.y1)/26 | 0;
              let anchorIndex =  this.touch.anchorIndex - 0 + delta;
               this._scrollTo(anchorIndex)
          },
          scroll(pos){
              this.scrollY = pos.y
              console.log(pos.y)
          },
          selectItem(item){
              this.$emit('select',item)
          },
          _scrollTo(anchorIndex){
            //   scrollToElement   第二个参数表示是否需要缓动函数
           this.$refs.listview.scrollToElement(this.$refs.listgroup[anchorIndex],0)

          },
          _calculateHeight(){
              this.listHeight = []
              const list = this.$refs.listgroup;
              let height = 0 ;
              this.listHeight.push(height);
              for(let i = 0 ; i < list.length;i++){
                  height += list[i].clientHeight;
                  this.listHeight.push(height)

              }
          }

        },
        watch:{
            data(){
                setTimeout(function(){
                    this._calculateHeight()
                },20)
            },
            scrollY(newY){
                alert(1)
                    const listHeight = this.listHeight
                if(newY > 0){
                     this.currentIndex = 0;
                     return;
                }

                for(let i = 0 ; i < listHeight.length;i++){
                    let height1 = listHeight[i]
                    let height2 = listHeight[i+1]
                    if(!height2 || -newY >height1 && -newY< height2){
                        this.currentIndex = i ;
                        console.log(this.currentIndex)
                    }
                }

                this.currentIndex =listHeight.length -2 ;
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