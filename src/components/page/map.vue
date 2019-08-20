<template>
    <div class="content">
        <div class="left">
            <div class="title">
                <p>概况信息</p>
            </div>
            <div class="box">
                <div class="one">
                    <div class="item">
                        <div class="head">供应商数量</div>
                        <div class="area">1280</div>
                    </div>
                    <div class="item">
                        <div class="head">智慧网关数量</div>
                        <div class="area">200</div>
                    </div>
                </div>
                <div class="two">
                    <p>订单状态</p>
                </div>
                <div class="chart-box">
                    <h4>订单完成率</h4>
                    <div class="chart"></div>
                </div>
                <div class="chart-box mb25">
                    <h4>生产监控质量</h4>
                    <div class="chart"></div>
                </div>
                <div class="three">
                    <div class="item">
                        <div class="three-left">安全运行时间</div>
                        <div class="three-area">360<p>天</p></div>
                    </div>
                    <div class="item">
                        <div class="three-left">24小时报警信息</div>
                        <div class="three-area">50<p>项</p></div>
                    </div>
                    <div class="item">
                        <div class="three-left">视频监控采集</div>
                        <div class="three-area">1350<p>机位</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="map">

            </div>
            <div class="title">
                <p>全国概况</p>
            </div>
            <div class="info">
                <div class="item">
                    <div class="info-head">当前在制产品</div>
                    <div class="info-area"><span>9999</span>台</div>
                </div>
                <div class="item">
                    <div class="info-head">销售订单</div>
                    <div class="info-area"><span>9999</span>项</div>
                </div>
                <div class="item">
                    <div class="info-head">生产订单</div>
                    <div class="info-area"><span>9999</span>项</div>
                </div>
                <div class="item">
                    <div class="info-head">工单</div>
                    <div class="info-area"><span>9999</span>项</div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <p>工艺流程</p>
            </div>
            <div class="right_box mb10">
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
    .content{
        background-color:#15181f;
        display:flex;
        color:#fff;

        .left{
            flex:1;
            margin-right:16px;

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

            .box{
                background:linear-gradient(#02514c, #012a2f);
                padding:21px 14px;

                .one{
                    display:flex;
                    margin-bottom:13px;

                    .item{
                        flex:1;

                        .head{
                            height:29px;
                            line-height:29px;
                            text-align:center;
                            border:1px solid #34b6a2;
                            border-top:2px solid #34b6a2;
                            background:#1b232c;
                        }

                        .area{
                            height:70px;
                            line-height:70px;
                            text-align:center;
                            border-left:4px solid #22c4ac;
                            border-right:4px solid #22c4ac;
                            background:linear-gradient(to right,#035853,#139e8e,#035853);
                            font-size:50px;
                        }
                    }
                    .item:first-child {
                        margin-right:27px;
                    }
                }

                .two{
                    height:33px;
                    border:1px solid #22c4ac;
                    border-left:10px solid #22c4ac;
                    background:#1b232c;
                    margin-bottom:13px;

                    p{
                        line-height:33px;
                        font-size:16px;
                        margin-left:20px;
                    }
                }

                .chart-box {
                    height:190px;

                    h4{
                        margin-left:20px;
                        margin-top:5px;
                        font-size:16px;
                        font-weight:normal;
                    }

                    .chart{
                        height:170px;
                    }
                }

                .mb{
                    margin-bottom:25px;
                }

                .three{

                    .item{
                        margin-bottom:15px;
                        width:100%;
                        display:flex;

                        .three-left{
                            width:35%;
                            height:72px;
                            line-height:72px;
                            text-align:center;
                            border:1px solid #035853;
                            border-left:2px solid #34b6a2;
                            background:#1b232c;
                        }

                        .three-area{
                            width:65%;
                            height:72px;
                            line-height:72px;
                            text-align:right;
                            background:linear-gradient(to right,#035853,#139e8e,#035853);
                            font-size:50px;
                            padding-right:15px;

                            p{
                                font-size:16px;
                                color:#aafff2;
                                float:right;
                                line-height: 100px;
                                margin-left:10px;
                            }
                        }
                    }
                    .item:first-child {
                        margin-right:27px;
                    }
                }
            }
        }

        .center{
            flex:2;
            margin-right:19px;

            .map{
                height:674px;
                background:url(../../../static/images/map_ground.png);
                background-size:100% 100%;
                margin-bottom:18px;
            }

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

            .info{
                background:linear-gradient(#02514c, #012a2f);
                padding:25px 31px 40px;
                display:flex;

                .item{
                    flex:1;
                    margin-right:23px;

                    .info-head{
                        height:23px;
                        line-height:23px;
                        text-align:center;
                        border:1px solid #34b6a2;
                        background:#1b232c;
                        color:#23e4c7;
                        font-size:16px;
                    }

                    .info-area{
                        height:75px;
                        line-height:75px;
                        text-align:center;
                        border-left:4px solid #22c4ac;
                        border-right:4px solid #22c4ac;
                        background:linear-gradient(to right,#035853,#139e8e,#035853);
                        font-size:16px;

                        span{
                            font-size:50px;
                        }
                    }
                }


                .item:last-child{
                    margin-right:0;
                }
            }
        }

        .right{
            flex:1;

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
