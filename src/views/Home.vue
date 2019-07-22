<template>
  <div class="home-wrapper">
    <a-collapse>
      <a-collapse-panel header="封装axios请求数据">
        <request-doc />
      </a-collapse-panel>
      <a-collapse-panel header="将扁平数据格式转换为树状数据结构">
        <tree-data />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import RequestDoc from "@/components/Request";
import TreeData from "@/components/TreeData";
export default {
  name: "home",
  components: {
    RequestDoc,
    TreeData
  }
};
</script>

<style lang="less">
.home-wrapper {
  padding: 10px 30px;

  .ant-collapse-content-box {
    background: #f1f7ee;

    pre {
      margin: 0;
    }
  }
}
</style>