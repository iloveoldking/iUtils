<template>
  <div>
    <pre>
      父级元素设置padding-bottom：高/宽，子集元素则可以按照宽高比自适应
      .parent {
        width: 360px;
        height: 0;
        padding-bottom: 56.25%;
        position: relative;
      }
      .child {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }</pre>
  </div>
</template>

<script>
export default {
  name: "autoHeight"
};
</script>