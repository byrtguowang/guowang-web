import { Request } from '../request'

// 登录
export function getNumberOfSuppliers(param) {
  return Request.http.post(`/login`, param, 1);
}