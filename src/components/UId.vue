<template>
  <div>
    <pre>
      // 生成随机UID
      var genUid = function {
        var soup_ = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var soupLength = soup_.length
        var id = []
        for (var i = 0; i &lt; 20; i++) {
          id[i] = soup_.charAt(Math.random() * soupLength)
        }
        return id.join('')
      }</pre>
  </div>
</template>

<script>
export default {
  name: "uID"
};
</script>