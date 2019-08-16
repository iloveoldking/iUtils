<template>
  <div>
    <pre>
      <a href="https://bootstrap-table.com/docs/api/table-options/" target="_blank">bootstrap-table文档</a>

      // 事件绑定
      window.operateEvents = {
        'click .edit-icon': function (e, value, row, index) {
          
        },
        'click .delete-icon': function (e, value, row, index) {
          
        }
      };
    </pre>
    <pre>
      // 构建表格
      $('#data-table').bootstrapTable({
        method: 'post',
        url: rootUrl + '/depart/selDepartList',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        ajaxOptions: {
          headers: {
            token: token
          }
        },
        responseHandler: function (res) {
          if (res.statusCode == 200 && res.data.list && res.data.list.length > 0) {
            return {
              rows: res.data.list,
              total: res.data.total
            }
          } else {
            if (res.statusCode == 402021) {
              parent.location.href = 'login.html'
            }
            return {
              rows: [],
              total: 0
            }
          }
        },
        locale: 'zh-CN',
        pagination: true,
        paginationLoop: false,
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50, 100],
        sidePagination: 'server',
        queryParamsType: '',
        striped: true,
        queryParams: function (params) {
          return {
            pageNum: params.pageNumber,
            pageSize: params.pageSize,
            departId: $('.current-org-id').val(),
            roomName: $('.room-name').val()
          }
        },
        columns: [{
          checkbox: true,
          visible: true
        }, {
          field: 'roomName',
          title: '会议室名称'
        }, {
          field: 'startTime',
          title: '会议开始时间'
        }, {
          field: 'endTime',
          title: '会议结束时间'
        }, {
          field: 'op',
          title: '操作',
          formatter: function (value, row, index) {
            var e = '&lt;div class="edit-icon" title="编辑"&gt;&lt;/div&gt;';
            var d = '&lt;div class="delete-icon" title="删除"&gt;&lt;/div&gt;';
            return e + d;
          },
          events: operateEvents
        }]
    });</pre>
  </div>
</template>

<script>
export default {
  name: "bootstrapTable"
};
</script>