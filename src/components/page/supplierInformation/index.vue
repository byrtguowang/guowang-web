<template>
<div class="supplier_information" id="supplier_information">
    <div class="information_top mb10">
        <div class="left">
            <div class="title">
                <p>供应商信息</p>
            </div>
            <div class="information_content echarts_wrap">
                <div class="echarts_box">
                    <div class="echarts_tit">
                        <p>供应商名称</p>
                        <span class="ellipsis cursor">{{supplierName}}</span>
                    </div>
                    <div class="echarts_con echarts_con1" ref="echarts1"></div>
                    <div class="echarts_con echarts_con2" ref="echarts2"></div>
                </div>
                <div class="echarts_box">
                    <div class="echarts_tit">
                        <p>供应商地址</p>
                        <span class="ellipsis cursor" :title="supplierAddr">{{supplierAddr}}</span>
                    </div>
                    <div class="echarts_con echarts_con3" ref="echarts3"></div>
                    <div class="echarts_con echarts_con4" ref="echarts4"></div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <p>工艺流程</p>
            </div>
            <div class="right_box">
                <div class="item">
                    <img src="static/images/PCB.jpg" >
                    <div class="gj_name">PCB板贴片检测</div>
                    <div class="gj_btn cursor" @click="jump2('','PCB板贴片检测','PCB2')">{{processList['PCB板贴片检测']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/Veneer.jpg" >
                    <div class="gj_name">单板测试</div>
                    <div class="gj_btn cursor" @click="jump2('D_VeneerTest_DNB','单板测试','Veneer2')">{{processList['单板测试']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/Battery.jpg" >
                    <div class="gj_name">电流测试</div>
                    <div class="gj_btn cursor" @click="jump2('','电流测试','Battery2')">{{processList['电流测试']||0}}项告警</div>
                </div>
            </div>
        </div>
    </div>
    <div class="information_bottom">
        <div class="left">
            <div class="title">
                <p>销售订单信息 <span class="cursor" @click="getMore">更多></span></p>
            </div>
            <div class="information_content table">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="310">
                    <el-table-column
                    prop="sgPurchaseorder"
                    align="center"
                    label="国网采购合同号">
                    </el-table-column>
                    <el-table-column
                    prop="salesOrderCode"
                    align="center"
                    label="销售订单号">
                    </el-table-column>
                    <el-table-column
                    prop="materialsNum"
                    align="center"
                    width="100"
                    label="订单数量">
                    </el-table-column>
                    <el-table-column
                    prop="sgProjectname"
                    align="center"
                    label="工程项目名称">
                    </el-table-column>
                    <el-table-column
                    prop="deliveryDate"
                    align="center"
                    width="100"
                    label="交货日期">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    label="进度">
                        <template slot-scope="scope">
                            <el-progress :percentage="parseFloat(scope.row.percent||0)*100" v-if="parseFloat(scope.row.percent||0)<1"></el-progress>
                            <el-progress :percentage="parseFloat(scope.row.percent||0)*100" v-else class="man_fen"></el-progress>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <p>实验数据</p>
            </div>
            <div class="right_box scroll_h">
                <div class="item">
                    <img src="static/images/Pressure.jpg" >
                    <div class="gj_name">耐压试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_Pressure_DNB','耐压试验','Pressure2')">{{processList['耐压试验']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/BasicErrorTest.jpg" >
                    <div class="gj_name">基本误差试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_BasicError_DNB','基本误差试验','BasicErrorTest2')">{{processList['基本误差试验']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/DailyTiming.jpg" >
                    <div class="gj_name">日计时误差试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_TimingError_DNB','日计时误差试验','DailyTiming2')">{{processList['日计时误差试验']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/Parameter.jpg" >
                    <div class="gj_name">参数设置</div>
                    <div class="gj_btn cursor" @click="jump2('D_Parameter_DNB','参数设置','Parameter2')">{{processList['参数设置']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/Port.jpg" >
                    <div class="gj_name">通信端口检验</div>
                    <div class="gj_btn cursor" @click="jump2('','通信端口检验','Port2')">{{processList['通信端口检验']||0}}项告警</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    ringBrightGreen, //当前生产状态
    ringDarkGreen, //当前生产状态
    rightPieChart,//今日报警信息
    getProductionProcess,//三维生产工艺
    salesOrderInfo
} from '@api/supplierInformation'
import {
    getOrderCompletionRate, //订单完成率
    getQualityControl, //生产质量监控
} from '@api/map'
export default {
    data() {
        return {
            supplierName:'',
            supplierAddr:'',
            myCharts1:null,
            myCharts2:null,
            myCharts3:null,
            myCharts4:null,
            echarts1Date:[],
            echarts2Date:[],
            echarts3Date:[],
            echarts4Date:[],
            tableData: [],//表格数据
            processList:{},
            titleStyle:{
                color:'#ffffff',
                fontSize: 16
            },
            options:{
                legend: {
                    left:'75%',
                    top:'50%',
                    orient: 'vertical',
                    itemWidth:14,
                    itemHeight:14,
                },
                grid: {
                    top:'50',
                    left: '3%',
                    right: '30%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
                        axisLine:{
                            lineStyle:{
                                color:'#aaaaaa'
                            }
                        },
                        axisLabel:{
                            color:'#aaaaaa'
                        },
                        axisTick:false,
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine: false,
                        axisLine:{
                            lineStyle:{
                                color:'#aaaaaa'
                            }
                        },
                        axisLabel:{
                            color:'#aaaaaa'
                        },
                        splitLine:false,
                        axisTick:false,
                    }
                ],
            },
            optionsPie:{
                legend: {
                    orient: 'vertical',
                    height:'88',
                    color: '#ffffff',
                    itemWidth:14,
                    itemHeight:14,
                },
                series: [
                    {
                        type:'pie',
                        radius: ['55%', '75%'],
                        avoidLabelOverlap: false,
                        hoverAnimation:false,
                        label: false,
                        labelLine:false,
                    }
                ]
            }
        }
    },
    mounted() {
        this.supplierName=sessionStorage.getItem('supplierName');
        this.supplierAddr=sessionStorage.getItem('supplierAddr');
        this.salesOrderInfo();
        this.ringGreen();
        this.getOrderCompletionRate();
        this.rightPieChart();
        this.getQualityControl();
        this.getProductionProcess();
        window.onresize=()=>{
            this.myCharts1.resize();
            this.myCharts2.resize();
            this.myCharts3.resize();
            this.myCharts4.resize();
        }
    },
    
    methods: { 
        // 当前生产状态
        async ringGreen(){
            let {data:data1}=await ringBrightGreen({});
            let {data:data2}=await ringDarkGreen({});
            if(data1.status===0||data1.status==='0'){
                this.echarts1Date.push({
                    name:'实际下线（台）',
                    value:parseFloat(data1.data),
                })
            }else{
                this.$message({
                    type:'error',
                    message:data1.message
                });
                this.echarts1Date.push({
                    name:'实际下线（台）',
                    value:0,
                });
            } 
            if(data2.status===0||data2.status==='0'){
                this.echarts1Date.push({
                    name:'当前计划（台）',
                    value:parseFloat(data2.data),
                })
            }else{
                this.$message({
                    type:'error',
                    message:data1.message
                });
                this.echarts1Date.push({
                    name:'当前计划（台）',
                    value:0,
                });
            }
            this.drawLine1();
        },
        //今日报警信息
        async rightPieChart(){
            let {data}=await rightPieChart({});
            if(data.status===0||data.status==='0'){
                const obj={
                    D_BasicError_DNB:'电能误差',
                    D_Parameter_DNB:'电能参数',
                    D_Pressure_DNB:'电能耐压',
                    D_TimingError_DNB:'电能日计时',
                    D_VeneerTest_DNB:'电能表单板'
                }
                for(let item of data.data){
                    item.name=obj[item.dataName]
                }
                this.echarts3Date=data.data?data.data:[];
            }
            else{
                this.echarts3Date=[];
                this.$message({
                    type:'error',
                    message:data.message
                });
            }
            this.drawLine3();
        },
        //订单完成率
        async getOrderCompletionRate(){
            const {data}=await getOrderCompletionRate({});
            if(data.status===0||data.status==='0') this.echarts2Date=data.data?data.data:[];
            else{
                this.echarts2Date=[];
                this.$message({
                    type:'error',
                    message:data.message
                });
            }
            this.drawLine2();
        },
        //生产质量监控
        async getQualityControl(){
            const {data}=await getQualityControl({});
            if(data.status===0||data.status==='0') this.echarts4Date=data.data?data.data:[];
            else{
                this.echarts4Date=[];
                this.$message({
                    type:'error',
                    message:data.message
                });
            }
            this.drawLine4();
        },
        // 表格数据
        async salesOrderInfo(){
            let {data}=await salesOrderInfo({
                supplierID:sessionStorage.getItem('supplierID')
            });
            if(data.status===0||data.status==='0'){
                this.tableData=data.data?data.data:[];
            }else{
                this.tableData=[];
                this.$message({
                    type:'error',
                    message:data.message
                })
            }
        }, 
        //三维生产工艺
        async getProductionProcess(){
            const {data}=await getProductionProcess({
                supplierID:sessionStorage.getItem('supplierID')
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
        // 更多
        getMore(){
            this.$router.push({
                path:'salesOrderInformation'
            })
        },
        // 跳转工艺详情页
        jump2(param,name,src){
            if (param != ''){
                // sessionStorage.setItem('id',this.mapOneData.supplierID)
                sessionStorage.setItem('param',param)
                sessionStorage.setItem('paramName',name)
                sessionStorage.setItem('paramSrc',src)
                // sessionStorage.setItem('supplierName',this.mapOneData.supplierName)
                // sessionStorage.setItem('supplierAddr',this.mapOneData.supplierAddress)
                this.$router.push({
                    path:'/Home/processDetails',
                })
            } else {
                this.$message({
                    message:'暂无相关数据',
                    type: 'warning'
                });
            }
        },
        //第一个图
        drawLine1(){
            this.myCharts1=this.$echarts.init(this.$refs.echarts1);
            const options1={
                ...this.optionsPie
            },
            legend=[],
            percentage=(this.echarts1Date[0].value/(this.echarts1Date[0].value+this.echarts1Date[1].value) * 100).toFixed(1);
            options1.title={
                text: '检测合格率',
                subtext: percentage + '%',
                x: 'center',
                y: '34%',
                itemGap: 10,
                textStyle : {
                    color : '#fff',
                    fontFamily : '微软雅黑',
                    fontSize : 14,
                    fontWeight : 'normal'
                },
                subtextStyle:  {
                    color : '#fff',
                    fontFamily : '微软雅黑',
                    fontSize : 28,
                    fontWeight : 'normal'
                }
            },
            options1.color=['#24e3c7','#018287'];
            for(let item of this.echarts1Date){
                legend.push({
                    name: item.name,
                    icon: 'rect',
                    textStyle: {
                        color: '#ffffff'
                    }
                })
            }
            
            options1.series[0].data=this.echarts1Date;
            options1.series[0].center=['50%','50%'];
            options1.legend.left='70%';
            options1.legend.top='40%';
            options1.legend.data=legend;
            this.myCharts1.setOption(options1);
        },   
        //第二个图 
        drawLine2(){
            this.myCharts2=this.$echarts.init(this.$refs.echarts2);
            const options2={
                ...this.options
            },
            series=[],
            legend=[];
            options2.color=['#0e7b54','#249291'];
            for(let item of this.echarts2Date){
                legend.push({
                    name: item.name,
                    icon: 'rect',
                    textStyle: {
                        color: '#ffffff'
                    }
                });
                series.push({
                    type:'line',
                    areaStyle:{},
                    name:item.name,
                    data:item.value,
                    smooth: true,
                });
            }
            options2.xAxis[0].data=this.echarts2Date[0].month;
            options2.series=series;
            options2.legend.data=legend;
            this.myCharts2.setOption(options2);
        },
        //第三个图
        drawLine3(){
            this.myCharts3=this.$echarts.init(this.$refs.echarts3);
            const options3={
                ...this.optionsPie
            },
            series=[],
            legend=[];
            for(let item of this.echarts3Date){
                series.push({
                    name: item.name,
                    value:item.count
                });
                legend.push({
                    name: item.name,
                    icon: 'rect',
                    textStyle: {
                        color: '#ffffff'
                    }
                })
            }
            options3.color=['#ee5353','#f47d5d','#ffb069','#e88800','#d63636','#c38090','#f76688','#f6e529'];
            options3.series[0].center=['32%','54%'];
            options3.series[0].data=series;
            options3.legend.data=legend;
            options3.legend.left='50%';
            options3.legend.top='30%';
            this.myCharts3.setOption(options3);
        },
        //第四个图
        drawLine4(){
            this.myCharts4=this.$echarts.init(this.$refs.echarts4);
            const options4={
                ...this.options
            },
            series=[],
            legend=[];
            options4.color=['#0e7b54','#249291'];
            for(let item of this.echarts4Date){
                legend.push({
                    name: item.name,
                    icon: 'rect',
                    textStyle: {
                        color: '#ffffff'
                    }
                });
                series.push({
                    type:'line',
                    areaStyle:{},
                    name:item.name,
                    data:item.value,
                    smooth: true,
                });
            }
            options4.xAxis[0].data=this.echarts4Date[0].month;
            options4.series=series;
            options4.legend.data=legend;
            this.myCharts4.setOption(options4);
        },
    },
};
</script>
<style lang='sass'>
    #supplier_information{
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
        .el-progress.el-progress--line{
            height: 30px;
            line-height: 30px;
            border-radius:8px;
            background:rgba(8,42,44,.71);
            &.man_fen{
                .el-progress-bar__outer{
                    border: 1px solid #34b63e;
                    .el-progress-bar__inner{
                        background:linear-gradient(to right,#0d4c13, #00ff0c);
                    }
                }
            }
            .el-progress-bar__outer{
                height:10px !important;
                background: #082a2c;
                border: 1px solid #34b6a2;
                .el-progress-bar__inner{
                    background:linear-gradient(to right,#0d424c, #19ddf4);
                }
            }
            .el-progress__text{
                color:#2fc1ab;
            }
        }
    }
</style>
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
            position:relative;
            span{
                position:absolute;
                right:30px;
                font-size:14px;
                color:#20ad98;
            }
        }
    }
    .information_top,.information_bottom{
        display:flex;
    }
    .information_content{
        background:linear-gradient(#02514c, #012a2f);
        flex:1;
        &.table{
            padding:44px 20px 10px;
        }
        &.echarts_wrap{
            padding:12px 17px 0 21px;
            display:flex;
            .echarts_box{
                flex:1;
                display:flex;
                flex-direction:column;
                &:first-child{
                    margin-right:41px;
                }
                .echarts_tit{
                    background:linear-gradient(to right, #035853, #139E8E, #035853);
                    position:relative;
                    font-size:16px;
                    p{
                        width:156px;
                        height:41px;
                        line-height:41px;
                        background:#1b232c;
                        border:1px solid #34b6a2;
                        text-align:center;
                        
                    }
                    span{
                        position:absolute;
                        width:50%;
                        text-align:right;
                        right:30px;
                        top:50%;
                        transform: translateY(-50%);
                        
                    }
                }
                .echarts_con{
                    flex:1;
                    position:relative;
                }
                .echarts_con:before{
                    content:'当前生产状态';
                    position:absolute;
                    top:11px;
                    left:0;
                    font-size:16px;
                    font-weight:bold;
                }
                .echarts_con2:before{
                     content:'订单完成率';
                }
                .echarts_con3:before{
                     content:'今日报警信息';
                }
                .echarts_con4:before{
                     content:'生产质量监控';
                }
            }
        }
    }
    //左右布局的样式
    .left{
        flex:3;
        margin-right:11px;
        display:flex;
        flex-direction:column;
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
                    font-size:16px;
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