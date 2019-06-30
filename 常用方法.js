const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};
const Regep = {
  num: /^\d+$/,
  numx: /\d+/,
  abc: /^[a-zA-Z]+$/,
  abcLowerx: /[a-z]+/,
  abcUpperx: /[A-Z]+/,
  certificateno: /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/,
  mobile: /^1[34578]\d{9}$/,
  cardID: /(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
  telephoneAndMobile: /^(0\d{2,3}\-)?([2-9]\d{6,7})+(\-\d{1,6})?|((\+86|\+86\-)|(86|86\-)|(0086|0086\-))?1[3|5|7|8]\d{9}$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  symbolx: /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]+/,
  Taiwan: /^([0-9]{8}|[0-9]{10})$/,
  HongKongMacau: /^[a-zA-Z0-9]{6,10}$/,
  passport: /^[a-zA-Z0-9]{5,17}$/
};
export default {
  toTree(data) {
    // 删除 所有 children,以防止多次调用
    data.forEach(function(item) {
      delete item.children;
    });

    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    var map = {};
    data.forEach(function(item) {
      map[item.id] = item;
    });
    //        console.log(map);
    var val = [];
    data.forEach(function(item) {
      // 以当前遍历项，的pid,去map对象中找到索引的id
      var parent = map[item.pid];
      // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
      if (parent) {
        (parent.children || (parent.children = [])).push(item);
      } else {
        //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
        val.push(item);
      }
    });
    return val;
  },
  //日期时间 格式化(yyyy-MM-dd HH:mm:ss) 2015-12-04 14:27:29
  dateTimeFormatHelper(sbs) {
    if (sbs) {
      var sbsj = sbs.toString();
      return (
        sbsj.substring(0, 4) +
        "-" +
        sbsj.substring(4, 6) +
        "-" +
        sbsj.substring(6, 8) +
        "   " +
        sbsj.substring(8, 10) +
        ":" +
        sbsj.substring(10, 12) +
        ":" +
        sbsj.substring(12, 14)
      );
    }
  },
  //转化为时间戳2015-12-21 12:21:00
  toTime(apptime) {
    return Date.parse(apptime.replace(/-/gi, "/"));
  },
  // 获取时间戳
  getTime() {
    return new Date().getTime();
  },
  isObj(c) {
    return Object.propotype.toString.apply(c) === "object Object";
  },
  // 校验省份证
  validCertificateno(value, cctype) {
    if (cctype === "0" && !Regep.cardID.test(value)) {
      return "身份证格式不正确";
    }
    if (cctype === "1" && !Regep.passport.test(value)) {
      return "护照格式不正确";
    }
    if (cctype === "2" && !Regep.Taiwan.test(value)) {
      return "港澳通行证格式不正确";
    }
    if (cctype === "3" && !Regep.passport.test(value)) {
      return "台胞证格式不正确";
    }
    if (
      cctype === "-1" &&
      (!Regep.cardID.test(value) &&
        !Regep.passport.test(value) &&
        !Regep.Taiwan.test(value) &&
        !Regep.passport.test(value))
    ) {
      return "账号格式不正确";
    }
    return false;
  }
};
