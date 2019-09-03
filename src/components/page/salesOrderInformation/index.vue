<template>
<div class="sales_order_information" id="sales_order_information">
     <div class="information_top mb10">
         <div class="title">
            <p>销售订单列表 <span class="cursor" @click="goInformation" v-if="supplierID">返回供应商主页></span></p>
        </div>
        <div class="top_box">
            <div class="search">
                <div class="search_left">
                    <div class="demo-input-suffix">
                        <span>供应商：</span>
                        <el-select v-model="searchObj.supplierName" placeholder="请选择">
                            <el-option
                            :disabled="supplierID?true:false"
                            v-for="item in suppliersList"
                            :key="item.supplierID"
                            :label="item.supplierName"
                            :value="item.supplierName">
                            </el-option>
                        </el-select>
                        <!-- <el-input
                            v-model="searchObj.supplierName"
                            :disabled="supplierID?true:false"
                            placeholder="请输入">
                        </el-input> -->
                    </div>
                    <div class="demo-input-suffix">
                        <span>国网采购订单号：</span>
                        <el-input
                            v-model="searchObj.sgPurchaseorder"
                            placeholder="请输入">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>销售订单号：</span>
                        <el-input
                            v-model="searchObj.salesOrderCode"
                            placeholder="请输入">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>交货地点：</span>
                        <el-input
                            v-model="searchObj.deliveryPlace"
                            placeholder="请输入">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>国网框架合同号：</span>
                        <el-input
                            v-model="searchObj.sgFrameworkcode"
                            placeholder="请输入">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>工程项目名称：</span>
                        <el-input
                            v-model="searchObj.sgProjectname"
                            placeholder="请输入">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        <span>交货日期：</span>
                        <el-date-picker
                            type="daterange"
                            :editable="false"
                            v-model="date"
                            value-format="yyyy-MM-dd"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="search_right">
                    <button @click="listSalesorderDnb(1)">查询</button>
                    <button @click="listSalesorderDnbb">导出</button>
                    <!-- <button @click="goQualityDaily" class='rb'>生产质量日报</button> -->
                </div>
            </div>
            <div class="table">
                <el-table
                    :data="tableData"
                    :row-class-name="tableRowClass"
                    @row-click="changeRowClass"
                    style="width: 100%">
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
                    prop="supplierName"
                    align="center"
                    label="供应商名称">
                    </el-table-column>
                    <el-table-column
                    prop="materialsNum"
                    align="center"
                    width="120"
                    label="订单数量">
                    </el-table-column>
                    <el-table-column
                    prop="deliveryDate"
                    align="center"
                    width="120"
                    label="交货日期">
                    </el-table-column>
                    <el-table-column
                    align="center"
                    label="进度">
                        <template slot-scope="scope">
                            <el-progress :percentage="parseFloat(scope.row.sumproductionorde||0)" v-if="parseFloat(scope.row.sumproductionorde||0)<100"></el-progress>
                            <el-progress :percentage="parseFloat(scope.row.sumproductionorde||0)" v-else class="man_fen"></el-progress>
                        </template>
                    </el-table-column>
                    <el-table-column
                    align="center"
                    width="140"
                    label="操作">
                        <template slot-scope="scope">
                            <span @click="lookProductionOrder(scope.row.salesOrderCode)">查看对应生产订单</span>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    v-if="tableData.length&&total"
                    small
                    layout="prev, pager, next"
                    :current-page="searchObj.pageNum"
                    @current-change="handleCurrentChange"
                    :total="total">
                </el-pagination>
            </div>
        </div>
     </div>
     <div class="information_bottom">
         <div class="title">
            <p>销售订单详细信息
                <span class="cursor" @click="goQualityDaily">生产质量日报 ></span>
            </p>
        </div>
        <div class="botttom_box">
            <ul class="item">
                <li>
                    <span class="item_name">物资编码：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.materialsCode">{{SalesOrderObj.materialsCode}}</span>
                </li>
                <li>
                    <span class="item_name">物资名称：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.materialsName">{{SalesOrderObj.materialsName}}</span>
                </li>
                <li>
                    <span class="item_name">订单数量：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.materialsNum">{{SalesOrderObj.materialsNum}}</span>
                </li>
                <li>
                    <span class="item_name">交货日期：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.deliveryDate">{{SalesOrderObj.deliveryDate}}</span>
                </li>
                <li>
                    <span class="item_name">交货地点：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.deliveryPlace">{{SalesOrderObj.deliveryPlace}}</span>
                </li>
            </ul>
            <ul class="item">
                <li>
                    <span class="item_name">销售订单行项目号：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.salesOrderProjectNo">{{SalesOrderObj.salesOrderProjectNo}}</span>
                </li>
                <li>
                    <span class="item_name">建立日期：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.createTime">{{SalesOrderObj.createTime}}</span>
                </li>
                <li>
                    <span class="item_name">进度：</span>
                    <span class="item_value">
                        <el-progress :percentage="parseFloat(SalesOrderObj.sumproductionorde||0)" v-if="parseFloat(SalesOrderObj.sumproductionorde||0)<100"></el-progress>
                        <el-progress :percentage="parseFloat(SalesOrderObj.sumproductionorde||0)" v-else class="man_fen"></el-progress>
                    </span>

                    
                </li>
                <li>
                    <span class="item_name">供应商代码：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.supplierCode">{{SalesOrderObj.supplierCode}}</span>
                </li>
                <li>
                    <span class="item_name">供应商名称：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.supplierName">{{SalesOrderObj.supplierName}}</span>
                </li>
            </ul>
            <ul class="item">
                <li>
                    <span class="item_name">国网采购订单号：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.sgPurchaseorder">{{SalesOrderObj.sgPurchaseorder}}</span>
                </li>
                <li>
                    <span class="item_name">国网采购订单行项目号：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.sgPurchaseorderprojectno">{{SalesOrderObj.sgPurchaseorderprojectno}}</span>
                </li>
                <li>
                    <span class="item_name">国网框架合同号：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.sgFrameworkcode">{{SalesOrderObj.sgFrameworkcode}}</span>
                </li>
                <li>
                    <span class="item_name">工程项目名称：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.sgProjectname">{{SalesOrderObj.sgProjectname}}</span>
                </li>
                <li>
                    <span class="item_name">销售订单号：</span>
                    <span class="item_value ellipsis" :title="SalesOrderObj.salesOrderCode">{{SalesOrderObj.salesOrderCode}}</span>
                </li>
            </ul>
        </div>
     </div>
</div>
</template>

<script>
import {
    listSalesorderDnb,//销售订单列表
    selectSalesOrder, //销售订单详情
    getSuppliersList, //供应商的下拉列表
    listSalesorderDnbb //导出
} from '@api/salesOrderInformation'
export default {
    data() {
        return {
            suppliersList:[],//供应商的下拉列表
            supplierID:'',//供应商id
            searchObj:{
                supplierName:'',//供应商名称
                sgPurchaseorder:'',//国网采购订单号
                salesOrderCode:'',//销售订单号
                deliveryPlace:'',// 交货地点
                sgFrameworkcode:'',//国网框架合同号
                sgProjectname:'',//工程项目名称
                pageNum:1,
                pageSize:10
            },
            total:0,
            date:null,// 交货日期
            tableData: [],//表格数据
            SalesOrderID:'',
            SalesOrderObj:{}//详细信息
        }
    },
    mounted() {
        this.supplierID=sessionStorage.getItem('supplierID');
        this.searchObj.supplierName=sessionStorage.getItem('supplierName');
        this.getSuppliersList();
        this.listSalesorderDnb();
    },
    methods: {
        // 供应商的下拉列表
        async getSuppliersList(){
            const {data}=await getSuppliersList(JSON.stringify({
                "supplierName":'',
                // "supplierName": sessionStorage.getItem('supplierName')
            }));
            if(data.status===0||data.status==='0') this.suppliersList=data.data?data.data:[];
            else{
                this.$message({
                    type:'error',
                    message:data.message
                });
                this.suppliersList=[];
            }
            
        },
        // 供应商主页
        goInformation(){
            this.$router.push({
                path:'supplierInformation'
            })
        },
        // 生产质量日报
        goQualityDaily(){
            this.$router.push({
                path:'productionQualityDaily'
            });
        },
        // 分页
        handleCurrentChange(pageNum){
            this.pageNum=pageNum;
            this.listSalesorderDnb();
        },
        //默认选中第一个row
        tableRowClass(val){
    　　    if(val.row.salesOrderID==this.SalesOrderID) return 'row-bg';
            else return '';
        },
        //切换row
        changeRowClass(row, event, column){
            sessionStorage.setItem('supplierID',row.supplierID||'');
            sessionStorage.setItem('supplierName',row.supplierName||'');
            sessionStorage.setItem('supplierAddr',row.supplierAddress||'');
            this.SalesOrderID=row.salesOrderID;
            this.selectSalesOrder();
        },
        //表格
        async listSalesorderDnb(argv){
            if(argv==1) this.searchObj.pageNum=1;
            const {data}=await listSalesorderDnb(JSON.stringify({
                ...this.searchObj,
                supplierID:this.supplierID,
                deliveryDate:this.date?this.date[0]:'',
                jendTime:this.date?this.date[1]:''
            }));
            if(data.status==='0'||data.status===0){
                this.tableData=data.data.list?data.data.list:[];
                this.total=data.data.total;
                this.SalesOrderID=this.tableData[0].salesOrderID||'';
                sessionStorage.setItem('supplierID',this.tableData[0].supplierID||'');
                sessionStorage.setItem('supplierName',this.tableData[0].supplierName||'');
                sessionStorage.setItem('supplierAddr',this.tableData[0].supplierAddress||'');
            }else{
                this.$message({
                    type:"error",
                    message:data.message
                });
                this.tableData=[];
                this.total=0;
                this.SalesOrderID='';
            }
            this.selectSalesOrder();
        },
        //详情
        async selectSalesOrder(){
            const {data}=await selectSalesOrder({
                SalesOrderID:this.SalesOrderID
            });
            if(data.status==='0'||data.status===0){
                this.SalesOrderObj=data.data?data.data:{};
            }else{
                this.$message({
                    type:"error",
                    message:data.message
                });
                this.SalesOrderObj={};
            }
        },
        // 导出
        async listSalesorderDnbb(){
            const obj={
                ...this.searchObj,
                supplierID:this.supplierID,
                deliveryDate:this.date?this.date[0]:'',
                jendTime:this.date?this.date[1]:''
            };
            let html='';
            for(let key in obj) if(obj[key]) html+=`${key}=${obj[key]}&`;
            html=html.substr(0,html.length-1);
            let aTag = document.createElement('a');
            aTag.href = this.download+'?'+html;
            aTag.click();
        },
        // 查看对应生产订单
        lookProductionOrder(salesOrderCode){
            if(!this.supplierID){
                sessionStorage.setItem('supplierID','');
                sessionStorage.setItem('supplierName','');
                sessionStorage.setItem('supplierAddr','');
            }
            this.$router.push({
                path:'productionOrder',
                query:{
                    salesOrderCode
                }
            })
        }
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
                    .el-input__icon.el-range__icon.el-icon-date,.el-input__icon.el-range__close-icon{
                        line-height:20px;
                        color: #2bdcc1;
                    }
                    .el-range-input{
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
        .el-pagination.el-pagination--small{
            &,* {
                background:transparent;
                color:#fff;   
            }
            .active{
                color: #409EFF;
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
                cursor:pointer;
            }
            &,.el-table__body td{
                border:0;
            }
            .el-table__body-wrapper.is-scrolling-none{
                background:rgba(27,35,44,.4);
                padding-bottom:40px;
            }
            .el-table__body-wrapper.is-scrolling-none,.el-table__body{
                position:relative;
            }
            .el-table__body-wrapper.is-scrolling-none:after{
                content:'';
                width:1px;
                height:100%;
                background:#34b6a2;
                position:absolute;
                right:0px;
                top:0;
                z-index:9999;
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
            .el-table__body .el-table__row.row-bg{
                background:#008d7e;
            }
            .el-progress.el-progress--line{
                background:rgba(8,42,44,.71);
                text-align:left;
                padding-left:10px;
            }
        }
        .el-progress.el-progress--line{
            height: 30px;
            line-height: 30px;
            border-radius:8px;
            // text-align:left;
            // padding-left:10px;
            &.man_fen{
                .el-progress-bar__outer{
                    border: 1px solid #34b63e;
                    .el-progress-bar__inner{
                        background:linear-gradient(to right,#0d4c13, #00ff0c);
                    }
                }
            }
            .el-progress-bar__outer{
                box-sizing:border-box;
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
                right:21px;
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
                // button.rb{
                //     background:rgba(6,141,146,0.67);
                //     border:1px solid #00e3ff;
                //     width:157px;
                //     margin-right:0;
                // }
            }
        }
        .table{
            padding-bottom:18px;
            position:relative;
            .el-pagination.el-pagination--small{
                position:absolute;
                bottom:25px;
                right:50%;
                transform:translateX(50%);
            }
        }
    }
    .top_box ,.botttom_box{
        background:linear-gradient(#02514c, #012a2f);
        padding:0 21px;
    }
    .botttom_box{
        overflow:hidden;
        .item{
            float:left;
            margin:22px 11px;
            width:calc((100% - 44px) / 3);
            background:rgba(27,35,44,.4);
            padding:24px 50px;
            box-sizing:border-box;
            display:flex;
            flex-direction:column;
            &:first-child{
                margin-left:0;
            }
            &:last-child{
                margin-right:0;
            }
            li{
                width:100%;
                flex:1;
                line-height:36px;
                .item_name{
                    color:#20ad98;
                    width:155px;
                    float:left;
                }
                .item_value{
                    color:#2bdcc1;
                    float:right;
                    width:calc(100% - 155px);
                }
            }
        }
    }
}
</style>