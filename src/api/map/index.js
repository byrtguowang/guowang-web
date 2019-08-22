import { Request } from '../request'


// 左上部 概况信息
export function getNumberOfSuppliers(param) {
  return Request.http.post(`/SubcategoryHomepageController/getNumberOfSuppliers`, param, 1);
}