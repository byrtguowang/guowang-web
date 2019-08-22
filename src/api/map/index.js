import { Request } from '../request'


// 左上部 概况信息
export function getNumberOfSuppliers(param) {
  return Request.http.post(`/SubcategoryHomepageController/getNumberOfSuppliers`, param, 1);
}

// 左下部 运行状态
export function getOperatingStatus(param) {
  return Request.http.post(`/SubcategoryHomepageController/getOperatingStatus`, param, 1);
}

// 左中部 订单状态 订单完成率
export function getOrderCompletionRate(param) {
  return Request.http.post(`/SubcategoryHomepageController/getOrderCompletionRate`, param, 1);
}

// 左中部 订单状态 生产质量监控
export function getQualityControl(param) {
  return Request.http.post(`/SubcategoryHomepageController/getQualityControl`, param, 1);
}

// 中间下部 生产监控
export function getProductionControl(param) {
  return Request.http.post(`/SubcategoryHomepageController/getProductionControl`, param, 1);
}

// 地图数据
export function getSuppliersList(param) {
  return Request.http.post(`/SubcategoryHomepageController/getSuppliersList`, param, 1,{"Content-Type": "application/json"});
}
