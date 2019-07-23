<template>
  <div>
    <pre>
      // 在vue.config.js中配置publicPath，配置outputDir是为了直接在github上部署项目，因为docs文件夹可支持部署
      module.exports = {
        publicPath: './',
        outputDir: 'docs',
        productionSourceMap: false
      }</pre>
    <pre>
      // vue项目如果在打包部署之后出现刷新页面消失，那是因为history模式需要后台配置支持才可以，如果不用后台解决那就使用hash模式
      new Router({
        mode: 'hash',
        base: process.env.BASE_URL,
        routes: routes
      })</pre>
  </div>
</template>

<script>
export default {
  name: "vueBuild"
};
</script>