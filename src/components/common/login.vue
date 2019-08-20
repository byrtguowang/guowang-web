<template>
    <div class="login" id="login">
        <!-- <div>
            <img src="./static/images/" alt="">
        </div> -->
        <div class="login_content">
            <div>
                <label for="username">用户名</label>
                <input type="text" id="username">
            </div>
            <div>
                <label for="password">密&nbsp;码</label>
                <input type="text" id="password">
            </div>
            <div>
                <label for="password">角&nbsp;色</label>
                <input type="text" id="password">
            </div>
        </div>
        <p class="login_footer">
            2009-2019&nbsp;TJ-BYRT.com&nbsp;版权所有&nbsp;ICP证：京B2-2008010
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dynamicValidateForm:{
                userName:'',
                passWord:'',
                pro:'',
            }
        }
    }
}
</script>
<style lang="sass">
#login{
    width:100%;
    height:100%;
    background:url(../../../static/images/login_bg.png) no-repeat;
    background-size: 100% 100%;
    overflow:hidden;
    .demo-dynamic{
        width:40%;
        background:url(../../../static/images/login_content_bg.png) no-repeat;
        background-size: 100% 100%;  
        margin:50px auto 0;
        .el-form-item {
            margin-bottom: 28px;
            .el-form-item__label{
                font-size:18px;
                color:#42f2e7;
            }
            .el-input__inner{
                background: #093132;
            }
            .el-button.el-button--primary{
                border:0;
                height:60px;
                width:100%;
                background:url(../../../static/images/login_sure_btn.png) no-repeat;
                background-size: 100% 100%;
            }   
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

// .logo{
//     margin-left:calc(100vw/2 - 29px);
//     width: 58px;
//     height: 58px;
//     line-height: 58px;
//     text-align: center;
//     border: 1px solid rgba(187, 187, 187, 1);
//     border-radius:29px;
//     color:#fff;
// }

// .system{
//     color : #fff;
//     left: 609px;
//     font-size: 24px;
//     font-family: SourceHanSansSC-regular;
//     margin-top:50px;
// }

// .login_box{
//     margin-top:50px;
//     width: 330px;
//     height: 100px;
//     border-radius: 10px;
//     text-align: center;
//     border: 1px solid rgba(187, 187, 187, 1);
//     margin-left:calc(100vw/2 - 165px);
//     padding : 0 5px;
//     background:#fff;
// }
// .login_box input{
//     width:100%;
//     border:none;
//     text-algin:center;
//     height:50px;
//     color:#A4A4A4;
// }
// .login_box input:first-child{
//     border-bottom:1px solid #bbbbbb;
// }

// .login_btn{
//     margin-top: 10px;
//     width: 340px;
//     height: 50px;
//     line-height: 50px;
//     border-radius: 10px;
//     background-color: #44acc8;
//     text-align: center;
//     margin-left: calc(100vw/2 - 165px);
//     border: 2px solid white;
//     color: #fff;
//     font-size: 16px;
//     cursor:pointer;
// }
</style>
