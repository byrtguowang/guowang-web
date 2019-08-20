<template>
    <div class="wrap" v-scrollHeight = "0">
        <!-- <v-header></v-header>
        <v-siderbar @changePath='changePath'></v-siderbar>-->
        <v-content :path='path'></v-content> 
    </div>
</template>
// <script>
// // 头部
// import vHeader from './header';
// // 左边栏
// import vSiderbar from './siderBar'
// 主内容
import vContent from './content'

export default {
    components:{
        // vHeader,
        // vSiderbar,
        vContent
    },
    data(){
        return {
            path:{}
        }
    },
    methods:{
        changePath(){
            
        }
    },
    created(){

    },
}
</script>   
<style lang="sass" scoped>
.wrap{
    width:100%;
    // min-width:1200px; 
    min-width:1230px; 
    overflow-y: hidden;
}
</style>
