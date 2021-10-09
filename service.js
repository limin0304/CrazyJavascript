/*
 * @Author: mus
 * @Date: 2019-10-19 15:28:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-23 19:32:46
 * @Description: api
 */
import request from './request';

const apisfx = '/openapi/';
// const apisfx = '/api/';
// const target = 'http://49.4.91.18:91/';
const target = 'http://49.4.23.26:91/';
// const target = 'http://117.78.18.96:81/';

const shareTarget = 'http://49.4.23.26:82/'; // 开发测试
// const shareTarget = 'http://49.4.91.18:82/';  // 生产

const Api = {
  /* 账户相关 */
  employeeLogin: 'get_cust_login/memberLogin3', // 登录
};

let Service = {
  logout() {
    return request(target + '/logout');
  },
  // getLoginName() {
  //   return request(target + '/login_name');
  // },
};

Object.keys(Api).forEach(key => {
  const [api_name, method] = Api[key].split('/');
  Service[key] = (opts = {}) => {
    let param = {
      version: opts.version || '1.0.0',
      api_name,
      method,
      status: opts.status || 'oauth',
      timestamp: +new Date(),
      params: JSON.stringify(opts.param || {}),
    };
    opts = {
      method: 'POST',
      body: param,
    };
    return request(target + apisfx + method, opts);
  };
});
export { target, shareTarget };
export default Service;