<template>
  <div id="currentTime"> 
      <span>{{dataShu}}</span>
        <div class="ccid_name">
            <div class="wrapper" >
                <div class="nav-item" :class='{active: index == nowIndex}' v-for='(tabItem,index) in tabParams' :key="index" @click='tabToggle(index)'>
                    <span :class='{dropdownBtn: index == 0}'  @click='dropdown'>{{tabItem}}</span>
                      <ul v-if='index == 0' class="dropdownWrapper" v-show='dropdownActive'>
                         <li v-for='(item, index) in dropParams' :key="index"><a :href="item.url" style="color:#666666;">{{item.text}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
  </div>
</template>

<script> 
export default {
  data () {
    return {  
      time:new Date(),
      dataShu:'',
      nowIndex: 0,
      dropdownActive: false,
      tabParams: ['其他系统快捷入口'],
      dropParams: [{
        text:'企业准入',
        url:'http://gg.miit-csip.org.cn/enterprise/ccidSaiDi/dist/#/Home/infMaintenanceEntry'
      }]
    }
  },
  methods:{
  	 dropdown: function(){
      console.log(event.target.getAttribute('class'))
      if(event.target.getAttribute('class') === 'dropdownBtn') {
         this.dropdownActive = !this.dropdownActive;
         }
       },
    tabToggle: function(index){
          this.nowIndex = index;
           if(index === 0){
             return
         }else {
           this.dropdownActive = false;
                }
            }
  },
  created(){   
    
    this.dataShu=this.time.getFullYear()+"年"+" "+(this.time.getMonth()+1)+"月"+this.time.getDate()+"日"+" "+"星期"+(this.time.getDay()=='1'?'一':
            this.time.getDay()=='2'?'二':this.time.getDay()=='3'?'三':this.time.getDay()=='4'?'四':this.time.getDay()=='5'?'五':this.time.getDay()=='6'?'六':this.time.getDay()=='7'?'日':'') 

  }
}
</script>

<style scoped lang='sass'> 
 #currentTime{
  padding-left: 10px;
  min-width:1100px;
  span{
      color:#576A7B;
      font-size:12px;
      font-family: "欸软雅黑 Regular", 欸软雅黑;
      font-weight: 400;
  }
  
 }


.ccid_name{
  float: right;
  margin-right:20px;
}

/* xiala */

    .wrapper>div {
        text-align: center;
        height: 36px;
    }
    .dropdownWrapper {
        font-size: 14px;
    }
    .dropdownWrapper li {
        display: block!important;
        background:#edf2f8;
        padding:5px;
        margin-top:-7px;
    }

    .dropdownBtn {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .nav-item {
        cursor: pointer;
    }
 </style>