<template>
    <div class="header">
        <div class="logo">
            <img src="static/images/header_logo.png">
        </div>
        <div class="right">
            <div class="title">早上好，{{loginInfo.username}}（国网浙江分公司管理员）</div>
            <img src="static/images/top_more.png" @click.stop="showMenuFn">
            <div class="menu" v-show="hideMenuList">
                <h4 @click="exit">注销</h4>
                <h4 @click="changeRoute('electricEnergyMeter',1)">品类选择</h4>
                <h4 @click="changeRoute('salesOrderInformation',1)">销售订单</h4>
                <h4 v-if="showMenu" @click="changeRoute('supplierInformation')">供应商主页</h4>
                <h4 v-if="showMenu" @click="changeRoute('liveVideo')">生产视频监控</h4>
                <h4 v-if="showMenu" @click="changeRoute('productionQualityDaily')">生产质量日报</h4>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    data(){
        return{
        }
    },
    methods:{
        ...mapMutations({
            hideMenuFn:'SET_MENU_LIST'
        }),
         showMenuFn(){
            this.hideMenuFn(!this.hideMenuList);
         },
         exit(){
            this.$confirm('确定要注销吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                this.$router.push({
                    path:'/login'
                })
            }).catch(() => {

            });
         },
         changeRoute(path,params){
            if(params){
                window.sessionStorage.setItem('supplierName','');
                window.sessionStorage.setItem('supplierID','');
                window.sessionStorage.setItem('supplierAddr','');
            }
            this.$router.push({
                path:path
            })
         },
    },
    mounted(){
    },
    computed: {
        ...mapGetters(['loginInfo','showMenu','hideMenuList'])
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

            img{
                cursor: pointer;
            }

            .menu{
                position:absolute;
                right: 20px;
                top: 65px;
                border:1px solid #035853;
                z-index:999;

                h4{
                    background:#035853;
                    height:30px;
                    line-height:30px;
                    cursor: pointer;
                    color:#fff;
                    padding:5px 40px;
                }

                h4:hover{
                    background:#139E8E;
                }
            }

        }
    }
    
</style>
