<template>
    <div class="login" id="login">
        <div class="login_logo">
            <img src="static/images/logo.png" alt="">
        </div>
        <div class="login_content">
            <div class="form_item">
                <label for="username">用户名</label>
                <input type="text" ref="username" v-model="username" placeholder="请填写用户名">
            </div>
            <div class="form_item">
                <label for="password">密&nbsp;&nbsp;&nbsp;码</label>
                <input type="password" ref="password" v-model="password" placeholder="请填写密码">
            </div>
            <div class="form_item">
                <label>角&nbsp;&nbsp;&nbsp;色</label>
                <el-select v-model="role" placeholder="请选择角色">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form_remanber cursor" @click="chnageCheck">
                <img src="static/images/sure.png" alt="" v-if="isActive">
                <img src="static/images/no_sure.png" alt="" v-else>
                记住登录信息
            </div>
            <div class="form_btn cursor" @click="loginIn"></div>
        </div>
        <p class="login_footer">
            2009-2019&nbsp;TJ-BYRT.com&nbsp;版权所有&nbsp;ICP证：京B2-2008010
        </p>
    </div>
</template>
<script>
import {
    login
} from '@api/login'
import {
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    data(){
        return {
            options: [
                {value: '1',label: '物资处'},
            ],
            isActive:true,
            username:'',
            password:'',
            role:'1',
        }
    },
    computed: {
        ...mapGetters(['loginInfo'])
    },
    methods:{
        ...mapMutations({
            setlogin: 'SET_LOGIN_DATA'
        }),
        chnageCheck(){
            this.isActive=!this.isActive;
        },
        async loginIn(){
            if(!this.username){
                this.$message({
                    type:'warning',
                    message:'用户名输入不能为空，请输入！'
                });
                this.$refs.username.focus();
                return;
            }
            if(!this.password){
                this.$message({
                    type:'warning',
                    message:'密码输入不能为空，请输入！'
                });
                this.$refs.password.focus();
                return;
            }
            const obj={
               username:this.username, 
               password:this.password,
               rememberMe:this.role
            }
            , {data}=await login(obj);
            if(data.status==='0'||data.status===0){
                this.setlogin({
                    loginName:this.username, 
                    username:data.data.name,
                    password:this.isActive?this.password:'',
                    rememberMe:this.role,
                });
                this.$router.push({
                    path:'/Home'
                })
            }else this.$message({
                type:'error',
                message:data.message
            })
        }
    },
    mounted(){
        let {loginName,password,rememberMe}=this.loginInfo;
        this.username=loginName;
        this.password=password;
        this.role=rememberMe||'1';
    }
}
</script>
<style lang="sass">
.el-select-dropdown.el-popper{
    background: #093132;
    border:1px solid #0f7079;
}
#login{
    width:100%;
    height:100%;
    background:url(../../../static/images/login_bg.png) no-repeat;
    background-size: 100% 100%;
    overflow:hidden;
    .login_logo,.login_content{
        width:35%;
        box-sizing: border-box;
        margin:0 auto;
        min-width:550px;
    }
    @media (max-width: 1366px) {
        .login_logo{
            margin:80px auto 13px;
        }
    }
    @media (min-width:1440px){
        .login_logo{
            margin:120px auto 33px;
        }
    }
    @media (min-width:1920px){
        .login_logo{
            margin:277px auto 43px;
        }
    }
    .login_logo{
        padding:0 20px;
        img{
            width:100%;
            height:auto;
        }
    }
    .login_content{
        padding:60px 104px 67px 104px;
        background:url(../../../static/images/login_content_bg.png) no-repeat;
        background-size: 100% 100%;
        .form_item{
            margin-bottom:28px;
            display:flex;
            align-items:center;
            padding:0 33px 0 20px;
            label{
                font-size:18px;
                color:#42f2e7;
                margin-right:27px;
                white-space: nowrap;
            }
            input{
                font-size:16px;
                background: #093132;
                flex:1;
                height:40px;
                border:1px solid #0f7079;
                padding:0 17px;
                box-sizing: border-box;
                color:#05dfd1;
                border-radius: 4px;
            }
            .el-select{
                width:100%;
            }
            input:-webkit-autofill,
            textarea:-webkit-autofill,
            select:-webkit-autofill {
                -webkit-box-shadow: 0 0 0 1000px #093132 inset;
                -webkit-text-fill-color: #05dfd1;
            }
        }
        .form_remanber{
            font-size:16px;
            color:#43c4d1;
            img{
                width:16px;
                height:16px;
                vertical-align: middle;
                margin:0 18px 0 62px;
            }
        }
        .form_btn{
            margin-top:31px;
            height:60px;
            width:100%;
            background:url(../../../static/images/login_sure_btn.png) no-repeat;
            background-size: 100% 100%;
        }
    }
    .login_footer{
        width:100%;
        position:fixed;
        bottom:34px;
        text-align: center;
        color:#0e8a7d;
    }
}
</style>
