import { Request } from '../request'


// 摄像头列表
export function cameraList(param) {
  return Request.http.post(`//cameraManege/cameraList`, param, 1);
}

// 状态
export function statusBar(param) {
  return Request.http.post(`/cameraManege/statusBar`, param, 1);
}
