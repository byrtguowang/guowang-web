webpackJsonp([7],{1111:function(t,e,r){r(1254),r(1255);var o=r(264)(r(1148),r(1231),"data-v-690e383e",null);t.exports=o.exports},1115:function(t,e,r){"use strict";var o=Object.prototype.hasOwnProperty,a=Array.isArray,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),n=function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(a(r)){for(var o=[],i=0;i<r.length;++i)void 0!==r[i]&&o.push(r[i]);e.obj[e.prop]=o}}},d=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},o=0;o<t.length;++o)void 0!==t[o]&&(r[o]=t[o]);return r},l=function t(e,r,i){if(!r)return e;if("object"!=typeof r){if(a(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(i&&(i.plainObjects||i.allowPrototypes)||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var n=e;return a(e)&&!a(r)&&(n=d(e,i)),a(e)&&a(r)?(r.forEach(function(r,a){if(o.call(e,a)){var n=e[a];n&&"object"==typeof n&&r&&"object"==typeof r?e[a]=t(n,r,i):e.push(r)}else e[a]=r}),e):Object.keys(r).reduce(function(e,a){var n=r[a];return o.call(e,a)?e[a]=t(e[a],n,i):e[a]=n,e},n)},s=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},c=function(t,e,r){var o=t.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(t){return o}},u=function(t,e,r){if(0===t.length)return t;var o=t;if("symbol"==typeof t?o=Symbol.prototype.toString.call(t):"string"!=typeof t&&(o=String(t)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var a="",n=0;n<o.length;++n){var d=o.charCodeAt(n);45===d||46===d||95===d||126===d||d>=48&&d<=57||d>=65&&d<=90||d>=97&&d<=122?a+=o.charAt(n):d<128?a+=i[d]:d<2048?a+=i[192|d>>6]+i[128|63&d]:d<55296||d>=57344?a+=i[224|d>>12]+i[128|d>>6&63]+i[128|63&d]:(n+=1,d=65536+((1023&d)<<10|1023&o.charCodeAt(n)),a+=i[240|d>>18]+i[128|d>>12&63]+i[128|d>>6&63]+i[128|63&d])}return a},p=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],o=0;o<e.length;++o)for(var a=e[o],i=a.obj[a.prop],d=Object.keys(i),l=0;l<d.length;++l){var s=d[l],c=i[s];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(e.push({obj:i,prop:s}),r.push(c))}return n(e),t},f=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},v=function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},g=function(t,e){return[].concat(t,e)};t.exports={arrayToObject:d,assign:s,combine:g,compact:p,decode:c,encode:u,isBuffer:v,isRegExp:f,merge:l}},1116:function(t,e,r){"use strict";var o=String.prototype.replace,a=/%20/g,i=r(1115),n={RFC1738:"RFC1738",RFC3986:"RFC3986"};t.exports=i.assign({default:n.RFC3986,formatters:{RFC1738:function(t){return o.call(t,a,"+")},RFC3986:function(t){return String(t)}}},n)},1117:function(t,e,r){t.exports={default:r(1120),__esModule:!0}},1118:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var o=r(428),a=r.n(o),i=(r(1119),r(1121)),n=r.n(i),d=r(26),l=r.n(d),s={};l.a.prototype.download="http://47.111.186.36:8101/SalesorderDnbController/listSalesorderDnbb";var c=function(t){return a.a.defaults.withCredentials=!0,t.headers=t.headers["Content-Type"]?t.headers:{"Content-Type":"application/x-www-form-urlencoded"},t.body=t.body||{},"[object Object]"===Object.prototype.toString.call(t.body)&&(t.body=n.a.stringify(t.body)),a.a.request({headers:t.headers,url:t.action,method:t.method,data:t.body,params:t.params,timeout:5e4,emulateJSON:!0}).then(function(t){return t}).catch(function(t){throw t})},u={};["get","post","put","delete"].forEach(function(t){u[t]=function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{headers:{},loadig:!1,includeToken:!1};t=t.toUpperCase();var n,n="http://47.111.186.36:8101";return 1==o&&(e=n+e),c("GET"===t?{action:e,params:r,method:t,headers:a,loading:i.loading,includeToken:i.includeToken}:{action:e,body:r,method:t,headers:a,loading:i.loading,includeToken:i.includeToken})}}),s.http=u},1119:function(t,e,r){"use strict";var o=r(140),a=(r.n(o),r(1117)),i=(r.n(a),r(26));r.n(i)},1120:function(t,e,r){var o=r(42),a=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},1121:function(t,e,r){"use strict";var o=r(1123),a=r(1122),i=r(1116);t.exports={formats:i,parse:a,stringify:o}},1122:function(t,e,r){"use strict";var o=r(1115),a=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},n=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e){var r,d={},l=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,s=e.parameterLimit===1/0?void 0:e.parameterLimit,c=l.split(e.delimiter,s),u=-1,p=e.charset;if(e.charsetSentinel)for(r=0;r<c.length;++r)0===c[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===c[r]?p="utf-8":"utf8=%26%2310003%3B"===c[r]&&(p="iso-8859-1"),u=r,r=c.length);for(r=0;r<c.length;++r)if(r!==u){var f,v,g=c[r],h=g.indexOf("]="),b=-1===h?g.indexOf("="):h+1;-1===b?(f=e.decoder(g,i.decoder,p),v=e.strictNullHandling?null:""):(f=e.decoder(g.slice(0,b),i.decoder,p),v=e.decoder(g.slice(b+1),i.decoder,p)),v&&e.interpretNumericEntities&&"iso-8859-1"===p&&(v=n(v)),v&&e.comma&&v.indexOf(",")>-1&&(v=v.split(",")),a.call(d,f)?d[f]=o.combine(d[f],v):d[f]=v}return d},l=function(t,e,r){for(var o=e,a=t.length-1;a>=0;--a){var i,n=t[a];if("[]"===n&&r.parseArrays)i=[].concat(o);else{i=r.plainObjects?Object.create(null):{};var d="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,l=parseInt(d,10);r.parseArrays||""!==d?!isNaN(l)&&n!==d&&String(l)===d&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(i=[],i[l]=o):i[d]=o:i={0:o}}o=i}return o},s=function(t,e,r){if(t){var o=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/,n=/(\[[^[\]]*])/g,d=r.depth>0&&i.exec(o),s=d?o.slice(0,d.index):o,c=[];if(s){if(!r.plainObjects&&a.call(Object.prototype,s)&&!r.allowPrototypes)return;c.push(s)}for(var u=0;r.depth>0&&null!==(d=n.exec(o))&&u<r.depth;){if(u+=1,!r.plainObjects&&a.call(Object.prototype,d[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(d[1])}return d&&c.push("["+o.slice(d.index)+"]"),l(c,e,r)}},c=function(t){if(!t)return i;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?i.charset:t.charset;return{allowDots:void 0===t.allowDots?i.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:i.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:i.comma,decoder:"function"==typeof t.decoder?t.decoder:i.decoder,delimiter:"string"==typeof t.delimiter||o.isRegExp(t.delimiter)?t.delimiter:i.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:i.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:i.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:i.strictNullHandling}};t.exports=function(t,e){var r=c(e);if(""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var a="string"==typeof t?d(t,r):t,i=r.plainObjects?Object.create(null):{},n=Object.keys(a),l=0;l<n.length;++l){var u=n[l],p=s(u,a[u],r);i=o.merge(i,p,r)}return o.compact(i)}},1123:function(t,e,r){"use strict";var o=r(1115),a=r(1116),i=Object.prototype.hasOwnProperty,n={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,l=Array.prototype.push,s=function(t,e){l.apply(t,d(e)?e:[e])},c=Date.prototype.toISOString,u=a.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:u,formatter:a.formatters[u],indices:!1,serializeDate:function(t){return c.call(t)},skipNulls:!1,strictNullHandling:!1},f=function(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t||"symbol"==typeof t||"bigint"==typeof t},v=function t(e,r,a,i,n,l,c,u,v,g,h,b,_){var m=e;if("function"==typeof c?m=c(r,m):m instanceof Date?m=g(m):"comma"===a&&d(m)&&(m=m.join(",")),null===m){if(i)return l&&!b?l(r,p.encoder,_):r;m=""}if(f(m)||o.isBuffer(m)){if(l){return[h(b?r:l(r,p.encoder,_))+"="+h(l(m,p.encoder,_))]}return[h(r)+"="+h(String(m))]}var y=[];if(void 0===m)return y;var O;if(d(c))O=c;else{var x=Object.keys(m);O=u?x.sort(u):x}for(var k=0;k<O.length;++k){var w=O[k];n&&null===m[w]||(d(m)?s(y,t(m[w],"function"==typeof a?a(r,w):r,a,i,n,l,c,u,v,g,h,b,_)):s(y,t(m[w],r+(v?"."+w:"["+w+"]"),a,i,n,l,c,u,v,g,h,b,_)))}return y},g=function(t){if(!t)return p;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||p.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==t.format){if(!i.call(a.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var o=a.formatters[r],n=p.filter;return("function"==typeof t.filter||d(t.filter))&&(n=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===t.allowDots?p.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:p.charsetSentinel,delimiter:void 0===t.delimiter?p.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:p.encode,encoder:"function"==typeof t.encoder?t.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:p.encodeValuesOnly,filter:n,formatter:o,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:p.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:p.strictNullHandling}};t.exports=function(t,e){var r,o,a=t,i=g(e);"function"==typeof i.filter?(o=i.filter,a=o("",a)):d(i.filter)&&(o=i.filter,r=o);var l=[];if("object"!=typeof a||null===a)return"";var c;c=e&&e.arrayFormat in n?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var u=n[c];r||(r=Object.keys(a)),i.sort&&r.sort(i.sort);for(var p=0;p<r.length;++p){var f=r[p];i.skipNulls&&null===a[f]||s(l,v(a[f],f,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var h=l.join(i.delimiter),b=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),h.length>0?b+h:""}},1148:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1117),a=r.n(o),i=r(1155);e.default={data:function(){return{pageIndex:1,pageSize:9,totalPage:"",workListPageIndex:1,workListTotalPage:"",workListPageSize:5,ProductionOrderList:[],ProductionOrderDetail:{},productionOrderID:"",WorkOrderList:[],productionOrderCode:""}},mounted:function(){this.getProductionOrderList()},methods:{handleCurrentChange:function(t){this.pageIndex=t,this.getProductionOrderList(this.productionOrderID)},workListHandleCurrentChange:function(t){this.workListPageIndex=t,this.getWorkOrderList(this.productionOrderCode)},goSalesOrders:function(){this.$router.push({path:"/Home/salesOrderInformation"})},getProductionOrderList:function(){var t=this;r.i(i.a)(a()({pageNum:this.pageIndex,pageSize:this.pageSize,salesOrderCode:"1100009557"})).then(function(e){0==e.data.status&&(e.data.data.list.forEach(function(t){switch(t.productionOrderStatus){case"1":t.productionOrderStatus="计划";break;case"2":t.productionOrderStatus="确认";break;case"3":t.productionOrderStatus="下达";break;case"4":t.productionOrderStatus="完成"}}),t.ProductionOrderList=e.data.data.list,t.totalPage=e.data.data.pages,t.productionOrderID=e.data.data.list[0].productionOrderID,t.productionOrderCode=e.data.data.list[0].productionOrderCode,t.getProductionOrderDetail(t.productionOrderID),t.getWorkOrderList(t.productionOrderCode))})},getProductionOrder:function(t,e){this.getProductionOrderDetail(t),this.getWorkOrderList(e)},getProductionOrderDetail:function(t){var e=this;r.i(i.a)(a()({productionOrderID:t,salesOrderCode:"1100009557"})).then(function(t){0==t.data.status&&(t.data.data.list.forEach(function(t){switch(t.productionOrderStatus){case"1":t.productionOrderStatus="计划";break;case"2":t.productionOrderStatus="确认";break;case"3":t.productionOrderStatus="下达";break;case"4":t.productionOrderStatus="完成"}}),e.ProductionOrderDetail=t.data.data.list[0])})},getWorkOrderList:function(t){var e=this;r.i(i.b)(a()({pageNum:this.workListPageIndex,pageSize:this.workListPageSize,productionOrderCode:t})).then(function(t){0==t.data.status&&(t.data.data.list.forEach(function(t){switch(t.workOrderStatus){case"1":t.workOrderStatus="计划";break;case"2":t.workOrderStatus="确认";break;case"3":t.workOrderStatus="下达";break;case"4":t.workOrderStatus="完成"}}),e.WorkOrderList=t.data.data.list,e.workListTotalPage=t.data.data.pages)})}},created:function(){},watch:{}}},1155:function(t,e,r){"use strict";function o(t){return i.a.http.post("/ProductionOrderHomepageController/getProductionOrderList",t,1,{"Content-Type":"application/json"})}function a(t){return i.a.http.post("/ProductionOrderHomepageController/getWorkOrderList",t,1,{"Content-Type":"application/json"})}e.a=o,e.b=a;var i=r(1118)},1197:function(t,e,r){e=t.exports=r(262)(!1),e.push([t.i,"#productionOrder .el-pagination.is-background .btn-next,#productionOrder .el-pagination.is-background .btn-prev,#productionOrder .el-pagination.is-background .el-pager li{background:linear-gradient(90deg,rgba(13,99,119,.41),rgba(34,196,172,.41));color:#21e9cc}#productionOrder .el-pagination.is-background .el-pager li:not(.disabled):hover{color:#fff}#productionOrder .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#21cbda}#productionOrder .el-progress-bar__outer{border:1px solid #35b6a2;background:#082a2c}#productionOrder .el-progress-bar__inner{background:linear-gradient(90deg,#0e5662,#19c5d9)}#productionOrder .el-progress-bar{width:90%}#productionOrder .el-progress__text{color:#21e9cc}",""])},1198:function(t,e,r){e=t.exports=r(262)(!1),e.push([t.i,".box[data-v-690e383e]{color:#21e9cc}.meter-box[data-v-690e383e]{height:38px;font-size:0}.meter-box div[data-v-690e383e]{display:inline-block}.meter-box .meter-left[data-v-690e383e]{width:.8%;height:100%;vertical-align:top;background:#22c4ac}.meter-box .meter-right[data-v-690e383e]{font-size:22px;width:99.2%;height:100%;line-height:38px;text-align:left;background:linear-gradient(90deg,rgba(13,99,119,.41),rgba(34,196,172,.41))}.meter-box .meter-right span[data-v-690e383e]{margin-left:6px;letter-spacing:2px;font-size:20px}.meter-box .meter-right p[data-v-690e383e]{float:right;font-size:20px;cursor:pointer;margin-right:20px}.product-table-box[data-v-690e383e]{width:100%;height:500px;margin-top:10px;background:linear-gradient(0deg,rgba(13,99,119,.41),rgba(34,196,172,.41));text-align:-webkit-center;overflow:hidden}.product-table-box .product-table[data-v-690e383e]{width:97%;margin-top:35px;text-align:center}.product-table-box .product-table thead[data-v-690e383e]{font-size:16px;font-weight:700;color:#56efdb;line-height:45px}.product-table-box .product-table tbody[data-v-690e383e]{border:1px solid #23e4c7;margin-top:5px}.product-table-box .product-table tr[data-v-690e383e]{height:45px;cursor:pointer}.product-table-box .product-table tr[data-v-690e383e]:nth-child(2n){background:#0c3c3e}.detail-title[data-v-690e383e]{margin-top:10px;display:flex}.detail-title .meter-box[data-v-690e383e]{flex:1}.detail-title .workList-title[data-v-690e383e]{margin-left:10px}.detail-box[data-v-690e383e]{margin-top:10px;display:flex}.detail-box .detail-content[data-v-690e383e]{flex:1;height:300px}.detail-box .detailInfo[data-v-690e383e]{display:flex}.detail-box .detailInfo .detailInfo-left[data-v-690e383e]{flex:2;margin-right:5px;background:linear-gradient(90deg,rgba(13,99,119,.41),rgba(34,196,172,.41))}.detail-box .detailInfo .detailInfo-left .detailInfo-mennu[data-v-690e383e]{display:inline-block;margin-left:30px}.detail-box .detailInfo .detailInfo-left .detailInfo-mennu p[data-v-690e383e]{margin-top:15px}.detail-box .detailInfo .detailInfo-right[data-v-690e383e]{flex:3;background:linear-gradient(90deg,rgba(13,99,119,.41),rgba(34,196,172,.41))}.detail-box .detailInfo .detailInfo-right .detailInfo-info[data-v-690e383e]{width:180px;vertical-align:top}.detail-box .work-list-box[data-v-690e383e]{margin-left:10px;margin-top:0;background:linear-gradient(90deg,rgba(13,99,119,.41),rgba(34,196,172,.41))}.detail-box .work-list-box .product-table[data-v-690e383e]{margin-top:10px}.detail-box .work-list-box .product-table thead[data-v-690e383e]{display:table;width:100%}.detail-box .work-list-box .product-table tbody[data-v-690e383e]{display:block}.detail-box .work-list-box .product-table tbody tr[data-v-690e383e]{display:table;width:100%}",""])},1231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box",attrs:{id:"productionOrder"}},[r("div",{staticClass:"meter-box"},[r("div",{staticClass:"meter-left"}),t._v(" "),r("div",{staticClass:"meter-right"},[r("span",[t._v("生产订单列表")]),t._v(" "),r("p",{on:{click:t.goSalesOrders}},[t._v("返回销售订单详情页 >")])])]),t._v(" "),r("div",{staticClass:"product-table-box"},[r("table",{staticClass:"product-table"},[t._m(0),t._v(" "),r("tbody",[t._l(t.ProductionOrderList,function(e,o){return r("tr",{key:o,on:{click:function(r){return t.getProductionOrder(e.productionOrderID,e.productionOrderCode)}}},[r("td",[t._v(t._s(e.productionOrderCode))]),t._v(" "),r("td",[t._v(t._s(e.productionOrderNum))]),t._v(" "),r("td",[t._v(t._s(e.planStartDate))]),t._v(" "),r("td",[t._v(t._s(e.planFinishDate))]),t._v(" "),r("td",[t._v(t._s(e.realStartDate))]),t._v(" "),r("td",[r("el-progress",{attrs:{percentage:this.completionRate||0}})],1),t._v(" "),r("td",[t._v(t._s(e.productionOrderStatus))])])}),t._v(" "),r("tr",[r("td",{attrs:{colspan:"7"}},[r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.pageIndex,total:t.totalPage*t.pageSize},on:{"current-change":t.handleCurrentChange,"prev-click":t.handleCurrentChange,"next-click":t.handleCurrentChange}})],1)])])],2)])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"detail-box"},[r("div",{staticClass:"detail-content detailInfo"},[r("div",{staticClass:"detailInfo-left"},[t._m(2),t._v(" "),r("div",{staticClass:"detailInfo-mennu detailInfo-info"},[r("p",[t._v(t._s(t.ProductionOrderDetail.productionOrderNum))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.productionOrderStatus))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.planStartDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.planFinishDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.realStartDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.realFinishDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.workShop))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.CreateTime))])])]),t._v(" "),r("div",{staticClass:"detailInfo-left detailInfo-right"},[t._m(3),t._v(" "),r("div",{staticClass:"detailInfo-mennu detailInfo-info"},[r("p",[t._v(t._s(t.ProductionOrderDetail.productionOrderCode))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.sgpurchaseOrder))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.salesOrderCode))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.salesOrderProjectNo))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.materialsCode))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.productionOrderMaterials))])])])]),t._v(" "),r("div",{staticClass:"product-table-box detail-content work-list-box"},[r("table",{staticClass:"product-table"},[t._m(4),t._v(" "),r("tbody",[t._l(t.WorkOrderList,function(e,o){return r("tr",{key:o},[r("td",[t._v(t._s(e.workOrderCode))]),t._v(" "),r("td",[t._v(t._s(e.workOrderNum))]),t._v(" "),r("td",[t._v(t._s(e.planStartDate))]),t._v(" "),r("td",[t._v(t._s(e.planFinishDate))]),t._v(" "),r("td",[t._v(t._s(e.realStartDate))]),t._v(" "),r("td",[t._v(t._s(e.realFinishDate))]),t._v(" "),r("td",[t._v(t._s(e.workOrderStatus))])])}),t._v(" "),r("tr",[r("td",{attrs:{colspan:"7"}},[r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.workListPageIndex,total:t.workListTotalPage*t.workListPageSize},on:{"current-change":t.workListHandleCurrentChange,"prev-click":t.workListHandleCurrentChange,"next-click":t.workListHandleCurrentChange}})],1)])])],2)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("td",[t._v("生产订单号")]),t._v(" "),r("td",[t._v("订单数量")]),t._v(" "),r("td",[t._v("计划开始日期")]),t._v(" "),r("td",[t._v("计划结束日期")]),t._v(" "),r("td",[t._v("实际开始日期")]),t._v(" "),r("td",{attrs:{width:"200"}},[t._v("进度")]),t._v(" "),r("td",[t._v("订单状态")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detail-title"},[r("div",{staticClass:"meter-box"},[r("div",{staticClass:"meter-left"}),t._v(" "),r("div",{staticClass:"meter-right"},[r("span",[t._v("生产订单详细信息")])])]),t._v(" "),r("div",{staticClass:"meter-box workList-title"},[r("div",{staticClass:"meter-left"}),t._v(" "),r("div",{staticClass:"meter-right"},[r("span",[t._v("工单列表")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detailInfo-mennu"},[r("p",[t._v("订单数量：")]),t._v(" "),r("p",[t._v("订单状态：")]),t._v(" "),r("p",[t._v("计划开始日期：")]),t._v(" "),r("p",[t._v("计划结束日期：")]),t._v(" "),r("p",[t._v("实际开始日期：")]),t._v(" "),r("p",[t._v("实际结束日期：")]),t._v(" "),r("p",[t._v("工厂/车间：")]),t._v(" "),r("p",[t._v("建立时间：")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detailInfo-mennu"},[r("p",[t._v("生产订单号：")]),t._v(" "),r("p",[t._v("国网采购订单号：")]),t._v(" "),r("p",[t._v("销售订单号：")]),t._v(" "),r("p",[t._v("销售订单号项目号：")]),t._v(" "),r("p",[t._v("物资名称：")]),t._v(" "),r("p",[t._v("物料：")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("td",[t._v("工单号")]),t._v(" "),r("td",[t._v("工单数量")]),t._v(" "),r("td",[t._v("计划开始日期")]),t._v(" "),r("td",[t._v("计划结束日期")]),t._v(" "),r("td",[t._v("实际开始日期")]),t._v(" "),r("td",[t._v("实际结束日期")]),t._v(" "),r("td",[t._v("工单状态")])])}]}},1254:function(t,e,r){var o=r(1197);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(263)("6b508fdd",o,!0)},1255:function(t,e,r){var o=r(1198);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(263)("b9882e12",o,!0)}});