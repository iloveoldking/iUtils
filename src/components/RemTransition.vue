<template>
  <div>
    <pre>
      以750设计稿为例，100vw是设备宽度，除以7.5可以让1rem的大小在750设计稿下等于100px。例如设计稿中标注30px，转换rem单位后需要写成0.3rem
      html {
        font-size: calc(100vw/7.5);
      }</pre>
  </div>
</template>
