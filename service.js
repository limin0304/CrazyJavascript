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
  employeeLogin: 'get_cust_login/memberLogin', // 登录
  // 通过法人手机号查询登录账户
  getCorporationLogin: 'get_cust_login/getCorporationCompany',
  // 企业法人手机号登录
  corporationLogin: 'get_cust_login/corporationLogin',
  getMsgCode: 'setSendVerificationCode/SendRegisterVerificationCode', // 发送短信验证码
  // 注册
  orgRegister: 'setAppRegisterService/orgRegister',
  personRegister: 'setAppRegisterService/personRegister',
  // 三和四要素实名认证
  realNameAuth: 'setAppCertificationService/realNameAuth',
  // 修改密码1
  setPwdStep_1: 'setChangePwdOauth/changePwdInServiceStepFirst',
  // 修改密码2
  setPwdStep_2: 'setChangePwdOauth/changePwdInServiceStepSencond',
  // 重置密码
  changePwd: 'setChangePwd/changePwd',
  // 忘记密码获取短信验证码
  echoMobile: 'setChangePwd/echoMobile',
  // 用户注销
  userLogOff: 'setCustStatus/updCustStatus',

  /* 账户中心 */
  personInfo: 'setPersonManger/personInfo', // 个人信息查询
  personInfoUpdate: 'setPersonManger/updatePersonInfo', // 个人信息修改
  companyPersonInfo: 'setCompanyPersonInfo/companyPersonInfo', // 企业信息查询
  companyPersonInfoUpdate: 'setCompanyPersonInfoUpdate/companyPersonInfoUpdate', // 企业个人信息修改
  getCustIsSave: 'getCustIsSave/getCustIsSave', // 查看数据是否被保存
  getlogout: 'getOrganLogoutDetails/getOrganLogoutDetails', // 注销
  forgetEmployeePwd: 'forgetEmployeePwd/forgetEmployeePwd', // 忘记密码
  updEmployeePwd: 'setEmPwd/updEmployeePwd', // 更改密码
  /* 公共相关 */
  getSysDict: 'getSysdict/getSysDict',
  getqueryProServiceList: 'getqueryProServiceList/queryProServiceList',
  /* 我的认证 */
  getRole: 'getCustRoleListService/getCustRoleListService', // 根据客户类型获取角色列表
  setRoleCertification:
    'setCustRoleAuthApplyService/setCustRoleAuthApplyService', // 客户角色认证
  getRoleInfo: 'getCustRoleAuthListService/getCustRoleAuthListService', // 根据客户ID获取已认证的角色信息
  getRoleApply: 'getCustRoleApplyListService/getCustRoleApplyListService', // 根据客户ID获取正在申请角色
  getFlowType: 'getCustProStates/getCustProStates', // 查询流程状态
  /* 会商 */
  getEnterpriseList: 'setEnterprise/getEnterpriseList', // 相关企业
  checkInviteCode: 'setEnterprise/checkInviteCode', // 认证邀请
  companyPersonInfoByEmployee: 'getOrganInfo/companyPersonInfoByEmployee', // 查询企业详情
  /* 标签 */
  getLabel: 'labelService/qryLabelCustomList', // 查询标签
  getCustLabel: 'labelCustomService/getCustLabelList', // 查询用户关联标签
  setCustLabel: 'labelCustomService/addLabelCustRel', // 设置用户关联标签

  /* 首页 */
  getFundPer: 'getIPrdFundPersonListService/getIPrdFundPersonListService', // 个人资金查询
  getFundPerOwn: 'getIPrdFundPersonListOwnService/getIPrdFundPersonListService', // 个人资金查询我的发布
  getFundPerDetail: 'getIPrdFundPersonDtlService/getIPrdFundPersonDtlService', // 个人资金详情
  getFundOrg: 'getIPrdFundOrgListService/getIPrdFundOrgListService', // 企业资金查询
  getFundOrgOwn: 'getIPrdFundOrgListOwnService/getIPrdFundOrgListService', // 企业资金查询我的发布
  getFundOrgDetail: 'getIPrdFundOrgDtlService/getIPrdFundOrgDtlService', // 企业资金详情
  getServicePer: 'getIPrdOrgListService/getIPrdOrgListService', // 金服服务查询
  getServicePerDetail: 'getIPrdOrgDtlService/getIPrdOrgDtlService', // 金服服务详情
  getServiceOrg: 'getIPrdOrgListService/getIPrdOrgListService', // 服务机构查询
  getServiceOrgOwn: 'getIPrdOrgListOwnService/getIPrdOrgListService', // 服务机构查询我的发布
  getServiceOrgDetail: 'getIPrdOrgDtlService/getIPrdOrgDtlService', // 服务机构详情
  getProject: 'getIPrdItemListService/getIPrdItemListService', // 项目查询
  getProjectOwn: 'getIPrdItemListOwnService/getIPrdItemListService', // 项目查询我的发布
  getProjectDetail: 'getIPrdItemDtlService/getIPrdItemDtlService', // 项目详情
  queryBanner: 'bannerService/qryBanner', // 首页banner查询
  queryHomeMsg: 'homeMsgService/qryHomeMsg', // 首页消息查询
  getHotProject: 'hotConfigCustomService/qryCustomHotConfig', // 查询热门项目
  getHotFundPer:
    'getHostIPrdFundPersonListService/getHostIPrdFundPersonListService', // 查询个人热门资金
  getHotFundOrg: 'getHostIPrdOrgFundListService/getHostIPrdOrgFundListService', // 查询热门企业资金
  getInterest: 'getPrdSavorListService/getPrdSavorListService', // 查询我感兴趣
  qryConnectInfo: 'connectUsCustom/qryConnectInfo', // 查询联系我们

  queryNews: 'newsService/qryNews', // 新闻
  addPageView: 'newsService/addPageView', // 标记已读

  /* 发布 */
  setIPrdFundPersonService: 'setIPrdFundPersonService/setIPrdFundPersonService', // 个人资金保存
  setSubIPrdFundPersonService:
    'setSubIPrdFundPersonService/setSubIPrdFundPersonService', // 个人资金发布
  setIPrdFundOrgService: 'setIPrdFundOrgService/setIPrdFundOrgService', // 企业资金保存
  setSubIPrdFundOrgService: 'setSubIPrdFundOrgService/setSubIPrdFundOrgService', // 企业资金发布
  setProject: 'setIPrdItemService/setIPrdItemService', // 项目保存
  publishProject: 'setSubIPrdItemService/setSubIPrdItemService', // 项目发布
  setMember: 'setIPrdItemTeamService/setIPrdItemTeamService', // 团队成员保存
  publishMember: 'setSubIPrdItemTeamService/setSubIPrdItemTeamService', // 团队成员发布
  setFinance: 'setIPrdItemFinService/setIPrdItemFinService', // 财务保存
  publishFinance: 'setSubIPrdItemFinService/setSubIPrdItemFinService', // 财务发布
  setFinanceHis: 'setIPrdItemFinOrgService/setIPrdItemFinOrgService', // 融资历史保存
  publishFinanceHis: 'setSubIPrdItemFinOrgService/setSubIPrdItemFinOrgService', // 融资历史发布
  setService: 'setIPrdOrgService/setIPrdOrgService', // 服务机构保存
  publishService: 'setSubIPrdOrgService/setSubIPrdOrgService', // 服务机构发布

  /* 消息 */
  getMsgTypeList: 'getLoginSmsService/getLoginSmsClassInfo', // 查询登录客户消息各种类型第一条消息
  getMsgList: 'getLoginSmsService/getLoginSmsInfo', // 查询登录客户消息各种类型的列表数据
  getMsgUnreadCount: 'getLoginSmsService/getLoginSmsReadCount', // 查询登录客户消息未读总数
  setMsgRead: 'setLoginSmsService/setLoginSmsCountInfo', // 设置未读消息为已读

  /* 活动 */
  getActivityList: 'activity/qryActivityList', // 列表详情
  applyAcitvity: 'activityCustomService/acitvityApply', // 报名
  cacelAcitvity: 'activityCustomService/activityCancel', // 取消报名
  getApplyStatus: 'activityCustomService/qryCustApply', // 报名状态

  /* 设置相关 */
  qrySuggestConfig: 'suggestManager/qrySuggestConfig',
  addSuggest: 'suggestManager/addSuggest',

  /* 收藏相关 */
  getPrdCollectService: 'getPrdCollectService/getPrdCollectService',
  setPrdCollectService: 'setPrdCollectService/setPrdCollectService',

  //找服务，金服服务
  getGoldServiceProList: 'setGoldServiceManager/getGoldServiceProList',
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