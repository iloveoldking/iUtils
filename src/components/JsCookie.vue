<template>
  <div>
    <pre>
      设置cookie：
      Cookies.set('name', 'value', { expires: 7 });

        expires可以是数字，表示多少天之后失效，或者为Date实例，表示指定日期失效，更多关于cookie有效期的设定：
        1.15分钟
        var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
        Cookies.set('foo', 'bar', {
            expires: inFifteenMinutes
        });
        2.15分钟
        var in15Minutes = 1/96;
        Cookies.set('foo', 'bar', {
            expires: in15Minutes
        });
        3.半天
        var inHalfADay = 0.5;
        Cookies.set('foo', 'bar', {
            expires: inHalfADay
        });
        4.指定某天
        var specifyDay = new Date('2019-08-08 08:08:08');
        Cookies.set('foo', 'bar', {
            expires: specifyDay
        });

      读取cookie：
      Cookies.get('name'); // => 'value'
      Cookies.get('nothing'); // => undefined
      Cookies.getJSON('user'); // => {name: 'jack'}

      移除cookie：
      Cookies.remove('name');</pre>
  </div>
</template>
