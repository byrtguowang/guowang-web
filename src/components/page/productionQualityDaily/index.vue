<template>
<div class="production_quality_daily" id="production_quality_daily">
    <div class="title">
        <p>生产质量日报</p>
    </div>
    <div class="daily_content">
        <div class="top">
            <div class="top_left">
                <table>
                    <thead>
                        <tr>
                            <th>星期日</th>
                            <th>星期一</th>
                            <th>星期二</th>
                            <th>星期三</th>
                            <th>星期四</th>
                            <th>星期五</th>
                            <th>星期六</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(item,index) of dayData' :key="index">
                            <td v-for="(val,key) of item" :key="key" :class="[day==val?'active':'']" @click="changeDay(val)" class="cursor">
                                <span v-if="val">{{val}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="top_right">
                <div class="date_picker_year">
                    <el-date-picker
                        :editable="false"
                        :clearable='false'
                        type="year"
                        v-model="year"
                        format='yyyy 年'
                        value-format='yyyy'
                        @change='getList'
                        placeholder="选择年份">
                    </el-date-picker>
                </div>
                <ul class="date_picker_month cursor">
                    <li v-for='(item,index) in monthData' :key="index" :class="[activeMonth==item?'active':'']" @click="changeMonth(item)">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <el-table
                border
                :data="tableData"
                style="width: 100%">
                <el-table-column
                prop="name"
                align="center"
                label="项目">
                </el-table-column>
                <el-table-column
                prop="countAll"
                align="center"
                label="监控数据（项）">
                </el-table-column>
                <el-table-column
                prop="countOK"
                align="center"
                label="合格项（项）">
                </el-table-column>
                <el-table-column
                prop="count"
                align="center"
                label="报警项（项）">
                </el-table-column>
                <el-table-column
                prop="pie"
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
            tableData:[],
            year:'',
            monthData:[1,2,3,4,5,6,7,8,9,10,11,12],
            dayData:[],
            activeMonth:1,
            day:0,
        }
    },
    mounted() {
        this.readyList();
    },
    methods: {
        readyList(){
            const dateNow=new Date();
            this.year=dateNow.getFullYear().toString();
            this.day=dateNow.getDate();
            this.monthData.forEach((item,index)=>{
                if(item==dateNow.getMonth()+1) this.activeMonth=item;
            });
            this.daysFn();
        },
        //保留两位数
        toFixedFn(num){
            if(num>9) return num;
            else return '0'+num;
        },
        //获取当月多少天，从星期几开始
        daysFn(){
            const date=new Date(this.year,this.activeMonth-1,1),
            day=date.getDay(),
            allady=new Date(this.year,this.activeMonth,0).getDate();
            const arr=[];
            for(var i=0;i<day;i++) arr.push(0);
            for(let v=1;v<=allady;v++) arr.push(v);
            if(arr.length<35){
                const num=35-arr.length;
                for(var i=0;i<num;i++) arr.push(0);
            }
            if(arr.length>35){
                const num=42-arr.length;
                for(var i=0;i<num;i++) arr.push(0);
            }
            this.chunk(arr,7);
            this.getList();
        },
        //一维数组切二维数组
        chunk (collection, size) {
            var result = [];
            size = parseInt(size) || 2;
            for (var x = 0; x < Math.ceil(collection.length / size); x++) {
                var start = x * size;
                var end = start + size;
                result.push(collection.slice(start, end));   
            }
            this.dayData=result;
        },
        //月份改变
        changeMonth(item){
            this.activeMonth=item;
            this.daysFn();
            this.day=1;
        },
        //天改变
        changeDay(item){
            if(!item) return;
            this.day=item;
            this.getList();
        },
        //表格数据
        async getList(){
            const checkTime=`${this.year}-${this.toFixedFn(this.activeMonth)}-${this.toFixedFn(this.day)}`;
            const {data}=await productionDaily({
                checkTime,
                supplierID:sessionStorage.getItem('supplierID')
            });
            if(data.status===0||data.status==='0'){
                this.tableData=data.data?data.data:[];
                const obj={
                    D_BasicError_DNB:'电能误差',
                    D_Parameter_DNB:'电能参数',
                    D_Pressure_DNB:'电能耐压',
                    D_TimingError_DNB:'电能日计时',
                    D_VeneerTest_DNB:'电能表单板'
                };
                for(let item of this.tableData){
                    item.name=obj[item.dataName]
                    item.count=item.count||0;
                    item.countOK=item.countOK||0;
                    item.countAll=item.count*1+item.countOK*1;
                    item.pie=((item.countOK*1/item.countAll||0)*100).toFixed(2)+'%';
                }
            }else{
                this.tableData=[];
                this.$message({
                    type:"error",
                    message:data.message
                })
            }
        },

    },
};
</script>
<style lang='sass'>
    #production_quality_daily{
        .top{
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
                font-size:20px;
                table{
                    width:100%;
                    color:#20ad98;
                    border-collapse: collapse;
                    &,tr,td,th{
                        text-align:center;
                        border:1px solid rgba(52, 182, 162, 0.3);
                    }
                    thead tr{
                        background: linear-gradient(to right, #035853, #139e8e, #035853);
                        height:53px;
                        color:#bcfff5;  
                    }
                    tbody tr{
                        background:rgba(27,35,44,.4);
                        height:55px;
                        td.active{
                            background: linear-gradient(to right, #035853, #139e8e, #035853);
                        }
                    }
                }
            }
            .top_right{
                flex:1;
                margin-left:16px;
                display:flex;
                flex-direction:column;

                .date_picker_year{
                    height:53px;
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