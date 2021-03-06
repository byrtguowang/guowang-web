"use strict";

import Vue from "vue";
import Vuex from "vuex";
import vuexPersistedstate from 'vuex-persistedstate'

import login from './module/loginStote'
import menu from './module/menuStote'

Vue.use(Vuex);

// 创建 store 实例
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        login,
        menu
    },
    plugins:[vuexPersistedstate()]//引入vuexPersistedstate 用于缓存

});
