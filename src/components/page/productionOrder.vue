<template>
    <div class="box" id="productionOrder">
        <div class="meter-box">
            <div class="meter-left"></div>
            <div class="meter-right">
                <span>生产订单列表</span>
                <p @click="goSalesOrders">返回销售订单详情页 ></p>
            </div>
        </div>
        <div class="product-table-box">
            <table class="product-table">
                <thead>
                    <td>生产订单号</td>
                    <td>订单数量</td>
                    <td>计划开始日期</td>
                    <td>计划结束日期</td>
                    <td>实际开始日期</td>
                    <td width="200">进度</td>
                    <td>订单状态</td>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in ProductionOrderList" :key="index" :class="activeClass == index? 'row-bg':''" @click="getProductionOrder(index,item.productionOrderID,item.productionOrderCode)">
                        <td>{{item.productionOrderCode}}</td>
                        <td>{{item.productionOrderNum}}</td>
                        <td>{{item.planStartDate}}</td>
                        <td>{{item.planFinishDate}}</td>
                        <td>{{item.realStartDate}}</td>
                        <td>
                            <el-progress :percentage="this.completionRate || 0"></el-progress>
                        </td>
                        <td>
                            <span class="plan" v-if="item.productionOrderStatus == '1'">计划</span>
                            <span class="commit" v-if="item.productionOrderStatus == '2'">确认</span>
                            <span class="release" v-if="item.productionOrderStatus == '3'">下达</span>
                            <span class="complete" v-if="item.productionOrderStatus == '4'">完成</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="7">
                            <div class="block">
                                <el-pagination 
                                background 
                                layout="prev, pager, next" 
                                :current-page="pageIndex" 
                                @current-change="handleCurrentChange" 
                                @prev-click="handleCurrentChange" 
                                @next-click="handleCurrentChange" 
                                :total="totalPage * pageSize">
                                </el-pagination>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="detail-title">
            <div class="meter-box">
                <div class="meter-left"></div>
                <div class="meter-right">
                    <span>生产订单详细信息</span>
                </div>
            </div>
            <div class="meter-box workList-title">
                <div class="meter-left"></div>
                <div class="meter-right">
                    <span>工单列表</span>
                </div>
            </div>
        </div>
        <div class="detail-box">
            <div class="detail-content detailInfo">
                <div class="detailInfo-left">
                    <div class="detailInfo-mennu">
                        <p>订单数量：</p>
                        <p>订单状态：</p>
                        <p>计划开始日期：</p>
                        <p>计划结束日期：</p>
                        <p>实际开始日期：</p>
                        <p>实际结束日期：</p>
                        <p>工厂/车间：</p>
                        <p>建立时间：</p>
                    </div>
                    <div class="detailInfo-mennu detailInfo-info">
                        <p>{{ProductionOrderDetail.productionOrderNum}}</p>
                        <p>{{ProductionOrderDetail.productionOrderStatus}}</p>
                        <p>{{ProductionOrderDetail.planStartDate}}</p>
                        <p>{{ProductionOrderDetail.planFinishDate}}</p>
                        <p>{{ProductionOrderDetail.realStartDate}}</p>
                        <p>{{ProductionOrderDetail.realFinishDate}}</p>
                        <p>{{ProductionOrderDetail.workShop}}</p>
                        <p>{{ProductionOrderDetail.CreateTime}}</p>
                    </div>
                </div>
                <div class="detailInfo-left detailInfo-right">
                    <div class="detailInfo-mennu">
                        <p>生产订单号：</p>
                        <p>国网采购订单号：</p>
                        <p>销售订单号：</p>
                        <p>销售订单号项目号：</p>
                        <p>物资名称：</p>
                        <p>物料：</p>
                    </div>
                    <div class="detailInfo-mennu detailInfo-info">
                        <p>{{ProductionOrderDetail.productionOrderCode}}</p>
                        <p>{{ProductionOrderDetail.sgpurchaseOrder}}</p>
                        <p>{{ProductionOrderDetail.salesOrderCode}}</p>
                        <p>{{ProductionOrderDetail.salesOrderProjectNo}}</p>
                        <p>{{ProductionOrderDetail.materialsCode}}</p>
                        <p class="materiel">{{ProductionOrderDetail.productionOrderMaterials}}</p>
                    </div>
                </div>
            </div>
            <div class="product-table-box detail-content work-list-box">
                <table class="product-table">
                    <thead>
                        <td>工单号</td>
                        <td>工单数量</td>
                        <td>计划开始日期</td>
                        <td>计划结束日期</td>
                        <td>实际开始日期</td>
                        <td>实际结束日期</td>
                        <td>工单状态</td>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in WorkOrderList" :key="index">
                            <td>{{item.workOrderCode}}</td>
                            <td>{{item.workOrderNum}}</td>
                            <td>{{item.planStartDate}}</td>
                            <td>{{item.planFinishDate}}</td>
                            <td>{{item.realStartDate}}</td>
                            <td>{{item.realFinishDate}}</td>
                            <td>
                                <span class="plan" v-if="item.workOrderStatus == '1'">计划</span>
                                <span class="commit" v-if="item.workOrderStatus == '2'">确认</span>
                                <span class="release" v-if="item.workOrderStatus == '3'">下达</span>
                                <span class="complete" v-if="item.workOrderStatus == '4'">完成</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="7">
                                <div class="block">
                                    <el-pagination 
                                    background 
                                    layout="prev, pager, next" 
                                    :current-page="workListPageIndex" 
                                    @current-change="workListHandleCurrentChange" 
                                    @prev-click="workListHandleCurrentChange" 
                                    @next-click="workListHandleCurrentChange" 
                                    :total="workListTotalPage * workListPageSize">
                                    </el-pagination>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import{
    getProductionOrderList,
    getWorkOrderList
}from '@api/productionOrder'
export default {
    data() {
        return {
            activeClass:0,
            pageIndex: 1,
            pageSize: 10, //每页显示条数
            totalPage:'', //一共多少条
            workListPageIndex:1,
            workListTotalPage:'',
            workListPageSize:5,
            salesOrderCode:'', //销售订单编号
            ProductionOrderList:[], //生产订单列表
            ProductionOrderDetail:{}, //生产订单详细信息
            productionOrderID:'', //生产订单ID
            WorkOrderList:[], //工单列表
            productionOrderCode:'', //生产订单编号
        };
    },
    mounted() {
        this.salesOrderCode = this.$route.query.salesOrderCode
        this.getProductionOrderList();
    },
    methods: {
        //生产订单列表分页
        handleCurrentChange(pageNumber) {
            this.pageIndex = pageNumber;
            this.getProductionOrderList(this.productionOrderID);
        },
        // 工单列表分页
        workListHandleCurrentChange(pageNumber){
            this.workListPageIndex = pageNumber;
            this.getWorkOrderList(this.productionOrderCode);
        },
        // 返回销售订单
        goSalesOrders(){
            this.$router.push({
                path:'/Home/salesOrderInformation',
            })
        },
        // 生产订单列表
        getProductionOrderList(){
            getProductionOrderList(JSON.stringify({
                pageNum:this.pageIndex,
                pageSize:this.pageSize,
                salesOrderCode: this.salesOrderCode //销售订单编号 
            }))
            .then( res =>{
                if(res.data.status == 0){
                    this.ProductionOrderList = res.data.data.list
                    this.totalPage = res.data.data.pages
                    this.productionOrderID = res.data.data.list[0].productionOrderID
                    this.productionOrderCode = res.data.data.list[0].productionOrderCode
                    this.getProductionOrderDetail(this.productionOrderID);
                    this.getWorkOrderList(this.productionOrderCode);
                }
            })
        },
        // 点击某一行查询生产订单详细信息和工单列表
        getProductionOrder(index,productionOrderID,productionOrderCode){
            this.activeClass = index;
            this.getProductionOrderDetail(productionOrderID);
            this.getWorkOrderList(productionOrderCode)

        },
        // 获取生产订单详细信息
        getProductionOrderDetail(productionOrderID){
            getProductionOrderList(JSON.stringify({
                productionOrderID:productionOrderID, //生产订单ID
                salesOrderCode: this.salesOrderCode //销售订单编号 
            }))
            .then( res => {
                if(res.data.status == 0){
                     res.data.data.list.forEach(el => {
                        switch (el.productionOrderStatus){
                            case '1':
                               el.productionOrderStatus = '计划' 
                               break;
                            case '2':
                               el.productionOrderStatus = '确认' 
                               break;
                            case '3':
                               el.productionOrderStatus = '下达' 
                               break;
                            case '4':
                               el.productionOrderStatus = '完成' 
                               break;
                        }
                    });
                    this.ProductionOrderDetail = res.data.data.list[0]
                }
            })
        },
        // 工单列表
        getWorkOrderList(productionOrderCode){
            getWorkOrderList(JSON.stringify({
                pageNum:this.workListPageIndex,
                pageSize:this.workListPageSize,
                productionOrderCode: productionOrderCode //生产订单编号 
            }))
            .then(res => {
                if(res.data.status == 0){
                    this.WorkOrderList = res.data.data.list
                    this.workListTotalPage = res.data.data.pages
                }
            })
        }
    },
       
    created() {
        
    },

    watch:{

    },
};
</script>
<style lang="sass">
    #productionOrder{
        //分页样式 
        .el-pagination.is-background .el-pager li,
        .el-pagination.is-background .btn-prev,
        .el-pagination.is-background .btn-next
        {
            background: linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
            color:#21e9cc;
        }
        .el-pagination.is-background .el-pager li:not(.disabled):hover{
            color:#fff;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
            background-color: #21cbda;
        }
        // 进度条样式
        .el-progress-bar__outer{
            border: 1px solid #35b6a2;
            background:#082a2c;
        }
        .el-progress-bar__inner{
            background:linear-gradient(to right, #0e5662, #19c5d9);
        }
        .el-progress-bar{
            width:90%;
        }
        .el-progress__text{
            color:#21e9cc;
        }
    }
</style>
<style scoped lang='sass'>
    .box{color:#21e9cc;}
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
            width:99.2%;
            height:100%;
            line-height:38px;
            text-align:left;
            background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
            span{
                margin-left:6px;
                letter-spacing: 2px;
                font-size:20px;
            }
            p{
                float:right;
                font-size:16px;
                cursor:pointer;
                margin-right:20px;
            }
        }
    }
    .product-table-box{
        width:100%;
        // height:500px;
        margin-top:10px;
        background:linear-gradient(to top, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
        text-align: -webkit-center;
        overflow:hidden;
        .product-table{
            width:97%;
            margin:35px 0 10px 0;
            text-align:center;
            thead{
                font-size:16px;
                font-weight: bold;
                color:#56efdb;
                line-height:45px;
            }
            tbody{
                border:1px solid #23e4c7;
                margin-top:5px;
            }
            tr{
                height:45px;
                cursor:pointer;
                &:nth-child(2n){
                    background:#0c3c3e;
                }
                span{
                    display:inline-block;
                    width: 50px;
                    height: 25px;
                    line-height: 25px;
                    border-radius: 13px;
                }
                .commit{
                    background:#2d5b58;
                    border:1px solid #05f1fe;
                    color:#00fdff;
                }
                .release{
                    background:#5b5a2c;
                    border:1px solid #c8cf1f;
                    color:#ebf12b;
                }
                .plan{
                    background:#743f17;
                    border:1px solid #fd8f40;
                    color:#fe8a4d;
                }
                .complete{
                    background:#204234;
                    border:1px solid #4cd620;
                    color:#4cd620;
                }
            }
        }
    }
    .detail-title{
        margin-top:10px;
        display:flex;
        .meter-box{
            flex:1;
        }
        .workList-title{
            margin-left:10px;
        }
    }
    .detail-box{
        margin-top:10px;
        display:flex;
        .detail-content{
            flex:1;
            height:300px;
        }
        .detailInfo{
            display:flex;
            .detailInfo-left{
                flex:2;
                margin-right:5px;
                background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                .detailInfo-mennu{
                    display:inline-block;
                    margin-left:30px;
                    p{
                        margin-top:15px;
                    }
                }
            }
            .detailInfo-right{
                flex:3;
                margin-right: 0;
                background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                .detailInfo-info{
                    width:180px;
                    vertical-align: top;
                    .materiel{
                        height:95px;
                        overflow: scroll;
                        letter-spacing: 1px;
                    }
                }
            }
        }
        .work-list-box{
            margin-left:10px;
            margin-top:0;
            background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
            .product-table{
                margin-top:10px;
                thead{
                    display: table;
                    width: 100%;
                }
                tbody{
                    display:block;
                    // height:220px;
                    // overflow:scroll;
                    tr{
                       display: table;
                        width: 100%; 
                    }
                }
            }
        }
    }
    .row-bg{
        background: #008d7e !important;
    }
</style>
