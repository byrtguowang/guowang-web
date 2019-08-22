import { Request } from '../request'

// 国网采购订单
export function getPurchasingOrder(param) {
    return Request.http.get(`/category/info/count`, param, 1);
}

// 柱状图
export function getChartData(param) {
    return Request.http.get(`/category/info/chart`, param, 1);
}