<template>
  <div>
    <pre>
      $.fn.extend({
        searchParams: function (name) {
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          return r == null ? null : decodeURI(r[2]);
        }
      });</pre>
  </div>
</template>

<script>
export default {
  name: "searchParams"
};
</script>