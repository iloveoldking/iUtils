<template>
  <div>
    <pre>
      1.安装依赖
      npm install egg-cors --save

      2.在插件配置中开启cors
      module.exports = {
        cors: {
          enable: true,
          package: 'egg-cors',
        }
      };

      3.在默认配置中设置cors
      config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
        credentials: true
      };</pre>
  </div>
</template>

<script>
export default {
  name: "eggCors"
};
</script>