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
                        <div class="area_wan" v-if="leftData['供应商数量']>10000">
                            <span :title="leftData['供应商数量']">{{Math.round((leftData['供应商数量'] /10000) * 100) / 100}}</span>
                            <span>万个</span>
                        </div>
                        <div class="area" v-else>{{leftData['供应商数量']}}<span>个</span></div>
                    </div>
                    <div class="item">
                        <div class="head">智慧网关数量</div>
                        <div class="area_wan" v-if="leftData['智慧网关数量']>10000">
                            <span :title="leftData['智慧网关数量']">{{Math.round((leftData['智慧网关数量'] /10000) * 100) / 100}}</span>
                            <span>万个</span>
                        </div>
                        <div class="area" v-else>{{leftData['智慧网关数量']}}<span>台</span></div>
                    </div>
                </div>
                <div class="two">
                    <p>订单状态</p>
                </div>
                <div class="chart-box">
                    <h4>订单完成率</h4>
                    <div class="chart" ref="myEchartLine"></div>
                </div>
                <div class="chart-box mb25">
                    <h4>生产监控质量</h4>
                    <div class="chart" ref="myEchartLine2"></div>
                </div>
                <div class="three">
                    <div class="item">
                        <div class="three-left">安全运行时间</div>
                        <div class="three-area">{{leftDownData['安全运行时间']}}<p>天</p></div>
                    </div>
                    <div class="item">
                        <div class="three-left">24小时<br/>报警信息</div>
                        <div class="three-area">{{leftDownData['24小时报警信息']}}<p>项</p></div>
                    </div>
                    <div class="item">
                        <div class="three-left">视频监控采集</div>
                        <div class="three-area">{{leftDownData['视频监控采集']}}<p>机位</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="select">
                <div class="selected">
                    <span><input style="width:80%;" :placeholder="mapOneData.supplierName" @input="select" v-model="inputValue"></span>
                    <img src="static/images/pull.png">
                </div>
                <div class="options" v-show="selectShow">
                    <span @click="selectOver(index)" v-for="(item,index) of suppliersList" :key="index">{{item.supplierName}}</span>
                </div>
            </div>
            <div class="map" ref="myEchart">
                
            </div>
            <div v-show="showPop" class="map_pop">
                <div class="close" @click="closeDetail">X</div>
                <div class="header_name">
                    <span class="cursor" @click="jump()">{{mapOneData.supplierName}}</span>
                </div>
                <div class="map_popbox">
                    <p>地址：<span>{{mapOneData.supplierAddress}}</span></p>
                    <!-- <p>区域：<span>{{mapOneData.supplierCode}}</span></p>
                    <p>品类：<span>{{mapOneData.supplierCode}}</span></p>
                    <p>级别：<span>{{mapOneData.supplierCode}}</span></p> -->
                </div>
                <div class="map_btnbox">
                    <a class="pop_btn" @click="jump()">详情</a>
                </div>
            </div>
            <div class="title">
                <p>全国概况</p>
            </div>
            <div class="info">
                <div class="item">
                    <div class="info-head">当前在制产品</div>
                    <div class="area_wan" v-if="centerData['当前在制品数量']>10000">
                        <span :title="centerData['当前在制品数量']">{{Math.round((centerData['当前在制品数量'] /10000) * 100) / 100}}</span>
                        <span>万台</span>
                    </div>
                    <div class="info-area" v-else>{{centerData['当前在制品数量']}}<span>台</span></div>
                </div>
                <div class="item">
                    <div class="info-head">销售订单</div>
                    <div class="area_wan" v-if="centerData['销售订单数量']>10000">
                        <span :title="centerData['销售订单数量']">{{Math.round((centerData['销售订单数量'] /10000) * 100) / 100}}</span>
                        <span>万项</span>
                    </div>
                    <div class="info-area" v-else>{{centerData['销售订单数量']}}<span>项</span></div>
                </div>
                <div class="item">
                    <div class="info-head">生产订单</div>
                    <div class="area_wan" v-if="centerData['生产订单数量']>10000">
                        <span :title="centerData['生产订单数量']">{{Math.round((centerData['生产订单数量'] /10000) * 100) / 100}}</span>
                        <span>万项</span>
                    </div>
                    <div class="info-area" v-else>{{centerData['生产订单数量']}}<span>项</span></div>
                </div>
                <div class="item">
                    <div class="info-head">工单</div>
                    <div class="area_wan" v-if="centerData['工单数量']>10000">
                        <span :title="centerData['工单数量']">{{Math.round((centerData['工单数量'] /10000) * 100) / 100}}</span>
                        <span>万项</span>
                    </div>
                    <div class="info-area" v-else>{{centerData['工单数量']}}<span>项</span></div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <p>工艺流程</p>
            </div>
            <div class="right_box mb10">
                <div class="item">
                    <img src="static/images/PCB.jpg" >
                    <div class="gj_name">PCB板贴片检测</div>
                    <div class="gj_btn cursor" @click="jump2('','PCB板贴片检测','PCB2')">{{processList['PCB板贴片检测']||0}}项警告</div>
                </div>
                <div class="item">
                    <img src="static/images/Veneer.jpg" >
                    <div class="gj_name">单板测试</div>
                    <div class="gj_btn cursor" @click="jump2('D_VeneerTest_DNB','单板测试','Veneer2')">{{processList['单板测试']||0}}项警告</div>
                </div>
                <div class="item">
                    <img src="static/images/Battery.jpg" >
                    <div class="gj_name">电池电流测试</div>
                    <div class="gj_btn cursor" @click="jump2('','电流测试','Battery2')">{{processList['电流测试']||0}}项警告</div>
                </div>
            </div>
            <div class="title">
                <p>实验数据</p>
            </div>
            <div class="right_box scroll_h">
                <div class="item">
                    <img src="static/images/Pressure.jpg" >
                    <div class="gj_name">耐压试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_Pressure_DNB','耐压试验','Pressure2')">{{processList['耐压试验']||0}}项警告</div>
                </div>
                <div class="item">
                    <img src="static/images/BasicErrorTest.jpg" >
                    <div class="gj_name">基本误差试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_BasicError_DNB','基本误差试验','BasicErrorTest2')">{{processList['基本误差试验']||0}}项警告</div>
                </div>
                <div class="item">
                    <img src="static/images/DailyTiming.jpg" >
                    <div class="gj_name">日计时误差试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_TimingError_DNB','日计时误差试验','DailyTiming2')">{{processList['日计时误差试验']||0}}项警告</div>
                </div>
                <div class="item">
                    <img src="static/images/Parameter.jpg" >
                    <div class="gj_name">参数设置</div>
                    <div class="gj_btn cursor" @click="jump2('D_Parameter_DNB','参数设置','Parameter2')">{{processList['参数设置']||0}}项警告</div>
                </div>
                <div class="item">
                    <img src="static/images/Port.jpg" >
                    <div class="gj_name">通信端口检验</div>
                    <div class="gj_btn cursor" @click="jump2('','通信端口检验','Port2')">{{processList['通信端口检验']||0}}项警告</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from "echarts";
import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据

import {
    getNumberOfSuppliers,
    getOperatingStatus,
    getProductionControl,
    getOrderCompletionRate,
    getQualityControl,
    getSuppliersList
} from '@api/map'
import {
    getProductionProcess,//三维生产工艺
} from '@api/supplierInformation'
export default {
    data() {
        return {
            chart: null,
            showPop:false,
            selectShow:false,
            leftData:{},//左上
            leftDownData:{}, //左下
            centerData:{}, //中下
            suppliersList:[], //供应商数据
            mapData:[], //地图数据
            mapOneData:{}, //选中的一条数据
            processList:{},
            inputValue:'',// 搜索框的值
        };
    },
    mounted() {
        // 左上部 概况
        this.getNumberOfSuppliers();
        // 左下部 运行状态
        this.getOperatingStatus();
        // 中间下部 生产监控
        this.getProductionControl();
        // 左中部 订单状态 订单完成率
        this.getOrderCompletionRate();
        // 左中部 订单状态 生产质量监控
        this.getQualityControl();
        // 地图
        this.getMapChart();
        
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
        // 左上部 概况
        getNumberOfSuppliers(){
            getNumberOfSuppliers({})
            .then(res => {
                if (res.data.status === 0) {
                    this.leftData = res.data.data
                }
            })
        },

        // 左下部 运行状态
        getOperatingStatus(){
            getOperatingStatus({})
            .then(res => {
                if (res.data.status === 0) {
                    this.leftDownData = res.data.data
                }
            })
        },

        // 中间下部 生产监控
        getProductionControl(){
            getProductionControl({})
            .then(res => {
                if (res.data.status === 0) {
                    this.centerData = res.data.data
                }
            })
        },

        // 获取地图
        getMapChart(){
            let p = {
                coordinate: [],
                createTime: "",
                createUser: "",
                remark: "",
                supplierAddress: "",
                supplierCode: "",
                supplierID: 0,
                supplierName: ""
            }
            getSuppliersList(JSON.stringify(p))
            .then(res => {
                if (res.data.status === 0) {
                    this.mapData = res.data.data;
                    this.suppliersList = this.mapData;
                    if (this.mapData.length>0){
                        this.mapOneData = this.mapData[0];
                        this.showPop = true
                    }
                    this.chinaConfigure()
                    this.getProductionProcess();
                }
            })
        },

        // 关闭详情
        closeDetail(){
            this.showPop = false;
        },

        //三维生产工艺
        async getProductionProcess(){
            const {data}=await getProductionProcess({
                supplierID:this.mapOneData.supplierID
            });
            if(data.status===0||data.status==='0'){
                this.processList=data.data?data.data:{};
            }else{
                this.processList={};
                this.$message({
                    type:'error',
                    message:data.message
                })
            }
        },
        // 地图
        chinaConfigure() {
            let _this = this;
            let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
            window.onresize = myChart.resize;
            var mapName = 'china'
            var data = [{
                    name: "北京",
                    value: 33
                },
                {
                    name: "天津",
                    value: 42
                },

                {
                    name: "新疆",
                    value: 180
                },
                {
                    name: "四川",
                    value: 125
                },
            ];

            var geoCoordMap = {}; 

            /*获取地图数据*/
            myChart.showLoading();
            var mapFeatures = echarts.getMap(mapName).geoJson.features;
            myChart.hideLoading();
            mapFeatures.forEach(function(v) {
                
                // 地区名称
                var name = v.properties.name;
                // 地区经纬度
                geoCoordMap[name] = v.properties.cp;

            });

            console.log(data)

            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    
                    var geoCoord = geoCoordMap[data[i].name];
                    // var geoCoord = [115.930538,39.864667]
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };

            var pointData = function(){
                
                var res = [];
                for (var i = 0; i < _this.mapData.length; i++) {
                    let d = []
                    d.push(_this.mapData[i].longitude)
                    d.push(_this.mapData[i].latitude)
                    res.push({
                        indexC:i,
                        id:_this.mapData[i].supplierID,
                        name:_this.mapData[i].supplierName,
                        value:d
                    })
                }
                return res;
            };

            var option = {
                tooltip: {
                    padding: 0,
                    enterable: true,
                    transitionDuration: 1,
                    textStyle: {
                        color: '#000',
                        decoration: 'none',
                    },
                    formatter: function(params) {
                        _this.mapOneData = _this.mapData[params.data.indexC]
                        _this.showPop = true;
                        _this.getProductionProcess()
                    },
                    triggerOn: 'click'
                },

                geo: {
                    show: true,
                    map: mapName,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#17302e',
                            borderColor: '#22c4ab'
                        },
                        emphasis: {
                            areaColor: '#22c4ab',
                        }
                    }
                },
                series: [
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        // data: convertData(data.sort(function(a, b) {
                        //     return b.value - a.value;
                        // }).slice(0, 10)),
                        data : pointData(),
                        symbolSize: function(val) {
                            // console.log('daxiao='+ (val[2] / 10));
                            //return val[2] / 10;
                            return 18
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'left',
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f59a1b',
                                shadowBlur: 15,
                                shadowColor: '#f28e0e'
                            }
                        },
                        zlevel: 1
                    },

                ]
            };
            myChart.setOption(option)
        },

        // 跳转供应商详情
        jump(){
            this.showPop = false;
            sessionStorage.setItem('supplierID',this.mapOneData.supplierID)
            sessionStorage.setItem('supplierName',this.mapOneData.supplierName)
            sessionStorage.setItem('supplierAddr',this.mapOneData.supplierAddress)
            this.$router.push({
                path:'/Home/supplierInformation'
            })
        },

        // 跳转工艺详情页
        jump2(param,name,src){
            if (param != ''){
                sessionStorage.setItem('supplierID',this.mapOneData.supplierID)
                sessionStorage.setItem('param',param)
                sessionStorage.setItem('paramName',name)
                sessionStorage.setItem('paramSrc',src)
                sessionStorage.setItem('supplierName',this.mapOneData.supplierName)
                sessionStorage.setItem('supplierAddr',this.mapOneData.supplierAddress)
                sessionStorage.setItem('supplierCode',this.mapOneData.supplierCode)
                this.$router.push({
                    path:'/Home/processDetails',
                })
            } else {
                this.$message({
                    message:'暂无相关数据',
                    type: 'warn'
                });
            }
        },
        
        // 下拉
        select(){
            let p = {
                coordinate: [],
                createTime: "",
                createUser: "",
                remark: "",
                supplierAddress: "",
                supplierCode: "",
                supplierID: 0,
                supplierName: this.inputValue
            }
            //this.selectShow = !this.selectShow
            if (this.inputValue!=''){
                getSuppliersList(JSON.stringify(p))
                .then(res => {
                    if (res.data.status === 0) {
                        this.suppliersList = res.data.data;
                        this.selectShow = true
                        this.$forceUpdate();
                    }
                })
            }
        },

        // 下拉选中
        selectOver(index){
            this.mapOneData = this.suppliersList[index];
            this.inputValue = '';
            this.selectShow = false
            this.showPop = true
            this.getProductionProcess();
        },

        // 订单完成率
        getOrderCompletionRate(){
            getOrderCompletionRate({})
            .then(res => {
                if (res.data.status === 0) {
                    let data = res.data.data;

                    let myChart = echarts.init(this.$refs.myEchartLine); //这里是为了获得容器所在位置    

                    //设置数据
                    var legendData = [];
                    var axisData = [];
                    var color = ['#22d487','#48eaf0'];
                    var seriesData = []

                    data.forEach((el,index) => {
                        legendData.push(el.name)
                        if (el.month.length > axisData){
                            axisData = el.month
                        }
                        seriesData.push(el.value)
                    })
                    var option = this.chartsOptions(legendData,axisData,color,seriesData);

                    myChart.setOption(option)
                }
            })
            
        },

        // 生产监控质量
        getQualityControl(){
            getQualityControl({})
            .then(res => {
                if (res.data.status === 0) {
                    let data = res.data.data;

                    let myChart = echarts.init(this.$refs.myEchartLine2); //这里是为了获得容器所在位置    

                    //设置数据
                    var legendData = [];
                    var axisData = [];
                    var color = ['#22c47a','#CF7610'];
                    var seriesData = []

                    data.forEach((el,index) => {
                        legendData.push(el.name)
                        if (el.month.length > axisData){
                            axisData = el.month
                        }
                        seriesData.push(el.value)
                    })
                    var option = this.chartsOptions(legendData,axisData,color,seriesData);

                    myChart.setOption(option)
                }
            })

        },

        // 折线图
        chartsOptions(legendData,axisData,color,seriesData){
            var seriesOptionData = []
            
            legendData.forEach((el,index) => {
                seriesOptionData.push({
                    name:el,
                    type:'line',
                    symbol: 'none',
                    itemStyle : {
                        normal : {
                            color : color[index],//改变折线点的颜色
                            lineStyle:{
                                color:color[index] //改变折线颜色
                            }
                        }
                    },
                    areaStyle: {
                        normal:{
                            color: color[index],
                        }
                    },
                    data:seriesData[index]
                })
            })

            var option = {
                title: {
                    show:false
                },
                legend: {
                    data:legendData,

                    icon: "rect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none

                    itemWidth: 12,  // 设置宽度

                    itemHeight: 12, // 设置高度

                    itemGap: 25, // 设置间距
                    // 设置文本为红色
                    textStyle: {
                        color: '#ccc'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top:25,
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : axisData,
                        axisLabel:{
                            color:'#ccc',
                        },
                        axisTick:{show:false},
                        axisLine:{
                            lineStyle:{
                                color:'#fff'
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel:{
                            color:'#ccc',
                        },
                        splitLine:{
                    　　　　show:false,
                    　　 },
                        axisTick:{show:false},
                        axisLine:{
                            lineStyle:{
                                color:'#fff'
                            }
                        }
                    }
                ],
                series : seriesOptionData
            };
            return option;
        }
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
        //超过1w之后的style
        .area_wan{
            height:70px;
            border-left:4px solid #22c4ac;
            border-right:4px solid #22c4ac;
            background:linear-gradient(to right,#035853,#139e8e,#035853);
            font-size:40px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            span{
                line-height:1;
                text-align:center;
                &:last-child{
                    font-size:16px;
                    text-align:right;
                    padding:0 20px;
                    color:#58fff1;
                }
            }
        }
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
                            font-family:'ZhanKuQingKeHuangYou';
                            position:relative;
                            span{
                                font-size:16px;
                                font-family: none;
                                color:#58fff1;
                                position:absolute;
                                height:16px;
                                line-height:1;
                                right:6px;
                                bottom:12px;
                            }
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
                        margin-bottom:10px;
                        font-size:16px;
                        font-weight:normal;
                    }

                    .chart{
                        height:150px;
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
                            width:85px;
                            height:70px;
                            font-size:18px;
                            text-align:center;
                            border:1px solid #035853;
                            border-left:2px solid #34b6a2;
                            background:#1b232c;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        }

                        .three-area{
                            flex:1;
                            height:72px;
                            line-height:72px;
                            text-align:right;
                            background:linear-gradient(to right,#035853,#139e8e,#035853);
                            font-size:46px;
                            padding-right:15px;
                            font-family:'ZhanKuQingKeHuangYou';
                            p{
                                font-size:16px;
                                color:#58fff1;
                                float:right;
                                line-height: 100px;
                                margin-left:10px;
                                font-family:none;
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
            position:relative;

            .select{
                width:300px;
                position:absolute;
                top:50px;
                left:50px;
                z-index:999;

                .selected{
                    height:42px;
                    line-height:42px;
                    border-left:2px solid #22c4ab;
                    border-right:2px solid #22c4ab;
                    font-size:16px;
                    background:rgba(34,196,172,0.34);
                    padding-left:10px;
                    cursor:pointer;

                    img{
                        line-height: 42px;
                        float: right;
                        margin-top: 15px;
                        margin-right: 20px;
                    }
                }

                .options{
                    max-height:300px;
                    background:rgba(34,196,172,0.34);
                    font-size:16px;

                    span{
                        line-height:35px;
                        padding-left:10px;
                        display:block;
                        cursor:pointer;
                    }

                    span:hover{
                        background:rgba(34,196,172,0.66);
                    }
                }
                
            }

            .map{
                height:674px;
                background:url(../../../static/images/map_ground.png);
                background-size:100% 100%;
                margin-bottom:18px;
        
                
            }

            .map_pop{
                width: 50%;
                height: 155px;
                background:rgba(26,45,48,0.66);
                border-left:2px solid #22c4ab;
                border-right:2px solid #22c4ab;
                font-size:16px;
                color:#aafff2;
                position:absolute;
                bottom:236px;
                left:7px;
                display:flex;
                flex-direction:column;
                .close{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    right: -5px;
                    top: 4px;
                    cursor: pointer;
                }

                .header_name{
                    width:100%;
                    height:50px;
                    line-height:60px;
                    text-align:center;
                }

                .map_popbox{
                    padding:0 20px;
                    text-align:left;
                    line-height:28px;
                    flex:1;
                    overflow: auto;
                    span{
                        margin:0 6px;
                    }
                }

                .map_btnbox{
                    text-align:center;
                    padding:15px 0;
                    .pop_btn{
                        padding:5px 50px;
                        border:1px solid #22c4ab;
                        border-radius:25px;
                        cursor: pointer;
                        color:#22c4ab;
                        text-decoration:none;
                    }

                    .pop_btn:hover{
                        color:#fff;
                        background: #22c4ab;
                    }
                }
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
                padding:25px 31px 30px;
                display:flex;

                .item{
                    flex:1;
                    margin-right:23px;

                    .info-head{
                        height:30px;
                        line-height:30px;
                        text-align:center;
                        border:1px solid #34b6a2;
                        background:#1b232c;
                        color:#23e4c7;
                        font-size:18px;
                    }

                    .info-area{
                        height:70px;
                        line-height:70px;
                        text-align:center;
                        border-left:4px solid #22c4ac;
                        border-right:4px solid #22c4ac;
                        background:linear-gradient(to right,#035853,#139e8e,#035853);
                        font-size:50px;
                        position:relative;
                        span{
                            font-size:16px;
                            color:#58fff1;
                            position:absolute;
                            height:16px;
                            line-height:1;
                            right:6px;
                            bottom:12px;
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
                        width:100%;
                    }

                    .gj_name{
                        height:31px;
                        line-height:31px;
                        text-align:center;
                        color:#dcdcdc;
                        border:1px solid #f59a1b;
                        background:#011c1c;
                        font-weight:bold;
                        font-size:16px;
                    }
                    .gj_btn{
                        height:33px;
                        line-height:33px;
                        text-align:center;
                        border-left:3px solid #f59a1b;
                        border-right:3px solid #f59a1b;
                        background:linear-gradient(to right,rgba(141,69,0,0.57),rgba(171,128,40,0.57),rgba(141,69,0,0.57));
                        color:#fff;
                        font-size:16px;
                    }
                }
            }

            .mb10{
                margin-bottom:10px;
            }

            .scroll_h{
                height:410px;
                overflow-y: scroll;
            }
        }
    }

    
</style>
