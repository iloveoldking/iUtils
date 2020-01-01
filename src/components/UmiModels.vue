<template>
  <div>
    <pre>
      // 在config.js配置中开启immer配置可以简化models中reducers对state的操作
      dva: {
        immer: true
      }
      // 开启immer之前，需要return一个新对象
      changeAge(state, action) {
        return {
          ...state,
          age: action.payload
        }
      }
      // 开启immer之后，这里可以直接对state的值进行修改
      <strong style="color: red;"><a-icon type="info-circle" /> 注意这里是有坑的，一定不要对state结构赋值，然后再对需要修改的数据进行修改，这样无法生效，一定要按state.xxx = xxx这种方案</strong>
      <strong style="color: red;"><a-icon type="close-circle" /> 错误：</strong>
      changeAge({ age }, { payload }) {
        age = payload
      }
      <strong style="color: green;"><a-icon type="check-circle" /> 正确：</strong>
      changeAge(state, { payload }) {
        state.age = payload
      }

      /**
       * 一个完整的models写法
       * namespace如果写了，那么models的namespace将以此处为准，如果没写则自动以models的文件名作为namespace
       * effects包含call和put两个常用操作
       * call用于调用函数，并将参数传入到函数之中
       * put用于调用reducers中的方法，相当于组件中的dispatch，只不过在这里不需要添加namespace前缀
       * 注意call和put返回的都不是普通的对象，是redux-saga对象，所以一定要用yield
       */
      export default {
        namespace: 'user',

        state: {
          age: 18
        },

        reducers: {
          changeAge(state, action) {
            // 一定不要对state进行结构赋值
            state.age = action.payload
          }
        },

        effects: {
          * queryAge(action, effects) {
            const res = yield effects.call(queryAge, action.payload);
            yield effects.put({
              type: 'changeAge',
              payload: res.data
            })
          }
        }
      }</pre>
  </div>
</template>

<script>
export default {
  name: "umiConnect"
};
</script>