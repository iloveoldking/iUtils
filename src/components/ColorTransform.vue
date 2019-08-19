<template>
  <div>
    <pre>
      // RGB色值生成16进制色值
      function rgbToHex (r, g, b) {
        r = Math.max(Math.min(Number(r), 100), 0) * 2.55
        g = Math.max(Math.min(Number(g), 100), 0) * 2.55
        b = Math.max(Math.min(Number(b), 100), 0) * 2.55
        r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2)
        g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2)
        b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2)
        return '#' + r + g + b
      }
      rgbToHex(100, 50, 0) => "#ff7f00"

      // 16进制色值生成RGB色值
      function hexToRgb(hex) {
        opacity = opacity || 100
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return 'rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')';
      }
      hexToRgb('#00ff00') => "rgb(0, 255, 0)"</pre>
  </div>
</template>

<script>
export default {
  name: "colorTransform"
};
</script>