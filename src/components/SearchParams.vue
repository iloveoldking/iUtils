<template>
  <div>
    <pre>
        // 这里的window.location.search.substr(1)可以换成其他任意待解析的字符串
        function searchParams(key) {
          var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          return r == null ? null : decodeURI(r[2]);
        }</pre>
  </div>
</template>

<script>
export default {
  name: "searchParams"
};
</script>