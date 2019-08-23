import { Request } from '../request'
// 第一个圆环的第一个值
export function ringBrightGreen(param) {
    return Request.http.post(`/platform/s-supplier/ringBrightGreen`, param, 1);
}
// 第一个圆环的第二个值
export function ringDarkGreen(param) {
    return Request.http.post(`/platform/s-supplier/ringDarkGreen`, param, 1);
}

// 第二个圆环
export function rightPieChart(param) {
  return Request.http.post(`/platform/s-supplier/rightPieChart`, param, 1);
}
// 表格数据
export function salesOrderInfo(param) {
  return Request.http.post(`/platform/s-supplier/salesOrderInfo`, param, 1);
}