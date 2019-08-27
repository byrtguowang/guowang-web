<template>
<div class="production_quality_daily" id="production_quality_daily">
    <div class="title">
        <p>生产质量日报</p>
    </div>
    <div class="daily_content">
        <div class="top">
            <div class="top_left">
                <el-table
                    border
                    :data="tableData1"
                    style="width: 100%">
                    <el-table-column
                    prop="sgPurchaseorder"
                    align="center"
                    label="星期日">
                    </el-table-column>
                    <el-table-column
                    prop="salesOrderCode"
                    align="center"
                    label="星期一">
                    </el-table-column>
                    <el-table-column
                    prop="sgProjectname"
                    align="center"
                    label="星期二">
                    </el-table-column>
                    <el-table-column
                    prop="materialsNum"
                    align="center"
                    label="星期三">
                    </el-table-column>
                    <el-table-column
                    prop="deliveryDate"
                    align="center"
                    label="星期四">
                    </el-table-column>
                    <el-table-column
                    prop="materialsNum"
                    align="center"
                    label="星期五">
                    </el-table-column>
                    <el-table-column
                    prop="deliveryDate"
                    align="center"
                    label="星期六">
                    </el-table-column>
                </el-table>
            </div>
            <div class="top_right">
                <div class="date_picker_year">
                    <el-date-picker
                        :editable="false"
                        type="year"
                        v-model="year"
                        format='yyyy 年'
                        value-format='yyyy'
                        :change='getList'
                        placeholder="选择年份">
                    </el-date-picker>
                </div>
                <ul class="date_picker_month cursor">
                    <li v-for='(item,index) in monthData' :key="index" :class="[activeMonth==index?'active':'']" @click="changeMonth(index)">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <el-table
                border
                
                :data="tableData2"
                style="width: 100%">
                <el-table-column
                prop="sgPurchaseorder"
                align="center"
                label="项目">
                </el-table-column>
                <el-table-column
                prop="salesOrderCode"
                align="center"
                label="监控数据（项）">
                </el-table-column>
                <el-table-column
                prop="sgProjectname"
                align="center"
                label="合格项（项）">
                </el-table-column>
                <el-table-column
                prop="materialsNum"
                align="center"
                label="报警项（项）">
                </el-table-column>
                <el-table-column
                prop="deliveryDate"
                align="center"
                label="检测合格率">
                </el-table-column>
            </el-table>
        </div>
    </div>
</div>
</template>

<script>
import {
    productionDaily, //生产质量日报
} from '@api/productionQualityDaily'
export default {
    data() {
        return {
            tableData1:[
                {
                    sgPurchaseorder:'ww',
                    deliveryDate:'111'
                },
                {},
                {},
                {},
                {}
            ],
            tableData2:[
                {
                    sgPurchaseorder:'ww',
                    deliveryDate:'111'
                },
                {},
                {},
                {},
                {}
            ],
            year:'',
            monthData:[1,2,3,4,5,6,7,8,9,10,11,12],
            activeMonth:0,
        }
    },
    mounted() {
        const dateNow=new Date();
        this.year=dateNow.getFullYear().toString();
        this.monthData.forEach((item,index)=>{
            if(item==dateNow.getMonth()+1) this.activeMonth=index;
        })
    },
    methods: {
        changeMonth(idx){
            this.activeMonth=idx;
            this.getList();
        },
        async getList(){
            // let obj={
            //     year:this.year||'',
            //     month:this.monthData[this.activeMonth]
            // }
            // productionDaily
        },

    },
};
</script>
<style lang='sass'>
    #production_quality_daily{
        .top{
            .top_left{
                .el-table{
                    color:#20ad98;
                    thead{
                        tr{
                            background: linear-gradient(to right, #035853, #139e8e, #035853);
                            color:#bcfff5;
                        }
                    }
                    .el-table__body{
                        tr{
                            height:55px;
                        }
                    }
                }
            }
            .top_right{
                .date_picker_year{
                    .el-date-editor.el-date-editor--year{
                        
                        font-size:20px;
                        &,.el-input__inner{
                        width:100%;
                        height:100%;
                        }
                        .el-input__icon.el-icon-date,.el-input__suffix{
                            color:#a2fff5;
                        }
                        .el-input__inner{
                            padding:0 40px;
                            background:transparent;
                            border:none;
                            color:#a2fff5;
                            text-align:center;
                        }
                    }
                }
            }
        }
        .el-table{
            color:#a2fff5;
            font-size:20px;
            &,tr,th,td{
                background:rgba(27,35,44,.4);
                border-color: rgba(52, 182, 162, 0.1);
            }
            &:before,&:after{
                background:rgba(52, 182, 162, 0.1);
            }
            thead{
                tr{
                    background:url('../../../../static/images/scrb_bg.png') no-repeat;
                    height:50px;
                    background-size:100% 100%;
                    color:#ffffff;
                }
            }
            .el-table__body{
                tr{
                    height:71px;
                    td:first-child{
                        color:#20ad98;
                    }
                }
            }
        }
    }
</style>
<style scoped lang='sass'>
.production_quality_daily{
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
    .daily_content{
        background:linear-gradient(#02514c, #012a2f);
        padding:0 35px 0 41px;
        .top{
            display:flex;
            padding:17px 0;
            .top_left{
                flex:4;
            }
            .top_right{
                flex:1;
                margin-left:16px;
                display:flex;
                flex-direction:column;

                .date_picker_year{
                    height:55px;
                    background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                }
                .date_picker_month{
                    flex:1;
                    display:flex;
                    flex-wrap:wrap;
                    background:rgba(27,35,44,.4);
                    padding:0 10px;
                    li{
                        width:25%;
                        margin:10px 0;
                        color:#4ae6d6;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:18px;
                        &.active{
                            background: linear-gradient(to right, #035853, #139e8e, #035853);
                        }
                    }

                }
            }
        }
        .bottom{
            padding:0 0 33px;
        }
    }
}
</style>