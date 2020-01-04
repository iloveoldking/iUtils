<template>
  <div>
    <pre>
      $("#input").on('change', function (e) {
        e = e || window.event;
        var file = e.target.files[0];
        if (!file) {
          return false;
        }
        if (file.type.indexOf('image/jpeg') == -1 && file.type.indexOf('image/png') == -1) {
          $.fn.alert('请上传格式为png、jpg的图片');
          return false;
        }
        if (file.size / 1024 > 250) {
          $.fn.alert('图片文件大小超出限制');
          return false;
        }
        var fileRead = new FileReader();
        fileRead.readAsDataURL(file);
        fileRead.onload = function () {
          console.log(fileRead.result);
        };
      });</pre>
  </div>
</template>
