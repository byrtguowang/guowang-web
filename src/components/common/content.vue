<template>
    <div class="contentWrap boxSizing"  v-scrollHeight = "0">
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
    width:100%;
    min-width:1200px;
    font-size:14px;
    background:#fff;
    padding:0;
    margin: 0;
    min-height: calc(100vh);
}

.contentWrap{
  width:-moz-calc(100%);
  width:-webkit-calc(100%);
  width: calc(100%);
  height:100%;
  background:#fff;
  float:left;
  overflow: hidden;
}
 
</style>