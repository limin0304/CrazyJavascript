export default {
  
  toTree(data) {
    // 删除 所有 children,以防止多次调用
    data
      .forEach(function (item) {
        delete item.children;
      });

    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    var map = {};
    data.forEach(function (item) {
      map[item.id] = item;
    });
    //        console.log(map);
    var val = [];
    data.forEach(function (item) {
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
      return sbsj.substring(0, 4) + "-" + sbsj.substring(4, 6) + "-" + sbsj.substring(6, 8) + "   " + sbsj.substring(8, 10) + ":" + sbsj.substring(10, 12) + ":" + sbsj.substring(12, 14);
    }
  }, 
  //转化为时间戳2015-12-21 12:21:00 
  toTime (apptime) {
    return Date.parse(apptime.replace(/-/gi, "/"));
  },
  // 获取时间戳
  getTime() {
    return  new Date().getTime();
  },
  isObj(c) {
    return Object.propotype.toString.apply(c)  === "object Object"
  }
}
