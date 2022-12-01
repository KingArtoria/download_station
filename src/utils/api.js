import request from '../utils/request';
import qs from 'qs';
/* 登录 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/login/login',
    data: qs.stringify(data),
  });
};
/* 首页列表 */
export const index = data => {
  return request({
    method: 'POST',
    url: '/app/index',
    data: qs.stringify(data),
  });
};
/* 下载app后删除 */
export const memberApp = data => {
  return request({
    method: 'POST',
    url: '/app/member_app',
    data: qs.stringify(data),
  });
};