<template>
  <div class="home-wrapper">
    <a-collapse>
      <a-collapse-panel header="封装axios请求数据">
        <request-doc />
      </a-collapse-panel>
      <a-collapse-panel header="将扁平数据格式转换为树状数据结构">
        <tree-data />
      </a-collapse-panel>
      <a-collapse-panel header="less报错解决方案">
        <less-error />
      </a-collapse-panel>
      <a-collapse-panel header="vue项目打包注意事项">
        <vue-build />
      </a-collapse-panel>
      <a-collapse-panel header="清除浮动clearfix">
        <clear-fix />
      </a-collapse-panel>
      <a-collapse-panel header="bootstrapTable构建方式">
        <bootstrap-table />
      </a-collapse-panel>
      <a-collapse-panel header="form表单信息提取功能">
        <serialize-form />
      </a-collapse-panel>
      <a-collapse-panel header="封装jquery中的ajax请求和ajax上传文件">
        <jquery-ajax />
      </a-collapse-panel>
      <a-collapse-panel header="基于jquery封装的简版alert提示组件">
        <jquery-alert />
      </a-collapse-panel>
      <a-collapse-panel header="解析url字符串中参数的方法">
        <search-params />
      </a-collapse-panel>
      <a-collapse-panel header="正则语法以及常见表达式">
        <regular-expression />
      </a-collapse-panel>
      <a-collapse-panel header="初始化zTree插件">
        <init-ztree />
      </a-collapse-panel>
      <a-collapse-panel header="file标签获取文件以及base64格式数据">
        <file-read />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import RequestDoc from "@/components/Request";
import TreeData from "@/components/TreeData";
import LessError from "@/components/LessError";
import VueBuild from "@/components/VueBuild";
import ClearFix from "@/components/ClearFix";
import BootstrapTable from "@/components/BootstrapTable";
import SerializeForm from "@/components/SerializeForm";
import JqueryAjax from "@/components/JqueryAjax";
import JqueryAlert from "@/components/JqueryAlert";
import SearchParams from "@/components/SearchParams";
import RegularExpression from "@/components/RegularExpression";
import InitZtree from "@/components/InitZtree";
import FileRead from "@/components/FileRead";
export default {
  name: "home",
  components: {
    RequestDoc,
    TreeData,
    LessError,
    VueBuild,
    ClearFix,
    BootstrapTable,
    SerializeForm,
    JqueryAjax,
    JqueryAlert,
    SearchParams,
    RegularExpression,
    InitZtree,
    FileRead
  }
};
</script>

<style lang="less">
.home-wrapper {
  padding: 10px 30px;
  .ant-collapse {
    .ant-collapse-header {
      color: #da5a5a;
    }

    .ant-collapse-content-box {
      background: #f7fdf4;

      pre {
        margin: 0;
        font-weight: bold;
      }
    }
  }
}
</style>