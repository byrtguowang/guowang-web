<template>
    <div class="header">
        <div class="logo">
            <img src="static/images/header_logo.png">
        </div>
        <div class="right">
            <div class="title">早上好，{{loginInfo.username}}（国网浙江分公司管理员）</div>
            <img src="static/images/top_more.png" @click="showMenu">
            <div class="menu" v-show="menuShow">
                <h4 @click="exit">注销</h4>
                <h4 @click="home">首页</h4>
            </div>
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
            menuShow:false
        }
    }, 
    methods:{
         showMenu(){
             this.menuShow = !this.menuShow
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
                this.menuShow = false
            }).catch(() => {

            });
         },
         home(){
            this.$router.push({
                path:'/Home'
            })
            this.menuShow = false
         }
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
