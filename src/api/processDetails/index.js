import { Request } from '../request'


// 年度报警
export function TheAnnualNumberOf(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/TheAnnualNumberOf`, param, 1 ,{"Content-Type": "application/json"});
}

// 月度报警
export function TheNumberOfThisMonth(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/TheNumberOfThisMonth`, param, 1 ,{"Content-Type": "application/json"});
}

// 日度报警
export function TheNumberOf(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/TheNumberOf`, param, 1 ,{"Content-Type": "application/json"});
}

// 24小时左侧柱状图
export function listCountBarGraphDDataLogDNB(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listCountBarGraphDDataLogDNB`, param, 1 ,{"Content-Type": "application/json"});
}

// 24小时右侧柱状图
export function listConcBarGraphDDataLogDNB(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listConcBarGraphDDataLogDNB`, param, 1 ,{"Content-Type": "application/json"});
}