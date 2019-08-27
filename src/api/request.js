import axios from "axios";
import { filterParams } from "../common/mUtils";
import qs from "qs";

import Vue from 'vue';

export const Request = {};
//请求超时时长
const TIMEOUT = 50000;
//http请求授权header属性
const AUTH_KEY = "X-Authorization";
Vue.prototype.download = process.env.NODE_ENV == 'development'?`http://47.111.186.36:8101/SalesorderDnbController/listSalesorderDnbb`:`http://47.111.186.36:8101/SalesorderDnbController/listSalesorderDnbb`
var request = options => {
    //开放cookie 本地操作 并且操作后的cookie 携带过去
    axios.defaults.withCredentials = true;
    // options.headers = {
    //     "Content-Type": "application/x-www-form-urlencoded"
    // };
    //处理查询参数，过滤空值参数
    //filterParams(options.params || options.body);
    
    options.headers = options.headers['Content-Type'] ? options.headers : {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    
    // options.headers = { ...(options.headers || {}) };
    // options.headers = options.headers || {
    //     "Content-Type": "application/x-www-form-urlencoded"
    // }

    options.body = options.body || {};
    //options.body.power = 'user';

    //参数格式化
    if (Object.prototype.toString.call(options.body) === "[object Object]") {
        options.body = qs.stringify(options.body);
    }

    return axios
        .request({
            headers: options.headers,
            //url: _baseUrl + options.action,
            url: options.action,
            method: options.method,
            data: options.body,
            params: options.params,
            timeout: TIMEOUT,
            emulateJSON: true
            // })
        })
        .then(response => {
            
            //请求结束
            var result = response; 

            return result;
        })
        .catch(e => {
            // alert('前端请求错误:' + JSON.stringify(e))
            //抛出异常
            throw e;
        });
};

// Vue.prototype.exportCost = 'http://172.16.66.228:8080/costAccountingList/exportReportCostExcel/'

//http请求方式
const http = {};
["get", "post", "put", "delete"].forEach(method => {
    
    http[method] = (
        action,
        params,
        typs = 1,
        headers = {},
        extra = { headers:{}, loadig: false, includeToken: false }
    ) => {
        
        method = method.toUpperCase();

       
        if (process.env.NODE_ENV == "development") {
             //  测试环境
            // 请求地址
            var path = 'http://47.111.186.36:8101'
            
            if (typs == 1) action = path + action;
            
        } else {
            //  生产环境
            var path = 'http://47.111.186.36:8101'

            if (typs == 1) action = path + action;

        }
        
        if (method === "GET") {
            return request({
                action,
                params,
                method,
                headers: headers,
                loading: extra.loading,
                includeToken: extra.includeToken
            });
        }
        return request({
            action,
            body: params,
            method,
            headers: headers,
            loading: extra.loading,
            includeToken: extra.includeToken
        });
    };
});
Request.http = http;
