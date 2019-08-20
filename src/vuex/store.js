"use strict";

import Vue from "vue";
import Vuex from "vuex";
import vuexPersistedstate from 'vuex-persistedstate'

//views中modules
import client from './module/clientStore'
//...
import binStore from './module/binStore'

Vue.use(Vuex);

// 创建 store 实例
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        client,binStore
    },
    plugins:[vuexPersistedstate()]//引入vuexPersistedstate 用于缓存

});
