<template>
  <div class="siderBar" v-scrollHeight="0">
     左侧菜单
  </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },

    //当页面初始化的时候，立即执行monitor函数，进行路由定位
    created() {

    },

    computed: {
       
    },
    watch: {

    }
};
</script>
<style lang="sass" scoped>

.siderBar{
    float:left;
    position: relative;
    width: 246px;
    line-height: 20px;
    background-color: rgba(255, 255, 255, 1);
    font-size: 14px;
    box-sizing: border-box;
    box-shadow: 1px 0px 5px 0px rgba(122, 200, 221, 1);
    font-family: Roboto;
    border: 1px solid rgba(255, 255, 255, 0);
}

</style>
