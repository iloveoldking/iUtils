<template>
  <div>
    <pre>
      // 在路由配置中对指定的页面增加Routes: ['src/pages/Authorized']选项，这样在每次进入页面之前会先走一遍鉴权页面，在鉴权页面中判断是否有权限，并做出相应的处理
      // router.config.js
      {
        path: '/',
        component: '../layouts/Basic',
        Routes: ['src/pages/Authorized'],
        routes: [{
          path: '/',
          redirect: '/user'
        }, {
          path: '/user',
          name: 'user',
          component: './User'
        }]
      }

      // pages/Authorized.js
      import React, { Component, Fragment } from 'react'
      import Redirect from 'umi/redirect';
      class Authorized extends Component {
        render() {
          const { children } = this.props;
          if () {
            return &lt;Fragment&gt;{ children }&lt;/Fragment&gt;
          } else {
            return &lt;Redirect to="/login" /&gt;
          }
        }
      }
      export default Authorized;</pre>
  </div>
</template>

<script>
export default {
  name: "umiRouterInterceptor"
};
</script>