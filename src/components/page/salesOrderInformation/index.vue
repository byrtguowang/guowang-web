<template>
<div class="sales_order_information" id="sales_order_information">
     <div class="information_top mb10">
         <div class="title">
            <p>销售订单列表 <span class="cursor">返回供应商主页></span></p>
        </div>
        <div class="top_box">
            <div class="search">
                <div class="search_left">
                    <div class="demo-input-suffix">
                        <span>供应商：</span>
                        <el-input
                            placeholder="请输入内容">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>国网采购订单号：</span>
                        <el-input
                            placeholder="请输入内容">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>销售订单号：</span>
                        <el-input
                            placeholder="请输入内容">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>交货地点：</span>
                        <el-input
                            placeholder="请输入内容">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>国网框架合同号：</span>
                        <el-input
                            placeholder="请输入内容">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>工程项目名称：</span>
                        <el-input
                            placeholder="请输入内容">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>交货日期：</span>
                        <el-date-picker
                            type="daterange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="search_right">
                    <button>查询</button>
                    <button>导出</button>
                    <button>生产质量日报</button>
                </div>
            </div>
            <div class="table">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="450">
                    <el-table-column
                    prop="sgPurchaseorder"
                    align="center"
                    label="国网采购订单号">
                    </el-table-column>
                    <el-table-column
                    prop="salesOrderCode"
                    align="center"
                    label="销售订单号">
                    </el-table-column>
                    <el-table-column
                    prop="sgProjectname"
                    align="center"
                    label="供应商名称">
                    </el-table-column>
                    <el-table-column
                    prop="materialsNum"
                    align="center"
                    width="100"
                    label="订单数量">
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
                            <el-progress :percentage="parseFloat(scope.row.percent||0)"></el-progress>
                        </template>
                    </el-table-column>
                    <el-table-column
                    align="center"
                    label="操作">
                        <template slot-scope="scope">
                            <span>查看对应生产订单</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
     </div>
     <div class="information_bottom">
         <div class="title">
            <p>销售订单详细信息 <span class="cursor">工作订单></span></p>
        </div>
        <div class="botttom_box">
            <ul class="item">
                <li>
                    <span class="item_name">国网采购订单号：</span>
                    <span class="item_value ellipsis" title="FDJJGHDHGFHDVGHC ccffffffccffffffccffffff">FDJJGHDHGFHDVGHC ccffffffccffffffccffffff</span>
                </li>
                <li>
                    <span class="item_name">国网采购订单项目号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">国网框架合同号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">工程项目名称：</span>
                    <span class="item_value">工程项目名称</span>
                </li>
                <li>
                    <span class="item_name">销售订单号：</span>
                    <span class="item_value">SDFFHFGDJGHGF</span>
                </li>
            </ul>
            <ul class="item">
                <li>
                    <span class="item_name">国网采购订单号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">国网采购订单项目号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">国网框架合同号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">工程项目名称：</span>
                    <span class="item_value">工程项目名称</span>
                </li>
                <li>
                    <span class="item_name">销售订单号：</span>
                    <span class="item_value">SDFFHFGDJGHGF</span>
                </li>
            </ul>
            <ul class="item">
                <li>
                    <span class="item_name">国网采购订单号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">国网采购订单项目号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">国网框架合同号：</span>
                    <span class="item_value">FDJJGHDHGFHDVGHC</span>
                </li>
                <li>
                    <span class="item_name">工程项目名称：</span>
                    <span class="item_value">工程项目名称</span>
                </li>
                <li>
                    <span class="item_name">销售订单号：</span>
                    <span class="item_value">SDFFHFGDJGHGF</span>
                </li>
            </ul>
        </div>
     </div>
    <!-- <div class="information_top mb10">
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
                    <img src="static/images/img.png" >
                    <div class="gj_name">PCB板贴片检测</div>
                    <div class="gj_btn cursor" @click="jump2('')">{{processList['PCB板贴片检测']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">单板测试</div>
                    <div class="gj_btn cursor" @click="jump2('D_VeneerTest_DNB')">{{processList['单板测试']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">电流测试</div>
                    <div class="gj_btn cursor" @click="jump2('')">{{processList['电流测试']||0}}项告警</div>
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
                            <el-progress :percentage="parseFloat(scope.row.percent||0)"></el-progress>
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
                    <img src="static/images/img.png" >
                    <div class="gj_name">耐压试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_Pressure_DNB')">{{processList['耐压试验']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">基本误差试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_BasicError_DNB')">{{processList['基本误差试验']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">日计时误差试验</div>
                    <div class="gj_btn cursor" @click="jump2('D_TimingError_DNB')">{{processList['日计时误差试验']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">参数设置</div>
                    <div class="gj_btn cursor" @click="jump2('D_Parameter_DNB')">{{processList['参数设置']||0}}项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">通信端口检验</div>
                    <div class="gj_btn cursor" @click="jump2('')">{{processList['通信端口检验']||0}}项告警</div>
                </div>
            </div>
        </div>
    </div> -->
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
            tableData: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
            ],//表格数据
        }
    },
    mounted() {
        // this.salesOrderInfo();
    },
    
    methods: { 
        // // 当前生产状态
        // async ringGreen(){
        //     let {data:data1}=await ringBrightGreen({});
        //     let {data:data2}=await ringDarkGreen({});
        //     if(data1.status===0||data1.status==='0'){
        //         this.echarts1Date.push({
        //             name:'实际下线（台）',
        //             value:parseFloat(data1.data),
        //         })
        //     }else{
        //         this.$message({
        //             type:'error',
        //             message:data1.message
        //         });
        //         this.echarts1Date.push({
        //             name:'实际下线（台）',
        //             value:0,
        //         });
        //     } 
        //     if(data2.status===0||data2.status==='0'){
        //         this.echarts1Date.push({
        //             name:'当前计划（台）',
        //             value:parseFloat(data2.data),
        //         })
        //     }else{
        //         this.$message({
        //             type:'error',
        //             message:data1.message
        //         });
        //         this.echarts1Date.push({
        //             name:'当前计划（台）',
        //             value:0,
        //         });
        //     }
        //     this.drawLine1();
        // },
        // //今日报警信息
        // async rightPieChart(){
        //     let {data}=await rightPieChart({});
        //     if(data.status===0||data.status==='0'){
        //         const obj={
        //             D_BasicError_DNB:'电能误差',
        //             D_Parameter_DNB:'电能参数',
        //             D_Pressure_DNB:'电能耐压',
        //             D_TimingError_DNB:'电能日计时',
        //             D_VeneerTest_DNB:'电能表单板'
        //         }
        //         for(let item of data.data){
        //             item.name=obj[item.dataName]
        //         }
        //         this.echarts3Date=data.data?data.data:[];
        //     }
        //     else{
        //         this.echarts3Date=[];
        //         this.$message({
        //             type:'error',
        //             message:data.message
        //         });
        //     }
        //     this.drawLine3();
        // },
        // //订单完成率
        // async getOrderCompletionRate(){
        //     const {data}=await getOrderCompletionRate({});
        //     if(data.status===0||data.status==='0') this.echarts2Date=data.data?data.data:[];
        //     else{
        //         this.echarts2Date=[];
        //         this.$message({
        //             type:'error',
        //             message:data.message
        //         });
        //     }
        //     this.drawLine2();
        // },
        // //生产质量监控
        // async getQualityControl(){
        //     const {data}=await getQualityControl({});
        //     if(data.status===0||data.status==='0') this.echarts4Date=data.data?data.data:[];
        //     else{
        //         this.echarts4Date=[];
        //         this.$message({
        //             type:'error',
        //             message:data.message
        //         });
        //     }
        //     this.drawLine4();
        // },
        // // 表格数据
        // async salesOrderInfo(){
        //     let {data}=await salesOrderInfo({});
        //     if(data.status===0||data.status==='0'){
        //         this.tableData=data.data?data.data:[];
        //     }else{
        //         this.tableData=[];
        //         this.$message({
        //             type:'error',
        //             message:data.message
        //         })
        //     }
        // }, 
        // //三维生产工艺
        // async getProductionProcess(){
        //     const {data}=await getProductionProcess({
        //         supplierID:sessionStorage.getItem('supplierID')
        //     });
        //     if(data.status===0||data.status==='0'){
        //         this.processList=data.data?data.data:{};
        //     }else{
        //         this.processList={};
        //         this.$message({
        //             type:'error',
        //             message:data.message
        //         })
        //     }
        // },
        // // 更多
        // getMore(){
        // },
    },
};
</script>
<style lang='sass'>
    #sales_order_information{
        .search_left{
            .demo-input-suffix{
                .el-date-editor.el-date-editor--daterange{
                    width:256px;
                    height:27px;
                    background:rgba(27,35,44,.4);
                    border-color:#34b6a2;
                    .el-input__icon.el-range__icon.el-icon-date,.el-range-separator{
                        line-height:20px;
                        color: #2bdcc1;
                    }
                }
                .el-input{
                    width:156px;
                    height:27px;
                    .el-input__inner{
                        height:100%;
                        background:rgba(27,35,44,.4);
                        border-color:#34b6a2;
                        color: #2bdcc1;
                    }
                }
            }
        }
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
.sales_order_information{
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
    .top_box {
        .search{
            display:flex;
            padding:18px 0 10px 0;
            border-bottom:1px solid rgba(52,182,162,.1);
            .search_left{
                flex:1;
                overflow:hidden;
                .demo-input-suffix{
                    float:left;
                    margin-right:40px;
                    margin-bottom:17px;
                    span{
                        color:#40f3d8;
                        display:inline-block;
                        width:115px;
                    }
                } 
            }
            .search_right{
                display: flex;
                align-items: flex-end;
                button{
                    width:85px;
                    height:38px;
                    border-radius:5px;
                    background: rgba(44, 32, 4, 0.67);
                    border: 1px solid #f4aa00;
                    color:#fff;
                    margin-right:20px;
                }
                button:last-child{
                    background:rgba(6,141,146,0.67);
                    border:1px solid #00e3ff;
                    width:157px;
                    margin-right:0;
                }
            }
        }
        
    }
    .top_box ,.botttom_box{
        background:linear-gradient(#02514c, #012a2f);
        padding:0 21px;
    }
    .botttom_box{
        display:flex;
        .item{
            flex:1;
            background:rgba(27,35,44,.4);
            height:184px;
            margin:22px 11px;
            padding:24px 50px;
            display:flex;
            flex-direction:column;
            li{
                width:100%;
                flex:1;
                line-height:36px;
                .item_name{
                    color:#20ad98;
                    width:150px;
                    float:left;
                }
                .item_value{
                    color:#2bdcc1;
                    float:right;
                    width:calc(100% - 150px);
                }
            }
        }
    }
}
// .supplier_information{
//     background-color:#15181f;
//     color:#fff;
//     // title样式
//     .title{
//         height:37px;
//         border-left:10px solid #22c4ac;
//         background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
//         margin-bottom:11px;
//         p{
//             line-height:37px;
//             color:#27F0D2;
//             font-size:18px;
//             margin-left:20px;
//             position:relative;
//             span{
//                 position:absolute;
//                 right:30px;
//                 font-size:14px;
//                 color:#20ad98;
//             }
//         }
//     }
//     .information_top,.information_bottom{
//         display:flex;
//     }
//     .information_content{
//         background:linear-gradient(#02514c, #012a2f);
//         flex:1;
//         &.table{
//             padding:44px 20px 10px;
//         }
//         &.echarts_wrap{
//             padding:12px 17px 0 21px;
//             display:flex;
//             .echarts_box{
//                 flex:1;
//                 display:flex;
//                 flex-direction:column;
//                 &:first-child{
//                     margin-right:41px;
//                 }
//                 .echarts_tit{
//                     background:linear-gradient(to right, #035853, #139E8E, #035853);
//                     position:relative;
//                     font-size:16px;
//                     p{
//                         width:156px;
//                         height:41px;
//                         line-height:41px;
//                         background:#1b232c;
//                         border:1px solid #34b6a2;
//                         text-align:center;
                        
//                     }
//                     span{
//                         position:absolute;
//                         width:50%;
//                         text-align:right;
//                         right:30px;
//                         top:50%;
//                         transform: translateY(-50%);
                        
//                     }
//                 }
//                 .echarts_con{
//                     flex:1;
//                     position:relative;
//                 }
//                 .echarts_con:before{
//                     content:'当前生产状态';
//                     position:absolute;
//                     top:11px;
//                     left:0;
//                     font-size:16px;
//                     font-weight:bold;
//                 }
//                 .echarts_con2:before{
//                      content:'订单完成率';
//                 }
//                 .echarts_con3:before{
//                      content:'今日报警信息';
//                 }
//                 .echarts_con4:before{
//                      content:'生产质量监控';
//                 }
//             }
//         }
//     }
//     //左右布局的样式
//     .left{
//         flex:3;
//         margin-right:11px;
//         display:flex;
//         flex-direction:column;
//     }
//     .right{
//         flex:1;
//         .right_box{
//             background:linear-gradient(#02514c, #012a2f);
//             padding:12px;
//             display:flex;
//             flex-wrap:wrap;
//             .item{
//                 width:49%;
//                 padding-right:1%;
//                 margin-bottom:10px;
                
//                 img{
//                     height:128px;
//                     width:100%;
//                 }
//                 .gj_name{
//                     height:31px;
//                     line-height:31px;
//                     text-align:center;
//                     color:#dcdcdc;
//                     border:1px solid #f59a1b;
//                     background:#011c1c;
//                     font-weight:bold;
//                     font-size:16px;
//                 }
//                 .gj_btn{
//                     height:33px;
//                     line-height:33px;
//                     text-align:center;
//                     border-left:3px solid #f59a1b;
//                     border-right:3px solid #f59a1b;
//                     background:linear-gradient(to right,rgba(141,69,0,0.57),rgba(171,128,40,0.57),rgba(141,69,0,0.57));
//                     font-size:16px;
//                 }
//             }
//         }
//         .mb10{
//             margin-bottom:10px;
//         }
//         .scroll_h{
//             height:340px;
//             overflow-y: scroll;
//         }
//     }
// }
</style>