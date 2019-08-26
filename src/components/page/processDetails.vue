<template>
    <div class="bg-box" id='processDetails'>
        <div class="module left">
            <div class="meter-box">
                <div class="meter-left"></div>
                <div class="meter-right">
                    <span>工艺详情</span>
                </div>
            </div>
            <div class="img-box">
                <div class="meter-box">
                    <div class="meter-left"></div>
                    <div class="meter-right">
                        <span>{{supplierName}}</span>
                    </div>
                </div>
                <div class="meter-box meter-box-stranding">
                    <div class="meter-left"></div>
                    <div class="meter-right">
                        <span>绞合</span>
                    </div>
                </div>
                <img src="../../../static/images/img.png" alt="">
            </div>
            <div class="video-box img-box">
                <div class="meter-box">
                    <div class="meter-left"></div>
                    <div class="meter-right">
                        <span>视频直播</span>
                    </div>
                </div>
                <img src="../../../static/images/img.png" alt="">
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
                                <p class="content num">{{year.alarm}}</p>
                                <p class="content words">本年产生的总采集数据量</p>
                                <p class="content num">{{year.sum}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="chart-box">
                        <p>月度报警</p>
                        <div class="chart-box-content">
                            <div class="chart" ref="chartBingMonth"></div>
                            <div class="chart-box-font">
                                <p class="content words">本年产生的报警数量</p>
                                <p class="content num">{{month.alarm}}</p>
                                <p class="content words">本年产生的总采集数据量</p>
                                <p class="content num">{{month.sum}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="chart-box">
                        <p>当日报警</p>
                        <div class="chart-box-content">
                            <div class="chart" ref="chartBingDay"></div>
                            <div class="chart-box-font">
                                <p class="content words">本年产生的报警数量</p>
                                <p class="content num">{{day.alarm}}</p>
                                <p class="content words">本年产生的总采集数据量</p>
                                <p class="content num">{{day.sum}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 搜索框 -->
                <div class="search">
                    <div class="search-btn">
                        <span>检测结果：</span>
                        <a class="btn all" @click='getList(2)'>全部</a>
                        <a class="btn normal" @click='getList(0)'>正常</a>
                        <a class="btn police" @click='getList(1)'>报警</a>
                    </div>
                    <div class="time-box">
                        <el-date-picker v-model="time" type="daterange" align="right" start-placeholder="开始时间" end-placeholder="结束时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
                        </el-date-picker>
                        <a class="cha" @click='getList(2)'>查询</a>
                    </div>
                </div>
                <div class="list">
                    <div class="information_content table">
                        <el-table
                            :data="listData"
                            style="width: 100%"
                            height="350px">
                            <el-table-column
                            prop="checkTime"
                            align="center"
                            label="检测时间">
                            </el-table-column>
                            <el-table-column
                            prop="conclusion"
                            align="center"
                            width="100"
                            label="结论">
                            </el-table-column>
                            <el-table-column 
                            prop="basicErrorID"
                            align="center"
                            label="数据编号"
                            v-if="this.category == 'D_BasicError_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="epitopCode"
                            align="center"
                            label="表位号"
                            v-if="this.category == 'D_BasicError_DNB' || this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="nameplateCode"
                            align="center"
                            label="局编号/下铭牌号"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="parameterName"
                            align="center"
                            label="参数名称"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="parameterValue"
                            align="center"
                            label="参考值"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="readValue"
                            align="center"
                            label="读取值"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="checkDuration"
                            align="center"
                            label="检测时长"
                            v-if="this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="voltage"
                            align="center"
                            label="试验电压"
                            v-if="this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="unqualified"
                            align="center"
                            label="不合格项"
                            v-if="this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="allowableError"
                            align="center"
                            label="允许误差"
                            v-if="this.category == 'D_TimingError_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="realError"
                            align="center"
                            label="实际误差"
                            v-if="this.category == 'D_TimingError_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="pCBCode"
                            align="center"
                            label="电路板编号"
                            v-if="this.category == 'D_VeneerTest_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="softwareVersion"
                            align="center"
                            label="软件版本号"
                            v-if="this.category == 'D_VeneerTest_DNB'">
                            </el-table-column>
                            <el-table-column
                            prop="plantCode"
                            align="center"
                            label="厂内编号"
                            v-if="this.category == !'D_VeneerTest_DNB'">
                            </el-table-column>
                            <el-table-column
                            prop="deviceCode"
                            align="center"
                            width="130"
                            label="检定线/台体编号">
                            </el-table-column>
                            <!-- <el-table-column
                            align="center"
                            width="100"
                            label="">
                                <template slot-scope="scope">
                                    <div class="play-btn"></div>
                                </template>
                            </el-table-column> -->
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {
    TheAnnualNumberOf,
    TheNumberOfThisMonth,
    TheNumberOf,
    listDBasicErrorDNB,
    listDParameterDNB,
    listPressure,
    listTimingError,
    listVeneerTest,
    listCountBarGraphDDataLogDNB, //24小时左侧柱状图
    listConcBarGraphDDataLogDNB //24小时右侧柱状图
} from '@api/processDetails'
export default {
    data() {
        return {
            supplierid:'1',
            category:'D_BasicError_DNB',
            supplierName:'',
            year:{
                alarm:0,
                sum:0
            },
            month:{
                alarm:0,
                sum:0
            },
            day:{
                alarm:0,
                sum:0
            },
            time:[],
            listData:[],
            conclusion:[], //0正常 1报警
        };
    },
    mounted() {
        this.supplierid = sessionStorage.getItem('id');
        this.category = sessionStorage.getItem('param');
        this.supplierName = sessionStorage.getItem('supplierName');
        // 年度报警
        this.yearData();
        // 月度报警
        this.monthData()
        // 日度报警
        this.dayData()
        // 24小时左
        this.chartsLeft();
        // 24小时右
        this.chartsRight();
        // 列表
        this.getList()
    },
    methods: {
        // 年度报警
        yearData(){
            let p = {
                category: this.category,
                conclusion: "",
                supplierid: this.supplierid
            }
            TheAnnualNumberOf(JSON.stringify(p))
            .then(res => {
                if (res.data.status === 0) {
                    this.year = res.data.data;
                    this.$echarts.init(this.$refs.chartBingYear).setOption(this.getBingOption('#A79809','#E3D824',this.year));   
                }
            })
        },
        
        // 月度报警
        monthData(){
            let p = {
                category: this.category,
                conclusion: "",
                supplierid: this.supplierid
            }
            TheAnnualNumberOf(JSON.stringify(p))
            .then(res => {
                if (res.data.status === 0) {
                    this.month = res.data.data;
                    this.$echarts.init(this.$refs.chartBingMonth).setOption(this.getBingOption('#BA6D35','#FA8A37',this.month));   
                }
            })
        },

        // 日度报警
        dayData(){
            let p = {
                category: this.category,
                conclusion: "",
                supplierid: this.supplierid
            }
            TheAnnualNumberOf(JSON.stringify(p))
            .then(res => {
                if (res.data.status === 0) {
                    this.day = res.data.data;
                    this.$echarts.init(this.$refs.chartBingDay).setOption(this.getBingOption('#A54A4A','#EF4343',this.day));   
                }
            })
        },

        // 24小时左
        chartsLeft(){
            let param = {
                category:this.category,
                supplierid:this.supplierid
            }
            listCountBarGraphDDataLogDNB(JSON.stringify(param))
            .then(res => {
                let hour = [];
                let count = [];
                if(res.data.status == 0){
                    res.data.data.forEach(el => {
                        hour.push(el.hour)
                        count.push(el.count)
                    });
                    this.$echarts.init(this.$refs.chart1).setOption(this.getBarOption('#119788','#1ae7e3',hour,count));
                }
            })
        },

        // 24小时右
        chartsRight(){
            let param = {
                category:this.category,
                supplierid:this.supplierid
            }
            listConcBarGraphDDataLogDNB(JSON.stringify(param))
            .then(res => {
                let hour = [];
                let count = [];
                if(res.data.status == 0){
                    res.data.data.forEach(el => {
                        hour.push(el.hour)
                        count.push(el.count)
                    });
                    this.$echarts.init(this.$refs.chart2).setOption(this.getBarOption('#db761b','#974904',hour,count));
                }
            })
        },

        // 列表数据
        getList(index){
            let startingTime;
            let endTime;
            // if(this.time[0]) startingTime = this.time[0];
            // if(this.time[1]) endTime = this.time[1];
            if(this.time){
                if(this.time.length != 0 ){
                    console.log(typeof(this.time),11111)
                    console.log(this.time)
                    startingTime = this.time[0];
                    endTime = this.time[1];
                }
            }
            let param = {
                supplierid:this.supplierid, //供应商id
                startingTime:startingTime, //开始时间
                endTime:endTime, //结束时间
                conclusion:index //检验结果 0正常 1报警
            }
            if(index == '2') param.conclusion = ''
            // 基本误差
            if(this.category == 'D_BasicError_DNB'){
                listDBasicErrorDNB(JSON.stringify(param))
                .then(res => {
                    if(res.data.status == 0){
                        this.listData = res.data.data.list
                        this.listData.forEach(el => {
                            this.conclusion.push(el.conclusion)
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                    }else{
                        this.listData = []
                    }
                })
            }
            // 参数设置
            if(this.category == 'D_Parameter_DNB'){
                listDParameterDNB(JSON.stringify(param))
                .then(res => {
                    if(res.data.status == 0){
                        this.listData = res.data.data.list
                        this.listData.forEach(el => {
                            this.conclusion.push(el.conclusion)
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                    }else{
                        this.listData = []
                    }
                })
            }
            // 耐压
            if(this.category == 'D_Pressure_DNB'){
                listPressure(JSON.stringify(param))
                .then(res => {
                    if(res.data.status == 0){
                        this.listData = res.data.data.list
                        this.listData.forEach(el => {
                            this.conclusion.push(el.conclusion)
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                    }else{
                        this.listData = []
                    }
                })
            }
            // 日记时误差
            if(this.category == 'D_TimingError_DNB'){
                listTimingError(JSON.stringify(param))
                .then(res => {
                    if(res.data.status == 0){
                        this.listData = res.data.data.list
                        this.listData.forEach(el => {
                            this.conclusion.push(el.conclusion)
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                    }else{
                        this.listData = []
                    }
                })
            }
            // 电能表单板测试采集数据
            if(this.category == 'D_VeneerTest_DNB'){
                listVeneerTest(JSON.stringify(param))
                .then(res => {
                    if(res.data.status == 0){
                        this.listData = res.data.data.list
                        this.listData.forEach(el => {
                            this.conclusion.push(el.conclusion)
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                    }else{
                        this.listData = []
                    }
                })
            }
        },

        // 柱状图配置
        getBarOption(color1,color2,hour,count){
            let option;
            option = {
                grid:{
                    top:'20%',
                    bottom:'20%'
                },
                tooltip:{
                    show:true
                },
                legend: {
                    data:['生产数据'],
                    itemGap:100,
                    itemWidth:15,
                    itemHeight:15,
                    right:'10%',
                    textStyle:{
                        color:'#fff'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : hour,
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
                        barWidth: '10',
                        data:count,
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
        getBingOption(color1,color2,data){
            let option;
            option = {
                 title: {
                    text: '检测合格率',
                    subtext: data.percentage + '%',
                    x: 'center',
                    y: '35%',
                    itemGap: 10,
                    textStyle : {
                        color : '#1bd7c1',
                        fontFamily : '微软雅黑',
                        fontSize : 12,
                        fontWeight : 'normal'
                    },
                    subtextStyle:  {
                        color : '#fff',
                        fontFamily : '微软雅黑',
                        fontSize : 25,
                        fontWeight : 'normal'
                    }
                },
                tooltip:{
                    show:true
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['60%', '80%'],
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
                                value:data.sum, 
                                // name:'直接访问',
                                itemStyle:{
                                    normal: {
                                        color:color1
                                    }
                                }
                            },
                            {
                                value:data.alarm, 
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
                flex:1;
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
                img{
                    width:100%;
                }
            }
            .video-box{
                margin-top:8px;
            }
        }
        .left{
            flex:1;
            margin-right:8px;
            display:flex;
            flex-direction:column;
        }
        .right{
            flex:2;  
            .table-box{
                width:100%;
                margin-top:8px;
                background:linear-gradient(to right, #02514c, #012a2f);
                display:flex;
                flex-direction:column;
                .chart-line{
                    height:200px;
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
                            height:78%;
                            background:rgba(27,35,44,0.61);
                            margin-top:3px;
                            display:flex;
                            .chart{
                                flex:1.5;
                                height:100%;
                            }
                            .chart-box-font{
                                flex:2;
                                margin-right:14px;
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
                    padding: 2px 9px;
                    .play-btn{
                        width:18px;
                        height:18px;
                        background:url(../../../static/images/play_btn.png);
                        cursor:pointer;
                        &:hover{
                           background:url(../../../static/images/play_hover.png); 
                        }
                    }
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
                            text-decoration: none;
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
                            color: #ff8e8e;
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
        width:281px;
        height:38px;
        margin-right:5px;
    }
    
</style>
