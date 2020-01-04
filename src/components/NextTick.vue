<template>
  <div>
    <pre>
      vue实现响应式并不是数据发生变化之后DOM立即变化，而是按一定的策略进行DOM更新
      $nextTick是在下次DOM更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick，则可以在回调中获取更新后的DOM，示例：
      methods: {
        example(){
          // 修改数据
          this.message = 'changed'
          // 至此DOM还没有更新
          this.$nextTick( () => {
            // 在回调中DOM已经更新
          })
        }
      }</pre>
  </div>
</template>
