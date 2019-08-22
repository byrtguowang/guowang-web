import { Request } from '../request'

// 登录
export function login(param) {
  return Request.http.post(`/login`, param, 1);
}