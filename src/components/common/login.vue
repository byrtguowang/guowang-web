<template>
    <div class="login">
        <div class="logo">LOGO</div>
        <div class="system">xxx项目</div>
        <div class="login_box">
            <input  type="text" placeholder="用户名" v-model="userN"/>
            <input  type="password" placeholder="密码" v-model="passW"/>
        </div>
        <div class="login_btn" @click="login">登陆</div>
    </div>
</template>

<script>
import { 
    login, // 登录
} from '@api/ns_api/index.js'
import { setStorage } from "@common/mUtils.js";
export default {
    name: "login",
    data(){
        return{
            userN : 'admin',
            passW : '123456'
        }
    },
    methods:{
        // 登录
        login() {
            if (this.userN != ''){
                if (this.passW != ''){

                    this.$router.push({
                        path : '/Home'
                    })

                    // 请求接口演示

                    // login({
                    //     username:this.userN,
                    //     password:this.passW
                    // })
                    // .then(res =>{
                    //     if (res.data.status == 0){
                    //         setStorage('userId',res.data.data.id)
                    //         setStorage('name', res.data.data.name)
                    //         setStorage('loginName', res.data.data.loginName)

                    //         this.$router.push({
                    //             path : '/Home'
                    //         })
                    //     } else {
                    //         this.$message({
                    //             message:res.data.message,
                    //             type: 'error'
                    //         });
                    //     }
                    // })
                } else {
                    this.$message({
                        message:'请输入密码',
                        type: 'error'
                    });
                }
            } else {
                this.$message({
                    message:'请输入用户名',
                    type: 'error'
                });
            }
        }
    },
}
</script>

<style lang="sass" scoped>
.login{
    background:#44ACC8;
    text-align:center;
    padding-top:130px;
    height:calc(100vh - 130px);
}

.logo{
    margin-left:calc(100vw/2 - 29px);
    width: 58px;
    height: 58px;
    line-height: 58px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    border-radius:29px;
    color:#fff;
}

.system{
    color : #fff;
    left: 609px;
    font-size: 24px;
    font-family: SourceHanSansSC-regular;
    margin-top:50px;
}

.login_box{
    margin-top:50px;
    width: 330px;
    height: 100px;
    border-radius: 10px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    margin-left:calc(100vw/2 - 165px);
    padding : 0 5px;
    background:#fff;
}
.login_box input{
    width:100%;
    border:none;
    text-algin:center;
    height:50px;
    color:#A4A4A4;
}
.login_box input:first-child{
    border-bottom:1px solid #bbbbbb;
}

.login_btn{
    margin-top: 10px;
    width: 340px;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    background-color: #44acc8;
    text-align: center;
    margin-left: calc(100vw/2 - 165px);
    border: 2px solid white;
    color: #fff;
    font-size: 16px;
    cursor:pointer;
}
</style>
