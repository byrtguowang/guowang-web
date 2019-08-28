import * as types from './types';

//初始化状态
const state = {
    showMenu:false,
};
//获取数据
const getters = {
    showMenu:state=>state.showMenu,
};
//数据保存方法
const mutations = {
    [types.SET_MENU_DATA](state, showMenu) {
        state.showMenu = showMenu;
    },
};

export default {
    state,getters,mutations
}