import { Request } from '../request'

// 表格数据
export function salesOrderInfo(param) {
  return Request.http.post(`/platform/s-supplier/salesOrderInfo`, param, 1);
}