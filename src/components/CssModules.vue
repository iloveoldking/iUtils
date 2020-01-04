<template>
  <div>
    <pre>
      <strong style="color: red;"><a-icon type="info-circle" /> 由于启用了css modules，如果不加:global{}包裹，样式覆盖则无法生效</strong>
      
      .loginCard {
        width: 360px;

        :global {
          .ant-card-body {
            padding: 20px 15px;
          }
        }
      }</pre>
  </div>
</template>
