<template>
    <div class="bg-box">
        <div class="table-box">
            <!-- 表计 -->
            <div class="meter-box">
                <div class="meter-left"></div>
                <div class="meter-right">
                    <span>表计</span>
                </div>
            </div>
            <div class="module">
                <div class="module-box">
                    <p>电能表</p>
                    <div class="module-content">
                        <div class="module-content-box module-content-left">
                            <div class="module-content-list">
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>国网采购订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">12280</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">当前订单号</p>
                                        <p class="orderNumber">XSD-6386fei-HDSA</p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>国网采购订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">12280</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">当前订单号</p>
                                        <p class="orderNumber">XSD-6386fei-HDSA</p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>国网采购订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">12280</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">当前订单号</p>
                                        <p class="orderNumber">XSD-6384697fwei-HFIDSA</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="module-content-box module-content-right module-content-left">
                            <div class="module-chart module-content-list">
                                 <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>国网采购订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">12280</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom module-content-list-top module-chart-bottom">
                                        <div class="module-content-list-line"></div>
                                        <p class="words-bg">当前订单号</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chart" ref="chart">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="module-box">
                    <p>机器人</p>
                    <div class="module-content robot-bg">
                        <img src="../../../static/images/robot.png" alt="">
                    </div>
                </div>
            </div>
            <div class="module">
                <div class="module-box">
                    <p>无人机</p>
                    <div class="module-content">
                        <img src="../../../static/images/UAV.png" alt="">
                    </div>
                </div>
                <div class="module-box">
                    <p>用电信息采集</p>
                    <div class="module-content">
                        <img src="../../../static/images/electricityInformation.png" alt="">
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
            option :{
                legend: {
                    data:['生产数据','报警信息'],
                    itemGap:100,
                    itemWidth:15,
                    itemHeight:15,
                    textStyle:{
                        color:'#fff'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月', '2月', '3月', '4月', '5月', '6月'],
                        axisTick:false,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,0.3)'
                            }
                        },
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick:false,
                        axisLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,0.3)'
                            }
                        },
                        splitLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,0.3)'
                            }
                        },
                    }
                ],
                series : [
                    {
                        name:'生产数据',
                        type:'bar',
                        barWidth: '18',
                        data:[10, 52, 200, 334, 390, 330],
                        itemStyle:{
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#119788'
                                    },
                                    {
                                        offset: 1,
                                        color: '#1ae7e3'
                                    }
                                ])
                            }
                        }
                    },
                    {
                        name:'报警信息',
                        type:'bar',
                        barWidth: '18',
                        data:[21, 34, 100, 300, 380, 320],
                        itemStyle:{
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#e89c00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#fecd6a'
                                    }
                                ])
                            }
                        }       
                    } 
                ]
            }
        };
    },
    mounted() {
        this.$echarts.init(this.$refs.chart).setOption(this.option);
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
    .bg-box{
        text-align:center;
        background:linear-gradient(to right, #02514c, #012a2f);
        .table-box{
            margin-left:30px;
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
                    color:#fff;
                    width:99.2%;
                    height:100%;
                    line-height:38px;
                    text-align:left;
                    background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                    span{
                        margin-left:6px;
                    }
                }
            }
            .module{
                // font-size:0;
                color:#fff;
                margin-top:20px;
                display: flex;
                .module-box{
                    display: inline-block;
                    width: 50%;
                    vertical-align: top;
                    box-sizing: border-box;
                    &:nth-child(1){
                        padding-right:16px;
                    }
                    p{
                        font-size:24px;
                        text-align: left;
                        margin-bottom:15px;
                    }
                    .module-content{
                        background:linear-gradient(to right, #035853, #139E8E,#035853);
                        height:400px;
                        display: flex;
                        .module-content-box{
                            display: inline-block;
                            width: 50%;
                            vertical-align: top;
                            box-sizing: border-box;
                            .module-content-list{
                                .module-content-list-box{
                                    margin-bottom:16px;
                                    div{
                                        display:inline-block;
                                    }
                                    .module-content-list-top{
                                        width:100%;
                                        height:70px;
                                        display:flex;
                                        .module-content-list-line{
                                            width:1%;
                                            height:100%;
                                            background:#22c4ac;
                                            vertical-align:top;
                                        }
                                        .module-content-list-words{
                                            height:100%;
                                            width:39%;
                                            background:rgba(27,35,44,0.5);
                                            border:1px solid #34b6a2;
                                            box-sizing:border-box;
                                            margin-right: 5px;
                                            p{
                                                font-size:18px;
                                                text-align:center;
                                                line-height:70px;
                                                text-align:right;
                                                margin-right:10px;
                                            }
                                        }
                                        .module-content-list-num{
                                            height:100%;
                                            width:60%;
                                            background:linear-gradient(to right, #035853, #139E8E, #035853);
                                            p{
                                                text-align:right;
                                                line-height:70px;
                                                margin-right:9px;
                                                .num{
                                                    font-size:45px;
                                                    font-family:'庞门正道标题'
                                                }
                                                .words{
                                                    font-size:18px;
                                                    color:#18BCAE;
                                                }
                                            }
                                        }
                                    }
                                    .module-content-list-bottom{
                                        width:100%;
                                        height:35px;
                                        display:flex;
                                        margin-top: 2px;
                                        .orderNumber-title{
                                            font-size: 18px;
                                            width: 40%;
                                            line-height: 35px;
                                            text-align: right;
                                            margin-right: 10px;
                                        }
                                        .orderNumber{
                                            font-size:18px;
                                            height:35px;
                                            width:60%;
                                            line-height:35px;
                                            text-align:right;
                                            padding-right:9px;
                                            background:linear-gradient(to right, rgba(141,69,0,0.77), rgba(171,128,40,0.77), rgba(141,69,0,0.77));
                                        }
                                    }
                                }
                            }
                            .module-chart{
                                flex:1;
                                .module-chart-bottom{
                                    height:46px !important;
                                    .words-bg{
                                        height:100%;
                                        width:99%;
                                        line-height:46px;
                                        font-size:18px;
                                        background:rgba(27,35,44,0.5);
                                        text-align:center;
                                    }
                                }
                            }
                            .chart{
                                height: 100%;
                            }
                        }
                        .module-content-left{
                            padding:16px 9px 0 12px;
                        }
                        .module-content-right{
                            padding:16px 8px 16px 0;
                            display:flex;
                            flex-direction:column;
                        }
                        img{
                            margin: auto;
                        }
                    }
                    .robot-bg{
                        
                    }
                }
            }
        }
    }
</style>
