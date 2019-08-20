import Vue from 'vue';
/**
 * 存储localStorage
 */
export const setStorage = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStorage = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}



/**
 * 获取url ?后面的传值
 */
export const getQuery = (key) => {
    const location = window.location;
    const query = {};
    const params = location.href.split('?')[1] || ''
    if (params) {
        params.split('&').forEach((item) => {
            const queryPair = item.split('=');
            query[queryPair[0]] = queryPair[1];
        });
    }

    const rst = query[key];
    //解码一个编码的 URI。
    return rst ? window.decodeURIComponent(query[key]) : '';
}

/**
 * 捕获异常弹窗
 */
export const customToast = e => {
    Vue.$vux.toast.show({
        text: e.message,
        type: 'text',
        width: '80%',
        time: 1500
    })
    if (e.code === 401 || e.code === 403) {
        window.location.href = "/#/login";
    }
}

/**
 * 处理错误
 */
// export const errorHandler = e => {
//     if (e.error) {
//         Vue.$vux.toast.show({
//             text: e.message,
//             type: 'text',
//             width: '80%'
//         })

//         return;
//     }
// }


/**
 * 测试工具
 */
export const getTestUtil = k => {
    return k + ',' + k;
}

export const filterParams = params => {
    if (Object.prototype.toString.call(params) === '[object Object]') {
        for (var key in params) {
            if (params[key] === undefined) {
                delete params[key];
            } else if (typeof params[key] === 'string') {
                (params[key] = trim(params[key])) === '' && (delete params[key]);
            } else if (params[key] instanceof Date) {
                params[key] = format(params[key]);
            } else if (typeof params[key] === 'object') {
                params[key] = filterParams(params[key]);
            }
        }
    }
    return params;
}
//过滤左右空格
function trim(str) {
    if (!str) return str;
    return str.replace(/(^\s*)|(\s*$)/g, "");
}


//保存搜索记录-单条
export const saveSearchItem = item => {
    let searchList = sessionStorage.getItem('localSearchList') || null;
    if (searchList == null) {
        searchList = [];
        searchList.push(item);
    } else {
        searchList = JSON.parse(searchList);
        if (searchList.length >= 5) {
            searchList.pop();
        }
        searchList.unshift(item);
    }
    sessionStorage.setItem('localSearchList', JSON.stringify(searchList));
}
export const getSearchList = () => {
    let searchList = sessionStorage.getItem('localSearchList') || null;
    if (searchList) searchList = JSON.parse(searchList);
    return searchList;
}
//删除搜索记录
export const clearSearchList = () => {
    let searchList = sessionStorage.removeItem('localSearchList') || null;
}

//转换时间格式
/**
 * 
 * @param {时间} time 
 * @param {转换类型1:年-月-日:时-分-秒,2:年-月-日,3:时-分-秒 以此类推} type 
 */
export const timeChange = (time, type) => {
    if (time === null) {
        return '-'
      }
    // parseInt()表示把字符串格式转化为数字格式  
      var myDate = new Date(parseInt(time))
      var year = myDate.getFullYear()
      var month = parseInt(myDate.getMonth()) + 1
      var day = myDate.getDate()
      var hours = myDate.getHours()
      var minutes = myDate.getMinutes()
      var second = myDate.getSeconds()
      var fDate = ''
      switch (type) {
        case 1:
          fDate = year + '-' + add0(month) + '-' + add0(day) + ' ' + add0(hours) + ':' + add0(minutes) + ':' + add0(second)
          break
        case 2:
          fDate = year + '-' + add0(month) + '-' + add0(day)
          break
        case 3:
          fDate = add0(hours) + ':' + add0(minutes) + ':' + add0(second)
          break
        case 4:
          fDate = year + '-' + add0(month)
          break
        case 5:
          fDate = add0(month) + '-' + add0(day)
          break
        case 6:
          fDate = add0(hours) + ':' + add0(minutes)
          break
        case 7:
          fDate = add0(minutes) + ':' + add0(second)
          break
        case 8:
          fDate = year
          break
        case 9:
          fDate = add0(month)
          break
        case 10:
          fDate = add0(day)
          break
        case 11:
          fDate = add0(hours)
          break
        case 12:
          fDate = add0(minutes)
          break
        case 13:
          fDate = add0(second)
          break
        default:
          break
      }
      return fDate
}

export const add0 = function (m){
    return m < 10 ? '0' + m : m
}