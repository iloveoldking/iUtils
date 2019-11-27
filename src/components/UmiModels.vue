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
      changeAge(state, action) {
        state.age = action.payload
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