<template>
    <div class="header">
        <div class="logo">
            <img src="static/images/header_logo.png">
        </div>
        <div class="right">
            <div class="title">早上好，{{loginInfo.username}}（国网浙江分公司管理员）</div>
            <img src="static/images/top_more.png">
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
export default {
    data(){
        return{
            
        }
    }, 
    methods:{
         
    },
    mounted(){
        
    },
    created(){
        
    },
    computed: {
        ...mapGetters(['loginInfo'])
    },
    watch:{
        
    }
}
</script>
<style lang="sass" scoped>
    .header{
        overflow: hidden;
        width:100%;
        height:90px;
        line-height:90px;
        background-color: #012a2f;
        min-width:1200px;

        .logo {
            float:left;
            padding-left:42px;
        }

        .right{
            float:right;
            margin-right:24px;

            .title{
                font-size:18px;
                color:#22C4AC;
                float:left;
                margin-right:28px;
            }
        }
    }
    
</style>
