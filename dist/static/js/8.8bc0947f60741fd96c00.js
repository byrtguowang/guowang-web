webpackJsonp([8],{1078:function(t,e,r){r(1223),r(1224);var n=r(261)(r(1143),r(1200),"data-v-690e383e",null);n.options.__file="D:\\aaawork\\gw\\Project\\guowang-web\\src\\components\\page\\productionOrder.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] productionOrder.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},1082:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,a=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),i=function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(o(r)){for(var n=[],a=0;a<r.length;++a)void 0!==r[a]&&n.push(r[a]);e.obj[e.prop]=n}}},d=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},l=function t(e,r,a){if(!r)return e;if("object"!=typeof r){if(o(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(a&&(a.plainObjects||a.allowPrototypes)||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var i=e;return o(e)&&!o(r)&&(i=d(e,a)),o(e)&&o(r)?(r.forEach(function(r,o){if(n.call(e,o)){var i=e[o];i&&"object"==typeof i&&r&&"object"==typeof r?e[o]=t(i,r,a):e.push(r)}else e[o]=r}),e):Object.keys(r).reduce(function(e,o){var i=r[o];return n.call(e,o)?e[o]=t(e[o],i,a):e[o]=i,e},i)},s=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},c=function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},p=function(t,e,r){if(0===t.length)return t;var n=t;if("symbol"==typeof t?n=Symbol.prototype.toString.call(t):"string"!=typeof t&&(n=String(t)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var d=n.charCodeAt(i);45===d||46===d||95===d||126===d||d>=48&&d<=57||d>=65&&d<=90||d>=97&&d<=122?o+=n.charAt(i):d<128?o+=a[d]:d<2048?o+=a[192|d>>6]+a[128|63&d]:d<55296||d>=57344?o+=a[224|d>>12]+a[128|d>>6&63]+a[128|63&d]:(i+=1,d=65536+((1023&d)<<10|1023&n.charCodeAt(i)),o+=a[240|d>>18]+a[128|d>>12&63]+a[128|d>>6&63]+a[128|63&d])}return o},u=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],a=o.obj[o.prop],d=Object.keys(a),l=0;l<d.length;++l){var s=d[l],c=a[s];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(e.push({obj:a,prop:s}),r.push(c))}return i(e),t},A=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},f=function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},b=function(t,e){return[].concat(t,e)};t.exports={arrayToObject:d,assign:s,combine:b,compact:u,decode:c,encode:p,isBuffer:f,isRegExp:A,merge:l}},1083:function(t,e,r){"use strict";var n=String.prototype.replace,o=/%20/g,a=r(1082),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};t.exports=a.assign({default:i.RFC3986,formatters:{RFC1738:function(t){return n.call(t,o,"+")},RFC3986:function(t){return String(t)}}},i)},1084:function(t,e,r){t.exports={default:r(1087),__esModule:!0}},1085:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(420),o=r.n(n),a=(r(1086),r(1088)),i=r.n(a),d=r(26),l=r.n(d),s={};l.a.prototype.download="http://47.111.186.36:8101/SalesorderDnbController/listSalesorderDnbb";var c=function(t){return o.a.defaults.withCredentials=!0,t.headers=t.headers["Content-Type"]?t.headers:{"Content-Type":"application/x-www-form-urlencoded"},t.body=t.body||{},"[object Object]"===Object.prototype.toString.call(t.body)&&(t.body=i.a.stringify(t.body)),o.a.request({headers:t.headers,url:t.action,method:t.method,data:t.body,params:t.params,timeout:5e4,emulateJSON:!0}).then(function(t){return t}).catch(function(t){throw t})},p={};["get","post","put","delete"].forEach(function(t){p[t]=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{headers:{},loadig:!1,includeToken:!1};t=t.toUpperCase();var i,i="http://47.111.186.36:8101";return 1==n&&(e=i+e),c("GET"===t?{action:e,params:r,method:t,headers:o,loading:a.loading,includeToken:a.includeToken}:{action:e,body:r,method:t,headers:o,loading:a.loading,includeToken:a.includeToken})}}),s.http=p},1086:function(t,e,r){"use strict";var n=r(140),o=(r.n(n),r(1084)),a=(r.n(o),r(26));r.n(a)},1087:function(t,e,r){var n=r(42),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},1088:function(t,e,r){"use strict";var n=r(1090),o=r(1089),a=r(1083);t.exports={formats:a,parse:o,stringify:n}},1089:function(t,e,r){"use strict";var n=r(1082),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},i=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e){var r,d={},l=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,s=e.parameterLimit===1/0?void 0:e.parameterLimit,c=l.split(e.delimiter,s),p=-1,u=e.charset;if(e.charsetSentinel)for(r=0;r<c.length;++r)0===c[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===c[r]?u="utf-8":"utf8=%26%2310003%3B"===c[r]&&(u="iso-8859-1"),p=r,r=c.length);for(r=0;r<c.length;++r)if(r!==p){var A,f,b=c[r],g=b.indexOf("]="),v=-1===g?b.indexOf("="):g+1;-1===v?(A=e.decoder(b,a.decoder,u),f=e.strictNullHandling?null:""):(A=e.decoder(b.slice(0,v),a.decoder,u),f=e.decoder(b.slice(v+1),a.decoder,u)),f&&e.interpretNumericEntities&&"iso-8859-1"===u&&(f=i(f)),f&&e.comma&&f.indexOf(",")>-1&&(f=f.split(",")),o.call(d,A)?d[A]=n.combine(d[A],f):d[A]=f}return d},l=function(t,e,r){for(var n=e,o=t.length-1;o>=0;--o){var a,i=t[o];if("[]"===i&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var d="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(d,10);r.parseArrays||""!==d?!isNaN(l)&&i!==d&&String(l)===d&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[],a[l]=n):a[d]=n:a={0:n}}n=a}return n},s=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,d=r.depth>0&&a.exec(n),s=d?n.slice(0,d.index):n,c=[];if(s){if(!r.plainObjects&&o.call(Object.prototype,s)&&!r.allowPrototypes)return;c.push(s)}for(var p=0;r.depth>0&&null!==(d=i.exec(n))&&p<r.depth;){if(p+=1,!r.plainObjects&&o.call(Object.prototype,d[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(d[1])}return d&&c.push("["+n.slice(d.index)+"]"),l(c,e,r)}},c=function(t){if(!t)return a;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?a.charset:t.charset;return{allowDots:void 0===t.allowDots?a.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:a.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:a.comma,decoder:"function"==typeof t.decoder?t.decoder:a.decoder,delimiter:"string"==typeof t.delimiter||n.isRegExp(t.delimiter)?t.delimiter:a.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:a.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:a.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling}};t.exports=function(t,e){var r=c(e);if(""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof t?d(t,r):t,a=r.plainObjects?Object.create(null):{},i=Object.keys(o),l=0;l<i.length;++l){var p=i[l],u=s(p,o[p],r);a=n.merge(a,u,r)}return n.compact(a)}},1090:function(t,e,r){"use strict";var n=r(1082),o=r(1083),a=Object.prototype.hasOwnProperty,i={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,l=Array.prototype.push,s=function(t,e){l.apply(t,d(e)?e:[e])},c=Date.prototype.toISOString,p=o.default,u={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:p,formatter:o.formatters[p],indices:!1,serializeDate:function(t){return c.call(t)},skipNulls:!1,strictNullHandling:!1},A=function(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t||"symbol"==typeof t||"bigint"==typeof t},f=function t(e,r,o,a,i,l,c,p,f,b,g,v,h){var C=e;if("function"==typeof c?C=c(r,C):C instanceof Date?C=b(C):"comma"===o&&d(C)&&(C=C.join(",")),null===C){if(a)return l&&!v?l(r,u.encoder,h):r;C=""}if(A(C)||n.isBuffer(C)){if(l){return[g(v?r:l(r,u.encoder,h))+"="+g(l(C,u.encoder,h))]}return[g(r)+"="+g(String(C))]}var _=[];if(void 0===C)return _;var x;if(d(c))x=c;else{var m=Object.keys(C);x=p?m.sort(p):m}for(var B=0;B<x.length;++B){var y=x[B];i&&null===C[y]||(d(C)?s(_,t(C[y],"function"==typeof o?o(r,y):r,o,a,i,l,c,p,f,b,g,v,h)):s(_,t(C[y],r+(f?"."+y:"["+y+"]"),o,a,i,l,c,p,f,b,g,v,h)))}return _},b=function(t){if(!t)return u;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||u.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==t.format){if(!a.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var n=o.formatters[r],i=u.filter;return("function"==typeof t.filter||d(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:u.addQueryPrefix,allowDots:void 0===t.allowDots?u.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:u.charsetSentinel,delimiter:void 0===t.delimiter?u.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:u.encode,encoder:"function"==typeof t.encoder?t.encoder:u.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:u.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:u.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:u.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:u.strictNullHandling}};t.exports=function(t,e){var r,n,o=t,a=b(e);"function"==typeof a.filter?(n=a.filter,o=n("",o)):d(a.filter)&&(n=a.filter,r=n);var l=[];if("object"!=typeof o||null===o)return"";var c;c=e&&e.arrayFormat in i?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var p=i[c];r||(r=Object.keys(o)),a.sort&&r.sort(a.sort);for(var u=0;u<r.length;++u){var A=r[u];a.skipNulls&&null===o[A]||s(l,f(o[A],A,p,a.strictNullHandling,a.skipNulls,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.formatter,a.encodeValuesOnly,a.charset))}var g=l.join(a.delimiter),v=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&("iso-8859-1"===a.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),g.length>0?v+g:""}},1143:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1084),o=r.n(n),a=r(1151);e.default={data:function(){return{activeClass:0,pageIndex:1,pageSize:10,totalPage:"",workListPageIndex:1,workListTotalPage:"",workListPageSize:5,salesOrderCode:"",ProductionOrderList:[],ProductionOrderDetail:{},productionOrderID:"",WorkOrderList:[],productionOrderCode:"",workListDetail:{}}},mounted:function(){this.salesOrderCode=this.$route.query.salesOrderCode,this.getProductionOrderList()},methods:{handleCurrentChange:function(t){this.pageIndex=t,this.getProductionOrderList(this.productionOrderID)},workListHandleCurrentChange:function(t){this.workListPageIndex=t,this.getWorkOrderList(this.productionOrderCode)},goSalesOrders:function(){this.$router.push({path:"/Home/salesOrderInformation"})},getProductionOrderList:function(){var t=this;r.i(a.a)(o()({pageNum:this.pageIndex,pageSize:this.pageSize,salesOrderCode:this.salesOrderCode})).then(function(e){0==e.data.status&&(e.data.data.list.forEach(function(t){switch(t.productionOrderStatus){case"1":t.productionOrderStatus="计划";break;case"2":t.productionOrderStatus="确认";break;case"3":t.productionOrderStatus="下达";break;case"4":t.productionOrderStatus="完成"}}),t.ProductionOrderList=e.data.data.list,t.totalPage=e.data.data.pages,t.productionOrderCode=e.data.data.list[0].productionOrderCode,t.productionOrderID=e.data.data.list[0].productionOrderID,t.ProductionOrderDetail=e.data.data.list[0],t.getWorkOrderList(t.productionOrderCode,t.productionOrderID))})},getProductionOrder:function(t,e,r,n){this.activeClass=t,this.ProductionOrderDetail=e,this.getWorkOrderList(n,r)},getWorkOrderList:function(t,e){var n=this;r.i(a.b)(o()({pageNum:this.workListPageIndex,pageSize:this.workListPageSize,productionOrderCode:t,productionOrderID:e})).then(function(t){0==t.data.status&&(t.data.data.list.forEach(function(t){switch(t.workOrderStatus){case"1":t.workOrderStatus="计划";break;case"2":t.workOrderStatus="确认";break;case"3":t.workOrderStatus="下达";break;case"4":t.workOrderStatus="完成"}}),n.WorkOrderList=t.data.data.list,n.workListTotalPage=t.data.data.pages)})}},created:function(){},watch:{}}},1151:function(t,e,r){"use strict";function n(t){return a.a.http.post("/ProductionOrderHomepageController/getProductionOrderList",t,1,{"Content-Type":"application/json"})}function o(t){return a.a.http.post("/ProductionOrderHomepageController/getWorkOrderList",t,1,{"Content-Type":"application/json"})}e.a=n,e.b=o;var a=r(1085)},1167:function(t,e,r){e=t.exports=r(181)(!0),e.push([t.i,"\n#productionOrder .el-pagination.is-background .el-pager li,\n#productionOrder .el-pagination.is-background .btn-prev,\n#productionOrder .el-pagination.is-background .btn-next {\n  background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n  color: #21e9cc;\n}\n#productionOrder .el-pagination.is-background .el-pager li:not(.disabled):hover {\n  color: #fff;\n}\n#productionOrder .el-pagination.is-background .el-pager li:not(.disabled).active {\n  background-color: #21cbda;\n}\n#productionOrder .man_fen .el-progress-bar__outer {\n  border: 1px solid #34b63e;\n}\n#productionOrder .man_fen .el-progress-bar__outer .el-progress-bar__inner {\n    background: linear-gradient(to right, #0d4c13, #00ff0c);\n}\n#productionOrder .el-progress-bar__outer {\n  border: 1px solid #35b6a2;\n  background: #082a2c;\n}\n#productionOrder .el-progress-bar__inner {\n  background: linear-gradient(to right, #0e5662, #19c5d9);\n}\n#productionOrder .el-progress-bar {\n  width: 90%;\n}\n#productionOrder .el-progress__text {\n  color: #21e9cc;\n}\n.el-popover {\n  width: 650px !important;\n  background: linear-gradient(to right, #0d6377, #22c4ac);\n  border: 1px solid #0d6377;\n  color: #fff;\n}\n","",{version:3,sources:["D:/aaawork/gw/Project/guowang-web/src/components/page/productionOrder.vue"],names:[],mappings:";AAAA;;;EAGE,yFAAyF;EACzF,eAAe;CAAE;AAEnB;EACE,YAAY;CAAE;AAEhB;EACE,0BAA0B;CAAE;AAE9B;EACE,0BAA0B;CAAE;AAC5B;IACE,wDAAwD;CAAE;AAE9D;EACE,0BAA0B;EAC1B,oBAAoB;CAAE;AAExB;EACE,wDAAwD;CAAE;AAE5D;EACE,WAAW;CAAE;AAEf;EACE,eAAe;CAAE;AAEnB;EACE,wBAAwB;EACxB,wDAAwD;EACxD,0BAA0B;EAC1B,YAAY;CAAE",file:"productionOrder.vue",sourcesContent:["#productionOrder .el-pagination.is-background .el-pager li,\n#productionOrder .el-pagination.is-background .btn-prev,\n#productionOrder .el-pagination.is-background .btn-next {\n  background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n  color: #21e9cc; }\n\n#productionOrder .el-pagination.is-background .el-pager li:not(.disabled):hover {\n  color: #fff; }\n\n#productionOrder .el-pagination.is-background .el-pager li:not(.disabled).active {\n  background-color: #21cbda; }\n\n#productionOrder .man_fen .el-progress-bar__outer {\n  border: 1px solid #34b63e; }\n  #productionOrder .man_fen .el-progress-bar__outer .el-progress-bar__inner {\n    background: linear-gradient(to right, #0d4c13, #00ff0c); }\n\n#productionOrder .el-progress-bar__outer {\n  border: 1px solid #35b6a2;\n  background: #082a2c; }\n\n#productionOrder .el-progress-bar__inner {\n  background: linear-gradient(to right, #0e5662, #19c5d9); }\n\n#productionOrder .el-progress-bar {\n  width: 90%; }\n\n#productionOrder .el-progress__text {\n  color: #21e9cc; }\n\n.el-popover {\n  width: 650px !important;\n  background: linear-gradient(to right, #0d6377, #22c4ac);\n  border: 1px solid #0d6377;\n  color: #fff; }\n"],sourceRoot:""}])},1168:function(t,e,r){e=t.exports=r(181)(!0),e.push([t.i,"\n.box[data-v-690e383e] {\n  color: #21e9cc;\n}\n.meter-box[data-v-690e383e] {\n  height: 38px;\n  font-size: 0;\n}\n.meter-box div[data-v-690e383e] {\n    display: inline-block;\n}\n.meter-box .meter-left[data-v-690e383e] {\n    width: 0.8%;\n    height: 100%;\n    vertical-align: top;\n    background: #22c4ac;\n}\n.meter-box .meter-right[data-v-690e383e] {\n    font-size: 22px;\n    width: 99.2%;\n    height: 100%;\n    line-height: 38px;\n    text-align: left;\n    background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n}\n.meter-box .meter-right span[data-v-690e383e] {\n      margin-left: 6px;\n      letter-spacing: 2px;\n      font-size: 20px;\n}\n.meter-box .meter-right p[data-v-690e383e] {\n      float: right;\n      font-size: 16px;\n      cursor: pointer;\n      margin-right: 20px;\n}\n.product-table-box[data-v-690e383e] {\n  width: 100%;\n  margin-top: 10px;\n  background: linear-gradient(to top, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n  text-align: -webkit-center;\n  overflow: hidden;\n}\n.product-table-box .product-table[data-v-690e383e] {\n    width: 97%;\n    margin: 35px 0 10px 0;\n    text-align: center;\n}\n.product-table-box .product-table thead[data-v-690e383e] {\n      font-size: 14px;\n      color: #56efdb;\n      line-height: 45px;\n}\n.product-table-box .product-table tbody[data-v-690e383e] {\n      border: 1px solid #23e4c7;\n      margin-top: 5px;\n}\n.product-table-box .product-table tr[data-v-690e383e] {\n      height: 45px;\n      cursor: pointer;\n}\n.product-table-box .product-table tr[data-v-690e383e]:nth-child(2n) {\n        background: #0c3c3e;\n}\n.product-table-box .product-table tr .status-box[data-v-690e383e] {\n        display: inline-block;\n        width: 50px;\n        height: 25px;\n        line-height: 25px;\n        border-radius: 13px;\n}\n.product-table-box .product-table tr .commit[data-v-690e383e] {\n        background: #2d5b58;\n        border: 1px solid #05f1fe;\n        color: #00fdff;\n}\n.product-table-box .product-table tr .release[data-v-690e383e] {\n        background: #5b5a2c;\n        border: 1px solid #c8cf1f;\n        color: #ebf12b;\n}\n.product-table-box .product-table tr .plan[data-v-690e383e] {\n        background: #743f17;\n        border: 1px solid #fd8f40;\n        color: #fe8a4d;\n}\n.product-table-box .product-table tr .complete[data-v-690e383e] {\n        background: #204234;\n        border: 1px solid #4cd620;\n        color: #4cd620;\n}\n.detail-title[data-v-690e383e] {\n  margin-top: 10px;\n  display: flex;\n}\n.detail-title .meter-box[data-v-690e383e] {\n    flex: 1;\n}\n.detail-title .workList-title[data-v-690e383e] {\n    margin-left: 10px;\n}\n.detail-box[data-v-690e383e] {\n  margin-top: 10px;\n  display: flex;\n}\n.detail-box .detail-content[data-v-690e383e] {\n    flex: 1;\n    height: 300px;\n}\n.detail-box .detailInfo[data-v-690e383e] {\n    display: flex;\n}\n.detail-box .detailInfo .detailInfo-left[data-v-690e383e] {\n      flex: 2;\n      margin-right: 5px;\n      background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n      white-space: nowrap;\n      overflow-x: auto;\n}\n.detail-box .detailInfo .detailInfo-left .detailInfo-mennu[data-v-690e383e] {\n        display: inline-block;\n        margin-left: 30px;\n}\n.detail-box .detailInfo .detailInfo-left .detailInfo-mennu p[data-v-690e383e] {\n          margin-top: 15px;\n}\n.detail-box .detailInfo .detailInfo-right[data-v-690e383e] {\n      flex: 3;\n      margin-right: 0;\n      background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n}\n.detail-box .detailInfo .detailInfo-right .detailInfo-info[data-v-690e383e] {\n        width: 180px;\n        vertical-align: top;\n}\n.detail-box .detailInfo .detailInfo-right .detailInfo-info .materiel[data-v-690e383e] {\n          height: 95px;\n          overflow-y: scroll;\n          white-space: normal;\n          letter-spacing: 1px;\n}\n.detail-box .work-list-box[data-v-690e383e] {\n    margin-left: 10px;\n    margin-top: 0;\n    background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n}\n.detail-box .work-list-box .product-table[data-v-690e383e] {\n      margin-top: 10px;\n}\n.detail-box .work-list-box .product-table thead[data-v-690e383e] {\n        display: table;\n        width: 100%;\n}\n.detail-box .work-list-box .product-table thead td[data-v-690e383e] {\n          white-space: nowrap;\n}\n.detail-box .work-list-box .product-table tbody[data-v-690e383e] {\n        display: block;\n}\n.detail-box .work-list-box .product-table tbody tr[data-v-690e383e] {\n          display: table;\n          width: 100%;\n          position: relative;\n}\n.detail-box .work-list-box .product-table tbody tr .popover-box[data-v-690e383e] {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            left: 0;\n            top: 0;\n}\n.row-bg[data-v-690e383e] {\n  background: #008d7e !important;\n}\n","",{version:3,sources:["D:/aaawork/gw/Project/guowang-web/src/components/page/productionOrder.vue"],names:[],mappings:";AAAA;EACE,eAAe;CAAE;AAEnB;EACE,aAAa;EACb,aAAa;CAAE;AACf;IACE,sBAAsB;CAAE;AAC1B;IACE,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,oBAAoB;CAAE;AACxB;IACE,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,yFAAyF;CAAE;AAC3F;MACE,iBAAiB;MACjB,oBAAoB;MACpB,gBAAgB;CAAE;AACpB;MACE,aAAa;MACb,gBAAgB;MAChB,gBAAgB;MAChB,mBAAmB;CAAE;AAE3B;EACE,YAAY;EACZ,iBAAiB;EACjB,uFAAuF;EACvF,2BAA2B;EAC3B,iBAAiB;CAAE;AACnB;IACE,WAAW;IACX,sBAAsB;IACtB,mBAAmB;CAAE;AACrB;MACE,gBAAgB;MAChB,eAAe;MACf,kBAAkB;CAAE;AACtB;MACE,0BAA0B;MAC1B,gBAAgB;CAAE;AACpB;MACE,aAAa;MACb,gBAAgB;CAAE;AAClB;QACE,oBAAoB;CAAE;AACxB;QACE,sBAAsB;QACtB,YAAY;QACZ,aAAa;QACb,kBAAkB;QAClB,oBAAoB;CAAE;AACxB;QACE,oBAAoB;QACpB,0BAA0B;QAC1B,eAAe;CAAE;AACnB;QACE,oBAAoB;QACpB,0BAA0B;QAC1B,eAAe;CAAE;AACnB;QACE,oBAAoB;QACpB,0BAA0B;QAC1B,eAAe;CAAE;AACnB;QACE,oBAAoB;QACpB,0BAA0B;QAC1B,eAAe;CAAE;AAEzB;EACE,iBAAiB;EACjB,cAAc;CAAE;AAChB;IACE,QAAQ;CAAE;AACZ;IACE,kBAAkB;CAAE;AAExB;EACE,iBAAiB;EACjB,cAAc;CAAE;AAChB;IACE,QAAQ;IACR,cAAc;CAAE;AAClB;IACE,cAAc;CAAE;AAChB;MACE,QAAQ;MACR,kBAAkB;MAClB,yFAAyF;MACzF,oBAAoB;MACpB,iBAAiB;CAAE;AACnB;QACE,sBAAsB;QACtB,kBAAkB;CAAE;AACpB;UACE,iBAAiB;CAAE;AACzB;MACE,QAAQ;MACR,gBAAgB;MAChB,yFAAyF;CAAE;AAC3F;QACE,aAAa;QACb,oBAAoB;CAAE;AACtB;UACE,aAAa;UACb,mBAAmB;UACnB,oBAAoB;UACpB,oBAAoB;CAAE;AAC9B;IACE,kBAAkB;IAClB,cAAc;IACd,yFAAyF;CAAE;AAC3F;MACE,iBAAiB;CAAE;AACnB;QACE,eAAe;QACf,YAAY;CAAE;AACd;UACE,oBAAoB;CAAE;AAC1B;QACE,eAAe;CAAE;AACjB;UACE,eAAe;UACf,YAAY;UACZ,mBAAmB;CAAE;AACrB;YACE,YAAY;YACZ,aAAa;YACb,mBAAmB;YACnB,QAAQ;YACR,OAAO;CAAE;AAErB;EACE,+BAA+B;CAAE",file:"productionOrder.vue",sourcesContent:[".box {\n  color: #21e9cc; }\n\n.meter-box {\n  height: 38px;\n  font-size: 0; }\n  .meter-box div {\n    display: inline-block; }\n  .meter-box .meter-left {\n    width: 0.8%;\n    height: 100%;\n    vertical-align: top;\n    background: #22c4ac; }\n  .meter-box .meter-right {\n    font-size: 22px;\n    width: 99.2%;\n    height: 100%;\n    line-height: 38px;\n    text-align: left;\n    background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41)); }\n    .meter-box .meter-right span {\n      margin-left: 6px;\n      letter-spacing: 2px;\n      font-size: 20px; }\n    .meter-box .meter-right p {\n      float: right;\n      font-size: 16px;\n      cursor: pointer;\n      margin-right: 20px; }\n\n.product-table-box {\n  width: 100%;\n  margin-top: 10px;\n  background: linear-gradient(to top, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n  text-align: -webkit-center;\n  overflow: hidden; }\n  .product-table-box .product-table {\n    width: 97%;\n    margin: 35px 0 10px 0;\n    text-align: center; }\n    .product-table-box .product-table thead {\n      font-size: 14px;\n      color: #56efdb;\n      line-height: 45px; }\n    .product-table-box .product-table tbody {\n      border: 1px solid #23e4c7;\n      margin-top: 5px; }\n    .product-table-box .product-table tr {\n      height: 45px;\n      cursor: pointer; }\n      .product-table-box .product-table tr:nth-child(2n) {\n        background: #0c3c3e; }\n      .product-table-box .product-table tr .status-box {\n        display: inline-block;\n        width: 50px;\n        height: 25px;\n        line-height: 25px;\n        border-radius: 13px; }\n      .product-table-box .product-table tr .commit {\n        background: #2d5b58;\n        border: 1px solid #05f1fe;\n        color: #00fdff; }\n      .product-table-box .product-table tr .release {\n        background: #5b5a2c;\n        border: 1px solid #c8cf1f;\n        color: #ebf12b; }\n      .product-table-box .product-table tr .plan {\n        background: #743f17;\n        border: 1px solid #fd8f40;\n        color: #fe8a4d; }\n      .product-table-box .product-table tr .complete {\n        background: #204234;\n        border: 1px solid #4cd620;\n        color: #4cd620; }\n\n.detail-title {\n  margin-top: 10px;\n  display: flex; }\n  .detail-title .meter-box {\n    flex: 1; }\n  .detail-title .workList-title {\n    margin-left: 10px; }\n\n.detail-box {\n  margin-top: 10px;\n  display: flex; }\n  .detail-box .detail-content {\n    flex: 1;\n    height: 300px; }\n  .detail-box .detailInfo {\n    display: flex; }\n    .detail-box .detailInfo .detailInfo-left {\n      flex: 2;\n      margin-right: 5px;\n      background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41));\n      white-space: nowrap;\n      overflow-x: auto; }\n      .detail-box .detailInfo .detailInfo-left .detailInfo-mennu {\n        display: inline-block;\n        margin-left: 30px; }\n        .detail-box .detailInfo .detailInfo-left .detailInfo-mennu p {\n          margin-top: 15px; }\n    .detail-box .detailInfo .detailInfo-right {\n      flex: 3;\n      margin-right: 0;\n      background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41)); }\n      .detail-box .detailInfo .detailInfo-right .detailInfo-info {\n        width: 180px;\n        vertical-align: top; }\n        .detail-box .detailInfo .detailInfo-right .detailInfo-info .materiel {\n          height: 95px;\n          overflow-y: scroll;\n          white-space: normal;\n          letter-spacing: 1px; }\n  .detail-box .work-list-box {\n    margin-left: 10px;\n    margin-top: 0;\n    background: linear-gradient(to right, rgba(13, 99, 119, 0.41), rgba(34, 196, 172, 0.41)); }\n    .detail-box .work-list-box .product-table {\n      margin-top: 10px; }\n      .detail-box .work-list-box .product-table thead {\n        display: table;\n        width: 100%; }\n        .detail-box .work-list-box .product-table thead td {\n          white-space: nowrap; }\n      .detail-box .work-list-box .product-table tbody {\n        display: block; }\n        .detail-box .work-list-box .product-table tbody tr {\n          display: table;\n          width: 100%;\n          position: relative; }\n          .detail-box .work-list-box .product-table tbody tr .popover-box {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            left: 0;\n            top: 0; }\n\n.row-bg {\n  background: #008d7e !important; }\n"],sourceRoot:""}])},1200:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box",attrs:{id:"productionOrder"}},[r("div",{staticClass:"meter-box"},[r("div",{staticClass:"meter-left"}),t._v(" "),r("div",{staticClass:"meter-right"},[r("span",[t._v("生产订单列表")]),t._v(" "),r("p",{on:{click:t.goSalesOrders}},[t._v("返回销售订单详情页 >")])])]),t._v(" "),r("div",{staticClass:"product-table-box"},[r("table",{staticClass:"product-table"},[t._m(0),t._v(" "),r("tbody",[t._l(t.ProductionOrderList,function(e,n){return r("tr",{key:n,class:t.activeClass==n?"row-bg":"",on:{click:function(r){return t.getProductionOrder(n,e,e.productionOrderID,e.productionOrderCode)}}},[r("td",[t._v(t._s(e.productionOrderCode))]),t._v(" "),r("td",[t._v(t._s(e.productionOrderNum))]),t._v(" "),r("td",[t._v(t._s(e.planStartDate))]),t._v(" "),r("td",[t._v(t._s(e.planFinishDate))]),t._v(" "),r("td",[t._v(t._s(e.realStartDate))]),t._v(" "),r("td",[e.completionRate<100?r("el-progress",{attrs:{percentage:e.completionRate||0}}):r("el-progress",{staticClass:"man_fen",attrs:{percentage:e.completionRate||0}})],1),t._v(" "),r("td",["计划"==e.productionOrderStatus?r("span",{staticClass:"status-box plan"},[t._v("计划")]):t._e(),t._v(" "),"确认"==e.productionOrderStatus?r("span",{staticClass:"status-box commit"},[t._v("确认")]):t._e(),t._v(" "),"下达"==e.productionOrderStatus?r("span",{staticClass:"status-box release"},[t._v("下达")]):t._e(),t._v(" "),"完成"==e.productionOrderStatus?r("span",{staticClass:"status-box complete"},[t._v("完成")]):t._e()])])}),t._v(" "),r("tr",[r("td",{attrs:{colspan:"7"}},[r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.pageIndex,total:t.totalPage*t.pageSize},on:{"current-change":t.handleCurrentChange,"prev-click":t.handleCurrentChange,"next-click":t.handleCurrentChange}})],1)])])],2)])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"detail-box"},[r("div",{staticClass:"detail-content detailInfo"},[r("div",{staticClass:"detailInfo-left"},[t._m(2),t._v(" "),r("div",{staticClass:"detailInfo-mennu detailInfo-info"},[r("p",[t._v(t._s(t.ProductionOrderDetail.productionOrderNum))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.productionOrderStatus))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.planStartDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.planFinishDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.realStartDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.realFinishDate))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.workShop))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.CreateTime))])])]),t._v(" "),r("div",{staticClass:"detailInfo-left detailInfo-right"},[t._m(3),t._v(" "),r("div",{staticClass:"detailInfo-mennu detailInfo-info"},[r("p",[t._v(t._s(t.ProductionOrderDetail.productionOrderCode))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.sgpurchaseOrder))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.salesOrderCode))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.salesOrderProjectNo))]),t._v(" "),r("p",[t._v(t._s(t.ProductionOrderDetail.materialsCode))]),t._v(" "),r("p",{staticClass:"materiel"},[t._v(t._s(t.ProductionOrderDetail.productionOrderMaterials))])])])]),t._v(" "),r("div",{staticClass:"product-table-box detail-content work-list-box"},[r("table",{staticClass:"product-table"},[t._m(4),t._v(" "),r("tbody",[t._l(t.WorkOrderList,function(e,n){return r("tr",{key:n},[r("td",{attrs:{width:"23%"}},[t._v(t._s(e.workOrderCode))]),t._v(" "),r("td",{attrs:{width:"9%"}},[t._v(t._s(e.workOrderNum))]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v(t._s(e.planStartDate))]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v(t._s(e.planFinishDate))]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v(t._s(e.realStartDate))]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v(t._s(e.realFinishDate))]),t._v(" "),r("td",{attrs:{width:"9%"}},["计划"==e.workOrderStatus?r("span",{staticClass:"status-box plan"},[t._v("计划")]):t._e(),t._v(" "),"确认"==e.workOrderStatus?r("span",{staticClass:"status-box commit"},[t._v("确认")]):t._e(),t._v(" "),"下达"==e.workOrderStatus?r("span",{staticClass:"status-box release"},[t._v("下达")]):t._e(),t._v(" "),"完成"==e.workOrderStatus?r("span",{staticClass:"status-box complete"},[t._v("完成")]):t._e()]),t._v(" "),r("el-popover",{ref:"popover",refInFor:!0,attrs:{placement:"left",width:"200",trigger:"hover"}},[r("div",{staticClass:"detail-box"},[r("div",{staticClass:"detail-content detailInfo",staticStyle:{height:"auto"}},[r("div",{staticClass:"detailInfo-left"},[r("div",{staticClass:"detailInfo-mennu"},[r("p",[t._v("工单数量：")]),t._v(" "),r("p",[t._v("工单状态：")]),t._v(" "),r("p",[t._v("计划开始日期：")]),t._v(" "),r("p",[t._v("计划结束日期：")]),t._v(" "),r("p",[t._v("实际开始日期：")]),t._v(" "),r("p",[t._v("实际结束日期：")])]),t._v(" "),r("div",{staticClass:"detailInfo-mennu detailInfo-info"},[r("p",[t._v(t._s(e.workOrderNum))]),t._v(" "),r("p",[t._v(t._s(e.workOrderStatus))]),t._v(" "),r("p",[t._v(t._s(e.planStartDate))]),t._v(" "),r("p",[t._v(t._s(e.planFinishDate))]),t._v(" "),r("p",[t._v(t._s(e.realStartDate))]),t._v(" "),r("p",[t._v(t._s(e.realFinishDate))])])]),t._v(" "),r("div",{staticClass:"detailInfo-left detailInfo-right"},[r("div",{staticClass:"detailInfo-mennu"},[r("p",[t._v("生产订单号：")]),t._v(" "),r("p",[t._v("工单号：")]),t._v(" "),r("p",[t._v("供应商编号：")]),t._v(" "),r("p",[t._v("设备名称：")]),t._v(" "),r("p",[t._v("设备编号：")])]),t._v(" "),r("div",{staticClass:"detailInfo-mennu detailInfo-info"},[r("p",[t._v(t._s(e.productionOrderCode))]),t._v(" "),r("p",[t._v(t._s(e.workOrderCode))]),t._v(" "),r("p",[t._v(t._s(e.supplierID))]),t._v(" "),r("p",[t._v(t._s(e.deviceName))]),t._v(" "),r("p",{staticClass:"materiel"},[t._v(t._s(e.deviceCode))])])])])]),t._v(" "),r("div",{staticClass:"popover-box",attrs:{slot:"reference"},slot:"reference"})])],1)}),t._v(" "),r("tr",[r("td",{attrs:{colspan:"7"}},[r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.workListPageIndex,total:t.workListTotalPage*t.workListPageSize},on:{"current-change":t.workListHandleCurrentChange,"prev-click":t.workListHandleCurrentChange,"next-click":t.workListHandleCurrentChange}})],1)])])],2)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("td",[t._v("生产订单号")]),t._v(" "),r("td",[t._v("订单数量")]),t._v(" "),r("td",[t._v("计划开始日期")]),t._v(" "),r("td",[t._v("计划结束日期")]),t._v(" "),r("td",[t._v("实际开始日期")]),t._v(" "),r("td",{attrs:{width:"200"}},[t._v("进度")]),t._v(" "),r("td",[t._v("订单状态")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detail-title"},[r("div",{staticClass:"meter-box"},[r("div",{staticClass:"meter-left"}),t._v(" "),r("div",{staticClass:"meter-right"},[r("span",[t._v("生产订单详细信息")])])]),t._v(" "),r("div",{staticClass:"meter-box workList-title"},[r("div",{staticClass:"meter-left"}),t._v(" "),r("div",{staticClass:"meter-right"},[r("span",[t._v("工单列表")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detailInfo-mennu"},[r("p",[t._v("订单数量：")]),t._v(" "),r("p",[t._v("订单状态：")]),t._v(" "),r("p",[t._v("计划开始日期：")]),t._v(" "),r("p",[t._v("计划结束日期：")]),t._v(" "),r("p",[t._v("实际开始日期：")]),t._v(" "),r("p",[t._v("实际结束日期：")]),t._v(" "),r("p",[t._v("工厂/车间：")]),t._v(" "),r("p",[t._v("建立时间：")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detailInfo-mennu"},[r("p",[t._v("生产订单号：")]),t._v(" "),r("p",[t._v("国网采购订单号：")]),t._v(" "),r("p",[t._v("销售订单号：")]),t._v(" "),r("p",[t._v("销售订单号项目号：")]),t._v(" "),r("p",[t._v("物资名称：")]),t._v(" "),r("p",[t._v("物料：")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("td",{attrs:{width:"23%"}},[t._v("工单号")]),t._v(" "),r("td",{attrs:{width:"9%"}},[t._v("工单数量")]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v("计划开始日期")]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v("计划结束日期")]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v("实际开始日期")]),t._v(" "),r("td",{attrs:{width:"14.75%"}},[t._v("实际结束日期")]),t._v(" "),r("td",{attrs:{width:"9%"}},[t._v("工单状态")])])}]},t.exports.render._withStripped=!0},1223:function(t,e,r){var n=r(1167);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(260)("531a506e",n,!1)},1224:function(t,e,r){var n=r(1168);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(260)("4fdf5246",n,!1)}});