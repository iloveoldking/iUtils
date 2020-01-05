<template>
  <div>
    <pre>
      // 常见的代码配置，如果创建的项目中没有自动生成则手动添加对应文件
      .editorconfig
        # http://editorconfig.org
        root = true

        [*]
        indent_style = space
        indent_size = 2
        end_of_line = lf
        charset = utf-8
        trim_trailing_whitespace = true
        insert_final_newline = true

        [*.md]
        trim_trailing_whitespace = false

        [Makefile]
        indent_style = tab

      .prettierrc
        {
          "singleQuote": true,
          "trailingComma": "all",
          "printWidth": 100,
          "overrides": [
            {
              "files": ".prettierrc",
              "options": { "parser": "json" }
            }
          ]
        }</pre>
  </div>
</template>
