import * as types from './types';

//初始化状态
const state = {
    loginInfo:{
        username:'',
        password:'',
        rememberMe:''
    }
};
//获取数据
const getters = {
    loginInfo:state=>state.loginInfo,
};
//数据保存方法
const mutations = {
    [types.SET_LOGIN_DATA](state, loginInfo) {
        state.loginInfo = loginInfo;
    },
};

export default {
    state,getters,mutations
}