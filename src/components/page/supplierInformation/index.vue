<template>
<div class="supplier_information" id="supplier_information">
    <div class="information_top mb10">
        <div class="left">
            <div class="title">
                <p>供应商信息</p>
            </div>
            <div class="information_content"></div>
        </div>
        <div class="right">
            <div class="title">
                <p>工艺流程</p>
            </div>
            <div class="right_box">
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">PCB板贴片检测</div>
                    <div class="gj_btn">0项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">单板测试</div>
                    <div class="gj_btn">2项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">电流测试</div>
                    <div class="gj_btn">3项告警</div>
                </div>
            </div>
        </div>
    </div>
    <div class="information_bottom">
        <div class="left">
            <div class="title">
                <p>销售订单信息 <span>更多></span></p>
            </div>
            <div class="information_content table">
                <el-table
                    :data="tableData3"
                    style="width: 100%"
                    height="310">
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
        <div class="right">
            <div class="title">
                <p>实验数据</p>
            </div>
            <div class="right_box scroll_h">
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">耐压试验</div>
                    <div class="gj_btn">3项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">基本误差</div>
                    <div class="gj_btn">3项告警</div>
                </div>
                <div class="item">
                    <img src="static/images/img.png" >
                    <div class="gj_name">电流测试</div>
                    <div class="gj_btn">3项告警</div>
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
            },]
        }
    },
    mounted() {

    },
    methods: {

    },
       
    created() {
      
    },

    watch:{

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
            .el-table__body{
                position:relative;
                background:rgba(27,35,44,.4);
            }
            .el-table__body:after{
                content:'';
                width:1px;
                height:100%;
                background:#34b6a2;
                position:absolute;
                right:0;
                top:0;
            }
            .el-table__body:before{
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
                    height:128px;
                    width:100%;
                }

                .gj_name{
                    height:31px;
                    line-height:31px;
                    text-align:center;
                    color:#dcdcdc;
                    border:1px solid #f59a1b;
                    background:#011c1c;
                }

                .gj_btn{
                    height:33px;
                    line-height:33px;
                    text-align:center;
                    border-left:3px solid #f59a1b;
                    border-right:3px solid #f59a1b;
                    background:linear-gradient(to right,rgba(141,69,0,0.57),rgba(171,128,40,0.57),rgba(141,69,0,0.57));
                    font-size:16px;
                    color:#fff;
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