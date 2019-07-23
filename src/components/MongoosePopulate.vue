<template>
  <div>
    <pre>
      <a href="https://github.com/iloveoldking/blog/tree/master/blog-server" target="_blank"><a-icon type="github" /> blog项目</a>

      // app/model/article.js
      const schemaFields = {
        user: {
          type: Schema.ObjectId,
          ref: 'User'
        },
        title: {
          type: String,
        },
        content: {
          type: String,
        }
      }

      // app/service/article.js
      const articles = await ctx.model.Article.find()
      await ctx.model.Article.populate(articles, {
        path: 'user',
        select: 'nickname photo'
      })
      });</pre>
  </div>
</template>

<script>
export default {
  name: "mongoosePopulate"
};
</script>