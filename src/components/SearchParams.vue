<template>
  <div>
    <pre>
      $.fn.extend({
        searchParams: function (keyword) {
          var paramsArray = location.search.slice(1).split('&');
          var paramsObject = {};
          paramsArray.forEach(function (item, index) {
            var key = item.split('=')[0];
            var value = item.split('=')[1] || null;
            paramsObject[key] = value;
          })
          return paramsObject[keyword]
        }
      });</pre>
  </div>
</template>

<script>
export default {
  name: "searchParams"
};
</script>