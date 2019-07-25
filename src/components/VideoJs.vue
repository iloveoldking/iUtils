<template>
  <div>
    <pre>
      // css
      // 设置暂停时显示播放按钮
      .vjs-paused .vjs-big-play-button,
      .vjs-paused.vjs-has-started .vjs-big-play-button {
        display: block;
      }
      // 设置控制栏显示总时长，videoJs默认在进度条右侧显示视频剩余时长
      .video-js .vjs-time-control {
        display: block;
        padding: 0 0.2em;
      }
      .video-js .vjs-remaining-time {
        display: none;
      }
      .vjs-time-control.vjs-time-divider {
        min-width: 1px;
      }

      // html
      &lt;video id='my-player' class='video-js vjs-default-skin vjs-big-play-centered'&gt;&lt;/video&gt;

      // javascript
      videojs('my-player', {
        autoplay: false,
        preload: 'auto',
        controls: true,
        // 设置中文还需要引用一个附带语言包zh-CN.js
        language: 'zh-CN',
        sources: [{
          src: 'http://.............mp4',
          type: 'video/mp4'
        }],
        poster: 'http://.............jpg'
      })</pre>
  </div>
</template>

<script>
export default {
  name: "videoJs"
};
</script>