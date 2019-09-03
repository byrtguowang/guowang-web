import { Request } from '../request'
// 销售订单列表
export function listSalesorderDnb(param) {
    return Request.http.post(`/SalesorderDnbController/listSalesorderDnb`, param, 1,{"Content-Type": "application/json"});
}
// 销售订单详情
export function selectSalesOrder(param) {
    return Request.http.post(`/SalesorderDnbController/selectSalesOrder`, param, 1);
}
// 供应商的下拉列表
export function getSuppliersList(param) {
    return Request.http.post(`/SubcategoryHomepageController/getSuppliersList`, param, 1,{"Content-Type": "application/json"});
}