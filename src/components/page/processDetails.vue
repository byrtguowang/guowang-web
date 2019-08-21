<template>
    <div class="bg-box" id='processDetails'>
        <div class="module left">
            <div class="meter-box">
                <div class="meter-left"></div>
                <div class="meter-right">
                    <span>工艺详情</span>
                </div>
            </div>
            <div class="img-box module">
                <div class="meter-box">
                    <div class="meter-left"></div>
                    <div class="meter-right">
                        <span>河南许继仪表公司</span>
                    </div>
                </div>
                <div class="meter-box meter-box-stranding">
                    <div class="meter-left"></div>
                    <div class="meter-right">
                        <span>绞合</span>
                    </div>
                </div>
                <!-- <img src="../../../static/images/img.png" alt=""> -->
            </div>
            <div class="video-box module img-box">
                <div class="meter-box">
                    <div class="meter-left"></div>
                    <div class="meter-right">
                        <span>视频直播</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="module right">
            <div class="meter-box">
                <div class="meter-left"></div>
                <div class="meter-right">
                    <span>生产/试验数据分析</span>
                </div>
            </div>
            <div class="table-box">
                <div class="chart-line">
                    <div class="chart-box">
                        <p>24小时监控数据</p>
                        <div class="chart" ref="chart1"></div>
                    </div>
                    <div class="chart-box">
                        <p>24小时报警监控</p>
                        <div class="chart" ref="chart2"></div>
                    </div>
                </div>
                <div class="chart-bing chart-line">
                    <div class="chart-box">
                        <p>年度报警</p>
                        <div class="chart-box-content">
                            <div class="chart" ref="chartBingYear"></div>
                            <div class="chart-box-font">
                                <p class="content words">本年产生的报警数量</p>
                                <p class="content num">1500</p>
                                <p class="content words">本年产生的总采集数据量</p>
                                <p class="content num">300</p>
                            </div>
                        </div>
                    </div>
                    <div class="chart-box">
                        <p>月度报警</p>
                        <div class="chart-box-content">
                            <div class="chart" ref="chartBingMonth"></div>
                            <div class="chart-box-font">
                                <p class="content words">本年产生的报警数量</p>
                                <p class="content num">1500</p>
                                <p class="content words">本年产生的总采集数据量</p>
                                <p class="content num">300</p>
                            </div>
                        </div>
                    </div>
                    <div class="chart-box">
                        <p>当日报警</p>
                        <div class="chart-box-content">
                            <div class="chart" ref="chartBingDay"></div>
                            <div class="chart-box-font">
                                <p class="content words">本年产生的报警数量</p>
                                <p class="content num">1500</p>
                                <p class="content words">本年产生的总采集数据量</p>
                                <p class="content num">300</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 搜索框 -->
                <div class="search">
                    <div class="search-btn">
                        <span>检测结果：</span>
                        <a class="btn all">全部</a>
                        <a class="btn normal">正常</a>
                        <a class="btn police">报警</a>
                    </div>
                    <div class="time-box">
                        <!-- <div class="block"> -->
                        <el-date-picker
                        v-model="time"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        default-value="2010-10-01">
                        </el-date-picker>
                        <!-- </div> -->
                        <a class="cha">查询</a>
                    </div>
                </div>
                <div class="list">
                    <div class="information_content table">
                        <el-table
                            :data="tableData3"
                            style="width: 100%"
                            height="100%">
                            <el-table-column
                            prop="contractNumber"
                            align="center"
                            label="国网采购合同号">
                            </el-table-column>
                            <el-table-column
                            prop="orderNumber"
                            align="center"
                            label="销售订单号">
                            </el-table-column>
                            <el-table-column
                            prop="orderQuantity"
                            align="center"
                            width="100"
                            label="订单数量">
                            </el-table-column>
                            <el-table-column
                            prop="entryName"
                            align="center"
                            label="工程项目名称">
                            </el-table-column>
                            <el-table-column
                            prop="date"
                            align="center"
                            width="100"
                            label="交货日期">
                            </el-table-column>
                            <el-table-column
                            prop="speedOfProgress"
                            align="center"
                            label="进度">
                            </el-table-column>
                        </el-table>
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
           tableData3: [{
            contractNumber:'XSDD-20170616-V4BY7V343N',
            orderNumber:'XSDD-20170616-V4BY7V343N',
            orderQuantity:9999999,
            entryName:'圆钢供应商项目项目名称',
            date: '2018-05-10',
            speedOfProgress:'66%',
            },{
            contractNumber:'XSDD-20170616-V4BY7V343N',
            orderNumber:'XSDD-20170616-V4BY7V343N',
            orderQuantity:9999999,
            entryName:'圆钢供应商项目项目名称',
            date: '2018-05-10',
            speedOfProgress:'66%',
            },{
            contractNumber:'XSDD-20170616-V4BY7V343N',
            orderNumber:'XSDD-20170616-V4BY7V343N',
            orderQuantity:9999999,
            entryName:'圆钢供应商项目项目名称',
            date: '2018-05-10',
            speedOfProgress:'66%',
            },{
            contractNumber:'XSDD-20170616-V4BY7V343N',
            orderNumber:'XSDD-20170616-V4BY7V343N',
            orderQuantity:9999999,
            entryName:'圆钢供应商项目项目名称',
            date: '2018-05-10',
            speedOfProgress:'66%',
            },{
            contractNumber:'XSDD-20170616-V4BY7V343N',
            orderNumber:'XSDD-20170616-V4BY7V343N',
            orderQuantity:9999999,
            entryName:'圆钢供应商项目项目名称',
            date: '2018-05-10',
            speedOfProgress:'66%',
            },],
            time:''
        };
    },
    mounted() {
        this.$echarts.init(this.$refs.chart1).setOption(this.getBarOption('#119788','#1ae7e3'));
        this.$echarts.init(this.$refs.chart2).setOption(this.getBarOption('#db761b','#974904'));
        this.$echarts.init(this.$refs.chartBingYear).setOption(this.getBingOption('#A79809','#E3D824'));
        this.$echarts.init(this.$refs.chartBingMonth).setOption(this.getBingOption('#BA6D35','#FA8A37'));
        this.$echarts.init(this.$refs.chartBingDay).setOption(this.getBingOption('#A54A4A','#EF4343'));

    },
    methods: {
        // 柱状图配置
        getBarOption(color1,color2){
            let option;
            option = {
                grid:{
                    top:'20%',
                    bottom:'20%'
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
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
                            show: false
                        },
                        axisTick:false,
                        axisLine:{
                            show:false
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
                        barWidth: '10',
                        data:[10, 52, 200, 334, 390, 330,89,90,78,16,179,177,179,16,18,18,329,47,83,28,39,29,10],
                        itemStyle:{
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: color1
                                    },
                                    {
                                        offset: 1,
                                        color: color2
                                    }
                                ])
                            }
                        }
                    }
                ]
            }
            return option;
        },
        // 饼状图配置
        getBingOption(color1,color2){
            let option;
            option = {
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            // emphasis: {
                            //     show: true,
                            //     textStyle: {
                            //         fontSize: '30',
                            //         fontWeight: 'bold'
                            //     }
                            // }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {
                                value:335, 
                                // name:'直接访问',
                                itemStyle:{
                                    normal: {
                                        color:color1
                                    }
                                }
                            },
                            {
                                value:310, 
                                // name:'邮件营销',
                                itemStyle:{
                                    normal: {
                                        color:color2
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
            return option;
        }
    },
       
    created() {

    },

    watch:{

    },
};
</script>
<style lang='sass'>
    .el-date-editor .el-range-input{
        color:#23E4C7;
    }
    #processDetails{
        .el-table{
            color:#23e4c7;
            thead{
                color:#20ad98;
                th{
                    border-color:#34b6a2;
                }
            }
            &:before{
                background:#34b6a2;
            }
            &,tr,th,td{
                background: transparent;
            }
            &,.el-table__body td{
                border:0;
            }
            .el-table__body-wrapper.is-scrolling-none{
                background:rgba(27,35,44,.4);
            }
            .el-table__body-wrapper.is-scrolling-none,.el-table__body{
                position:relative;
            }
            .el-table__body-wrapper.is-scrolling-none:after,
            .el-table__body:after{
                content:'';
                width:1px;
                height:100%;
                background:#34b6a2;
                position:absolute;
                right:0;
                top:0;
            }
            .el-table__body-wrapper.is-scrolling-none:before, .el-table__body:before{
                content:'';
                width:1px;
                height:100%;
                background:#34b6a2;
                position:absolute;
                left:0;
                top:0;
            }
            .el-table__body .el-table__row:nth-child(2n){
                background:linear-gradient(to right,#02514c, #012a2f);
            }
        }
    }
</style>
<style scoped lang='sass'>
    .bg-box{
        text-align:center;
        background:#151a20;
        display: flex;
        .module{
            height:350px;
            .meter-box{
                height:38px;
                display: flex;
                .meter-left{
                    flex:1;
                    height:100%;
                    vertical-align: top;
                    background:#22c4ac;
                }
                .meter-right{
                    flex:70;
                    font-size:18px;
                    color:#fff;
                    height:100%;
                    line-height:38px;
                    text-align:left;
                    background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                    span{
                        margin-left:6px;
                        color:#21e9cc;
                    }
                }
            }
            .img-box{
                background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                margin-top:8px;
                text-align:-webkit-center;
                overflow:hidden;
                .meter-box{
                    width:95%;
                    margin-top:8px;
                    .meter-right{
                        font-size:16px;
                        background:linear-gradient(to right, #035853, #139E8E, #035853);
                        span{
                            margin-left:13px;
                            color:#fff;
                        }
                    }
                }
                .meter-box-stranding{
                    height:53px;
                    .meter-left{
                        background:#f69a1b;
                    }
                    .meter-right{
                        font-size:30px;
                        line-height:53px;
                        background:linear-gradient(to right, rgba(141,69,0,0.77), rgba(171,128,40,0.77), rgba(141,69,0,0.77));
                        span{
                            margin-left:13px;
                        }
                    }
                }
            }
            .video-box{
                margin-top:8px;
            }
        }
        .left{
            flex:1;
            margin-right:8px;
        }
        .right{
            flex:2;  
            .table-box{
                width:100%;
                height:708px;
                margin-top:8px;
                background:linear-gradient(to right, #02514c, #012a2f);
                display:flex;
                flex-direction:column;
                .chart-line{
                    flex:1.5;
                    display:flex;
                    .chart-box{
                        flex:1;
                        text-align: -webkit-center;
                        .chart{
                            height:75%;
                        }
                        p{
                            font-size:16px;
                            color:#23E4c7;
                            height:36px;
                            width:170px;
                            line-height:36px;
                            background:rgba(27,35,44,0.61);
                            border:1px solid #34b6a2;
                            margin-top:5px;
                        }
                    }
                }
                .chart-bing{
                    flex:2;
                    .chart-box{
                        margin-right:5px;
                        p{
                            width:100%;
                            height:36px;
                            box-sizing:border-box;
                        }
                        .chart-box-content{
                            height:75%;
                            background:rgba(27,35,44,0.61);
                            margin-top:3px;
                            display:flex;
                            .chart{
                                flex:1.5;
                                height:100%;
                            }
                            .chart-box-font{
                                flex:2;
                                margin-right:30px;
                                .content{
                                    border:none;
                                    background:transparent;
                                    text-align:right; 
                                }
                                .num{
                                    font-size:24px;
                                    color:#fff;
                                }
                            }
                        }
                    }
                }
                .list{
                    flex:3;
                }
                .search{
                    flex:1;
                    margin-top:40px;
                    .search-btn{
                        float:left;
                        margin-left: 10px;
                        span{
                            color:#23E4C7;
                            letter-spacing: 2px;
                        }
                        .btn{
                            display:inline-block;
                            height:38px;
                            width:144px;
                            font-size:16px;
                            line-height:38px;
                            border-radius:20px;
                            margin-right:5px;
                        }
                        .all{
                            color:#23E4C7;
                            background:#1e7974;
                            border:1px solid #2ea995;
                        }
                        .normal{
                            color:#51F761;
                            background:#1f4335;
                            border:1px solid #23b989; 
                        }
                        .police{
                            color:#FF4545;
                            background:#6f1515;
                            border:1px solid #db6063; 
                        }
                    }
                    .time-box{
                        float:right;
                        margin-right:10px;
                        .cha{
                            display:inline-block;
                            height:38px;
                            width:85px;
                            background:rgba(44,32,4,0.67);
                            border:1px solid #f4aa00;
                            color:#fff;
                            line-height:38px;
                            border-radius:5px;
                            letter-spacing: 5px;
                        }
                    }
                }
            }
        }
    }
    .el-range-editor.el-input__inner{
        border-radius:10px;
        background:rgba(27,35,44,0.61);
        border:1px solid #2ea995;
    }
    
</style>
