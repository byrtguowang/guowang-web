<template>
<div class="sales_order_information" id="sales_order_information">
     <div class="information_top mb10">
         <div class="title">
            <p>销售订单列表 <span class="cursor" @click="goInformation">返回供应商主页></span></p>
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
                    <button @click="goQualityDaily">生产质量日报</button>
                </div>
            </div>
            <div class="table">
                <el-table
                    :data="tableData"
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
                <el-pagination
                    small
                    layout="prev, pager, next"
                    :total="5000">
                </el-pagination>
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
</div>
</template>

<script>
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
                {},
                {},
            ],//表格数据
        }
    },
    mounted() {
    },
    methods: {
        goInformation(){
            this.$router.push({
                path:'supplierInformation'
            })
        },
        // 生产质量日报
        goQualityDaily(){
            this.$router.push({
                path:'productionQualityDaily'
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
</style>