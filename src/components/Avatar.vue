<template>
  <a-avatar class="com-avatar">{{text}}</a-avatar>
</template>

<script>
export default {
  name: "avatar",
  props: ["text"]
};
</script>

<style lang="less" scoped>
.com-avatar {
  background-color: #ffa662;
}
</style>
