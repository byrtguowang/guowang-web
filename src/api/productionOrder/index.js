import { Request } from '../request'


// 生产订单列表
export function getProductionOrderList(param) {
  return Request.http.post(`/ProductionOrderHomepageController/getProductionOrderList`, param, 1 ,{"Content-Type": "application/json"});
}

// 工单列表
export function getWorkOrderList(param) {
  return Request.http.post(`/ProductionOrderHomepageController/getWorkOrderList`, param, 1 ,{"Content-Type": "application/json"});
}