<template>
  <div>
    <pre>
      // webpack-dev-server配置
      devServer: {
        proxy: {
          '/api': {
            // 代理的目标服务器地址
            target: 'url',
              // https请求需要该设置
            secure: false,
            // 必须设置该项
            changeOrigin: true,
            // '/api/../..'重写为'/../..'
            pathRewrite: {'^/api' : ''}
          },
          '/foo': {
            target: 'other_url'
          }
        }
      }

      // 请求数据
      fetch('/api/user/create').then()</pre>
  </div>
</template>

<script>
export default {
  name: "serverProxy"
};
</script>