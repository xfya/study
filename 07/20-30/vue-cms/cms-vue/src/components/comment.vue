<template>
  <div class ="comment">
    <div class="mui-content">
			
				<div class="mui-input-row" style="margin: 10px 5px;">
					<textarea v-model="newmsg" id="textarea" rows="5" placeholder="多行文本框"></textarea>
				</div>
               <mt-button @click = "sendMsg" type="primary">发送评论</mt-button>
		</div>


          <ul class = "ul-common">
          <li v-for="(item ,index) in common" :key="index">
              {{item.content}}
              {{item.user_name }}
              {{item.add_time | formatDate}}
          </li>
          <mt-button type="danger" @click="getComments">加载更多。。</mt-button>
          
      </ul>
      <hr/>
  </div>



</template>
<script>
import { Indicator } from 'mint-ui';
export default {
  data(){
      return{
          common:[],
          pageindex:1,
          id:this.cid,
          newmsg:''
      }
  },
  props:['cid'],
  created(){
    //   let id= this.$props.cid
     this.loadeFirst()
  },
  methods:{
      loadeFirst(){
         this.$ajax.get('getcomments/'+this.id+'?pageindex=1')
        .then(res=>{
            // console.log(res,'common')
            this.common = res.data.message
        })
      },
    getComments(){
        this.pageindex++
         this.$ajax.get('getcomments/'+this.id+'?pageindex='+ this.pageindex)
        .then(res=>{
           
            // console.log(res,'common',this.pageindex)
            if(res.data.message.length){
                this.common =this.common.concat(res.data.message)  
                
                console.log('hah ')
            }else{
                console.log('没有数据了哈')
            }
             
        })
    },
    sendMsg(){
       if( this.newmsg== '') return;
        // Indicator.open();
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
        this.$ajax.post('postcomment/'+this.id,{
            content:this.newmsg
        },{
            // headers:{
            //     'content-type':"application/x-www-form-urlencoded "
            // },
            transformRequest:function(data){
                let temp ='';
                for(var k in data){
                    temp += k +'=' + data[k] + '&';
                }
                return temp.substr(0,temp.length-1)
            }
        })
        .then(res=>{
            this.newmsg = ""
             this.loadeFirst()
             Indicator.close();
            console.log(res,'post')
        })
    }
  }
}
</script>

