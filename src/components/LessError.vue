<template>
  <div>
    <pre>
      // 在Vue-Cli3.0中需要这样写vue.config.js 
      module.exports = {
        // 向 CSS 相关的 loader 传递选项
        css: {
          loaderOptions: {
            less: {
              javascriptEnabled: true
            }
          }
        }
      }</pre>
  </div>
</template>

<script>
export default {
  name: "lesserror"
};
</script>