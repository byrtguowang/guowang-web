<template>
    <div class="contentWrap boxSizing"  v-scrollHeight = "0">
        <div class="ccid_content_off">
              内容区 可写面包屑
         </div>
        <router-view class="contentview"></router-view>
    </div>
</template>
<script>
export default {
    props:{
        path:{type:Object}
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },

    watch: {
        $route(to,from) {
            
        }
    }
}
</script>
<style lang="sass" scoped>
.contentview{
    min-width:1000px;
    font-size:14px;
    background:#fff;
    padding:0 20px 20px;
    margin: 0;
    border-right:1px solid #bacfe2;
    min-height: calc(100vh - 230px);
}

.contentWrap{
  width:-moz-calc(100% - 246px);
  width:-webkit-calc(100% - 246px);
  width: calc(100% - 246px);
  height:100%;
  background:#fff;
  float:left;
  overflow: hidden;
}
.ccid_content_off{
  width: 100%;
  height:50px;
  min-width:1010px;
  line-height: 50px;
  background-size: 100%;
  border-right:1px solid #bacfe2;
  // border-top:1px solid #bacfe2;
  background-color:#FFFFFF;
}
 
</style>