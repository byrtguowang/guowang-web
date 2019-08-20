import * as types from './types';

//初始化状态
const state = {
    rwdid: "", //地区id
    aaa:"",
    headerWidth:""
};

//获取数据
const getters = {
    rwdid: state => state.rwdid, //地区id
    aaa:state=>state.aaa,
    headerWidth:state=>state.headerWidth
};
//数据保存方法
const mutations = {
    [types.SET_LEFT_DATA](state, rwdid) {
        state.rwdid = rwdid;
    },
    [types.AAAAAAAAAA](state, aaa) {
        state.aaa = aaa;
    },
    [types.HEADER_WIDTH](state, headerWidth) {
        state.headerWidth = headerWidth;
    }
};

export default {
    state,getters,mutations
}