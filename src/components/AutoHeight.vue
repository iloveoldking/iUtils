<template>
  <div>
    <pre>
      1.伪元素实现，伪元素设置padding-bottom：高/宽，指定元素则可以按照宽高比自适应
      .auto-height {
        width: 40%;
      }
      .auto-height::after {
        content: '';
        display: block;
        padding-bottom: 56.25%;
      }

      2.父子元素实现，父级元素设置padding-bottom：高/宽，子集元素则可以按照宽高比自适应
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
        left: 0;
      }</pre>
  </div>
</template>

<script>
export default {
  name: "autoHeight"
};
</script>