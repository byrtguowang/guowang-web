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
                <div class="module-box cursor" @click="toMap">
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
                                            <p v-if="PurchasingOrder.purchaseCount>10000">
                                                <span class="num" :title="PurchasingOrder.purchaseCount">{{Math.round((PurchasingOrder.purchaseCount /10000) * 100) / 100}}</span>
                                                <span class="words">万条</span>
                                            </p>
                                            <p v-else>
                                                <span class="num">{{PurchasingOrder.purchaseCount}}</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">当前订单号</p>
                                        <p class="orderNumber">{{PurchasingOrder.purchaseOrder}}</p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>销售订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p v-if="PurchasingOrder.totalCount>10000">
                                                <span class="num" :title="PurchasingOrder.totalCount">{{Math.round((PurchasingOrder.totalCount /10000) * 100) / 100}}</span>
                                                <span class="words">万条</span>
                                            </p>
                                            <p v-else>
                                                <span class="num">{{PurchasingOrder.totalCount}}</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">订单总量</p>
                                        <p class="orderNumber">{{PurchasingOrder.materialsNumCunt}}台</p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>24小时报警</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p v-if="PurchasingOrder.alarmCount>10000">
                                                <span class="num" :title="PurchasingOrder.alarmCount">{{Math.round((PurchasingOrder.alarmCount /10000) * 100) / 100}}</span>
                                                <span class="words">万项</span>
                                            </p>
                                            <p v-else>
                                                <span class="num">{{PurchasingOrder.alarmCount}}</span>
                                                <span class="words">项</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">24小时采集数据</p>
                                        <p class="orderNumber">{{PurchasingOrder.count}}条</p>
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
                                            <p>在制品数量</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p v-if="PurchasingOrder.unFinishedCount>10000">
                                                <span class="num" :title="PurchasingOrder.unFinishedCount">{{Math.round((PurchasingOrder.unFinishedCount /10000) * 100) / 100}}</span>
                                                <span class="words">万台</span>
                                            </p>
                                            <p v-else>
                                                <span class="num">{{PurchasingOrder.unFinishedCount}}</span>
                                                <span class="words">台</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom module-content-list-top module-chart-bottom">
                                        <div class="module-content-list-line"></div>
                                        <p class="words-bg">生产数据监控</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chart" ref="chart1">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="module-box cursor">
                    <p>机器人</p>
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
                                                <span class="num">0</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">当前订单号</p>
                                        <p class="orderNumber"></p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>销售订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">订单总量</p>
                                        <p class="orderNumber">0台</p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>24小时报警</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">项</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">24小时采集数据</p>
                                        <p class="orderNumber">0条</p>
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
                                            <p>在制品数量</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">台</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom module-content-list-top module-chart-bottom">
                                        <div class="module-content-list-line"></div>
                                        <p class="words-bg">生产数据监控</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chart" ref="chart2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="module">
                <div class="module-box cursor">
                    <p>无人机</p>
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
                                                <span class="num">0</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">当前订单号</p>
                                        <p class="orderNumber"></p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>销售订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">订单总量</p>
                                        <p class="orderNumber">0台</p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>24小时报警</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">项</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">24小时采集数据</p>
                                        <p class="orderNumber">0条</p>
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
                                            <p>在制品数量</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">台</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom module-content-list-top module-chart-bottom">
                                        <div class="module-content-list-line"></div>
                                        <p class="words-bg">生产数据监控</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chart" ref="chart3">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="module-box cursor">
                    <p>用电信息采集</p>
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
                                                <span class="num">0</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">当前订单号</p>
                                        <p class="orderNumber"></p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>销售订单</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">条</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">订单总量</p>
                                        <p class="orderNumber">0台</p>
                                    </div>
                                </div>
                                <div class="module-content-list-box">
                                    <div class="module-content-list-top">
                                        <div class="module-content-list-line"></div>
                                        <div class="module-content-list-words">
                                            <p>24小时报警</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">项</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom">
                                        <p class="orderNumber-title">24小时采集数据</p>
                                        <p class="orderNumber">0条</p>
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
                                            <p>在制品数量</p>
                                        </div>
                                        <div class="module-content-list-num">
                                            <p>
                                                <span class="num">0</span>
                                                <span class="words">台</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="module-content-list-bottom module-content-list-top module-chart-bottom">
                                        <div class="module-content-list-line"></div>
                                        <p class="words-bg">生产数据监控</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chart" ref="chart4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import{
    getPurchasingOrder,
    getChartData
}from '@api/electricEnergyMeter'
export default {
    data() {
        return {
            chart1:null,
            chart2:null,
            chart3:null,
            chart4:null,
            PurchasingOrder:{},
            xData:[], //柱状图横坐标
            productionData:[], //柱状图生产数据
            alarmInformation:[] //柱状图报警信息
        };
    },
    mounted() {
        this.chart1=this.$echarts.init(this.$refs.chart1);
        this.chart2=this.$echarts.init(this.$refs.chart2);
        this.chart3=this.$echarts.init(this.$refs.chart3);
        this.chart4=this.$echarts.init(this.$refs.chart4);
        this.getPurchasingOrder();
        this.getChartData();
        
        this.chart2.setOption(this.getBarOption(
            ["2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08"],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ));
        this.chart3.setOption(this.getBarOption(
            ["2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08"],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ));
        this.chart4.setOption(this.getBarOption(
            ["2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08"],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ));


        window.onresize=()=>{
            this.chart1.resize();
            this.chart2.resize();
            this.chart3.resize();
            this.chart4.resize();
        }
        
    },
    methods: {
        // 获取数据
        getPurchasingOrder(){
            getPurchasingOrder({})
            .then(res => {
                if(res.data.status == 0) this.PurchasingOrder = res.data.data
            })
        },
        // 获取柱状图数据
        getChartData(){
            getChartData({})
            .then(res => {
                if(res.data.status == 0){
                    res.data.data.forEach(el => {
                        this.xData.push(el.month)
                        this.productionData.push(el.count)
                        this.alarmInformation.push(el.count1)
                    });
                    this.chart1.setOption(this.getBarOption(
                        this.xData,this.productionData,this.alarmInformation
                    ));

                }
            })
        },
        // 柱状图配置
        getBarOption(xData,productionData,alarmInformation){
            let option;
            option = {
                legend: {
                    data:['生产数据','报警信息'],
                    itemGap:100,
                    itemWidth:15,
                    itemHeight:15,
                    textStyle:{
                        color:'#fff'
                    }
                },
                grid:{
                    left:'21%'
                },
                tooltip:{
                    show:true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : xData,
                        axisTick:false,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'rgba(255,255,255,0.5)'
                            }
                        },
                        axisLabel: {
                            interval:0, // 横轴信息全部显示
                            rotate: 30 // 旋转30度角
                        }
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
                                color:'rgba(255,255,255,0.5)'
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
                        name: '生产数据',
                        type: 'bar',
                        barWidth: '18',
                        data: productionData,
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
                        data: alarmInformation,
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
            return option;
        },
        // 跳转
        toMap(){
            this.$router.push({
                path:'/Home/map',
            })
        }
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
                        letter-spacing: 2px;
                    }
                }
            }
            .module{
                color:#fff;
                margin-top:10px;
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
                        height:360px;
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
                                        height:60px;
                                        display:flex;
                                        .module-content-list-line{
                                            width:1%;
                                            height:100%;
                                            background:#22c4ac;
                                            vertical-align:top;
                                        }
                                        .module-content-list-words{
                                            height:100%;
                                            width:43%;
                                            background:rgba(27,35,44,0.5);
                                            border:1px solid #34b6a2;
                                            box-sizing:border-box;
                                            margin-right: 5px;
                                            p{
                                                font-size:18px;
                                                text-align:center;
                                                line-height:60px;
                                                text-align:right;
                                                margin-right:10px;
                                                font-weight: bold;
                                                white-space: nowrap;
                                            }
                                        }
                                        .module-content-list-num{
                                            height:100%;
                                            width:56%;
                                            background:linear-gradient(to right, #035853, #139E8E, #035853);
                                            p{
                                                text-align:center;
                                                line-height:60px;
                                                position:relative;
                                                .num{
                                                    font-size:44px;
                                                    font-family:'ZhanKuQingKeHuangYou';
                                                }
                                                .words{
                                                    font-size:16px;
                                                    line-height:1;
                                                    height:16px;
                                                    color:#58fff1;
                                                    position:absolute;
                                                    right:6px;
                                                    bottom:24px;
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
                                            font-size: 16px;
                                            width: 44%;
                                            line-height: 35px;
                                            text-align: right;
                                            margin-right: 10px;
                                        }
                                        .orderNumber{
                                            font-size:18px;
                                            height:35px;
                                            width:56%;
                                            line-height:35px;
                                            text-align:right;
                                            padding-right:9px;
                                            background:linear-gradient(to right, rgba(141,69,0,0.77), rgba(171,128,40,0.77), rgba(141,69,0,0.77));
                                        }
                                    }
                                }
                            }
                            .module-chart{
                                // flex:1;
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
                                height: 235px;
                            }
                        }
                        .module-content-left{
                            padding:16px 9px 0 12px;
                        }
                        .module-content-right{
                            padding:16px 8px 16px 0;
                            // display:flex;
                            // flex-direction:column;
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
