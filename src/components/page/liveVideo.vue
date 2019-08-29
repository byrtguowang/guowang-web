<template>
    <div>
        <div class="meter-box">
            <div class="meter-left"></div>
            <div class="meter-right">
                <span>直播视频</span>
                <p @click="jump">返回供应商详情 ></p>
            </div>
        </div>
        <div class="bg-box">
            <div class="bg-content">
                <div class="video-box liveVideo">
                    <div class="meter-box" style="margin-left:0;">
                        <div class="meter-right">
                            <span>供应商名称</span>
                            <p class="left-content name">{{data.supplierName}}</p>
                        </div>
                    </div>
                    <div class="video">
                        <div class="video_day" v-show="vedioShow">
                            <h4>直播视频</h4>
                            <h4>2019-02-10</h4>
                        </div>
                        <video class="h5video" id="divPlugin" ></video>
                    </div>
                    <div class="video_time">
                        <span class="time">0</span>
                        <span class="time">0</span>
                        :
                        <span class="time">0</span>
                        <span class="time">0</span>
                    </div>
                </div>
                <div class="video-box machinesNum">
                    <div class="meter-box">
                        <div class="meter-right">
                            <span>机位数量</span>
                            <p class="left-content num">{{data.cameraSum}}</p>
                        </div>
                    </div> 
                    <div class="jk-box">
                        <div class="bg-jk" v-for="(item,index) of list" :key="index">
                            <span @click="paly">{{item.monitorRemark}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    cameraList,
    statusBar
} from '@api/liveVideo'
import '../../assets/adapter.js'
import {H5sPlayerWS,H5sPlayerHls,H5sPlayerRTC} from '../../assets/h5splayer.js'
import {H5siOS,H5sPlayerCreate} from '../../assets/h5splayerhelper.js'
export default {
    data() {
        return {
            supplierID:'',
            supplierName:'',
            supplierAddress:'',
            data:{},
            list:[],
            vedioShow:false,
            v1:null, //视频
        };
    },
    mounted() {
        this.supplierID = sessionStorage.getItem('supplierID');
        this.supplierName = sessionStorage.getItem('supplierName');
        this.supplierAddress = sessionStorage.getItem('supplierAddress');
        this.liveVideo()
        this.statusBar()
    },
    methods: {
        // 状态
        statusBar(){
            statusBar({
                supplierID:this.supplierID
            })
            .then(res => {
                if (res.data.status === 0) {
                    this.data = res.data.data
                }
            })
        },
        // 摄像列表
        liveVideo(){
            cameraList({
                supplierID:this.supplierID
            })
            .then(res => {
                if (res.data.status === 0) {
                    this.list = res.data.data
                }
            })
        },
        // 播放视频
        createH5Video() {
            if (this.v1 != undefined)
            {
                this.v1.disconnect();
                delete this.v1;
                this.v1 = undefined;
            }
            let conf1 = {
                videoid: 'divPlugin',
                protocol: window.location.protocol,
                host: this.$vedioHost,
                rootpath: '/',
                token: 'token1',
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
        paly(){
            this.vedioShow = true;
            this.createH5Video()
        },
        jump(){
            sessionStorage.setItem('supplierID',this.supplierID)
            sessionStorage.setItem('supplierName',this.supplierName)
            sessionStorage.setItem('supplierAddr',this.supplierAddress)
            this.$router.push({
                path:'/Home/supplierInformation'
            })
        }
    },
       
    created() {

    },

    watch:{

    },
};
</script>

<style scoped lang='sass'>
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
                color:#21e9cc;
                margin-left:6px;
                letter-spacing: 2px;
                font-size:20px;
            }
            p{
                float:right;
                color:#21e9cc;
                font-size:20px;
                cursor:pointer;
                margin-right:20px;
            }
        }
    }
    .bg-box{
        width:100%;
        margin-top:10px;
        text-align: -webkit-center;
        background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
        .bg-content{
            width:95%;
            display:flex;
            .video-box{
                flex:1;
                height:100%;
                margin-top:30px;
                .meter-box{
                    margin-left:35px;
                    .meter-right{
                        span{
                            color:#fff;
                            display: inline-block;
                            height: 100%;
                            margin-left: 0;
                            box-sizing: border-box;
                            width: 150px;
                            text-align: center;
                        }
                        .left-content{
                            float:right;
                            color:#fff;
                            margin-right: 20px;
                        }
                    }
                }
            }
            .liveVideo{
                padding-left:35px;

                .meter-right{
                    background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
                    span{
                        background:#1b242d;
                        border: 1px solid #33b7a2;
                    }
                    .name{
                        font-size:18px;
                    }
                }
                .video{
                    width:100%;
                    margin-top: 43px;
                    background:#000;
                    position: relative;

                    .video_day{
                        position: absolute;
                        color:#fff;
                        text-align:left;
                        margin-left:20px;

                        h4{
                            font-size:30px;
                        }
                    }

                    .h5video{
                        width:100%;
                    }
                }
                .video_time{
                    margin-top:23px;
                    text-align:center;
                    font-size:72px;
                    color:#192325;

                    .time{
                        height:98px;
                        width:51px;
                        text-align:center;
                        background:#051316;
                        padding:0 5px;
                    }
                }
            }
            .machinesNum{
                .meter-box{
                    margin-left:35px;
                    .meter-right{
                        background:linear-gradient(to right, rgba(141,69,0,0.77), rgba(171,128,40,0.77), rgba(141,69,0,0.77));
                        span{
                            background: #27190e;
                            border: 1px solid #d87e10;
                        }
                        .num{
                            font-size:42px;
                        }
                    }
                }
            }
            .jk-box{
                min-height:calc(100vh - 126px - 120px);

                .bg-jk{
                    display:inline-block;
                    width:300px;
                    height:150px;
                    margin-top:47px;
                    background:url(../../../static/images/liveVideo_machinesNum.png) no-repeat;
                    background-size: 100%;
                    vertical-align: top;
                    line-height: 150px;
                    cursor:pointer;
                    &:nth-child(2n){
                        margin-left:47px;
                    }
                    span{
                        color:#fff;
                        font-size:24px;
                    }
                }
            }
        }
    }
</style>
