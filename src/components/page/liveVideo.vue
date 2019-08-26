<template>
    <div>
        <div class="meter-box">
            <div class="meter-left"></div>
            <div class="meter-right">
                <span>直播视频</span>
            </div>
        </div>
        <div class="bg-box">
            <div class="bg-content">
                <div class="video-box"></div>
                <div class="video-box machinesNum">
                    <div class="meter-box">
                        <div class="meter-right">
                            <span>机位数量</span>
                        </div>
                    </div> 
                    <div>
                        
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
        };
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
            }
        }
    }
    .bg-box{
        width:100%;
        height:550px;
        margin-top:10px;
        text-align: -webkit-center;
        background:linear-gradient(to right, rgba(13,99,119,0.41), rgba(34,196,172,0.41));
        .bg-content{
            width:95%;
            display:flex;
            .video-box{
                flex:1;
                height:100%;
            }
            .machinesNum{
                .meter-box{
                    margin-top:30px;
                    .meter-right{
                        background:linear-gradient(to right, rgba(141,69,0,0.77), rgba(171,128,40,0.77), rgba(141,69,0,0.77));
                        span{
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
</style>
