(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-048a6484"],{bb51:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home-wrapper"},[t("a-alert",{staticClass:"banner-tip",attrs:{type:"info"}},[t("a",{attrs:{slot:"message",href:"https://github.com/iloveoldking/iUtils",target:"_blank"},slot:"message"},[t("a-icon",{attrs:{type:"github"}}),e._v("iUtils\n    ")],1),t("p",{attrs:{slot:"description"},slot:"description"},[e._v("\n      初衷是为了收集使用较多或者封装较实用的代码块，包括前端流行框架以及node（主要是egg框架），已收录\n      "),t("em",[e._v("29")]),e._v("项\n    ")])]),t("a-collapse",[t("a-collapse-panel",{attrs:{header:"css相关"}},[t("a-collapse",[t("a-collapse-panel",{attrs:{header:"清除浮动clearfix"}},[t("clear-fix")],1),t("a-collapse-panel",{attrs:{header:"使用less继承"}},[t("less-extends")],1),t("a-collapse-panel",{attrs:{header:"在css modules中覆盖组件样式"}},[t("css-modules")],1),t("a-collapse-panel",{attrs:{header:"移动端适配px转换rem"}},[t("rem-transition")],1),t("a-collapse-panel",{attrs:{header:"根据宽高比，高度随宽度自适应变化"}},[t("auto-height")],1)],1)],1),t("a-collapse-panel",{attrs:{header:"jquery相关"}},[t("a-collapse",[t("a-collapse-panel",{attrs:{header:"封装jquery中的ajax请求和ajax上传文件"}},[t("jquery-ajax")],1),t("a-collapse-panel",{attrs:{header:"form表单信息提取功能"}},[t("serialize-form")],1),t("a-collapse-panel",{attrs:{header:"解析url字符串中参数的方法"}},[t("search-params")],1),t("a-collapse-panel",{attrs:{header:"基于jquery封装的简版alert提示组件"}},[t("jquery-alert")],1),t("a-collapse-panel",{attrs:{header:"初始化zTree插件"}},[t("init-ztree")],1),t("a-collapse-panel",{attrs:{header:"bootstrapTable构建方式"}},[t("bootstrap-table")],1)],1)],1),t("a-collapse-panel",{attrs:{header:"vue相关"}},[t("a-collapse",[t("a-collapse-panel",{attrs:{header:"vue项目打包注意事项"}},[t("vue-build")],1),t("a-collapse-panel",{attrs:{header:"less报错解决方案"}},[t("less-error")],1),t("a-collapse-panel",{attrs:{header:"封装vue版ckeditor富文本编辑器"}},[t("vue-ckeditor")],1),t("a-collapse-panel",{attrs:{header:"理解$nextTick的作用"}},[t("next-tick")],1)],1)],1),t("a-collapse-panel",{attrs:{header:"react相关"}},[t("a-collapse",[t("a-collapse-panel",{attrs:{header:"umi框架中connect model"}},[t("umi-connect")],1),t("a-collapse-panel",{attrs:{header:"umi框架中路由拦截器"}},[t("umi-router-interceptor")],1)],1)],1),t("a-collapse-panel",{attrs:{header:"node相关"}},[t("a-collapse",[t("a-collapse-panel",{attrs:{header:"在egg框架中使用MongoDB作为数据库"}},[t("egg-mongo")],1),t("a-collapse-panel",{attrs:{header:"mongoose部分常见api介绍"}},[t("egg-mongoose")],1),t("a-collapse-panel",{attrs:{header:"mongoose关联查询操作"}},[t("mongoose-populate")],1),t("a-collapse-panel",{attrs:{header:"在egg框架中支持跨域请求"}},[t("egg-cors")],1),t("a-collapse-panel",{attrs:{header:"node上传文件"}},[t("node-upload")],1)],1)],1),t("a-collapse-panel",{attrs:{header:"其他"}},[t("a-collapse",[t("a-collapse-panel",{attrs:{header:"封装axios请求数据"}},[t("request-doc")],1),t("a-collapse-panel",{attrs:{header:"配置服务器代理解决跨域请求问题"}},[t("server-proxy")],1),t("a-collapse-panel",{attrs:{header:"将扁平数据格式转换为树状数据结构"}},[t("tree-data")],1),t("a-collapse-panel",{attrs:{header:"正则语法以及常见表达式"}},[t("regular-expression")],1),t("a-collapse-panel",{attrs:{header:"videoJs插件使用方法"}},[t("video-js")],1),t("a-collapse-panel",{attrs:{header:"js.cookie插件用法"}},[t("js-cookie")],1),t("a-collapse-panel",{attrs:{header:"file标签获取文件以及base64格式数据"}},[t("file-read")],1)],1)],1)],1)],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    import axios from 'axios'\n    import setting from '@/setting'\n    import {\n      notification\n    } from 'antd'\n    \n    const iSFormDataType = setting.contentType === 'formData';\n    const formDataContentType = 'application/x-www-form-urlencoded; charset=utf-8'\n    const jsonContentType = 'application/json; charset=utf-8'\n    \n    let instance = axios.create({\n      baseURL: setting.baseUrl,\n      timeout: 1000 * 10,\n      headers: {\n        'Accept': \"application/json; charset=utf-8\",\n        'Content-Type': iSFormDataType ? formDataContentType : jsonContentType\n      },\n      responseType: 'json',\n      transformRequest: [function (data) {\n        if (data) {\n          // 对data进行任意转换处理\n          if (iSFormDataType) {\n            let formDataString = '';\n            let key;\n            for (key in data) {\n              formDataString += '&' + key + '=' + data[key];\n            }\n            formDataString = formDataString.slice(1);\n            return formDataString;\n          } else {\n            return data;\n          }\n        }\n      }]\n    });\n    \n    // 添加请求拦截器\n    instance.interceptors.request.use(function (config) {\n      // 对于请求统一增加token选项\n      // config.headers.token = token;\n      return config;\n    }, function (error) {\n      // 对请求错误做些什么\n      notification.error({\n        message: '发送请求之前，请求错误',\n        description: error.message\n      });\n    });\n    \n    // 添加响应拦截器\n    instance.interceptors.response.use(function (response) {\n      // 对响应数据做点什么\n      return response.data;\n    }, function (error) {\n      // 对响应错误做点什么\n      notification.error({\n        message: '发送请求之后，响应错误',\n        description: error.message\n      });\n    });\n    \n    export default instance;")])])}],i={name:"request"},l=i,c=t("2877"),p=Object(c["a"])(l,o,s,!1,null,null,null),u=p.exports,d=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    const formatDataToTree = list => {\n      let arr = [];\n      list.forEach((item, index) => {\n        let isRoot = true;\n        list.forEach(item2 => {\n          if (item.pid && item.pid === item2.id) {\n            isRoot = false;\n            !Array.isArray(item2.children) && (item2.children = []);\n            item2.children.push(item);\n          }\n        });\n        isRoot && arr.push(index);\n      })\n      return list.filter((item, index) => arr.indexOf(index) > -1);\n    }")])])}],f={name:"treeData"},h=f,g=Object(c["a"])(h,d,m,!1,null,null,null),v=g.exports,_=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // 在Vue-Cli3.0中需要配置vue.config.js \n    module.exports = {\n      css: {\n        loaderOptions: {\n          less: {\n            javascriptEnabled: true\n          }\n        }\n      }\n    }")])])}],b={name:"lessError"},y=b,w=Object(c["a"])(y,_,x,!1,null,null,null),j=w.exports,$=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // 在vue.config.js中配置publicPath，配置outputDir是为了直接在github上部署项目，因为docs文件夹可支持部署\n    module.exports = {\n      publicPath: './',\n      outputDir: 'docs',\n      productionSourceMap: false\n    }")]),t("pre",[e._v("    // vue项目如果在打包部署之后出现刷新页面消失，那是因为history模式需要后台配置支持才可以，如果不用后台解决那就使用hash模式\n    new Router({\n      mode: 'hash',\n      base: process.env.BASE_URL,\n      routes: routes\n    })")])])}],E={name:"vueBuild"},D=E,C=Object(c["a"])(D,$,k,!1,null,null,null),S=C.exports,T=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v('    .clearfix:after {\n      content: ".";\n      display: block;\n      clear: both;\n      visibility: hidden;\n      height: 0;\n      font-size: 0;\n    }')])])}],z={name:"clearfix"},A=z,M=Object(c["a"])(A,T,O,!1,null,null,null),q=M.exports,R=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    "),t("a",{attrs:{href:"https://bootstrap-table.com/docs/api/table-options/",target:"_blank"}},[e._v("bootstrap-table文档")]),e._v("\n\n    // 事件绑定\n    window.operateEvents = {\n      'click .edit-icon': function (e, value, row, index) {\n        \n      },\n      'click .delete-icon': function (e, value, row, index) {\n        \n      }\n    };\n  ")]),t("pre",[e._v("    // 构建表格\n    $('#data-table').bootstrapTable({\n      method: 'post',\n      url: rootUrl + '/depart/selDepartList',\n      dataType: \"json\",\n      contentType: \"application/x-www-form-urlencoded\",\n      ajaxOptions: {\n        headers: {\n          token: token\n        }\n      },\n      responseHandler: function (res) {\n        if (res.statusCode == 200 && res.data.list && res.data.list.length > 0) {\n          return {\n            rows: res.data.list,\n            total: res.data.total\n          }\n        } else {\n          if (res.statusCode == 402021) {\n            parent.location.href = 'login.html'\n          }\n          return {\n            rows: [],\n            total: 0\n          }\n        }\n      },\n      locale: 'zh-CN',\n      pagination: true,\n      paginationLoop: false,\n      pageNumber: 1,\n      pageSize: 10,\n      pageList: [10, 25, 50, 100],\n      sidePagination: 'server',\n      queryParamsType: '',\n      striped: true,\n      queryParams: function (params) {\n        return {\n          pageNum: params.pageNumber,\n          pageSize: params.pageSize,\n          departId: $('.current-org-id').val(),\n          roomName: $('.room-name').val()\n        }\n      },\n      columns: [{\n        checkbox: true,\n        visible: true\n      }, {\n        field: 'roomName',\n        title: '会议室名称'\n      }, {\n        field: 'startTime',\n        title: '会议开始时间'\n      }, {\n        field: 'endTime',\n        title: '会议结束时间'\n      }, {\n        field: 'op',\n        title: '操作',\n        formatter: function (value, row, index) {\n          var e = '<div class=\"edit-icon\" title=\"编辑\"></div>';\n          var d = '<div class=\"delete-icon\" title=\"删除\"></div>';\n          return e + d;\n        },\n        events: operateEvents\n      }]\n  });")])])}],L={name:"bootstrapTable"},P=L,F=Object(c["a"])(P,R,U,!1,null,null,null),N=F.exports,I=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // var params = $(\"#form\").serializeForm()\n    $.fn.extend({\n      serializeForm: function () {\n        var result = {};\n        var extend = function (i, element) {\n          var node = result[element.name];\n          if ('undefined' !== typeof node && node !== null) {\n            if ($.isArray(node)) {\n              node.push(element.value);\n            } else {\n              result[element.name] = [node, element.value];\n            }\n          } else {\n            result[element.name] = element.value;\n          }\n        };\n        $.each(this.serializeArray(), extend);\n        return result;\n      }\n    });")])])}],Y={name:"serializeForm"},B=Y,J=Object(c["a"])(B,I,H,!1,null,null,null),Z=J.exports,V=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    $.fn.extend({\n      // post请求数据\n      post: function (url, data, callback) {\n        jQuery.support.cors = true;\n        var ajax = $.ajax({\n          headers: {\n            Accept: \"application/json; charset=utf-8\"\n          },\n          type: \"POST\",\n          url: url,\n          // 如果后台需要传递FormData格式\n          contentType: 'application/x-www-form-urlencoded; charset=utf-8',\n          data: data,\n          // 如果后台需要传递json格式\n          contentType: 'application/json; charset=utf-8',\n          data: JSON.stringify(data),\n          dataType: 'json',\n          timeout: 60 * 1000,\n          success: function (response) {\n            callback(response);\n          },\n          complete: function (XMLHttpRequest, status) {\n            if (status == 'timeout') {\n              ajax.abort();\n            }\n          }\n        });\n      },\n      // 上传文件ajax，data为FormData格式\n      upload: function (url, data, callback) {\n        $.ajax({\n          headers: {\n            Accept: \"application/json; charset=utf-8\"\n          },\n          type: \"POST\",\n          url: url,\n          data: data,\n          processData: false,\n          dataType: 'json',\n          xhrFields: {\n            withCredentials: true\n          },\n          crossDomain: true,\n          contentType: false,\n          success: function (response) {\n            callback(response);\n          }\n        });\n      }\n    })")])])}],W={name:"jqueryAjax"},Q=W,X=Object(c["a"])(Q,V,K,!1,null,null,null),G=X.exports,ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    "),t("strong",{staticStyle:{color:"orange"}},[t("a-icon",{attrs:{type:"info-circle"}}),e._v(" 只提供简单的提示，如果需求比较花哨，请自行寻找别的解决方案")],1),e._v('\n\n    // 如果整体架构是iframe形式则需要将提示dom插入到父级页面的body中，否则不需要parent.document\n\n    /* 自定义alert样式 */\n    @keyframes notice {\n      0% {\n        top: 0;\n        opacity: 0;\n      }\n\n      25% {\n        top: 40px;\n        opacity: 0.4;\n      }\n\n      75% {\n        top: 20px;\n        opacity: 0.8;\n      }\n\n      100% {\n        top: 30px;\n        opacity: 1;\n      }\n    }\n\n    .ant-message-notice {\n      position: fixed;\n      z-index: 10086;\n      top: 30px;\n      left: 50%;\n      transform: translateX(-50%);\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-start;\n      border: 1px solid rgba(0, 191, 193, 0.5);\n      padding: 12px 15px;\n      background: #edf2fc;\n      border-radius: 4px;\n      box-shadow: 0 4px 12px rgba(0, 191, 193, 0.1);\n      animation: notice 0.2s linear;\n    }\n\n    .ant-message-notice span.ant-message-content {\n      display: inline-block;\n      max-width: 640px;\n      word-break: break-all;\n      line-height: 24px;\n    }\n\n    .ant-message-notice .icon.info {\n      margin: 0 10px 0 0;\n      fill: #00bfc1;\n    }\n\n    .ant-message-notice .icon.close-alert {\n      height: 24px;\n      fill: #888;\n      margin: 0 0 0 10px;\n      cursor: pointer;\n    }\n\n    .ant-message-notice .icon.close-alert:hover {\n      fill: #f00;\n    }\n\n    /* 自定义alert扩展 */\n    $.fn.extend({\n      alert: function (msg) {\n        if (window.jqueryAlertTimer) {\n          clearTimeout(window.jqueryAlertTimer)\n        }\n        window.jqueryAlertTimer = setTimeout(function () {\n          $(\'.ant-message-notice\', parent.document).remove()\n        }, 3000)\n        $(\'.ant-message-notice\', parent.document).remove()\n        $(\'body\', parent.document).append(\n          \'<div class="ant-message-notice"><svg t="1562118244148" class="icon info" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1807" width="24" height="24"><path d="M547.7 333c0-24.7-20-44.7-44.7-44.7s-44.7 20-44.7 44.7c0 24.7 20 44.7 44.7 44.7C527.7 377.7 547.7 357.7 547.7 333zM452.5 702.8c8.1 7 18.5 8.1 26.2 7.2 4.7-0.6 9.8-2 11.7-2.5l75.4-25.5c16.2-5.4 24.1-16.1 18.3-34.9-5.8-16.2-19.3-20.6-32.4-17.4L510 641.3l38.8-183.5c1.7-8.2 0.4-21-8.2-30.2-7.8-8.3-20.7-9.6-28.9-7.5L440 444.4c-13 3.3-20 20.2-16.5 33.2 4.7 17.3 18.2 23.4 31.2 20.1l31.4-9.5-40 191C444.3 687.3 446.5 697.1 452.5 702.8z" p-id="1808" ></path><path d="M885.76 498.176c0 213.504-173.056 386.56-386.56 386.56S112.64 711.68 112.64 498.176s173.056-386.56 386.56-386.56S885.76 284.672 885.76 498.176zM499.712 169.984c-175.616 0-329.728 154.112-329.728 329.216 0 182.272 147.456 329.728 329.728 329.728s329.728-147.456 329.728-329.728C829.952 325.12 677.888 169.984 499.712 169.984z" p-id="1809" ></path></svg>\' +\n          \'<span class="ant-message-content">\' + msg + \'</span>\' +\n          \'<svg t="1562119707312" class="icon close-alert" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3290" width="12" height="12"><path d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z" p-id="3291"></path></svg></div>\'\n        )\n        $(\'.icon.close-alert\').click(function () {\n          $(\'.ant-message-notice\', parent.document).remove()\n          clearTimeout(window.jqueryAlertTimer)\n        })\n      }\n    });')])])},ne=[],te={name:"jqueryAlert"},ae=te,re=Object(c["a"])(ae,ee,ne,!1,null,null,null),oe=re.exports,se=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v('    $.fn.extend({\n      searchParams: function (name) {\n        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");\n        var r = window.location.search.substr(1).match(reg);\n        return r == null ? null : unescape(r[2]);\n      }\n    });')])])}],le={name:"searchParams"},ce=le,pe=Object(c["a"])(ce,se,ie,!1,null,null,null),ue=pe.exports,de=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},me=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    语法介绍：\n    [a-zA-Z0-9] 匹配选项列表\n    * 匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \\*。\n    + 匹配前面的子表达式一次或多次。要匹配 + 字符，请使用 \\+。\n    ? 匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \\?\n    {n} 匹配前面的子表达式n次\n    {n,} 匹配前面的子表达式至少n次\n    {n,m} 匹配前面的子表达式n次到m次\n\n    常用表达式：\n    手机号：/^1\\d{10}$/\n    邮箱：/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$/\n    汉字：/^[\\u4e00-\\u9fa5]{1,6}$/\n    正整数：/^[1-9]\\d*$/\n    IP地址：/((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))/\n    网址：/(((^https?:(?:\\/\\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)$/\n    邮编：/[1-9]\\d{5}(?!\\d)/")])])}],fe={name:"regularExpression"},he=fe,ge=Object(c["a"])(he,de,me,!1,null,null,null),ve=ge.exports,_e=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},xe=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v('    var setting = {\n      view: {\n        dblClickExpand: false,\n        showLine: false,\n        selectedMulti: false,\n        showIcon: false\n      },\n      data: {\n        simpleData: {\n          enable: true,\n          idKey: "DepartID",\n          pIdKey: "ParentDepartID"\n        },\n        key: {\n          name: "DepartName"\n        }\n      },\n      callback: {\n        onClick: function (event, treeId, treeNode) {\n          \n        }\n      }\n    };\n    $(document).ready(function () {\n      $.fn.zTree.init($("#ztree"), setting, zNodes);\n    });')])])}],be={name:"initZtree"},ye=be,we=Object(c["a"])(ye,_e,xe,!1,null,null,null),je=we.exports,$e=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ke=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    $(\"#input\").on('change', function (e) {\n      e = e || window.event;\n      var file = e.target.files[0];\n      if (!file) {\n        return false;\n      }\n      if (file.type.indexOf('image/jpeg') == -1 && file.type.indexOf('image/png') == -1) {\n        $.fn.alert('请上传格式为png、jpg的图片');\n        return false;\n      }\n      if (file.size / 1024 > 250) {\n        $.fn.alert('图片文件大小超出限制');\n        return false;\n      }\n      var fileRead = new FileReader();\n      fileRead.readAsDataURL(file);\n      fileRead.onload = function () {\n        console.log(fileRead.result);\n      };\n    });")])])}],Ee={name:"fileRead"},De=Ee,Ce=Object(c["a"])(De,$e,ke,!1,null,null,null),Se=Ce.exports,Te=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Oe=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // connect会把dispatch自动挂载到组件的this.props上，state通过connect函数挂载\n    import { connect } from 'dva';\n    @connect(({ user }) => ({ user }))\n    class BlankLayout extends Component {\n\n      componentDidMount() {\n        const { dispatch } = this.props;\n        dispatch({\n          type: 'user/fetchCurrent',\n        });\n      }\n      \n      render() {\n        const { children, user } = this.props;\n        return (\n          <div>\n            {children}\n          </div>\n        )\n      }\n    }")])])}],ze={name:"umiConnect"},Ae=ze,Me=Object(c["a"])(Ae,Te,Oe,!1,null,null,null),qe=Me.exports,Re=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Ue=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // utils.less\n    .textOverflowMulti(@line: 3, @bg: #fff) {\n      position: relative;\n      max-height: @line * 1.5em;\n      margin-right: -1em;\n      padding-right: 1em;\n      overflow: hidden;\n      line-height: 1.5em;\n      text-align: justify;\n\n      &::before {\n        position: absolute;\n        right: 14px;\n        bottom: 0;\n        padding: 0 1px;\n        background: @bg;\n        content: '...';\n      }\n\n      &::after {\n        position: absolute;\n        right: 14px;\n        width: 1em;\n        height: 1em;\n        margin-top: 0.2em;\n        background: white;\n        content: '';\n      }\n    }\n\n    // login.less\n    @import '../../utils/utils.less';\n    .test {\n      color: red;\n      .textOverflowMulti(2, transparent);\n    }")])])}],Le={name:"lessExtends"},Pe=Le,Fe=Object(c["a"])(Pe,Re,Ue,!1,null,null,null),Ne=Fe.exports,Ie=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    "),t("strong",{staticStyle:{color:"red"}},[t("a-icon",{attrs:{type:"info-circle"}}),e._v(" 由于启用了css modules，如果不加:global{}包裹，样式覆盖则无法生效")],1),e._v("\n    \n    .loginCard {\n      width: 360px;\n\n      :global {\n        .ant-card-body {\n          padding: 20px 15px;\n        }\n      }\n    }")])])},He=[],Ye={name:"cssModules"},Be=Ye,Je=Object(c["a"])(Be,Ie,He,!1,null,null,null),Ze=Je.exports,Ve=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Ke=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // 在路由配置中对指定的页面增加Routes: ['src/pages/Authorized']选项，这样在每次进入页面之前会先走一遍鉴权页面，在鉴权页面中判断是否有权限，并做出相应的处理\n    // router.config.js\n    {\n      path: '/',\n      component: '../layouts/Basic',\n      Routes: ['src/pages/Authorized'],\n      routes: [{\n        path: '/',\n        redirect: '/user'\n      }, {\n        path: '/user',\n        name: 'user',\n        component: './User'\n      }]\n    }\n\n    // pages/Authorized.js\n    import React, { Component, Fragment } from 'react'\n    import Redirect from 'umi/redirect';\n    class Authorized extends Component {\n      render() {\n        const { children } = this.props;\n        if () {\n          return <Fragment>{ children }</Fragment>\n        } else {\n          return <Redirect to=\"/login\" />\n        }\n      }\n    }\n    export default Authorized;")])])}],We={name:"umiRouterInterceptor"},Qe=We,Xe=Object(c["a"])(Qe,Ve,Ke,!1,null,null,null),Ge=Xe.exports,en=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    "),t("a",{attrs:{href:"https://github.com/iloveoldking/blog/tree/master/blog-server",target:"_blank"}},[t("a-icon",{attrs:{type:"github"}}),e._v(" blog项目")],1),e._v("\n    \n    1.安装依赖\n    npm install egg-mongoose --save\n\n    2.在插件配置中开启mongoose \n    module.exports = {\n      mongoose: {\n        enable: true,\n        package: 'egg-mongoose',\n      }\n    };\n\n    3.在默认配置中设置mongoose\n    config.mongoose = {\n      client: {\n        url: 'mongodb://127.0.0.1/blog'\n      }\n    };\n\n    4.定义model\n    // app/model/user.js\n    const moment = require('moment')\n\n    module.exports = app => {\n      const mongoose = app.mongoose;\n      const Schema = mongoose.Schema;\n\n      const schemaConfig = {\n        versionKey: false,\n        timestamps: true,\n        toObject: {\n          transform(doc, ret, options) {\n            delete ret.password;\n            ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD HH:mm:ss')\n            ret.updatedAt = moment(ret.updatedAt).format('YYYY-MM-DD HH:mm:ss')\n          }\n        }\n      }\n\n      const schemaFields = {\n        mobile: {\n          type: String\n        },\n        password: {\n          type: String\n        },\n        nickname: {\n          type: String\n        },\n        photo: {\n          type: String\n        }\n      }\n      const UserSchema = new Schema(schemaFields, schemaConfig);\n      return mongoose.model('User', UserSchema);\n    };\n\n    5.注册各接口路由\n    // app/router.js\n    module.exports = app => {\n      const { router, controller } = app;\n\n      // 用户相关路由配置\n      router.post('/user/create',controller.users.create);\n    };\n\n    6.编写controller层代码（用于获取接口调用时传递的参数，然后把参数传递到service层，然后将service返回的结果返回给接口调用者）\n    // app/controller/user.js\n    const Controller = require('egg').Controller;\n\n    class UserController extends Controller {\n      async create() {\n        const { ctx } = this;\n        const {\n          mobile,\n          password,\n          nickname,\n          photo\n        } = ctx.request.body;\n        const res = await ctx.service.user.create(mobile, password, nickname, photo)\n        ctx.body = res;\n      }\n    }\n\n    module.exports = UserController;\n\n    7.编写srvice层代码（根据controller层中获取的参数对数据库进行增删改查操作，然后向controller层返回操作结果）\n    // app/service/user.js\n    const Service = require('egg').Service;\n    const moment = require('moment')\n\n    class UserService extends Service {\n\n      /**\n      * @description 新增用户\n      * @param {String} mobile 手机号 唯一\n      * @param {String} password 密码\n      * @param {String} nickname 昵称 唯一\n      * @param {String} photo 头像\n      */\n      async create(mobile, password, nickname, photo) {\n        const {\n          ctx,\n        } = this;\n        let createParams = {\n          mobile,\n          password,\n          nickname\n        };\n        if (photo) createParams.photo = photo;\n        let user = await ctx.model.User.create(createParams);\n        user = user.toObject();\n        return successResponse({\n          data: user\n        });\n      }\n    }\n\n    module.exports = UserService;")])])},nn=[],tn={name:"eggMongo"},an=tn,rn=Object(c["a"])(an,en,nn,!1,null,null,null),on=rn.exports,sn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    "),t("a",{attrs:{href:"https://github.com/iloveoldking/blog/tree/master/blog-server",target:"_blank"}},[t("a-icon",{attrs:{type:"github"}}),e._v(" blog项目")],1),e._v("\n\n    "),t("strong",{staticStyle:{color:"red"}},[t("a-icon",{attrs:{type:"info-circle"}}),e._v(" 需要注意的是，在涉及到ObjectId的地方要加上try catch捕捉异常，因为ObjectId是有特殊格式的字符串，如果格式不对mongoose在操作时会发生异常")],1),e._v("\n\n    // 分页查询\n    async findAll(pageNum = 1, pageSize = 0, mobile = '', nickname = '') {\n      const { ctx } = this;\n      pageNum = parseInt(pageNum);\n      pageSize = parseInt(pageSize);\n      // $ne表示notequal不等于，$regex表示模糊匹配，$options: 'i'忽略大小写\n      const query = {\n        mobile: {\n          $ne: 'admin',\n          $regex: mobile,\n          $options: 'i'\n        },\n        nickname: {\n          $regex: nickname,\n          $options: 'i'\n        },\n      };\n      // 第一个参数表示查询条件，第二个参数表示需要返回的字段（_id一定会返回，无论在这里是否列出），第三个参数表示配置例如分页排序等\n      let users = await ctx.model.User.find(query, 'mobile nickname photo createdAt updatedAt', {\n        skip: (pageNum - 1) * pageSize,// 从第几个开始\n        limit: pageSize,// 查询数量\n        sort: '-createdAt age',// 排序，按创建时间倒叙，年龄正序\n        lean: true,// ctx.model.User.find返回的是表示是mongoose.Document（MongoDB中称每一个数据为一个document），js无法对此对象进行操作，如果需要操作就要将其转化为纯js对象\n      });\n      // 由于mongoose.Document已经被转换为js对象，所以在这里我们可以对js对象进行操作，另外在定义model时，配置的toObejct属性也是用于将document转换为js对象，可参考《在egg框架中使用MongoDB作为数据库》--4.定义model\n      users.forEach(item => {\n        item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')\n        item.updatedAt = moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')\n      })\n      // 统计按查询条件获取到的数据条数\n      const total = await ctx.model.User.countDocuments(query);\n      return successResponse({\n        data: {\n          list: users,\n          pageNum,\n          pageSize,\n          total\n        }\n      })\n    }\n\n    // 新增和批量新增\n    await ctx.model.User.create({\n      mobile,\n      password,\n      nickname\n    })\n    await ctx.model.User.create([{}, {}, {}...])\n\n    // 修改\n    // 第一个参数表示查询条件，第二个参数表示需要修改的属性\n    await ctx.model.User.update({\n      _id: userId\n    }, {\n      password\n    })\n\n    // 批量删除\n    // $in表示匹配在数组之内的所有项\n    await ctx.model.User.deleteMany({\n      _id: {\n        $in: userIds\n      }\n    });")])])},ln=[],cn={name:"eggMongoose"},pn=cn,un=Object(c["a"])(pn,sn,ln,!1,null,null,null),dn=un.exports,mn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    "),t("a",{attrs:{href:"https://github.com/iloveoldking/blog/tree/master/blog-server",target:"_blank"}},[t("a-icon",{attrs:{type:"github"}}),e._v(" blog项目")],1),e._v("\n\n    // app/model/article.js\n    const schemaFields = {\n      user: {\n        type: Schema.ObjectId,\n        ref: 'User'\n      },\n      title: {\n        type: String,\n      },\n      content: {\n        type: String,\n      }\n    }\n\n    // app/service/article.js\n    const articles = await ctx.model.Article.find()\n    await ctx.model.Article.populate(articles, {\n      path: 'user',\n      select: 'nickname photo'\n    })\n    });")])])},fn=[],hn={name:"mongoosePopulate"},gn=hn,vn=Object(c["a"])(gn,mn,fn,!1,null,null,null),_n=vn.exports,xn=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},bn=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // 安装依赖 npm install await-stream-ready --save\n\n    // 函数封装\n    const fs = require('fs');\n    const path = require('path');\n    const awaitWriteStream = require('await-stream-ready').write;\n    const sendToWormhole = require('stream-wormhole');\n    const md5 = require('md5');\n\n    module.exports = async function (_this) {\n      const { ctx } = _this;\n      const stream = await ctx.getFileStream();\n      const currentTime = new Date().getTime();\n      const filename = md5(stream.filename + currentTime) + path.extname(stream.filename).toLocaleLowerCase();\n      const target = path.join(_this.config.baseDir, 'app/public/uploads', filename);\n      const writeStream = fs.createWriteStream(target);\n      try {\n        await awaitWriteStream(stream.pipe(writeStream));\n        return {\n          ...stream.fields,\n          path: `/public/uploads/${filename}`\n        }\n      } catch (err) {\n        await sendToWormhole(stream);\n        return 'upload error'\n      }\n    }\n    \n    // 接口使用\n    class UploadController extends Controller {\n      async index() {\n        const { ctx } = this;\n        const uploadRes = await upload(this);\n        ctx.body = {\n          ...uploadRes\n        };\n      }\n    }\n\n    // 前端调用\n    const formData = new FormData();\n    formData.append('file', this.photoFile);\n    const uploadRes = await axios({\n      method: 'post',\n      url: `${userConfig.baseURL}/upload`,\n      headers: {\n        'Content-Type': 'application/formdata'\n      },\n      data: formData\n    });")])])}],yn={name:"nodeUpload"},wn=yn,jn=Object(c["a"])(wn,xn,bn,!1,null,null,null),$n=jn.exports,kn=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},En=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    1.安装依赖\n    npm install egg-cors --save\n\n    2.在插件配置中开启cors\n    module.exports = {\n      cors: {\n        enable: true,\n        package: 'egg-cors',\n      }\n    };\n\n    3.在默认配置中设置cors\n    config.cors = {\n      origin: '*',\n      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',\n      credentials: true\n    };")])])}],Dn={name:"eggCors"},Cn=Dn,Sn=Object(c["a"])(Cn,kn,En,!1,null,null,null),Tn=Sn.exports,On=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},zn=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    安装依赖\n    npm install @ckeditor/ckeditor5-build-classic --save\n\n    // CKEditor.vue\n    <template>\n      <ckeditor :value=\"editorData\" :editor=\"editor\" :config=\"editorConfig\" @input=\"handleEditorChange\"></ckeditor>\n    </template>\n\n    <script>\n      import ClassicEditor from '@ckeditor/ckeditor5-build-classic';\n      import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';\n      import userConfig from '@/config';\n      const hasProp = (instance, prop) => {\n        const $options = instance.$options || {};\n        const propsData = $options.propsData || {};\n        return prop in propsData;\n      };\n      export default {\n        name: 'ckEditor',\n        props: ['value'],\n        data() {\n          const value = this.value || '';\n          return {\n            editor: ClassicEditor,\n            editorConfig: {\n              toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'imageUpload',\n                'insertTable', '|', 'undo', 'redo'\n              ],\n              language: 'zh-cn',\n              ckfinder: {\n                uploadUrl: `${userConfig.baseURL}/editorUpload`\n              }\n            },\n            editorData: value,\n          }\n        },\n        watch: {\n          value(val = '') {\n            this.editorData = val;\n          },\n        },\n        methods: {\n          triggerChange(changedValue) {\n            this.$emit('change', changedValue);\n          },\n          handleEditorChange(editorData) {\n            if (!hasProp(this, 'value')) {\n              this.editorData = editorData;\n            }\n            this.triggerChange(editorData);\n          }\n        },\n      }\n    <\/script>\n\n\n    <style lang=\"less\">\n      .ck-editor__main {\n        &>.ck-editor__editable {\n          min-height: 300px;\n        }\n      }\n    </style>\n\n    // 使用\n    <ck-editor v-decorator=\"contentDecorator\" />\n    import ckEditor from '@/components/CKEditor'\n    ")])])}],An={name:"vueCkeditor"},Mn=An,qn=Object(c["a"])(Mn,On,zn,!1,null,null,null),Rn=qn.exports,Un=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Ln=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    以750设计稿为例，100vw是设备宽度，除以7.5可以让1rem的大小在750设计稿下等于100px。例如设计稿中标注30px，转换rem单位后需要写成0.3rem\n    html {\n      font-size: calc(100vw/7.5);\n    }")])])}],Pn={name:"remTransition"},Fn=Pn,Nn=Object(c["a"])(Fn,Un,Ln,!1,null,null,null),In=Nn.exports,Hn=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Yn=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    vue实现响应式并不是数据发生变化之后DOM立即变化，而是按一定的策略进行DOM更新\n    $nextTick是在下次DOM更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick，则可以在回调中获取更新后的DOM，示例：\n    methods: {\n      example(){\n        // 修改数据\n        this.message = 'changed'\n        // 至此DOM还没有更新\n        this.$nextTick( () => {\n          // 在回调中DOM已经更新\n        })\n      }\n    }")])])}],Bn={name:"nextTick"},Jn=Bn,Zn=Object(c["a"])(Jn,Hn,Yn,!1,null,null,null),Vn=Zn.exports,Kn=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Wn=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // webpack-dev-server配置\n    devServer: {\n      proxy: {\n        '/api': {\n          // 代理的目标服务器地址\n          target: 'url',\n            // https请求需要该设置\n          secure: false,\n          // 必须设置该项\n          changeOrigin: true,\n          // '/api/../..'重写为'/../..'\n          pathRewrite: {'^/api' : ''}\n        },\n        '/foo': {\n          target: 'other_url'\n        }\n      }\n    }\n\n    // 请求数据\n    fetch('/api/user/create').then()")])])}],Qn={name:"serverProxy"},Xn=Qn,Gn=Object(c["a"])(Xn,Kn,Wn,!1,null,null,null),et=Gn.exports,nt=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},tt=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    // css\n    // 设置暂停时显示播放按钮\n    .vjs-paused .vjs-big-play-button,\n    .vjs-paused.vjs-has-started .vjs-big-play-button {\n      display: block;\n    }\n    // 设置控制栏显示总时长，videoJs默认在进度条右侧显示视频剩余时长\n    .video-js .vjs-time-control {\n      display: block;\n      padding: 0 0.2em;\n    }\n    .video-js .vjs-remaining-time {\n      display: none;\n    }\n    .vjs-time-control.vjs-time-divider {\n      min-width: 1px;\n    }\n\n    // html\n    <video id='my-player' class='video-js vjs-default-skin vjs-big-play-centered'></video>\n\n    // javascript\n    videojs('my-player', {\n      autoplay: false,\n      preload: 'auto',\n      controls: true,\n      // 设置中文还需要引用一个附带语言包zh-CN.js\n      language: 'zh-CN',\n      sources: [{\n        src: '//vjs.zencdn.net/v/oceans.mp4',\n        type: 'video/mp4'\n      }],\n      poster: '//vjs.zencdn.net/v/oceans.png'\n    })")])])}],at={name:"videoJs"},rt=at,ot=Object(c["a"])(rt,nt,tt,!1,null,null,null),st=ot.exports,it=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},lt=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    父级元素设置padding-bottom：高/宽，子集元素则可以按照宽高比自适应\n    .parent {\n      width: 360px;\n      height: 0;\n      padding-bottom: 56.25%;\n      position: relative;\n    }\n    .child {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n    }")])])}],ct={name:"autoHeight"},pt=ct,ut=Object(c["a"])(pt,it,lt,!1,null,null,null),dt=ut.exports,mt=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ft=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    设置cookie：\n    Cookies.set('name', 'value', { expires: 7 });\n\n      expires可以是数字，表示多少天之后失效，或者为Date实例，表示指定日期失效，更多关于cookie有效期的设定：\n      1.15分钟\n      var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);\n      Cookies.set('foo', 'bar', {\n          expires: inFifteenMinutes\n      });\n      2.15分钟\n      var in15Minutes = 1/96;\n      Cookies.set('foo', 'bar', {\n          expires: in15Minutes\n      });\n      3.半天\n      var inHalfADay = 0.5;\n      Cookies.set('foo', 'bar', {\n          expires: inHalfADay\n      });\n      4.指定某天\n      var specifyDay = new Date('2019-08-08 08:08:08');\n      Cookies.set('foo', 'bar', {\n          expires: specifyDay\n      });\n\n    读取cookie：\n    Cookies.get('name'); // => 'value'\n    Cookies.get('nothing'); // => undefined\n    Cookies.getJSON('user'); // => {name: 'jack'}\n\n    移除cookie：\n    Cookies.remove('name');")])])}],ht={name:"jsCookie"},gt=ht,vt=Object(c["a"])(gt,mt,ft,!1,null,null,null),_t=vt.exports,xt={name:"home",components:{RequestDoc:u,TreeData:v,LessError:j,VueBuild:S,ClearFix:q,BootstrapTable:N,SerializeForm:Z,JqueryAjax:G,JqueryAlert:oe,SearchParams:ue,RegularExpression:ve,InitZtree:je,FileRead:Se,UmiConnect:qe,LessExtends:Ne,CssModules:Ze,UmiRouterInterceptor:Ge,EggMongo:on,EggMongoose:dn,MongoosePopulate:_n,NodeUpload:$n,EggCors:Tn,VueCkeditor:Rn,RemTransition:In,NextTick:Vn,ServerProxy:et,VideoJs:st,AutoHeight:dt,JsCookie:_t}},bt=xt,yt=(t("de16"),Object(c["a"])(bt,a,r,!1,null,null,null));n["default"]=yt.exports},de16:function(e,n,t){"use strict";var a=t("f3e7"),r=t.n(a);r.a},f3e7:function(e,n,t){}}]);