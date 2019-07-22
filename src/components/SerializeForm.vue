<template>
  <div>
    <pre>
      // var params = $("#form").serializeForm()
      $.fn.extend({
        serializeForm: function () {
          var result = {};
          var extend = function (i, element) {
            var node = result[element.name];
            if ('undefined' !== typeof node && node !== null) {
              if ($.isArray(node)) {
                node.push(element.value);
              } else {
                result[element.name] = [node, element.value];
              }
            } else {
              result[element.name] = element.value;
            }
          };
          $.each(this.serializeArray(), extend);
          return result;
        }
      });</pre>
  </div>
</template>

<script>
export default {
  name: "serializeForm"
};
</script>