<template>
<div class="supplier_information">
    <div class="information_top mb10">
        <div class="left">
            <div class="title">
                <p>供应商信息</p>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <p>工艺流程</p>
            </div>
            <div class="right_box">
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">PCB板贴片检测</div>
                    <div class="gj_btn">0项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">单板测试</div>
                    <div class="gj_btn">2项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">电流测试</div>
                    <div class="gj_btn">3项告警</div>
                </div>
            </div>
        </div>
    </div>
    <div class="information_bottom">
        <div class="left">
            <div class="title">
                <p>销售订单信息</p>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <p>实验数据</p>
            </div>
            <div class="right_box scroll_h">
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">耐压试验</div>
                    <div class="gj_btn">3项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">基本误差</div>
                    <div class="gj_btn">3项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">电流测试</div>
                    <div class="gj_btn">3项告警</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    mounted() {

    },
    methods: {

    },
       
    created() {
      
    },

    watch:{

    },
};
</script>

<style scoped lang='sass'>
.supplier_information{
    
    background-color:#15181f;
    color:#fff;
    // title样式
    .title{
        height:37px;
        border-left:10px solid #22c4ac;
        background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
        margin-bottom:11px;

        p{
            line-height:37px;
            color:#27F0D2;
            font-size:18px;
            margin-left:20px;
        }
    }
    .information_top,.information_bottom{
        display:flex;
    }
    //左右布局的样式
    .left{
        flex:3;
        margin-right:20px;
    }
    .right{
        flex:1;
        .right_box{
            background:linear-gradient(#02514c, #012a2f);
            padding:12px;
            display:flex;
            flex-wrap:wrap;
            .item{
                width:49%;
                padding-right:1%;
                margin-bottom:10px;
                
                img{
                    height:128px;
                    width:100%;
                }

                .gj_name{
                    height:31px;
                    line-height:31px;
                    text-align:center;
                    color:#dcdcdc;
                    border:1px solid #f59a1b;
                    background:#011c1c;
                }

                .gj_btn{
                    height:33px;
                    line-height:33px;
                    text-align:center;
                    border-left:3px solid #f59a1b;
                    border-right:3px solid #f59a1b;
                    background:linear-gradient(to right,rgba(141,69,0,0.57),rgba(171,128,40,0.57),rgba(141,69,0,0.57));
                    font-size:16px;
                    color:#fff;
                }
            }
        }
        .mb10{
            margin-bottom:10px;
        }
        .scroll_h{
            height:340px;
            overflow-y: scroll;
        }
    }
}
</style>