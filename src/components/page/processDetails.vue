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
                        <span>{{paramName}}</span>
                    </div>
                </div>
                <div class="box">
                    <img :src="paramSrc" alt="">
                </div>
            </div>
            <div class="video-box img-box">
                <div class="meter-box">
                    <div class="meter-left"></div>
                    <div class="meter-right">
                        <span>视频直播</span>
                        <span class="more" @click="jumpMore">更多></span>
                    </div>
                </div>
                <!-- <img src="../../../static/images/img.png" alt=""> -->
                <div class="video_box">
                    <div class="default_box" v-show="videoShow">
                        <img @click="createH5Video" src="static/images/play.png" />
                    </div>
                    <video class="h5video" id="divPlugin" v-show="!videoShow"></video>
                    <!-- <videoPlayer class="vjs-custom-skin videoPlayer" :options="playerOptions"></videoPlayer> -->
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
                                <p class="content words">本月产生的报警数量</p>
                                <p class="content num">{{month.alarm}}</p>
                                <p class="content words">本月产生的总采集数据量</p>
                                <p class="content num">{{month.sum}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="chart-box">
                        <p>当日报警</p>
                        <div class="chart-box-content">
                            <div class="chart" ref="chartBingDay"></div>
                            <div class="chart-box-font">
                                <p class="content words">当日产生的报警数量</p>
                                <p class="content num">{{day.alarm}}</p>
                                <p class="content words">当日产生的总采集数据量</p>
                                <p class="content num">{{day.sum}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 搜索框 -->
                <div class="search">
                    <div class="search-btn">
                        <span>检测结果：</span>
                        <a class="btn all" :class="activeClass == 2 ? 'activeAll':''" @click='getList(2)'>全部</a>
                        <a class="btn normal" :class="activeClass == 0 ? 'activeNormal':''" @click='getList(0)'>正常</a>
                        <a class="btn police" :class="activeClass == 1 ? 'activePolice':''" @click='getList(1)'>报警</a>
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
                            :key=Math.random()
                            label="检测时间">
                            </el-table-column>
                            <el-table-column
                            prop="conclusion"
                            align="center"
                            width="100"
                            :key=Math.random()
                            label="结论">
                            </el-table-column>
                            <el-table-column 
                            prop="basicErrorID"
                            align="center"
                            :key=Math.random()
                            label="数据编号"
                            v-if="this.category == 'D_BasicError_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="epitopCode"
                            align="center"
                            :key=Math.random()
                            label="表位号"
                            v-if="this.category == 'D_BasicError_DNB' || this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="nameplateCode"
                            align="center"
                            :key=Math.random()
                            label="局编号/下铭牌号"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="parameterName"
                            align="center"
                            :key=Math.random()
                            label="参数名称"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="parameterValue"
                            align="center"
                            :key=Math.random()
                            label="参考值"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="readValue"
                            align="center"
                            :key=Math.random()
                            label="读取值"
                            v-if="this.category == 'D_Parameter_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="checkDuration"
                            align="center"
                            :key=Math.random()
                            label="检测时长"
                            v-if="this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="voltage"
                            align="center"
                            :key=Math.random()
                            label="试验电压"
                            v-if="this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="unqualified"
                            align="center"
                            :key=Math.random()
                            label="不合格项"
                            v-if="this.category == 'D_Pressure_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="allowableError"
                            align="center"
                            :key=Math.random()
                            label="允许误差"
                            v-if="this.category == 'D_TimingError_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="realError"
                            align="center"
                            :key=Math.random()
                            label="实际误差"
                            v-if="this.category == 'D_TimingError_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="pCBCode"
                            align="center"
                            :key=Math.random()
                            label="电路板编号"
                            v-if="this.category == 'D_VeneerTest_DNB'">
                            </el-table-column>
                            <el-table-column 
                            prop="softwareVersion"
                            align="center"
                            :key=Math.random()
                            label="软件版本号"
                            v-if="this.category == 'D_VeneerTest_DNB'">
                            </el-table-column>
                            <el-table-column
                            prop="plantCode"
                            align="center"
                            :key=Math.random()
                            label="厂内编号"
                            v-if="this.category == !'D_VeneerTest_DNB'">
                            </el-table-column>
                            <el-table-column
                            prop="deviceCode"
                            align="center"
                            width="130"
                            :key=Math.random()
                            label="检定线/台体编号">
                            </el-table-column>
                            <el-table-column
                            v-if="this.category == 'D_BasicError_DNB'"
                            align="center"
                            :key=Math.random()
                            width="130"
                            label="操作">
                                <template slot-scope="scope">
                                    <a class="detailBtn" v-if="scope.row.conclusion == '报警'" @click="getBasicError(scope.row.basicErrorID)">查看详情</a>
                                </template>
                            </el-table-column>
                            <el-table-column
                            align="center"
                            :key=Math.random()
                            width="100"
                            label="">
                                <template slot-scope="scope">
                                    <div class="play-btn" v-if="scope.row.conclusion == '报警'"></div>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                            small
                            layout="prev, pager, next"
                            :current-page="pageNum"
                            @current-change="handleCurrentChange"
                            :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <!-- 基本误差详情数据列表弹框 -->
        <el-dialog
        :visible.sync="dialogVisible"
        width="54.4%">
        <div class="list">
            <div class="information_content table">
                <el-table
                    :data="basicErrorData"
                    style="width: 100%"
                    height="350px">
                    <el-table-column
                    prop="checkTime"
                    align="center"
                    width="100"
                    label="检测时间">
                    </el-table-column>
                    <el-table-column
                    prop="conclusion"
                    align="center"
                    width="100"
                    label="结论">
                    </el-table-column>
                    <el-table-column 
                    prop="testCode"
                    align="center"
                    width="100"
                    label="数据编号">
                    </el-table-column>
                    <el-table-column 
                    prop="voltage"
                    align="center"
                    width="100"
                    label="试验电压/U">
                    </el-table-column>
                    <el-table-column 
                    prop="electric"
                    align="center"
                    width="100"
                    label="测试电流/A">
                    </el-table-column>
                    <el-table-column 
                    prop="factor"
                    align="center"
                    width="100"
                    label="功率/kW">
                    </el-table-column>
                    <el-table-column 
                    prop="averageError"
                    align="center"
                    width="100"
                    label="平均误差">
                    </el-table-column>
                </el-table>
                <el-pagination
                    small
                    layout="prev, pager, next"
                    :current-page="basicErrorPageNum"
                    @current-change="basicErrorHandleCurrentChange"
                    :total="basicErrorTotal">
                </el-pagination>
            </div>
        </div>
        </el-dialog>
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
    listConcBarGraphDDataLogDNB, //24小时右侧柱状图
    listBasicErrorItems
} from '@api/processDetails'
import '../../assets/adapter.js'
import {H5sPlayerWS,H5sPlayerHls,H5sPlayerRTC} from '../../assets/h5splayer.js'
import {H5siOS,H5sPlayerCreate} from '../../assets/h5splayerhelper.js'
export default {
    components: {
		// videoPlayer
	},
    data() {
        return {
            supplierid:'1',
            category:'D_BasicError_DNB',
            supplierName:'',
            supplierAddr:'',
            paramName:'',
            paramSrc:'',
            dialogVisible:false,
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
            basicErrorData:[], //基本误差详情数据
            // conclusion:[], //0正常 1报警
            videoShow:true,
            v1:null, //视频
            total:0,
            pageNum:1,
            pageSize:10,
            basicErrorPageNum:1,
            basicErrorTotal:0,
            basicErrorPageSize:10,
            activeClass:-1,
            playerOptions: {
                height: '300',
                sources: [{
                    type: 'rtmp/mp4',
                    src: 'rtmp://47.111.186.36/oflaDemo/stream1'
                }],
                techOrder: ['flash'],
                autoplay: false,
                controls: true
            }
        };
    },
    mounted() {
        this.supplierid = sessionStorage.getItem('supplierID');
        this.category = sessionStorage.getItem('param');
        this.paramName = sessionStorage.getItem('paramName');
        this.paramSrc = "static/images/"+sessionStorage.getItem('paramSrc')+".png";
        this.supplierName = sessionStorage.getItem('supplierName');
        this.supplierAddr = sessionStorage.getItem('supplierAddr');
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
        this.getList();
    },
    methods: {
        // 分页
        handleCurrentChange(pageNum){
            this.pageNum = pageNum;
            this.getList();
        },
        // 弹框分页
        basicErrorHandleCurrentChange(pageNum){
            this.basicErrorPageNum = pageNum;
            this.getBasicError();
        },
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
                }else {
                    this.year = {
                        percentage:0,
                        alarm:0,
                        sum:0
                    }
                }
                this.$echarts.init(this.$refs.chartBingYear).setOption(this.getBingOption('#E3D824','#A79809',this.year));   
            })
        },
        
        // 月度报警
        monthData(){
            let p = {
                category: this.category,
                conclusion: "",
                supplierid: this.supplierid
            }
            TheNumberOfThisMonth(JSON.stringify(p))
            .then(res => {
                if (res.data.status === 0) {
                    this.month = res.data.data;
                } else {
                    this.month = {
                        percentage:0,
                        alarm:0,
                        sum:0
                    }
                }
                this.$echarts.init(this.$refs.chartBingMonth).setOption(this.getBingOption('#FA8A37','#BA6D35',this.month));   
            })
        },

        // 日度报警
        dayData(){
            let p = {
                category: this.category,
                conclusion: "",
                supplierid: this.supplierid
            }
            TheNumberOf(JSON.stringify(p))
            .then(res => {
                if (res.data.status === 0) {
                    this.day = res.data.data;
                    
                } else {
                    this.day = {
                        percentage:0,
                        alarm:0,
                        sum:0
                    }
                }
                this.$echarts.init(this.$refs.chartBingDay).setOption(this.getBingOption('#EF4343','#A54A4A',this.day));   
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
            if(this.time){
                if(this.time.length != 0 ){
                    startingTime = this.time[0];
                    endTime = this.time[1];
                }
            }
            let param = {
                pageNum:this.pageNum,
                pageSize:this.pageSize,
                supplierid:this.supplierid, //供应商id
                startingTime:startingTime, //开始时间
                endTime:endTime, //结束时间
                conclusion:index //检验结果 0正常 1报警
            }
            if(index == '1') this.activeClass = 1
            if(index == '0') this.activeClass = 0
            if(index == '2'){
                this.activeClass = 2
                param.conclusion = ''
            }
            // 基本误差
            if(this.category == 'D_BasicError_DNB'){
                listDBasicErrorDNB(JSON.stringify(param))
                .then(res => {
                    if(res.data.status == 0){
                        res.data.data.list.forEach(el => {
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                        this.listData = res.data.data.list
                        this.total = res.data.data.total
                        // this.listData.forEach(el => {
                        //     this.conclusion.push(el.conclusion)
                        //     if(el.conclusion == '0'){
                        //         el.conclusion = '正常'
                        //     }else{
                        //         el.conclusion = '报警'
                        //     }
                        // });
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
                        res.data.data.list.forEach(el => {
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                        this.listData = res.data.data.list
                        this.total = res.data.data.total
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
                        res.data.data.list.forEach(el => {
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                        this.listData = res.data.data.list
                        this.total = res.data.data.total
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
                        res.data.data.list.forEach(el => {
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                        this.listData = res.data.data.list
                        this.total = res.data.data.total
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
                        res.data.data.list.forEach(el => {
                            if(el.conclusion == '0'){
                                el.conclusion = '正常'
                            }else{
                                el.conclusion = '报警'
                            }
                        });
                        this.listData = res.data.data.list
                        this.total = res.data.data.total
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
                        fontSize : 18,
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
                                // name:'直接访问',
                                value:data.sum, 
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
        },
        // 播放视频
        createH5Video() {
            this.videoShow = false
            if (this.v1 != undefined)
            {
                this.v1.disconnect();
                delete this.v1;
                this.v1 = undefined;
            }
            let token = this.supplierid == '1' ? 'token2' : 'token1'
            let conf1 = {
                videoid: 'divPlugin',
                //protocol: this.$store.state.config.H5_STREAM_SERVER_PROTOCOL,
                //host: this.$store.state.config.H5_STREAM_SERVER_HOST,
                protocol: window.location.protocol,
                host: this.$vedioHost,
                rootpath: '/',
                token: token,
                hlsver: 'v1',
                session: 'c1782caf-b670-42d8-ba90-2342340ee83'
            }
            // this.v1 = H5sPlayerCreate(conf1)
            this.v1 = new H5sPlayerWS(conf1);
            this.v1.connect()
        },
        // 关闭视频
        closeH5Video() {
            if (this.v1) {
                this.v1.disconnect()
                this.v1 = null
                $(".h5video").get(0).pause()
            }
        },
        jumpMore(){
            sessionStorage.setItem('supplierID',this.supplierid)
            sessionStorage.setItem('supplierName',this.supplierName)
            sessionStorage.setItem('supplierAddr',this.supplierAddr)
            this.$router.push({
                path:'/Home/liveVideo'
            })
        },

        // 基本误差详情数据列表
        getBasicError(basicErrorID){
            this.dialogVisible = true
            listBasicErrorItems(JSON.stringify({
                pageNum:this.basicErrorPageNum,
                pageSize:this.basicErrorPageSize,
                basicerrorid:basicErrorID //数据编号
            }))
            .then(res => {
                if(res.data.status == 0){
                    this.basicErrorData = res.data.data.list
                    this.basicErrorTotal = res.data.data.total
                }else{
                    this.basicErrorData = []
                    this.basicErrorTotal = 0
                }
            })
        }
    },
    destroyed() {
        this.closeH5Video()
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
                background:#02514c;
            }
        }
        .el-pagination.el-pagination--small{
            &,* {
                background:transparent;
                color:#fff;   
            }
            .active{
                color: #409EFF;
            }
        }
        .detailBtn{
            color:#23e4c7;
            text-decoration: none;
        }
        // 弹框样式
        .el-dialog{
            background:#151a20;
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

                    .more{
                        float:right;
                        font-size:14px;
                        color:#20ad98;
                        cursor:pointer;
                        margin-right:10px;
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
                .box{
                    width:388px;
                    margin:30px 17px 15px;

                    img{
                        width:100%;
                    }
                }

                
                
                .video_box{
                    width:95%;
                    height:100%;

                    .default_box{
                        height:282px;
                        width:100%;
                        background:#000;
                        text-align:center;
                        margin-top:30px;

                        img{
                            margin-top:108px;
                            cursor:pointer;
                        }
                    }

                    .h5video{
                        width:100%;
                        margin-top:30px;
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
            display:flex;
            flex-direction:column;
        }
        .right{
            flex:2;  
            overflow-x:hidden;
            .table-box{
                width:100%;
                margin-top:8px;
                background:linear-gradient(to right, #02514c, #012a2f);
                display:flex;
                flex-direction:column;
                .chart-line{
                    height:210px;
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
                            white-space:nowrap;
                            overflow:hidden;
                        }
                    }
                }
                .chart-bing{
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
                                flex:2.6;
                                margin-right:10px;
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
                        margin-bottom: 10px;
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
                    height:40px;
                    margin-top:40px;
                    &:after{
                        content: "";
                        display: block;
                        height: 0;
                        clear:both;
                        visibility: hidden;
                    }
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
                            width:115px;
                            font-size:16px;
                            line-height:38px;
                            border-radius:20px;
                            margin-right:5px;
                            text-decoration: none;
                            &:hover{
                                color:#fff;
                            }
                        }
                        .all{
                            color:#23E4C7;
                            background:#1e7974;
                            border:1px solid #2ea995;
                            &:hover{
                                background:#1abdcd;
                            }
                        }
                        .activeAll{
                            background:#1abdcd;
                            color:#fff;
                        }
                        .normal{
                            color:#51F761;
                            background:#1f4335;
                            border:1px solid #23b989; 
                            &:hover{
                                background:#2bd127;
                            }
                        }
                        .activeNormal{
                            background:#2bd127;
                            color:#fff;
                        }
                        .police{
                            color: #ff8e8e;
                            background:#6f1515;
                            border:1px solid #db6063; 
                            &:hover{
                                background:#dd2929;
                            }
                        }
                        .activePolice{
                            background:#dd2929;
                            color:#fff;
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
