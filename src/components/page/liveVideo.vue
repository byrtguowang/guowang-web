<template>
    <div>
        <div class="meter-box">
            <div class="meter-left"></div>
            <div class="meter-right">
                <span>直播视频</span>
                <p>返回供应商详情 ></p>
            </div>
        </div>
        <div class="bg-box">
            <div class="bg-content">
                <div class="video-box liveVideo">
                    <div class="meter-box">
                        <div class="meter-right">
                            <span>供应商名称</span>
                            <p class="left-content name">上海供应商</p>
                        </div>
                    </div> 
                </div>
                <div class="video-box machinesNum">
                    <div class="meter-box">
                        <div class="meter-right">
                            <span>机位数量</span>
                            <p class="left-content num">6</p>
                        </div>
                    </div> 
                    <div class="jk-box">
                        <div class="bg-jk">
                            <span>单板测试监控</span>
                        </div>
                        <div class="bg-jk">
                            <span>单板测试监控</span>
                        </div>
                        <div class="bg-jk">
                            <span>单板测试监控</span>
                        </div>
                        <div class="bg-jk">
                            <span>单板测试监控</span>
                        </div>
                        <div class="bg-jk">
                            <span>单板测试监控</span>
                        </div>
                        <div class="bg-jk">
                            <span>单板测试监控</span>
                        </div>
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
    .meter-box{
        height:38px;
        font-size:0;
        div{
            display:inline-block;
        }
        .meter-left{
            width:0.8%;
            height:100%;
            vertical-align: top;
            background:#22c4ac;
        }
        .meter-right{
            font-size:22px;
            width:99.2%;
            height:100%;
            line-height:38px;
            text-align:left;
            background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
            span{
                color:#21e9cc;
                margin-left:6px;
                letter-spacing: 2px;
                font-size:20px;
            }
            p{
                float:right;
                color:#21e9cc;
                font-size:20px;
                cursor:pointer;
                margin-right:20px;
            }
        }
    }
    .bg-box{
        width:100%;
        margin-top:10px;
        text-align: -webkit-center;
        background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
        .bg-content{
            width:95%;
            display:flex;
            .video-box{
                flex:1;
                height:100%;
                margin-top:30px;
                .meter-box{
                    margin-left:35px;
                    .meter-right{
                        span{
                            color:#fff;
                            display: inline-block;
                            height: 100%;
                            margin-left: 0;
                            box-sizing: border-box;
                            width: 150px;
                            text-align: center;
                        }
                        .left-content{
                            float:right;
                            color:#fff;
                            margin-right: 20px;
                        }
                    }
                }
            }
            .liveVideo{
                .meter-right{
                    background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                    span{
                        background:#1b242d;
                        border: 1px solid #33b7a2;
                    }
                    .name{
                        font-size:18px;
                    }
                }
            }
            .machinesNum{
                .meter-box{
                    margin-left:35px;
                    .meter-right{
                        background:linear-gradient(to right, rgba(141,69,0,0.77), rgba(171,128,40,0.77), rgba(141,69,0,0.77));
                        span{
                            background: #27190e;
                            border: 1px solid #d87e10;
                        }
                        .num{
                            font-size:42px;
                        }
                    }
                }
            }
            .jk-box{
                .bg-jk{
                    display:inline-block;
                    width:300px;
                    height:150px;
                    margin-top:47px;
                    background:url(../../../static/images/liveVideo_machinesNum.png) no-repeat;
                    background-size: 100%;
                    vertical-align: top;
                    line-height: 150px;
                    cursor:pointer;
                    &:nth-child(2n){
                        margin-left:47px;
                    }
                    span{
                        color:#fff;
                        font-size:24px;
                    }
                }
            }
        }
    }
</style>
