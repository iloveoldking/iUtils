<template>
  <div>
    <pre>
      $.fn.extend({
        // post请求数据
        post: function (url, dataObject, fn) {
          jQuery.support.cors = true;
          var ajax = $.ajax({
            headers: {
              Accept: "application/json; charset=utf-8"
            },
            type: "POST",
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            url: url,
            data: dataObject,
            dataType: 'json',
            timeout: 60 * 1000,
            success: function (data) {
              fn(data);
            }
            complete: function (XMLHttpRequest, status) {
              if (status == 'timeout') {
                ajax.abort();
              }
            }
          });
        },
        // 上传文件ajax，data为FormData格式
        uploadAjax: function (url, dataObject, fn) {
          $.ajax({
            headers: {
              Accept: "application/json; charset=utf-8"
            },
            type: "POST",
            url: url,
            data: dataObject,
            processData: false,
            dataType: 'json',
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true,
            contentType: false,
            success: function (data) {
              fn(data);
            }
          });
        }
      })</pre>
  </div>
</template>

<script>
export default {
  name: "jqueryAjax"
};
</script>