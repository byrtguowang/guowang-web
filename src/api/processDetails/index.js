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

// 电能表基本误差测试总结论表采集数据
export function listDBasicErrorDNB(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listDBasicErrorDNB`, param, 1,{"Content-Type": "application/json"});
}

// 电能表参数设置采集数据表
export function listDParameterDNB(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listDParameterDNB`, param, 1 ,{"Content-Type": "application/json"});
}

// 电能表耐压测试采集数据
export function listPressure(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listPressure`, param, 1 ,{"Content-Type": "application/json"});
}

// 电能表日计时误差实验数据采集表
export function listTimingError(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listTimingError`, param, 1 ,{"Content-Type": "application/json"});
}

// 电能表单板测试采集数据
export function listVeneerTest(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listVeneerTest`, param, 1 ,{"Content-Type": "application/json"});
}

// 基本误差详情数据列表
export function listBasicErrorItems(param) {
  return Request.http.post(`/ProcessDetailInterfaceController/listBasicErrorItems`, param, 1 ,{"Content-Type": "application/json"});
}
