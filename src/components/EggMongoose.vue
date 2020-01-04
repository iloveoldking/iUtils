<template>
  <div>
    <pre>
      <a href="https://github.com/iloveoldking/blog/tree/master/blog-server" target="_blank"><a-icon type="github" /> blog项目</a>

      <strong style='color: red;'><a-icon type="info-circle" /> 需要注意的是，在涉及到ObjectId的地方要加上try catch捕捉异常，因为ObjectId是有特殊格式的字符串，如果格式不对mongoose在操作时会发生异常</strong>

      // 分页查询
      async findAll(pageNum = 1, pageSize = 0, mobile = '', nickname = '') {
        const { ctx } = this;
        pageNum = parseInt(pageNum);
        pageSize = parseInt(pageSize);
        // $ne表示notequal不等于，$regex表示模糊匹配，$options: 'i'忽略大小写
        const query = {
          mobile: {
            $ne: 'admin',
            $regex: mobile,
            $options: 'i'
          },
          nickname: {
            $regex: nickname,
            $options: 'i'
          },
        };
        // 第一个参数表示查询条件，第二个参数表示需要返回的字段（_id一定会返回，无论在这里是否列出），第三个参数表示配置例如分页排序等
        let users = await ctx.model.User.find(query, 'mobile nickname photo createdAt updatedAt', {
          skip: (pageNum - 1) * pageSize,// 从第几个开始
          limit: pageSize,// 查询数量
          sort: '-createdAt age',// 排序，按创建时间倒叙，年龄正序
          lean: true,// ctx.model.User.find返回的是表示是mongoose.Document（MongoDB中称每一个数据为一个document），js无法对此对象进行操作，如果需要操作就要将其转化为纯js对象
        });
        // 由于mongoose.Document已经被转换为js对象，所以在这里我们可以对js对象进行操作，另外在定义model时，配置的toObejct属性也是用于将document转换为js对象，可参考《在egg框架中使用MongoDB作为数据库》--4.定义model
        users.forEach(item => {
          item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
          item.updatedAt = moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')
        })
        // 统计按查询条件获取到的数据条数
        const total = await ctx.model.User.countDocuments(query);
        return successResponse({
          data: {
            list: users,
            pageNum,
            pageSize,
            total
          }
        })
      }

      // 新增和批量新增
      await ctx.model.User.create({
        mobile,
        password,
        nickname
      })
      await ctx.model.User.create([{}, {}, {}...])

      // 修改
      // 第一个参数表示查询条件，第二个参数表示需要修改的属性
      await ctx.model.User.update({
        _id: userId
      }, {
        password
      })

      // 批量删除
      // $in表示匹配在数组之内的所有项
      await ctx.model.User.deleteMany({
        _id: {
          $in: userIds
        }
      });</pre>
  </div>
</template>
