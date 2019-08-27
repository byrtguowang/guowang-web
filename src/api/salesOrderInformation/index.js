import { Request } from '../request'
// 销售订单列表
export function listSalesorderDnb(param) {
    return Request.http.post(`/SalesorderDnbController/listSalesorderDnb`, param, 1,{"Content-Type": "application/json"});
}
// 销售订单详情
export function selectSalesOrder(param) {
    return Request.http.post(`/SalesorderDnbController/selectSalesOrder`, param, 1);
}

// 导出
export function listSalesorderDnbb(param) {
    return Request.http.post(`/SalesorderDnbController/listSalesorderDnbb`, param, 1,{"Content-Type": "application/json"});
}