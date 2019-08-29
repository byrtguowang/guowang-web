import * as types from './types';

//初始化状态
const state = {
    showMenu:false,
    hideMenuList:true
};
//获取数据
const getters = {
    showMenu:state=>state.showMenu,
    hideMenuList:state=>state.hideMenuList,
};
//数据保存方法
const mutations = {
    [types.SET_MENU_DATA](state, showMenu) {
        state.showMenu = showMenu;
    },
    [types.SET_MENU_LIST](state, hideMenuList) {
        state.hideMenuList = hideMenuList;
    },
};

export default {
    state,getters,mutations
}