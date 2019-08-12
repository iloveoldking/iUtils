<template>
  <div>
    <pre>
      <strong style="color: orange;"><a-icon type="info-circle" /> 只提供简单的提示，如果需求比较花哨，请自行寻找别的解决方案</strong>

      // 如果整体架构是iframe形式则需要将提示dom插入到父级页面的body中，否则不需要parent.document

      /* 自定义alert样式 */
      @keyframes notice {
        0% {
          top: 0
        }

        25% {
          top: 34px;
        }

        75% {
          top: 26px;
        }

        100% {
          top: 30px
        }
      }

      .ant-message-notice {
        position: fixed;
        z-index: 10086;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border: 1px solid rgba(0, 191, 193, 0.5);
        padding: 12px 15px;
        background: #edf2fc;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 191, 193, 0.1);
        animation: notice 0.2s linear;
      }

      .ant-message-notice span.ant-message-content {
        display: inline-block;
        max-width: 640px;
        word-break: break-all;
        line-height: 24px;
      }

      .ant-message-notice .icon.info {
        margin: 0 10px 0 0;
        fill: #00bfc1;
      }

      .ant-message-notice .icon.close-alert {
        height: 24px;
        fill: #888;
        margin: 0 0 0 10px;
        cursor: pointer;
      }

      .ant-message-notice .icon.close-alert:hover {
        fill: #f00;
      }

      /* 自定义alert扩展 */
      $.fn.extend({
        alert: function (msg) {
          if (window.jqueryAlertTimer) {
            clearTimeout(window.jqueryAlertTimer)
          }
          window.jqueryAlertTimer = setTimeout(function () {
            $('.ant-message-notice').remove()
          }, 3000)
          $('.ant-message-notice').remove()
          $('body').append(
            '&lt;div class="ant-message-notice"&gt;&lt;svg t="1562118244148" class="icon info" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1807" width="24" height="24"&gt;&lt;path d="M547.7 333c0-24.7-20-44.7-44.7-44.7s-44.7 20-44.7 44.7c0 24.7 20 44.7 44.7 44.7C527.7 377.7 547.7 357.7 547.7 333zM452.5 702.8c8.1 7 18.5 8.1 26.2 7.2 4.7-0.6 9.8-2 11.7-2.5l75.4-25.5c16.2-5.4 24.1-16.1 18.3-34.9-5.8-16.2-19.3-20.6-32.4-17.4L510 641.3l38.8-183.5c1.7-8.2 0.4-21-8.2-30.2-7.8-8.3-20.7-9.6-28.9-7.5L440 444.4c-13 3.3-20 20.2-16.5 33.2 4.7 17.3 18.2 23.4 31.2 20.1l31.4-9.5-40 191C444.3 687.3 446.5 697.1 452.5 702.8z" p-id="1808" &gt;&lt;/path&gt;&lt;path d="M885.76 498.176c0 213.504-173.056 386.56-386.56 386.56S112.64 711.68 112.64 498.176s173.056-386.56 386.56-386.56S885.76 284.672 885.76 498.176zM499.712 169.984c-175.616 0-329.728 154.112-329.728 329.216 0 182.272 147.456 329.728 329.728 329.728s329.728-147.456 329.728-329.728C829.952 325.12 677.888 169.984 499.712 169.984z" p-id="1809" &gt;&lt;/path&gt;&lt;/svg&gt;' +
            '&lt;span class="ant-message-content"&gt;' + msg + '&lt;/span&gt;' +
            '&lt;svg t="1562119707312" class="icon close-alert" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3290" width="12" height="12"&gt;&lt;path d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z" p-id="3291"&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/div&gt;'
          )
          $('.icon.close-alert').click(function () {
            $('.ant-message-notice').remove()
            clearTimeout(window.jqueryAlertTimer)
          })
        }
      });</pre>
  </div>
</template>

<script>
  export default {
    name: "jqueryAlert"
  };
</script>