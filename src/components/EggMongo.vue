<template>
  <div>
    <pre>
      <a href="https://github.com/iloveoldking/blog/tree/master/blog-server" target="_blank"><a-icon type="github" /> blog项目</a>
      
      1.安装依赖
      npm install egg-mongoose --save

      2.在插件配置中开启mongoose 
      module.exports = {
        mongoose: {
          enable: true,
          package: 'egg-mongoose',
        }
      };

      3.在默认配置中设置mongoose
      config.mongoose = {
        client: {
          url: 'mongodb://127.0.0.1/blog'
        }
      };

      4.定义model
      // app/model/user.js
      const moment = require('moment')

      module.exports = app => {
        const mongoose = app.mongoose;
        const Schema = mongoose.Schema;

        const schemaConfig = {
          versionKey: false,
          timestamps: true,
          toObject: {
            transform(doc, ret, options) {
              delete ret.password;
              ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD HH:mm:ss')
              ret.updatedAt = moment(ret.updatedAt).format('YYYY-MM-DD HH:mm:ss')
            }
          }
        }

        const schemaFields = {
          mobile: {
            type: String
          },
          password: {
            type: String
          },
          nickname: {
            type: String
          },
          photo: {
            type: String
          }
        }
        const UserSchema = new Schema(schemaFields, schemaConfig);
        return mongoose.model('User', UserSchema);
      };

      5.注册各接口路由
      // app/router.js
      module.exports = app => {
        const { router, controller } = app;

        // 用户相关路由配置
        router.post('/user/create',controller.users.create);
      };

      6.编写controller层代码（用于获取接口调用时传递的参数，然后把参数传递到service层，然后将service返回的结果返回给接口调用者）
      // app/controller/user.js
      const Controller = require('egg').Controller;

      class UserController extends Controller {
        async create() {
          const { ctx } = this;
          const {
            mobile,
            password,
            nickname,
            photo
          } = ctx.request.body;
          const res = await ctx.service.user.create(mobile, password, nickname, photo)
          ctx.body = res;
        }
      }

      module.exports = UserController;

      7.编写srvice层代码（根据controller层中获取的参数对数据库进行增删改查操作，然后向controller层返回操作结果）
      // app/service/user.js
      const Service = require('egg').Service;
      const moment = require('moment')

      class UserService extends Service {

        /**
        * @description 新增用户
        * @param {String} mobile 手机号 唯一
        * @param {String} password 密码
        * @param {String} nickname 昵称 唯一
        * @param {String} photo 头像
        */
        async create(mobile, password, nickname, photo) {
          const {
            ctx,
          } = this;
          let createParams = {
            mobile,
            password,
            nickname
          };
          if (photo) createParams.photo = photo;
          let user = await ctx.model.User.create(createParams);
          user = user.toObject();
          return successResponse({
            data: user
          });
        }
      }

      module.exports = UserService;</pre>
  </div>
</template>
