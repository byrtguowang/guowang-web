import * as types from './types';

//初始化状态
const state = {
     Bid: '', //productId
     Makey:'', //组件ID
     cancelId:'', //撤销 主键id  
     enterpriseUuid:'',//企业id
     accessTokened:'',
     searchVal: {}
     
};

//获取数据
const getters = {
    Bid:state=>state.Bid,
    Makey:state=>state.Makey,
    cancelId:state=>state.cancelId,
    enterpriseUuid:state=>state.enterpriseUuid,
    accessTokened:state=>state.accessTokened,
    searchVal:state=>state.searchVal,
};
//数据保存方法
const mutations = {
    //productID   
    [types.BID](state, Bid) {
        state.Bid = Bid;
    },
    // 主键id
    [types.MAKEYID](state, Makey) {
        state.Makey = Makey;
    },
    // 撤销主键id
    [types.CANCELID](state, cancelId) {
        state.cancelId = cancelId;
    },
    // 企业id
    [types.ENTERPTISEUUID](state, enterpriseUuid) {
        state.enterpriseUuid = enterpriseUuid;
    },
    //获取用户信息
    [types.ACCESS_TOKENED](state, accessTokened) {
        state.accessTokened = accessTokened;
    },
};

export default {
    state,getters,mutations
}