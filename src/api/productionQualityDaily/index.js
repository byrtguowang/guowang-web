import { Request } from '../request'
// 生产质量日报
export function productionDaily(param) {
    return Request.http.post(`/platform/s-supplier/productionDaily`, param, 1);
}