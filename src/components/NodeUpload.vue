<template>
  <div>
    <pre>
      // 安装依赖 npm install await-stream-ready --save

      // 函数封装
      const fs = require('fs');
      const path = require('path');
      const awaitWriteStream = require('await-stream-ready').write;
      const sendToWormhole = require('stream-wormhole');
      const md5 = require('md5');

      module.exports = async function (_this) {
        const { ctx } = _this;
        const stream = await ctx.getFileStream();
        const currentTime = new Date().getTime();
        const filename = md5(stream.filename + currentTime) + path.extname(stream.filename).toLocaleLowerCase();
        const target = path.join(_this.config.baseDir, 'app/public/uploads', filename);
        const writeStream = fs.createWriteStream(target);
        try {
          await awaitWriteStream(stream.pipe(writeStream));
          return {
            ...stream.fields,
            path: `/public/uploads/${filename}`
          }
        } catch (err) {
          await sendToWormhole(stream);
          return 'upload error'
        }
      }
      
      // 接口使用
      class UploadController extends Controller {
        async index() {
          const { ctx } = this;
          const uploadRes = await upload(this);
          ctx.body = {
            ...uploadRes
          };
        }
      }

      // 前端调用
      const formData = new FormData();
      formData.append('file', this.photoFile);
      const uploadRes = await axios({
        method: 'post',
        url: `${userConfig.baseURL}/upload`,
        headers: {
          'Content-Type': 'application/formdata'
        },
        data: formData
      });</pre>
  </div>
</template>
