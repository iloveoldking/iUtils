<template>
  <div class="home-wrapper">
    <a-card title="封装axios请求数据">
      <pre>
        import axios from 'axios'
        import setting from '@/setting'
        import {
          notification
        } from 'antd'
      </pre>
      <pre>
        const iSFormDataType = setting.contentType === 'formData';
        const formDataContentType = 'application/x-www-form-urlencoded; charset=utf-8'
        const jsonContentType = 'application/json; charset=utf-8'
      </pre>
      <pre>
        let instance = axios.create({
          baseURL: setting.baseUrl,
          timeout: 1000 * 10,
          headers: {
            'Accept': "application/json; charset=utf-8",
            'Content-Type': iSFormDataType ? formDataContentType : jsonContentType
          },
          responseType: 'json',
          transformRequest: [function (data) {
            if (data) {
              // 对data进行任意转换处理
              if (iSFormDataType) {
                let formDataString = '';
                let key;
                for (key in data) {
                  formDataString += '&' + key + '=' + data[key];
                }
                formDataString = formDataString.slice(1);
                return formDataString;
              } else {
                return data;
              }
            }
          }]
        });
      </pre>
      <pre>
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
          // 对于请求统一增加token选项
          // config.headers.token = token;
          return config;
        }, function (error) {
          // 对请求错误做些什么
          notification.error({
            message: '发送请求之前，请求错误',
            description: error.message
          });
        });
      </pre>
      <pre>
        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
          // 对响应数据做点什么
          return response.data;
        }, function (error) {
          // 对响应错误做点什么
          notification.error({
            message: '发送请求之后，响应错误',
            description: error.message
          });
        });
      </pre>
      <pre>
        export default instance;
      </pre>
    </a-card>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  name: "home",
  components: {
    Avatar
  },
  data() {
    return {
      activeKey: ["1"]
    };
  }
};
</script>

<style lang="less">
.home-wrapper {
  padding: 10px 0;

  .ant-card-head {
    background: #bbd8af;
  }

  .ant-card-body {
    padding: 15px 0;
    background: #e3eae0;

    pre {
      margin: 0;
    }
  }
}
</style>