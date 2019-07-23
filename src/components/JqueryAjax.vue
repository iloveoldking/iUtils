<template>
  <div>
    <pre>
      $.fn.extend({
        // post请求数据
        post: function (url, data, callback) {
          jQuery.support.cors = true;
          var ajax = $.ajax({
            headers: {
              Accept: "application/json; charset=utf-8"
            },
            type: "POST",
            url: url,
            // 如果后台需要传递FormData格式
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: data,
            // 如果后台需要传递json格式
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            dataType: 'json',
            timeout: 60 * 1000,
            success: function (response) {
              callback(response);
            }
            complete: function (XMLHttpRequest, status) {
              if (status == 'timeout') {
                ajax.abort();
              }
            }
          });
        },
        // 上传文件ajax，data为FormData格式
        upload: function (url, data, callback) {
          $.ajax({
            headers: {
              Accept: "application/json; charset=utf-8"
            },
            type: "POST",
            url: url,
            data: data,
            processData: false,
            dataType: 'json',
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true,
            contentType: false,
            success: function (response) {
              callback(response);
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