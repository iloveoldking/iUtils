<template>
  <div>
    <pre>
      var setting = {
        view: {
          dblClickExpand: false,
          showLine: false,
          selectedMulti: false,
          showIcon: false
        },
        data: {
          simpleData: {
            enable: true,
            idKey: "DepartID",
            pIdKey: "ParentDepartID"
          },
          key: {
            name: "DepartName"
          }
        },
        callback: {
          onClick: function (event, treeId, treeNode) {
            
          }
        }
      };
      $(document).ready(function () {
        $.fn.zTree.init($("#ztree"), setting, zNodes);
      });</pre>
  </div>
</template>
